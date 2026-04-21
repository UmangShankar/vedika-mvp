# Vedika — Design System & Component Spec
**For Claude Code execution. Read this fully before touching any file.**

---

## 1. Design Philosophy

Vedika is the "Google of Sanatan Dharma" — democratic, warm, trustworthy, and deeply rooted.  
Design language: **Material Design principles applied through a Sanatan Dharma lens.**

- **Welcoming, not gatekept** — every visitor feels capable of engaging
- **Editorial, not AI-first** — content leads, AI assists
- **Layered depth** — like stacked manuscript leaves, not flat tiles
- **Warm restraint** — rich palette, generous whitespace, no clutter
- **Source-first trust** — citations are first-class UI elements, not footnotes

---

## 2. Tailwind Design Tokens

Replace the existing `tailwind.config.ts` with this:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        sandal: {
          DEFAULT: '#F5EFE5',
          50:  '#FDFAF6',
          100: '#F5EFE5',
          200: '#EDE0CC',
          300: '#DEC9A8',
        },
        // Primary accent — saffron/gold
        saffron: {
          DEFAULT: '#C07828',
          50:  '#FEF7ED',
          100: '#FDECD3',
          200: '#F9D09A',
          300: '#F4AD58',
          400: '#EF8C28',
          500: '#C07828',
          600: '#9A5E1C',
          700: '#744612',
          800: '#4E2E0A',
          900: '#2A1804',
        },
        // Deep text
        ink: {
          DEFAULT: '#1C1208',
          light:   '#4A3B28',
          muted:   '#7A6A56',
          faint:   '#A89880',
        },
        // Semantic — lotus/vermillion for callouts
        lotus: {
          DEFAULT: '#C0392B',
          light:   '#FBEAEA',
          border:  '#F5C6C6',
        },
        // Semantic — calm teal for informational
        dharma: {
          DEFAULT: '#2D7A6F',
          light:   '#E8F5F3',
          border:  '#A8D8D2',
        },
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'serif'],
      },
      fontSize: {
        'display-lg': ['3rem',    { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display':    ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading':    ['1.375rem',{ lineHeight: '1.3',  letterSpacing: '-0.005em', fontWeight: '600' }],
        'subheading': ['1.125rem',{ lineHeight: '1.4',  fontWeight: '500' }],
        'body-lg':    ['1.0625rem',{ lineHeight: '1.75' }],
        'body':       ['1rem',    { lineHeight: '1.7' }],
        'body-sm':    ['0.9375rem',{ lineHeight: '1.65' }],
        'caption':    ['0.8125rem',{ lineHeight: '1.5' }],
        'label':      ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '500' }],
        'overline':   ['0.6875rem',{ lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '720px',
        'wide':    '960px',
        'full-w':  '1200px',
      },
      borderRadius: {
        'sm':  '4px',
        'md':  '8px',
        'lg':  '12px',
        'xl':  '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(28,18,8,0.06), 0 1px 2px rgba(28,18,8,0.04)',
        'card-md': '0 4px 12px rgba(28,18,8,0.08), 0 1px 3px rgba(28,18,8,0.04)',
        'card-lg': '0 8px 24px rgba(28,18,8,0.10), 0 2px 6px rgba(28,18,8,0.04)',
      },
      borderColor: {
        DEFAULT: 'rgba(192,120,40,0.18)',
        warm:    'rgba(192,120,40,0.30)',
        strong:  'rgba(192,120,40,0.50)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 3. Global CSS

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600&display=swap');

:root {
  color-scheme: light;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  @apply bg-sandal-100 text-ink font-sans;
  min-height: 100vh;
}

/* Editorial content areas use serif */
.prose-vedika {
  @apply font-serif text-body text-ink-light;
  max-width: 72ch;
}

.prose-vedika h1 { @apply text-display-sm text-ink mb-6 mt-10; }
.prose-vedika h2 { @apply text-heading text-ink mb-4 mt-8; }
.prose-vedika h3 { @apply text-subheading text-ink mb-3 mt-6; }
.prose-vedika p  { @apply mb-5 leading-relaxed; }
.prose-vedika ul { @apply list-disc pl-6 mb-5 space-y-2; }
.prose-vedika ol { @apply list-decimal pl-6 mb-5 space-y-2; }
.prose-vedika blockquote {
  @apply border-l-2 border-saffron-300 pl-5 italic text-ink-muted my-6;
}
.prose-vedika a {
  @apply text-saffron-500 underline underline-offset-4 hover:text-saffron-600;
}

/* Focus styles */
a:focus-visible,
button:focus-visible {
  @apply outline outline-2 outline-saffron-400 outline-offset-2 rounded-sm;
}

/* Sanskrit/Devanagari text */
.devanagari {
  font-family: 'Noto Serif Devanagari', serif;
}

/* Source citation badge */
.source-badge {
  @apply inline-flex items-center gap-1.5 text-caption text-ink-muted 
         border border-[rgba(192,120,40,0.20)] bg-sandal-50 
         px-2 py-0.5 rounded-sm;
}

/* Beta badge */
.beta-badge {
  @apply inline-flex items-center text-overline text-saffron-500 
         bg-saffron-50 border border-saffron-100 
         px-2 py-0.5 rounded-sm tracking-widest;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { @apply bg-sandal-300 rounded-full; }
```

---

## 4. Component Specs

### 4.1 SiteHeader (`components/site-header.tsx`)

**Layout:** sticky top, full width, white bg with warm bottom border  
**Left:** Vedika wordmark (serif, ink, 18px) with OM glyph (ॐ) in saffron at 14px preceding it  
**Nav links (desktop):** Research · Topics · Texts · Guides · Sources — caption size, ink-muted, hover saffron  
**Right:** "Ask Vedika" button (saffron-500 bg, white text, small, rounded-sm) + optional Sign In link  
**Mobile:** hamburger menu, full-width dropdown  

```tsx
// Visual spec:
// [ॐ Vedika]    Research  Topics  Texts  Guides  Sources    [Ask Vedika]
// border-bottom: 1px solid rgba(192,120,40,0.18)
// height: 56px
// bg: white
// position: sticky top-0 z-50
```

---

### 4.2 Hero (`components/home/hero.tsx`)

**Layout:** full-width, centered, generous vertical padding (py-20 md:py-28)  
**Background:** sandal-100 with a subtle large OM (ॐ) positioned top-right, saffron at 4% opacity, 180px, devanagari font — decorative only  
**Overline:** "Sanatan Dharma Research" — overline style, saffron-500, letter-spacing wide  
**H1:** "Research Sanatan Dharma" — display-lg, ink, serif font  
**Subtitle:** body-lg, ink-muted, max-w-content, centered  
**CTAs:** Primary button "Start exploring" (saffron-500 bg) + Ghost button "Ask Vedika →" (saffron-500 text, border)  
**Below CTA:** three trust signals in a row — source-grounded · multiple traditions · AI clearly labeled Beta  

---

### 4.3 EntryCards (`components/home/entry-cards.tsx`)

**Layout:** 2×2 grid on mobile, 4-column on desktop  
**Cards:** white bg, card shadow, border, rounded-lg, padding 5  
**Each card:** Devanagari glyph (large, saffron, 28px) · title (subheading, ink) · description (body-sm, ink-muted) · "Explore →" link (saffron)  

Cards:
1. ऋ · Rigveda · "The oldest layer of Vedic literature"
2. उ · Upanishads · "Dialogues on consciousness and ultimate reality"  
3. भ · Bhagavatam · "Divine narrative across ten cantos"
4. गी · Bhagavad Gita · "Krishna's teaching on dharma and liberation"

---

### 4.4 WhyVedika (`components/home/why-vedika.tsx`)

**Layout:** 3-column grid, sandal-50 bg section  
**Each item:** icon area (small saffron dot or simple SVG) · bold label · description  

Points:
1. Source-grounded — every claim traces to a primary text
2. Multiple traditions — Sāyaṇa, Dayananda, Chinmoy interpretations
3. AI clearly labelled — Ask Vedika is Beta, never authoritative

---

### 4.5 FeaturedTopics (`components/home/featured-topics.tsx`)

**Layout:** horizontal scrollable row of topic cards on mobile, 3-col grid on desktop  
**Card:** white bg, border, rounded-lg, padding 4  
**Structure:** canon badge top-left · topic title (heading) · 2-line summary (body-sm, ink-muted) · linked source count (caption, saffron)  

---

### 4.6 FeaturedGuides (`components/home/featured-guides.tsx`)

**Layout:** 2-column grid  
**Card:** sandal-50 bg, left border 3px saffron-300, padding 5  
**Structure:** guide title (subheading) · 1-line description · difficulty badge (Beginner/Intermediate) · "Read guide →"

---

### 4.7 AskPreview (`components/home/ask-preview.tsx`)

**Layout:** centered, max-w-wide, rounded-xl, white bg, card-md shadow, border  
**Header:** ॐ avatar (saffron-50 bg, saffron border) · "Ask Vedika" heading · Beta badge  
**Sample exchange:** one static Q&A showing the citation style  
**CTA:** "Try Ask Vedika →" button linking to /ask-vedika  
**Disclaimer:** small caption — "AI responses are draft guidance. Always verify with linked sources."

---

### 4.8 NewsletterSignup (`components/home/newsletter.tsx`)

**Layout:** centered, saffron-50 bg section, rounded-xl, padding 10  
**Heading:** "Stay close to the sources" — heading, serif  
**Sub:** caption, ink-muted  
**Form:** email input (full width on mobile, inline on desktop) + submit button  
**Note:** "No noise. Occasional deep dives." — caption, ink-faint

---

### 4.9 SiteFooter (`components/home/footer.tsx`)

**Layout:** 3-column grid: brand · nav links · source/legal  
**Brand col:** ॐ Vedika wordmark · 2-line description · subtle  
**Nav col:** Research, Topics, Texts, Guides, Sources  
**Legal col:** About, Privacy, Terms · "Content-first. Source-grounded."  
**Bottom bar:** copyright + "Built with care for Dharma"  
**Bg:** sandal-200, top border warm

---

### 4.10 CanonBadge (`components/content/canon-badge.tsx`)

Small pill showing which canon a text belongs to.  

```tsx
// Props: canon: 'sruti' | 'smriti' | 'sutra' | 'purana' | 'itihasa'
// Colours:
// sruti   → saffron-50  bg, saffron-600  text
// smriti  → dharma-light bg, dharma text  
// sutra   → sandal-200  bg, ink-muted text
// purana  → lotus-light bg, lotus text
// itihasa → sandal-200  bg, ink-light text
```

---

### 4.11 ArticleHeader (`components/content/article-header.tsx`)

```
[CanonBadge]
[H1 — display-sm, ink, serif]
[Subtitle — body-lg, ink-muted, serif]
[Meta row: reading time · last updated · source count]
[Divider — saffron-200, 1px]
```

---

### 4.12 KeyTakeawayBox (`components/content/key-takeaway-box.tsx`)

```
[saffron-50 bg, saffron-300 left-border 3px, rounded-r-lg, padding 5]
[Overline: "KEY TAKEAWAY" — saffron-600]
[Body text — serif, ink-light]
```

---

### 4.13 PullQuote (`components/content/pull-quote.tsx`)

```
[Large decorative " — saffron-200, 48px serif]
[Quote text — text-heading, serif, ink-light, italic]
[Source attribution — caption, ink-muted]
[Right-align attribution]
```

---

### 4.14 SummaryBox (`components/content/summary-box.tsx`)

```
[dharma-light bg, dharma-border border, rounded-lg, padding 5]
[Overline: "IN BRIEF" — dharma, letter-spaced]
[Bullet list — body-sm, ink-light]
```

---

### 4.15 RelatedReadingGrid (`components/content/related-reading-grid.tsx`)

```
[Section heading: "Continue reading" — subheading]
[2-col or 3-col card grid]
[Each card: type badge (topic/guide/text) · title · 1-line desc]
```

---

### 4.16 GlossaryInlineCard (`components/content/glossary-inline-card.tsx`)

Tooltip-style card shown on hover for Sanskrit terms inline in text.

```
[white bg, card-md shadow, border, rounded-lg, max-w-xs, padding 4]
[Term in Devanagari — devanagari font, saffron, 18px]
[Transliteration — label, ink-muted]
[Definition — body-sm, ink-light]
[→ Full entry link]
```

---

### 4.17 Ask Vedika Page (`app/ask-vedika/page.tsx`)

Full rebuild. Layout:

```
[Page header: "Ask Vedika" h1 + Beta badge]
[Trust notice: dharma-light bg card — "This is AI-assisted exploration, not authoritative commentary. Always verify with linked sources."]
[Chat interface:]
  [Message list — scrollable, max-h-[500px]]
    [User message: sandal-100 bg, right-aligned, rounded-lg]
    [Vedika response: white bg, left-aligned, rounded-lg, border]
      [Response text — serif, ink-light]
      [Source citations: list of source-badge components]
  [Input bar:]
    [Text input — full width, sandal-50 bg, saffron focus border]
    [Ask button — saffron-500 bg]
[Below chat: "Or explore the Research Library →" link]
```

---

### 4.18 Topic Detail (`app/topics/[slug]/page.tsx`)

```
[ArticleHeader]
[SummaryBox — pulled from Sanity summary field]
[prose-vedika content — portable text rendered properly]
[KeyTakeawayBox — if field present in Sanity]
[PullQuote — if field present]
[Source references section:]
  [Heading: "Sources used in this article"]
  [List of source-badge items with links]
[RelatedReadingGrid — related topics/guides from Sanity]
```

---

### 4.19 Text Overview (`app/texts/[slug]/page.tsx`)

```
[ArticleHeader]
[CanonBadge — prominent, top]
[Devanagari glyph — large decorative, saffron, top-right float]
[Stats row: verse count · book count · period]
[SummaryBox]
[prose-vedika content]
[Source references]
[Related topics]
```

---

### 4.20 Guide Template (`components/templates/guide-template.tsx`)

```
[ArticleHeader + difficulty badge (Beginner/Intermediate/Advanced)]
[Table of contents — sticky left sidebar on desktop, inline on mobile]
[prose-vedika content with KeyTakeawayBoxes and SummaryBoxes inline]
[Source references at end]
[RelatedReadingGrid]
```

---

## 5. Page Layout Wrapper

All route pages should use this wrapper pattern:

```tsx
// Standard content page
<div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">

// Wide (index pages with grids)  
<div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">

// Full width (homepage sections)
<div className="w-full">
  <div className="mx-auto max-w-full-w px-4 sm:px-6 lg:px-8">
```

---

## 6. Portable Text Renderer

Replace `lib/sanity/portable-text.ts` with a full renderer. Map blocks to:

- `normal` → `<p className="mb-5 text-body text-ink-light leading-relaxed font-serif">`
- `h2` → `<h2 className="text-heading text-ink mt-8 mb-4 font-serif">`
- `h3` → `<h3 className="text-subheading text-ink mt-6 mb-3 font-serif">`
- `blockquote` → PullQuote component
- `bullet` → `<ul className="list-disc pl-6 mb-5 space-y-2">`
- `number` → `<ol className="list-decimal pl-6 mb-5 space-y-2">`
- marks:
  - `strong` → `<strong className="font-semibold text-ink">`
  - `em` → `<em className="italic">`
  - `link` → `<a className="text-saffron-500 underline underline-offset-4 hover:text-saffron-600">`
  - `sourceRef` → SourceBadge component inline

---

## 7. Sanity Client Fix

`lib/sanity/client.ts` — rewrite cleanly:

```ts
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
```

---

## 8. CI Fix

Replace `.github/workflows/ci.yml` install step:

```yml
- name: Install dependencies
  run: npm ci
```

And ensure `package-lock.json` is committed (remove it from `.gitignore` if present).

---

## 9. Site Config Fix

`lib/site-config.ts`:

```ts
export const siteConfig = {
  name:        'Vedika',
  description: 'A content-first Sanatan Dharma research platform. Source-grounded, trust-first.',
  baseUrl:     process.env.NEXT_PUBLIC_BASE_URL ?? 'https://askvdika.com',
  nav: [
    { label: 'Research', href: '/research' },
    { label: 'Topics',   href: '/topics'   },
    { label: 'Texts',    href: '/texts'    },
    { label: 'Guides',   href: '/guides'   },
    { label: 'Sources',  href: '/sources'  },
  ],
};
```

Add `NEXT_PUBLIC_BASE_URL=https://askvdika.com` to Vercel environment variables.

---

## 10. Missing Routes to Add

### `/app/glossary/page.tsx` — index
### `/app/glossary/[slug]/page.tsx` — detail  
### `/app/essays/page.tsx` — index
### `/app/essays/[slug]/page.tsx` — detail
### `/app/comparisons/page.tsx` — index
### `/app/comparisons/[slug]/page.tsx` — detail

All follow the same pattern as `/topics` — fetch from Sanity via existing queries, render with appropriate template.

---

## 11. Execution Order for Claude Code

Run these tasks in this exact order:

1. Fix `lib/sanity/client.ts`
2. Fix `lib/site-config.ts` (replace placeholder URL)
3. Replace `tailwind.config.ts` with spec above
4. Replace `app/globals.css` with spec above
5. Fix `.github/workflows/ci.yml`
6. Run `npm run build` — resolve any type errors before proceeding
7. Rebuild `components/site-header.tsx`
8. Rebuild all `components/home/` components
9. Rebuild all `components/content/` components
10. Rebuild `lib/sanity/portable-text.ts`
11. Rebuild `app/ask-vedika/page.tsx`
12. Rebuild topic/text/guide detail pages
13. Add glossary, essays, comparisons routes
14. Run `npm run build` again — must be clean
15. Run `npm run lint` — must be clean
16. Run `npm run test:smoke` — must pass
17. Commit with message: `feat: design system rebuild + route completion`

---

## 12. Claude Code Handoff Prompt

When you open Claude Code in the vedika-mvp directory, paste this:

```
Read the file vedika-design-spec.md in the root of this repo.
Follow the execution order in Section 11 exactly.
Do not ask for confirmation between steps unless a build error requires it.
After each file change, briefly state what you changed and why.
Run npm run build after steps 6 and 16 to validate.
The goal is a clean build, passing lint, passing smoke tests, and the full design system applied across all components.
```
