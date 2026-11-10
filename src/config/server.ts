import "server-only";
function endpoint(raw: string | undefined, name: string) {
  if (!raw) throw new Error(`Missing ${name}`);
  const u = new URL(raw);
  const local =
    process.env.APP_ENV === "development" &&
    process.env.ALLOW_LOCAL_HTTP === "true" &&
    ["localhost", "127.0.0.1", "auth.localhost"].includes(u.hostname);
  if (
    u.username ||
    u.password ||
    u.search ||
    u.hash ||
    (u.protocol !== "https:" && !(local && u.protocol === "http:"))
  )
    throw new Error(`Invalid ${name}`);
  return u;
}
export function serverConfig() {
  const origin = endpoint(process.env.PORTAL_ORIGIN, "PORTAL_ORIGIN");
  if (origin.pathname !== "/")
    throw new Error("PORTAL_ORIGIN must be an origin");
  const key = process.env.SESSION_ENCRYPTION_KEY;
  if (!key || !/^([a-f0-9]{64})$/i.test(key))
    throw new Error("Session encryption key required");
  return {
    origin: origin.origin,
    secure: origin.protocol === "https:",
    issuer: endpoint(process.env.OIDC_ISSUER, "OIDC_ISSUER"),
    clientId: process.env.OIDC_CLIENT_ID || "schoolpilot-parent",
    clientSecret: process.env.OIDC_CLIENT_SECRET || undefined,
    control: endpoint(process.env.CONTROL_API_URL, "CONTROL_API_URL").origin,
    schools: (process.env.SCHOOL_API_ORIGINS || "")
      .split(",")
      .filter(Boolean)
      .map((x) => {
        const u = endpoint(x, "SCHOOL_API_ORIGINS");
        if (u.pathname !== "/")
          throw new Error("School allowlist requires origins");
        return u.origin;
      }),
    key,
  };
}
