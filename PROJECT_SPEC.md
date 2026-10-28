# Wedding Invitation Art Portal

## Master Project Specification

---

## Document Control

| Field | Value |
|---|---|
| Project Name | Wedding Invitation Art Portal |
| Project Type | Hobbyist boutique digital art and wedding invitation studio |
| Owners | Husband: technical execution and website. Wife: artist and creative direction. |
| Current Phase | Phase 0 — Documentation and planning |
| Status | Draft / Ready for development |
| Last Updated | 2026-10-28 |
| Source of Truth | This file is the single master specification for the project. |

---

## 1. Executive Summary

This project creates a personalized wedding invitation and digital keepsake portal for a husband-and-wife studio.

The wife is a newcomer artist. The website should present her work as a small, intimate, artistic studio — not as a mass-produced invitation platform.

The product focuses on:

- Personalized wedding invitation art
- Digital keepsake pages
- Elegant visual storytelling
- Soft blue and pink design nuances
- Simple inquiry and commission flow

The product intentionally excludes complex wedding utilities such as RSVP tracking, QR check-in, live streaming, and guest management.

### Core Vision

> A personalized wedding invitation artwork that becomes a beautiful digital keepsake.

### Why This Project Exists

Most digital invitation platforms compete on utility: RSVP forms, guest lists, maps, check-ins, and event management.

This studio competes on something different:

- Artistry
- Emotion
- Personalization
- Storytelling
- Elegant design

The website should feel like a small digital art gallery or a romantic storybook.

---

## 2. Project Scope

### 2.1 In Scope for MVP

The first version must include:

1. A beautiful landing page
2. A portfolio gallery of the wife’s artwork
3. An about section introducing the husband-and-wife studio
4. A clear commission process
5. A simple inquiry flow
6. Mobile-friendly presentation
7. Blue/pink elegant design system
8. Basic SEO metadata
9. Simple reusable invitation layouts after the static portfolio is complete

### 2.2 Explicitly Out of Scope

The following features are not part of the MVP and should not be added by default:

- RSVP tracking
- Guest list management
- QR check-in
- Live streaming
- Wedding-day operational tools
- Payment gateway
- Complex customer dashboard
- Real-time analytics
- Automated event reminders

### 2.3 Scope Rule

Before adding any feature, ask:

> Does this help present the artwork, tell the couple’s story, or make the commission process clearer?

If not, do not build it.

---

## 3. Business Positioning

### 3.1 Positioning Statement

A boutique husband-and-wife studio creating personalized wedding invitation art and digital keepsakes.

The studio does not compete with large platforms on features. It competes on intimacy, artistry, personalization, and emotional storytelling.

### 3.2 Business Model

Hobbyist boutique commission model.

Recommended approach:

- Accept a limited number of commissions per month
- Focus on quality rather than volume
- Build a strong portfolio
- Use personal storytelling and social sharing
- Avoid competing on the lowest price

### 3.3 Target Audience

Primary audience:

- Couples who want personalized wedding invitations
- Couples who value art, beauty, and storytelling
- Couples who want something more unique than generic templates
- Couples who prefer elegant, simple designs

Secondary audience:

- Wedding organizers looking for boutique digital invitation partners
- Friends and family who may share the work organically
- Social media users who appreciate wedding aesthetics

### 3.4 Brand Personality

The brand should feel:

- Romantic
- Elegant
- Simple
- Artistic
- Personal
- Trustworthy
- Soft and colorful
- Intimate

The brand should not feel:

- Corporate
- Generic
- Cheap
- Overly technical
- Mass-produced
- Overcomplicated

### 3.5 Recommended Packages

#### Package 1: Digital Invitation Art

Includes:

- Custom invitation artwork
- Couple names
- Wedding details
- Elegant digital layout
- Mobile-friendly presentation

#### Package 2: Digital Keepsake Page

Includes:

- Personalized invitation artwork
- Love story section
- Artwork showcase
- Wedding details
- Simple elegant animation
- Mobile-friendly presentation

#### Package 3: Premium Personalized Commission

