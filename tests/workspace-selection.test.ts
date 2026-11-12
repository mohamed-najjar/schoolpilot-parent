// @vitest-environment node
import { afterEach, expect, test, vi } from "vitest";
vi.mock("server-only", () => ({}));
vi.mock("@/config/server", () => ({
  serverConfig: () => ({ control: "http://control.test" }),
  allowedSchoolEndpoint: (raw: string) =>
    ["http://a.test", "http://b.test"].includes(raw),
}));
import { schools, authorizedSchool } from "@/lib/api/server";
import type { Session } from "@/lib/auth/session";
const session = { accessToken: "synthetic-role-test" } as Session;
const a = { id: "a", endpoint_url: "http://a.test", name_en: "School A" },
  b = { id: "b", endpoint_url: "http://b.test", name_en: "School B" };
const capabilities = (id: string, allowed: boolean) => ({
  ...{
    school_id: id,
    management: false,
    teacher: false,
    guardian: false,
    student: false,
  },
  guardian: allowed,
});
const reply = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status });
afterEach(() => vi.unstubAllGlobals());
test("filters central affiliation by the actual current portal role and keeps identities separate", async () => {
  const fetch = vi.fn(async (url: string) =>
    url.startsWith("http://control.test")
      ? reply({
          items: [a, b, { id: "evil", endpoint_url: "http://evil.test" }],
        })
      : reply(
          capabilities(
            url.startsWith("http://a.test") ? "a" : "b",
            url.startsWith("http://a.test"),
          ),
        ),
  );
  vi.stubGlobal("fetch", fetch);
  expect((await schools(session)).map((s) => s.id)).toEqual(["a"]);
  expect(fetch.mock.calls.some(([url]) => url.includes("evil"))).toBe(false);
  expect(
    fetch.mock.calls.filter(([url]) => url.endsWith("/me/workspaces")),
  ).toHaveLength(2);
});
test("observes completed revocation immediately without a cached role grant", async () => {
  let enabled = true;
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) =>
      url.startsWith("http://control.test")
        ? reply({ items: [a] })
        : reply(capabilities("a", enabled)),
    ),
  );
  expect(await schools(session)).toHaveLength(1);
  enabled = false;
  expect(await schools(session)).toEqual([]);
  await expect(authorizedSchool(session, "a")).rejects.toMatchObject({
    status: 403,
  });
});
test("distinguishes unavailable and old/misrouted runtimes from an actual role denial", async () => {
  let response: () => Response = () => reply({}, 404);
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) =>
      url.startsWith("http://control.test")
        ? reply({ items: [a] })
        : response(),
    ),
  );
  expect((await schools(session))[0].portal_access).toBe("unavailable");
  await expect(authorizedSchool(session, "a")).rejects.toMatchObject({
    status: 503,
  });
  response = () => reply(capabilities("different-school", true));
  expect((await schools(session))[0].portal_access).toBe("unavailable");
  response = () => reply({ school_id: "a", guardian: true });
  expect((await schools(session))[0].portal_access).toBe("unavailable");
  response = () => reply({}, 403);
  expect(await schools(session)).toEqual([]);
  response = () => reply({}, 401);
  expect(await schools(session)).toEqual([]);
});
test("selected-school authorization never probes another school or follows arbitrary discovery URLs", async () => {
  const fetch = vi.fn(async (url: string) =>
    url.startsWith("http://control.test")
      ? reply({ items: [a, b] })
      : reply(capabilities("a", true)),
  );
  vi.stubGlobal("fetch", fetch);
  expect((await authorizedSchool(session, "a")).id).toBe("a");
  expect(
    fetch.mock.calls.some(([url]) => url.startsWith("http://b.test")),
  ).toBe(false);
  await expect(authorizedSchool(session, "unknown")).rejects.toMatchObject({
    status: 403,
  });
});

test("keeps empty trusted family references separate from selectable current-role schools during overlapping discovery", async () => {
  const fetch = vi.fn(async (url: string) =>
    url.startsWith("http://control.test")
      ? reply({ items: [a] })
      : reply(capabilities("a", false)),
  );
  vi.stubGlobal("fetch", fetch);
  const [choices, references] = await Promise.all([
    schools(session),
    schools(session, true),
  ]);
  expect(choices).toEqual([]);
  expect(references).toEqual([{ ...a, portal_access: "denied" }]);
  expect(
    fetch.mock.calls.every(
      ([url]) =>
        url === "http://control.test/api/v1/schools" ||
        url === "http://a.test/api/v1/me/workspaces",
    ),
  ).toBe(true);
});
