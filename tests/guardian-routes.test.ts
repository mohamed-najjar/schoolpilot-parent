import { expect, test } from "vitest";
import { guardianRoute } from "@/lib/api/guardian-routes";
const id = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
test("guardian route allowlist exposes reads and explicitly authorized communication writes", () => {
  for (const path of [
    "guardian/children",
    "guardian/profile",
    `guardian/children/${id}`,
    `guardian/children/${id}/contacts`,
    `students/${id}/attendance`,
    `students/${id}/assignments`,
    `students/${id}/academic-grades`,
    `learning-files/${id}`,
  ])
    expect(guardianRoute("GET", path)).toBe(true);
  for (const [method, path] of [
    ["POST", "role-grants"],
    ["GET", "management/students"],
    ["GET", "me/grants"],
    ["GET", `learning-courses/${id}/roster`],
    ["POST", "assignments"],
    ["POST", `assignment-recipients/${id}/submissions`],
    ["PUT", `attendance-records/${id}/mark`],
    ["POST", `grades/${id}/transition`],
    ["POST", `report-cards/${id}/transition`],
    ["GET", "guardian/children/../../students"],
  ])
    expect(guardianRoute(method, path)).toBe(false);
  expect(guardianRoute("POST", "conversations")).toBe(true);
  expect(guardianRoute("POST", `conversations/${id}/messages`)).toBe(true);
});
test("allows scoped absence reporting without attendance marking or office review authority", () => {
  expect(guardianRoute("GET", "absence-reports")).toBe(true);
  expect(guardianRoute("POST", "absence-reports")).toBe(true);
  expect(guardianRoute("POST", `absence-reports/${id}/review`)).toBe(false);
  expect(guardianRoute("PUT", `attendance-records/${id}/mark`)).toBe(false);
});
