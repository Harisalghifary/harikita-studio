import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Artwork entries. One markdown file per piece: frontmatter is the metadata,
 * the body is the story shown on the detail page.
 *
 * `placeholder: true` marks preview content. Those entries are excluded from
 * the build when PUBLIC_SITE_LIVE=true, so fake art cannot reach the public
 * site by accident. See docs/decisions.md D-013.
 */
const artworks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artworks" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      medium: z.string(),
      /** Colour tags, not style categories — style is still forming. */
      palette: z.array(z.string()).default([]),
      /** One line used on cards and in meta descriptions. */
      summary: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      placeholder: z.boolean().default(false),
      /** Optional until the first real piece exists. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { artworks };