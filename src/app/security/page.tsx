import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Application Security",
  description:
    "How Enclave-GAP, Enclave-SSP, and Enclave-AI are built and verified: DISA ASD STIG-coded development, SAST/DAST security testing, and current compliance status.",
  openGraph: {
    title: "Application Security",
    description:
      "How Enclave-GAP, Enclave-SSP, and Enclave-AI are built and verified: DISA ASD STIG-coded development, SAST/DAST security testing, and current compliance status.",
    url: "/security",
  },
};

export default function SecurityPage() {
  return (
    <div>
      <section className="hero">
        <span className="kicker kicker-accent">How we build it</span>
        <h1 className="display">Application security</h1>
        <p className="sub">
          We hold our own software to the same standard we help you document. Every claim on this page is backed by
          a dated report — request the full set below.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Secure development lifecycle</span>
        <p className="body">
          Enclave-GAP, Enclave-SSP, and Enclave-AI are coded according to DISA Application Security and Development
          (ASD) STIGs from initial development, not retrofitted before an audit. Each product tracks every
          applicable control against its own real source code — a control is only marked compliant against an
          automated test or a live-verified behavior in the running app, never on the basis that the code merely
          exists.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Static analysis (SAST)</span>
        <p className="body">
          A fixed toolchain runs across all three products&rsquo; Rust and TypeScript source. Dependency, lint,
          license-policy, and secret scans all run on every push and pull request in CI and block the build on any
          finding; the full Semgrep sweep below runs on every release and monthly.
        </p>
        <table className="ftable">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Checks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cargo audit</td>
              <td>Rust dependency CVEs and advisories (RustSec)</td>
            </tr>
            <tr>
              <td>cargo deny</td>
              <td>Dependency advisories, license policy, and banned/duplicate crates</td>
            </tr>
            <tr>
              <td>npm audit</td>
              <td>JavaScript/TypeScript dependency vulnerabilities</td>
            </tr>
            <tr>
              <td>Semgrep</td>
              <td>Static code analysis — OWASP Top Ten, Rust, TypeScript, React rulesets</td>
            </tr>
            <tr>
              <td>cargo clippy</td>
              <td>Rust lint pass — CI-blocking on every push, not just spot-checked</td>
            </tr>
            <tr>
              <td>ESLint</td>
              <td>TypeScript/React lint pass, with dedicated XSS/unsanitized-DOM security rules</td>
            </tr>
            <tr>
              <td>cargo geiger</td>
              <td>Quantifies <code>unsafe</code> Rust pulled in by the dependency tree</td>
            </tr>
            <tr>
              <td>gitleaks</td>
              <td>Scans every push, and the full commit history, for accidentally committed secrets</td>
            </tr>
            <tr>
              <td>cargo machete / knip</td>
              <td>Unused dependencies and dead code, reviewed before removal</td>
            </tr>
          </tbody>
        </table>
        <p className="body">
          Current result across Enclave-GAP, Enclave-SSP, and Enclave-AI: zero known dependency vulnerabilities,
          zero Semgrep findings above informational severity, and a clean <code>cargo clippy</code>, ESLint
          security-rule, and <code>cargo deny</code> pass. A one-time full commit-history secret scan is complete
          for Enclave-SSP and Enclave-AI (zero real secrets found); Enclave-GAP&rsquo;s history scan is queued —
          the CI gate itself is already live on all three.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Runtime security review</span>
        <p className="body">
          Enclave-GAP, Enclave-SSP, and Enclave-AI are offline desktop applications. They serve their UI through
          Tauri&rsquo;s own custom-protocol asset loader, not a listening web server, and none of the three is
          granted an HTTP-client capability. A conventional dynamic scanner (OWASP ZAP, Burp Suite) has no network
          endpoint to point at in production — run against the development server instead, it would test Vite&rsquo;s
          own tooling, not the shipped product, so we don&rsquo;t run one and don&rsquo;t represent one as having
          been run.
        </p>
        <p className="body">
          In its place, every release gets a direct, source-verified review of the four things that actually
          determine this architecture&rsquo;s security:
        </p>
        <ul className="list">
          <li>Capability scoping — the exact, narrow set of OS permissions granted to the application window.</li>
          <li>Content Security Policy — no inline or eval&rsquo;d script, IPC-only connection scope.</li>
          <li>Credential and encryption architecture — how data at rest and member credentials are protected.</li>
          <li>Error sanitization — confirming internal detail never reaches the untrusted UI layer.</li>
        </ul>
        <p className="body">
          All four checks currently pass, unchanged, across Enclave-GAP, Enclave-SSP, and Enclave-AI.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Error handling</span>
        <p className="body">
          Every internal error — a database problem, a corrupted file, an unexpected bug — is routed through a
          single sanitization boundary before anything reaches the screen. You will see a plain description of what
          failed and a note to contact your administrator if it persists; you will never see a database path, a SQL
          fragment, a stack trace, or any other internal detail. The real technical detail isn&rsquo;t discarded —
          it&rsquo;s written to a dated log file in a standard machine location for your own administrator to review,
          separate from whoever is using the application at the time.
        </p>
        <p className="body">
          If something the application depends on for its own security — its encrypted audit trail, its access
          controls — isn&rsquo;t working, the application refuses to proceed rather than run without that
          protection, even with a correct, valid credential. And if something genuinely unexpected happens, you get a
          plain restart message instead of a blank or frozen window with nothing to report to support.
        </p>
        <p className="body">
          We found and fixed two real gaps in this exact area during our own 2026-09-14 review, rather than assuming
          it was already clean: Enclave-SSP&rsquo;s crash-recovery screen was itself showing a raw technical stack
          trace on screen, and one narrow path in Enclave-AI&rsquo;s report generation bypassed the sanitization
          boundary above. Both were fixed the same day, before either product had a customer on the affected version
          — logged in <code>INCIDENT_LOG.md</code> alongside every other real finding, not just the ones a customer
          happened to find first. The full statement, including what&rsquo;s still being hardened, is in the security
          package below.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Architecture &amp; threat model</span>
        <p className="body">
          All three products share the same architecture, so one diagram applies to all of them. It shows every
          boundary a threat actor would have to cross — the untrusted UI layer, the IPC bridge, the trusted core, and
          the local storage and OS-level protections underneath.
        </p>
        <ArchitectureDiagram />
        <p className="body">
          The webview is treated as hostile by design: it can only reach the Rust core through the small set of IPC
          commands each product explicitly registers, and only within the capability grant shown above. No component
          opens a network socket, listens on a port, or reaches the internet — internal &ldquo;traffic&rdquo; here
          means in-process function calls and local file I/O, never a network hop. Data at rest is protected two
          ways at once: the database itself is SQLCipher-encrypted, and the key that unlocks it is sealed by the
          operating system&rsquo;s own kernel-mediated vault, so a copied database file is useless without also
          compromising that specific OS account. Member sign-in runs through the platform&rsquo;s own biometric
          hardware rather than a password this application ever sees or stores.
        </p>
        <p className="body">
          What each product does with that shared architecture:
        </p>
        <ul className="list">
          <li>
            <strong>Enclave-GAP</strong> — audits an organization&rsquo;s existing policies against a target
            framework and stores the resulting gap analysis and remediation tracking in its local database.
          </li>
          <li>
            <strong>Enclave-SSP</strong> — authors CMMC Level 2 System Security Plans; evidence files attached to a
            plan get their own additional per-file AES-256-GCM encryption layer on top of the database encryption
            above.
          </li>
          <li>
            <strong>Enclave-AI</strong> — inventories an organization&rsquo;s AI systems and maps them against NIST
            AI RMF, the EU AI Act, ISO/IEC 42001, GDPR, and state AI laws, with policy evidence stored alongside.
          </li>
        </ul>
      </section>

      <section className="section">
        <span className="kicker">STIG compliance status</span>
        <table className="ftable">
          <thead>
            <tr>
              <th>Product</th>
              <th>Applicable controls</th>
              <th>Compliant</th>
              <th>Open findings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enclave-GAP</td>
              <td>107</td>
              <td>106</td>
              <td>0 High, 2 Medium</td>
            </tr>
            <tr>
              <td>Enclave-SSP</td>
              <td>146</td>
              <td>145</td>
              <td>0 High, 1 Medium</td>
            </tr>
            <tr>
              <td>Enclave-AI</td>
              <td>151</td>
              <td>148</td>
              <td>0 High, 0 Medium</td>
            </tr>
          </tbody>
        </table>
        <p className="body">
          As of September 13, 2026. Zero open High-severity findings across all three products. Remaining Medium
          items and their remediation plans are documented in each product&rsquo;s STIG status tracker, included in
          the full package on request.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Encryption &amp; authentication</span>
        <ul className="list">
          <li>
            Local data encrypted at rest with SQLCipher, using AES-256, a FIPS-<em>approved</em> algorithm — with
            SQLCipher&rsquo;s own memory-security pragma enabled, so decrypted buffers are zeroed by the database
            engine itself, not just at the application layer.
          </li>
          <li>Passwordless member authentication via WebAuthn, backed by the platform&rsquo;s own biometric hardware.</li>
          <li>Encryption keys sealed with the operating system&rsquo;s native key-protection API (Windows DPAPI, macOS Keychain) — never stored in plaintext.</li>
          <li>Credential files are protected against concurrent-access corruption with a real OS-level file lock, not just in-process synchronization.</li>
        </ul>
        <p className="body">
          None of the three products holds a FIPS 140-2/140-3 CMVP-validated cryptographic module — that&rsquo;s a
          deliberate product-line decision, not an oversight. All three are architecturally scoped to never store
          CUI, the one condition that would require module validation regardless of deployment; the encryption
          algorithms themselves are already FIPS-approved. Module-validated cryptography is reserved for
          Enclave-Enterprise, the networked, multi-tenant product where that guarantee actually matters most.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Incident response</span>
        <p className="body">
          Each product has its own documented incident response plan covering credential compromise, unauthorized
          data access evidenced in its audit trail, and dependency vulnerabilities — what counts as an incident, how
          it&rsquo;s detected, and how it&rsquo;s handled through containment and recovery. A separate,
          organization-level plan sits above those three, mapped to the NIST SP 800-53 Rev. 5 Incident Response (IR)
          control family — policy, training, testing, handling, monitoring, and reporting — including how affected
          customers are notified and supported in meeting their own reporting obligations. Full plans are included
          in the security package below.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Reporting a vulnerability</span>
        <p className="body">
          Found a security issue in Enclave-GAP, Enclave-SSP, Enclave-AI, or this website? Email{" "}
          <a href="mailto:marc.larouche@gmail.com">marc.larouche@gmail.com</a> with what you found and how to
          reproduce it. We acknowledge every report within 2 business days and investigate it directly — there is no
          intermediary vendor or third-party support desk in between.
        </p>
        <p className="body">
          Reported in good faith and without exploiting the finding beyond what&rsquo;s needed to demonstrate it, your
          report won&rsquo;t be met with legal action from us. We ask that you give us a reasonable window to fix a
          confirmed issue before any public disclosure.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Request the full security package.</h2>
        <p className="sub">
          Dated SAST/DAST reports, full STIG control checklists, per-product threat models, the NIST 800-53 IR-mapped
          incident response plan, and the error handling statement — sent directly, for your own vendor security
          review.
        </p>
        <EmailCapture />
      </section>
    </div>
  );
}
