# Harikita Studio

Wedding invitation art and digital keepsakes. Astro + Tailwind, static output.

The master specification is [`PROJECT_SPEC.md`](./PROJECT_SPEC.md). Decisions are logged in [`docs/decisions.md`](./docs/decisions.md). Read `AGENTS.md` before changing anything.

## Commands

| Command | Does |
|---|---|
| `pnpm install` | install dependencies |
| `pnpm dev` | local dev server at `localhost:4321` |
| `pnpm build` | static build into `dist/` |
| `pnpm preview` | preview the built output |

## Current state — Phase 1, design foundation + portfolio machinery

Built: token layer, typography, buttons, artwork frames, home page, portfolio grid, artwork detail pages, studio and commission pages, 404, `robots.txt`, `sitemap.xml`, and an internal design-system page.

**Placeholder artwork:** six entries in `src/content/artworks/` with `placeholder: true`. They render with a Preview badge and the whole site stays `noindex` while `PUBLIC_SITE_LIVE` is unset.

**To publish real work:** add the image and set `cover:` + `coverAlt:` in the entry's frontmatter, drop `placeholder: true`, then build with `PUBLIC_SITE_LIVE=true`.

**Still open:** contact details, availability wording, tagline sign-off, Tally form, FAQ copy. See `PROJECT_SPEC.md` Appendix B.
