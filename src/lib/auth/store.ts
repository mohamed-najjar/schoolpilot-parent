import "server-only";
import { createClient } from "redis";
import { serverConfig } from "@/config/server";
import { seal, unseal, recordKey } from "./crypto";
let connecting: ReturnType<typeof connect> | undefined;
async function connect() {
  if (!process.env.REDIS_URL) throw new Error("Session store unavailable");
  const redisURL = new URL(process.env.REDIS_URL);
  if (process.env.APP_ENV !== "development" && redisURL.protocol !== "rediss:")
    throw new Error("Production session store requires TLS");
  const c = createClient({
    url: process.env.REDIS_URL,
    socket: { connectTimeout: 3000, reconnectStrategy: false },
  });
  c.on("error", () => {
    connecting = undefined;
  });
  c.on("end", () => {
    connecting = undefined;
  });
  await c.connect();
  return c;
}
export async function redis() {
  if (!connecting)
    connecting = connect().catch((e) => {
      connecting = undefined;
      throw e;
    });
  return connecting;
}
const name = (kind: string, id: string) =>
  `schoolpilot-parent:${kind}:${recordKey(id)}`;
export async function put(
  kind: string,
  id: string,
  data: unknown,
  seconds: number,
) {
  await (
    await redis()
  ).set(name(kind, id), seal(data, serverConfig().key), { EX: seconds });
}
export async function get<T>(
  kind: string,
  id: string,
  consume = false,
): Promise<T | null> {
  if (!/^[a-f0-9]{64}$/.test(id)) return null;
  const c = await redis();
  const raw = consume
    ? await c.getDel(name(kind, id))
    : await c.get(name(kind, id));
  return raw ? unseal<T>(raw, serverConfig().key) : null;
}
export async function remove(kind: string, id: string) {
  if (/^[a-f0-9]{64}$/.test(id)) await (await redis()).del(name(kind, id));
}
export async function replaceSession(id: string, data: unknown, ttl: number) {
  return (await redis()).set(
    name("session", id),
    seal(data, serverConfig().key),
    { EX: ttl, XX: true },
  );
}
export async function lease(id: string, token: string) {
  return (await redis()).set(name("refresh", id), token, { EX: 15, NX: true });
}
export async function release(id: string, token: string) {
  await (
    await redis()
  ).eval(
    "if redis.call('get',KEYS[1]) == ARGV[1] then return redis.call('del',KEYS[1]) else return 0 end",
    { keys: [name("refresh", id)], arguments: [token] },
  );
}
