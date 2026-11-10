import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFileSync, mkdirSync, appendFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const fixture = JSON.parse(readFileSync(process.env.PW_FIXTURE!, "utf8"));
const evidence = process.env.PW_EVIDENCE || "/tmp/schoolpilot-parent-evidence";
mkdirSync(evidence, { recursive: true });
const query = `?school=${fixture.school_id}&child=${fixture.student_id}`;
const api = (path: string, school = fixture.school_id) =>
  `/api/schools/${school}/${path}`;
async function login(page: Page, username = fixture.parent_username) {
  await page.goto("/auth/login");
  await page.locator("#username").fill(username);
  await page.locator("#password").fill(process.env.PW_TEST_PASSWORD!);
  await page.locator("#kc-login").click();
  await expect(page).toHaveURL(/localhost:3002\/family/);
}
async function navigate(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("main")).toBeVisible();
  await page.waitForTimeout(200);
}
async function axe(page: Page, label: string) {
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  appendFileSync(
    evidence + "/accessibility.jsonl",
    JSON.stringify({
      label,
      violations: result.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.map((n) => n.target),
      })),
    }) + "\n",
  );
  expect(result.violations, label).toEqual([]);
}
async function shot(page: Page, name: string) {
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(100);
  await page.screenshot({ path: `${evidence}/${name}.png`, fullPage: true });
}
async function noOverflow(page: Page) {
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1,
    ),
  ).toBe(false);
  const clipped = await page
    .locator('main button,header button,main [role="combobox"]')
    .evaluateAll(
      (nodes) =>
        nodes.filter((n) => {
          const r = n.getBoundingClientRect(),
            style = getComputedStyle(n);
          return (
            style.display !== "none" &&
            r.width > 0 &&
            (r.left < -1 || r.right > innerWidth + 1)
          );
        }).length,
    );
  expect(clipped).toBe(0);
}
async function choose(page: Page, label: string, option: string) {
  await page.getByRole("combobox", { name: label, exact: true }).click();
  await page.getByRole("option", { name: option, exact: true }).click();
  await page.waitForLoadState("networkidle");
}

test("one teacher guardian principal identity establishes independent parent SSO and school contexts", async ({
  page,
}) => {
  await page.goto("http://localhost:3001/auth/login");
  await page.locator("#username").fill(fixture.parent_username);
  await page.locator("#password").fill(process.env.PW_TEST_PASSWORD!);
  await page.locator("#kc-login").click();
  await expect(page).toHaveURL("http://localhost:3001/schools");
  const teacher = (await page.context().cookies()).find(
    (c) => c.name === "schoolpilot-teacher-session",
  );
  expect(teacher?.httpOnly).toBe(true);
  await page.goto("/auth/login");
  await expect(page).toHaveURL("http://localhost:3002/family");
  expect(await page.locator("#password").count()).toBe(0);
  const parent = (await page.context().cookies()).find(
    (c) => c.name === "schoolpilot-parent-session",
  );
  expect(parent?.httpOnly).toBe(true);
  expect(parent?.sameSite).toBe("Lax");
  expect(parent?.value).not.toBe(teacher?.value);
  const family = await (await page.request.get("/api/family")).json();
  expect(
    family.schools.flatMap((s: { items: unknown[] }) => s.items),
  ).toHaveLength(3);
  expect(
    family.schools.filter((s: { items: unknown[] }) => s.items.length),
  ).toHaveLength(2);
  await navigate(
    page,
    `/children?school=${fixture.school_b_id}&child=${fixture.child_b_id}`,
  );
  await expect(
    page.getByText("Synthetic child at a second school " + fixture.run, {
      exact: true,
    }),
  ).toBeVisible();
  await page.goto(`http://localhost:3001/s/${fixture.school_id}/day`);
  await expect(page.locator("main")).toBeVisible();
  expect(
    (
      await page.request.get(
        `http://localhost:3001${api(`learning-courses/${fixture.course_id}/roster?section_id=${fixture.section_id}`)}`,
      )
    ).status(),
  ).toBe(200);
  expect(
    (
      await page.request.get(
        `http://localhost:3001${api("students/" + fixture.other_student_id)}`,
      )
    ).status(),
  ).toBe(404);
  expect(
    (
      await page.request.get(
        `http://localhost:3001${api("me", fixture.school_b_id)}`,
      )
    ).status(),
  ).toBe(403);
});

