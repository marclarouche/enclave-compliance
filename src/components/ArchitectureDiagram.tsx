export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-label="Data-flow diagram: the user interacts with an untrusted Tauri WebView, which reaches a trusted Rust core only through a capability-scoped IPC bridge; the Rust core reads and writes a local SQLCipher-encrypted database and an OS-level key vault, and authenticates members through the platform's biometric hardware. No network port is ever opened."
      style={{ width: "100%", height: "auto", marginTop: "var(--leading)" }}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-text)" />
        </marker>
      </defs>

      {/* User */}
      <rect x="360" y="16" width="180" height="52" rx="4" fill="none" stroke="var(--color-text)" strokeWidth="1.2" />
      <text x="450" y="47" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--color-text)">User</text>

      <line x1="450" y1="68" x2="450" y2="102" stroke="var(--color-text)" strokeWidth="1.2" markerEnd="url(#arrow)" />

      {/* Tauri WebView (untrusted) */}
      <rect x="240" y="104" width="420" height="76" rx="4" fill="none" stroke="var(--color-accent-2-700)" strokeWidth="1.4" />
      <text x="450" y="130" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-accent-2-700)">
        Tauri WebView — untrusted UI
      </text>
      <text x="450" y="150" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        Content-Security-Policy: script-src &apos;self&apos; · connect-src ipc: only
      </text>
      <text x="450" y="167" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        no inline or eval&apos;d script
      </text>

      <line x1="450" y1="180" x2="450" y2="214" stroke="var(--color-text)" strokeWidth="1.2" markerEnd="url(#arrow)" />
      <text x="465" y="200" fontSize="11.5" fill="var(--color-text)">IPC bridge</text>

      {/* Rust core (trusted) */}
      <rect x="220" y="216" width="460" height="78" rx="4" fill="none" stroke="var(--color-accent-700)" strokeWidth="1.4" />
      <text x="450" y="243" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-accent-700)">
        Rust core — trusted
      </text>
      <text x="450" y="263" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        Capability grant: core:default + dialog:default only
      </text>
      <text x="450" y="280" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        no filesystem, shell-exec, or HTTP-client permission — verified, not assumed
      </text>

      {/* Fan-out lines to storage tier */}
      <line x1="330" y1="294" x2="160" y2="368" stroke="var(--color-text)" strokeWidth="1.2" markerEnd="url(#arrow)" />
      <line x1="450" y1="294" x2="450" y2="368" stroke="var(--color-text)" strokeWidth="1.2" markerEnd="url(#arrow)" />
      <line x1="570" y1="294" x2="740" y2="368" stroke="var(--color-text)" strokeWidth="1.2" markerEnd="url(#arrow)" />

      {/* SQLCipher database */}
      <rect x="30" y="370" width="260" height="78" rx="4" fill="none" stroke="var(--color-text)" strokeWidth="1.2" />
      <text x="160" y="397" textAnchor="middle" fontSize="13.5" fontWeight="600" fill="var(--color-text)">
        Local database
      </text>
      <text x="160" y="417" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        SQLCipher — AES-256 at rest
      </text>
      <text x="160" y="434" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        (a FIPS-approved algorithm)
      </text>

      {/* OS key vault */}
      <rect x="320" y="370" width="260" height="78" rx="4" fill="none" stroke="var(--color-text)" strokeWidth="1.2" />
      <text x="450" y="397" textAnchor="middle" fontSize="13.5" fontWeight="600" fill="var(--color-text)">
        OS key vault
      </text>
      <text x="450" y="417" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        Windows DPAPI / macOS Keychain
      </text>
      <text x="450" y="434" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        kernel-mediated, never plaintext on disk
      </text>

      {/* Platform authenticator */}
      <rect x="610" y="370" width="260" height="78" rx="4" fill="none" stroke="var(--color-text)" strokeWidth="1.2" />
      <text x="740" y="397" textAnchor="middle" fontSize="13.5" fontWeight="600" fill="var(--color-text)">
        Platform authenticator
      </text>
      <text x="740" y="417" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        Windows Hello / Touch ID (WebAuthn)
      </text>
      <text x="740" y="434" textAnchor="middle" fontSize="11.5" fill="var(--color-text)">
        TPM / Secure Enclave-backed
      </text>

      {/* Network callout */}
      <rect
        x="220"
        y="470"
        width="460"
        height="36"
        rx="4"
        fill="none"
        stroke="var(--color-accent-700)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x="450" y="493" textAnchor="middle" fontSize="12" fill="var(--color-accent-700)">
        Ports: none listening · zero outbound network calls — no capability grants one
      </text>
    </svg>
  );
}
