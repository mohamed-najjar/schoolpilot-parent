import { NextResponse } from "next/server";
// Security headers only. Sessions and authorization are checked inside every BFF
// handler and protected layout; this proxy is never an authorization boundary.
export function proxy() {
  let idp = "";
  try {
    const u = new URL(process.env.OIDC_ISSUER || "");
    const local =
      process.env.APP_ENV === "development" &&
      process.env.ALLOW_LOCAL_HTTP === "true" &&
      ["localhost", "127.0.0.1", "auth.localhost"].includes(u.hostname);
    if (u.protocol === "https:" || (local && u.protocol === "http:"))
      idp = u.origin;
  } catch {}
  const response = NextResponse.next();
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' " +
      idp,
  );
  return response;
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
