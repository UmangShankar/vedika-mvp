import Link from 'next/link'
import type { PairKey, SchoolSlug } from '@/lib/darshanas/types'
import { PAIR_MAP, PAIR_COLOR, PAIR_LABEL, SCHOOLS } from '@/lib/darshanas/data'

interface PairDialogueProps {
  currentSlug: SchoolSlug
  pairKey: PairKey
  pairNote: string
}

export function PairDialogue({ currentSlug, pairKey, pairNote }: PairDialogueProps) {
  const [slugA, slugB] = PAIR_MAP[pairKey]
  const partner = currentSlug === slugA ? slugB : slugA
  const partnerSchool = SCHOOLS.find(s => s.slug === partner)
  const color = PAIR_COLOR[pairKey]

  if (!partnerSchool) return null

  return (
    <div
      className="rounded-xl border p-6 flex flex-col gap-4"
      style={{ borderColor: `${color}30`, backgroundColor: `${color}08` }}
    >
      <div className="flex items-center gap-2">
        <div className="w-1 h-6 rounded-full" style={{ backgroundColor: color }} />
        <p className="text-overline uppercase tracking-widest" style={{ color }}>
          The Pair — {PAIR_LABEL[pairKey]}
        </p>
      </div>
      <p className="text-body-sm text-ink-muted leading-relaxed">{pairNote}</p>
      <Link
        href={`/darshanas/${partner}`}
        className="self-start text-body-sm font-medium no-underline px-4 py-2 rounded-full border transition-colors"
        style={{ borderColor: `${color}50`, color }}
      >
        Explore {partnerSchool.name} →
      </Link>
    </div>
  )
}
