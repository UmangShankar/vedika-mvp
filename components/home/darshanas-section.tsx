'use client';

import { useState } from 'react';
import Link from 'next/link';

const schools = [
  {
    id: 'nyaya', pair: 'nyaya-vaisheshika',
    devanagari: 'न्याय', name: 'Nyāya',
    meaning: 'Logic & Valid Reasoning',
    sutra: 'Nyāya Sūtras', founder: 'Akṣapāda Gautama',
    theism: 'sivara',
    pramanas: '4 — pratyakṣa, anumāna, upamāna, śabda',
    question: 'How do we arrive at valid knowledge?',
    focus: 'Liberation through tattvajñāna — correct knowledge of the 12 prameyas. Valid reasoning is the primary instrument.',
    note: null as string | null, subschools: null as string[] | null,
    bg: '#FEF7ED', accent: '#C07828',
  },
  {
    id: 'vaisheshika', pair: 'nyaya-vaisheshika',
    devanagari: 'वैशेषिक', name: 'Vaiśeṣika',
    meaning: 'Atomism & Categories of Being',
    sutra: 'Vaiśeṣika Sūtras', founder: 'Kaṇāda (Ulūka)',
    theism: 'sivara',
    pramanas: '2 — pratyakṣa, anumāna',
    question: 'What are the irreducible constituents of existence?',
    focus: 'Reality consists of 6 padārthas — dravya, guṇa, karma, sāmānya, viśeṣa, samavāya — built from eternal paramāṇus.',
    note: null as string | null, subschools: null as string[] | null,
    bg: '#FEF3E8', accent: '#8B5A2B',
  },
  {
    id: 'samkhya', pair: 'samkhya-yoga',
    devanagari: 'सांख्य', name: 'Sāṃkhya',
    meaning: 'Enumeration — Dualism of Puruṣa & Prakṛti',
    sutra: 'Sāṃkhya Kārikā', founder: 'Kapila, systematised by Īśvarakṛṣṇa',
    theism: 'nirīśvara',
    pramanas: '3 — pratyakṣa, anumāna, āgama',
    question: 'What is the relation between consciousness and matter?',
    focus: '25 tattvas unfold from Prakṛti. Liberation is viveka — the Puruṣa recognising its absolute separation from Prakṛti.',
    note: 'Nirīśvara — does not posit God. One of two classical darśanas that are explicitly atheistic (Sāṃkhya Kārikā 61).' as string | null,
    subschools: null as string[] | null,
    bg: '#E8F5F3', accent: '#2D7A6F',
  },
  {
    id: 'yoga', pair: 'samkhya-yoga',
    devanagari: 'योग', name: 'Yoga',
    meaning: 'Discipline — Stilling of Mental Fluctuations',
    sutra: 'Yoga Sūtras', founder: 'Patañjali',
    theism: 'sivara',
    pramanas: '3 — pratyakṣa, anumāna, āgama',
    question: 'How does the mind achieve complete stillness?',
    focus: "Yogaś citta-vṛtti-nirodhaḥ. Liberation through the aṣṭāṅga path. Accepts Sāṃkhya's metaphysics but adds Īśvara.",
    note: 'Sīśvara — unlike twin school Sāṃkhya, Yoga accepts Īśvara as a special eternal Puruṣa (YS 1.24).' as string | null,
    subschools: null as string[] | null,
    bg: '#E8F3F5', accent: '#2D6A7A',
  },
  {
    id: 'mimamsa', pair: 'mimamsa-vedanta',
    devanagari: 'मीमांसा', name: 'Mīmāṃsā',
    meaning: 'Inquiry into Vedic Injunctions',
    sutra: 'Mīmāṃsā Sūtras', founder: 'Jaimini',
    theism: 'nirīśvara',
    pramanas: '6 — pratyakṣa, anumāna, upamāna, arthāpatti, anupalabdhi, śabda',
    question: 'What constitutes dharmic duty and how is it known?',
    focus: "Dharma is what the Veda enjoins — codanālakṣaṇo'rtho dharmaḥ. The Veda is apauruṣeya: eternal, unauthored.",
    note: 'Nirīśvara — Kumārila Bhaṭṭa argues explicitly against theism. Vedic authority requires no God.' as string | null,
    subschools: null as string[] | null,
    bg: '#FBEAEA', accent: '#C0392B',
  },
  {
    id: 'vedanta', pair: 'mimamsa-vedanta',
    devanagari: 'वेदान्त', name: 'Vedānta',
    meaning: 'End of the Vedas — Inquiry into Brahman',
    sutra: 'Brahma Sūtras (Vedānta Sūtras)', founder: 'Bādarāyaṇa',
    theism: 'sivara',
    pramanas: '3 — pratyakṣa, anumāna, śruti (Prasthānatraya)',
    question: 'What is the relation between the individual self and ultimate reality?',
    focus: 'Inquiry into Brahman, Ātman, and their relation via the Prasthānatraya: Upanishads, Brahma Sūtras, Bhagavad Gita.',
    note: 'Vedānta is an umbrella. Each sub-school gives a different answer to every question in the matrix.' as string | null,
    subschools: ['Advaita · Śaṅkara', 'Viśiṣṭādvaita · Rāmānuja', 'Dvaita · Madhva'] as string[] | null,
    bg: '#F8EEF6', accent: '#7A2D6A',
  },
];

