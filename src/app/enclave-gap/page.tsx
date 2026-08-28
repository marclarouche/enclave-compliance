import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enclave-GAP",
};

export default function EnclaveGapPage() {
  return (
    <div>
      <section className="hero">
        <span className="kicker kicker-accent">Desktop product · Assess the gap</span>
        <h1 className="display">Enclave-GAP</h1>
        <p className="sub">
          Enclave-GAP audits your existing policies and procedures against the framework you&rsquo;re targeting and
          shows you exactly what&rsquo;s missing before an auditor does.
        </p>
        <div className="row">
          <button type="button" className="btn btn-primary">
            Talk to us
          </button>
        </div>
      </section>

      <section className="section">
        <span className="kicker">Where it sits in the lifecycle</span>
        <p className="body">Step one of three. Run it before you write documentation, and again before an assessment.</p>
      </section>

      <section className="section">
        <span className="kicker">Coverage</span>
        <table className="ftable">
          <thead>
            <tr>
              <th>Input</th>
              <th>Compared against</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Your existing policies and procedures</td>
              <td>The framework you&rsquo;re targeting</td>
            </tr>
          </tbody>
        </table>
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
