import type { APIRoute } from "astro";

import { site } from "../config/site";
import { getArtworks } from "../lib/artworks";

export const GET: APIRoute = async ({ site: configured }) => {
  const base = (configured ?? new URL(`https://${site.domain}`)).href.replace(/\/$/, "");
  const artworks = await getArtworks();

  const paths = [
    "/",
    "/portfolio/",
    "/about/",
    "/commission/",
    "/faq/",
    ...artworks.map((artwork) => `/portfolio/${artwork.id}/`),
  ];

  const urls = paths
    .map((path) => `  <url><loc>${base}${path}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};