Includes:

- Deeper custom illustration
- Couple story visualization
- Personalized color palette
- Premium digital presentation
- Shareable or printable artwork files

Pricing should be decided after the first portfolio pieces are completed. Do not start with a low-price race.

### 3.6 Business Risks

| Risk | Mitigation |
|---|---|
| Artwork takes time | Limit monthly commissions |
| Client expectations expand | Clearly define scope |
| Static website may seem low value | Present it as a digital keepsake, not a webpage |
| Couples expect RSVP features | Clearly state the studio focuses on art, not event utilities |
| Hobby becomes stressful | Keep maintenance low and avoid complex infrastructure |

---

## 4. Design System

### 4.1 Design Direction

The visual direction is:

> Colorful but elegant. Simple but emotional.

The main nuance is blue or pink, with soft watercolor textures, paper-like surfaces, and generous white space.

### 4.2 Recommended Main Palette

This is the balanced blue-pink palette for the first version.

| Token | Color Name | Hex | Usage |
|---|---|---:|---|
| `color-background` | Paper Mist | `#F9F8F4` | Main page background |
| `color-surface` | Soft Ivory | `#FFFDF8` | Cards and content sections |
| `color-primary` | Deep Cerulean | `#2F5D8A` | Primary buttons, headings, accents |
| `color-primary-soft` | Dusty Blue | `#7C9EB8` | Secondary accents and borders |
| `color-accent` | Blush Petal | `#E8C7CF` | Soft pink highlights |
| `color-accent-strong` | Dusty Rose | `#C87E92` | Romantic accent elements |
| `color-text` | Ink Navy | `#22304A` | Body text and headings |
| `color-text-muted` | Slate Gray Blue | `#5C6B7F` | Captions and helper text |
| `color-premium` | Champagne Gold | `#C7A562` | Small premium details |

### 4.3 Alternative Direction: Pink-Led

If the wife prefers a warmer, more romantic direction:

| Token | Color | Hex |
|---|---|---:|
| Background | Warm Pearl | `#FBF8F5` |
| Surface | Ivory White | `#FFFEFB` |
| Primary | Dusty Rose | `#C87E92` |
| Soft Accent | Soft Blush | `#E8C7CF` |
| Text | Midnight Blue | `#26344F` |
| Secondary | Slate Blue | `#6E87A3` |
| Premium Accent | Brushed Gold | `#C9A65F` |

### 4.4 Typography

#### Heading Font

Use an elegant serif.

Recommended options:

- Cormorant Garamond
- Playfair Display
- Libre Caslon Display

Use for:

- Couple names
- Page titles
- Section headings
- Artwork titles

#### Body Font

Use a clean sans-serif.

Recommended options:

- Manrope
- Inter
- Nunito Sans

Use for:

- Paragraphs
- Navigation
- Buttons
- Form labels
- Captions

#### Script Font

Use sparingly.

Recommended options:

- Pinyon Script
- Alex Brush
- Great Vibes

Use only for:

- Couple names
- Short romantic phrases
- Decorative quotes

Do not use script fonts for long paragraphs.

### 4.5 Typography Scale

| Element | Size | Weight | Notes |
|---|---:|---:|---|
| Hero Title | 40–64px | 500–600 | Elegant serif |
| Section Title | 28–40px | 500–600 | Elegant serif |
| Card Title | 20–24px | 600 | Serif or sans-serif |
| Body Text | 16–18px | 400 | Sans-serif |
| Caption | 13–14px | 400–500 | Muted color |
| Button | 15–16px | 600 | Clear and simple |

### 4.6 Spacing System

Use an 8-point system.

| Token | Value | Usage |
|---|---:|---|
| space-1 | 8px | Small gap |
| space-2 | 16px | Default gap |
| space-3 | 24px | Card padding |
| space-4 | 32px | Section spacing |
| space-5 | 48px | Large spacing |
| space-6 | 64px | Hero spacing |
| space-7 | 96px | Premium breathing room |

### 4.7 Border Radius

