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

---

## D-011 — Domain is harikita.store

**Date:** 2026-10-28
**Status:** Accepted

`https://harikita.store`, registered 24 Oct 2026 via Hostinger, expires 24 Oct 2027.

**Why:** Confirmed by the owner. `astro.config.mjs` sets it as `site`, which turns on canonical URLs and the sitemap.
**Actions taken:** `site` + `og:url` in the layout, `robots.txt` and `sitemap.xml` endpoints, domain recorded in `src/config/site.ts`.
**Rules out:** A `{{DOMAIN}}` placeholder in metadata, or a www/non-www split.
**Follow-up (owner):** enable auto-renew; point nameservers at Cloudflare before connecting Cloudflare Pages. Transfer is locked until ~23 Dec 2026.

---

## D-012 — No style categories in the portfolio

**Date:** 2026-10-29
**Status:** Accepted

The portfolio is a flat grid. Artwork carries **colour tags** (`palette`), not style categories.

**Why:** §5.1 suggests six categories (Blue Romance, Pink Blossom, Watercolor…), but the artist is still finding her style and works in Procreate. A taxonomy asserted before a body of work exists produces empty shelves, and it quietly tells her what she is allowed to make. Colour tags describe a piece accurately without claiming a style.
**Rules out:** Filter UI and category pages until she names a series herself.
**Revisit:** after roughly ten finished pieces, or the first deliberate series.

---

## D-013 — Placeholders first, guarded by PUBLIC_SITE_LIVE

**Date:** 2026-10-29
**Status:** Accepted

Six placeholder artworks ship now, each `placeholder: true`, so every route can be built and reviewed before real art exists.

The single switch `PUBLIC_SITE_LIVE` controls the boundary:

| Value | Behaviour |
|---|---|
| `false` (default) | Placeholders render with a **Preview** badge; the site is `noindex`; `robots.txt` disallows everything |
| `true` | Placeholder entries are excluded from the build; the build prints a warning naming them; the site becomes indexable and the sitemap is referenced |

**Why:** Waiting for finished artwork blocks all layout work and hides design problems until the most expensive moment. A flag makes previewing free and publishing fake work impossible by accident.
**Rules out:** Committing a placeholder as `placeholder: false`, and launching with any placeholder still present.
**Also confirmed:** the blue-led palette (§4.2) is the default. It contrasts with the blush-and-rose palette most invitation art uses, passes AA as specified, and reads as a studio rather than a template shop. The pink direction stays available as the D-009 override.

---

## D-014 — Keepsake URLs use a slug, not a subdomain

**Date:** 2026-10-29
**Status:** Accepted

Keepsake pages live at `harikita.store/i/<slug>`. Subdomains are deferred, not rejected.

| State | URL | Indexable | Purpose |
|---|---|---|---|
| Draft | `/i/arif-kirana-7f3k` | no | private preview for the couple |
| Published | `/i/arif-kirana` | optional | the link guests receive |

**Why:** one deployment, one build, one certificate, no per-client host mapping. Subdomains would need a Worker in front of Cloudflare Pages to route wildcard hosts, plus a mapping to maintain for every client — real complexity for a hobby studio, and no MVP benefit.
**Not the reason:** certificate cost. Cloudflare's free Universal SSL already covers `*.harikita.store`.
**Prefix is required:** `/about`, `/faq` and `/portfolio` are studio routes. Without `/i/`, a couple named "About" would collide. The prefix is reserved in `src/config/site.ts` as `KEEPSAKE_PREFIX`.
**Reversible:** if subdomains become part of the offer, add a `subdomain` field to the client entry and route `*.harikita.store` to `/i/<slug>/` with a Worker. No content migration, no page rebuilds.
**Assumption:** draft is private, published is public — a keepsake is something sent to guests (§3.1). Changing this later is a single `access` field.
