import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SCHOOLS, PAIR_COLOR, PAIR_LABEL } from '@/lib/darshanas/data'
import type { SchoolSlug } from '@/lib/darshanas/types'
import { Breadcrumb } from '@/components/darshanas/breadcrumb'
import { SchoolNav } from '@/components/darshanas/school-nav'
import { SutraBlock } from '@/components/darshanas/sutra-block'
import { IdentityStrip } from '@/components/darshanas/identity-strip'
import { TenetCard } from '@/components/darshanas/tenet-card'
import { CommentaryTable } from '@/components/darshanas/commentary-table'
import { PairDialogue } from '@/components/darshanas/pair-dialogue'

type Props = { params: { slug: string } }

const VALID_SLUGS: SchoolSlug[] = [
  'nyaya', 'vaisheshika', 'samkhya', 'yoga', 'mimamsa', 'vedanta',
]

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const school = SCHOOLS.find(s => s.slug === params.slug)
  if (!school) return { title: 'Darśanas | Vedika' }
  return {
    title: `${school.name} — Darśanas | Vedika`,
    description: school.tagline,
  }
}

export default function DarshanaDeepDivePage({ params }: Props) {
  const school = SCHOOLS.find(s => s.slug === params.slug)
  if (!school) notFound()

  const color = PAIR_COLOR[school.pair]
  const pairLabel = PAIR_LABEL[school.pair]

  return (
    <div className="mx-auto max-w-full-w">

      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Darśanas', href: '/darshanas' },
        { label: school.name },
      ]} />

      {/* School nav tabs */}
      <SchoolNav current={school.slug as SchoolSlug} />

      {/* Hero */}
      <div className="bg-[#1C1208] px-8 py-14 relative overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 font-devanagari text-[160px] leading-none
                     pointer-events-none select-none"
          style={{ color: `${color}10` }}
        >
          {school.devanagari}
        </span>
        <div className="relative z-10 max-w-wide mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-[10px] tracking-[0.10em] uppercase px-3 py-1 rounded-full"
              style={{ backgroundColor: `${color}25`, color }}
            >
              {pairLabel}
            </span>
          </div>
          <p
            className="font-devanagari text-[24px] mb-2 leading-none"
            style={{ color }}
          >
            {school.devanagari}
          </p>
          <h1 className="font-serif text-display text-sandal-50 mb-3 leading-tight">
            {school.name}
          </h1>
          <p className="text-body text-sandal-200/70 max-w-[520px]">
            {school.tagline}
          </p>
        </div>
      </div>

      {/* Sūtra block */}
      <SutraBlock
        devanagari={school.sutraDevanagari}
        transliteration={school.sutraText}
        source={school.sutraSource}
        color={color}
      />

      {/* Identity strip */}
      <IdentityStrip
        identity={school.identity}
        epistemology={school.epistemology}
        ontology={school.ontology}
        soteriology={school.soteriology}
        color={color}
      />

      {/* Tenets */}
      <div className="px-8 py-12 bg-white">
        <p className="text-overline uppercase tracking-widest mb-2" style={{ color }}>
          Core tenets
        </p>
        <h2 className="font-serif text-heading text-ink mb-8">
          Foundational doctrines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {school.tenets.map((tenet, i) => (
            <TenetCard key={tenet.label} tenet={tenet} index={i} color={color} />
          ))}
        </div>
      </div>

      <div className="h-px bg-[rgba(192,120,40,0.16)]" />

      {/* Commentators */}
      <div className="px-8 py-12 bg-sandal-100">
        <p className="text-overline uppercase tracking-widest mb-2" style={{ color }}>
          Commentarial tradition
        </p>
        <h2 className="font-serif text-heading text-ink mb-8">Major interpreters</h2>
        <CommentaryTable commentators={school.commentators} color={color} />
      </div>

      <div className="h-px bg-[rgba(192,120,40,0.16)]" />

      {/* Pair dialogue */}
      <div className="px-8 py-12 bg-white">
        <p className="text-overline uppercase tracking-widest mb-2" style={{ color }}>
          The paired school
        </p>
        <h2 className="font-serif text-heading text-ink mb-6">Intellectual kinship</h2>
        <PairDialogue
          currentSlug={school.slug}
          pairKey={school.pair}
          pairNote={school.pairNote}
        />
      </div>

      {/* Sources bar */}
      <div className="bg-sandal-200 border-t border-[rgba(192,120,40,0.25)] px-8 py-5 flex flex-wrap items-center gap-3">
        <span className="text-overline text-ink-faint mr-2">Sources</span>
        {[
          'Dasgupta, S.N. — A History of Indian Philosophy (Cambridge, 1922–55)',
          'Hiriyanna, M. — Outlines of Indian Philosophy (Allen & Unwin, 1932)',
          'Potter, K.H. — Encyclopedia of Indian Philosophies (Motilal, 1970–)',
          'Radhakrishnan & Moore — A Sourcebook in Indian Philosophy (Princeton, 1957)',
        ].map(s => (
          <span key={s} className="source-badge">{s}</span>
        ))}
      </div>

    </div>
  )
}
