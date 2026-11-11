import { NextRequest, NextResponse } from "next/server";
import { currentSession, SessionExpired } from "@/lib/auth/session";
import { authorizedSchool, APIError } from "@/lib/api/server";
import { serverConfig } from "@/config/server";
import { validOrigin } from "@/lib/auth/origin";
import { guardianRoute } from "@/lib/api/guardian-routes";
import routes from "@/lib/api/generated/routes.json";
const matchRoute = (method: string, path: string) =>
  routes.some(
    (r) =>
      r.method === method &&
      new RegExp(
        "^" + r.path.replace(/\{[^}]+\}/g, "[a-fA-F0-9-]{36}") + "$",
      ).test(path),
  );
export const runtime = "nodejs";
async function handle(
  request: NextRequest,
  context: { params: Promise<{ schoolId: string; path: string[] }> },
) {
  try {
    const { schoolId, path } = await context.params;
    const route = path.join("/");
    if (
      !/^[a-f0-9-]{36}$/i.test(schoolId) ||
      path.some((x) => !/^[a-zA-Z0-9-]+$/.test(x)) ||
      !matchRoute(request.method, route)
    )
      return NextResponse.json({ code: "not_found" }, { status: 404 });
    if (!guardianRoute(request.method, route))
      return NextResponse.json({ code: "forbidden" }, { status: 403 });
    if (
      request.method !== "GET" &&
      !validOrigin(request, serverConfig().origin)
    )
      return NextResponse.json({ code: "forbidden" }, { status: 403 });
    const { session } = await currentSession();
    const school = await authorizedSchool(session, schoolId);
    const base = new URL(school.endpoint_url).origin;
    const headers: Record<string, string> = {
      Accept: "application/json",
      Authorization: `Bearer ${session.accessToken}`,
      "X-SchoolPilot-Workspace": "guardian",
    };
    let body: Uint8Array | undefined;
    if (request.method !== "GET") {
      if (
        request.headers.get("content-type")?.split(";")[0] !==
        "application/json"
      )
        return NextResponse.json({ code: "invalid_request" }, { status: 400 });
      const reader = request.body?.getReader();
      let size = 0;
      const chunks: Uint8Array[] = [];
      if (reader)
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          size += value.length;
          if (size > 65536) {
            await reader.cancel();
            return NextResponse.json(
              { code: "invalid_request" },
              { status: 413 },
            );
          }
          chunks.push(value);
        }
      body = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) {
        body.set(chunk, offset);
        offset += chunk.length;
      }
      headers["Content-Type"] = "application/json";
      if (request.headers.has("idempotency-key"))
        headers["Idempotency-Key"] = request.headers.get("idempotency-key")!;
      if (request.headers.has("if-match"))
        headers["If-Match"] = request.headers.get("if-match")!;
    }
    const response = await fetch(
      base + "/api/v1/" + route + request.nextUrl.search,
      {
        method: request.method,
        headers,
        body: body as BodyInit | undefined,
        cache: "no-store",
        redirect: "error",
        signal: AbortSignal.any([request.signal, AbortSignal.timeout(18000)]),
      },
    );
    const outHeaders = new Headers({
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    });
    for (const name of ["ETag", "Retry-After", "X-Request-ID"]) {
      const value = response.headers.get(name);
      if (value) outHeaders.set(name, value);
    }
    return new Response(response.body, {
      status: response.status,
      headers: outHeaders,
    });
  } catch (e) {
    const status =
      e instanceof SessionExpired
        ? 401
        : e instanceof APIError
          ? e.status
          : 503;
    return NextResponse.json(
      {
        code:
          status === 429
            ? "rate_limited"
            : status === 401
              ? "session_expired"
              : status === 403
                ? "forbidden"
                : "unavailable",
      },
      {
        status,
        headers: {
          "Cache-Control": "no-store",
          ...(e instanceof APIError && e.status === 429 && e.retryAfter
            ? { "Retry-After": e.retryAfter }
            : {}),
        },
      },
    );
  }
}
export const GET = handle;
export const POST = handle;

export const PUT = handle;
