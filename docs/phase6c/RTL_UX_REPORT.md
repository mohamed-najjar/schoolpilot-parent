# Arabic, responsive UX and accessibility

Real Chromium acceptance covers English/Arabic × widths 1440, 1280, 768, 430, 390,
360 and 320 × light/dark × ten routes (280 page checks). Mobile drawers add 20
navigation scans. Ten functional/error/empty scans bring the uninterrupted final
suite to 310 axe scans, all with zero violations for WCAG 2.2 AA tags. No document
horizontal overflow or off-screen interactive controls were reported by the
geometry assertions. HTML dir is checked on every page.

Coverage includes Family Home, child directory/context, attendance, homework,
results, messages, timetable, announcements, notifications and profile/preferences.
Inter and Noto Sans Arabic load from bundled assets. Layout uses RTL theme/cache,
logical alignment, responsive stacked controls, wrapped actions and bidi boundaries.
Dates use the school Asia/Dubai timezone; number and grading display respect locale.
Native school-defined Arabic/English content is preserved rather than rewritten.

Screenshots include family desktop/mobile in both languages, two children at one
school and one at a second, profile, attendance history, homework with public
feedback/protected resources, published zero/report snapshots, messages, empty and
authorization error states, and 320px homework in both themes/languages.
Screenshots were inspected. Review captures reset scroll and blur the active
control before full-page capture so fixed navigation is not painted midway down a
scrolled document. Six affected workflow screenshots were recaptured separately;
this changes the test capture helper, not application layout or access rules.

This is automated Chromium evidence plus visual screenshot review, not a manual
screen-reader audit or native Safari/Firefox/device certification. Those remain
open. The screenshot archive manifest identifies the exact captured files/hashes.
