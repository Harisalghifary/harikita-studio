# Decision Log

Append-only. Newest entries at the bottom. Each entry records what was decided, why, and what it rules out.

Project: **Harikita Studio — Wedding Invitation Art Portal**
Spec: [`../PROJECT_SPEC.md`](../PROJECT_SPEC.md)

---

## D-001 — Project folder location

**Date:** 2026-10-28
**Status:** Accepted

`/Users/xbox/github/wedding-art-portal`

**Why:** Clear top-level name matching the project title, separate from the existing `wedding-invitation*` and `suci-wedding` archives.
**Rules out:** Nesting inside `showcase/` or reusing an old invitation repo.

---

## D-002 — Studio name

**Date:** 2026-10-28
**Status:** Accepted

**Harikita Studio** — from **Hari**s + Rez**kita**, the couple's names from their wedding. *Kita* also means "we/us".

**Why:** It is a real name with a real origin rather than a manufactured brand. That origin is reusable in About copy and in the commission narrative.
**Rules out:** Inventing a separate brand name; treating "Harikita" as decoration.
**Follow-up:** Confirm domain and social handle availability before any print or public use.

---

## D-003 — Technical stack

**Date:** 2026-10-28
**Status:** Accepted

Astro + TypeScript + Tailwind, static output, hosted on Cloudflare Pages. Content in Astro content collections. Fonts self-hosted via `@fontsource`. Images via `astro:assets`.

**Why:** §7 explicitly defers complex engineering. Astro produces static HTML with near-zero JavaScript, ships image optimization at build time, and has no server to maintain — which is the actual risk to a hobbyist studio. It matches §7's own recommendation ("Next.js or Astro for static generation", "Tailwind with design tokens", "Static hosting first").
**Rules out:** SSR, a database, user accounts, a headless CMS at launch, and client-side routing frameworks for a seven-page site.

---

## D-004 — Palette direction

**Date:** 2026-10-28
**Status:** Accepted, pending the artist's sign-off

Blue-led per §4.2: Deep Cerulean as primary, Blush Petal / Dusty Rose as romantic accents, Paper Mist background.

**Why:** The spec labels it the balanced, recommended palette. Pink-led (§4.3) stays documented as an alternative and can be swapped at the token layer without touching a component.
**Rules out:** Free-form color invention; gold used as body text (§4.12).

---

## D-005 — Inquiry flow

**Date:** 2026-10-28
**Status:** Accepted

A single `/commission` page containing the process explanation and an embedded **Tally** form.

**Why:** §5.3 states an external form is enough for the first version. Tally requires no backend, no spam filtering of our own, and no code to maintain. It also keeps the "no payment gateway, no dashboard" boundary intact.
**Rules out:** A hand-built form handler, database storage of inquiries, and Stripe/checkout of any kind.
**Supersedes:** An earlier draft that proposed a native form posting to Formspree.

---

## D-006 — Page structure for Phase 1

**Date:** 2026-10-28
**Status:** Accepted

`/` · `/portfolio` · `/portfolio/[slug]` · `/about` · `/commission` · `/faq` · `/styleguide` (noindex)

**Why:** Follows §5.1's five pages and adds artwork detail (needed for §5.1's "Artwork detail view") plus a non-public styleguide. Commission and process stay on one page, as §5.1 describes.
**Rules out:** Splitting `/process` and `/inquire` into separate routes.

---

## D-007 — Portfolio filtering deferred

**Date:** 2026-10-28
**Status:** Accepted

Style tags render on artwork cards. No filter UI in Phase 1.

**Why:** §5.1 lists "Style categories" but §6's Phase 1 features do not include filtering. With three to six pieces, filtering is interface without function.
**Rules out:** Building a client-side filter before the gallery is long enough to need one.

---

## D-008 — Styleguide route

**Date:** 2026-10-28
**Status:** Accepted

A `noindex` `/styleguide` route renders every token, type step, button, shadow, and artwork frame from §4.

**Why:** Makes §9's "Colors match design system" check verifiable instead of subjective, and gives the artist a single page to approve or reject before any real page is built.
**Rules out:** Approving the visual direction from a Figma file the developer cannot keep in sync with the build.
---

## D-009 — Pink-led palette needs darker steps for AA

**Date:** 2026-10-28
**Status:** Accepted

The pink-led direction (§4.3) uses two derived colours when previewed:
`#9E5568` for primary and `#586D89` for muted text.

**Why:** §4.3 as written fails §4.12. White on Dusty Rose `#C87E92` measures **3.06:1** and Slate Blue `#6E87A3` on Warm Pearl measures **3.51:1** — both below the 4.5:1 AA floor for body text. The two darker steps of the same hues measure 5.31:1 and 5.01:1.
**Rules out:** Shipping the pink direction exactly as tabulated, and using Dusty Rose as a button background with a white label.
**Scope:** Only the optional pink direction. The default blue palette passes every pairing (lowest approved pair is 5.11:1).

---

## D-010 — Astro 5, not 7

**Date:** 2026-10-28
**Status:** Accepted

Pin `astro@^5.18.2`. Dev runs on Node 22 (`.nvmrc`).

**Why:** Astro 7 requires Node ≥22.23.4 and was released days ago; §7 explicitly warns against unnecessary risk in a hobby project. Astro 5 is stable, supports Node 20 and 22, and renders this site to plain HTML.
**Rules out:** Upgrading majors before launch. Revisit after Phase 3.
