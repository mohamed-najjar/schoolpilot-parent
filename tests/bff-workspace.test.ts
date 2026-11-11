// @vitest-environment node
import { expect, test, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";
vi.mock("@/lib/auth/session", () => ({
  currentSession: async () => ({
    session: { accessToken: "server-only-token" },
  }),
  SessionExpired: class extends Error {},
}));
vi.mock("@/lib/api/server", () => ({
  authorizedSchool: async () => ({ endpoint_url: "http://school.test" }),
  APIError: class extends Error {
    status = 403;
  },
}));
vi.mock("@/config/server", () => ({
  serverConfig: () => ({ origin: "http://localhost:3002" }),
}));
import { GET, POST } from "@/app/api/schools/[schoolId]/[...path]/route";
const schoolId = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
afterEach(() => vi.unstubAllGlobals());
test("pins guardian context, ignores browser role headers and performs one school API request", async () => {
  const fetch = vi
    .fn()
    .mockResolvedValue(
      new Response(JSON.stringify({ items: [] }), { status: 200 }),
    );
  vi.stubGlobal("fetch", fetch);
  const response = await GET(
    new NextRequest(
      "http://localhost:3002/api/schools/" + schoolId + "/guardian/children",
      { headers: { "X-SchoolPilot-Workspace": "management" } },
    ),
    { params: Promise.resolve({ schoolId, path: ["guardian", "children"] }) },
  );
  expect(response.status).toBe(200);
  expect(response.headers.get("cache-control")).toBe("no-store");
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch.mock.calls[0][1].headers).toMatchObject({
    "X-SchoolPilot-Workspace": "guardian",
    Authorization: "Bearer server-only-token",
  });
});
test("forwards a current backend denial instead of caching earlier capability decisions", async () => {
  const fetch = vi
    .fn()
    .mockResolvedValue(
      new Response(JSON.stringify({ code: "forbidden" }), { status: 403 }),
    );
  vi.stubGlobal("fetch", fetch);
  const response = await GET(
    new NextRequest(
      "http://localhost:3002/api/schools/" + schoolId + "/guardian/children",
    ),
    { params: Promise.resolve({ schoolId, path: ["guardian", "children"] }) },
  );
  expect(response.status).toBe(403);
});
test("rejects forged-origin writes before forwarding", async () => {
  const fetch = vi.fn();
  vi.stubGlobal("fetch", fetch);
  const response = await POST(
    new NextRequest(
      "http://localhost:3002/api/schools/" + schoolId + "/conversations",
      {
        method: "POST",
        headers: {
          Origin: "http://evil.test",
          "Content-Type": "application/json",
        },
        body: "{}",
      },
    ),
    { params: Promise.resolve({ schoolId, path: ["conversations"] }) },
  );
  expect(response.status).toBe(403);
  expect(fetch).not.toHaveBeenCalled();
});
test("forwards guardian absence reporting with a fixed workspace and the original idempotency key", async () => {
  const body = {
    student_id: schoolId,
    starts_on: "2026-11-12",
    ends_on: "2026-11-14",
    explanation: "Synthetic / تجريبي",
  };
  const fetch = vi
    .fn()
    .mockResolvedValue(
      new Response(JSON.stringify({ id: schoolId, status: "submitted" }), {
        status: 201,
      }),
    );
  vi.stubGlobal("fetch", fetch);
  const response = await POST(
    new NextRequest(
      "http://localhost:3002/api/schools/" + schoolId + "/absence-reports",
      {
        method: "POST",
        headers: {
          Origin: "http://localhost:3002",
          "Content-Type": "application/json",
          "Idempotency-Key": "same-report-key",
          "X-SchoolPilot-Workspace": "management",
        },
        body: JSON.stringify(body),
      },
    ),
    { params: Promise.resolve({ schoolId, path: ["absence-reports"] }) },
  );
  expect(response.status).toBe(201);
  expect(fetch.mock.calls[0][1].headers).toMatchObject({
    "X-SchoolPilot-Workspace": "guardian",
    "Idempotency-Key": "same-report-key",
  });
  expect(
    JSON.parse(new TextDecoder().decode(fetch.mock.calls[0][1].body)),
  ).toEqual(body);
});
test("keeps absence office decisions and forged-origin reports outside guardian authority", async () => {
  const fetch = vi.fn();
  vi.stubGlobal("fetch", fetch);
  for (const [path, origin] of [
    [["absence-reports", schoolId, "review"], "http://localhost:3002"],
    [["absence-reports"], "http://evil.test"],
  ] as const) {
    const r = await POST(
      new NextRequest(
        "http://localhost:3002/api/schools/" + schoolId + "/" + path.join("/"),
        {
          method: "POST",
          headers: { Origin: origin, "Content-Type": "application/json" },
          body: "{}",
        },
      ),
      { params: Promise.resolve({ schoolId, path: [...path] }) },
    );
    expect(r.status).toBe(403);
  }
  expect(fetch).not.toHaveBeenCalled();
});
