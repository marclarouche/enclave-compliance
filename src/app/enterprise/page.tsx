import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Enclave-Enterprise",
};

export default function EnterprisePage() {
  return (
    <div>
      <section className="hero">
        <span className="kicker kicker-accent">Enterprise</span>
        <h1 className="display">Enclave-Enterprise</h1>
        <p className="sub">
          The enterprise application is a multi-user system hosted on Red Hat dual servers, with a container option
          for those who wish to host in house, and a SaaS option coming soon.
        </p>
        <div className="row">
          <button type="button" className="btn btn-primary">
            Talk to us
          </button>
        </div>
      </section>

      <section className="section">
        <span className="kicker">Deployment options</span>
        <div className="cols">
          <div className="col">
            <span className="col-tag">Available</span>
            <h3>Red Hat dual servers</h3>
            <p>A multi-user system hosted on Red Hat dual servers.</p>
          </div>
          <div className="col">
            <span className="col-tag">Available</span>
            <h3>Container</h3>
            <p>A container option for those who wish to host in house.</p>
          </div>
          <div className="col">
            <span className="col-tag">Coming soon</span>
            <h3>SaaS</h3>
            <p>A hosted SaaS option is coming soon.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="kicker kicker-accent">Security posture</span>
        <h2 className="h2">All software and systems are coded according to DISA STIGs.</h2>
      </section>

      <section className="section">
        <h2 className="h2">Talk to us about deployment.</h2>
        <EmailCapture />
      </section>
    </div>
  );
}
