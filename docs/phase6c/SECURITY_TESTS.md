# Phase 6C security verification

Executed locally on 2026-11-10, with real Keycloak, PostgreSQL, separate BFF Redis
sessions and the current Go services. No mocked production endpoints or browser
auth-state files. The full 118-root Go race/integration run includes every prior
Phase 1–6B.1 regression. No failed or skipped test case and no race was reported.
Packages without tests are not counted as passed test cases.

## New PostgreSQL/HTTP regressions

| Test | Verified behavior |
|---|---|
| TestGuardianAttendanceExcludesStaffNotes | Actual teacher mark/submit followed by guardian history/read; no staff note/reason/actor leak; full authorized staff detail retained |
| TestGuardianFamilyReadModels | Current individual rights/restrictions; minimized child/contact/profile projections; teacher/admin context cannot substitute for guardian rights; bilingual/invalid inputs |
| TestGuardianFamilyAuditFailure | Transactional audit failure rejects family reads; no successful unaudited child view |
| TestGuardianFamilyPaginationAndRights | 105 children traversed as 100+5 without duplicates; Arabic search; messaging-only children expose no academic previews |
| TestGuardianPublishedZeroAndPrivateGrade | Published zero is visible; private notes and unpublished grades are absent |
| TestGuardianHomeworkFiltersAndChildTimetable | Homework filters occur before pagination, progress withholding is respected, and child timetables stay scoped |

The attendance regression failed against the prior implementation after a valid
mark/submit lifecycle. The corrected response omits internal notes and workflow
identities for guardians/students. The fixture initially attempted to update a
submitted immutable roster directly; PostgreSQL correctly rejected it. That diagnostic
is not cited as the privacy reproduction. No constraint was bypassed or weakened.

Target teacher message eligibility uses actual stored scoped teacher grants,
independent of the requesting guardian workspace. Creating/sending a conversation
still rechecks the current relationship, active enrollment and teaching assignment.
The requesting actor's capability checks are unchanged.

## Parent and live browser security

- Unit tests cover encrypted opaque sessions, ciphertext tamper/wrong-key rejection,
  secure configuration, discovery allowlisting and in-flight deduplication, fixed
  guardian headers, forged/absent-origin mutation rejection and forbidden API paths.
- Component tests cover two-school/three-child cards, truthful partial-school failure,
  explicit errors, immediate post-write cache revision, denied-family cache removal
  and escaping untrusted child display HTML. These use test doubles only for isolated
  unit/component checks; the live suite below uses actual services.
- Live Teacher-to-Parent SSO uses one central teacher/principal/guardian identity,
  separate HttpOnly SameSite=Lax session cookies and no second password prompt.
- Real requests reject an unrelated child taught by that same teacher, a school A
  child ID at school B, an undiscovered school, forged workspace escalation, teacher/
  administrative API access, arbitrary conversation recipients and forged-origin writes.
- Attendance/history/private feedback and draft grade disclosure checks pass.
  Protected object-storage material and message attachments download through current
  authorization. A material larger than 32 KiB is retrieved successfully.
- Logout makes /api/family return 401 and protected pages redirect to login. Responses
  use no-store and contain no access/refresh/ID tokens. Runtime JWTs stay server-side.
- Restricting the school B guardian relationship rejects the next child read (404),
  again after token refresh; Teacher roster access remains 200. Family refresh no
  longer returns the revoked child. The existing 91-assertion real multi-role/two-school
  acceptance script also passes against the final backend.

Local HTTP intentionally has no Secure cookie flag; HTTPS configuration requires
it. No production TLS/MFA or manual penetration-test acceptance is claimed. The
existing CSP retains an inline script/style allowance for the established Next
integration; nonce-based hardening is not implemented in this phase. Current-request
revocation cannot recall previously delivered data; central-only membership changes
need local coordination for direct JWT clients. See IDENTITY_AND_SSO and REMAINING_GAPS.
