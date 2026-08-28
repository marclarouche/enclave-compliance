# Handoff: Enclave Compliance Suite — enclavecompliance.com

## Overview

Marketing site for **Enclave Compliance Suite**, a compliance toolset for teams who need to prove control implementation, not just claim it. The site presents three standalone desktop products plus an enterprise deployment:

- **Enclave-GAP** — assess the gap
- **Enclave-SSP** — build the documentation
- **Enclave-AI** — prove the controls
- **Enclave-Enterprise** — multi-user deployment

The site is five views: a home page and four detail pages (one per product, one for Enterprise). A companion domain, **enclave-ai.dev**, is referenced as the host for Enclave-AI application updates — it is NOT part of this build.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look, structure, and behavior. They are not production code to copy directly.

The task is to **recreate these designs in the target codebase's existing environment** (React, Next.js, Astro, Vue, plain static HTML — whatever the project uses) following its established patterns, routing, and component conventions. If no environment exists yet, pick the framework most appropriate for a small marketing site with five static routes; a static-site generator or Next.js static export is a good fit — there is no dynamic data and no authentication in this design.

One structural note: in the prototype, all five views live in a single file and switch via component state. **In production these must be five real routes with real URLs** (see Routing below), not a client-side view switcher. The prototype used state only because it is a single-file design artifact.

## Fidelity

**High-fidelity.** Colors, typography, spacing, and interaction states are final and come from a design system (see Design Tokens). Recreate the UI faithfully. Where the target codebase already has a design system, map these tokens onto it rather than hard-coding hexes; where it does not, port the token set as listed.

## Design System

The design is built on **Broadsheet** — newsprint set for the web. The rules that matter most when recreating it:

- Near-black serif type on paper white. **Source Serif 4** for both headings and body; no sans-serif anywhere, including UI chrome.
- **No boxes, no dividers, no cards for layout.** Section hierarchy comes from the serif type scale and whitespace alone. The only rules that print are the thin borders inside data tables.
- Two process accents used small and deliberately, like spot color: cyan `#0088b0` for interactive elements, magenta `#d6006c` as the rarer second spot. Never both in the same small component.
- Left-aligned, asymmetric layouts. Content hugs the left edge; whitespace lives on the right. Text blocks are capped by measure (`ch` units), not by centered containers.
- Airy spacing. Do not tighten it.

## Routing

| Route | View | Nav label |
| --- | --- | --- |
| `/` | Home | (brand) |
| `/enclave-ssp` | Enclave-SSP | Enclave-SSP |
| `/enclave-ai` | Enclave-AI | Enclave-AI |
| `/enclave-gap` | Enclave-GAP | Enclave-GAP |
| `/enterprise` | Enclave-Enterprise | Enterprise |

The nav is identical on every route. The active route's nav item renders in body text color (`--color-text`) instead of accent — that is the only active-state affordance. Navigating resets scroll to top.

## Global Chrome

### Nav bar

Full-bleed at the top of every page, using the design system's `.nav` class. Horizontal padding matches the content column: `max(var(--edge), calc((100% - 1200px) / 2 + var(--edge)))` where `--edge: clamp(20px, 5vw, 72px)`.

Contents, left to right:
1. Brand: text `enclavecompliance.com` (`.nav-brand`), links to `/`
2. Four nav links: `Enclave-SSP`, `Enclave-AI`, `Enclave-GAP`, `Enterprise` — 15px, color `--color-accent-700`, hover `--color-accent-900`, active route `--color-text`
3. Right-aligned primary button: `Talk to us` (`.btn .btn-primary`)

Below 700px the four nav links hide; brand and button remain. (A production build should add a mobile menu — the prototype does not specify one. Flag this to design if a mobile nav is required.)

### Content column

`max-width: 1200px`, centered, horizontal padding `--edge`.

### Footer

