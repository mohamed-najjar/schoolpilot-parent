import { NextResponse } from "next/server";
import { serverConfig } from "@/config/server";
import { oidc, oidcConfig } from "@/lib/auth/oidc";
import { opaqueID } from "@/lib/auth/crypto";
import { put } from "@/lib/auth/store";
import { loginCookie, cookieOptions } from "@/lib/auth/session";
export const runtime = "nodejs";
export async function GET() {
  try {
    const c = serverConfig();
    const verifier = oidc.randomPKCECodeVerifier(),
      state = oidc.randomState(),
      nonce = oidc.randomNonce(),
      id = opaqueID();
    await put("login", id, { verifier, state, nonce }, 600);
    const target = oidc.buildAuthorizationUrl(await oidcConfig(), {
      redirect_uri: c.origin + "/auth/callback",
      scope: "openid profile",
      code_challenge: await oidc.calculatePKCECodeChallenge(verifier),
      code_challenge_method: "S256",
      state,
      nonce,
    });
    const response = NextResponse.redirect(target);
    response.cookies.set(loginCookie(), id, cookieOptions(600));
    return response;
  } catch {
    return NextResponse.redirect(
      new URL(
        "/login?error=unavailable",
        process.env.PORTAL_ORIGIN || "http://localhost:3002",
      ),
    );
  }
}
