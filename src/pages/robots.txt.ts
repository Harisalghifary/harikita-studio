import type { APIRoute } from "astro";

import { SITE_LIVE, site } from "../config/site";

export const GET: APIRoute = ({ site: configured }) => {
  const base = (configured ?? new URL(`https://${site.domain}`)).href.replace(/\/$/, "");

  const body = SITE_LIVE
    ? `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};