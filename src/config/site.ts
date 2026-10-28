/**
 * Studio facts. Placeholders use {{TOKEN}} so an unconfirmed value never ships.
 * See PROJECT_SPEC.md Appendix B for what still needs filling in.
 */
export const site = {
  name: "Harikita Studio",
  shortName: "Harikita",
  domain: "harikita.store",
  url: "https://harikita.store",

  /** Provisional — pending sign-off (Appendix A). */
  tagline: "Your story, made into art.",
  taglineLong:
    "Personalized wedding invitation art and digital keepsakes from Harikita Studio.",
  taglineFooter: "Made by two people, for two people.",
  description:
    "A boutique husband-and-wife studio creating personalized wedding invitation art and digital keepsakes with soft blue and pink nuances.",

  email: "{{CONTACT_EMAIL}}",
  whatsapp: "{{WHATSAPP}}",
  instagram: "{{INSTAGRAM}}",
  availability: "{{AVAILABILITY_NOTE}}",

  /**
   * Inquiry form (D-015). The live form is the contact channel (D-016), so no
   * email or phone number is published at launch.
   */
  tallyUrl: "https://tally.so/r/zEEvka",

  nav: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Studio", href: "/about" },
    { label: "Commission", href: "/commission" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

/**
 * PUBLIC_SITE_LIVE=false (default): placeholder artwork renders with a Preview
 * badge and the whole site is noindex.
 * PUBLIC_SITE_LIVE=true: placeholders are excluded from the build and the site
 * becomes indexable. Logged in docs/decisions.md D-013.
 */
export const SITE_LIVE = import.meta.env.PUBLIC_SITE_LIVE === "true";

/**
 * Reserved namespace for keepsake pages: /i/<slug>.
 * Studio routes live at the root, so this prefix prevents a couple named
 * "About" or "FAQ" from colliding with them. See D-014.
 */
export const KEEPSAKE_PREFIX = "/i";

/** True while a value is still an unfilled {{placeholder}}. */
export function isPlaceholder(value: string): boolean {
  return value.startsWith("{{");
}