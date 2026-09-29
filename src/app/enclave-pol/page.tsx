import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enclave-POL",
  description:
    "Enclave-POL turns cybersecurity and AI governance requirements into assessment-ready policies using your organization's own controls, roles, thresholds, and framework-defined parameters. All locally — your compliance data stays on your machine.",
  openGraph: {
    title: "Enclave-POL",
    description:
      "Enclave-POL turns cybersecurity and AI governance requirements into assessment-ready policies using your organization's own controls, roles, thresholds, and framework-defined parameters.",
    url: "/enclave-pol",
  },
};

export default function EnclavePolPage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="kicker kicker-accent">Desktop product · Author the policy</span>
            <h1 className="display">Write policies that match what you actually do.</h1>
            <p className="sub">
              Enclave-POL turns cybersecurity and AI governance requirements into assessment-ready policies using
              your organization&rsquo;s own controls, roles, thresholds, and framework-defined parameters. Map
              requirements. Set your values. Generate the policy. Verify the coverage. All locally — your compliance
              data stays on your machine.
            </p>
            <div className="row">
              <button type="button" className="btn btn-primary">
                Talk to us
              </button>
            </div>
          </div>
          <figure className="screenshot screenshot-hero">
            <img src="/screenshots/enclave-pol-dashboard.png" alt="Enclave-POL new policy authoring screen" />
            <figcaption className="screenshot-caption">Enclave-POL new policy authoring screen</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <span className="kicker">Where it sits in the lifecycle</span>
        <p className="body">
          Enclave-GAP finds what&rsquo;s missing; Enclave-POL writes the policies to close that gap, mapped to the
          same controls and framework-defined parameters an assessor will check against.
        </p>
      </section>

      <section className="section">
        <span className="kicker kicker-accent">Not another policy template generator</span>
        <p className="body">
          A generic policy generator says: tell me your company name and I&rsquo;ll hand you an Access Control
          Policy. Enclave-POL does something different. It collects your organizational variables once, inserts
          framework-defined Organization-Defined Parameters (ODPs), allows blended framework selection, generates
          control-by-control sections, and verifies coverage against assessment objectives. The generated documents
          retain framework IDs and traceability back to the controls they satisfy, and you review and approve the
          final language before anything is exported.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Coverage</span>
        <p className="body">
          Select a single framework or blend several into one policy set — Enclave-POL injects the right
          framework-defined parameters for each control either way.
        </p>
        <table className="ftable">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NIST SP 800-53 Rev. 5</td>
              <td>Federal security and privacy controls</td>
            </tr>
            <tr>
              <td>NIST SP 800-171 Rev. 3</td>
              <td>Controlled unclassified information</td>
            </tr>
            <tr>
              <td>CMMC Level 2</td>
              <td>Defense contractors</td>
            </tr>
            <tr>
              <td>NIST CSF 2.0</td>
              <td>General cybersecurity risk management</td>
            </tr>
            <tr>
              <td>ISO/IEC 42001</td>
              <td>AI management system certification</td>
            </tr>
            <tr>
              <td>EU AI Act</td>
              <td>European Union</td>
            </tr>
            <tr>
              <td>CIS Controls v8.1</td>
              <td>General cybersecurity best practice</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <span className="kicker">Export</span>
        <p className="body">
          Generated policies are exported as Markdown, ready to bring into whatever document tooling your
          organization already uses for review and publication.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Deployment</span>
        <ul className="list">
          <li>Single-user desktop application.</li>
          <li>Multi-user deployment available through Enclave-Enterprise.</li>
          <li>Coded according to DISA STIGs.</li>
          <li>Zero open findings in SAST and runtime security testing.</li>
          <li>Local data encrypted at rest with SQLCipher, using AES-256, a FIPS-approved algorithm.</li>
        </ul>
      </section>
    </div>
  );
}