const DARK_MATRIX = [
  {
    school: 'Nyāya', nameColor: '#EF8C28',
    pramana: '4 — pratyakṣa, anumāna, upamāna, śabda',
    tattva: '16 topics of inquiry (ṣoḍaśa padārtha)',
    atman: 'Individual, eternal, bound by karma',
    moksha: 'Tattvajñāna — knowledge liberates from duḥkha',
  },
  {
    school: 'Sāṃkhya', nameColor: '#1D9E75',
    pramana: '3 — pratyakṣa, anumāna, āgama',
    tattva: '25 tattvas — 1 Puruṣa + 24 Prakṛti evolutes',
    atman: 'Plural, eternal, passive witness. Nirīśvara',
    moksha: 'Viveka — discriminating Puruṣa from Prakṛti',
  },
  {
    school: 'Vedānta', nameColor: '#B080C0',
    pramana: '3 — pratyakṣa, anumāna, śruti (Prasthānatraya)',
    tattva: 'Varies: Advaita (Brahman only) · Viśiṣṭādvaita (qualified non-dual) · Dvaita (5 eternal distinctions)',
    atman: 'Varies — not a single answer across sub-schools',
    moksha: 'Varies: jñāna (Advaita) · bhakti (Rāmānuja) · prapatti (Madhva)',
  },
];

type PairFilter = 'all' | 'nyaya-vaisheshika' | 'samkhya-yoga' | 'mimamsa-vedanta';

const FILTERS: { id: PairFilter; label: string }[] = [
  { id: 'all', label: 'All six' },
  { id: 'nyaya-vaisheshika', label: 'Nyāya · Vaiśeṣika' },
  { id: 'samkhya-yoga', label: 'Sāṃkhya · Yoga' },
  { id: 'mimamsa-vedanta', label: 'Mīmāṃsā · Vedānta' },
];

