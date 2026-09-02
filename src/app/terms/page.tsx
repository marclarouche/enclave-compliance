import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for enclavecompliance.com.",
  openGraph: {
    title: "Terms of Service",
    description: "Terms of service for enclavecompliance.com.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div>
      <section className="hero">
        <span className="kicker kicker-accent">Legal</span>
        <h1 className="display">Terms of Service</h1>
        <p className="sub">Last updated August 28, 2026.</p>
      </section>

      <section className="section">
        <h2>Acceptance of terms</h2>
        <p className="body">
          By using enclavecompliance.com, you agree to these terms. This site is informational — it describes the
          Enclave Compliance Suite and lets you request more information. It does not create an account, license,
          or contractual relationship for the underlying products on its own.
        </p>
      </section>

      <section className="section">
        <h2>Use of the site</h2>
        <p className="body">
          This site is provided for the purpose of learning about and inquiring about Enclave-GAP, Enclave-SSP,
          Enclave-AI, and Enclave-Enterprise. You agree not to misuse the site, including attempting to disrupt it
          or access it in ways not permitted by these terms.
        </p>
      </section>

      <section className="section">
        <h2>No warranty</h2>
        <p className="body">
          Content on this site, including product descriptions, is provided &ldquo;as is&rdquo; without warranties
          of any kind. While we describe our products&rsquo; security testing and compliance coverage accurately to
          the best of our knowledge, use of this site does not constitute a guarantee of fitness for any particular
          compliance outcome.
        </p>
      </section>

      <section className="section">
        <h2>Intellectual property</h2>
        <p className="body">
          The Enclave Compliance name, the Enclave-GAP, Enclave-SSP, Enclave-AI, and Enclave-Enterprise names, and
          the content of this site belong to their respective owners and may not be reproduced without permission.
        </p>
      </section>

      <section className="section">
        <h2>Third-party links</h2>
        <p className="body">
          This site may reference companion domains, such as enclave-ai.dev. We are not responsible for the
          content or availability of third-party sites linked from here.
        </p>
      </section>

      <section className="section">
        <h2>Limitation of liability</h2>
        <p className="body">
          To the fullest extent permitted by law, Enclave Compliance is not liable for any indirect, incidental, or
          consequential damages arising from your use of this site.
        </p>
      </section>

      <section className="section">
        <h2>Changes to these terms</h2>
        <p className="body">
          We may update these terms from time to time. Continued use of the site after changes are posted
          constitutes acceptance of the updated terms.
        </p>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p className="body">
          Questions about these terms can be sent to{" "}
          <a href="mailto:marc.larouche@gmail.com">marc.larouche@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