Every page. Flex row, wrapping, `gap: 8px 24px`, 13px, `line-height: 28px`, color `color-mix(in srgb, var(--color-text) 70%, transparent)`, vertical padding `56px`. Three items:

- `enclavecompliance.com`
- `Enclave-AI updates: enclave-ai.dev`
- `Coded according to DISA STIGs.`

## Screens / Views

### 1. Home — `/`

**Purpose:** Explain the suite, route visitors to the product page they care about.

Sections top to bottom:

**Domain rail.** A small uppercase breadcrumb-like rail above the hero. Flex row, baseline aligned, `gap: 14px`, 13px, `letter-spacing: 0.06em`, uppercase, color `color-mix(in srgb, var(--color-text) 60%, transparent)`, `padding-top: 42px`. Items separated by `·`: `Enclave Compliance` · `Desktop products` · `Enterprise deployment`.

**Hero.** Padding `70px` top / `84px` bottom.
- H1 (`.display`): "Prove control implementation. Not just claim it." — Source Serif 4, heading weight, `font-size: clamp(40px, 5.6vw, 72px)`, `line-height: clamp(43px, 6.1vw, 78px)`, `letter-spacing: -0.02em`, optical left overhang `margin-left: -0.035em`, cap-height trimmed (`text-box: trim-both cap alphabetic`).
- Sub paragraph: 18px / 28px, `max-width: 58ch`, top margin `42px - 1cap`. Copy: "Enclave is a compliance toolset built for teams who need to prove control implementation, not just claim it. Three desktop products, one lifecycle: assess the gap, build the documentation, prove the controls."
- Button row, `gap: var(--space-3)`, top margin 28px: `Talk to us` (`.btn-primary`), `Enterprise deployment` (`.btn-ghost`, links to `/enterprise`).

**Lifecycle.** Section padding `70px` block.
- Lead paragraph: 20px / 42px, `max-width: 46ch`, bottom margin 42px. Copy: "Each tool stands alone. Together, they cover the full compliance lifecycle."
- Step row: flex, wrapping, baseline aligned, `gap: 28px`. Three steps separated by `→` glyphs in `color-mix(in srgb, var(--color-text) 45%, transparent)`. Each step is 22px heading font: a number in `--color-accent-700` then the label, `gap: 10px`.
  - `01` Assess the gap
  - `02` Build the documentation
  - `03` Prove the controls

**Products.** Kicker `The desktop products` (13px, `letter-spacing: 0.08em`, uppercase, 70% text). Three-column grid, `gap: 42px clamp(28px, 4vw, 64px)`, collapsing to one column below 900px. Each column:
- Tag (13px, `letter-spacing: 0.08em`, uppercase, `--color-accent-700`), bottom margin 14px
- H3 26px / 28px heading font, `letter-spacing: -0.01em`
- Paragraph 16px / 28px, `text-align: justify`, `hyphens: auto`, `hyphenate-limit-chars: 6 3 3`, color 78% text
- Text link `Read more →` in accent, top margin 14px

Column content, in this order (assess, build, prove — deliberately not alphabetical):

| Tag | Title | Copy | Links to |
| --- | --- | --- | --- |
| Assess — Enclave-GAP | Enclave-GAP | Audits your existing policies and procedures against the framework you're targeting and shows you exactly what's missing before an auditor does. | `/enclave-gap` |
| Build — Enclave-SSP | Enclave-SSP | Writes and documents CMMC Level 2 System Security Plans for defense contractors. | `/enclave-ssp` |
| Prove — Enclave-AI | Enclave-AI | Maps your AI systems against NIST AI RMF, the EU AI Act, and state laws like Colorado SB-205 and New York's AI law, with policy evidence built in. | `/enclave-ai` |

**Frameworks table.** Kicker `Frameworks and regulations covered`. Full-width table, `border-collapse: collapse`, 16px. Cells: `padding: 14px 20px 14px 0`, `border-bottom: 1px solid var(--color-divider)`, left aligned. Header cells 13px, `letter-spacing: 0.06em`, uppercase, 65% text, heading weight. First column uses the heading font.