export function DarshanasSection() {
  const [activeTab, setActiveTab] = useState<PairFilter>('all');

  const visible = activeTab === 'all' ? schools : schools.filter((s) => s.pair === activeTab);

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-wide">
        {/* Heading */}
        <header className="mb-8 space-y-2">
          <p className="text-overline uppercase tracking-widest text-saffron-500">Darśana</p>
          <h2 className="font-serif text-display-sm text-ink">The Six Philosophical Schools</h2>
          <p className="max-w-xl text-body text-ink-muted">
            The āstika darśanas — six systematic inquiries into reality, knowledge, and liberation. Grouped as three traditional mithuna pairs.
          </p>
          <Link
            href="/darshanas"
            className="inline-block text-body-sm font-medium text-saffron-500 no-underline hover:text-saffron-600"
          >
            Explore all darśanas →
          </Link>
        </header>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`rounded-sm px-3 py-1.5 text-caption font-medium transition-colors ${
                activeTab === f.id
                  ? 'bg-saffron-500 text-white border border-saffron-500'
                  : 'bg-white text-ink-muted border border-[rgba(192,120,40,0.2)] hover:border-saffron-400 hover:text-saffron-500'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* School cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10 items-start">
          {visible.map((s) => (
            <Link
              key={s.id}
              href={`/darshanas/${s.id}`}
              className="no-underline block"
            >
            <article
              className="rounded-lg p-6 cursor-pointer flex flex-col transition-all duration-200 border"
              style={{ background: s.bg, borderColor: s.accent + '26' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = s.bg; }}
            >
              {/* Devanagari + theism pill */}
              <div className="flex items-start justify-between mb-0">
                <span
                  className="devanagari text-3xl font-medium leading-none"
                  style={{ color: s.accent }}
                >
                  {s.devanagari}
                </span>
                <span
                  className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-sm"
                  style={
                    s.theism === 'sivara'
                      ? { background: '#FEF7ED', color: '#9A5E1C' }
                      : { background: '#E8F5F3', color: '#2D7A6F' }
                  }
                >
                  {s.theism === 'sivara' ? 'Sīśvara' : 'Nirīśvara'}
                </span>
              </div>

              {/* Name + meaning */}
              <h3 className="font-serif text-subheading font-semibold text-ink mt-2 mb-0.5">{s.name}</h3>
              <div className="text-[11px] uppercase tracking-wider text-ink-faint mb-1">{s.meaning}</div>

              {/* Sutra · founder */}
              <div className="text-caption italic text-ink-muted mb-3">
                {s.sutra} · {s.founder}
              </div>

              {/* Key question */}
              <div className="text-[13px] italic mb-3" style={{ color: s.accent }}>
                &ldquo;{s.question}&rdquo;
              </div>

              {/* Focus */}
              <p className="text-body-sm text-ink-light mb-3 flex-1">{s.focus}</p>

              {/* Divider */}
              <div className="border-t pt-2 mb-2" style={{ borderColor: s.accent + '1f' }} />

              {/* Pramāṇas */}
              <div className="text-[11px]">
                <span className="font-semibold" style={{ color: s.accent }}>Pramāṇas: </span>
                <span className="text-ink-muted">{s.pramanas}</span>
              </div>

              {/* Note callout */}
              {s.note && (
                <div
                  className="mt-2 p-2 text-[12px] text-ink-light"
                  style={{
                    borderLeft: `2px solid ${s.accent}`,
                    background: s.accent + '0f',
                    borderRadius: '0 4px 4px 0',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {s.note}
                </div>
              )}

              {/* Sub-schools */}
              {s.subschools && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {s.subschools.map((sub) => (
                    <span
                      key={sub}
                      className="text-[11px] px-2 py-0.5 rounded-sm border"
                      style={{
                        background: s.accent + '1a',
                        color: s.accent,
                        borderColor: s.accent + '33',
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              )}

              {/* Explore link */}
              <div className="mt-3 text-right">
                <span className="text-sm font-medium" style={{ color: s.accent }}>
                  Explore →
                </span>
              </div>
            </article>
            </Link>
          ))}
        </div>

        {/* Dark comparison matrix */}
        <div style={{ background: '#1C1208', borderRadius: 12, padding: '32px 28px' }}>
          {/* Top row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p
                className="text-overline uppercase tracking-widest mb-1"
                style={{ color: '#F4AD58' }}
              >
                Comparative Philosophy
              </p>
              <h3
                className="font-serif font-semibold mt-1 mb-1"
                style={{ color: '#ffffff', fontSize: 22 }}
              >
                Compare across all six schools
              </h3>
              <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Pramāṇa · Tattva · Ātman · Mokṣa — how each school answers differently
              </p>
            </div>
            <Link
              href="/darshanas/matrix"
              className="flex-shrink-0 ml-6 bg-saffron-500 text-white text-sm font-medium px-5 py-2 rounded-sm border-0 cursor-pointer hover:bg-saffron-600 no-underline"
            >
              Open full matrix →
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  {['School', 'Pramāṇa', 'Tattva', 'Ātman', 'Mokṣa'].map((col) => (
                    <th
                      key={col}
                      className="text-left px-3 py-2"
                      style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500, fontSize: 12 }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DARK_MATRIX.map((row) => (
                  <tr key={row.school} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td
                      className="px-3 py-2.5 font-serif font-semibold whitespace-nowrap"
                      style={{ color: row.nameColor, verticalAlign: 'top' }}
                    >
                      {row.school}
                    </td>
                    <td className="px-3 py-2.5" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', lineHeight: 1.55, verticalAlign: 'top' }}>{row.pramana}</td>
                    <td className="px-3 py-2.5" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', lineHeight: 1.55, verticalAlign: 'top' }}>{row.tattva}</td>
                    <td className="px-3 py-2.5" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', lineHeight: 1.55, verticalAlign: 'top' }}>{row.atman}</td>
                    <td className="px-3 py-2.5" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', lineHeight: 1.55, verticalAlign: 'top' }}>{row.moksha}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-3 px-3"
                    style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12 }}
                  >
                    Vaiśeṣika · Yoga · Mīmāṃsā shown in full matrix — open to compare all six
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 italic" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
            Note: Vedānta row reflects the range across Advaita, Viśiṣṭādvaita, and Dvaita — not a single school.
          </p>
        </div>
      </div>
    </section>
  );
}
