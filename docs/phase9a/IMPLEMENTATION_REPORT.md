# Phase9A source verification

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
