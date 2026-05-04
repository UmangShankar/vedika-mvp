import Link from 'next/link';
import { ACCENT_COLORS, TRADITIONS, type AccentKey } from '@/lib/traditions/data';
import type { ComparisonPage } from '@/lib/traditions/comparisons-data';

// ── helpers ──────────────────────────────────────────────────────────────────

const LEVEL_LABELS: Record<ComparisonPage['level'], string> = {
  beginner:     'Beginner',
  intermediate: 'Intermediate',
  advanced:     'Advanced',
};

const LEVEL_COLORS: Record<ComparisonPage['level'], { bg: string; text: string; border: string }> = {
  beginner:     { bg: '#EAF3DE', text: '#27500A', border: '#97C459' },
  intermediate: { bg: '#FAEEDA', text: '#633806', border: '#EF9F27' },
  advanced:     { bg: '#FBEAF0', text: '#72243E', border: '#ED93B1' },
};

const TOC_SECTIONS = [
  { label: 'The shared starting point', id: 'shared-starting-point' },
  { label: 'The first fork', id: 'the-first-fork' },
  { label: 'crux', id: 'crux' }, // dynamically replaced by cruxHeading
  { label: 'The status of the individual', id: 'status-of-the-individual' },
  { label: 'Liberation compared', id: 'liberation-compared' },
  { label: 'Are they saying the same thing?', id: 'are-they-saying-the-same-thing' },
];

function accentFor(key: string) {
  return ACCENT_COLORS[key as AccentKey] ?? ACCENT_COLORS['gray'];
}

