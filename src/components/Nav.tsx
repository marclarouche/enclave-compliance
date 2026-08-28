"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/enclave-ssp", label: "Enclave-SSP" },
  { href: "/enclave-ai", label: "Enclave-AI" },
  { href: "/enclave-gap", label: "Enclave-GAP" },
  { href: "/enterprise", label: "Enterprise" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navlink"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <button type="button" className="btn btn-primary">
            Talk to us
          </button>
          <button
            type="button"
            className="nav-mobile-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {open ? (
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M3 6 H17 M3 10 H17 M3 14 H17" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-nav-panel" className="nav-mobile-panel" data-open={open}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="navlink"
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
