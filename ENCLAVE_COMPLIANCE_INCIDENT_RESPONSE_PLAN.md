# Enclave Compliance — Organizational Incident Response Plan

This is the vendor-organization-level incident response plan for the company behind Enclave-GAP, Enclave-SSP, and Enclave-AI. It sits above each product's own application-level incident response plan (`ENCLAVE_GAP_INCIDENT_RESPONSE_PLAN.md`, `ENCLAVE_SSP_INCIDENT_RESPONSE_PLAN.md`, `ENCLAVE_AI_INCIDENT_RESPONSE_PLAN.md` — each in its own repository) rather than replacing them. Those documents cover the product-specific technical detail: what counts as an incident for that application, how it's detected in that codebase, and how containment/recovery works for that product's own architecture. This document covers the organizational layer NIST SP 800-53 Rev. 5's Incident Response (IR) control family expects above that: policy, training, testing, monitoring, reporting, and assistance. It is structured control-by-control against that family so a buyer's security questionnaire can be answered directly, control by control.

**Reviewed:** 2026-09-12. **Review cadence:** at least annually, and after any real incident (see "Real incidents to date," below, for what that revision process actually looks like in practice).

## Organizational context

The organization is a single-person software company (Marc J. Larouche, CISSP, CISA, CEH, AWS-SA). There is no dedicated security operations center, no shift-based on-call rotation, and no separate incident-response team — every role below (detection, handling, reporting, plan maintenance) is performed by the same person. This is stated plainly rather than described in a way that implies a larger team, matching the honesty standard the per-product plans already hold themselves to. All three products are offline desktop applications with no phone-home telemetry and no centralized logging back to the vendor — the organization cannot detect an incident in a customer's deployment on its own; detection depends on the customer noticing (via the product's own audit trail) or on the vendor's own pre-release/CI security tooling catching a dependency vulnerability before it reaches a customer at all.

## IR-1 — Incident Response Policy and Procedures

This document is that policy. It is distributed as part of the security package available on request (see enclavecompliance.com/security) and reviewed on the cadence stated above.

## IR-2 — Incident Response Training

There is no separate training program to document, because there is no team beyond the one person who designs, builds, and secures all three products. "Training" here means: maintaining the certifications listed above, staying current on the CVE/RustSec/npm-advisory landscape as part of the recurring SAST cadence (`security-scan` skill, run every release and monthly across all three products), and following this plan's own documented procedures rather than improvising during a real incident.

## IR-3 — Incident Response Testing

This plan and the three product-level plans it sits above are reviewed at least annually and immediately after any real incident (see below) — the review itself is the test: confirming the detection and handling steps described still match how the products and the organization actually work, not re-validating on a fixed calendar regardless of change. Where a product has a runtime security self-test (`selftest.rs` — RBAC, crypto round-trip, and audit-writability checks, present in Enclave-SSP and Enclave-AI as of this writing), that runs automatically on every login as a continuously-exercised technical complement to this plan, not a substitute for it.

## IR-4 — Incident Handling

**What counts as an incident**, at the organizational level, is anything reported under "Reporting a vulnerability" on the security page, anything a customer reports directly, or anything the recurring SAST/DAST program (cargo audit, npm audit, Semgrep, the manual runtime-boundary review) surfaces as a real, exploitable finding rather than a routine informational one.

- **Preparation.** The recurring SAST/DAST program, the per-product STIG compliance tracking, and this plan together are the preparation layer — not created reactively after a first real incident.
- **Detection and analysis.** A report is read and reproduced before anything else happens; internal tool output alone (a raw Semgrep or `cargo audit` line) is never treated as sufficient without confirming it against the actual source, the same standard the SAST/DAST reports themselves already apply.
- **Containment.** For a credential or keyfile compromise: guidance to the affected customer to reissue the affected member's credentials and, where the product supports it, rotate recovery codes. For a dependency vulnerability: the affected version is pinned out or patched before any further release ships.
- **Eradication.** A real code fix, not just a dependency bump — verified against a clean `cargo test`/`cargo clippy`/`cargo audit`/`npm audit` pass before being considered closed.
- **Recovery.** Where data recovery is involved, the fix defers to that product's own `_RECOVERY_PROCEDURES.md` for the technical mechanics rather than duplicating them here.
- **Post-incident activity.** The finding and its resolution are logged in `INCIDENT_LOG.md` (this repository), and the affected product's own incident-response plan, threat model, and STIG evidence are updated if the incident revealed a gap in any of them — not just fixed in code and left undocumented.

## IR-5 — Incident Monitoring

Every incident — reported, self-discovered, or surfaced by CI — is logged in `INCIDENT_LOG.md` in this repository: date, affected product, description, severity, status, and resolution. See "Real incidents to date" below for what's in it as of this writing.

## IR-6 — Incident Reporting

- **Internal.** Every incident is recorded in `INCIDENT_LOG.md` as described above.
- **Customer notification.** Affected customers are notified directly (email) within 5 business days of an incident being confirmed, or sooner where the severity warrants it — with enough technical detail for the customer to assess their own exposure.
- **Regulatory (DFARS 252.204-7012 / CUI-handling customers).** The organization itself is a software vendor, not a party directly bound by a customer's own DFARS 252.204-7012 flow-down obligations. Where an incident could affect a defense-contractor customer's handling of CUI through Enclave-SSP, the commitment is to provide the affected customer prompt, complete technical detail — root cause, scope, remediation — so that customer can meet their own 72-hour DoD Cyber Incident reporting obligation to DIBNet. This document does not claim the organization itself reports to DIBNet, since it is not itself the contract holder.

## IR-7 — Incident Response Assistance

Direct email (see the security page's "Reporting a vulnerability" section) is the sole escalation path — there is no 24/7 hotline or ticketing system to route around. Every report is acknowledged within 2 business days.

## IR-8 — Incident Response Plan (maintenance)

This document, and the three product-level plans beneath it, are available in full as part of the security package on request (enclavecompliance.com/security). Reviewed at least annually and after every real incident per IR-3, above.

## Real incidents to date

Documented here rather than omitted, because a clean-slate claim would be false and this plan's own credibility depends on it being tested against real events, not just written:

- **2026-08-23 — Enclave-SSP cross-process keyfile race (real credential-loss incident).** The in-process `KEYFILE_LOCK` mutex gave zero protection against a second process touching the same credential keyfile concurrently, and this caused an actual credential loss during development. Fixed with a real OS-level advisory file lock (`crypto::lock_keyfile`/`KeyfileGuard`) applied across every read-modify-write call site, with a regression test proving the OS-level lock — not just the in-process mutex — is what's enforced. The same gap was confirmed and ported to Enclave-AI (Enclave-GAP's own equivalent is covered directly in its threat model). Logged in `ENCLAVE_SSP_THREAT_MODEL.md` (SV-222567) and this organization's own incident history.
- **Enclave-GAP dependency advisory — `lopdf`/`pdf-extract` (RUSTSEC-2026-0187).** A `cargo audit` run surfaced a high-severity (7.5) stack-overflow advisory in a transitive PDF-parsing dependency used for policy-document text extraction. Addressed by pinning `pdf-extract` to a patched line (`0.12`). Documented in `cargo_audit_log.md` in the Enclave-GAP repository — cited here as a real example of the dependency-vulnerability handling path in IR-4 actually having been exercised, not a hypothetical.

Neither incident involved unauthorized access to a customer's own data, and neither required customer notification under IR-6 at the time (both were caught during development, before the affected code shipped) — noted here for completeness, not to understate them.
