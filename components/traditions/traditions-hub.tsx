'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TRADITIONS, ACCENT_COLORS } from '@/lib/traditions/data';
import type { Tradition } from '@/lib/traditions/data';

// ── Helper functions ─────────────────────────────────────────────────────────

function levelStyle(level: string): React.CSSProperties {
  switch (level) {
    case 'beginner':     return { backgroundColor: '#EAF3DE', color: '#27500A' };
    case 'intermediate': return { backgroundColor: '#FAEEDA', color: '#633806' };
    case 'advanced':     return { backgroundColor: '#FCEBEB', color: '#791F1F' };
    default:             return {};
  }
}

function sectionLabel(section: string): string {
  switch (section) {
    case 'heterodox': return 'Heterodox school';
    case 'buddhist':  return 'Buddhist lineage';
    case 'world':     return 'World tradition';
    default:          return '';
  }
}

function conceptLink(concept: string, traditionSlug: string): string {
  const known = ['karma', 'ahimsa', 'maya'];
  const stripped = concept.toLowerCase().replace(/[^a-z]/g, '');
  if (known.includes(stripped)) return `/glossary/${stripped}`;
  return `/ask-vedika?q=${encodeURIComponent(`What is ${concept} in ${traditionSlug}?`)}`;
}

// ── CONCEPTS array ───────────────────────────────────────────────────────────

const CONCEPTS = [
  { term: 'Karma',                  question: 'Does action bind — and can it be dissolved?',                    href: '/glossary/karma' },
  { term: 'Ahiṃsā',                 question: 'Why does non-violence become philosophy?',                        href: '/glossary/ahimsa' },
  { term: 'Māyā',                   question: 'Is the world real — or a projection?',                            href: '/glossary/maya' },
  { term: 'Ṛta',                    question: 'The oldest cosmic order — and its cousins worldwide',              href: '/ask-vedika?q=What+is+Rta+cosmic+order+in+Vedic+philosophy' },
  { term: 'Śūnyatā',               question: 'Is emptiness the same as fullness?',                              href: '/ask-vedika?q=What+is+Sunyata+emptiness+in+Buddhist+philosophy' },
  { term: 'Mokṣa / Nirvāṇa',       question: 'The same freedom — or fundamentally different?',                  href: '/ask-vedika?q=What+is+the+difference+between+Moksha+and+Nirvana' },
  { term: 'Tantra',                 question: 'How does the body become the path?',                              href: '/ask-vedika?q=What+is+Tantra+and+how+does+it+differ+across+traditions' },
  { term: 'Anekāntavāda',          question: 'Can every position be simultaneously true?',                      href: '/ask-vedika?q=What+is+Anekantavada+in+Jain+philosophy' },
  { term: 'Bhakti',                 question: 'Can love itself be liberation?',                                  href: '/ask-vedika?q=What+is+Bhakti+and+can+love+be+liberation' },
  { term: 'Pramāṇa',               question: 'How do you know what you know?',                                  href: '/ask-vedika?q=What+is+Pramana+epistemology+in+Indian+philosophy' },
  { term: 'Saṃsāra',               question: 'The cycle of rebirth — how real is it?',                          href: '/ask-vedika?q=What+is+Samsara+the+cycle+of+rebirth' },
  { term: 'Dharma (cross-tradition)', question: 'How do other traditions answer the question Dharma poses?',    href: '/traditions/dharma' },
];

// ── TraditionCard ────────────────────────────────────────────────────────────

