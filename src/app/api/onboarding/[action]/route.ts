import { NextRequest, NextResponse } from "next/server";
import { currentSession, SessionExpired } from "@/lib/auth/session";
import { APIError } from "@/lib/api/server";
import { validOrigin } from "@/lib/auth/origin";
import { serverConfig, configuredPortalOrigins } from "@/config/server";
import {
  verifiedIdentity,
  acceptInvitation,
  recordPortalAccess,
} from "@/lib/onboarding/server";
import { schoolValue } from "@/lib/onboarding/validation";
export const runtime = "nodejs";
const reply = (data: unknown, status = 200) =>
  NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } });
async function input(request: NextRequest) {
  try {
    if (
      request.headers.get("content-type")?.split(";")[0] !== "application/json"
    )
      throw new APIError(400);
    const reader = request.body?.getReader();
    let text = "";
    let size = 0;
    const decoder = new TextDecoder("utf-8", { fatal: true });
    if (reader)
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.length;
        if (size > 1024) {
          await reader.cancel();
          throw new APIError(413);
        }
        text += decoder.decode(value, { stream: true });
      }
    text += decoder.decode();
    const value = JSON.parse(text);
    if (!value || typeof value !== "object" || Array.isArray(value))
      throw new APIError(400);
    return value as Record<string, unknown>;
  } catch (error) {
    if (error instanceof APIError) throw error;
    throw new APIError(400);
  }
}
async function handle(
  request: NextRequest,
  context: { params: Promise<{ action: string }> },
) {
  try {
    const { action } = await context.params;
    if (
      !(
        (request.method === "GET" &&
          ["identity", "destinations"].includes(action)) ||
        (request.method === "POST" && ["accept", "access"].includes(action))
      )
    )
      return reply({ code: "not_found" }, 404);
    if (request.nextUrl.search) return reply({ code: "invalid_request" }, 400);
    if (
      request.method !== "GET" &&
      !validOrigin(request, serverConfig().origin)
    )
      return reply({ code: "forbidden" }, 403);
    const { id, session } = await currentSession();
    if (action === "identity") return reply(await verifiedIdentity(session));
    if (action === "destinations") {
      await verifiedIdentity(session);
      return reply(configuredPortalOrigins());
    }
    const body = await input(request);
    const key = action === "accept" ? "token" : "school_id";
    if (Object.keys(body).length !== 1 || !(key in body))
      return reply({ code: "invalid_request" }, 400);
    if (action === "accept")
      return reply(await acceptInvitation(session, body.token));
    if (!schoolValue(body.school_id))
      return reply({ code: "invalid_request" }, 400);
    await recordPortalAccess(id, session, body.school_id);
    return reply({ school_id: body.school_id, path: "/children" });
  } catch (error) {
    const status =
      error instanceof SessionExpired
        ? 401
        : error instanceof APIError
          ? error.status
          : 503;
    return reply(
      {
        code:
          status === 401
            ? "session_expired"
            : status === 403
              ? "forbidden"
              : status === 400 || status === 413
                ? "invalid_request"
                : "unavailable",
      },
      status,
    );
  }
}
export const GET = handle;
export const POST = handle;
