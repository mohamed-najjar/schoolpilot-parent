// @vitest-environment node
import { test, expect, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";
const mocks = vi.hoisted(() => ({ list: vi.fn(), backend: vi.fn() }));
vi.mock("@/lib/auth/session", () => ({
  currentSession: async () => ({ session: { accessToken: "server-only" } }),
  SessionExpired: class extends Error {},
}));
vi.mock("@/lib/api/server", () => ({
  schools: mocks.list,
  backend: mocks.backend,
  APIError: class extends Error {
    constructor(public status: number) {
      super();
    }
  },
}));
import { GET } from "@/app/api/family/route";
afterEach(() => vi.clearAllMocks());
test("family aggregation uses guardian context and one request per discovered school, with explicit failures", async () => {
  mocks.list.mockResolvedValue([
    {
      id: "a",
      name_en: "A",
      name_ar: "أ",
      code: "A",
      endpoint_url: "https://a.school.test",
    },
    {
      id: "b",
      name_en: "B",
      name_ar: "ب",
      code: "B",
      endpoint_url: "https://b.school.test",
    },
  ]);
  mocks.backend.mockImplementation(async (url: string) => {
    if (url.includes("b.school")) throw new Error();
    return {
      items: [{ id: "child-a" }],
      next_cursor: "",
      local_date: "2026-11-10",
    };
  });
  const response = await GET(
    new NextRequest("http://localhost:3002/api/family"),
  );
  const data = await response.json();
  expect(data.schools[0].items).toHaveLength(1);
  expect(data.schools[1].error_status).toBe(503);
  expect(data.schools[1].items).toEqual([]);
  expect(response.headers.get("cache-control")).toBe("no-store");
  expect(JSON.stringify(data)).not.toContain("server-only");
  expect(JSON.stringify(data)).not.toContain("endpoint_url");
  expect(mocks.backend).toHaveBeenCalledTimes(2);
  expect(
    mocks.backend.mock.calls[0][2].headers["X-SchoolPilot-Workspace"],
  ).toBe("guardian");
});
test("browser cannot add an arbitrary school endpoint to family discovery", async () => {
  mocks.list.mockResolvedValue([]);
  const response = await GET(
    new NextRequest("http://localhost:3002/api/family?school_id=forged"),
  );
  expect(response.status).toBe(403);
  expect(mocks.backend).not.toHaveBeenCalled();
});

test("retains an empty trusted affiliation after local guardian revocation without querying child data or offering a child", async () => {
  mocks.list.mockResolvedValue([
    {
      id: "b",
      code: "B",
      name_en: "B",
      name_ar: "ب",
      endpoint_url: "https://b.school.test",
      portal_access: "denied",
    },
  ]);
  const response = await GET(
    new NextRequest("http://localhost:3002/api/family"),
  );
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data.schools).toEqual([
    {
      school: { id: "b", code: "B", name_en: "B", name_ar: "ب" },
      items: [],
      next_cursor: "",
    },
  ]);
  expect(data.schools.flatMap((s: { items: unknown[] }) => s.items)).toEqual(
    [],
  );
  expect(mocks.backend).not.toHaveBeenCalled();
  expect(response.headers.get("Cache-Control")).toBe("no-store");
});
test("denies explicit paging into a school with no current family capability", async () => {
  mocks.list.mockResolvedValue([
    {
      id: "b",
      code: "B",
      name_en: "B",
      name_ar: "ب",
      endpoint_url: "https://b.school.test",
      portal_access: "denied",
    },
  ]);
  const response = await GET(
    new NextRequest("http://localhost:3002/api/family?school_id=b"),
  );
  expect(response.status).toBe(403);
  expect(mocks.backend).not.toHaveBeenCalled();
});
