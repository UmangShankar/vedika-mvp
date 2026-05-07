import Link from 'next/link';
import { ACCENT_COLORS, TRADITIONS, type AccentKey } from '@/lib/traditions/data';
import type { ComparisonPage } from '@/lib/traditions/comparisons-data';

const LEVEL_LABELS: Record<ComparisonPage['level'], string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const LEVEL_VARS: Record<ComparisonPage['level'], { bg: string; border: string; text: string }> = {
  beginner:     { bg: 'var(--lp-teal-light)',   border: 'var(--lp-teal-border)',   text: 'var(--lp-teal-text)'   },
  intermediate: { bg: 'var(--lp-amber-light)',  border: 'var(--lp-amber-border)',  text: 'var(--lp-amber-text)'  },
  advanced:     { bg: 'var(--lp-purple-light)', border: 'var(--lp-purple-border)', text: 'var(--lp-purple-text)' },
};

function EssaySection({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="mb-10">
      <h2
        className="font-serif font-medium text-heading mb-4 scroll-mt-6"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {heading}
      </h2>
      <div className="space-y-4">
        {body.split('\n\n').map((para, i) => (
          <p key={i} className="font-serif text-body-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}

type Props = { comparison: ComparisonPage };

export function StaticComparisonPage({ comparison: c }: Props) {
  const accentA = ACCENT_COLORS[c.traditionA.accent as AccentKey];
  const accentB = ACCENT_COLORS[c.traditionB.accent as AccentKey];
  const levelStyle = LEVEL_VARS[c.level];

  const related = c.furtherReadingSlugs
    .map((slug) => TRADITIONS.find((t) => t.slug === slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof TRADITIONS.find>>[];

  return (
    <div className="min-h-screen bg-sandal-100">

      {/* Breadcrumb */}
      <div
        className="flex items-center gap-2 px-6 py-3 sm:px-10"
        style={{ background: 'var(--color-background-secondary)', borderBottom: '0.5px solid var(--color-border-tertiary)' }}
      >
        <Link href="/traditions" className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink">
          Traditions
        </Link>
        <span className="text-sandal-300 text-xs">›</span>
        <span className="font-sans text-[12px] text-ink-muted">Comparisons</span>
        <span className="text-sandal-300 text-xs">›</span>
        <span className="font-serif text-[13px] text-ink">{c.traditionA.name} vs {c.traditionB.name}</span>
      </div>

      {/* Hero */}
      <div
        className="px-6 pt-10 pb-8 sm:px-10 lg:px-14"
        style={{ background: 'var(--color-background-secondary)', borderBottom: '0.5px solid var(--color-border-tertiary)' }}
      >
        {/* Tradition chips */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[11px] font-medium"
            style={{ background: accentA.fill, border: `1px solid ${accentA.border}`, color: accentA.text }}
          >
            {c.traditionA.name} · {c.traditionA.thinker}
          </span>
          <span className="font-sans text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>vs</span>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[11px] font-medium"
            style={{ background: accentB.fill, border: `1px solid ${accentB.border}`, color: accentB.text }}
          >
            {c.traditionB.name} · {c.traditionB.thinker}
          </span>
        </div>

        <h1 className="font-serif text-display-sm text-ink max-w-3xl mb-4 leading-snug">
          {c.h1}
        </h1>
        <p className="font-serif text-body-lg text-ink-muted max-w-2xl leading-relaxed mb-5">
          {c.subtitle}
        </p>

        <span
          className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[11px] font-medium"
          style={{ background: levelStyle.bg, border: `1px solid ${levelStyle.border}`, color: levelStyle.text }}
        >
          {LEVEL_LABELS[c.level]}
        </span>
      </div>

      {/* Main content */}
      <div className="px-6 py-10 sm:px-10 lg:px-14">
        <div className="max-w-2xl">

          {/* Table of contents */}
          <nav
            className="rounded-lg p-5 mb-10"
            aria-label="Table of contents"
            style={{ background: 'var(--color-background-primary)', border: '0.5px solid var(--color-border-tertiary)' }}
          >
            <p
              className="font-sans uppercase font-medium mb-3"
              style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accentA.text }}
            >
              In this comparison
            </p>
            <ol className="space-y-1.5">
              {[
                'Shared starting point',
                'Where the traditions diverge',
                c.cruxHeading,
                'The individual',
                'Liberation compared',
                'Verdict',
                'Comparison matrix',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="font-sans text-[11px] font-medium mt-0.5 shrink-0 w-4 text-right"
                    style={{ color: accentA.text, opacity: 0.7 }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-sans text-[13px] text-ink-muted leading-snug">{item}</span>
                </li>
              ))}
            </ol>
          </nav>

          {/* Essay sections */}
          <EssaySection heading="Shared starting point" body={c.sharedStarting} />
          <EssaySection heading="Where the traditions diverge" body={c.firstFork} />

          {/* Crux — central disagreement callout */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px" style={{ background: 'var(--color-border-secondary)' }} />
              <span
                className="font-sans text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-widest whitespace-nowrap"
                style={{
                  background: 'var(--color-background-secondary)',
                  border: '0.5px solid var(--color-border-secondary)',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                Central disagreement
              </span>
              <div className="flex-1 h-px" style={{ background: 'var(--color-border-secondary)' }} />
            </div>
            <h2
              className="font-serif font-medium text-heading mb-4 scroll-mt-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {c.cruxHeading}
            </h2>
            <div className="space-y-4">
              {c.crux.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className="font-serif text-body-sm leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </section>

          <EssaySection heading="The individual" body={c.statusOfIndividual} />
          <EssaySection heading="Liberation compared" body={c.liberationCompared} />
          <EssaySection heading="Verdict" body={c.verdict} />

          {/* Comparison matrix */}
          <section className="mb-10">
            <p
              className="font-sans uppercase font-medium mb-4"
              style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accentA.text }}
            >
              Comparison matrix
            </p>
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: '0.5px solid var(--color-border-tertiary)' }}
            >
              {/* Column headers */}
              <div
                className="grid gap-px"
                style={{ gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--color-border-tertiary)' }}
              >
                <div className="p-3" style={{ background: 'var(--color-background-secondary)' }}>
                  <p
                    className="font-sans text-[10px] font-medium uppercase tracking-widest"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    Question
                  </p>
                </div>
                <div className="p-3" style={{ background: accentA.fill }}>
                  <p className="font-sans text-[11px] font-medium" style={{ color: accentA.text }}>
                    {c.traditionA.name}
                  </p>
                </div>
                <div className="p-3" style={{ background: accentB.fill }}>
                  <p className="font-sans text-[11px] font-medium" style={{ color: accentB.text }}>
                    {c.traditionB.name}
                  </p>
                </div>
              </div>
              {/* Data rows */}
              {c.matrix.map((row, i) => (
                <div
                  key={i}
                  className="grid gap-px"
                  style={{ gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--color-border-tertiary)' }}
                >
                  <div className="p-3" style={{ background: 'var(--color-background-secondary)' }}>
                    <p
                      className="font-sans text-[12px] font-medium"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {row.question}
                    </p>
                  </div>
                  <div className="p-3" style={{ background: 'var(--color-background-primary)' }}>
                    <p
                      className="font-sans text-[12px] leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {row.a}
                    </p>
                  </div>
                  <div className="p-3" style={{ background: 'var(--color-background-primary)' }}>
                    <p
                      className="font-sans text-[12px] leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {row.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Further reading */}
          {related.length > 0 && (
            <section className="mb-10">
              <p
                className="font-sans uppercase font-medium mb-4"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accentA.text }}
              >
                Go deeper
              </p>
              <div className="space-y-3">
                {related.map((t) => {
                  const ra = ACCENT_COLORS[t.accent];
                  return (
                    <Link
                      key={t.slug}
                      href={`/traditions/${t.slug}`}
                      className="flex items-start gap-3 rounded-lg p-4 no-underline hover:opacity-90 transition-opacity"
                      style={{
                        background: 'var(--color-background-primary)',
                        border: '0.5px solid var(--color-border-tertiary)',
                      }}
                    >
                      <span
                        className="shrink-0 inline-flex w-8 h-8 items-center justify-center rounded-full font-serif text-[13px] font-medium"
                        style={{ background: ra.fill, border: `1px solid ${ra.border}`, color: ra.text }}
                        aria-hidden="true"
                      >
                        {t.iconLetter.charAt(0)}
                      </span>
                      <div>
                        <p className="font-serif font-medium text-ink mb-0.5" style={{ fontSize: '0.9rem' }}>
                          {t.name}
                        </p>
                        <p className="font-sans text-caption text-ink-muted leading-snug">{t.tagline}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Footer nav */}
          <div
            className="flex flex-wrap gap-3 pt-4 pb-12"
            style={{ borderTop: '0.5px solid var(--color-border-tertiary)' }}
          >
            <Link
              href="/traditions"
              className="font-sans text-[0.78rem] no-underline px-4 py-2 rounded"
              style={{
                background: 'var(--color-background-secondary)',
                border: '0.5px solid var(--color-border-secondary)',
                color: 'var(--color-text-secondary)',
              }}
            >
              ← All traditions
            </Link>
            <Link
              href={`/ask-vedika?q=${encodeURIComponent(`${c.traditionA.name} vs ${c.traditionB.name}`)}`}
              className="font-sans text-[0.78rem] no-underline px-4 py-2 rounded"
              style={{ background: accentA.fill, border: `1px solid ${accentA.border}`, color: accentA.text }}
            >
              Ask Vedika about this comparison →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
