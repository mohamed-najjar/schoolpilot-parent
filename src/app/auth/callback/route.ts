import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { serverConfig } from "@/config/server";
import { oidc, oidcConfig } from "@/lib/auth/oidc";
import { opaqueID } from "@/lib/auth/crypto";
import { get, put, remove } from "@/lib/auth/store";
import {
  loginCookie,
  sessionCookie,
  cookieOptions,
  type Session,
} from "@/lib/auth/session";
export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  const c = serverConfig();
  const jar = await cookies();
  const loginID = jar.get(loginCookie())?.value;
  try {
    if (!loginID) throw new Error("Invalid login");
    const saved = await get<{
      verifier: string;
      state: string;
      nonce: string;
      returnMode?: string;
    }>("login", loginID, true);
    if (!saved) throw new Error("Invalid login");
    const url = new URL("/auth/callback", c.origin);
    url.search = request.nextUrl.search;
    const tokens = await oidc.authorizationCodeGrant(await oidcConfig(), url, {
      pkceCodeVerifier: saved.verifier,
      expectedState: saved.state,
      expectedNonce: saved.nonce,
      idTokenExpected: true,
    });
    const subject = tokens.claims()?.sub;
    if (!subject || !tokens.refresh_token || !tokens.id_token)
      throw new Error("Incomplete login");
    const old = jar.get(sessionCookie())?.value;
    if (old) await remove("session", old);
    const id = opaqueID();
    const session: Session = {
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      idToken: tokens.id_token,
      expiresAt: Date.now() + (tokens.expires_in || 60) * 1000,
      absoluteExpiry: Date.now() + 8 * 3600000,
      subject,
    };
    await put("session", id, session, 8 * 3600);
    const response = NextResponse.redirect(
      new URL(
        saved.returnMode === "onboarding"
          ? "/onboarding/authenticated"
          : "/family",
        c.origin,
      ),
    );
    response.cookies.set(sessionCookie(), id, cookieOptions(8 * 3600));
    response.cookies.set(loginCookie(), "", cookieOptions(0));
    return response;
  } catch {
    const response = NextResponse.redirect(
      new URL("/login?error=invalid", c.origin),
    );
    response.cookies.set(loginCookie(), "", cookieOptions(0));
    return response;
  }
}
