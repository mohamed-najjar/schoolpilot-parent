// @vitest-environment node
import { beforeEach, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
const fake = vi.hoisted(() => ({
  backend: vi.fn(),
  session: {
    accessToken: "synthetic-access",
    refreshToken: "synthetic-refresh",
    idToken: "synthetic-id",
    subject: "verified-subject",
    expiresAt: Date.now() + 60000,
    absoluteExpiry: Date.now() + 600000,
  },
  identity: {
    issuer: "https://idp.example.invalid/realms/schoolos",
    subject: "verified-subject",
  },
  school: "12345678-1234-4234-8234-123456789abc",
  token: "12345678-1234-4234-8234-123456789abc." + "A".repeat(43),
}));
vi.mock("@/lib/auth/session", () => ({
  currentSession: async () => ({
    id: "opaque-private-session",
    session: fake.session,
  }),
  SessionExpired: class extends Error {},
}));
vi.mock("@/config/server", () => ({
  serverConfig: () => ({
    origin: "http://localhost:3000",
    control: "http://localhost:8083",
  }),
  allowedSchoolEndpoint: (raw: string) => raw === "http://localhost:18042",
}));
vi.mock("@/lib/api/server", () => ({
  backend: fake.backend,
  APIError: class extends Error {
    constructor(public status: number) {
      super("Backend request failed");
    }
  },
  authorizedSchool: async () => ({
    id: fake.school,
    endpoint_url: "http://localhost:18042",
  }),
}));
import {
  acceptanceKey,
  acceptInvitation,
  recordPortalAccess,
} from "@/lib/onboarding/server";
import { GET, POST } from "@/app/api/onboarding/[action]/route";
beforeEach(() => {
  fake.backend.mockReset();
  fake.backend.mockImplementation(async (url: string) => {
    if (url.endsWith("/onboarding/identity")) return fake.identity;
    if (url.endsWith("/onboarding/resolve"))
      return {
        school_id: fake.school,
        endpoint_url: "http://localhost:18042",
        kind: "guardian",
      };
    return { kind: "guardian", synchronization_status: "queued" };
  });
});
it("derives stable exact-identity acceptance keys without storing the secret", () => {
  const first = acceptanceKey(fake.token, fake.identity, fake.school);
  expect(first).toMatch(/^[a-f0-9]{64}$/);
  expect(first).toBe(acceptanceKey(fake.token, fake.identity, fake.school));
  expect(first).not.toContain(fake.token);
  expect(first).not.toBe(
    acceptanceKey(
      fake.token,
      { ...fake.identity, issuer: "https://foreign.invalid" },
      fake.school,
    ),
  );
  expect(first).not.toBe(
    acceptanceKey(
      fake.token,
      { ...fake.identity, subject: "another-subject" },
      fake.school,
    ),
  );
});
it("resolves only through Control and sends acceptance to its allowed school using the same session", async () => {
  const first = await acceptInvitation(fake.session, fake.token);
  const second = await acceptInvitation(fake.session, fake.token);
  expect(first).toEqual(second);
  expect(first).toEqual({
    school_id: fake.school,
    kind: "guardian",
    synchronization_status: "queued",
  });
  const writes = fake.backend.mock.calls.filter((c) =>
    (c[0] as string).endsWith("/onboarding/accept"),
  );
  expect(writes).toHaveLength(2);
  expect(writes[0][0]).toBe("http://localhost:18042/api/v1/onboarding/accept");
  expect(writes[0][1]).toBe(fake.session);
  expect(writes[0][2].headers["Idempotency-Key"]).toBe(
    writes[1][2].headers["Idempotency-Key"],
  );
  expect(JSON.stringify(first)).not.toContain(fake.token);
});
it("cannot redirect an invitation to a browser-selected or unlisted endpoint", async () => {
  fake.backend.mockImplementation(async (url: string) =>
    url.endsWith("/identity")
      ? fake.identity
      : {
          school_id: fake.school,
          endpoint_url: "http://metadata.internal/latest",
          kind: "guardian",
        },
  );
  await expect(
    acceptInvitation(fake.session, fake.token),
  ).rejects.toMatchObject({ status: 503 });
  expect(
    fake.backend.mock.calls.some((c) =>
      (c[0] as string).startsWith("http://metadata.internal"),
    ),
  ).toBe(false);
});
it("requires same-origin CSRF and rejects extra fields, query secrets and oversized requests", async () => {
  const call = (
    body: unknown,
    origin: string,
    url = "http://localhost:3000/api/onboarding/accept",
  ) =>
    POST(
      new NextRequest(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", origin },
        body: JSON.stringify(body),
      }),
      { params: Promise.resolve({ action: "accept" }) },
    );
  expect(
    (await call({ token: fake.token }, "http://evil.invalid")).status,
  ).toBe(403);
  expect(
    (
      await call(
        { token: fake.token, endpoint: "http://foreign.invalid" },
        "http://localhost:3000",
      )
    ).status,
  ).toBe(400);
  expect(
    (
      await call(
        { token: fake.token },
        "http://localhost:3000",
        "http://localhost:3000/api/onboarding/accept?token=forbidden",
      )
    ).status,
  ).toBe(400);
  expect(
    (await call({ token: "x".repeat(2048) }, "http://localhost:3000")).status,
  ).toBe(413);
  expect(fake.backend).not.toHaveBeenCalled();
  const get = await GET(
    new NextRequest("http://localhost:3000/api/onboarding/accept"),
    { params: Promise.resolve({ action: "accept" }) },
  );
  expect(get.status).toBe(404);
});
it("records portal access with a server-pinned workspace and hashed per-login key", async () => {
  await recordPortalAccess("private-session", fake.session, fake.school);
  const call = fake.backend.mock.calls.at(-1)!;
  expect(call[2].headers["X-SchoolPilot-Workspace"]).toBe("guardian");
  expect(JSON.parse(call[2].body)).toEqual({ portal: "parent" });
  expect(call[2].headers["Idempotency-Key"]).toMatch(/^[a-f0-9]{64}$/);
  expect(call[2].headers["Idempotency-Key"]).not.toContain("private-session");
});
