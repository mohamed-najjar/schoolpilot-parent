# SchoolPilot Parent Portal

Independent bilingual family portal backed by SchoolPilot Go APIs and central
Keycloak. Supports authorized children across schools, attendance/history,
homework/feedback/materials, published grades/progress/report snapshots,
messages/attachments, announcements, notifications and personal preferences.
Family relationships, publication and current school-local rights govern every
request. No frontend-only security or mock production persistence.

## Local development

Use Node 22.12–26 and the pinned Yarn 4.13.0 launcher. Clone the backend as the sibling
`../schoolpilot`, and Teacher as `../schoolpilot-teacher` for cross-portal acceptance.

1. In the backend, run `python3 -B scripts/dev-up.py` (Docker Compose required;
   COMPOSE_COMMAND may specify a Compose executable). Preserve its private local
   environment. All fixture records are synthetic.
2. Here run `sh scripts/yarn.sh install --immutable`.
3. Run `python3 -B scripts/configure-local.py`. This configures only the local Parent
   PKCE client and creates .env.local with random session/Redis values, mode 0600.
4. Run `docker compose --env-file .env.local -f compose.sessions.yml up -d --wait`.
5. Run `sh scripts/yarn.sh api:check`, then `sh scripts/yarn.sh dev`. Open
   http://localhost:3002 and use the existing central synthetic school identity.

Never commit .env.local, tokens, browser auth state, build output or dependencies.
.env.example contains placeholders only. Production HTTPS and operational review are
still required; local HTTP is explicitly development-only.

## Verification and real-service fixture

Run typecheck, lint, test, api:check and build with `sh scripts/yarn.sh <command>`.
The build must succeed without private .env.local (move it privately and restore it
before starting). `python3 -B -m unittest discover -s scripts -p 'test_*.py' -v`
checks archive exclusions. The CI workflow runs deterministic frontend checks;
hosted execution is not claimed in the local evidence.

For live browser tests start the production Parent build on 3002 and the unchanged
Teacher build on 3001, with their separate Redis instances. Then:

```sh
python3 -B scripts/prepare-e2e.py --output /tmp/schoolpilot-parent-fixture.json
PW_FIXTURE=/tmp/schoolpilot-parent-fixture.json PW_EVIDENCE=/tmp/schoolpilot-parent-evidence python3 -B scripts/run-browser.py
```

The fixture invokes the existing Teacher/Phase 3 HTTP scenario, adds a second school,
published zero/report/material/feedback data and stores IDs only. Credentials remain
private. Install Playwright Chromium first using the pinned Playwright executable if
needed. The final test restricts a synthetic school B guardian link; create a fresh
fixture for a full rerun rather than undoing a genuine revocation. No screenshot,
trace, token or auth state is committed.

See [architecture](docs/phase6c/FRONTEND_ARCHITECTURE.md),
[API inventory](docs/phase6c/API_INTEGRATION.md),
[SSO and revocation](docs/phase6c/IDENTITY_AND_SSO.md),
[test report](docs/phase6c/TEST_REPORT.md) and
[remaining gaps](docs/phase6c/REMAINING_GAPS.md).
Stop before Phase 6D. No production-readiness claim.

## Phase 8 onboarding and commercial foundation

This portal adds recipient-safe activation and a scoped access notice. See [the implementation and verification report](docs/phase8/IMPLEMENTATION_REPORT.md).
Configure the fixed public portal origins using `.env.example`; keep populated
private environments out of Git. Existing authentication, RTL/theme and resource
authorization boundaries remain. Final local browser/visual verification passes;
production readiness is not claimed.