| Token | Value | Usage |
|---|---:|---|
| radius-sm | 8px | Small buttons, tags |
| radius-md | 14px | Inputs, standard cards |
| radius-lg | 20px | Artwork frames, large cards |
| radius-full | 999px | Pills and circular elements |

### 4.8 Shadows

Keep shadows soft.

| Token | Value | Usage |
|---|---|---|
| shadow-soft | `0 8px 24px rgba(34, 48, 74, 0.06)` | Cards |
| shadow-hover | `0 12px 32px rgba(34, 48, 74, 0.10)` | Hover state |
| shadow-premium | `0 16px 48px rgba(47, 93, 138, 0.12)` | Featured artwork |

### 4.9 Buttons

#### Primary Button

- Background: Deep Cerulean `#2F5D8A`
- Text: White
- Radius: 14px
- Padding: 14px 24px
- Hover: slightly darker blue
- Use for: “Inquire About a Commission”

#### Secondary Button

- Background: transparent
- Border: 1px solid Dusty Blue `#7C9EB8`
- Text: Ink Navy
- Radius: 14px
- Use for: “View Portfolio”

#### Accent Button

- Background: Blush Petal `#E8C7CF`
- Text: Ink Navy
- Radius: 14px
- Use sparingly

### 4.10 Visual Elements

#### Watercolor Washes

Use soft blue and pink washes behind headings or artwork.

Possible sources:

- Transparent PNG brushes
- SVG blobs
- CSS radial gradients
- Scanned watercolor textures

#### Paper Texture

Use a subtle paper texture on backgrounds.

Recommended opacity: 3%–6%.

Do not make the texture noisy.

#### Dividers

Use thin, low-opacity dividers.

Example:

```css
border-top: 1px solid rgba(34, 48, 74, 0.08);
```

#### Artwork Frames

Use soft gallery-style frames for artwork presentation.

Recommended frame style:

- Padding: 16px
- Background: Soft Ivory `#FFFDF8`
- Border: 1px solid `rgba(34, 48, 74, 0.08)`
- Border Radius: 20px
- Shadow: soft
- Image Radius: 12px to 16px

Purpose:

The artwork should feel like it is displayed in a small, elegant gallery.

Do not overload the frame with too many effects. The artwork remains the hero.

### 4.11 Motion Guidelines

Use gentle, elegant motion only.

| Element | Animation | Duration |
|---|---|---:|
| Page sections | Fade in upward | 500–700ms |
| Artwork cards | Soft hover lift | 250ms |
| Buttons | Gentle color transition | 200ms |
| Hero image | Slow fade or subtle zoom | 1000–1500ms |
| Scroll reveal | Gentle opacity and translate | 600ms |

Avoid:

- Fast spinning animations
- Heavy mobile parallax
- Too many moving elements
- Autoplay audio
- Large videos on first load
- Distracting transitions

Motion should support the artwork, not compete with it.

### 4.12 Accessibility

#### Text Contrast

Ensure body text has strong contrast.

Good combinations:

- Ink Navy `#22304A` on Paper Mist `#F9F8F4`
- Ink Navy `#22304A` on Soft Ivory `#FFFDF8`
- White text on Deep Cerulean `#2F5D8A`

Avoid:

- Light pink body text on white
- Light blue body text on light backgrounds
- Gold text on white for long paragraphs
- Low-contrast muted text for important information

#### Touch Targets

Buttons and links should be at least 44px tall for mobile usability.

#### Readability

Body text should be at least 16px on mobile.

Line height should be comfortable, around 1.6 to 1.8 for paragraphs.

#### Image Alt Text

Every artwork image should include descriptive alt text.

Example:

> Personalized wedding invitation artwork with soft blue and pink watercolor flowers.

---

## 5. Website Structure

### 5.1 MVP Pages

#### Home

Purpose:

- Introduce the studio
- Show the artistic style
- Present featured work
- Encourage inquiries

Sections:

1. Hero
2. Featured artwork
3. About preview
4. Design styles
5. Commission process
6. Inquiry CTA

#### Portfolio / Gallery

