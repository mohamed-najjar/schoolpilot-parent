# Parent Portal progress

Phase 6C review milestone: independent bilingual family portal, current guardian
relationships across two schools, domain reads/communications, independent central
SSO and current revocation verified. All nine requested reports and provenance are
under phase6c/. See TEST_REPORT for exact passing checks and retained diagnostics.

Run `sh scripts/yarn.sh typecheck`, `lint`, `test`, `api:check`, `build`; see README
for real Compose/Keycloak/Teacher/Redis fixture and browser commands. Final local
browser 26/26, unit/component/auth 26/26, complete backend race/integration 118 roots /
231 test-subtest passes. No new migration or dependency upgrade. Teacher and
Management source is unchanged. Artifacts are generated from committed source only.

Production operational acceptance, manual accessibility/native-device testing,
message receipts, official attendance aggregates, central/local direct-JWT revocation
coordination and existing object lifecycle/product gaps remain explicit. No Student
Portal, finance or Phase 6D work. Stop for independent review.
