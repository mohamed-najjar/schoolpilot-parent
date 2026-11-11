// @vitest-environment node
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { allowedSchoolEndpoint } from "@/config/server";
beforeEach(() => {
  for (const [key, value] of Object.entries({
    APP_ENV: "development",
    ALLOW_LOCAL_HTTP: "true",
    ALLOW_PROVISIONED_LOCAL_SCHOOLS: "false",
    PORTAL_ORIGIN: "http://localhost:3000",
    SESSION_ENCRYPTION_KEY: "ab".repeat(32),
    OIDC_ISSUER: "http://auth.localhost:8080/realms/schoolos",
    CONTROL_API_URL: "http://localhost:8083",
    SCHOOL_API_ORIGINS: "http://localhost:8081",
  }))
    vi.stubEnv(key, value);
});
afterEach(() => vi.unstubAllEnvs());
it("requires explicit opt-in for exactly the native provisioned loopback range", () => {
  expect(allowedSchoolEndpoint("http://localhost:8081")).toBe(true);
  expect(allowedSchoolEndpoint("http://localhost:18000")).toBe(false);
  vi.stubEnv("ALLOW_PROVISIONED_LOCAL_SCHOOLS", "true");
  for (const url of ["http://localhost:18000", "http://127.0.0.1:18999"])
    expect(allowedSchoolEndpoint(url)).toBe(true);
  for (const url of [
    "http://localhost:17999",
    "http://localhost:19000",
    "http://school.localhost:18000",
    "http://metadata.internal:18000",
    "http://user:secret@localhost:18000",
    "http://localhost:18000/private",
    "http://localhost:18000/?secret=x",
    "http://localhost:18000/#secret",
  ])
    expect(allowedSchoolEndpoint(url)).toBe(false);
});
it("cannot turn the local tenant range on in production", () => {
  vi.stubEnv("APP_ENV", "production");
  vi.stubEnv("ALLOW_PROVISIONED_LOCAL_SCHOOLS", "true");
  vi.stubEnv("PORTAL_ORIGIN", "https://portal.example.invalid");
  vi.stubEnv("OIDC_ISSUER", "https://identity.example.invalid/realms/schoolos");
  vi.stubEnv("CONTROL_API_URL", "https://control.example.invalid");
  vi.stubEnv("SCHOOL_API_ORIGINS", "https://school.example.invalid");
  expect(allowedSchoolEndpoint("http://localhost:18000")).toBe(false);
  expect(allowedSchoolEndpoint("https://unlisted.example.invalid")).toBe(false);
  expect(allowedSchoolEndpoint("https://school.example.invalid")).toBe(true);
});