Purpose:

- Showcase the wife’s artwork

Sections:

- Gallery grid
- Style categories
- Artwork detail view

Possible categories:

- Blue Romance
- Pink Blossom
- Watercolor
- Minimal Elegant
- Floral
- Storybook

#### About

Purpose:

- Build trust and emotional connection

Content:

- Wife as artist
- Husband as technical partner
- Studio story
- Design philosophy
- Personal tone

#### Commission / Inquiry

Purpose:

- Allow couples to request a personalized design

Content:

- Commission process
- Estimated timeline
- What the couple needs to provide
- Inquiry form or contact link

#### FAQ

Purpose:

- Reduce confusion and answer common questions

Questions to answer:

- Is this a physical invitation?
- Can the design be customized?
- Can we choose blue or pink colors?
- Can we request a personalized illustration?
- How long does it take?
- Do we receive digital files?
- Can it be shared on mobile?
- Do you handle RSVP?
- Do you handle live streaming?
- How do we start?

Important answer:

The studio focuses on personalized invitation design and digital keepsakes. It does not provide RSVP tracking, QR check-in, or live streaming in the initial version.

### 5.2 Home Page Layout

#### Hero Section

Headline example:

> Personalized Wedding Invitation Art for Your Love Story

Subheadline example:

> A boutique studio creating elegant digital keepsakes with soft blue and pink nuances.

CTA:

- View Portfolio
- Inquire About a Commission

Visual:

- Featured artwork
- Soft blue-pink gradient or wash
- Paper texture
- Elegant serif headline

#### Featured Works

Show 3 to 6 selected designs.

Each card should include:

- Artwork preview
- Design name
- Style tag
- Short description

Example design names:

- Blue Petal Story
- Rose Morning
- Soft Sapphire
- Blush Garden
- Midnight Rose
- Gentle Bloom

#### About Preview

Example copy:

> We are a husband-and-wife studio. She creates the art, and he brings it to life as a digital keepsake.

#### Process Section

Step 1: Share Your Story
The couple shares their names, wedding details, colors, and mood.

Step 2: Art Direction
The artist creates a personalized visual direction.

Step 3: Design Creation
The invitation artwork is designed and refined.

Step 4: Digital Keepsake
The final design is delivered as a beautiful digital presentation.

#### Inquiry CTA

Headline:

> Begin Your Personalized Invitation

Button:

> Send an Inquiry

### 5.3 Inquiry Form Fields

For MVP, keep the form simple.

Required fields:

- Couple names
- Email or WhatsApp
- Wedding date or estimated date
- Preferred color nuance
- Preferred style
- Message

Optional fields:

- Instagram handle
- Venue city
- Inspiration links

Recommended form tools:

- Tally
- Typeform
- Google Form
- Simple email link
- WhatsApp link

For the first version, an external form is enough.

### 5.4 Footer Structure

Include:

- Studio name
- Short tagline
- Social media links
- Email
- Copyright
- “Made with love” note

Example tagline:

> Personalized wedding invitation art and digital keepsakes.

---

## 6. Roadmap

### Phase 0: Project Documentation

Status: Current phase.

Goals:

- Define the project vision
- Define what is included and excluded
- Define the design system
- Define the website structure
- Prepare content checklist

Deliverables:

- PROJECT_SPEC.md
- Studio name decision
- Final palette decision
- Initial artwork list
- Inquiry flow decision

Acceptance criteria:

- The couple agrees on the project scope
- The wife agrees on the visual direction
- The MVP features are clear
- Non-features are clearly excluded

### Phase 1: Static Portal MVP

Goal:

Create a simple portal that introduces the studio and showcases the wife’s artwork.

Pages:

- Home
- Portfolio
- About
- Inquiry

Features:

- Responsive layout
- Simple navigation
- Portfolio grid
- Inquiry button or form link
- Basic SEO metadata
- Mobile-friendly design

No backend required yet.

Acceptance criteria:

- The website looks elegant on mobile
- The artwork is easy to view
- The inquiry path is clear
- The blue/pink design nuance is visible
- No RSVP or guest features are present