| Framework | Scope | Covered by |
| --- | --- | --- |
| CMMC Level 2 | Defense contractors | Enclave-SSP |
| NIST AI RMF | Federal AI risk guidance | Enclave-AI |
| EU AI Act | European Union | Enclave-AI |
| State AI laws — Colorado SB-205, New York | State-level | Enclave-AI |
| Any targeted framework | Your existing policies | Enclave-GAP |

**STIG statement.** Accent kicker `Built to DISA STIGs` (same kicker style but colored `--color-accent-700`), then H2 (`.h2`: `clamp(28px, 3.2vw, 40px)` / 42px, `letter-spacing: -0.015em`, `margin-left: -0.03em`): "All software and systems are coded according to DISA STIGs."

**Enterprise teaser.** Kicker `Enterprise`, H2 "Enclave-Enterprise", body paragraph (16px / 28px, `max-width: 62ch`, 78% text): "A multi-user system hosted on Red Hat dual servers, with a container option for those who wish to host in house. A SaaS option is coming soon." Then a pill row (`gap: var(--space-2)`, top margin 28px) of three pills — 13px, `padding: 4px 12px`, `border-radius: var(--radius-md)`, background `--color-accent-100`, color `--color-accent-900`: `Red Hat dual servers`, `Container — host in house`, `SaaS coming soon`. Then a ghost button `Enterprise details →` to `/enterprise`.

**Close.** H2 "Let's talk compliance.", sub paragraph "Enclave-GAP, Enclave-SSP, and Enclave-AI — the full compliance lifecycle, one toolset." Then the email capture: flex row, `gap: var(--space-3)`, `max-width: 460px`, `min-height: 36px` on both children, stacking to a column below 720px. An `.input` (`type="email"`, placeholder `you@company.com`, `aria-label="Work email"`) and a `.btn-primary` reading `Talk to us`.

### 2. Enclave-SSP — `/enclave-ssp`

**Hero.** Accent kicker `Desktop product · Build the documentation`. H1 (`.display`) "Enclave-SSP". Sub: "Enclave-SSP writes and documents CMMC Level 2 System Security Plans for defense contractors." Primary button `Talk to us`.

**Where it sits in the lifecycle.** Kicker, then body paragraph: "Step two of three. Enclave-GAP finds what's missing; Enclave-SSP writes the System Security Plan that documents it."

**Coverage.** Kicker `Coverage`, two-column table — headers `Framework` / `Scope`; one row: `CMMC Level 2` / `Defense contractors`.

**Deployment.** Kicker `Deployment`, then a dash list — no bullets; each item prefixed by an em-dash-style `— ` in `--color-accent-700` via `::before`, `text-indent: -0.6em; padding-left: 0.6em`, 16px / 28px, 82% text, 14px between items:
- Single-user desktop application.
- Multi-user deployment available through Enclave-Enterprise.
- Coded according to DISA STIGs.

### 3. Enclave-AI — `/enclave-ai`

**Hero.** Accent kicker `Desktop product · Prove the controls`. H1 "Enclave-AI". Sub: "Enclave-AI maps your AI systems against NIST AI RMF, the EU AI Act, and state laws like Colorado SB-205 and New York's AI law, with policy evidence built in." Primary button `Talk to us`.

**Coverage.** Table, headers `Framework or law` / `Scope`:

| Framework or law | Scope |
| --- | --- |
| NIST AI RMF | Federal AI risk guidance |
| EU AI Act | European Union |
| Colorado SB-205 | State-level |
| New York AI law | State-level |

**Updates and release information.** Kicker, body paragraph: "Application updates and other information for Enclave-AI are hosted at enclave-ai.dev." Production note: link `enclave-ai.dev` out to that domain once it exists.

**Deployment.** Same three-item dash list as Enclave-SSP.

### 4. Enclave-GAP — `/enclave-gap`

