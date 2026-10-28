import { getCollection, type CollectionEntry } from "astro:content";

import { SITE_LIVE } from "../config/site";

export type Artwork = CollectionEntry<"artworks">;

export { SITE_LIVE };

let warned = false;

/**
 * Returns artworks in display order.
 * When the site is live, placeholder entries are dropped and the build says
 * so loudly — a fake portfolio should never ship quietly.
 */
export async function getArtworks(): Promise<Artwork[]> {
  const all = await getCollection("artworks");
  const placeholders = all.filter((entry) => entry.data.placeholder);

  if (SITE_LIVE && placeholders.length > 0 && !warned) {
    warned = true;
    console.warn(
      [
        "",
        "[launch] PUBLIC_SITE_LIVE=true — placeholder artworks excluded from the build:",
        `         ${placeholders.map((entry) => entry.id).join(", ")}`,
        "         Replace or delete them before publishing.",
        "",
      ].join("\n"),
    );
  }

  return all
    .filter((entry) => !SITE_LIVE || !entry.data.placeholder)
    .sort((a, b) => a.data.order - b.data.order);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(date);
}