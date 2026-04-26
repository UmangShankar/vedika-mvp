import type { MatrixRow } from '@/lib/darshanas/types'
import { SCHOOLS, SCHOOL_ORDER, PAIR_COLOR } from '@/lib/darshanas/data'

interface MatrixTableProps {
  rows: MatrixRow[]
  highlightSlug?: string
}

const SCHOOL_KEYS = SCHOOL_ORDER

export function MatrixTable({ rows, highlightSlug }: MatrixTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left" style={{ minWidth: '800px' }}>
        <thead>
          <tr className="bg-sandal-100 border-b border-[rgba(192,120,40,0.20)]">
            <th className="py-3 px-4 text-caption text-ink-faint font-medium w-[140px]">Dimension</th>
            {SCHOOL_KEYS.map(slug => {
              const school = SCHOOLS.find(s => s.slug === slug)!
              const color = PAIR_COLOR[school.pair]
              const isHighlight = slug === highlightSlug
              return (
                <th
                  key={slug}
                  className="py-3 px-4 text-caption font-semibold"
                  style={{
                    color: isHighlight ? color : '#5A4A3A',
                    borderBottom: isHighlight ? `2px solid ${color}` : undefined,
                  }}
                >
                  {school.name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.topic}
              className={i % 2 === 0 ? 'bg-white' : 'bg-sandal-50'}
            >
              <td className="py-4 px-4 text-caption font-semibold text-ink-muted align-top border-r border-[rgba(192,120,40,0.10)]">
                {row.topic}
              </td>
              {SCHOOL_KEYS.map(slug => {
                const val = row[slug as keyof MatrixRow]
                const school = SCHOOLS.find(s => s.slug === slug)!
                const color = PAIR_COLOR[school.pair]
                const isHighlight = slug === highlightSlug
                return (
                  <td
                    key={slug}
                    className="py-4 px-4 text-caption text-ink-muted align-top leading-relaxed"
                    style={isHighlight ? { backgroundColor: `${color}08` } : undefined}
                  >
                    {val === '—' ? (
                      <span className="text-ink-faint/40">—</span>
                    ) : val}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
