import "server-only";
import type { components as Control } from "./generated/control";
import type { Session } from "@/lib/auth/session";
import { serverConfig } from "@/config/server";
export type DiscoveredSchool = Control["schemas"]["DiscoveredSchool"];
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
export function schools(session: Session) {
  const key = session.accessToken;
  const pending = discovering.get(key);
  if (pending) return pending;
  const task = discover(session).finally(() => {
    discovering.delete(key);
  });
  discovering.set(key, task);
  return task;
}
async function discover(session: Session) {
  const c = serverConfig();
  const data = await backend<{ items: DiscoveredSchool[] | null }>(
    c.control + "/api/v1/schools",
    session,
  );
  return (data.items || []).filter((s) => {
    try {
      const u = new URL(s.endpoint_url);
      return (
        u.pathname === "/" &&
        !u.search &&
        !u.hash &&
        c.schools.includes(u.origin)
      );
    } catch {
      return false;
    }
  });
}
export async function authorizedSchool(session: Session, id: string) {
  const school = (await schools(session)).find((s) => s.id === id);
  if (!school) throw new APIError(403);
  return school;
}