### Phase 2: First Commission Templates

Goal:

Create reusable invitation keepsake layouts based on the wife’s artwork.

Possible templates:

- Blue Romance
- Pink Blossom
- Watercolor Story
- Elegant Minimal
- Floral Keepsake

Features:

- Reusable page layout
- Couple names
- Wedding details
- Love story section
- Artwork showcase
- Simple elegant animation

Acceptance criteria:

- A new invitation can be created by changing content and artwork
- The layout remains elegant and consistent
- The wife can prepare artwork without technical blockers
- The husband can publish a new page without rebuilding everything

### Phase 3: Portfolio Expansion

Goal:

Add more artwork, testimonials, and case studies.

Content to add:

- More invitation designs
- Color palette previews
- Before/after art process
- Couple stories
- Artist notes

Acceptance criteria:

- Portfolio feels credible
- Visitors can understand the customization options
- The studio’s artistic identity becomes clearer

### Phase 4: Lightweight Admin or CMS

Only consider this phase after the portal is stable and the couple has completed several commissions.

Goal:

Make it easier to manage portfolio items and invitation pages.

Possible features:

- Upload artwork
- Add design title
- Add description
- Add color palette
- Publish portfolio item
- Duplicate invitation layout

This phase is optional for the hobbyist version.

### Phase 5: Advanced Experience

This is the “after project creation” phase.

Do not start here.

Possible future enhancements:

- Advanced scroll animations
- Custom animation engine
- Interactive storybook layout
- Lightweight CMS
- Private client preview links
- Automated static page generation
- Premium digital keepsake engine
- WebGL or subtle 3D effects

See Section 7.

### Suggested Timeline

| Week | Focus |
|---|---|
| Week 1 | Finalize documents, palette, fonts, studio name |
| Week 2 | Create first portfolio artworks and layout |
| Week 3 | Build static MVP and test on mobile |
| Week 4 | Soft launch and collect feedback |

---

## 7. Future Tech Stack — Deferred

> This section is for a later phase.
>
> Do not begin with complex engineering before the project foundation, visual identity, and MVP are defined.

### Guiding Principle

Because the owner can handle many technologies, the main risk is over-engineering.

Use technology only when it:

- Improves the artwork presentation
- Improves performance
- Makes publishing easier
- Reduces repetitive work
- Keeps maintenance low

### Possible Future Stack

| Layer | Options | Recommended Direction |
|---|---|---|
| Frontend | Next.js, Astro, SvelteKit, Nuxt | Next.js or Astro for static generation |
| Styling | Tailwind CSS, CSS Modules, vanilla CSS | Tailwind with design tokens |
| Animation | GSAP + ScrollTrigger, Framer Motion, CSS | CSS first; GSAP later for premium effects |
| CMS | Payload, Sanity, Tina, Markdown files | Markdown first; CMS later if needed |
| Hosting | Vercel, Netlify, Cloudflare Pages | Static hosting first |
| Image Storage | Cloudflare R2, Supabase Storage, S3 | R2 or Supabase if image volume grows |

### Future Premium Features

Consider only after MVP:

- Private client preview links
- Automated invitation page generator
- Password-protected client pages
- Animated storybook sections
- Watercolor reveal effects
- Subtle parallax artwork
- Audio toggle
- Printable artwork downloads
- Premium template library

### Still Excluded

Even later, do not add unless the couple intentionally changes direction:

- RSVP tracking
- Guest database
- QR check-in
- Live streaming
- Wedding-day operational tools

### Technical Decision Rule

Before adding any advanced feature, ask:

1. Does this make the artwork more beautiful?
2. Does this make the couple’s story clearer?
3. Does this make maintenance easier?
4. Does this reduce wedding-day stress?
5. Is it still simple enough for a hobbyist studio?

If no, do not build it yet.

---

## 8. Content Checklist

### Brand Content

- [ ] Studio name
- [ ] Short tagline
- [ ] Logo or wordmark
- [ ] Short studio description
- [ ] Artist statement from the wife
- [ ] Social media links
- [ ] Contact email or WhatsApp

