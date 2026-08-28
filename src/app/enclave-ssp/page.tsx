import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enclave-SSP",
};

export default function EnclaveSspPage() {
  return (
    <div>
      <section className="hero">
        <span className="kicker kicker-accent">Desktop product · Build the documentation</span>
        <h1 className="display">Enclave-SSP</h1>
        <p className="sub">Enclave-SSP writes and documents CMMC Level 2 System Security Plans for defense contractors.</p>
        <div className="row">
          <button type="button" className="btn btn-primary">
            Talk to us
          </button>
        </div>
      </section>

      <section className="section">
        <span className="kicker">Where it sits in the lifecycle</span>
        <p className="body">
          Step two of three. Enclave-GAP finds what&rsquo;s missing; Enclave-SSP writes the System Security Plan
          that documents it.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Coverage</span>
        <table className="ftable">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CMMC Level 2</td>
              <td>Defense contractors</td>
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
