// @vitest-environment node
import { afterEach, expect, test, vi } from "vitest";
vi.mock("server-only", () => ({}));
vi.mock("@/config/server", () => ({
  serverConfig: () => ({ control: "http://control.test" }),
  allowedSchoolEndpoint: () => true,
}));
import { backend, authorizedSchool } from "@/lib/api/server";
import type { Session } from "@/lib/auth/session";
const session = (token: string) => ({ accessToken: token }) as Session;
afterEach(() => vi.unstubAllGlobals());
test("coalesces overlapping own metadata without retaining a completed authorization decision", async () => {
  const finishes: ((r: Response) => void)[] = [];
  const fetch = vi.fn(() => new Promise<Response>((r) => finishes.push(r)));
  vi.stubGlobal("fetch", fetch);
  const first = backend("http://a.test/api/v1/me/grants", session("one"));
  const overlap = backend("http://a.test/api/v1/me/grants", session("one"));
  for (const finish of finishes)
    finish(new Response(JSON.stringify({ items: [] })));
  await Promise.all([first, overlap]);
  expect(fetch).toHaveBeenCalledTimes(1);
  fetch.mockImplementation(
    async () => new Response(JSON.stringify({ items: [] })),
  );
  await backend("http://a.test/api/v1/me/grants", session("one"));
  expect(fetch).toHaveBeenCalledTimes(2);
});
test("keeps identities, workspace narrowing and school origins separate", async () => {
  const finishes: ((r: Response) => void)[] = [];
  const fetch = vi.fn(() => new Promise<Response>((r) => finishes.push(r)));
  vi.stubGlobal("fetch", fetch);
  const pending = [
    backend("http://a.test/api/v1/me/workspaces", session("one")),
    backend("http://a.test/api/v1/me/workspaces", session("two")),
    backend("http://a.test/api/v1/me/workspaces", session("one"), {
      headers: { "X-SchoolPilot-Workspace": "teacher" },
    }),
    backend("http://b.test/api/v1/me/workspaces", session("one")),
  ];
  for (const finish of finishes) finish(new Response("{}"));
  await Promise.all(pending);
  expect(fetch).toHaveBeenCalledTimes(4);
});
test("does not coalesce mutations or arbitrary resource reads", async () => {
  const finishes: ((r: Response) => void)[] = [];
  const fetch = vi.fn(() => new Promise<Response>((r) => finishes.push(r)));
  vi.stubGlobal("fetch", fetch);
  const pending = [
    backend("http://a.test/api/v1/me/grants", session("one"), {
      method: "POST",
      body: "{}",
    }),
    backend("http://a.test/api/v1/me/grants", session("one"), {
      method: "POST",
      body: "{}",
    }),
    backend("http://a.test/api/v1/students", session("one")),
    backend("http://a.test/api/v1/students", session("one")),
  ];
  for (const finish of finishes) finish(new Response("{}"));
  await Promise.all(pending);
  expect(fetch).toHaveBeenCalledTimes(4);
});
test("preserves a selected-school rate limit rather than treating it as an outage", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) =>
      url.startsWith("http://control.test")
        ? new Response(
            JSON.stringify({
              items: [{ id: "a", endpoint_url: "http://a.test" }],
            }),
          )
        : new Response("{}", { status: 429, headers: { "Retry-After": "30" } }),
    ),
  );
  await expect(
    authorizedSchool(session("rate-limited"), "a"),
  ).rejects.toMatchObject({ status: 429, retryAfter: "30" });
});
