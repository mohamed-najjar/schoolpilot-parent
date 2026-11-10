# Family information architecture

Primary navigation: Family Home, My Children, Attendance, Homework, Results,
Messages. Contextual navigation: Timetable, Announcements, Notifications and Guardian
Profile. Language, appearance and logout remain accessible in the header. Mobile
uses a labeled modal drawer; desktop uses persistent navigation. No teacher or
management controls are shown.

Family Home combines authorized children across schools. Each card shows the
child's bilingual name, school, current classes, up to three real daily lessons,
due assignments, recent submitted/approved attendance events and published result
notices. Quick links preserve the school/child pair. Updates are grouped by school.
No invented totals, risk alerts, message read receipts or delivery claims appear.
Notifications use their actual read_at field; message unread state is unavailable.

My Children is the same paginated authorized directory without daily previews.
Profiles show minimized identity and current subject context with relevant links.
Attendance has date filters, current-page counts separated into daily/lesson records,
status history and the requesting guardian's own existing explanations. These counts
are explicitly labeled as a page summary, not official school attendance statistics.
There is no parent attendance editing or new absence-reporting interface.

Homework supports subject, progress, lifecycle and date filtering, complete cursor
navigation, instructions, authorized submission status/final work, published feedback
and protected learning-resource downloads. Guardians cannot submit or review work.
Results show published assessments and grades including zero, configured bands and
rubrics, backend subject progress for a selected period/course and published report
snapshots. Missing/non-authoritative results are explicit. Grading is never computed
in this frontend. Historical published revisions follow the existing backend APIs.

Messages provide current eligible teachers, conversation creation, real history,
composition and existing protected attachments. Announcements are filtered server-side
for the selected child plus school-wide content. Notifications and preferences are
school-local for the signed-in person, not falsely represented as child-specific.
Profile identity is read-only; only existing personal notification preferences can
be changed. Queued/processed/delivered/failed remain distinct.

English and Arabic copy use matched typed dictionaries, Inter/Noto Sans Arabic,
logical alignment, native RTL, locale-aware Dubai dates/numbers and bidi boundaries
for identifiers and mixed-language content. Empty, denied, partial-school failure,
loading, retry and successful-write states are explicit. No charts or dense employee
administration screens are copied into the family experience.
