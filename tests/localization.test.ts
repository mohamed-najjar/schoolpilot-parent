import { expect, test } from "vitest";
import { en, ar } from "@/lib/i18n/messages";
test("every family message has an Arabic translation and lifecycle labels are human-readable", () => {
  expect(Object.keys(ar).sort()).toEqual(Object.keys(en).sort());
  for (const [key, value] of Object.entries(ar)) {
    expect(value.trim(), key).not.toBe("");
    expect(/[\u0600-\u06ff]/.test(value) || key === "language", key).toBe(true);
  }
  for (const key of [
    "pass_fail",
    "competency",
    "returned",
    "unmarked",
  ] as const) {
    expect(en[key]).not.toBe(key);
    expect(ar[key]).not.toBe(key);
  }
});
