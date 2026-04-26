'use client'

import Link from 'next/link'
import type { SchoolSlug } from '@/lib/darshanas/types'
import { SCHOOLS, PAIR_COLOR } from '@/lib/darshanas/data'

interface SchoolNavProps {
  current: SchoolSlug
}

export function SchoolNav({ current }: SchoolNavProps) {
  return (
    <div className="flex flex-wrap gap-1 px-8 py-3 bg-sandal-100 border-b border-[rgba(192,120,40,0.16)]">
      {SCHOOLS.map(school => {
        const isActive = school.slug === current
        const color = PAIR_COLOR[school.pair]
        return (
          <Link
            key={school.slug}
            href={`/darshanas/${school.slug}`}
            className="text-body-sm px-4 py-1.5 rounded-full border no-underline transition-colors"
            style={
              isActive
                ? { backgroundColor: color, borderColor: color, color: 'white' }
                : { backgroundColor: 'white', borderColor: 'rgba(192,120,40,0.25)', color: '#5A4A3A' }
            }
          >
            {school.name}
          </Link>
        )
      })}
    </div>
  )
}
