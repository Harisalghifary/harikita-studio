/**
 * Studio facts. Placeholders use {{TOKEN}} so an unconfirmed value never ships.
 * See PROJECT_SPEC.md Appendix B for what still needs filling in.
 */
export const site = {
  name: "Harikita Studio",
  shortName: "Harikita",
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
  domain: "{{DOMAIN}}",
  availability: "{{AVAILABILITY_NOTE}}",

  nav: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Studio", href: "/about" },
    { label: "Commission", href: "/commission" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

/** True while a value is still an unfilled {{placeholder}}. */
export function isPlaceholder(value: string): boolean {
  return value.startsWith("{{");
}