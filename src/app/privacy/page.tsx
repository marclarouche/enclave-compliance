import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for enclavecompliance.com.",
  openGraph: {
    title: "Privacy Policy",
    description: "Privacy policy for enclavecompliance.com.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="hero">
        <span className="kicker kicker-accent">Legal</span>
        <h1 className="display">Privacy Policy</h1>
        <p className="sub">Last updated August 28, 2026.</p>
      </section>

      <section className="section">
        <h2>Overview</h2>
        <p className="body">
          This policy explains what information enclavecompliance.com collects when you visit this site or submit
          the &ldquo;Talk to us&rdquo; form, and how that information is used. It covers this marketing site only —
          not the Enclave-GAP, Enclave-SSP, Enclave-AI, or Enclave-Enterprise applications themselves, which are
          governed by their own terms.
        </p>
      </section>

      <section className="section">
        <h2>Information we collect</h2>
        <p className="body">
          The only information this site actively collects is the email address you submit through the &ldquo;Talk
          to us&rdquo; form. We do not use cookies, analytics, or other tracking technologies. Our hosting
          infrastructure may record standard server logs (such as IP address and browser user agent) as part of
          normal operation; we do not use these logs for tracking or profiling.
        </p>
      </section>

      <section className="section">
        <h2>How we use your information</h2>
        <p className="body">
          We use the email address you provide solely to respond to your inquiry about the Enclave Compliance
          Suite. We do not sell, rent, or share your email address with third parties, and we do not use it for
          marketing you did not request.
        </p>
      </section>

      <section className="section">
        <h2>Data retention</h2>
        <p className="body">
          We retain contact form submissions only as long as needed to respond to your inquiry, unless you ask us
          to delete it sooner.
        </p>
      </section>

      <section className="section">
        <h2>Your rights</h2>
        <p className="body">
          You can ask us to delete any information you&rsquo;ve submitted, or ask what information we hold about
          you, by contacting us at the address below.
        </p>
      </section>

      <section className="section">
        <h2>Changes to this policy</h2>
        <p className="body">
          If this policy changes — for example, if the site adds analytics or a new data collection point — this
          page will be updated and the &ldquo;last updated&rdquo; date above will change.
        </p>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p className="body">
          Questions about this policy can be sent to{" "}
          <a href="mailto:marc.larouche@gmail.com">marc.larouche@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
