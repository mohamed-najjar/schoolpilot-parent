// @vitest-environment node
import { expect, test, vi, afterEach } from "vitest";
vi.mock("server-only", () => ({}));
vi.mock("@/config/server", () => ({
  allowedSchoolEndpoint: (raw: string) => raw === "http://school.test",
  serverConfig: () => ({
    control: "http://control.test",
    schools: ["http://school.test"],
  }),
}));
import { schools } from "@/lib/api/server";
import type { Session } from "@/lib/auth/session";
afterEach(() => vi.unstubAllGlobals());
const session = (token: string) => ({ accessToken: token }) as Session;
test("shares only in-flight discovery per access token; revocation is fresh after completion", async () => {
  let finish!: (response: Response) => void;
  const fetch = vi
    .fn()
    .mockImplementationOnce(
      () =>
        new Promise<Response>((r) => {
          finish = r;
        }),
    )
    .mockResolvedValue(new Response(JSON.stringify({ items: [] })));
  vi.stubGlobal("fetch", fetch);
  const a = schools(session("identity-a"));
  const overlap = schools(session("identity-a"));
  expect(a).toBe(overlap);
  finish(
    new Response(
      JSON.stringify({
        items: [{ id: "a", endpoint_url: "http://school.test" }],
      }),
    ),
  );
  expect(await a).toHaveLength(1);
  expect(await schools(session("identity-a"))).toEqual([]);
  expect(fetch).toHaveBeenCalledTimes(2);
});
test("does not share identities or retain failed decisions", async () => {
  const fetch = vi
    .fn()
    .mockImplementation(
      async () => new Response(JSON.stringify({ items: [] })),
    );
  vi.stubGlobal("fetch", fetch);
  await Promise.all([schools(session("one")), schools(session("two"))]);
  expect(fetch).toHaveBeenCalledTimes(2);
  fetch.mockImplementationOnce(async () => new Response("", { status: 503 }));
  await expect(schools(session("failed"))).rejects.toMatchObject({
    status: 503,
  });
  await expect(schools(session("failed"))).resolves.toEqual([]);
});
