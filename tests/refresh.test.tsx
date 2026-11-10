import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { test, expect, vi, afterEach } from "vitest";
import { SWRConfig } from "swr";
import Providers from "@/components/Providers";
import { Paged } from "@/features/family/shared";
import { FamilyHome } from "@/features/family/Family";
import { FamilyProvider, useFamily } from "@/features/family/Context";
vi.mock("next/navigation", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/navigation")>()),
  useSearchParams: () => new URLSearchParams(),
}));
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
test("successful write revision reloads the list despite the deduplication window", async () => {
  const fetch = vi
    .fn()
    .mockResolvedValueOnce(json({ items: ["old"], next_cursor: "" }))
    .mockResolvedValueOnce(
      json({ items: ["old", "new persisted message"], next_cursor: "" }),
    );
  vi.stubGlobal("fetch", fetch);
  const config = { provider: () => new Map(), dedupingInterval: 60000 };
  const view = (fresh: number) => (
    <Providers locale="en">
      <SWRConfig value={config}>
        <Paged<string>
          fresh={fresh}
          school="school"
          path="conversations/record/messages"
        >
          {(items) => (
            <div>
              {items.map((x) => (
                <p key={x}>{x}</p>
              ))}
            </div>
          )}
        </Paged>
      </SWRConfig>
    </Providers>
  );
  const { rerender } = render(view(0));
  await screen.findByText("old");
  rerender(view(1));
  await screen.findByText("new persisted message");
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(fetch.mock.calls[0][0]).toBe(fetch.mock.calls[1][0]);
});
function Refresh() {
  const f = useFamily();
  return <button onClick={() => void f.mutate()}>Refresh fixture</button>;
}
test("a denied family refresh removes previously cached sensitive child cards", async () => {
  const data = {
    schools: [
      {
        school: {
          id: "s",
          name_en: "Synthetic school",
          name_ar: "مدرسة",
          code: "S",
        },
        items: [
          {
            id: "c",
            school_id: "s",
            first_name: "Private child display",
            last_name: "Synthetic",
            first_name_ar: "ابن",
            last_name_ar: "تجريبي",
            student_number: "C",
            relationship_id: "r",
            can_view_academics: true,
            can_receive_messages: true,
            can_report_absence: false,
            classes: [],
            today_lessons: [],
            today_lesson_count: 0,
            due_assignments: [],
            recent_attendance: [],
            published_results: [],
          },
        ],
        next_cursor: "",
      },
    ],
  };
  const fetch = vi
    .fn()
    .mockResolvedValueOnce(json(data))
    .mockResolvedValueOnce(json({ code: "session_expired" }, 401));
  vi.stubGlobal("fetch", fetch);
  render(
    <Providers locale="en">
      <FamilyProvider>
        <Refresh />
        <FamilyHome directory />
      </FamilyProvider>
    </Providers>,
  );
  await screen.findByText("Private child display Synthetic");
  fireEvent.click(screen.getByText("Refresh fixture"));
  await screen.findByText("Your session has ended. Please sign in again.");
  await waitFor(() =>
    expect(
      screen.queryByText("Private child display Synthetic"),
    ).not.toBeInTheDocument(),
  );
});
