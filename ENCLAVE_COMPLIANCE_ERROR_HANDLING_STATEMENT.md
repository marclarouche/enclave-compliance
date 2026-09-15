# Enclave Compliance — Error Handling Statement

This is the vendor-organization-level statement of how Enclave-GAP, Enclave-SSP, and Enclave-AI handle the unexpected — an unanticipated exception, a corrupted file, a database that won't open, a bug. It sits above each product's own internal error-handling documentation (`ENCLAVE_GAP_ERROR_HANDLING_STATEMENT.md`, `ENCLAVE_SSP_ERROR_HANDLING_STATEMENT.md`, `ENCLAVE_AI_ERROR_HANDLING_STATEMENT.md` — each in its own repository, available as part of the security package), the same relationship `ENCLAVE_COMPLIANCE_INCIDENT_RESPONSE_PLAN.md` has to each product's own incident response plan. Written for a customer's own security or vendor-risk review, not as internal engineering documentation.

**Reviewed:** 2026-09-14, covering the current codebase of all three products as verified on that date. **Review cadence:** at least annually, and after any real incident.

## The short answer

All three products treat "something went wrong" as a design problem, not an afterthought. In practice that means three things, true across all three products today:

1. **You will never see raw internal error detail** — a database path, a SQL fragment, a stack trace, a library's own error message — no matter what goes wrong. You'll see a plain description of what failed and a note to contact your administrator if it keeps happening.
2. **The application does not silently continue in a broken state.** If something the application depends on for security (its own audit trail, its own access controls) isn't working, it refuses to proceed rather than run without that protection.
3. **A bug does not mean a blank, dead screen.** If something genuinely unexpected happens, you get a plain message telling you the app hit a problem and needs to be restarted — not a frozen or blank window with nothing to report to support.

The rest of this document explains how, and is honest about where that isn't fully built out yet.

## What you will never see

Every one of the three products routes internal errors through a single choke point before anything is shown on screen (`errors::sanitize`, if you're reading the source). Whatever actually went wrong — a database error, a file-system error, a parsing failure — is logged to a file on the machine for your own administrator to review later, and the on-screen message is always a short, generic sentence naming what failed, never the underlying technical cause.

Concretely: if a database operation fails, you'll see something like *"Reading the workspace database failed. If this persists, contact your administrator."* — not the SQL error, not a file path, not a stack trace. That real detail is written to a dated log file in a standard, machine-wide location (`%ProgramData%\<Product>\stderr\`, one file per time the app is launched) that an administrator with access to the machine can open and hand to support — it isn't shown to whoever happens to be using the application at the time.

This is not a policy statement without teeth — it's checked by an automated test in each product's own codebase, and it was verified line-by-line against the real, current source of all three products as of this review, not assumed to still be true from an earlier pass.

## Failing safely, not silently

If something the application needs for its own security stops working, it stops rather than continuing without that protection:

- If the encrypted audit trail can't be opened or written to, the application refuses to open the workspace at all — even with a correct, valid credential. It will not run "unaudited."
- Access control checks default to denying access on any failure, never to allowing it. A bug or an unexpected condition in a permission check fails toward "no," not "yes."
- Every action that changes protected data and its corresponding audit-trail entry either both succeed together or neither does — there's no window where something happened but wasn't recorded.

## A bug doesn't crash the app or hand you a dead screen

All three products now show a plain, actionable message — "Enclave hit an unexpected error and can't continue safely, please restart the app" — if something genuinely unanticipated happens, instead of leaving you looking at a blank or frozen window with nothing to report. The real technical detail from that failure is still captured for a developer's own review; it's never shown to the person using the app at the time.

## Found and fixed along the way

In the course of reviewing this exact area across all three products (2026-09-14), we found and fixed two real gaps rather than assuming the existing implementation was already clean:

- **Enclave-SSP's** crash-recovery screen was itself showing the full raw error and technical stack trace on screen when triggered — precisely the kind of internal detail this document says you should never see, on the one path meant to handle things going wrong gracefully. Fixed the same day; the corrected version was also applied to Enclave-AI and Enclave-GAP, neither of which had a crash-recovery screen at all before this.
- **Enclave-AI's** PDF report generation had one narrow code path (a chart-image rendering failure) that bypassed the standard internal-detail-hiding mechanism described above. Fixed the same day.

Both were caught during our own internal review, before either product had a customer using the affected version — see `INCIDENT_LOG.md` for the full record. We log genuine gaps like these rather than only the ones a customer happens to find, because a security document with no real findings in it isn't a credible one.