test("family cards and child profile show real authorized data", async ({
  page,
}) => {
  await login(page);
  await navigate(page, "/family");
  await expect(
    page.getByRole("link", { name: "View child", exact: true }),
  ).toHaveCount(3);
  await shot(page, "family-desktop-en");
  await axe(page, "family-desktop-en");
  await navigate(page, "/children" + query);
  await expect(page.getByText(/Student number:/)).toBeVisible();
  await shot(page, "child-profile");
});

test("guardian attendance contains no staff notes and history remains readable", async ({
  page,
}) => {
  await login(page);
  await navigate(page, "/attendance" + query);
  await expect(page.getByText("Summary of this page")).toBeVisible();
  const records = await (
    await page.request.get(
      api(
        `students/${fixture.student_id}/attendance?starts_on=${fixture.date}&ends_on=${fixture.date}`,
      ),
    )
  ).json();
  expect(records.items.length).toBeGreaterThan(0);
  for (const r of records.items) {
    expect(r).not.toHaveProperty("note");
    expect(r).not.toHaveProperty("updated_by");
  }
  await page
    .getByRole("button", { name: "Change history", exact: true })
    .first()
    .click();
  await expect(
    page.getByRole("button", { name: "Change history", exact: true }).first(),
  ).toHaveAttribute("aria-expanded", "true");
  await axe(page, "attendance-history");
  await shot(page, "attendance-history");
});

test("homework filters, final work, public feedback and large protected material downloads", async ({
  page,
}) => {
  await login(page);
  await navigate(page, "/homework" + query);
  await expect(
    page.getByText("Synthetic reading review", { exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", {
      name: "Teacher feedback · Attachments",
      exact: true,
    })
    .first()
    .click();
  await expect(
    page.getByText("Thoughtful work / عمل متقن", { exact: true }),
  ).toBeVisible();
  const feedback = await (
    await page.request.get(
      api(`assignment-recipients/${fixture.recipient_id}/feedback`),
    )
  ).json();
  expect(JSON.stringify(feedback)).not.toContain("PRIVATE-FAMILY");
  const context = await (
    await page.request.get(api("guardian/children/" + fixture.student_id))
  ).json();
  const course = context.courses.find(
    (c: { id: string }) => c.id === fixture.course_id,
  );
  await choose(page, "Subject", course.name_en);
  await expect(
    page.getByText("Family reading material", { exact: true }),
  ).toBeVisible();
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "family-reading.txt", exact: true })
    .click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("family-reading.txt");
  await axe(page, "homework-feedback-materials");
  await shot(page, "homework");
});

