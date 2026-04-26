import type { Metadata } from 'next'
import { MATRIX } from '@/lib/darshanas/data'
import { Breadcrumb } from '@/components/darshanas/breadcrumb'
import { MatrixTable } from '@/components/darshanas/matrix-table'
import { PairSummaryCards } from '@/components/darshanas/pair-summary-cards'

export const metadata: Metadata = {
  title: 'Comparison Matrix — Darśanas | Vedika',
  description: 'Eight dimensions compared across all six classical schools of Indian philosophy.',
}

export default function DarshanasMatrixPage() {
  return (
    <div className="mx-auto max-w-full-w">

      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Darśanas', href: '/darshanas' },
        { label: 'Comparison Matrix' },
      ]} />

      {/* Header */}
      <div className="bg-[#1C1208] px-8 py-12 relative overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 font-devanagari text-[140px] text-saffron-500/[0.05]
                     leading-none pointer-events-none select-none"
        >
          तुलना
        </span>
        <div className="relative z-10 max-w-wide mx-auto">
          <p className="text-overline text-saffron-400 mb-3 uppercase tracking-widest">
            All six schools · Eight dimensions
          </p>
          <h1 className="font-serif text-display text-sandal-50 mb-3 leading-tight">
            The Comparison Matrix
          </h1>
          <p className="text-body text-sandal-200/70 max-w-[520px]">
            Ultimate reality, theory of knowledge, the self, liberation, Vedic authority,
            and more — compared side-by-side across the ṣaḍ darśanas.
          </p>
        </div>
      </div>

      {/* Matrix */}
      <div className="px-8 py-10 bg-white overflow-x-auto">
        <MatrixTable rows={MATRIX} />
      </div>

      <div className="h-px bg-[rgba(192,120,40,0.16)]" />

      {/* Pair summaries */}
      <div>
        <div className="px-8 pt-10 pb-2 bg-sandal-100">
          <p className="text-overline text-saffron-500 mb-1 uppercase tracking-widest">The three pairs</p>
          <h2 className="font-serif text-heading text-ink mb-2">Natural intellectual pairings</h2>
          <p className="text-body-sm text-ink-muted max-w-[480px]">
            The six schools form three complementary pairs — each pair shares foundational commitments
            while diverging on method or metaphysics.
          </p>
        </div>
        <PairSummaryCards />
      </div>

      {/* Sources */}
      <div className="bg-sandal-200 border-t border-[rgba(192,120,40,0.25)] px-8 py-5 flex flex-wrap items-center gap-3">
        <span className="text-overline text-ink-faint mr-2">Sources</span>
        {[
          'Dasgupta, S.N. — A History of Indian Philosophy (Cambridge, 1922–55)',
          'Hiriyanna, M. — Outlines of Indian Philosophy (Allen & Unwin, 1932)',
          'Potter, K.H. — Encyclopedia of Indian Philosophies (Motilal, 1970–)',
        ].map(s => (
          <span key={s} className="source-badge">{s}</span>
        ))}
      </div>

    </div>
  )
}
