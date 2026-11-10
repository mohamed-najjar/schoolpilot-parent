# Phase 6C test report

Executed locally on 2026-11-10. Exact log hashes and summaries are in
VERIFICATION_RESULTS.json; raw private evidence is retained in
/private/tmp/schoolpilot-phase6c-20261110/. No credentials/auth storage are packaged.

| Check | Actual result |
|---|---|
| Empty-node_modules immutable Parent install | PASS; separate disposable installation with exact package/lock/config hashes |
| Parent API generation and exact check | PASS against current sibling backend school/control contracts |
| Parent TypeScript / ESLint / production build | PASS; build ran with private .env.local removed and restored afterwards |
| Parent unit/component/auth/security | 26 tests in 9 files PASS; final added test covers escaped untrusted display text |
| Parent Python archive policy | 3 tests PASS |
| Parent production dependency audit | PASS, exit 0; no reported production advisory |
| Complete Go race + PostgreSQL integration | 118 top-level tests / 231 test-subtest passes; zero failures/test skips/races; integration package 286.868 seconds |
| Tagged Go vet / Staticcheck / govulncheck | PASS; vulnerability scan reports no vulnerabilities |
| Exact generated Go/OpenAPI | 13 artifacts match; PASS |
| Backend Python policy tests | 8 PASS |
| Clean/down/up/populated migration regressions | PASS in full PostgreSQL suite; 22 school + 2 control migrations retained |
| Final populated Compose build/migrate/provision/readiness | PASS; OIDC/discovery/persistence/two-school isolation smoke PASS |
| Existing real multi-role identity acceptance | 91 assertions PASS against final backend |
| Real-service Parent Playwright | 26/26 PASS, 0 skipped, 0 flaky, 343.913 seconds |
| Responsive/a11y matrix | All 7 widths × 2 languages × 2 themes; 310 axe scans, zero violations in full suite |
| Teacher unchanged compatibility | TypeScript, ESLint, 34 unit tests / 13 files PASS |
| Management unchanged compatibility | TypeScript, ESLint, 24 unit tests / 5 files PASS |

The live synthetic fixture runs the retained 223-assertion Teacher/Phase 3 workflow
then 50 Parent setup assertions, with one immutable central identity, two independent
schools and three children. Real API/browser tests verify attendance/history,
assignment filters, public feedback, large protected materials, published zero and
report snapshots, conversation creation/message send/upload/download, announcements,
notification state, cross-child/school/context denial, logout and current guardian
revocation without losing teacher authority. No external email delivery claim.

## Failures found and corrected

- Confirmed failing-before guardian attendance note disclosure: corrected minimized
  non-staff projection and history; staff constraints/access retained.
- Initial full Go run failed a new fixture's 43-character student number against the
  existing 40-character constraint. Fixture uses deterministic bounded row numbers;
  final full run passes without changing the constraint.
- Initial fixture drafts blocked period report sealing and a year-create payload
  contained unsupported status. Fixtures now use a separate unpublished period and
  the real year lifecycle transition. No publication rule was changed.
- Initial browser run: 22 pass / 4 fail. Actual message persistence succeeded but
  SWR deduplication hid the refreshed list; fixed revision keys and regression test.
  Other failures were an overbroad heading locator, duplicate alert locator and a
  body on a bodyless synthetic restriction endpoint. All pass in the final 26 run.
- Initial refresh unit tests mocked all next/navigation exports; corrected a partial
  mock to retain the real Emotion integration export. All 26 final unit tests pass.
- The first Staticcheck attempt lacked sandbox DNS; rerun with permitted network
  access passed. Early parser/type/lint fixture diagnostics were fixed before the
  final type/lint/build and full browser run. Failed logs remain, never reclassified.

Six screenshot workflow tests were additionally rerun after changing only the capture
helper to reset scroll/focus. Teacher/Management builds and their full browser suites
were not rerun in this phase; their source/commits remain unchanged. Cross-portal SSO
and teacher API behavior were tested in the Parent live suite. Hosted CI execution,
production deployment, new backup/restore execution and production readiness are not
claimed. Existing backend migration/operational regressions are retained.

Reproduction commands are in README. The final live test restricts a synthetic link;
use a fresh fixture for a complete rerun, never undo a real revocation to pass tests.

The immutable install exits successfully with existing transitive peer diagnostics
for Next's ESLint utility and the optional WASM Rolldown binding. The native build,
ESLint, types and tests pass. No unused direct packages were added to hide the
warning; peer-requirements.log records the exact diagnostic.

Precommit staged-source/history scans in all four repositories and all 30 Parent
browser JavaScript bundles reported zero active-secret/private-key/token findings.
The 34 backend and 106 Parent staged files contain no runtime artifacts or binary
files. Separate committed-source archive scans/manifest verification run at delivery.