test("published zero grades and report snapshots never expose draft grades or staff notes", async ({
  page,
}) => {
  await login(page);
  await navigate(page, "/results" + query);
  await expect(
    page.getByText("Published family assessment", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("PRIVATE UNPUBLISHED RESULT")).toHaveCount(0);
  const response = await page.request.get(
    api("students/" + fixture.student_id + "/academic-grades"),
  );
  expect(response.status()).toBe(200);
  const grades = await response.json();
  expect(
    grades.items.some(
      (g: { state: string; value: string }) =>
        g.state === "graded" && g.value === "0",
    ),
  ).toBe(true);
  expect(JSON.stringify(grades)).not.toMatch(/PRIVATE|private_note|author_id/);
  await expect(
    page.getByText("Family published term report", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "View results", exact: true }).click();
  await axe(page, "published-results");
  await shot(page, "published-results");
});

test("guardian messaging uses only eligible contacts and real persisted messages", async ({
  page,
}) => {
  await login(page);
  await navigate(page, "/messages" + query);
  await expect(
    page.getByText("Family conversation / محادثة العائلة", { exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Open messages", exact: true })
    .first()
    .click();
  await expect(
    page.getByText("Synthetic family message / رسالة تجريبية للعائلة", {
      exact: true,
    }),
  ).toBeVisible();
  const contacts = await (
    await page.request.get(
      api(`guardian/children/${fixture.student_id}/contacts`),
    )
  ).json();
  const contact =
    contacts.items.find(
      (c: { name_en: string }) => !c.name_en.includes("teacher-0"),
    ) || contacts.items[0];
  await choose(page, "Teacher", contact.name_en);
  const subject = "Browser family conversation " + Date.now();
  await page
    .getByRole("textbox", { name: "Conversation subject", exact: true })
    .fill(subject);
  await page
    .getByRole("button", { name: "Start conversation", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: subject, exact: true }),
  ).toBeVisible();
  const body =
    "Browser guardian message " + Date.now() + " / رسالة من ولي الأمر";
  await page.locator('input[type="file"]').setInputFiles({
    name: "guardian-message.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("Synthetic guardian attachment / مرفق تجريبي"),
  });
  await expect(
    page.getByText("guardian-message.txt", { exact: true }),
  ).toBeVisible();
  await page
    .getByRole("textbox", { name: "Your message", exact: true })
    .fill(body);
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  await expect(page.getByText(body, { exact: true })).toBeVisible();
  const attachment = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Download attachment", exact: true })
    .click();
  expect((await attachment).suggestedFilename()).toBe("guardian-message.txt");
  await axe(page, "messaging");
  await shot(page, "messages");
  const denied = await page.request.post(api("conversations"), {
    headers: {
      Origin: "http://localhost:3002",
      "Content-Type": "application/json",
      "Idempotency-Key": "parent-arbitrary-contact",
    },
    data: {
      student_id: fixture.student_id,
      staff_id: fixture.child_b_id,
      relationship_id: fixture.primary_relationship_id,
      subject: "Disallowed arbitrary recipient",
    },
  });
  expect([403, 404]).toContain(denied.status());
});

test("timetable announcements and notifications read from actual services", async ({
  page,
}) => {
  await login(page);
  await navigate(page, "/timetable" + query);
  const lessons = await (
    await page.request.get(
      api(
        `lessons?student_id=${fixture.student_id}&starts_on=${fixture.date}&ends_on=${fixture.date}`,
      ),
    )
  ).json();
  expect(lessons.items.length).toBeGreaterThan(0);
  await axe(page, "timetable");
  await navigate(page, "/announcements" + query);
  await expect(
    page.getByText("Family school announcement", { exact: true }),
  ).toBeVisible();
  await axe(page, "announcements");
  await navigate(page, "/notifications" + query);
  const unread = page.getByRole("button", {
    name: "Mark as read",
    exact: true,
  });
  if (await unread.count()) {
    await unread.first().click();
    await expect(page.getByText("Saved", { exact: true })).toBeVisible();
  }
  await axe(page, "notifications");
});

test("guardian administrator roles cannot increase parent API permissions", async ({
  page,
}) => {
  await login(page);
  const base = api("guardian/children/" + fixture.student_id);
  expect(
    (
      await page.request.get(base, {
        headers: { "X-SchoolPilot-Workspace": "management" },
      })
    ).status(),
  ).toBe(200);
  for (const path of [
    "management/students",
    "me/grants",
    `learning-courses/${fixture.course_id}/roster?section_id=${fixture.section_id}`,
  ])
    expect((await page.request.get(api(path))).status()).toBe(403);
  expect(
    (
      await page.request.post(api("assignments"), {
        headers: {
          Origin: "http://localhost:3002",
          "Content-Type": "application/json",
        },
        data: {},
      })
    ).status(),
  ).toBe(403);
});

test("cross-child school and request-context manipulation fail without leaking data", async ({
  page,
}) => {
  await login(page);
  expect(
    (
      await page.request.get(
        api("guardian/children/" + fixture.unrelated_student_id),
      )
    ).status(),
  ).toBe(404);
  expect(
    (
      await page.request.get(
        api("students/" + fixture.unrelated_student_id + "/assignments"),
      )
    ).status(),
  ).toBe(404);
  expect(
    (
      await page.request.get(
        api("guardian/children/" + fixture.student_id, fixture.school_b_id),
      )
    ).status(),
  ).toBe(404);
  expect(
    (
      await page.request.get(
        "/api/family?school_id=ffffffff-ffff-4fff-8fff-ffffffffffff",
      )
    ).status(),
  ).toBe(403);
  expect(
    (
      await page.request.post(api("conversations"), {
        headers: {
          Origin: "http://evil.test",
          "Content-Type": "application/json",
        },
        data: {},
      })
    ).status(),
  ).toBe(403);
  const response = await page.request.get("/api/family");
  expect(response.headers()["cache-control"]).toContain("no-store");
  expect(JSON.stringify(await response.json())).not.toMatch(
    /accessToken|refreshToken|idToken|Bearer /,
  );
  await navigate(
    page,
    `/children?school=${fixture.school_id}&child=${fixture.unrelated_student_id}`,
  );
  await expect(page.locator("main").getByRole("alert")).toContainText(
    "unavailable",
  );
  await axe(page, "authorization-error");
  await shot(page, "error-state");
});

test("account without guardian relationships sees a truthful empty family", async ({
  page,
}) => {
  await login(page, "demo-accountant-a");
  await navigate(page, "/family");
  await expect(page.getByText(/No children are linked/)).toBeVisible();
  await axe(page, "empty-family");
  await shot(page, "empty-state");
});

test("logout invalidates parent session and uncached child access", async ({
  page,
}) => {
  await login(page);
  await navigate(page, "/family");
  await page.locator('form[action="/auth/logout"] button').click();
  await expect(page).toHaveURL(/localhost:3002\/login/);
  expect((await page.request.get("/api/family")).status()).toBe(401);
  await page.goto("/attendance" + query);
  await expect(page).toHaveURL(/\/login/);
});

for (const locale of ["en", "ar"])
  for (const width of [1440, 1280, 768, 430, 390, 360, 320]) {
    test(`${locale} ${width}px light dark responsive guardian workflows`, async ({
      page,
    }) => {
      await page.context().addCookies([
        {
          name: "schoolpilot-parent-locale",
          value: locale,
          domain: "localhost",
          path: "/",
        },
      ]);
      await page.setViewportSize({ width, height: 900 });
      await login(page);
      for (const mode of ["light", "dark"]) {
        await page.context().addCookies([
          {
            name: "schoolpilot-parent-mode",
            value: mode,
            domain: "localhost",
            path: "/",
          },
        ]);
        for (const path of [
          "family",
          "children",
          "attendance",
          "homework",
          "results",
          "messages",
          "timetable",
          "announcements",
          "notifications",
          "profile",
        ]) {
          await navigate(page, "/" + path + (path === "family" ? "" : query));
          await expect(page.locator("html")).toHaveAttribute(
            "dir",
            locale === "ar" ? "rtl" : "ltr",
          );
          await noOverflow(page);
          await axe(page, `${locale}-${width}-${mode}-${path}`);
          if (
            path === "family" &&
            mode === "light" &&
            [1440, 390].includes(width)
          )
            await shot(page, `family-${width}-${locale}`);
          if (path === "homework" && width === 320)
            await shot(page, `homework-320-${locale}-${mode}`);
        }
        if (width < 1100) {
          await page
            .getByRole("button", {
              name: locale === "ar" ? "فتح القائمة" : "Open navigation",
              exact: true,
            })
            .click();
          await expect(page.getByRole("navigation")).toBeVisible();
          await axe(page, `${locale}-${width}-${mode}-navigation`);
          await page
            .getByRole("button", {
              name: locale === "ar" ? "إغلاق القائمة" : "Close navigation",
              exact: true,
            })
            .click();
        }
      }
    });
  }

test("relationship revocation blocks parent access immediately and after refresh while teaching stays valid", async ({
  page,
}) => {
  await page.goto("http://localhost:3001/auth/login");
  await page.locator("#username").fill(fixture.parent_username);
  await page.locator("#password").fill(process.env.PW_TEST_PASSWORD!);
  await page.locator("#kc-login").click();
  await expect(page).toHaveURL("http://localhost:3001/schools");
  await page.goto("/auth/login");
  await expect(page).toHaveURL("http://localhost:3002/family");
  expect(
    (
      await page.request.get(
        api("guardian/children/" + fixture.child_b_id, fixture.school_b_id),
      )
    ).status(),
  ).toBe(200);
  execFileSync(
    "python3",
    ["-B", "scripts/test-actor.py", process.env.PW_FIXTURE!, "restrict-b"],
    { stdio: "pipe" },
  );
  expect(
    (
      await page.request.get(
        api("guardian/children/" + fixture.child_b_id, fixture.school_b_id),
      )
    ).status(),
  ).toBe(404);
  expect(
    (
      await page.request.get(
        `http://localhost:3001${api(`learning-courses/${fixture.course_id}/roster?section_id=${fixture.section_id}`)}`,
      )
    ).status(),
  ).toBe(200);
  await page.waitForTimeout(35000);
  expect(
    (
      await page.request.get(
        api("guardian/children/" + fixture.child_b_id, fixture.school_b_id),
      )
    ).status(),
  ).toBe(404);
  expect(
    (
      await page.request.get(
        `http://localhost:3001${api(`learning-courses/${fixture.course_id}/roster?section_id=${fixture.section_id}`)}`,
      )
    ).status(),
  ).toBe(200);
  const family = await (await page.request.get("/api/family")).json();
  expect(
    family.schools.find(
      (s: { school: { id: string } }) => s.school.id === fixture.school_b_id,
    ).items,
  ).toHaveLength(0);
});
