import Link from 'next/link'
import type { School } from '@/lib/darshanas/types'
import { PAIR_COLOR } from '@/lib/darshanas/data'

interface SchoolCardProps {
  school: School
}

export function SchoolCard({ school }: SchoolCardProps) {
  const color = PAIR_COLOR[school.pair]
  return (
    <Link
      href={`/darshanas/${school.slug}`}
      className="no-underline flex flex-col rounded-xl border bg-white overflow-hidden
                 shadow-card hover:shadow-card-md transition-all group"
      style={{ borderColor: `${color}30` }}
    >
      {/* Pair colour bar */}
      <div className="h-1 w-full" style={{ backgroundColor: color }} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Devanagari + name */}
        <div>
          <span
            className="font-devanagari text-[32px] leading-none block mb-1"
            style={{ color }}
          >
            {school.devanagari}
          </span>
          <h3 className="font-serif text-subheading font-semibold text-ink leading-tight">
            {school.name}
          </h3>
          <p className="text-caption text-ink-faint mt-0.5">{school.tagline}</p>
        </div>

        {/* Sūtra teaser */}
        <p className="text-caption italic text-ink-muted leading-snug line-clamp-2">
          "{school.sutraText}"
        </p>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span
            className="text-caption px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {school.tenets.length} tenets
          </span>
          <span
            className="text-body-sm font-medium transition-colors group-hover:underline"
            style={{ color }}
          >
            Explore →
          </span>
        </div>
      </div>
    </Link>
  )
}