function toId(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// ── component ────────────────────────────────────────────────────────────────

type Props = { comparison: ComparisonPage };

export function ComparisonTemplate({ comparison: c }: Props) {
  const accentA = accentFor(c.traditionA.accent);
  const accentB = accentFor(c.traditionB.accent);
  const levelStyle = LEVEL_COLORS[c.level];
  const cruxId = toId(c.cruxHeading);

  // Resolve further reading tradition objects
  const furtherReading = c.furtherReadingSlugs
    .map((slug) => TRADITIONS.find((t) => t.slug === slug))
    .filter(Boolean) as (typeof TRADITIONS)[number][];

  // Build TOC with dynamic crux label
  const tocSections = [
    { label: 'The shared starting point', id: 'shared-starting-point' },
    { label: 'The first fork', id: 'the-first-fork' },
    { label: c.cruxHeading, id: cruxId },
    { label: 'The status of the individual', id: 'status-of-the-individual' },
    { label: 'Liberation compared', id: 'liberation-compared' },
    { label: 'Are they saying the same thing?', id: 'are-they-saying-the-same-thing' },
  ];

  return (
    <div className="min-h-screen bg-sandal-100">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-2 px-6 py-3 sm:px-10"
        style={{ background: '#F5EFE5', borderBottom: '1px solid rgba(192,120,40,0.15)' }}
      >
        <Link
          href="/traditions"
          className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink"
        >
          Traditions
        </Link>
        <span className="text-sandal-300 text-xs">›</span>
        <Link
          href="/traditions#comparisons"
          className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink"
        >
          Comparisons
        </Link>
      </div>

      {/* ── HERO / HEADER ───────────────────────────────────────────────── */}
      <div
        className="px-6 pt-10 pb-8 sm:px-10 lg:px-14 bg-sandal-50"
        style={{ borderBottom: '1px solid rgba(192,120,40,0.18)' }}
      >
        {/* Level badge */}
        <span
          className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[11px] font-medium tracking-wide mb-4"
          style={{
            background: levelStyle.bg,
            border: `1px solid ${levelStyle.border}`,
            color: levelStyle.text,
          }}
        >
          {LEVEL_LABELS[c.level]}
        </span>

        {/* H1 */}
        <h1 className="font-serif text-display-sm text-ink max-w-4xl mb-4 leading-snug">
          {c.h1}
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-body-lg text-ink-muted max-w-2xl leading-relaxed mb-8">
          {c.subtitle}
        </p>

        {/* Identity slugs bar */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 max-w-3xl">

          {/* Tradition A */}
          <div
            className="rounded-lg p-4"
            style={{ background: accentA.fill, border: `1px solid ${accentA.border}` }}
          >
            <p
              className="font-serif text-subheading font-semibold leading-tight mb-1"
              style={{ color: accentA.text }}
            >
              {c.traditionA.name}
            </p>
            <p className="font-sans text-[12px] text-ink-muted leading-snug">
              {c.traditionA.thinker}
            </p>
            <p className="font-sans text-[11px] text-ink-faint mt-0.5">
              {c.traditionA.dates}
            </p>
          </div>

          {/* vs separator */}
          <div className="flex items-center justify-center pt-4">
            <span
              className="font-serif text-[22px] font-bold"
              style={{ color: '#C07828', opacity: 0.55 }}
            >
              vs
            </span>
          </div>

          {/* Tradition B */}
          <div
            className="rounded-lg p-4"
            style={{ background: accentB.fill, border: `1px solid ${accentB.border}` }}
          >
            <p
              className="font-serif text-subheading font-semibold leading-tight mb-1"
              style={{ color: accentB.text }}
            >
              {c.traditionB.name}
            </p>
            <p className="font-sans text-[12px] text-ink-muted leading-snug">
              {c.traditionB.thinker}
            </p>
            <p className="font-sans text-[11px] text-ink-faint mt-0.5">
              {c.traditionB.dates}
            </p>
          </div>

        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <div className="px-6 py-10 sm:px-10 lg:px-14">
        <div className="max-w-full lg:grid lg:grid-cols-[1fr_260px] lg:gap-12">

          {/* ── LEFT: essay ─────────────────────────────────────────────── */}
          <div>

            {/* Table of contents */}
            <nav
              className="rounded-lg p-5 mb-10"
              aria-label="Table of contents"
              style={{ background: '#FDFAF6', border: '1px solid rgba(192,120,40,0.18)' }}
            >
              <p
                className="font-sans uppercase font-medium mb-3"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: '#C07828' }}
              >
                In this article
              </p>
              <ol className="space-y-1.5">
                {tocSections.map((sec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="font-sans text-[11px] font-medium mt-0.5 shrink-0 w-4 text-right"
                      style={{ color: '#C07828', opacity: 0.7 }}
                    >
                      {i + 1}
                    </span>
                    <a
                      href={`#${sec.id}`}
                      className="font-sans text-[13px] text-ink-muted no-underline hover:text-ink leading-snug"
                    >
                      {sec.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Section: Shared starting point */}
            <section id="shared-starting-point" className="mb-12 scroll-mt-6">
              <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
                The shared starting point
              </p>
              <h2 className="font-serif text-heading text-ink font-medium mb-4">
                What they agree on
              </h2>
              <div className="space-y-4">
                {c.sharedStarting.split('\n\n').map((para, i) => (
                  <p key={i} className="font-serif text-body-sm text-ink-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Section: First fork */}
            <section id="the-first-fork" className="mb-12 scroll-mt-6">
              <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
                The first fork
              </p>
              <h2 className="font-serif text-heading text-ink font-medium mb-4">
                Where they diverge
              </h2>
              <div className="space-y-4">
                {c.firstFork.split('\n\n').map((para, i) => (
                  <p key={i} className="font-serif text-body-sm text-ink-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Section: Crux */}
            <section id={cruxId} className="mb-12 scroll-mt-6">
              <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
                The central disagreement
              </p>
              <h2 className="font-serif text-heading text-ink font-medium mb-4">
                {c.cruxHeading}
              </h2>
              <blockquote
                className="mb-5"
                style={{
                  borderLeft: '3px solid #F4AD58',
                  paddingLeft: '1rem',
                }}
              >
                <p className="font-serif text-body-sm text-ink-muted italic leading-relaxed">
                  The deepest philosophical disagreement between these two traditions.
                </p>
              </blockquote>
              <div className="space-y-4">
                {c.crux.split('\n\n').map((para, i) => (
                  <p key={i} className="font-serif text-body-sm text-ink-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Section: Status of the individual */}
            <section id="status-of-the-individual" className="mb-12 scroll-mt-6">
              <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
                The status of the individual
              </p>
              <h2 className="font-serif text-heading text-ink font-medium mb-4">
                What happens to the self?
              </h2>
              <div className="space-y-4">
                {c.statusOfIndividual.split('\n\n').map((para, i) => (
                  <p key={i} className="font-serif text-body-sm text-ink-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Section: Liberation compared */}
            <section id="liberation-compared" className="mb-12 scroll-mt-6">
              <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
                Liberation compared
              </p>
              <h2 className="font-serif text-heading text-ink font-medium mb-4">
                Two accounts of the end of the path
              </h2>
              <div className="space-y-4">
                {c.liberationCompared.split('\n\n').map((para, i) => (
                  <p key={i} className="font-serif text-body-sm text-ink-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Section: Are they saying the same thing? */}
            <section id="are-they-saying-the-same-thing" className="mb-12 scroll-mt-6">
              <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
                Verdict
              </p>
              <h2 className="font-serif text-heading text-ink font-medium mb-4">
                Are they saying the same thing?
              </h2>
              <div className="space-y-4">
                {c.verdict.split('\n\n').map((para, i) => (
                  <p key={i} className="font-serif text-body-sm text-ink-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* ── Comparison matrix ────────────────────────────────────── */}
            <section className="mb-12">
              <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
                Side by side
              </p>
              <h2 className="font-serif text-heading text-ink font-medium mb-5">
                Systematic comparison
              </h2>

              <div className="overflow-x-auto rounded-lg" style={{ border: '1px solid rgba(192,120,40,0.18)' }}>
                <table
                  className="w-full border-collapse text-[13px]"
                  aria-label={`Systematic comparison of ${c.traditionA.name} and ${c.traditionB.name}`}
                >
                  <caption className="sr-only">
                    Systematic comparison of {c.traditionA.name} and {c.traditionB.name}
                  </caption>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="p-3 text-left font-medium font-sans text-ink"
                        style={{ background: '#EDE0CC', borderBottom: '1px solid rgba(192,120,40,0.22)' }}
                      >
                        Question
                      </th>
                      <th
                        scope="col"
                        className="p-3 text-left font-medium font-sans"
                        style={{
                          background: accentA.fill,
                          borderBottom: '1px solid rgba(192,120,40,0.22)',
                          color: accentA.text,
                        }}
                      >
                        {c.traditionA.name}
                      </th>
                      <th
                        scope="col"
                        className="p-3 text-left font-medium font-sans"
                        style={{
                          background: accentB.fill,
                          borderBottom: '1px solid rgba(192,120,40,0.22)',
                          color: accentB.text,
                        }}
                      >
                        {c.traditionB.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.matrix.map((row, i) => (
                      <tr
                        key={i}
                        style={{ borderTop: i > 0 ? '1px solid rgba(192,120,40,0.12)' : undefined }}
                      >
                        <td
                          className="p-3 align-top"
                          style={{ borderRight: '1px solid rgba(192,120,40,0.12)', background: '#FDFAF6' }}
                        >
                          <span className="font-sans font-medium text-ink text-[13px]">
                            {row.question}
                          </span>
                        </td>
                        <td
                          className="p-3 align-top font-serif text-ink-light text-[13px] leading-snug"
                          style={{
                            background: `${accentA.fill}66`,
                            borderRight: '1px solid rgba(192,120,40,0.12)',
                          }}
                        >
                          {row.a}
                        </td>
                        <td
                          className="p-3 align-top font-serif text-ink-light text-[13px] leading-snug"
                          style={{ background: `${accentB.fill}66` }}
                        >
                          {row.b}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* ── RIGHT: sidebar ──────────────────────────────────────────── */}
          <aside className="hidden lg:block">

            {/* Tradition quick-reference cards */}
            <div
              className="rounded-lg p-4 mb-6"
              style={{ background: '#FDFAF6', border: '1px solid rgba(192,120,40,0.18)' }}
            >
              <p
                className="font-sans uppercase font-medium mb-3"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: '#C07828' }}
              >
                Traditions compared
              </p>
              <div className="space-y-3">
                {[
                  { trad: c.traditionA, accent: accentA },
                  { trad: c.traditionB, accent: accentB },
                ].map(({ trad, accent }, i) => (
                  <Link
                    key={i}
                    href={`/traditions/${trad.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                    className="block rounded-md p-3 no-underline transition-opacity hover:opacity-80"
                    style={{ background: accent.fill, border: `1px solid ${accent.border}` }}
                  >
                    <p className="font-sans text-[12px] font-semibold mb-0.5" style={{ color: accent.text }}>
                      {trad.name}
                    </p>
                    <p className="font-sans text-[11px] text-ink-muted">{trad.thinker}</p>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* ── FURTHER READING ─────────────────────────────────────────────── */}
      {furtherReading.length > 0 && (
        <div
          className="px-6 py-10 sm:px-10 lg:px-14"
          style={{ borderTop: '1px solid rgba(192,120,40,0.18)', background: '#FDFAF6' }}
        >
          <p className="font-sans text-overline text-ink-muted uppercase tracking-wider mb-2">
            Explore further
          </p>
          <h2 className="font-serif text-heading text-ink font-medium mb-6">
            Further reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {furtherReading.map((t) => {
              const ta = ACCENT_COLORS[t.accent];
              return (
                <Link
                  key={t.slug}
                  href={`/traditions/${t.slug}`}
                  className="block rounded-lg p-4 no-underline transition-shadow hover:shadow-card-md"
                  style={{
                    background: ta.fill,
                    border: `1px solid ${ta.border}`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full font-sans text-[11px] font-bold"
                      style={{ background: ta.border, color: '#fff' }}
                    >
                      {t.iconLetter}
                    </span>
                    <span
                      className="font-sans text-[11px] font-medium"
                      style={{ color: ta.text }}
                    >
                      {t.name}
                    </span>
                  </div>
                  <p className="font-sans text-[12px] text-ink-muted leading-snug">
                    {t.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
