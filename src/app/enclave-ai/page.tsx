import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enclave-AI",
  description:
    "Enclave-AI maps your AI systems against NIST AI RMF, the EU AI Act, and state laws like Colorado SB-205 and New York's AI law, with policy evidence built in.",
  openGraph: {
    title: "Enclave-AI",
    description:
      "Enclave-AI maps your AI systems against NIST AI RMF, the EU AI Act, and state laws like Colorado SB-205 and New York's AI law, with policy evidence built in.",
    url: "/enclave-ai",
  },
};

export default function EnclaveAiPage() {
  return (
    <div>
      <section className="hero">
        <span className="kicker kicker-accent">Desktop product · Prove the controls</span>
        <h1 className="display">Enclave-AI</h1>
        <p className="sub">
          Enclave-AI maps your AI systems against NIST AI RMF, the EU AI Act, and state laws like Colorado SB-205
          and New York&rsquo;s AI law, with policy evidence built in.
        </p>
        <div className="row">
          <button type="button" className="btn btn-primary">
            Talk to us
          </button>
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
              <td>State-level</td>
            </tr>
            <tr>
              <td>New York AI law</td>
              <td>State-level</td>
            </tr>
          </tbody>
        </table>
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
        </ul>
      </section>
    </div>
  );
}
