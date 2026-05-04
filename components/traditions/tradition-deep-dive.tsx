import Link from 'next/link';
import { ACCENT_COLORS, TRADITIONS, type Tradition } from '@/lib/traditions/data';

// ── helpers ──────────────────────────────────────────────────────────────────

const SECTION_LABELS: Record<Tradition['section'], string> = {
  heterodox: 'Heterodox schools',
  buddhist: 'Buddhist lineages',
  world: 'World traditions',
};

const LEVEL_LABELS: Record<Tradition['level'], string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const LEVEL_COLORS: Record<Tradition['level'], { bg: string; text: string; border: string }> = {
  beginner:     { bg: '#EAF3DE', text: '#27500A', border: '#97C459' },
  intermediate: { bg: '#FAEEDA', text: '#633806', border: '#EF9F27' },
  advanced:     { bg: '#FBEAF0', text: '#72243E', border: '#ED93B1' },
};

/** Slug a heading string to a URL-safe fragment id */
function toId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// ── component ────────────────────────────────────────────────────────────────

type Props = { tradition: Tradition };

export function TraditionDeepDivePage({ tradition: t }: Props) {
  const accent = ACCENT_COLORS[t.accent];
  const sectionLabel = SECTION_LABELS[t.section];
  const levelStyle = LEVEL_COLORS[t.level];

  // Related tradition objects (skip slugs that don't exist in static data)
  const related = t.relatedSlugs
    .map((slug) => TRADITIONS.find((x) => x.slug === slug))
    .filter(Boolean) as Tradition[];

  return (
    <div className="min-h-screen bg-sandal-100">

      {/* ── BREADCRUMB ────────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-2 px-6 py-3 sm:px-10"
        style={{ background: '#F5EFE5', borderBottom: '1px solid rgba(192,120,40,0.15)' }}
      >
        <Link href="/traditions" className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink">
          Traditions
        </Link>
        <span className="text-sandal-300 text-xs">›</span>
        <Link
          href={`/traditions#${t.section}`}
          className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink"
        >
          {sectionLabel}
        </Link>
        <span className="text-sandal-300 text-xs">›</span>
        <span className="font-serif text-[13px] text-ink">{t.name}</span>
      </div>

      {/* ── HERO / HEADER ─────────────────────────────────────────────── */}
      <div className="px-6 pt-10 pb-8 sm:px-10 lg:px-14 bg-sandal-50"
        style={{ borderBottom: '1px solid rgba(192,120,40,0.18)' }}>

        {/* Badge */}
        <span
          className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[11px] font-medium tracking-wide mb-4"
          style={{
            background: accent.fill,
            border: `1px solid ${accent.border}`,
            color: accent.text,
          }}
        >
          {t.badge}
        </span>

        {/* H1 */}
        <h1 className="font-serif text-display-sm text-ink max-w-3xl mb-4 leading-snug">
          {t.h1}
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-body-lg text-ink-muted max-w-2xl leading-relaxed mb-6">
          {t.subtitle}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Difficulty */}
          <span
            className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[11px] font-medium"
            style={{
              background: levelStyle.bg,
              border: `1px solid ${levelStyle.border}`,
              color: levelStyle.text,
            }}
          >
            {LEVEL_LABELS[t.level]}
          </span>

          {/* Read time */}
          <span className="font-sans text-caption text-ink-muted">{t.readTime} read</span>

          {/* Divider */}
          {related.length > 0 && (
            <span className="text-sandal-300 text-xs select-none">·</span>
          )}

          {/* Related tradition chips */}
          {related.slice(0, 3).map((r) => {
            const ra = ACCENT_COLORS[r.accent];
            return (
              <Link
                key={r.slug}
                href={`/traditions/${r.slug}`}
                className="inline-flex items-center rounded-full px-2.5 py-0.5 font-sans text-[11px] no-underline transition-opacity hover:opacity-80"
                style={{
                  background: ra.fill,
                  border: `1px solid ${ra.border}`,
                  color: ra.text,
                }}
              >
                {r.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
      <div className="px-6 py-10 sm:px-10 lg:px-14">
        <div className="max-w-full lg:grid lg:grid-cols-[1fr_260px] lg:gap-12">

          {/* Left: essay body */}
          <div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <nav
              className="rounded-lg p-5 mb-10"
              aria-label="Table of contents"
              style={{
                background: '#FDFAF6',
                border: '1px solid rgba(192,120,40,0.18)',
              }}
            >
              <p
                className="font-sans uppercase font-medium mb-3"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accent.text }}
              >
                In this article
              </p>
              <ol className="space-y-1.5">
                {t.essaySections.map((sec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="font-sans text-[11px] font-medium mt-0.5 shrink-0 w-4 text-right"
                      style={{ color: accent.text, opacity: 0.7 }}
                    >
                      {i + 1}
                    </span>
                    <a
                      href={`#${toId(sec.heading)}`}
                      className="font-sans text-[13px] text-ink-muted no-underline hover:text-ink leading-snug"
                    >
                      {sec.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── ESSAY SECTIONS ────────────────────────────────────── */}
            <div className="space-y-12 mb-12">
              {t.essaySections.map((sec, i) => (
                <section key={i} id={toId(sec.heading)}>
                  <h2
                    className="font-serif text-heading text-ink font-medium mb-4 scroll-mt-6"
                  >
                    {sec.heading}
                  </h2>
                  <div className="space-y-4">
                    {sec.body.split('\n\n').map((para, j) => (
                      <p
                        key={j}
                        className="font-serif text-body-sm text-ink-light leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* ── FOUNDATIONAL CONCEPTS ─────────────────────────────── */}
            <section className="mb-12">
              <p
                className="font-sans uppercase font-medium mb-4"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accent.text }}
              >
                Foundational concepts
              </p>
              <div className="flex flex-wrap gap-2">
                {t.concepts.map((concept) => (
                  <span
                    key={concept}
                    className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[12px]"
                    style={{
                      background: accent.fill,
                      border: `1px solid ${accent.border}`,
                      color: accent.text,
                    }}
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </section>

            {/* ── KEY THINKERS ──────────────────────────────────────── */}
            <section className="mb-12">
              <p
                className="font-sans uppercase font-medium mb-4"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accent.text }}
              >
                Key thinkers
              </p>
              <div className="space-y-4">
                {t.thinkers.map((thinker) => (
                  <div
                    key={thinker.name}
                    className="rounded-lg p-5"
                    style={{
                      background: '#FDFAF6',
                      border: '1px solid rgba(192,120,40,0.18)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Initials avatar */}
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-serif font-medium text-[15px]"
                        style={{
                          background: accent.fill,
                          border: `1px solid ${accent.border}`,
                          color: accent.text,
                        }}
                        aria-hidden="true"
                      >
                        {thinker.name.charAt(0)}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Name + dates */}
                        <div className="flex flex-wrap items-baseline gap-x-2 mb-0.5">
                          <span className="font-serif font-medium text-ink" style={{ fontSize: '0.95rem' }}>
                            {thinker.name}
                          </span>
                          <span className="font-sans text-caption text-ink-muted">{thinker.dates}</span>
                        </div>

                        {/* Role */}
                        <p className="font-sans text-[12px] text-ink-muted mb-3">{thinker.role}</p>

                        {/* Quote */}
                        <blockquote
                          className="font-serif italic text-ink-muted mb-3 leading-relaxed"
                          style={{
                            borderLeft: `3px solid rgba(192,120,40,0.30)`,
                            paddingLeft: '14px',
                            fontSize: '0.875rem',
                          }}
                        >
                          {thinker.quote}
                        </blockquote>

                        {/* Works */}
                        {thinker.works.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {thinker.works.map((work) => (
                              <span
                                key={work}
                                className="font-sans text-[11px] px-2 py-0.5 rounded"
                                style={{
                                  background: '#F5EFE5',
                                  border: '1px solid rgba(192,120,40,0.20)',
                                  color: '#7A6A56',
                                }}
                              >
                                {work}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── COMPARISONS ───────────────────────────────────────── */}
            <section className="mb-12">
              <p
                className="font-sans uppercase font-medium mb-4"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accent.text }}
              >
                In dialogue with
              </p>
              <div className="space-y-3">
                {t.comparisons.map((cmp) => {
                  const inner = (
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: '#FDFAF6',
                        border: `1px solid rgba(192,120,40,0.18)`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-sans text-[11px] text-ink-muted mb-1">vs {cmp.darshana}</p>
                          <p className="font-serif font-medium text-ink leading-snug" style={{ fontSize: '0.88rem' }}>
                            {cmp.title}
                          </p>
                          <p className="font-sans text-caption text-ink-muted mt-1">{cmp.question}</p>
                        </div>
                        <span
                          className="shrink-0 font-sans text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{
                            background: cmp.slug ? accent.fill : '#F5EFE5',
                            border: `1px solid ${cmp.slug ? accent.border : 'rgba(192,120,40,0.25)'}`,
                            color: cmp.slug ? accent.text : '#7A6A56',
                          }}
                        >
                          {cmp.slug ? 'Read comparison →' : 'Ask Vedika →'}
                        </span>
                      </div>
                    </div>
                  );

                  if (cmp.slug) {
                    return (
                      <Link
                        key={cmp.darshana}
                        href={`/comparisons/${cmp.slug}`}
                        className="block no-underline hover:opacity-90 transition-opacity"
                      >
                        {inner}
                      </Link>
                    );
                  }

                  return (
                    <Link
                      key={cmp.darshana}
                      href={`/ask-vedika?q=${encodeURIComponent(cmp.title)}`}
                      className="block no-underline hover:opacity-90 transition-opacity"
                    >
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* ── SOURCES ───────────────────────────────────────────── */}
            <section className="mb-12">
              <p
                className="font-sans uppercase font-medium mb-4"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accent.text }}
              >
                Foundational sources
              </p>
              <div className="space-y-2">
                {t.sources.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-4"
                    style={{
                      background: '#FDFAF6',
                      border: '1px solid rgba(192,120,40,0.18)',
                    }}
                  >
                    <p className="font-serif font-medium text-ink mb-1" style={{ fontSize: '0.88rem' }}>
                      {src.title}
                    </p>
                    <p className="font-sans text-caption text-ink-muted leading-relaxed">{src.note}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right sidebar: related traditions */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-4">
              <p
                className="font-sans uppercase font-medium"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accent.text }}
              >
                Related traditions
              </p>
              <div className="space-y-3">
                {related.map((r) => {
                  const ra = ACCENT_COLORS[r.accent];
                  return (
                    <Link
                      key={r.slug}
                      href={`/traditions/${r.slug}`}
                      className="block rounded-lg p-4 no-underline transition-opacity hover:opacity-90"
                      style={{
                        background: '#FDFAF6',
                        border: '1px solid rgba(192,120,40,0.18)',
                      }}
                    >
                      {/* Icon + name */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <span
                          className="inline-flex w-7 h-7 items-center justify-center rounded-full font-serif text-[12px] font-medium shrink-0"
                          style={{
                            background: ra.fill,
                            border: `1px solid ${ra.border}`,
                            color: ra.text,
                          }}
                          aria-hidden="true"
                        >
                          {r.iconLetter.charAt(0)}
                        </span>
                        <span className="font-serif font-medium text-ink" style={{ fontSize: '0.85rem' }}>
                          {r.name}
                        </span>
                      </div>
                      <p className="font-sans text-caption text-ink-muted leading-snug">{r.tagline}</p>
                    </Link>
                  );
                })}
              </div>

              {/* Back link */}
              <div className="pt-2">
                <Link
                  href="/traditions"
                  className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink"
                >
                  ← All traditions
                </Link>
              </div>
            </div>
          </aside>

        </div>

        {/* ── RELATED TRADITIONS (mobile / below content) ─────────── */}
        {related.length > 0 && (
          <div className="lg:hidden mt-4 mb-8">
            <p
              className="font-sans uppercase font-medium mb-4"
              style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: accent.text }}
            >
              Related traditions
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {related.map((r) => {
                const ra = ACCENT_COLORS[r.accent];
                return (
                  <Link
                    key={r.slug}
                    href={`/traditions/${r.slug}`}
                    className="block rounded-lg p-4 no-underline transition-opacity hover:opacity-90"
                    style={{
                      background: '#FDFAF6',
                      border: '1px solid rgba(192,120,40,0.18)',
                    }}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span
                        className="inline-flex w-7 h-7 items-center justify-center rounded-full font-serif text-[12px] font-medium shrink-0"
                        style={{
                          background: ra.fill,
                          border: `1px solid ${ra.border}`,
                          color: ra.text,
                        }}
                        aria-hidden="true"
                      >
                        {r.iconLetter.charAt(0)}
                      </span>
                      <span className="font-serif font-medium text-ink" style={{ fontSize: '0.85rem' }}>
                        {r.name}
                      </span>
                    </div>
                    <p className="font-sans text-caption text-ink-muted leading-snug">{r.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── FOOTER NAV ──────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-3 pt-4 pb-12 border-t border-[rgba(192,120,40,0.15)]">
          <Link
            href="/traditions"
            className="font-sans text-[0.78rem] no-underline px-4 py-2 rounded text-ink-muted"
            style={{ background: '#EDE0CC', border: '1px solid rgba(192,120,40,0.20)' }}
          >
            ← All traditions
          </Link>
          <Link
            href="/ask-vedika"
            className="font-sans text-[0.78rem] no-underline px-4 py-2 rounded"
            style={{
              background: accent.fill,
              border: `1px solid ${accent.border}`,
              color: accent.text,
            }}
          >
            Ask Vedika about {t.name} →
          </Link>
        </div>

      </div>
    </div>
  );
}
