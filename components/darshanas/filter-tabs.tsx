'use client'

import type { PairKey } from '@/lib/darshanas/types'
import { PAIR_LABEL, PAIR_COLOR } from '@/lib/darshanas/data'

type FilterValue = 'all' | PairKey

interface FilterTabsProps {
  active: FilterValue
  onChange: (val: FilterValue) => void
}

const TABS: { value: FilterValue; label: string }[] = [
  { value: 'all',                label: 'All six' },
  { value: 'nyaya-vaisheshika',  label: PAIR_LABEL['nyaya-vaisheshika'] },
  { value: 'samkhya-yoga',       label: PAIR_LABEL['samkhya-yoga'] },
  { value: 'mimamsa-vedanta',    label: PAIR_LABEL['mimamsa-vedanta'] },
]

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-8 py-5 bg-sandal-100 border-b border-[rgba(192,120,40,0.16)]">
      {TABS.map(tab => {
        const color = tab.value !== 'all' ? PAIR_COLOR[tab.value as PairKey] : undefined
        const isActive = active === tab.value
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className="text-body-sm px-5 py-2 rounded-full border transition-colors"
            style={
              isActive && color
                ? { backgroundColor: color, borderColor: color, color: 'white' }
                : isActive
                ? { backgroundColor: '#1C1208', borderColor: '#1C1208', color: '#F5EDD8' }
                : { backgroundColor: 'white', borderColor: 'rgba(192,120,40,0.30)', color: '#5A4A3A' }
            }
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
