'use client'

import { useState } from 'react'
import type { PairKey } from '@/lib/darshanas/types'
import { SCHOOLS, PAIRS, PAIR_MAP, PAIR_COLOR, PAIR_LABEL } from '@/lib/darshanas/data'
import { IndexHero } from '@/components/darshanas/index-hero'
import { FilterTabs } from '@/components/darshanas/filter-tabs'
import { SchoolCard } from '@/components/darshanas/school-card'
import { CompareTeaser } from '@/components/darshanas/compare-teaser'

type FilterValue = 'all' | PairKey

export default function DarshanasPage() {
  const [filter, setFilter] = useState<FilterValue>('all')

  const visibleSchools = filter === 'all'
    ? SCHOOLS
    : SCHOOLS.filter(s => s.pair === filter)

  return (
    <div className="mx-auto max-w-full-w">
      <IndexHero />
      <FilterTabs active={filter} onChange={setFilter} />

      {/* School grid */}
      <div className="px-8 py-10 bg-sandal-100">
        {filter === 'all' ? (
          /* Pair-grouped layout */
          <div className="flex flex-col gap-10">
            {PAIRS.map(pairKey => {
              const [slugA, slugB] = PAIR_MAP[pairKey]
              const schools = SCHOOLS.filter(s => s.slug === slugA || s.slug === slugB)
              const color = PAIR_COLOR[pairKey]
              return (
                <div key={pairKey}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-5 rounded-full" style={{ backgroundColor: color }} />
                    <p className="text-overline uppercase tracking-widest" style={{ color }}>
                      {PAIR_LABEL[pairKey]}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {schools.map(s => <SchoolCard key={s.slug} school={s} />)}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visibleSchools.map(s => <SchoolCard key={s.slug} school={s} />)}
          </div>
        )}
      </div>

      <CompareTeaser />
    </div>
  )
}
