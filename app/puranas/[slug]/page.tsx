import type { Metadata } from 'next'
import { EmptyState } from '@/components/content/empty-state'
import {
  BHAGAVATA_TENETS,
  BHAGAVATA_SKANDHAS,
  BHAGAVATA_FIGURES,
  BHAGAVATA_COMMENTATORS,
  BHAGAVATA_VERSE,
} from '@/lib/content/puranas-data'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.slug === 'bhagavata') {
    return {
      title: 'Bhāgavata Purāṇa | Vedika',
      description:
        'Source-grounded study of the Bhāgavata Purāṇa — core philosophy, twelve skandhas, key figures, and commentarial traditions from Śrīdhara Svāmī to Jīva Gosvāmī.',
    }
  }
  return { title: 'Purāṇa | Vedika' }
}

const schoolStyles: Record<string, string> = {
  advaita: 'bg-dharma-light border border-dharma-border text-dharma',
  suddha:  'bg-saffron-50 border border-saffron-200 text-saffron-600',
  gaudi:   'bg-lotus-light border border-lotus-border text-lotus',
}

export default function PuranaDeepDivePage({ params }: Props) {
  if (params.slug !== 'bhagavata') {
    return (
      <div className="mx-auto max-w-content px-4 py-12">
        <EmptyState
          title="Deep dive coming soon"
          message="This Purāṇa hub is being prepared. Check back soon."
        />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-full-w">

      {/* ── Zone 1: Hero ── */}
      <div className="bg-ink px-8 py-14 relative overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 font-devanagari text-[160px] text-saffron-500/[0.07]
                     leading-none pointer-events-none select-none"
        >भा</span>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.10em] uppercase px-3 py-1 rounded-full
                             bg-saffron-100 text-saffron-600">
              Sattva guṇa
            </span>
            <span className="text-[10px] tracking-[0.06em] px-3 py-1 rounded-full
                             bg-saffron-500 text-white">
              Hub · Deep dive
            </span>
          </div>
          <p className="font-devanagari text-[22px] text-saffron-300 mb-2 leading-none">
            श्रीमद्भागवतम्
          </p>
          <h1 className="font-serif text-display text-sandal-50 mb-3 leading-tight">
            Bhāgavata Purāṇa
          </h1>
          <p className="text-body-sm text-ink-faint max-w-[480px] mb-6">
            The most studied of the eighteen Mahāpurāṇas — and the theological
            foundation of the Bhakti movement across India.
          </p>
          <div className="flex flex-wrap gap-2">
            {['18,000 ślokas','12 skandhas','Vaiṣṇava · Sattva',
              '~9th–10th century CE','Attr. Veda Vyāsa'].map(b => (
              <span key={b} className="text-[11px] px-2.5 py-1 border border-saffron-500/40
                                        rounded-sm text-saffron-200 bg-saffron-500/10">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Zone 2: Stats strip ── */}
      <div className="grid grid-cols-4 divide-x divide-[rgba(192,120,40,0.18)]
                      border-b border-[rgba(192,120,40,0.18)] bg-sandal-50">
        {[
          { val: '18,000', lbl: 'ślokas' },
          { val: '12',     lbl: 'skandhas (cantos)' },
          { val: '335',    lbl: 'chapters' },
          { val: '10th',   lbl: 'skandha — Kṛṣṇa\'s life' },
        ].map(s => (
          <div key={s.lbl} className="py-4 px-5">
            <div className="text-[22px] font-bold text-ink tabular-nums">{s.val}</div>
            <div className="text-caption text-ink-faint mt-0.5">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── Zone 3: Core philosophy ── */}
      <div className="px-8 py-12 bg-sandal-100">
        <p className="text-overline text-saffron-500 mb-2">Core philosophy</p>
        <h2 className="font-serif text-heading text-ink mb-8">Six foundational doctrines</h2>
        <div className="grid grid-cols-3 gap-4">
          {BHAGAVATA_TENETS.map(t => (
            <div key={t.sanskrit}
                 className="bg-white border border-[rgba(192,120,40,0.18)] rounded-lg
                            p-5 text-center flex flex-col gap-2">
              <span className="font-devanagari text-[40px] text-saffron-400 leading-none block">
                {t.devanagari}
              </span>
              <div className="text-subheading font-semibold text-ink">{t.sanskrit}</div>
              <div className="text-caption text-ink-faint italic">{t.english}</div>
              <p className="text-body-sm text-ink-muted leading-relaxed">{t.definition}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-[rgba(192,120,40,0.16)]" />

      {/* ── Zone 4: Skandhas ── */}
      <div className="px-8 py-12 bg-white">
        <p className="text-overline text-saffron-500 mb-2">Internal structure</p>
        <h2 className="font-serif text-heading text-ink mb-8">The twelve skandhas</h2>
        <div className="grid grid-cols-4 gap-3">
          {BHAGAVATA_SKANDHAS.map(s => (
            <div key={s.number}
                 className={[
                   'rounded-lg p-4',
                   s.isHighlight
                     ? 'border-2 border-saffron-500 bg-saffron-50'
                     : 'border border-[rgba(192,120,40,0.16)] bg-white',
                 ].join(' ')}>
              <span className={[
                'text-[22px] font-bold block mb-2 leading-none',
                s.isHighlight ? 'text-saffron-500' : 'text-sandal-300',
              ].join(' ')}>
                {s.number}
              </span>
              <div className={[
                'text-[13px] font-semibold mb-1 leading-tight',
                s.isHighlight ? 'text-saffron-600' : 'text-ink-light',
              ].join(' ')}>
                {s.name}
              </div>
              <p className="text-caption text-ink-muted leading-snug">{s.desc}</p>
              {s.isHighlight && s.highlightLabel && (
                <span className="text-overline text-saffron-500 mt-2 block">
                  {s.highlightLabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-[rgba(192,120,40,0.16)]" />

      {/* ── Zone 5: Key figures ── */}
      <div className="px-8 py-12 bg-sandal-100">
        <p className="text-overline text-saffron-500 mb-2">Key figures</p>
        <h2 className="font-serif text-heading text-ink mb-8">Central devatās and narrators</h2>
        <div className="grid grid-cols-3 gap-4">
          {BHAGAVATA_FIGURES.map(f => (
            <div key={f.name}
                 className="bg-white border border-[rgba(192,120,40,0.18)] rounded-xl
                            p-5 text-center flex flex-col gap-2">
              <span className="font-devanagari text-[32px] text-saffron-400 leading-none block">
                {f.glyph}
              </span>
              <div className="text-subheading font-semibold text-ink">{f.name}</div>
              <p className="text-caption text-ink-muted leading-relaxed">{f.role}</p>
              <span className="text-caption text-ink-faint italic">{f.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-[rgba(192,120,40,0.16)]" />

      {/* ── Zone 6: Commentators ── */}
      <div className="px-8 py-12 bg-white">
        <p className="text-overline text-saffron-500 mb-2">Commentarial traditions</p>
        <h2 className="font-serif text-heading text-ink mb-8">Major interpreters</h2>
        <div className="flex flex-col divide-y divide-[rgba(192,120,40,0.10)]">
          {BHAGAVATA_COMMENTATORS.map(c => (
            <div key={c.name} className="grid grid-cols-[160px_1fr] py-5 gap-5">
              <div className="pr-5 border-r border-[rgba(192,120,40,0.12)]">
                <div className="text-subheading font-semibold text-ink leading-tight mb-1">
                  {c.name}
                </div>
                <div className="text-caption text-ink-faint">{c.period}</div>
              </div>
              <div className="pl-2">
                <span className={`text-caption px-2.5 py-1 rounded-full inline-block mb-3
                                  ${schoolStyles[c.schoolStyle]}`}>
                  {c.school}
                </span>
                <p className="text-body-sm text-ink-muted leading-relaxed mb-2">{c.text}</p>
                <p className="text-caption text-ink-faint italic">{c.workTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Zone 7: Opening verse ── */}
      <div className="bg-ink px-8 py-12 relative overflow-hidden">
        <span aria-hidden="true"
              className="absolute right-4 bottom-0 font-devanagari text-[100px]
                         text-saffron-500/[0.07] leading-none pointer-events-none select-none">
          जन्म
        </span>
        <div className="relative z-10">
          <p className="text-overline text-saffron-400 mb-5">{BHAGAVATA_VERSE.reference}</p>
          <p className="font-devanagari text-[18px] text-saffron-200 leading-[2.1]
                        whitespace-pre-line mb-5">
            {BHAGAVATA_VERSE.devanagari}
          </p>
          <p className="font-serif text-[16px] italic text-sandal-200 leading-relaxed
                        max-w-[520px] mb-3">
            {BHAGAVATA_VERSE.translation}
          </p>
          <p className="text-caption text-ink-faint tracking-wide">
            {BHAGAVATA_VERSE.source}
          </p>
        </div>
      </div>

      {/* ── Zone 8: Sources ── */}
      <div className="bg-sandal-200 border-t border-[rgba(192,120,40,0.25)]
                      px-8 py-5 flex flex-wrap items-center gap-3">
        <span className="text-overline text-ink-faint mr-2">Sources</span>
        {[
          'Gita Press — Śrīmad Bhāgavatam (Hindi)',
          'Bryant, E.F. — Krishna: The Beautiful Legend (Penguin, 2003)',
          'Prabhupāda — Śrīmad Bhāgavatam (BBT, 1972)',
          'Tagare, G.V. — Ancient Indian Tradition series (Motilal)',
        ].map(s => (
          <span key={s} className="source-badge">{s}</span>
        ))}
      </div>

    </div>
  )
}