### Artwork Assets

- [ ] 3 to 6 initial invitation designs
- [ ] High-resolution artwork exports
- [ ] Web-optimized artwork exports
- [ ] Cover images for portfolio cards
- [ ] Detail images for each artwork
- [ ] Color palette previews
- [ ] Optional watercolor textures
- [ ] Optional paper textures
- [ ] Optional brush stroke elements

### Homepage Content

- [ ] Hero headline
- [ ] Hero subheadline
- [ ] Primary CTA text
- [ ] Secondary CTA text
- [ ] Featured artwork selection
- [ ] Short about preview
- [ ] Process explanation
- [ ] Inquiry closing message

### Portfolio Content

For each artwork:

- [ ] Design name
- [ ] Cover image
- [ ] Description
- [ ] Style category
- [ ] Color tags
- [ ] Mood tags
- [ ] Detail preview images

### About Page Content

- [ ] Photo of the wife or couple
- [ ] Short personal story
- [ ] Why the studio exists
- [ ] Wife’s artistic role
- [ ] Husband’s technical role
- [ ] Design philosophy

### Commission Process Content

- [ ] Step-by-step process
- [ ] Estimated timeline
- [ ] Revision policy
- [ ] What the couple needs to provide
- [ ] What the couple receives
- [ ] How to start

### Inquiry Form Content

Fields:

- [ ] Couple names
- [ ] Email or WhatsApp
- [ ] Wedding date or estimated date
- [ ] Preferred color nuance
- [ ] Preferred style
- [ ] Message or story
- [ ] Optional inspiration links

### FAQ Content

Create answers for:

- [ ] Is this a physical invitation?
- [ ] Can the design be customized?
- [ ] Can we choose blue or pink colors?
- [ ] Can we request a personalized illustration?
- [ ] How long does the process take?
- [ ] Do we receive digital files?
- [ ] Can the invitation be shared on mobile?
- [ ] Do you handle RSVP tracking?
- [ ] Do you handle live streaming?
- [ ] How do we start?

### SEO Content

- [ ] Page titles
- [ ] Meta descriptions
- [ ] Open Graph image
- [ ] Image alt text
- [ ] Keywords

Example keywords:

- personalized wedding invitation
- digital wedding keepsake
- wedding invitation art
- elegant digital invitation
- custom wedding invitation design
- blue wedding invitation
- pink wedding invitation

### Legal and Trust Content

Optional but recommended:

- [ ] Simple terms of service
- [ ] Privacy note
- [ ] Copyright notice
- [ ] Revision policy
- [ ] Usage rights for artwork

---

## 9. Launch Checklist

- [ ] All pages reviewed on mobile
- [ ] All images optimized
- [ ] Inquiry form tested
- [ ] Social links tested
- [ ] Email or WhatsApp contact tested
- [ ] Fonts loaded correctly
- [ ] Colors match design system
- [ ] No broken links
- [ ] No unnecessary features
- [ ] The website feels elegant and simple
- [ ] The wife’s artwork is the visual hero
- [ ] The studio story is clear
- [ ] The commission process is easy to understand

---

## 10. Final Project Rule

> Build the smallest beautiful thing that clearly presents the art and invites a commission.
>
> Do not build a wedding management system.
>
> Build a digital keepsake studio.

---

# Appendix A — Phase 0 Decisions

Recorded 2026-10-28. These decisions resolve the Phase 0 deliverables listed in §6. They do not modify §1–10 above; where a decision and the body of the spec appear to disagree, this appendix is the newer instruction.

