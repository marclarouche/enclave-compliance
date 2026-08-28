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
- **enclave-ai.dev link**: the Enclave-AI page's "Application updates... hosted at enclave-ai.dev" line stays plain text, not a hyperlink, until enclave-ai.dev is confirmed live on its public domain (it's real and passing tests in local dev as of Phase 0 of the licensing plan, but not yet confirmed publicly deployed).
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
- [ ] **Phase 3 — Email capture backend**: real server route once a notification address is provided; validation/pending/success/error states per the handoff's interaction spec.
- [ ] **Phase 4 — Business-site plumbing** (not covered by the design handoff, still needed): Privacy Policy + Terms (required once collecting emails), `sitemap.xml`/`robots.txt`, per-page meta/OpenGraph tags, custom 404.
- [ ] **Phase 5 — Asset production**: rasterize the hexagon SVG into actual favicon/icon files (currently only the SVG source exists).
- [ ] **Phase 6 — Deploy**: same hosting pattern as enclave-ai.dev.

## Open items

- `Enclave_Compliance_Suite_Blueprint.pdf` in the repo root has never been read (missing PDF-render dependency in the build environment) — if it has positioning/pricing content that should shape site copy, it hasn't been factored in yet.
- Email notification destination address — needed before Phase 3.
- Whether/when enclave-ai.dev goes publicly live — needed to flip the plain-text mention to a real link.
