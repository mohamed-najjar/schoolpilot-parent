// @vitest-environment node
import { beforeEach, describe, it, expect, vi } from "vitest";
const fake = vi.hoisted(() => ({
  cookie: "a".repeat(64),
  session: null as Record<string, unknown> | null,
  leased: false,
  removed: 0,
  refresh: vi.fn(),
}));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: () => (fake.cookie ? { value: fake.cookie } : undefined),
  }),
}));
vi.mock("@/config/server", () => ({ serverConfig: () => ({ secure: true }) }));
vi.mock("@/lib/auth/store", () => ({
  get: async () => fake.session,
  remove: async () => {
    fake.session = null;
    fake.removed++;
  },
  lease: async () => {
    if (fake.leased) return null;
    fake.leased = true;
    return "OK";
  },
  release: async () => {
    fake.leased = false;
  },
  replaceSession: async (_id: string, data: Record<string, unknown>) => {
    if (!fake.session) return null;
    fake.session = data;
    return "OK";
  },
}));
vi.mock("@/lib/auth/oidc", () => ({
  oidcConfig: async () => ({}),
  oidc: { refreshTokenGrant: fake.refresh },
}));
import {
  currentSession,
  SessionExpired,
  sessionCookie,
  cookieOptions,
} from "@/lib/auth/session";
const session = () => ({
  accessToken: "old",
  refreshToken: "refresh",
  idToken: "id",
  subject: "synthetic",
  expiresAt: Date.now() + 120000,
  absoluteExpiry: Date.now() + 3600000,
});
beforeEach(() => {
  fake.cookie = "a".repeat(64);
  fake.session = session();
  fake.leased = false;
  fake.removed = 0;
  fake.refresh.mockReset();
});
describe("Server-side session lifecycle", () => {
  it("uses secure opaque cookies and retains server-only fresh tokens", async () => {
    expect(sessionCookie()).toMatch(/^__Host-/);
    expect(cookieOptions(60)).toMatchObject({
      secure: true,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });
    expect((await currentSession()).session.accessToken).toBe("old");
    expect(fake.refresh).not.toHaveBeenCalled();
  });
  it("rejects missing and absolutely expired sessions", async () => {
    fake.cookie = "";
    await expect(currentSession()).rejects.toBeInstanceOf(SessionExpired);
    fake.cookie = "a".repeat(64);
    fake.session = { ...session(), absoluteExpiry: Date.now() - 1 };
    await expect(currentSession()).rejects.toBeInstanceOf(SessionExpired);
    expect(fake.removed).toBe(1);
  });
  it("serializes concurrent refresh and rotates both tokens", async () => {
    fake.session = { ...session(), expiresAt: 0 };
    fake.refresh.mockImplementation(async () => {
      await new Promise((r) => setTimeout(r, 20));
      return {
        access_token: "fresh",
        refresh_token: "rotated",
        expires_in: 120,
      };
    });
    const values = await Promise.all([
      currentSession(),
      currentSession(),
      currentSession(),
    ]);
    expect(values.map((x) => x.session.accessToken)).toEqual([
      "fresh",
      "fresh",
      "fresh",
    ]);
    expect(fake.refresh).toHaveBeenCalledTimes(1);
    expect(fake.session?.refreshToken).toBe("rotated");
  });
  it("invalidates rejected refresh grants and releases the lease", async () => {
    fake.session = { ...session(), expiresAt: 0 };
    fake.refresh.mockRejectedValue(new Error("invalid_grant"));
    await expect(currentSession()).rejects.toBeInstanceOf(SessionExpired);
    expect(fake.session).toBeNull();
    expect(fake.leased).toBe(false);
  });
  it("does not resurrect a session deleted while refresh was running", async () => {
    fake.session = { ...session(), expiresAt: 0 };
    fake.refresh.mockImplementation(async () => {
      fake.session = null;
      return { access_token: "fresh", expires_in: 120 };
    });
    await expect(currentSession()).rejects.toBeInstanceOf(SessionExpired);
    expect(fake.session).toBeNull();
  });
});

it("waits for a bounded slow refresh instead of failing concurrent requests early", async () => {
  fake.session = { ...session(), expiresAt: 0 };
  fake.refresh.mockImplementation(async () => {
    await new Promise((r) => setTimeout(r, 3200));
    return { access_token: "fresh", refresh_token: "rotated", expires_in: 120 };
  });
  const values = await Promise.all([currentSession(), currentSession()]);
  expect(values.map((x) => x.session.accessToken)).toEqual(["fresh", "fresh"]);
});
