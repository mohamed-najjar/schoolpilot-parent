import "server-only";
import { cookies } from "next/headers";
import { serverConfig } from "@/config/server";
import * as store from "./store";
import { opaqueID } from "./crypto";
import { oidc, oidcConfig } from "./oidc";
export class SessionExpired extends Error {}
export type Session = {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expiresAt: number;
  absoluteExpiry: number;
  subject: string;
};
export const sessionCookie = () =>
  serverConfig().secure
    ? "__Host-schoolpilot-parent-session"
    : "schoolpilot-parent-session";
export const loginCookie = () =>
  serverConfig().secure
    ? "__Host-schoolpilot-parent-login"
    : "schoolpilot-parent-login";
export function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: serverConfig().secure,
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}
export async function currentSession(): Promise<{
  id: string;
  session: Session;
}> {
  const id = (await cookies()).get(sessionCookie())?.value;
  if (!id) throw new SessionExpired();
  let session = await store.get<Session>("session", id);
  if (!session || session.absoluteExpiry <= Date.now()) {
    await store.remove("session", id);
    throw new SessionExpired();
  }
  if (session.expiresAt > Date.now() + 30000) return { id, session };
  const token = opaqueID();
  if (!(await store.lease(id, token))) {
    for (let i = 0; i < 120; i++) {
      await new Promise((r) => setTimeout(r, 100));
      session = await store.get<Session>("session", id);
      if (!session) throw new SessionExpired();
      if (session.expiresAt > Date.now() + 30000) return { id, session };
    }
    throw new Error("Refresh busy");
  }
  try {
    session = await store.get<Session>("session", id);
    if (!session) throw new SessionExpired();
    if (session.expiresAt > Date.now() + 30000) return { id, session };
    const fresh = await oidc.refreshTokenGrant(
      await oidcConfig(),
      session.refreshToken,
    );
    const next: Session = {
      ...session,
      accessToken: fresh.access_token,
      refreshToken: fresh.refresh_token || session.refreshToken,
      idToken: fresh.id_token || session.idToken,
      expiresAt: Date.now() + (fresh.expires_in || 60) * 1000,
    };
    if (
      !(await store.replaceSession(
        id,
        next,
        Math.max(1, Math.floor((session.absoluteExpiry - Date.now()) / 1000)),
      ))
    )
      throw new SessionExpired();
    return { id, session: next };
  } catch (e) {
    await store.remove("session", id);
    if (e instanceof SessionExpired) throw e;
    throw new SessionExpired();
  } finally {
    await store.release(id, token);
  }
}
