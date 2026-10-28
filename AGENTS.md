# Harikita Studio — Wedding Invitation Art Portal

A boutique husband-and-wife studio creating personalized wedding invitation art and digital keepsakes. She makes the art; he builds the site.

## Source of truth

`PROJECT_SPEC.md` is the single master specification. Read it before proposing or making changes.

If a request conflicts with the spec, say so and point at the section — do not silently comply. Appendix A records the Phase 0 decisions and overrides the body where they differ.

## Non-negotiables

Never add, even "just for now":

- RSVP tracking
- Guest lists or guest databases
- QR check-in
- Live streaming
- Wedding-day operational tools
- Payment gateways or checkout
- Customer dashboards or accounts
- Real-time or behavioral analytics

Before adding any feature, answer §2.3:

> Does this help present the artwork, tell the couple's story, or make the commission process clearer?

If the answer is not clearly yes, do not build it.

The artwork is the visual hero. Every design decision serves it and never competes with it.

## Stack

Locked in Phase 0 (2026-10-28):

- **Astro** + TypeScript, static output
- **Tailwind CSS** with design tokens
- **Cloudflare Pages** for hosting
- **Astro content collections** (Markdown / JSON) for content — no CMS, no database
- **`@fontsource`** for self-hosted fonts
- **`astro:assets`** for image optimization
- No backend, no auth, no server state

## Conventions

- Design tokens live in one place (`src/styles/` + Tailwind `@theme`). Never hardcode a hex value outside it.
- All copy lives in content files or `src/config/site.ts`. Never inline prose in components.
- Every artwork image needs descriptive alt text (§4.12).
- 8pt spacing scale, 44px minimum touch target, 16px minimum mobile body text.
- Color pairings must come from §4.12's approved list, not invented.
- Motion follows §4.11: 200–700ms, gentle, and never on a loop.
- Anything unconfirmed is written as a `{{TOKEN}}` placeholder so a fake value never ships.
- Prefer editing existing files over adding new ones; prefer no dependency over a small dependency.

## When in doubt

Build the smallest beautiful thing that clearly presents the art and invites a commission.

## Open items

See `PROJECT_SPEC.md` Appendix B before writing any copy that needs a studio fact (contact, domain, availability, artwork).