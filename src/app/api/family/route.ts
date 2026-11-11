import { observePortalAccess } from "@/lib/onboarding/server";
import { NextRequest, NextResponse } from "next/server";
import { currentSession, SessionExpired } from "@/lib/auth/session";
import { schools, backend, APIError } from "@/lib/api/server";
import type { components } from "@/lib/api/generated/school";
export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  try {
    const { id, session } = await currentSession();
    const available = await schools(session);
    const schoolID = request.nextUrl.searchParams.get("school_id"),
      after = request.nextUrl.searchParams.get("after") || "";
    if (
      (after && !schoolID) ||
      new Set(request.nextUrl.searchParams.keys()).size !==
        [...request.nextUrl.searchParams.keys()].length ||
      [...request.nextUrl.searchParams.keys()].some(
        (k) => !["school_id", "after"].includes(k),
      ) ||
      (after && !/^[a-f0-9-]{36}$/i.test(after))
    )
      return NextResponse.json({ code: "invalid" }, { status: 400 });
    if (schoolID && !available.some((s) => s.id === schoolID))
      throw new APIError(403);
    const candidates = schoolID
      ? available.filter((s) => s.id === schoolID)
      : available;
    const results = [];
    // Bounded cross-school fan-out; each school performs one paginated family query.
    for (let i = 0; i < candidates.length; i += 4) {
      results.push(
        ...(await Promise.all(
          candidates.slice(i, i + 4).map(async (school) => {
            const publicSchool = {
              id: school.id,
              code: school.code,
              name_en: school.name_en,
              name_ar: school.name_ar,
            };
            try {
              if (school.portal_access === "unavailable")
                throw new APIError(503);
              const page = await backend<{
                items: components["schemas"]["FamilyChild"][];
                next_cursor: string;
                local_date: string;
              }>(
                new URL(school.endpoint_url).origin +
                  "/api/v1/guardian/children?limit=50" +
                  (after ? "&after=" + encodeURIComponent(after) : ""),
                session,
                { headers: { "X-SchoolPilot-Workspace": "guardian" } },
              );
              await observePortalAccess(id, session, school.id);
              return { school: publicSchool, ...page };
            } catch (e) {
              return {
                school: publicSchool,
                items: [],
                next_cursor: "",
                error_status: e instanceof APIError ? e.status : 503,
              };
            }
          }),
        )),
      );
    }
    return NextResponse.json(
      { schools: results },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    const status =
      e instanceof SessionExpired
        ? 401
        : e instanceof APIError
          ? e.status
          : 503;
    return NextResponse.json(
      { code: status === 401 ? "session_expired" : "unavailable" },
      { status, headers: { "Cache-Control": "no-store" } },
    );
  }
}
