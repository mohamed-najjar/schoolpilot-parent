import { describe, it, expect } from "vitest";
import { guardianRoute } from "../src/lib/api/guardian-routes";
describe("minimal access policy boundary", () => {
  it("allows only the actor boolean and keeps commercial and operator routes private", () => {
    expect(guardianRoute("GET", "me/access-policy")).toBe(true);
    for (const path of [
      "billing/subscription",
      "billing/payments",
      "onboarding/readiness",
      "internal/v1/tenant/readiness",
      "operator/me",
    ])
      expect(guardianRoute("GET", path)).toBe(false);
    expect(guardianRoute("POST", "me/access-policy")).toBe(false);
  });
});
