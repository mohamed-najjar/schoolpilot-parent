# Phase 6C remaining gaps

This is a local, tested review milestone, not production readiness. Phase 6D has not
begun. The 24 backend modules remain 0 Complete / 15 Partial / 9 Missing.

- No message unread/read receipts exist in the backend. In-app notification read
  states are real. External email delivery is represented by provider state; a local
  receipt or journal is not reported as delivered email.
- Attendance counts describe the displayed page, separated by daily/lesson records.
  No official range aggregation or new parent absence-report workflow is invented.
- Existing academic APIs expose published history/revisions. This portal does not
  invent a latest-only policy, compute official grades, offer student submission
  writes or extend report generation/assessment business rules.
- Guardian profile identity editing and relationship/membership onboarding remain
  staff-controlled. Notification preferences are editable through existing APIs.
- Learning files use the existing secure filesystem object adapter; approved S3,
  malware scanning, lifecycle/retention controls and production capacity work remain.
  Message attachments retain the existing 32 KiB bound.
- Material detail views perform per-resource detail reads on the selected course
  page; the family overview itself has no per-child request fan-out. Large-family
  cursor traversal is tested; a production school/family capacity target is unagreed.
- Local relationship changes are checked on each new request; already displayed
  data and in-flight transaction snapshots cannot be recalled. Central-only membership
  revocation requires local coordination for direct JWT clients; see IDENTITY_AND_SSO.
- Own-child teaching/grading conflict policy remains the documented Phase 6B.1 gap.
  The Parent BFF cannot perform those writes regardless of the user's other roles.
- The established Next CSP permits inline scripts/styles; nonce-based hardening
  remains unimplemented.
- Automated Chromium axe scans target WCAG 2.2 AA; they do not replace a manual
  assistive-technology audit, native Safari/Firefox/mobile-device verification or
  production TLS/MFA/cookie/IdP/Redis failure and operational acceptance.
- Hosted CI execution, production deployment, approved providers/data residency,
  offsite/PITR restore schedules, operational SLOs and formal privacy/legal acceptance
  are not claimed. Existing local backend recovery evidence is not a new production
  backup/restore certification.
- Finance, fees, admissions, new operational modules and the Student Portal are not
  implemented in this phase. Existing Phase 1–6B.1 product/operational gaps remain.
