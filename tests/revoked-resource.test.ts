// @vitest-environment node
import { afterEach, expect, test, vi } from "vitest";
import { NextRequest } from "next/server";
vi.mock("server-only", () => ({}));
vi.mock("@/lib/auth/session", () => ({
  currentSession: async () => ({
    session: { accessToken: "synthetic-revocation-token" },
  }),
  SessionExpired: class SessionExpired extends Error {},
}));
vi.mock("@/config/server", () => ({
  serverConfig: () => ({
    control: "http://control.test",
    origin: "http://localhost:3002",
  }),
  allowedSchoolEndpoint: (url: string) => url === "http://school.test",
}));
import { GET } from "@/app/api/schools/[schoolId]/[...path]/route";
const schoolId = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const childId = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const reply = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status });
function upstream(member: boolean, guardian: boolean) {
  const fetch = vi.fn(async (url: string) => {
    if (url === "http://control.test/api/v1/schools")
      return reply({
        items: member
          ? [{ id: schoolId, endpoint_url: "http://school.test" }]
          : [],
      });
    if (url === "http://school.test/api/v1/me/workspaces")
      return reply({
        school_id: schoolId,
        management: true,
        teacher: true,
        student: false,
        guardian,
      });
    if (url === "http://school.test/api/v1/guardian/children/" + childId)
      return reply({ code: "forbidden" }, 403);
    throw new Error("Unexpected upstream resource");
  });
  vi.stubGlobal("fetch", fetch);
  return fetch;
}
function get(path: string) {
  return GET(
    new NextRequest(`http://localhost:3002/api/schools/${schoolId}/${path}`),
    {
      params: Promise.resolve({ schoolId, path: path.split("/") }),
    },
  );
}
afterEach(() => vi.unstubAllGlobals());
test("conceals a protected child after current guardian capability is revoked without forwarding private data", async () => {
  const fetch = upstream(true, false);
  const response = await get("guardian/children/" + childId);
  expect(response.status).toBe(404);
  expect(await response.json()).toEqual({ code: "not_found" });
  expect(response.headers.get("Cache-Control")).toBe("no-store");
  expect(fetch.mock.calls.map(([url]) => url)).toEqual([
    "http://control.test/api/v1/schools",
    "http://school.test/api/v1/me/workspaces",
  ]);
});
test("keeps an undiscovered school forbidden instead of claiming a local resource observation", async () => {
  const fetch = upstream(false, false);
  expect((await get("guardian/children/" + childId)).status).toBe(403);
  expect(fetch).toHaveBeenCalledTimes(1);
});
test("keeps non-resource guardian operations forbidden when capability is absent", async () => {
  const fetch = upstream(true, false);
  expect((await get("guardian/profile")).status).toBe(403);
  expect(fetch).toHaveBeenCalledTimes(2);
});
test("preserves an actual resource-service denial for a currently authorized guardian", async () => {
  const fetch = upstream(true, true);
  expect((await get("guardian/children/" + childId)).status).toBe(403);
  expect(fetch).toHaveBeenCalledTimes(3);
});