**Hero.** Accent kicker `Desktop product · Assess the gap`. H1 "Enclave-GAP". Sub: "Enclave-GAP audits your existing policies and procedures against the framework you're targeting and shows you exactly what's missing before an auditor does." Primary button `Talk to us`.

**Where it sits in the lifecycle.** Body paragraph: "Step one of three. Run it before you write documentation, and again before an assessment."

**Coverage.** Table, headers `Input` / `Compared against`; one row: `Your existing policies and procedures` / `The framework you're targeting`.

**Deployment.** Same three-item dash list.

### 5. Enclave-Enterprise — `/enterprise`

**Hero.** Accent kicker `Enterprise`. H1 "Enclave-Enterprise". Sub: "The enterprise application is a multi-user system hosted on Red Hat dual servers, with a container option for those who wish to host in house, and a SaaS option coming soon." Primary button `Talk to us`.

**Deployment options.** Kicker `Deployment options`, three-column grid (same grid as the home products section):

| Tag | Title | Copy |
| --- | --- | --- |
| Available | Red Hat dual servers | A multi-user system hosted on Red Hat dual servers. |
| Available | Container | A container option for those who wish to host in house. |
| Coming soon | SaaS | A hosted SaaS option is coming soon. |

**Security posture.** Accent kicker `Security posture`, H2: "All software and systems are coded according to DISA STIGs."

**Close.** H2 "Talk to us about deployment." plus the same email capture row as the home page.

## Interactions & Behavior

- **Navigation.** Nav links, product `Read more →` links, the brand mark, and the Enterprise CTAs all navigate. In production these are anchors with real hrefs, not buttons with click handlers. Scroll resets to top on route change.
- **Active route.** The current route's nav link renders in `--color-text`; the others in `--color-accent-700`.
- **Hover.** Text links: `--color-accent-700` → `--color-accent-900`. Buttons and inputs use the design system's built-in hover and pressed states — do not restyle them per page.
- **Focus.** `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }` on every interactive element. Never leave the browser default ring.
- **Email capture.** Not wired in the prototype. Production needs: HTML5 email validation, an inline error message below the field on invalid submit, a disabled/pending button state during submit, and a success state replacing the row with a confirmation line. Confirm the destination (CRM, form endpoint, mailto) with the client before building.
- **Animations.** None. The design has no transitions or scroll effects beyond the design system's own button/input state transitions.
- **Responsive.** Three breakpoints only: 900px (three-column grids collapse to one), 720px (email capture stacks vertically), 700px (nav links hide). Everything else is fluid via `clamp()` on type and `--edge` padding.

## State Management

Minimal. In a routed production build, there is effectively none:

- Current route — owned by the router, not component state.
- Email capture field value, plus submit status (`idle | pending | success | error`) and an error message string.

No data fetching, no authentication, no user session.

## Design Tokens

All tokens come from the Broadsheet design system stylesheet. Read them from CSS custom properties (`var(--*)`) rather than hard-coding.

**Color roles**

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#f3f2f2` | Page ground (paper) |
| `--color-text` | `#201e1d` | Body and headings |
| `--color-accent` | `#0088b0` | Cyan — interactive elements |
| `--color-accent-2` | `#d6006c` | Magenta — rare second spot |
| `--color-accent-100` | ramp step | Pill / tint fills |
| `--color-accent-700` | ramp step | Accent text at paragraph size, kickers, links |
| `--color-accent-900` | ramp step | Text on accent tints, link hover |
| `--color-divider` | ramp step | Table row rules only |

Each role also carries a 100–900 OKLCH ramp (`--color-neutral-*`, `--color-accent-*`, `--color-accent-2-*`). Use ramp steps rather than ad-hoc `color-mix()` where a step exists. The muted text values in this design are the deliberate exception — they are `color-mix(in srgb, var(--color-text) N%, transparent)` at 60 / 65 / 70 / 78 / 82%.

