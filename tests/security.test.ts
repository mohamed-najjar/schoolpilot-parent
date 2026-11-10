// @vitest-environment node
import { describe, it, expect } from "vitest";
import { seal, unseal, recordKey, opaqueID } from "@/lib/auth/crypto";
import { guardianRoute } from "@/lib/api/guardian-routes";
import { validOrigin } from "@/lib/auth/origin";
import { serverConfig } from "@/config/server";
const key = "ab".repeat(32);
describe("Server session cryptography", () => {
  it("encrypts round trips without plaintext tokens", () => {
    const raw = seal({ accessToken: "private-access-token" }, key);
    expect(raw).not.toContain("private-access-token");
    expect(unseal(raw, key)).toEqual({ accessToken: "private-access-token" });
  });
  it("rejects tampering and the wrong key", () => {
    const raw = seal({ a: 1 }, key);
    const b = Buffer.from(raw, "base64url");
    b[28] ^= 1;
    expect(() => unseal(b.toString("base64url"), key)).toThrow();
    expect(() => unseal(raw, "cd".repeat(32))).toThrow();
  });
  it("randomizes ciphertext and generates opaque validated ids", () => {
    expect(seal({ a: 1 }, key)).not.toBe(seal({ a: 1 }, key));
    const id = opaqueID();
    expect(id).toHaveLength(64);
    expect(recordKey(id)).not.toBe(id);
    expect(() => recordKey("../escape")).toThrow();
  });
});
describe("Request security", () => {
  it("rejects cross-origin and absent-origin mutation requests", () => {
    expect(
      validOrigin(
        new Request("https://portal.test", {
          headers: { origin: "https://evil.test" },
        }),
        "https://portal.test",
      ),
    ).toBe(false);
    expect(
      validOrigin(new Request("https://portal.test"), "https://portal.test"),
    ).toBe(false);
    expect(
      validOrigin(
        new Request("https://portal.test", {
          headers: {
            origin: "https://portal.test",
            "sec-fetch-site": "same-origin",
          },
        }),
        "https://portal.test",
      ),
    ).toBe(true);
  });
  it("exposes only guardian capabilities, regardless of other identity roles", () => {
    expect(guardianRoute("GET", "guardian/children")).toBe(true);
    expect(guardianRoute("POST", "role-grants")).toBe(false);
    expect(guardianRoute("GET", "management/students")).toBe(false);
    expect(guardianRoute("POST", "assignments")).toBe(false);
    expect(guardianRoute("GET", "me/grants")).toBe(false);
  });
  it("rejects insecure production and unbounded school endpoint configuration", () => {
    Object.assign(process.env, {
      APP_ENV: "production",
      ALLOW_LOCAL_HTTP: "true",
      PORTAL_ORIGIN: "http://localhost:3002",
      SESSION_ENCRYPTION_KEY: key,
    });
    expect(() => serverConfig()).toThrow();
    Object.assign(process.env, {
      APP_ENV: "development",
      PORTAL_ORIGIN: "http://localhost:3002",
      OIDC_ISSUER: "http://auth.localhost:8080/realms/schoolos",
      CONTROL_API_URL: "http://localhost:8083",
      SCHOOL_API_ORIGINS: "http://localhost:8081/evil",
    });
    expect(() => serverConfig()).toThrow();
    process.env.SCHOOL_API_ORIGINS = "http://localhost:8081";
    expect(serverConfig().schools).toEqual(["http://localhost:8081"]);
  });
});
