import { NextResponse } from "next/server";
import { serverConfig } from "@/config/server";
import {
  currentSession,
  sessionCookie,
  cookieOptions,
} from "@/lib/auth/session";
import { remove } from "@/lib/auth/store";
import { oidc, oidcConfig } from "@/lib/auth/oidc";
import { validOrigin } from "@/lib/auth/origin";
export async function POST(request: Request) {
  const c = serverConfig();
  if (!validOrigin(request, c.origin))
    return NextResponse.json({ code: "forbidden" }, { status: 403 });
  let target = new URL("/login", c.origin);
  try {
    const { id, session } = await currentSession();
    await remove("session", id);
    target = oidc.buildEndSessionUrl(await oidcConfig(), {
      id_token_hint: session.idToken,
      post_logout_redirect_uri: c.origin + "/login",
    });
  } catch {
    return NextResponse.json({ code: "unavailable" }, { status: 503 });
  }
  const response = NextResponse.redirect(target, 303);
  response.cookies.set(sessionCookie(), "", cookieOptions(0));
  return response;
}
