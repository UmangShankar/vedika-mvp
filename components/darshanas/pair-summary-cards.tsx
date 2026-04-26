import Link from 'next/link'
import { PAIRS, PAIR_MAP, PAIR_COLOR, PAIR_LABEL, SCHOOLS } from '@/lib/darshanas/data'

export function PairSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-10 bg-sandal-100">
      {PAIRS.map(pairKey => {
        const [slugA, slugB] = PAIR_MAP[pairKey]
        const schoolA = SCHOOLS.find(s => s.slug === slugA)!
        const schoolB = SCHOOLS.find(s => s.slug === slugB)!
        const color = PAIR_COLOR[pairKey]
        return (
          <div
            key={pairKey}
            className="bg-white rounded-xl border overflow-hidden"
            style={{ borderColor: `${color}30` }}
          >
            <div className="h-1 w-full" style={{ backgroundColor: color }} />
            <div className="p-5">
              <p
                className="text-overline uppercase tracking-widest mb-3"
                style={{ color }}
              >
                {PAIR_LABEL[pairKey]}
              </p>
              <div className="flex gap-3 mb-4">
                {[schoolA, schoolB].map(school => (
                  <Link
                    key={school.slug}
                    href={`/darshanas/${school.slug}`}
                    className="flex-1 text-center py-2 rounded-lg border text-body-sm font-medium no-underline transition-colors"
                    style={{ borderColor: `${color}40`, color }}
                  >
                    {school.name}
                  </Link>
                ))}
              </div>
              <p className="text-caption text-ink-muted leading-snug">
                {schoolA.pairNote}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
