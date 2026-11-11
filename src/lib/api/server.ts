import "server-only";
import type { components as Control } from "./generated/control";
import type { Session } from "@/lib/auth/session";
import { serverConfig, allowedSchoolEndpoint } from "@/config/server";
export type DiscoveredSchool = Control["schemas"]["DiscoveredSchool"] & {
  portal_access?: "available" | "unavailable";
};
export class APIError extends Error {
  constructor(public status: number) {
    super("Backend request failed");
  }
}
export async function backend<T>(
  url: string,
  session: Session,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(url, {
    ...init,
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(15000),
    headers: {
      Accept: "application/json",
      ...init?.headers,
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  if (!response.ok) throw new APIError(response.status);
  return (await response.json()) as T;
}
const discovering = new Map<string, Promise<DiscoveredSchool[]>>();
const locating = new Map<string, Promise<DiscoveredSchool[]>>();
async function candidates(session: Session) {
  const pending = locating.get(session.accessToken);
  if (pending) return pending;
  const task = backend<{ items: DiscoveredSchool[] | null }>(
    serverConfig().control + "/api/v1/schools",
    session,
  )
    .then((data) =>
      (data.items || []).filter((s) => allowedSchoolEndpoint(s.endpoint_url)),
    )
    .finally(() => locating.delete(session.accessToken));
  locating.set(session.accessToken, task);
  return task;
}
async function localAccess(
  session: Session,
  school: DiscoveredSchool,
): Promise<DiscoveredSchool | null> {
  try {
    // No narrowed workspace: a guardian-only school must be able to report teacher=false.
    const value = await backend<unknown>(
      new URL(school.endpoint_url).origin + "/api/v1/me/workspaces",
      session,
    );
    if (!value || typeof value !== "object")
      throw new Error("Invalid capability observation");
    const access = value as Record<string, unknown>;
    if (
      access.school_id !== school.id ||
      !["management", "teacher", "guardian", "student"].every(
        (k) => typeof access[k] === "boolean",
      )
    )
      throw new Error("Invalid capability observation");
    return access.guardian ? { ...school, portal_access: "available" } : null;
  } catch (e) {
    if (e instanceof APIError && [401, 403].includes(e.status)) return null;
    // No role is inferred from an outage, old runtime, or mismatched deployment.
    return { ...school, portal_access: "unavailable" };
  }
}
export function schools(session: Session) {
  const key = session.accessToken;
  const pending = discovering.get(key);
  if (pending) return pending;
  const task = discover(session).finally(() => discovering.delete(key));
  discovering.set(key, task);
  return task;
}
async function discover(session: Session) {
  const choices = await candidates(session),
    result: DiscoveredSchool[] = [];
  for (let i = 0; i < choices.length; i += 4) {
    const group = await Promise.all(
      choices.slice(i, i + 4).map((s) => localAccess(session, s)),
    );
    result.push(...group.filter((s): s is DiscoveredSchool => s !== null));
  }
  return result;
}
export async function authorizedSchool(session: Session, id: string) {
  // A different school's outage must not stall the selected school's resources.
  const candidate = (await candidates(session)).find((s) => s.id === id);
  if (!candidate) throw new APIError(403);
  const school = await localAccess(session, candidate);
  if (!school) throw new APIError(403);
  if (school.portal_access === "unavailable") throw new APIError(503);
  return school;
}
