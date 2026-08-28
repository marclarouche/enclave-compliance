import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="hero">
      <span className="kicker kicker-accent">404</span>
      <h1 className="display">Page not found.</h1>
      <p className="sub">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <div className="row">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
