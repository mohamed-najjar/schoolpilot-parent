# Guardian API inventory

All school paths below are under `/api/v1`, use bearer authentication in the Go API
and are proxied only through a server-pinned guardian context. The browser sends no
tokens. The control-plane `/api/v1/schools` supplies trusted membership discovery.
The generated school contract contains 186 operations (182 before this phase).

## Four new school reads

| Method and path | Purpose and scope |
|---|---|
| GET /guardian/children | Cursor/limit/q family projection; current unrestricted relationship, minimized identity, separately gated academic previews |
| GET /guardian/children/{id} | Current authorized child, complete current courses and periods containing visible published results |
| GET /guardian/profile | Own display identity and preferred language; no other guardian contacts |
| GET /guardian/children/{id}/contacts | Paginated eligible teaching staff display names and opaque messaging handles; no private staff details |

Current effective guardian role and relationship are checked in the bound school
DB. A visible family child needs at least one of academic, messaging or absence-report
rights. Academic context additionally requires can_view_academics; contacts require
can_receive_messages and current scoped teacher authority. Dates/restrictions apply.
Family/context and contact views are audited in the read transaction. Audit failure
fails the view. Profile returns only the actor's own record.

## Reused domain APIs

| Family view | Existing reads/writes |
|---|---|
| Attendance | GET /students/{id}/attendance; GET /attendance-records/{id}/history |
| Homework and feedback | GET /students/{id}/assignments; GET /assignment-recipients/{id}; GET /assignment-recipients/{id}/feedback and /submissions |
| Materials | GET /learning-content; GET /learning-content/{id}; GET /learning-files/{id} |
| Results | GET /students/{id}/academic-grades, /academic-progress and /report-cards; published snapshots only |
| Timetable | GET /lessons with student_id and date interval |
| Messages | GET/POST /conversations; GET/POST /conversations/{id}/messages; POST /conversations/{id}/attachments; GET /message-attachments/{id} |
| Announcements | GET /announcements with student_id |
| Notifications/profile | GET /notifications; POST /notifications/{id}/read; GET/PUT /notification-preferences |

Additional existing read paths retained in the BFF allowlist include assignment and
published report detail. Arbitrary API paths and teacher/admin/attendance/grading/
submission writes are blocked. The backend remains authoritative if the browser
supplies a guessed ID, forged role header or changed school context.

## Additive filters and privacy correction

Homework adds course_id/progress filters before pagination; progress filtering
excludes rows whose guardian progress is withheld. Lessons add student_id before
chronological pagination and exact episode checks. Announcements/conversations add
student_id before pagination. Grade rows add optional public title/subject/model
metadata. No authoritative calculation or publishing rule changes.

Attendance guardian/student responses now omit staff notes and workflow identities.
History omits staff reasons/actors and other guardians' explanations; report_after
paginates own explanations independently from after_version history. Authorized staff
retain full detail. This fixes a reproduced disclosure, not a relaxed constraint.

Versioned migration count is unchanged: 22 school + 2 control, 82 application tables.
No new storage, roles, grants or cross-database FK is needed. Existing object storage
serves learning files above 32 KiB; messaging keeps its existing 32 KiB limit.

`yarn api:generate` and `yarn api:check` use ../schoolpilot contracts, configurable
with BACKEND_SOURCE. School filters are implemented in Go, not after client paging.
