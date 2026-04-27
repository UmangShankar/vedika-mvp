import type { Metadata } from 'next';
import Link from 'next/link';
import { SCHOOLS, SCHOOL_ORDER, PAIRS, MATRIX } from '@/lib/darshanas/data';

export const metadata: Metadata = {
  title: 'Darśanas — Six Schools of Indian Philosophy',
  description:
    'The six classical āstika darśanas — Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, Vedānta — each a systematic inquiry into reality, knowledge, and liberation.',
};

const PAIR_COLOR: Record<string, string> = {
  nyaya: '#2D7A6F', vaisheshika: '#2D7A6F',
  samkhya: '#5B4A8A', yoga: '#5B4A8A',
  mimamsa: '#C07828', vedanta: '#C07828',
};
const PAIR_BG: Record<string, string> = {
  nyaya: '#E8F5F3', vaisheshika: '#E8F5F3',
  samkhya: '#EFECF8', yoga: '#EFECF8',
  mimamsa: '#FEF7ED', vedanta: '#FEF7ED',
};
const PAIR_BORDER: Record<string, string> = {
  nyaya: '#A8D8D2', vaisheshika: '#A8D8D2',
  samkhya: '#C8B8F0', yoga: '#C8B8F0',
  mimamsa: '#F9D09A', vedanta: '#F9D09A',
};

