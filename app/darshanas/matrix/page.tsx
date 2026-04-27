import type { Metadata } from 'next';
import Link from 'next/link';
import { MATRIX, PAIRS, SCHOOLS } from '@/lib/darshanas/data';

export const metadata: Metadata = {
  title: 'Comparative Matrix — All Six Schools | Vedika Darśanas',
  description:
    'Side-by-side comparison of Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, and Vedānta across pramāṇas, ontology, ātman, and liberation.',
};

const SCHOOL_COLOR: Record<string, string> = {
  Nyāya: '#2D7A6F', Vaiśeṣika: '#2D7A6F',
  Sāṃkhya: '#5B4A8A', Yoga: '#5B4A8A',
  Mīmāṃsā: '#C07828',
  Advaita: '#C07828', Viśiṣṭādvaita: '#C07828', Dvaita: '#C07828',
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

export default function MatrixPage() {
  return (
    <div className="min-h-screen bg-sandal-100">
      {/* ── BREADCRUMB ── */}
      <div
        className="flex items-center gap-2 px-6 py-3 sm:px-10"
        style={{ background: '#F5EFE5', borderBottom: '1px solid rgba(192,120,40,0.15)' }}
      >
        <Link href="/darshanas" className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink">
          Darśanas
        </Link>
        <span className="text-sandal-300 text-xs">›</span>
        <span className="font-serif text-[13px] text-ink">Comparative matrix</span>
      </div>

      <div className="px-6 py-8 sm:px-10 lg:px-14">
        {/* ── HEADER ── */}
        <p
          className="font-sans uppercase font-medium mb-2"
          style={{ fontSize: '9.5px', letterSpacing: '0.18em', color: '#C07828' }}
        >
          Comparative Philosophy
        </p>
        <h1 className="font-serif text-[1.8rem] font-semibold text-ink mb-3 leading-[1.15]">
          All six schools — comparative matrix
        </h1>
        <p className="font-serif text-[0.9rem] text-ink-light leading-[1.65] mb-8 max-w-2xl">
          Each column represents a fundamental question that divides the tradition. Read across a row
          to see how one school answers all four questions; read down a column to see where the schools
          converge and diverge.
        </p>

        {/* ── MATRIX TABLE ── */}
        <div className="overflow-x-auto mb-10 -webkit-overflow-scrolling-touch">
          <table
            className="w-full"
            style={{ borderCollapse: 'collapse', fontSize: '0.78rem', tableLayout: 'fixed', minWidth: '700px' }}
          >
            <colgroup>
              <col style={{ width: '13%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '23%' }} />
              <col style={{ width: '23%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '7%' }} />
            </colgroup>
            <thead>
              <tr style={{ background: '#EDE0CC' }}>
                {['School', 'Pramāṇas', 'Ontology', 'Ātman', 'Liberation', ''].map((h) => (
                  <th
                    key={h}
                    className="text-left font-sans font-medium"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      color: '#7A6A56',
                      padding: '10px 12px',
                      borderBottom: '1px solid rgba(192,120,40,0.2)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((r, i) => {
                const col = SCHOOL_COLOR[r.school] ?? '#C07828';
                return (
                  <tr
                    key={i}
                    style={{
                      borderTop: '1px solid rgba(192,120,40,0.12)',
                      background: i % 2 === 0 ? '#fff' : '#FDFAF6',
                    }}
                  >
                    <td
                      className="font-serif font-semibold"
                      style={{ padding: '11px 12px', fontSize: '0.85rem', color: col }}
                    >
                      {r.school}
                    </td>
                    <td
                      className="font-sans text-ink-muted leading-[1.5]"
                      style={{ padding: '11px 12px', fontSize: '0.72rem' }}
                    >
                      {r.pramanas}
                    </td>
                    <td
                      className="font-serif text-ink-light leading-[1.55]"
                      style={{ padding: '11px 12px', fontSize: '0.76rem' }}
                    >
                      {r.ontology}
                    </td>
                    <td
                      className="font-serif text-ink-light leading-[1.55]"
                      style={{ padding: '11px 12px', fontSize: '0.76rem' }}
                    >
                      {r.atman}
                    </td>
                    <td
                      className="font-serif text-ink-light leading-[1.55]"
                      style={{ padding: '11px 12px', fontSize: '0.76rem' }}
                    >
                      {r.liberation}
                    </td>
                    <td style={{ padding: '11px 12px' }}>
                      <Link
                        href={`/darshanas/${r.schoolId}`}
                        className="font-serif no-underline whitespace-nowrap"
                        style={{ fontSize: '0.76rem', color: col }}
                      >
                        Deep dive →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="font-sans text-[11px] text-ink-muted mb-2">
          Advaita, Viśiṣṭādvaita, and Dvaita all link to the Vedānta deep dive, which covers all three sub-schools.
        </p>

        {/* ── DIVIDER ── */}
        <div className="h-px my-8" style={{ background: 'rgba(192,120,40,0.18)' }} />

        {/* ── PAIR SUMMARY CARDS ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-10">
          {PAIRS.map((p) => {
            const col = PAIR_COLOR[p.a];
            const bg = PAIR_BG[p.a];
            const bd = PAIR_BORDER[p.a];
            const sA = SCHOOLS[p.a];
            const sB = SCHOOLS[p.b];
            return (
              <div
                key={p.a}
                className="rounded-md p-4"
                style={{ background: bg, border: `1px solid ${bd}` }}
              >
                <p
                  className="font-sans font-medium uppercase mb-2"
                  style={{ fontSize: '9.5px', letterSpacing: '0.08em', color: col }}
                >
                  {p.desc}
                </p>
                <p className="font-serif text-[0.82rem] text-ink-light leading-[1.6] mb-3">
                  {p.label} share fundamental metaphysical commitments. Their differences are methodological,
                  not ontological.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Link
                    href={`/darshanas/${p.a}`}
                    className="font-sans text-[11px] no-underline px-2.5 py-1 rounded-sm"
                    style={{ background: 'none', border: `1px solid ${bd}`, color: col }}
                  >
                    {sA.name}
                  </Link>
                  <Link
                    href={`/darshanas/${p.b}`}
                    className="font-sans text-[11px] no-underline px-2.5 py-1 rounded-sm"
                    style={{ background: 'none', border: `1px solid ${bd}`, color: col }}
                  >
                    {sB.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BACK ── */}
        <Link
          href="/darshanas"
          className="font-sans text-[0.78rem] no-underline text-ink-muted"
        >
          ← Back to Darśanas index
        </Link>
      </div>
    </div>
  );
}
