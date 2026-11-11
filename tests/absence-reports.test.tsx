import { afterEach, beforeEach, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import AbsenceReports, {
  validAbsenceDates,
} from "@/features/family/AbsenceReports";
import Providers from "@/components/Providers";
const mock = vi.hoisted(() => ({ run: vi.fn(), paths: [] as string[] }));
vi.mock("@/features/family/shared", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("@/features/family/shared")>();
  return {
    ...actual,
    useWrite: () => ({
      run: mock.run,
      busy: false,
      error: undefined,
      success: false,
    }),
    Paged: ({ path }: { path: string }) => {
      mock.paths.push(path);
      return null;
    },
  };
});
beforeEach(() => {
  mock.run.mockReset().mockResolvedValue({ id: "saved", status: "submitted" });
  mock.paths = [];
});
afterEach(cleanup);
const view = (allowed = true, locale: "en" | "ar" = "en") =>
  render(
    <Providers locale={locale}>
      <AbsenceReports school="school" child="child" allowed={allowed} />
    </Providers>,
  );
const fill = () => {
  fireEvent.change(screen.getByLabelText(/^From/), {
    target: { value: "2026-11-12" },
  });
  fireEvent.change(screen.getByLabelText(/^To/), {
    target: { value: "2026-11-14" },
  });
  fireEvent.change(
    screen.getByRole("textbox", { name: /Absence explanation/ }),
    { target: { value: "  Synthetic explanation / توضيح تجريبي  " } },
  );
};
it("submits the explicit selected child and multi-day explanation without claiming an attendance change", async () => {
  view();
  fill();
  fireEvent.click(
    screen.getByRole("button", { name: "Submit absence report" }),
  );
  await waitFor(() =>
    expect(mock.run).toHaveBeenCalledWith("absence-reports", {
      student_id: "child",
      starts_on: "2026-11-12",
      ends_on: "2026-11-14",
      explanation: "Synthetic explanation / توضيح تجريبي",
    }),
  );
  expect(
    await screen.findByText(/Attendance has not been changed automatically/),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /Absence explanation/ }),
  ).toHaveValue("");
  expect(mock.paths).toContain("absence-reports?student_id=child");
});
it("does not expose reporting or report history without the exact child capability", () => {
  view(false);
  expect(
    screen.getByText(/do not have absence-reporting permission/),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: "Submit absence report" }),
  ).not.toBeInTheDocument();
  expect(mock.paths).toHaveLength(0);
});
it("rejects invalid calendar dates, reverse ranges and dates over the backend limit", () => {
  expect(validAbsenceDates("2026-02-30", "2026-03-01")).toBe(false);
  expect(validAbsenceDates("2026-11-14", "2026-11-12")).toBe(false);
  expect(validAbsenceDates("2026-11-01", "2026-12-02")).toBe(false);
  expect(validAbsenceDates("2026-11-01", "2026-12-01")).toBe(true);
  expect(validAbsenceDates("2028-02-29", "2028-02-29")).toBe(true);
  view();
  fill();
  fireEvent.change(screen.getByLabelText(/^To/), {
    target: { value: "2026-12-31" },
  });
  fireEvent.click(
    screen.getByRole("button", { name: "Submit absence report" }),
  );
  expect(screen.getByText(/Enter valid ordered dates/)).toBeInTheDocument();
  expect(mock.run).not.toHaveBeenCalled();
});
it("admits only one overlapping submission even before the busy state renders", async () => {
  let resolve!: (value: unknown) => void;
  mock.run.mockImplementation(
    () =>
      new Promise((r) => {
        resolve = r;
      }),
  );
  const { container } = view();
  fill();
  const form = container.querySelector("form")!;
  fireEvent.submit(form);
  fireEvent.submit(form);
  expect(mock.run).toHaveBeenCalledTimes(1);
  await act(async () => resolve({ id: "saved", status: "submitted" }));
});
it("preserves the explanation and dates after an unavailable save", async () => {
  mock.run.mockResolvedValue(undefined);
  view();
  fill();
  fireEvent.click(
    screen.getByRole("button", { name: "Submit absence report" }),
  );
  await waitFor(() => expect(mock.run).toHaveBeenCalledTimes(1));
  expect(
    screen.getByRole("textbox", { name: /Absence explanation/ }),
  ).toHaveValue("  Synthetic explanation / توضيح تجريبي  ");
  expect(screen.getByLabelText(/^To/)).toHaveValue("2026-11-14");
  expect(screen.queryByText(/Your report was saved/)).not.toBeInTheDocument();
});
it("renders Arabic reporting controls while preserving explicit capability gating", () => {
  view(true, "ar");
  expect(
    screen.getByRole("button", { name: "إرسال بلاغ الغياب" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /توضيح الغياب/ }),
  ).toBeInTheDocument();
});
