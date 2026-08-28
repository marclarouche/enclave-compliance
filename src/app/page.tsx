import Link from "next/link";
import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Enclave Compliance",
};

export default function HomePage() {
  return (
    <div>
      <div className="domain-rail">
        <span>Enclave Compliance</span>
        <span>·</span>
        <span>Desktop products</span>
        <span>·</span>
        <span>Enterprise deployment</span>
      </div>

      <section className="hero">
        <h1 className="display">Prove control implementation. Not just claim it.</h1>
        <p className="sub">
          Enclave is a compliance toolset built for teams who need to prove control implementation, not just claim
          it. Three desktop products, one lifecycle: assess the gap, build the documentation, prove the controls.
        </p>
        <div className="row">
          <button type="button" className="btn btn-primary">
            Talk to us
          </button>
          <Link href="/enterprise" className="btn btn-ghost">
            Enterprise deployment
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="lead">Each tool stands alone. Together, they cover the full compliance lifecycle.</p>
        <div className="steps">
          <span className="step">
            <span className="step-num">01</span> Assess the gap
          </span>
          <span className="step-arrow">→</span>
          <span className="step">
            <span className="step-num">02</span> Build the documentation
          </span>
          <span className="step-arrow">→</span>
          <span className="step">
            <span className="step-num">03</span> Prove the controls
          </span>
        </div>
      </section>

      <section className="section">
        <span className="kicker">The desktop products</span>
        <div className="cols">
          <div className="col">
            <span className="col-tag">Assess — Enclave-GAP</span>
            <h3>Enclave-GAP</h3>
            <p>
              Audits your existing policies and procedures against the framework you&rsquo;re targeting and shows
              you exactly what&rsquo;s missing before an auditor does.
            </p>
            <Link href="/enclave-gap" className="navlink">
              Read more →
            </Link>
          </div>
          <div className="col">
            <span className="col-tag">Build — Enclave-SSP</span>
            <h3>Enclave-SSP</h3>
            <p>Writes and documents CMMC Level 2 System Security Plans for defense contractors.</p>
            <Link href="/enclave-ssp" className="navlink">
              Read more →
            </Link>
          </div>
          <div className="col">
            <span className="col-tag">Prove — Enclave-AI</span>
            <h3>Enclave-AI</h3>
            <p>
              Maps your AI systems against NIST AI RMF, the EU AI Act, and state laws like Colorado SB-205 and New
              York&rsquo;s AI law, with policy evidence built in.
            </p>
            <Link href="/enclave-ai" className="navlink">
              Read more →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="kicker">Frameworks and regulations covered</span>
        <table className="ftable">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Scope</th>
              <th>Covered by</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CMMC Level 2</td>
              <td>Defense contractors</td>
              <td>Enclave-SSP</td>
            </tr>
            <tr>
              <td>NIST AI RMF</td>
              <td>Federal AI risk guidance</td>
              <td>Enclave-AI</td>
            </tr>
            <tr>
              <td>EU AI Act</td>
              <td>European Union</td>
              <td>Enclave-AI</td>
            </tr>
            <tr>
              <td>State AI laws — Colorado SB-205, New York</td>
              <td>State-level</td>
              <td>Enclave-AI</td>
            </tr>
            <tr>
              <td>Any targeted framework</td>
              <td>Your existing policies</td>
              <td>Enclave-GAP</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <span className="kicker kicker-accent">Built to DISA STIGs</span>
        <h2 className="h2">All software and systems are coded according to DISA STIGs.</h2>
        <p className="body">
          Enclave-GAP, Enclave-SSP, and Enclave-AI have each completed SAST and DAST security testing with zero
          open findings.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Enterprise</span>
        <h2 className="h2">Enclave-Enterprise</h2>
        <p className="body">
          A multi-user system hosted on Red Hat dual servers, with a container option for those who wish to host in
          house. A SaaS option is coming soon.
        </p>
        <div className="pill-row">
          <span className="tag-pill">Red Hat dual servers</span>
          <span className="tag-pill">Container — host in house</span>
          <span className="tag-pill">SaaS coming soon</span>
        </div>
        <div className="row">
          <Link href="/enterprise" className="btn btn-ghost">
            Enterprise details →
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Let&rsquo;s talk compliance.</h2>
        <p className="sub">Enclave-GAP, Enclave-SSP, and Enclave-AI — the full compliance lifecycle, one toolset.</p>
        <EmailCapture />
      </section>
    </div>
  );
}
