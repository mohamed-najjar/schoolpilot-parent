# Identity, school relationships and SSO

Central issuer plus immutable subject resolves to a school-local person. Staff,
guardian, student and administrative profiles/roles may coexist. Email, display name
and global role claims do not establish relationships. The Parent Portal reuses that
central identity and creates no guardian-only account.

The Parent BFF pins `X-SchoolPilot-Workspace: guardian`; browser values cannot change
it. Teacher and Management pin their own contexts. Stored role grants and the target
teacher's eligibility remain independent of the requesting guardian workspace.
Parent visibility is determined by the current school-local guardian relationship,
its effective dates, restriction and individual permission flags. Teacher/principal
rights never rescue an absent guardian permission in this portal.

The BFF uses a separate PKCE client, opaque HttpOnly cookie, encryption key and Redis
namespace. Central Keycloak SSO supplies an existing login to a second portal without
sharing application cookies or requiring a second password. The live acceptance
identity is simultaneously a teacher, principal and guardian, with two children in
school A and one in independently stored school B. Central school B membership was
configured using the existing trusted local fixture procedure; no public provisioning
API or duplicate central identity was invented.

## Revocation guarantees

Each new school request evaluates current local grants/relationships. Restriction
of one guardian link denies the next context/detail request, including requests
using an existing access token. The live test also waits across the short local token
refresh interval, checks denial again and verifies Teacher roster access still works.
Central discovery is fresh on BFF requests. Family UI revalidates on focus and reloads
persisted browser pages; an error replaces sensitive content. Already returned data
is not remotely recalled; there is no push-driven erasure of a previously viewed
screen. An in-progress repeatable-read transaction uses its consistent snapshot.

Central membership revocation alone does not invalidate an otherwise valid JWT at
an isolated school API. Direct JWT clients therefore require coordinated local
revocation or token expiry, as documented in Phase 6B.1. This phase adds no synchronous
cross-database dependency and does not change IdP token/session guarantees.

Own-child conflict-of-interest grading/approval policy remains a separate unresolved
business capability from Phase 6B.1. The Parent Portal grants no grading/approval
writes. The future Student Portal must use its own client/session/workspace and self
identity predicates; it must not reuse a guardian cookie or infer self authority from
family membership.