**Accessibility note:** the accent-to-ground contrast is tuned to roughly 3:1 — fine for large text, icons, and chrome, not for body copy. Paragraph-size accent text must use `--color-accent-700`, as this design does.

**Typography**

| Role | Family | Size | Line height | Tracking |
| --- | --- | --- | --- | --- |
| Display (H1) | Source Serif 4 | `clamp(40px, 5.6vw, 72px)` | `clamp(43px, 6.1vw, 78px)` | `-0.02em` |
| H2 | Source Serif 4 | `clamp(28px, 3.2vw, 40px)` | 42px | `-0.015em` |
| H3 / column title | Source Serif 4 | 26px | 28px | `-0.01em` |
| Step label | Source Serif 4 | 22px | baseline aligned | — |
| Hero sub / lead | Source Serif 4 | 18–20px | 28px / 42px | — |
| Body | Source Serif 4 | 16px | 28px | — |
| Kicker / tag / footer | Source Serif 4 | 13px | 14–28px | `0.06–0.08em`, uppercase |

Headings use `--font-heading` at `--font-heading-weight`; body uses `--font-body`. True italic is loaded at body weight for emphasis — never synthesize an oblique. Headings carry `text-box: trim-both cap alphabetic` and a small negative `margin-left` for optical alignment; if the target environment can't support `text-box`, substitute equivalent manual leading compensation and keep the flush-left optical edge.

**Spacing.** The design's vertical rhythm is a 28px leading unit with a 14px half unit; section padding is a multiple of it (`2.5 × 28 = 70px` between sections, `3 × 28 = 84px` below the hero). Horizontal gutter is `--edge: clamp(20px, 5vw, 72px)`. Component-internal gaps use the design system's `--space-2` / `--space-3`. Density is 1.25× and already baked into the scale — do not tighten it.

**Measure.** Body text caps at `58ch` (hero sub, close sub), `62ch` (body paragraphs, dash lists), `46ch` (lead). Content column caps at 1200px.

**Radius.** `--radius-md` on pills; `--radius-*` scale otherwise (base radius is 2px — this is a low-radius system).

**Shadow.** `--shadow-sm / md / lg` exist but this design uses none. Keep it flat.

## Assets

**None.** The design contains no images, photographs, icons, or logos. Everything is type, rules inside tables, and color.

If assets are added later, the design system's rules apply: photographs print as misregistered process plates (`.cmyk`), interface screenshots take the newsprint dot screen (`.halftone`), and icons are Phosphor in the duotone weight.

The one dependency to carry over is the **Source Serif 4** webfont at the heading and body weights plus the body-weight true italic.

## Copy

All copy in the prototype is final and client-supplied — do not rewrite it during implementation. Product descriptions, the DISA STIG statement, and the Enterprise deployment language are verbatim.

## Files

Bundled in this folder:

- `Enclave Landing Page.dc.html` — the five-view site prototype (home + four detail pages). The primary reference.
- `Enclave Compliance Suite Deck.dc.html` — a 10-slide overview presentation on the same design system. Included for context and tone; not part of the site build. Note: its Enterprise slide predates the Red Hat dual-server / container / SaaS description above — trust this README, not that slide.
- `support.js`, `deck-stage.js` — prototype runtime files. **Do not port these.** They exist only so the HTML references open in a browser.
- `_ds/` — the Broadsheet design system: `styles.css` (the token sheet and component layer), `_ds_bundle.js`, `readme.md` (the full design system guide), `_ds_manifest.json`. Read `styles.css` for exact token values and `readme.md` for the system's rules.

## Open Questions for the Client

1. Where should the `Talk to us` buttons and the email capture submit to?
2. Is a mobile nav menu required, or is hiding the links below 700px acceptable?
3. Should `enclave-ai.dev` be linked from the Enclave-AI page now, or left as plain text until it's live?
4. Are there product screenshots to place, or does the site stay type-only?
