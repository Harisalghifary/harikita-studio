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

## Current state — Phase 1

Built: token layer, typography, buttons, artwork frames, home, portfolio grid, artwork detail pages, studio, commission with the live inquiry form, FAQ, privacy, 404, `robots.txt`, `sitemap.xml`, and an internal design-system page.

**Placeholder artwork:** six entries in `src/content/artworks/` with `placeholder: true`. They render with a Preview badge and the whole site stays `noindex` while `PUBLIC_SITE_LIVE` is unset.

**Inquiry form:** Tally, embedded on `/commission`. Field spec and editing rules live in [`docs/inquiry-form.md`](./docs/inquiry-form.md). Edits in Tally appear on the site immediately — the page embeds the live form.

**To publish real work:** add the image and set `cover:` + `coverAlt:` in the entry's frontmatter, drop `placeholder: true`, then build with `PUBLIC_SITE_LIVE=true`.

**Still open:** availability wording, tagline sign-off, FAQ copy, and the option lists for Tally questions 4 and 5. See `PROJECT_SPEC.md` Appendix B.

## Deploy

Cloudflare Pages, connected to this GitHub repo.

**Connect through Git, not direct upload.** A Pages project created by `wrangler pages deploy` is a direct-upload project and cannot be linked to a repository afterwards. Connecting the repo gives you a deploy on every push.

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `pnpm build` |
| Output directory | `dist` |
| Environment variable | `NODE_VERSION=22.23.4` |

**Do not set `PUBLIC_SITE_LIVE` yet.** It is the switch that strips placeholder artwork from the build and makes the site indexable. Add it only once the previews are replaced.

Custom domain: add `harikita.store` in Pages, then point the registrar's nameservers at Cloudflare. The domain is registered at Hostinger and expires 2027-10-24 — leave auto-renew on.
