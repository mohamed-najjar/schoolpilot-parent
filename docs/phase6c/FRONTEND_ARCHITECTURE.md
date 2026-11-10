# Parent Portal architecture

Independent Next.js 16 / React 19 / TypeScript / Material UI application on port
3002. The purchased Able Pro 5.1.0 seed supplied four selected theme/card/header
files; TEMPLATE_PROVENANCE.json records their original hashes and the explicit
shared infrastructure allowlist. This is a family application, with no template
demo routes, mock APIs, sample authentication, dashboard datasets or full-version
reference application. Fonts are bundled locally. Third-party notices remain.

## Boundaries

Go services own relationships, enrollment, publication, grading, message eligibility,
files, persistence, audit and lifecycle rules. Next.js owns rendering and an opaque
session BFF. The BFF never accesses school databases, stores child records or
calculates authoritative results. Generated school/control API types are retained.

`src/features/family` owns the ten family views. `FamilyLayout` owns responsive
navigation and child selection. `Providers` owns locale, theme and RTL styling.
`lib/auth` owns OIDC and encrypted Redis sessions. `lib/api` owns typed requests and
the narrow guardian route allowlist. Each child URL carries school and child IDs;
Go validates both again. An invalid explicit selection never falls back to another
child. A child on a later family page can be opened directly and is checked by its
school context endpoint.

## Family loading and caching

The BFF obtains current central discovery on every request (only concurrent discovery
for the same token is shared). It accepts only configured school origins. Family
loading uses bounded batches of four school calls, with one audited, paginated
school-local family query per school page. It does not make per-child dashboard
calls. School announcements and notifications are fetched once per school, not per
child. Three-item previews are labeled and link to paginated details. A per-school
load-more control handles the 50-child page; failures are explicit, never a silent
empty family. Backend pagination is regression-tested with 105 children.

Sensitive responses and browser fetches use no-store. SWR lives only in memory,
keyed by school/resource and isolated by opaque portal session, with no localStorage,
service worker or persisted authentication state. Focus revalidation and persisted
page reload recheck access. Denied family refreshes discard displayed cached cards;
child/detail errors take precedence over cached content. Successful message writes
change the list cache revision so the deduplication interval cannot hide saved work.
Already delivered data cannot be recalled from a person's screen; see IDENTITY_AND_SSO.

## Sessions and operation

Separate `schoolpilot-parent` OIDC PKCE client, Redis namespace, encryption key and
HttpOnly SameSite=Lax cookie. HTTPS uses the __Host- cookie prefix and Secure. Local
HTTP is explicitly limited to the documented development hosts. No browser token
storage or token-bearing URLs. Login uses state, nonce and PKCE; logout deletes the
application session and uses central logout. No custom password system.

Runtime configuration is private; build verification removes .env.local first.
The local Redis Compose project uses port 56381, distinct from Teacher/Management.
Production HTTPS, managed sessions and approved deployment/operations remain outside
this local milestone. No Sites hosting or production deployment was created.