function TraditionCard({ tradition }: { tradition: Tradition }) {
  const [expanded, setExpanded] = useState(false);
  const accent = ACCENT_COLORS[tradition.accent];

  return (
    <div className="bg-sandal-50 border border-[rgba(192,120,40,0.18)] rounded-lg overflow-hidden hover:border-[rgba(192,120,40,0.30)] hover:bg-sandal-100 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`tradition-${tradition.slug}-body`}
        className="w-full text-left p-4 flex items-start gap-3"
      >
        {/* Icon square */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-[13px] font-medium"
          style={{ backgroundColor: accent.fill, color: accent.text }}
        >
          {tradition.iconLetter}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[14px] font-medium text-ink">{tradition.name}</span>
            {/* Level badge */}
            <span
              aria-label={`Difficulty: ${tradition.level}`}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
              style={levelStyle(tradition.level)}
            >
              {tradition.level}
            </span>
          </div>
          <p className="text-[11px] text-ink-muted mt-0.5">{tradition.tagline}</p>
          <p className="text-[10px] text-ink-faint mt-1">{sectionLabel(tradition.section)}</p>
        </div>

        {/* Chevron */}
        <svg
          aria-hidden="true"
          className={`flex-shrink-0 w-4 h-4 text-ink-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div
          id={`tradition-${tradition.slug}-body`}
          className="px-4 pb-4 border-t border-[rgba(192,120,40,0.18)] space-y-4"
        >
          {/* Opening paragraph */}
          <p className="text-[13px] text-ink-light leading-relaxed pt-3">{tradition.opening}</p>

          {/* Foundational concepts */}
          <div>
            <p className="text-overline text-ink-muted uppercase tracking-wider mb-2">Foundational concepts</p>
            <div className="flex flex-wrap gap-1.5">
              {tradition.concepts.map((concept) => (
                <a
                  key={concept}
                  href={conceptLink(concept, tradition.slug)}
                  className="text-[11px] px-2 py-0.5 rounded-full border no-underline hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: accent.fill, color: accent.text, borderColor: accent.border }}
                >
                  {concept}
                </a>
              ))}
            </div>
          </div>

          {/* Key thinkers */}
          <div>
            <p className="text-overline text-ink-muted uppercase tracking-wider mb-2">Key thinkers</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tradition.thinkers.map((thinker) => (
                <div key={thinker.name} className="bg-sandal-100 rounded-md p-3 flex gap-2">
                  {/* Initials avatar */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-medium"
                    style={{ backgroundColor: accent.fill, color: accent.text }}
                  >
                    {thinker.name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-ink">{thinker.name}</p>
                    <p className="text-[10px] text-ink-muted">{thinker.dates} · {thinker.role}</p>
                    <p className="text-[11px] text-ink-muted italic mt-1">&ldquo;{thinker.quote}&rdquo;</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {thinker.works.map((w) => (
                        <span key={w} className="text-[10px] bg-sandal-200 text-ink-muted px-1.5 py-0.5 rounded-sm">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparisons */}
          <div>
            <p className="text-overline text-ink-muted uppercase tracking-wider mb-2">Comparisons with the darśanas</p>
            <div className="space-y-1.5">
              {tradition.comparisons.map((comp) => (
                <Link
                  key={comp.darshana}
                  href={
                    comp.slug
                      ? `/traditions/compare/${comp.slug}`
                      : `/ask-vedika?q=${encodeURIComponent(`What is the comparison between ${tradition.name} and ${comp.darshana}?`)}`
                  }
                  className="block bg-sandal-100 border border-[rgba(192,120,40,0.18)] rounded-md p-2.5 no-underline hover:border-[rgba(192,120,40,0.30)] hover:bg-sandal-200 transition-colors"
                >
                  <p className="text-[10px] text-ink-muted mb-0.5">vs. {comp.darshana}</p>
                  <p className="text-[12px] font-medium text-ink">{comp.title}</p>
                  <p className="text-[11px] text-ink-muted italic">{comp.question}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Full deep dive link */}
          <div className="pt-1">
            <Link
              href={`/traditions/${tradition.slug}`}
              className="inline-flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full border no-underline transition-colors"
              style={{ borderColor: '#AFA9EC', color: '#3C3489' }}
            >
              Full deep dive ↗
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ── TraditionsHub ────────────────────────────────────────────────────────────

type FilterValue = 'all' | 'heterodox' | 'buddhist' | 'world' | 'concepts';

export function TraditionsHub() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const heterodoxTraditions = TRADITIONS.filter((t) => t.section === 'heterodox');
  const buddhistTraditions  = TRADITIONS.filter((t) => t.section === 'buddhist');
  const worldTraditions     = TRADITIONS.filter((t) => t.section === 'world');

  const filters: { value: FilterValue; label: string }[] = [
    { value: 'all',       label: 'All' },
    { value: 'heterodox', label: 'Heterodox' },
    { value: 'buddhist',  label: 'Buddhist lineages' },
    { value: 'world',     label: 'World traditions' },
    { value: 'concepts',  label: 'Concepts' },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">

      {/* 1. HERO */}
      <section>
        <p className="text-overline text-ink-muted uppercase tracking-wider mb-2">Vedika</p>
        <h1 className="text-display-sm font-medium text-ink mb-3">Traditions</h1>
        <p className="text-body-sm text-ink-light max-w-xl leading-relaxed">
          The philosophical and spiritual paths adjacent to, in dialogue with, and transformed by the
          Vedic world — heterodox challengers, Buddhist lineages, world resonances, foundational
          concepts. The six orthodox darśanas have{' '}
          <Link href="/darshanas" className="text-saffron-500 underline underline-offset-2">
            their own page
          </Link>
          .
        </p>
      </section>

      {/* 2. DHARMA FEATURED CARD */}
      <Link href="/traditions/dharma" className="block group no-underline">
        <div className="relative bg-sandal-50 border border-[rgba(192,120,40,0.18)] rounded-lg overflow-hidden group-hover:border-[rgba(192,120,40,0.30)] group-hover:bg-sandal-100 transition-colors">
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#AFA9EC' }} />
          <div className="pl-5 pr-4 py-4">
            {/* Badge */}
            <span
              className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mb-2"
              style={{ backgroundColor: '#EEEDFE', color: '#3C3489', border: '0.5px solid #AFA9EC' }}
            >
              Foundational · Read first
            </span>
            <h2 className="text-body font-medium text-ink mb-2">What is Dharma?</h2>
            <p className="text-caption text-ink-light leading-relaxed mb-3">
              Before every tradition on this page — before the heterodox challengers, the Buddhist
              schools, the world resonances — there is Dharma. Cosmic law, personal ethical duty, and
              the sustaining fabric of the universe. Every tradition here either inherits, contests,
              transforms, or silently parallels this idea.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-ink-muted">
              <span className="devanagari">धर्म</span>
              <span>Connects: every section below</span>
              <span
                className="px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: '#EAF3DE', color: '#27500A' }}
              >
                beginner
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* 3. FILTER PILLS */}
      <div role="group" aria-label="Filter by section" className="flex gap-2 flex-wrap overflow-x-auto pb-1">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            aria-pressed={activeFilter === value}
            className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors whitespace-nowrap ${
              activeFilter === value
                ? ''
                : 'bg-sandal-50 text-ink-muted border-[rgba(192,120,40,0.18)] hover:bg-sandal-100'
            }`}
            style={
              activeFilter === value
                ? { backgroundColor: '#EEEDFE', color: '#3C3489', border: '0.5px solid #AFA9EC' }
                : undefined
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* 4. SECTION A: HETERODOX */}
      <section
        data-section="heterodox"
        aria-hidden={activeFilter !== 'all' && activeFilter !== 'heterodox'}
        className={activeFilter !== 'all' && activeFilter !== 'heterodox' ? 'hidden' : ''}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="text-overline text-ink-muted uppercase tracking-wider">
            Heterodox schools — Nāstika darśanas
          </span>
          <div className="flex-1 h-px bg-[rgba(192,120,40,0.18)]" />
        </div>
        <p className="text-[11px] text-ink-muted mb-4 italic">
          Schools that rejected Vedic authority — rigorous philosophical opponents whose challenges
          forced every orthodox school to prove, not merely assert, the realities they claimed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {heterodoxTraditions.map((t) => (
            <TraditionCard key={t.slug} tradition={t} />
          ))}
        </div>
      </section>

      {/* 5. SECTION B: BUDDHIST LINEAGES */}
      <section
        data-section="buddhist"
        aria-hidden={activeFilter !== 'all' && activeFilter !== 'buddhist'}
        className={activeFilter !== 'all' && activeFilter !== 'buddhist' ? 'hidden' : ''}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="text-overline text-ink-muted uppercase tracking-wider">
            Buddhist lineages
          </span>
          <div className="flex-1 h-px bg-[rgba(192,120,40,0.18)]" />
        </div>
        <p className="text-[11px] text-ink-muted mb-4 italic">
          Buddhism emerged from the same civilisational soil as Vedic philosophy — sharing karma,
          rebirth, and liberation — while arriving at fundamentally different answers, above all on
          the ātman.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {buddhistTraditions.map((t) => (
            <TraditionCard key={t.slug} tradition={t} />
          ))}
        </div>
      </section>

      {/* 6. SECTION C: WORLD TRADITIONS */}
      <section
        data-section="world"
        aria-hidden={activeFilter !== 'all' && activeFilter !== 'world'}
        className={activeFilter !== 'all' && activeFilter !== 'world' ? 'hidden' : ''}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="text-overline text-ink-muted uppercase tracking-wider">
            World traditions
          </span>
          <div className="flex-1 h-px bg-[rgba(192,120,40,0.18)]" />
        </div>
        <p className="text-[11px] text-ink-muted mb-4 italic">
          Traditions that did not emerge from the Vedic world but share deep structural resonances —
          and through trade routes, conquest, and pilgrimage, entered into direct conversation with
          Indian thought.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {worldTraditions.map((t) => (
            <TraditionCard key={t.slug} tradition={t} />
          ))}
        </div>
      </section>

      {/* 7. SECTION D: FOUNDATIONAL CONCEPTS */}
      <section
        data-section="concepts"
        aria-hidden={activeFilter !== 'all' && activeFilter !== 'concepts'}
        className={activeFilter !== 'all' && activeFilter !== 'concepts' ? 'hidden' : ''}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="text-overline text-ink-muted uppercase tracking-wider">
            Foundational concepts — cross-tradition vocabulary
          </span>
          <div className="flex-1 h-px bg-[rgba(192,120,40,0.18)]" />
        </div>
        <p className="text-[11px] text-ink-muted mb-4 italic">
          The shared vocabulary across all traditions on this page — concepts every school inherits,
          contests, or silently parallels.
        </p>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(145px, 1fr))' }}
        >
          {CONCEPTS.map((c) => (
            <a
              key={c.term}
              href={c.href}
              className="bg-sandal-100 border border-[rgba(192,120,40,0.18)] rounded-md p-3 no-underline hover:border-[rgba(192,120,40,0.30)] transition-colors block"
            >
              <p className="text-[13px] font-medium text-ink">{c.term}</p>
              <p className="text-[11px] text-ink-muted italic mt-1">{c.question}</p>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
