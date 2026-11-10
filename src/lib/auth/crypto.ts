import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from "node:crypto";
export function seal(value: unknown, key: string) {
  const nonce = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", Buffer.from(key, "hex"), nonce);
  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify(value), "utf8"),
    cipher.final(),
  ]);
  return Buffer.concat([nonce, cipher.getAuthTag(), ciphertext]).toString(
    "base64url",
  );
}
export function unseal<T>(value: string, key: string): T {
  const b = Buffer.from(value, "base64url");
  if (b.length < 29) throw new Error("Invalid encrypted record");
  const cipher = createDecipheriv(
    "aes-256-gcm",
    Buffer.from(key, "hex"),
    b.subarray(0, 12),
  );
  cipher.setAuthTag(b.subarray(12, 28));
  return JSON.parse(
    Buffer.concat([cipher.update(b.subarray(28)), cipher.final()]).toString(
      "utf8",
    ),
  ) as T;
}
export const opaqueID = () => randomBytes(32).toString("hex");
export function recordKey(id: string) {
  if (!/^[a-f0-9]{64}$/.test(id)) throw new Error("Invalid session");
  return createHash("sha256").update(id).digest("hex");
}
