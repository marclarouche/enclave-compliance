# Enclave Compliance — Incident Log

Every security incident — reported externally, self-discovered, or surfaced by CI — affecting Enclave-GAP, Enclave-SSP, Enclave-AI, or this website, per `ENCLAVE_COMPLIANCE_INCIDENT_RESPONSE_PLAN.md` (IR-5). Logged at the time of confirmation, not reconstructed after the fact.

| Date | Product | Description | Severity | Status | Resolution |
|---|---|---|---|---|---|
| 2026-08-23 | Enclave-SSP | Cross-process race on the credential keyfile — the in-process mutex gave no real protection, causing an actual credential loss during development. | High | Resolved | Real OS-level advisory file lock added (`crypto::lock_keyfile`/`KeyfileGuard`) across every read-modify-write call site; regression test added. See `ENCLAVE_SSP_THREAT_MODEL.md` (SV-222567). |
| 2026-08-17 | Enclave-GAP | `cargo audit` flagged RUSTSEC-2026-0187, a high-severity (7.5) stack-overflow advisory in `lopdf`, transitively pulled in via `pdf-extract` (used for policy-document text extraction). | High | Resolved | `pdf-extract` pinned to a patched `0.12` line. See `cargo_audit_log.md` in the Enclave-GAP repository. |

Both incidents above were caught during development, before the affected code reached a customer — no customer notification was required under IR-6 at the time. New rows should follow the same format and cite the source document with the full technical detail rather than duplicating it here.
