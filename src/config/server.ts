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
    allowProvisionedLoopback:
      process.env.APP_ENV === "development" &&
      process.env.ALLOW_LOCAL_HTTP === "true" &&
      process.env.ALLOW_PROVISIONED_LOCAL_SCHOOLS === "true",
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

// Registry-derived endpoints still require a deployment allowlist. The opt-in
// native provisioner range is development-only; it never authorizes membership.
export function allowedSchoolEndpoint(raw: string) {
  const c = serverConfig();
  try {
    const u = new URL(raw);
    if (u.username || u.password || u.pathname !== "/" || u.search || u.hash)
      return false;
    return (
      c.schools.includes(u.origin) ||
      (c.allowProvisionedLoopback &&
        u.protocol === "http:" &&
        ["localhost", "127.0.0.1"].includes(u.hostname) &&
        /^18[0-9]{3}$/.test(u.port))
    );
  } catch {
    return false;
  }
}

// Public handoff destinations are deployment configuration, never browser input.
export function configuredPortalOrigins() {
  const local =
    process.env.APP_ENV === "development" &&
    process.env.ALLOW_LOCAL_HTTP === "true";
  return Object.fromEntries(
    ["management", "teacher", "parent", "student"].map((portal, index) => {
      const name = portal.toUpperCase() + "_PORTAL_ORIGIN";
      const raw =
        process.env[name] || (local ? `http://localhost:${3000 + index}` : "");
      if (!raw) return [portal, null];
      const value = endpoint(raw, name);
      if (value.pathname !== "/")
        throw new Error("Portal destinations must be origins");
      return [portal, value.origin];
    }),
  ) as Record<"management" | "teacher" | "parent" | "student", string | null>;
}
