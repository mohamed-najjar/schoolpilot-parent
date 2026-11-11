// @vitest-environment node
import { expect, test, vi } from "vitest";
import { NextRequest } from "next/server";
vi.mock("server-only", () => ({}));
vi.mock("@/lib/auth/session", () => ({
  currentSession: async () => ({
    id: "synthetic-session",
    session: { accessToken: "synthetic-token" },
  }),
  SessionExpired: class SessionExpired extends Error {},
}));
vi.mock("@/lib/api/server", async (original) => {
  const actual = await original<typeof import("@/lib/api/server")>();
  return {
    ...actual,
    authorizedSchool: async () => {
      throw new actual.APIError(429, "27");
    },
  };
});
import { GET } from "@/app/api/schools/[schoolId]/[...path]/route";
test("forwards an actual metadata rate limit with a safe Retry-After and consistent error code", async () => {
  const schoolId = "12345678-1234-4234-8234-123456789abc";
  const response = await GET(
    new NextRequest(
      "http://localhost/api/schools/" + schoolId + "/guardian/children",
    ),
    {
      params: Promise.resolve({
        schoolId,
        path: "guardian/children".split("/"),
      }),
    },
  );
  expect(response.status).toBe(429);
  expect(response.headers.get("Retry-After")).toBe("27");
  expect(response.headers.get("Cache-Control")).toBe("no-store");
  expect((await response.json()).code).toBe("rate_limited");
});
