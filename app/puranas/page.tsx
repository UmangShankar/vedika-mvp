'use client'

import { useState } from 'react'
import type { Guna } from '@/lib/content/puranas-data'
import { PURANAS, GUNA_SECTIONS } from '@/lib/content/puranas-data'
import { GunaSection } from '@/components/content/guna-section'
import { PuranaCard } from '@/components/content/purana-card'

const FILTER_LABELS: Record<'all' | Guna, string> = {
  all:    'All 18',
  sattva: 'Sattva · Vaiṣṇava',
  rajas:  'Rajas · Brahmic',
  tamas:  'Tamas · Śaiva',
}

export default function PuranasPage() {
  const [filter, setFilter] = useState<'all' | Guna>('all')

  return (
    <div className="mx-auto max-w-full-w">

      {/* Zone 1 — Page header */}
      <div className="px-8 py-10 bg-sandal-100 border-b border-[rgba(192,120,40,0.20)]">
        <p className="text-overline text-saffron-500 mb-2">PURĀṆA CANON · SMṚTI · 18 MAHĀPURĀṆAS</p>
        <h1 className="font-serif text-display text-ink mb-3">The Eighteen Mahāpurāṇas</h1>
        <p className="text-body text-ink-muted max-w-[560px] mb-6">
          All eighteen texts given proper treatment — grouped by the guṇa classification of the
          Padma Purāṇa. Each carries a depth indicator. No text is buried in a footnote.
        </p>

        {/* Tier key */}
        <div className="bg-white border border-[rgba(192,120,40,0.18)] rounded-lg px-5 py-4
                        flex flex-wrap items-center gap-x-6 gap-y-2 max-w-[640px]">
          <span className="text-overline text-ink-faint">DEPTH</span>
          <div className="flex items-center gap-2 text-body-sm text-ink-light">
            <span className="w-2 h-2 rounded-sm bg-saffron-500 flex-shrink-0" />
            Hub — full interpretive page, commentarial traditions
          </div>
          <div className="flex items-center gap-2 text-body-sm text-ink-light">
            <span className="w-2 h-2 rounded-full border-2 border-dharma flex-shrink-0" />
            Overview — source-grounded page, key themes
          </div>
          <div className="flex items-center gap-2 text-body-sm text-ink-light">
            <span className="w-2 h-2 rounded-full border-2 border-[rgba(192,120,40,0.40)] flex-shrink-0" />
            Collection — grouped thematically with related texts
          </div>
        </div>
      </div>

      {/* Zone 2 — Filter bar */}
      <div className="px-8 pt-6 pb-2 bg-sandal-100 flex flex-wrap gap-2">
        {(Object.keys(FILTER_LABELS) as Array<'all' | Guna>).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={[
              'text-body-sm px-5 py-2 rounded-full border transition-colors',
              filter === f && f === 'all'
                ? 'bg-ink text-sandal-50 border-ink'
                : filter === f && f === 'sattva'
                ? 'bg-saffron-500 text-white border-saffron-500'
                : filter === f && f === 'rajas'
                ? 'bg-dharma text-white border-dharma'
                : filter === f && f === 'tamas'
                ? 'bg-ink-muted text-white border-ink-muted'
                : 'bg-white text-ink-muted border-[rgba(192,120,40,0.30)] hover:border-[rgba(192,120,40,0.60)] hover:text-ink-light',
            ].join(' ')}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </div>
      <p className="px-8 pb-4 bg-sandal-100 text-caption text-ink-faint">
        {filter === 'all'
          ? 'Showing all 18 Mahāpurāṇas'
          : `Showing 6 ${filter} Purāṇas`}
      </p>

      {/* Zone 3 — Guṇa sections */}
      {GUNA_SECTIONS.map((section, i) => (
        (filter === 'all' || filter === section.guna) && (
          <div key={section.guna}>
            {i > 0 && <div className="h-px bg-[rgba(192,120,40,0.16)]" />}
            <GunaSection section={section}>
              {PURANAS
                .filter(p => p.guna === section.guna)
                .map(p => <PuranaCard key={p.slug} purana={p} />)}
            </GunaSection>
          </div>
        )
      ))}

      {/* Zone 4 — Canon note */}
      <div className="h-px bg-[rgba(192,120,40,0.16)]" />
      <p className="px-8 py-5 text-caption text-ink-faint leading-relaxed">
        Guṇa classification per Padma Purāṇa, Uttara Khaṇḍa 236.18–21 ·
        Verse counts approximate; critical editions vary ·
        Tamas label reflects Śiva&apos;s domain and carries no qualitative judgement ·
        Upapurāṇas (18 minor texts incl. Devī Bhāgavata, Gaṇeśa, Nṛsiṃha) treated separately ·
        Hub pages in Sprint 1: Bhāgavata, Viṣṇu, Śiva, Mārkaṇḍeya
      </p>
    </div>
  )
}
