import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <span>enclavecompliance.com</span>
      <span>Enclave-AI updates: enclave-ai.dev</span>
      <span>Coded according to DISA STIGs.</span>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms of Service</Link>
    </footer>
  );
}