export default function DarshanasPage() {
  const previewRows = MATRIX.filter((r) =>
    ['Nyāya', 'Sāṃkhya', 'Vedānta'].includes(r.school)
  );

  return (
    <div className="min-h-screen bg-sandal-100">
      {/* ── HERO ── */}
      <div className="bg-sandal-100 px-6 py-10 sm:px-10 lg:px-16">
        <p
          className="mb-3 font-sans text-[9.5px] font-medium uppercase tracking-[0.18em]"
          style={{ color: '#C07828' }}
        >
          Darśana
        </p>
        <h1 className="font-serif text-[2.1rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink mb-4">
          The Six Philosophical Schools
        </h1>
        <p className="font-serif text-[1rem] leading-[1.7] text-ink-light max-w-xl">
          The āstika darśanas — six systematic inquiries into reality, knowledge, and liberation.
          Grouped as three traditional mithuna pairs.
        </p>
      </div>

      {/* ── PAIR SECTIONS ── */}
      <div className="px-6 pb-8 sm:px-10 lg:px-16 space-y-10">
        {PAIRS.map((pair) => {
          const schoolA = SCHOOLS[pair.a];
          const schoolB = SCHOOLS[pair.b];
          const col = PAIR_COLOR[pair.a];
          const bg = PAIR_BG[pair.a];
          const bd = PAIR_BORDER[pair.a];
          return (
            <div key={pair.a}>
              {/* Pair label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: col }} />
                <span
                  className="font-sans text-[9.5px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: col }}
                >
                  {pair.desc} — {pair.label}
                </span>
                <div className="flex-1 h-px" style={{ background: bd }} />
              </div>

              {/* Two school cards side by side */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[schoolA, schoolB].map((school) => (
                  <div
                    key={school.id}
                    className="rounded-lg border bg-white p-5 flex flex-col gap-0"
                    style={{ borderColor: 'rgba(192,120,40,0.18)' }}
                  >
                    {/* Top: glyph + badge */}
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className="font-devanagari text-[1.9rem] leading-none"
                        lang="sa"
                        style={{ color: PAIR_COLOR[school.id], fontFamily: "'Noto Serif Devanagari', serif" }}
                      >
                        {school.glyph}
                      </span>
                      <span
                        className="font-sans text-[9px] font-medium uppercase tracking-[0.1em] px-2 py-0.5 rounded-sm"
                        style={{
                          background: school.badge === 'Nirīśvara' ? '#E8F5F3' : '#FEF7ED',
                          color: school.badge === 'Nirīśvara' ? '#2D7A6F' : '#C07828',
                          border: `0.5px solid ${school.badge === 'Nirīśvara' ? '#A8D8D2' : '#F9D09A'}`,
                        }}
                      >
                        {school.badge}
                      </span>
                    </div>

                    {/* Name + category */}
                    <p className="font-serif text-[1.1rem] font-semibold text-ink mb-0.5">{school.name}</p>
                    <p className="font-sans text-[9.5px] uppercase tracking-[0.07em] text-ink-muted mb-1">
                      {school.category}
                    </p>
                    <p className="font-serif italic text-[0.82rem] text-ink-light mb-2">{school.founder}</p>
                    <p className="font-serif italic text-[0.82rem] mb-3" style={{ color: PAIR_COLOR[school.id] }}>
                      {school.question}
                    </p>
                    <p className="font-serif text-[0.84rem] leading-[1.68] text-ink-light flex-1 mb-3">
                      {school.blurb}
                    </p>

                    {/* Pramāṇas */}
                    <p className="font-sans text-[10.5px] text-ink-muted mb-3">
                      <span className="font-medium text-ink-light">Pramāṇas: </span>
                      {school.pramanas}
                    </p>

                    {/* Callout */}
                    <div
                      className="rounded text-[11px] font-sans leading-[1.6] text-ink-light p-2.5 mb-3"
                      style={{ background: bg, border: `0.5px solid ${bd}` }}
                    >
                      {school.callout}
                    </div>

                    {/* Vedānta sub-school badges */}
                    {school.subSchools && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {school.subSchools.map((sub) => (
                          <span
                            key={sub}
                            className="font-sans text-[10px] font-medium px-2 py-0.5 rounded-sm"
                            style={{ background: '#FEF7ED', border: '0.5px solid #F9D09A', color: '#C07828' }}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Explore link */}
                    <Link
                      href={`/darshanas/${school.id}`}
                      className="font-serif text-[0.82rem] no-underline mt-auto"
                      style={{ color: PAIR_COLOR[school.id] }}
                    >
                      Explore →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── COMPARE TEASER ── */}
      <div className="px-6 py-9 sm:px-10 lg:px-16" style={{ background: '#16100A' }}>
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <p
              className="font-sans text-[9.5px] font-medium uppercase tracking-[0.18em] mb-1.5"
              style={{ color: '#E8A850' }}
            >
              Comparative Philosophy
            </p>
            <h2 className="font-serif text-[1.45rem] font-semibold leading-[1.2]" style={{ color: '#F0E0C0' }}>
              Compare across all six schools
            </h2>
            <p className="font-sans text-[12px] mt-1" style={{ color: '#7A6A50' }}>
              Pramāṇa · Tattva · Ātman · Mokṣa — how each school answers differently
            </p>
          </div>
          <Link
            href="/darshanas/matrix"
            className="font-sans text-[12px] font-medium no-underline px-4 py-2 rounded"
            style={{
              background: 'transparent',
              color: '#E8A850',
              border: '1px solid rgba(200,150,60,0.4)',
            }}
          >
            Open full matrix →
          </Link>
        </div>

        {/* Preview table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[0.75rem]" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['School', 'Pramāṇa', 'Ontology', 'Ātman', 'Mokṣa'].map((h) => (
                  <th
                    key={h}
                    className="text-left px-3 py-2 font-sans font-medium"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#5A4A36',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewRows.map((r, i) => (
                <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-3 py-2.5 font-serif font-semibold" style={{ color: '#E8A850', fontSize: '0.85rem' }}>
                    {r.school}
                  </td>
                  <td className="px-3 py-2.5 font-sans" style={{ color: '#A89060', fontSize: '0.73rem', lineHeight: 1.5 }}>
                    {r.pramanas}
                  </td>
                  <td className="px-3 py-2.5 font-serif" style={{ color: '#8A7858', fontSize: '0.74rem', lineHeight: 1.5 }}>
                    {r.ontology}
                  </td>
                  <td className="px-3 py-2.5 font-serif" style={{ color: '#8A7858', fontSize: '0.74rem', lineHeight: 1.5 }}>
                    {r.atman}
                  </td>
                  <td className="px-3 py-2.5 font-serif" style={{ color: '#8A7858', fontSize: '0.74rem', lineHeight: 1.5 }}>
                    {r.liberation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-sans italic mt-3" style={{ fontSize: '11px', color: '#3A3020' }}>
          Vaiśeṣika · Yoga · Mīmāṃsā shown in full matrix — open to compare all six
        </p>
        <p className="font-sans italic mt-1" style={{ fontSize: '10.5px', color: '#3A3020' }}>
          Note: Vedānta row reflects the range across Advaita, Viśiṣṭādvaita, and Dvaita — not a single school.
        </p>
      </div>
    </div>
  );
}
