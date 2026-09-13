# enclavecompliance.com — Implementation Plan

**Decided:** 2026-08-27/28. Marketing site for the Enclave Compliance Suite (Enclave-GAP, Enclave-SSP, Enclave-AI, Enclave-Enterprise).

## Source of truth

The real design handoff is `_dev_package/design_handoff_enclave_site/` (extracted from `Enclave Compliance Suite Overview.zip`). Its `README.md` is authoritative — read it fresh before resuming, it has exact routing, copy, tokens, and interaction specs. This plan file records the decisions layered on top of it, not a restatement of its content.

**Superseded, not authoritative:** the loose `Enclave Compliance Landing Page.dc.html` / `Enclave Compliance Suite Deck.dc.html` / `directory.txt` files in the repo root predate the real handoff and use an unthemed generic template. Safe to archive. `directory.txt`'s icon spec still matters separately for the four products' *desktop app* icons — that's not this site's concern.

## Design system

**Broadsheet** (from the handoff's `_ds/` bundle) — Source Serif 4 everywhere (no sans anywhere, including UI chrome), paper ground `#f3f2f2`, near-black ink `#201e1d`, cyan `#0088b0` / magenta `#d6006c` as sparing spot accents, no boxes/cards/shadows for layout, low radius (2px base). All 5 pages' copy is final and client-supplied — never rewritten during implementation.

## Logo decision (2026-08-27, overriding the handoff's "Assets: None")

The handoff spec ships zero images/logos by design. Decided to use the existing hexagon "E" mark anyway:
- **Nav brand**: hexagon icon + the existing `enclavecompliance.com` text (not the old logo SVG's own "nclave-Compliance" wordmark text — mixing two different brand-name conventions on one page would look inconsistent).
- **Color**: the hexagon fill uses `--color-accent-700` (`#006786`) from the *existing, unmodified* Broadsheet ramp, not a hardcoded value or a new ramp. Discovered that `#006786` and the logo's original `#006680` are nearly identical (same hue, ~192°) — so the logo slots onto the design system's existing 700 step with an imperceptible shift, the same way kickers and links already use that step. No ramp regeneration needed; zero changes to `styles.css`'s token values.
- **Favicon**: same hexagon mark, via Next.js's `app/icon.svg` convention.
- **Scope**: light-mode only (the design has no dark mode); the dark-variant logo SVG isn't used.

## Other decisions locked in this session

- **Lead capture** ("Talk to us", email-capture form): submits to a plain email notification. Destination address still needed before wiring the real handler (Phase 4 below) — form ships with validation/pending/success states first, submission logic stubbed until then.
- **Mobile nav**: below 700px, add a real hamburger/drawer menu exposing the four product links + Talk to us — beyond the handoff's own minimum ("hide links, brand + button remain"), which it explicitly flagged as undecided.
- **enclave-ai.dev / update copy, corrected 2026-09-02**: the "Application updates... hosted at enclave-ai.dev" claim (on the Enclave-AI page, in `Footer.tsx`, and in the Terms page) is no longer true — Enclave-AI's live update-channel subsystem was removed entirely (see Enclave-AI's own `ENCLAVE_AI_UPDATE_CHANNEL_ROLLBACK_PLAN.md`); the app now ships as a versioned installer with no background update checks and no network update-channel at all. Rewritten to say that instead of naming a hosting domain. Where downloads/licensing will actually be served from (Vercel on enclave-ai.dev is the current direction, not yet decided in detail) is still open — revisit this section once that's settled, rather than naming a URL again before it's confirmed.
- **Tech stack**: Next.js 16 (App Router), TypeScript, plain CSS (no Tailwind) — Broadsheet is already a self-contained plain-CSS system, so its component layer is ported near-verbatim rather than translated into utility classes. `output: "standalone"` (not static export) because the email-capture backend needs a real server route eventually, matching enclave-ai.dev's own build config.
- **Fonts**: Source Serif 4 loaded via `next/font/google` (weights 400/600, plus italic) rather than the design system's `@import` — same font, better loading behavior, no visual difference.

## Routes (all real Next.js routes, not client-side state — per the handoff's own explicit requirement)

| Route | View |
| --- | --- |
| `/` | Home |
| `/enclave-gap` | Enclave-GAP |
| `/enclave-ssp` | Enclave-SSP |
| `/enclave-ai` | Enclave-AI |
| `/enterprise` | Enclave-Enterprise |

## Phased build

- [x] **Phase 1 — Scaffold**: Next.js + TS project (`package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`), Broadsheet tokens + page-layout classes ported into `globals.css`, shared `Nav` (with mobile menu + active-route highlighting) and `Footer` components, hexagon logo component + favicon.
- [x] **Phase 2 — Routes**: the 5 pages built to the handoff's exact copy/structure.
- [x] **Phase 3 — Email capture backend**: `/api/contact` sends a real notification via the Resend REST API (plain `fetch`, no new dependency) when `RESEND_API_KEY` is set; falls back to a console log otherwise, so dev/build never breaks without it. Destination is `CONTACT_NOTIFICATION_EMAIL` (defaults to marc.larouche@gmail.com — change once real hosting/support email is configured). Sender defaults to Resend's shared sandbox address (`RESEND_FROM_EMAIL`) until enclavecompliance.com is verified as a Resend domain. All three vars documented in `.env.example`. Validation/pending/success/error states were already built in Phase 1/2's `EmailCapture.tsx` per the handoff spec — verified working end-to-end in the browser.
- [x] **Phase 4 — Business-site plumbing** (not covered by the design handoff, still needed): `/privacy` and `/terms` pages added (placeholder-quality legal text — not attorney-reviewed, should be checked before the site collects real leads at scale); `sitemap.xml` and `robots.txt` via Next.js metadata routes; per-page `description` + `openGraph` added to all 5 routes (also fixed a pre-existing bug where the home page's title rendered as "Enclave Compliance — Enclave Compliance" due to the layout's title template); custom `/not-found` page; Footer now links to Privacy/Terms (not in the original handoff's 3-item footer spec, but needed once the site collects emails).
- [x] **Phase 5 — Asset production**: rasterized `icon.svg` into `src/app/favicon.ico` (16/32/48px, multi-resolution ICO, transparent) and `src/app/apple-icon.png` (180×180, opaque `#f3f2f2` paper background behind the hexagon — Apple touch icons render transparency as solid black on-device, so this needed a background the SVG itself doesn't have). Used Next.js's file-based icon conventions, so no code/metadata changes were needed — verified in the browser that all three `<link rel="icon"|"apple-touch-icon">` tags now resolve correctly. Rasterization was done with `sharp` + `to-ico` in a throwaway scratch npm project, not added as a project dependency — this was a one-time asset build step, not an ongoing one.
- [ ] **Phase 6 — Deploy**: Vercel, decided 2026-08-28 — not the DigitalOcean droplet pattern used for enclave-ai.dev. That droplet exists specifically for enclave-ai.dev's persistent `data/` JSON manifests and its admin console's direct filesystem writes (see its `docker-compose.yml` bind mount); enclave-compliance.com has no server-side state at all — `/api/contact` only calls the Resend API and returns — so it fits a zero-ops serverless host instead of a VM to patch and babysit.
- [x] **Phase 8 — Application Security page** (2026-09-12, not in the original handoff): new `/security` route, added to the main nav, aimed squarely at the security questionnaire an agency buyer's reviewer will run before purchase. Covers the DISA ASD STIG-coded SDLC, the SAST toolchain (cargo audit/npm audit/Semgrep/clippy/machete/knip) and its CI cadence, the reasoning for why a conventional DAST scan doesn't apply to an offline Tauri desktop app plus the four-point manual runtime-boundary review done instead, current per-product STIG compliance numbers, and the encryption/auth architecture. Content was pulled from the real, current SAST/DAST reports and STIG status trackers in the Enclave-AI/GAP/SSP repos, not written from memory. Scoped to Enclave-GAP/SSP/AI only, per Marc's explicit choice — Enclave-POL (1/286 STIG rows closed, no SAST/DAST ever run) and Enclave-Enterprise (not yet built) are excluded rather than shown next to the mature three at a misleadingly early stage. CTA reuses the existing `EmailCapture` component to request the full report package.

## Open items

- `Enclave_Compliance_Suite_Blueprint.pdf` in the repo root has never been read (missing PDF-render dependency in the build environment) — if it has positioning/pricing content that should shape site copy, it hasn't been factored in yet.
- Where Enclave-AI downloads/licensing actually end up being served from (Vercel on enclave-ai.dev is the current direction, not finalized) — once decided, add a real download link to the Enclave-AI page's "Release policy" section, which currently names no hosting location at all.
- `RESEND_API_KEY` must be set on the deploy host before lead notifications actually send (Phase 3 falls back to a console log without it) — see `.env.example`.
- Privacy Policy and Terms of Service text is a reasonable placeholder, not attorney-reviewed — worth a legal pass before the site is driving real signups at volume.
- **2026-09-12, same-day follow-up to Phase 8:** added a safe-harbor/response-time commitment to the vulnerability-reporting section (2 business day acknowledgment, no legal action for good-faith reports); added an "Architecture & threat model" section with a shared data-flow diagram (`ArchitectureDiagram.tsx`) covering user/webview/IPC/Rust-core/storage/kernel-backed key vault/no-open-ports, plus per-product explanation; added an "Incident response" section referencing a new org-level `ENCLAVE_COMPLIANCE_INCIDENT_RESPONSE_PLAN.md` (mapped to NIST SP 800-53 Rev. 5 IR-1 through IR-8) and a real `INCIDENT_LOG.md`, both at this repo's root. The org-level IR plan sits above each product's own existing application-level IR plan rather than replacing it. Discovered while building this that Enclave-GAP was missing a threat model document (Enclave-AI and Enclave-SSP each have one) — a background agent was dispatched to write `ENCLAVE_GAP_THREAT_MODEL.md` with the same rigor, grounded in GAP's real source, before the security page's "request the full package" claim about "per-product threat models" is fully true; check that this completed before treating the claim as verified.
- There's still no SBOM export anywhere in the suite despite `cargo audit`/`npm audit` already having the full dependency tree needed to generate one (increasingly expected in federal buyer questionnaires post EO-14028). Flagged 2026-09-12, not built yet.


## Phase 6 — Vercel setup checklist

- [ ] Connect the GitHub repo (`marclarouche/enclave-compliance`) to a new Vercel project. Next.js needs zero build config on Vercel, so this is most of the work.
- [ ] Add `enclavecompliance.com` as a custom domain in the Vercel project's domain settings, then point the domain's DNS at Vercel from its registrar. Until this is done, the site only has a `*.vercel.app` URL, and the sitemap/OpenGraph tags (hardcoded to `https://enclavecompliance.com`) point at a domain that isn't serving the site yet.
- [ ] Create a Resend account, generate an API key, and set `RESEND_API_KEY` as a Vercel environment variable. Without it, the site deploys fine and the form looks like it works, but every "Talk to us" submission silently falls back to a Vercel function log instead of sending an email notification — nothing visibly breaks, so this is the step most likely to get missed.
- [ ] `CONTACT_NOTIFICATION_EMAIL` and `RESEND_FROM_EMAIL` can stay on their `.env.example` defaults for launch; revisit once real hosting/support email exists.