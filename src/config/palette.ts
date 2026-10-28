/**
 * Palette documentation for /styleguide.
 * Hex values are read from tokens.css at build time — only labels live here,
 * so this file can never drift from the actual token values.
 */

export type PaletteEntry = {
  /** CSS custom property without the leading dashes. */
  token: string;
  /** §4.2 token name, where it differs from the utility name. */
  specName?: string;
  name: string;
  usage: string;
};

export const semanticPalette: PaletteEntry[] = [
  {
    token: "color-background",
    name: "Paper Mist",
    usage: "Main page background",
  },
  {
    token: "color-surface",
    name: "Soft Ivory",
    usage: "Cards and content sections",
  },
  {
    token: "color-primary",
    name: "Deep Cerulean",
    usage: "Primary buttons, headings, accents",
  },
  {
    token: "color-primary-soft",
    name: "Dusty Blue",
    usage: "Secondary accents and borders",
  },
  {
    token: "color-accent",
    name: "Blush Petal",
    usage: "Soft pink highlights",
  },
  {
    token: "color-accent-strong",
    name: "Dusty Rose",
    usage: "Romantic accent elements",
  },
  {
    token: "color-ink",
    specName: "color-text",
    name: "Ink Navy",
    usage: "Body text and headings",
  },
  {
    token: "color-ink-muted",
    specName: "color-text-muted",
    name: "Slate Gray Blue",
    usage: "Captions and helper text",
  },
  {
    token: "color-premium",
    name: "Champagne Gold",
    usage: "Small premium details",
  },
];

export const typeScale = [
  { className: "text-hero", label: "Hero title", spec: "40–64px · 500–600", sample: "Harikita" },
  { className: "text-title", label: "Section title", spec: "28–40px · 500–600", sample: "Our story, drawn by hand" },
  { className: "text-card", label: "Card title", spec: "20–24px · 600", sample: "Blue Petal Story" },
  { className: "text-body", label: "Body text", spec: "16–18px · 400", sample: "A personalized invitation that becomes a keepsake." },
  { className: "text-caption", label: "Caption", spec: "13–14px · 400–500", sample: "Watercolour on paper, 2026" },
];

export const spacingScale = [
  { token: "space-1", value: "8px", tw: "2" },
  { token: "space-2", value: "16px", tw: "4" },
  { token: "space-3", value: "24px", tw: "6" },
  { token: "space-4", value: "32px", tw: "8" },
  { token: "space-5", value: "48px", tw: "12" },
  { token: "space-6", value: "64px", tw: "16" },
  { token: "space-7", value: "96px", tw: "24" },
];

export const motionScale = [
  { element: "Page sections", animation: "Fade in upward", duration: "500–700ms" },
  { element: "Artwork cards", animation: "Soft hover lift", duration: "250ms" },
  { element: "Buttons", animation: "Gentle colour transition", duration: "200ms" },
  { element: "Hero image", animation: "Slow fade or subtle zoom", duration: "1000–1500ms" },
  { element: "Scroll reveal", animation: "Gentle opacity and translate", duration: "600ms" },
];