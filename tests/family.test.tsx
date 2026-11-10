import { render, screen, cleanup } from "@testing-library/react";
import { test, expect, vi, afterEach } from "vitest";
import Providers from "@/components/Providers";
import { FamilyHome } from "@/features/family/Family";
import type { FamilySchool } from "@/features/family/Context";
const f = vi.hoisted(() => ({ schools: [] as FamilySchool[] }));
vi.mock("@/features/family/Context", () => ({
  childQuery: (school: string, child: string) =>
    `?school=${school}&child=${child}`,
  useFamily: () => ({
    data: { schools: f.schools },
    all: f.schools.flatMap((s) =>
      s.items.map((child) => ({ child, school: s.school })),
    ),
    mutate: vi.fn(),
    more: vi.fn(),
  }),
}));
vi.mock("@/lib/api/client", () => ({
  useResource: () => ({ data: { items: [], next_cursor: "" } }),
  RequestError: class extends Error {},
}));
afterEach(cleanup);
const child = (id: string, name: string, school: string) => ({
  id,
  school_id: school,
  student_number: "TEST-" + id,
  first_name: name,
  last_name: "Synthetic",
  first_name_ar: "طالب",
  last_name_ar: "تجريبي",
  relationship_id: "r",
  can_view_academics: true,
  can_report_absence: false,
  can_receive_messages: true,
  classes: [{ id: "c", code: "Grade 5", academic_year_id: "y" }],
  today_lessons: [],
  today_lesson_count: 0,
  due_assignments: [],
  recent_attendance: [],
  published_results: [],
});
test("family directory groups independently authorized children across schools without fake metrics", () => {
  f.schools = [
    {
      school: { id: "a", code: "A", name_en: "School A", name_ar: "المدرسة أ" },
      items: [child("one", "Child One", "a"), child("two", "Child Two", "a")],
      next_cursor: "",
    },
    {
      school: { id: "b", code: "B", name_en: "School B", name_ar: "المدرسة ب" },
      items: [child("three", "Child Three", "b")],
      next_cursor: "",
    },
  ];
  render(
    <Providers locale="en">
      <FamilyHome directory />
    </Providers>,
  );
  expect(
    screen.getByRole("heading", { name: "My Children" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Child Three Synthetic" }),
  ).toBeInTheDocument();
  expect(screen.getAllByText("School A")).toHaveLength(2);
  expect(screen.getByText("School B")).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: "View homework" })[2],
  ).toHaveAttribute("href", "/homework?school=b&child=three");
});
test("Arabic empty family and partial-school failure remain distinct", () => {
  f.schools = [];
  const { rerender } = render(
    <Providers locale="ar">
      <FamilyHome directory />
    </Providers>,
  );
  expect(screen.getByText(/لا يوجد أبناء مرتبطون/)).toBeInTheDocument();
  f.schools = [
    {
      school: { id: "b", code: "B", name_en: "School B", name_ar: "المدرسة ب" },
      items: [],
      next_cursor: "",
      error_status: 503,
    },
  ];
  rerender(
    <Providers locale="ar">
      <FamilyHome directory />
    </Providers>,
  );
  expect(
    screen.getByText(/قد تكون قائمة أبنائك غير مكتملة/),
  ).toBeInTheDocument();
  expect(screen.queryByText(/لا يوجد أبناء مرتبطون/)).not.toBeInTheDocument();
});

test("untrusted child display text is escaped rather than interpreted as HTML", () => {
  const marker = '<img src=x onerror="window.familyInjected=true">';
  f.schools = [
    {
      school: { id: "a", code: "A", name_en: "School A", name_ar: "المدرسة أ" },
      items: [child("unsafe-text", marker, "a")],
      next_cursor: "",
    },
  ];
  const { container } = render(
    <Providers locale="en">
      <FamilyHome directory />
    </Providers>,
  );
  expect(
    screen.getByRole("heading", { name: marker + " Synthetic" }),
  ).toBeInTheDocument();
  expect(container.querySelector("img")).toBeNull();
});
