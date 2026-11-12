import "server-only";
import type { components as Control } from "./generated/control";
import type { Session } from "@/lib/auth/session";
import { serverConfig, allowedSchoolEndpoint } from "@/config/server";
export type DiscoveredSchool = Control["schemas"]["DiscoveredSchool"] & {
  portal_access?: "available" | "unavailable" | "denied";
};
export class APIError extends Error {
  constructor(
    public status: number,
    public retryAfter?: string,
    public reason?: "local_capability",
  ) {
    super("Backend request failed");
  }
}
const preflights = new Map<string, Promise<unknown>>();
async function requestBackend<T>(
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
  if (!response.ok) {
    const value = response.headers.get("Retry-After");
    const retry =
      response.status === 429 &&
      value &&
      /^\d{1,5}$/.test(value) &&
      Number(value) > 0 &&
      Number(value) <= 86400
        ? value
        : undefined;
    throw new APIError(response.status, retry);
  }
  return (await response.json()) as T;
}
export async function backend<T>(
  url: string,
  session: Session,
  init?: RequestInit,
): Promise<T> {
  const target = new URL(url);
  const metadata =
    (!init?.method || init.method === "GET") &&
    init?.body === undefined &&
    !target.search &&
    !target.hash &&
    ["/api/v1/me/workspaces", "/api/v1/me/grants"].includes(target.pathname);
  if (!metadata) return requestBackend<T>(url, session, init);
  const headers = [...new Headers(init?.headers).entries()].sort(([a], [b]) =>
    a.localeCompare(b),
  );
  const key = JSON.stringify([url, session.accessToken, headers]);
  const pending = preflights.get(key);
  if (pending) return pending as Promise<T>;
  // Only overlap is shared. Completion or failure immediately removes the observation.
  // Actual resource operations always perform their own current authorization.
  const task = requestBackend<T>(url, session, init).finally(() =>
    preflights.delete(key),
  );
  preflights.set(key, task);
  return task;
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
    if (e instanceof APIError && e.status === 429) throw e;
    if (e instanceof APIError && [401, 403].includes(e.status)) return null;
    // No role is inferred from an outage, old runtime, or mismatched deployment.
    return { ...school, portal_access: "unavailable" };
  }
}
// Empty references are aggregate compatibility metadata, never selectable roles.
export function schools(session: Session, includeEmptyReferences = false) {
  const key = JSON.stringify([session.accessToken, includeEmptyReferences]);
  const pending = discovering.get(key);
  if (pending) return pending;
  const task = discover(session, includeEmptyReferences).finally(() =>
    discovering.delete(key),
  );
  discovering.set(key, task);
  return task;
}
async function discover(session: Session, includeEmptyReferences: boolean) {
  const choices = await candidates(session),
    result: DiscoveredSchool[] = [];
  for (let i = 0; i < choices.length; i += 4) {
    const group = await Promise.all(
      choices.slice(i, i + 4).map((s) =>
        localAccess(session, s)
          .then(
            (current) =>
              current ??
              (includeEmptyReferences
                ? { ...s, portal_access: "denied" as const }
                : null),
          )
          .catch((e) => {
            if (e instanceof APIError && e.status === 429)
              return { ...s, portal_access: "unavailable" as const };
            throw e;
          }),
      ),
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
  if (!school) throw new APIError(403, undefined, "local_capability");
  if (school.portal_access === "unavailable") throw new APIError(503);
  return school;
}
