import "server-only";
import { createHash } from "node:crypto";
import type { Session } from "@/lib/auth/session";
import { backend, APIError, authorizedSchool } from "@/lib/api/server";
import { serverConfig, allowedSchoolEndpoint } from "@/config/server";
import type { components as Control } from "@/lib/api/generated/control";
import { invitationValue, schoolValue } from "./validation";
export const portal = "parent";
export const workspace = "guardian";
type Identity = Control["schemas"]["OnboardingIdentity"];
type Destination = Control["schemas"]["InvitationDestination"];
export async function verifiedIdentity(session: Session) {
  return backend<Identity>(
    serverConfig().control + "/api/v1/onboarding/identity",
    session,
  );
}
export function acceptanceKey(
  token: string,
  identity: Identity,
  school: string,
) {
  return createHash("sha256")
    .update(
      JSON.stringify([
        "schoolpilot-invitation-accept:v1",
        token,
        identity.issuer,
        identity.subject,
        school,
      ]),
    )
    .digest("hex");
}
export async function acceptInvitation(session: Session, token: unknown) {
  if (!invitationValue(token)) throw new APIError(400);
  const identity = await verifiedIdentity(session);
  const destination = await backend<Destination>(
    serverConfig().control + "/api/v1/onboarding/resolve",
    session,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    },
  );
  if (
    !schoolValue(destination.school_id) ||
    !allowedSchoolEndpoint(destination.endpoint_url)
  )
    throw new APIError(503);
  const allowedKinds = ["guardian"];
  if (!allowedKinds.includes(destination.kind)) throw new APIError(403);
  const result = await backend<{
    kind: string;
    synchronization_status: string;
  }>(
    new URL(destination.endpoint_url).origin + "/api/v1/onboarding/accept",
    session,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": acceptanceKey(
          token,
          identity,
          destination.school_id,
        ),
      },
      body: JSON.stringify({ token }),
    },
  );
  return {
    school_id: destination.school_id,
    kind: result.kind,
    synchronization_status: result.synchronization_status,
  };
}
export async function recordPortalAccess(
  id: string,
  session: Session,
  school: string,
) {
  if (!schoolValue(school)) throw new APIError(400);
  const target = await authorizedSchool(session, school);
  const key = createHash("sha256")
    .update(
      JSON.stringify(["schoolpilot-portal-observation:v1", id, school, portal]),
    )
    .digest("hex");
  await backend(
    new URL(target.endpoint_url).origin +
      "/api/v1/onboarding/portal-verifications",
    session,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-SchoolPilot-Workspace": workspace,
        "Idempotency-Key": key,
      },
      body: JSON.stringify({ portal }),
    },
  );
}

// Observation is supplemental to the owning layout/resource authorization. Old
// pinned runtimes can remain usable without claiming new readiness evidence.
export async function observePortalAccess(
  id: string,
  session: Session,
  school: string,
) {
  try {
    await recordPortalAccess(id, session, school);
    return true;
  } catch {
    return false;
  }
}
