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

## Current state — Phase 1, design foundation

Built: token layer, typography, buttons, artwork frames, home page, stub routes, and an internal design-system page.

**Not built yet:** real artwork, portfolio content, commission form, FAQ copy. Those wait on the open items in `PROJECT_SPEC.md` Appendix B.

Review the visual direction at `/styleguide` (not indexed, linked from the footer only). The gate for Phase 1 is the artist approving that page.