| Field | Decision |
|---|---|
| Project folder | `/Users/xbox/github/wedding-art-portal` |
| Domain | `harikita.store` — registered 24 Oct 2026, expires 24 Oct 2027 |
| Studio name | **Harikita Studio** |
| Stack | Astro + TypeScript + Tailwind CSS, static output |
| Hosting | Cloudflare Pages |
| Content | Astro content collections (Markdown / JSON), no CMS |
| Fonts | Cormorant Garamond (headings), Manrope (body), Pinyon Script (sparingly) — self-hosted via `@fontsource` |
| Palette | Blue-led, as specified in §4.2. Pink-led (§4.3) remains a documented alternative, not the default. |
| Inquiry flow | Single `/commission` page with an embedded Tally form (§5.3). No backend. |
| Routes | `/` · `/portfolio` · `/portfolio/[slug]` · `/about` · `/commission` · `/faq` · `/styleguide` (noindex) |
| Portfolio filtering | Style tags are visible on cards; no filter UI in Phase 1 |
| Contact | Placeholder `{{CONTACT_EMAIL}}` / `{{WHATSAPP}}` until confirmed |

### Studio Name Note

**Harikita** is composed of **Hari**s and Rez**kita** — the couple’s own names from their wedding. It also happens to read as *hari kita* / *kita*, in which *kita* means “we” or “us”. The name therefore carries two meanings at once: two people, and “ours”.

Future copy should use this rather than treat the name as an arbitrary brand. It is the studio’s single strongest storytelling asset.

### Tagline (provisional)

Chosen 2026-10-28, subject to the wife’s sign-off:

- **Hero:** Your story, made into art.
- **Functional sub:** Personalized wedding invitation art and digital keepsakes from Harikita Studio.
- **Footer:** Made by two people, for two people.

---

# Appendix B — Open Items and Editorial Notes

### Open Items

- [x] Domain name — `harikita.store`, registered 24 Oct 2026 via Hostinger, expires 24 Oct 2027. Enable auto-renew; move nameservers to Cloudflare before connecting Cloudflare Pages.
- [ ] Instagram / social handles
- [ ] Contact email and/or WhatsApp number (currently `{{CONTACT_EMAIL}}`, `{{WHATSAPP}}`)
- [ ] Availability wording, e.g. “2 commission slots open for December”
- [ ] Initial artwork list — 3 to 6 pieces
- [ ] Logo or wordmark
- [ ] Photo of the artist or couple
- [ ] Tagline sign-off by the wife
- [ ] Tally form created and embed URL captured
- [ ] Final visual-direction approval (Phase 0 acceptance criterion, §6)

### Editorial Notes

These are recorded observations about the spec body. They are not edits to §1–10.

1. **FAQ is in scope for Phase 1.** §5.1 lists an FAQ page among the MVP pages, but the Phase 1 page list in §6 omits it. The FAQ page ships in Phase 1. It is static copy, it is cheap, and it is where the studio pre-empts “do you handle RSVP?” before a couple spends time on an inquiry.

2. **The timeline’s real dependency is artwork, not code.** §6 allots one week (Week 2) to producing the first portfolio pieces. The static MVP is a few days of work; the artwork is the critical path and cannot be compressed by engineering effort. Treat the four-week table as aspirational and gate Phase 1 on “art exists”, not “code exists”.

3. **Styleguide route is a drift guard.** `/styleguide` is not a marketing page. It renders every token, type step, button, and frame from §4 so that §9’s “Colors match design system” check is verifiable rather than a matter of opinion.

4. **Style categories are deferred (§5.1).** The artist is still finding her style, and works digitally in Procreate. Six named categories before a body of work exists would produce empty shelves and quietly prescribe what she is allowed to make. The portfolio is a flat grid with colour tags; series naming returns once she names one herself. Logged as D-012.

5. **The artwork is digital, not painted.** §4.10 assumes scanned watercolour textures and the draft copy said “painted by hand”. Copy now says *drawn* / *illustrated*, and the paper grain is CSS, so the site has no dependency on scanning or physical media. Export requirements are Procreate-native: 3000 × 3750 px (4:5), sRGB, JPG quality ~90.

6. **Preview artwork is fenced off by a flag.** Six placeholder entries exist so every route could be built and reviewed. While `PUBLIC_SITE_LIVE` is unset they carry a Preview badge and the site is `noindex`; setting it to `true` excludes them from the build and prints their slugs as a warning. Logged as D-013.