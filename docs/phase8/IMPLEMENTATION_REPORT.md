# Phase 8 parent portal implementation

Updated 2026-11-11.

Parent adds `/onboarding` for exact-recipient guardian activation and a
Boolean access notice bound only to a currently authorized selected child's school.
Existing child, attendance, learning, published results and communication workflows
remain scoped by current dated/unrestricted relationships and permission flags.

Invitations require an existing guardian profile and explicit relationship IDs.
The fresh real browser workflow activates one guardian for exactly2 imported
children, excludes an unrelated third child, denies that child's attendance and
rejects foreign-school and financial-history access. No general school role or
child relationship is invented during acceptance.

## Configuration and security

Four school portals retain independent PKCE/OIDC clients, encrypted opaque sessions
and Redis stores. `/onboarding` captures a one-time fragment in page memory and
removes it from the URL immediately. Sign-in uses a fixed return tab; the verified
central identity is displayed before acceptance. Tokens are never stored in Web
Storage, query parameters, browser auth-state files or cache keys. Reloading loses
the RAM-only link; use an explicit audited reissue when needed.

Configure MANAGEMENT_PORTAL_ORIGIN, TEACHER_PORTAL_ORIGIN, PARENT_PORTAL_ORIGIN and
STUDENT_PORTAL_ORIGIN using trusted public HTTPS origins in deployment. Local
loopback defaults are development-only. Four school portals default
ALLOW_PROVISIONED_LOCAL_SCHOOLS=false; explicitly enable it only for trusted
registered development tenants on localhost/127.0.0.1 ports18000–18999 with local
HTTP enabled. Production has no wildcard tenant trust. Populated `.env.local`,
credentials, ignored build/browser results and private synthetic evidence stay out
of Git and source archives.

Same-origin/CSRF, exact BFF route/workspace policies and backend resource authorization
remain. Non-administrators receive only a Boolean access projection, not prices,
contracts or operator financial records. Generated school clients project public
school APIs plus only required Control discovery/onboarding schemas. Private runtime
paths and unrelated operator routes remain excluded.

## Verification status

Current immutable install, TypeScript, lint, units, current API contract and production
build/start checks pass at their recorded checkpoints. The backend full race/
PostgreSQL run passes239 top-level/485 test-subtest events. A fresh real Keycloak/
HTTP/BFF/worker customer workflow passes150 checks; paired database/learning/import
recovery passes30 checks over103 tables,1 learning object and10 import sources.
These are separate scopes, not a combined test total. The preserved full portal browser suite and new seven-width, Arabic/English,
light/dark axe/screenshots now pass. Earlier interrupted/incorrect-harness attempts
remain failed and are not counted as passing cases.

The shared reproducible customer/visual/recovery runners and authoritative reports
are in the backend repository's `scripts/phase8_customer_*`,
`scripts/phase8_portal_ux.mjs` and `docs/phase8/`. Existing local commands remain:

```sh
sh scripts/yarn.sh install --immutable
sh scripts/yarn.sh typecheck
sh scripts/yarn.sh lint
sh scripts/yarn.sh test
sh scripts/yarn.sh api:check
sh scripts/yarn.sh build
```

With a fresh real-service private PW_FIXTURE and running production preview:
`python3 -B scripts/run-browser.py` executes every existing test. Do not overlap a
portal's Redis/session outage test with another browser run on that portal. The
Phase8 visual runner paces traffic without changing server budgets or clearing
counters. Source/working-history/client-bundle secret scans precede reviewed commits
and final pushes. Final local browser/visual evidence passes; Git/archive provenance accompanies the handoff.

The full product remains0 Complete/15 Partial/9 Missing; production readiness NO.
Production IdP/MFA/recovery, provider/cloud/HA/offsite/control-vault/PITR acceptance,
real devices/assistive technology, and deferred product domains remain outside this
local milestone. Phase9 has not begun. Required upstream notices are preserved.

Current final static run: 35 unit tests and 3 Python archive-policy tests pass; unused-local/parameter checking passes. See VERIFICATION_RESULTS.json.

Final executed result: 26 existing real-service browser tests and 28 new Phase8 screen combinations pass, with no failures, skips or flakes. All selected axe/overflow/rate checks pass.
