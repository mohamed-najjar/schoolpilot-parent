# Phase9A source verification

## Guardian absence reporting and actual-service verification

Attendance now provides bilingual, child-specific absence reporting under the
existing can_report_absence capability, separately from academic-read permission.
Ordered dates no more than30 days apart and1–2000-character explanations reuse the
existing PostgreSQL/idempotency APIs. Only GET/POST absence-reports are added to the
Parent BFF allowlist; office review and attendance marking remain forbidden. The
BFF still pins guardian context, checks the current selected-school capability and
rejects forged-origin writes. Failed saves retain the draft; overlapping clicks
cannot send two reports. The displayed saved status explicitly does not imply an
automatic attendance correction. Scoped reports show actual school review status.

The current Parent types/lint/contracts/production build and53 unit/component/auth/
security tests pass (guardian-absence-*-v2). New route before-tests fail as expected;
corrected BFF/form tests pass. The actual current-image500-student scenario verifies
a multi-child guardian's two-day report, independent administrative review and
controlled principal-approved absent-to-excused history without losing the original
mark. Complete preserved browser/accessibility/mobile suites remain pending.

Role probes share only overlapping requests; completed authority is not cached.
429/validated Retry-After remain explicit. No dependency, upload or DB schema change.


## Actual-role school selection and reconciliation contracts

School discovery now observes current local portal capability and verifies the
actual deployment ID after central affiliation/origin checks. No completed role
result is cached; selected-school resources never probe another school. Denied
capabilities are omitted; unavailable/old/malformed/misrouted services remain explicit
unavailable states. Existing resource authorization and narrowed BFF contexts stay.
Management additionally exposes bilingual complete aggregate reconciliation and
checksum-verified fixed CSV export; other portals receive generated API contracts.

Executed:39 unit/component/security tests, TypeScript, lint, API contracts and
production build pass at backend phase9a TEST_REPORT's recorded scope. Actual-service
Keycloak/school-scale/mobile/accessibility acceptance and full final regressions
remain pending. No new dependency, upload type or production deployment is added.
