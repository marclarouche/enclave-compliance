import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enclave-AI",
  description:
    "Enclave-AI maps your AI systems against NIST AI RMF, NIST CSF 2.0, the EU AI Act, ISO/IEC 42001, GDPR, and state and local laws like Colorado SB-205, Utah SB-149, and NYC Local Law 144 (AEDT), with policy evidence built in.",
  openGraph: {
    title: "Enclave-AI",
    description:
      "Enclave-AI maps your AI systems against NIST AI RMF, NIST CSF 2.0, the EU AI Act, ISO/IEC 42001, GDPR, and state and local laws like Colorado SB-205, Utah SB-149, and NYC Local Law 144 (AEDT), with policy evidence built in.",
    url: "/enclave-ai",
  },
};

export default function EnclaveAiPage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="kicker kicker-accent">Desktop product · Prove the controls</span>
            <h1 className="display">Enclave-AI</h1>
            <p className="sub">
              Enclave-AI maps your AI systems against NIST AI RMF, NIST CSF 2.0, the EU AI Act, ISO/IEC 42001, GDPR, and
              state and local laws like Colorado SB-205, Utah SB-149, and NYC Local Law 144 (AEDT), with policy
              evidence built in.
            </p>
            <div className="row">
              <button type="button" className="btn btn-primary">
                Talk to us
              </button>
            </div>
          </div>
          <figure className="screenshot screenshot-hero">
            <img src="/screenshots/enclave-ai-dashboard.png" alt="Enclave-AI dashboard" />
            <figcaption className="screenshot-caption">Enclave-AI dashboard</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <span className="kicker">Coverage</span>
        <table className="ftable">
          <thead>
            <tr>
              <th>Framework or law</th>
              <th>Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NIST AI RMF</td>
              <td>Federal AI risk guidance</td>
            </tr>
            <tr>
              <td>EU AI Act</td>
              <td>European Union</td>
            </tr>
            <tr>
              <td>Colorado SB-205</td>
              <td>Consequential-decision AI systems</td>
            </tr>
            <tr>
              <td>NYC Local Law 144 (AEDT)</td>
              <td>Hiring/promotion tools in NYC</td>
            </tr>
            <tr>
              <td>Utah SB-149</td>
              <td>Generative AI disclosure duties</td>
            </tr>
            <tr>
              <td>GDPR</td>
              <td>EU jurisdiction, data protection &amp; privacy</td>
            </tr>
            <tr>
              <td>ISO/IEC 42001</td>
              <td>AI management system certification</td>
            </tr>
            <tr>
              <td>NIST CSF 2.0</td>
              <td>General cybersecurity risk management</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <span className="kicker">Agentic AI governance</span>
        <p className="body">
          Beyond framework mapping, Enclave-AI also tracks Agentic AI / Zero Trust controls — non-human identity
          governance for deployed AI agents, a distinct capability from the compliance frameworks above.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Release policy</span>
        <p className="body">
          Enclave-AI ships as a versioned installer, not a self-updating application. New releases are downloaded
          and installed directly — the app makes no background update checks and has no network update-channel
          by design, so it never phones home.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Deployment</span>
        <ul className="list">
          <li>Single-user desktop application.</li>
          <li>Multi-user deployment available through Enclave-Enterprise.</li>
          <li>Coded according to DISA STIGs.</li>
          <li>Zero open findings in SAST and DAST security testing.</li>
          <li>Local data encrypted at rest with SQLCipher, using AES-256, a FIPS-approved algorithm.</li>
        </ul>
      </section>
    </div>
  );
}
