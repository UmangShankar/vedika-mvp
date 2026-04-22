import Link from 'next/link';
import { PortableContent } from '@/components/content/portable-content';
import { RelatedReadingGrid } from '@/components/content/related-reading-grid';
import type { Rishi } from '@/lib/sanity/types';

const VEDA_COLOUR: Record<string, string> = {
  rigveda: '#C07828',
  samaveda: '#2D7A6F',
  yajurveda: '#6B3FA0',
  atharvaveda: '#C0392B',
  multiple: '#C07828',
};

const VEDA_LIGHT: Record<string, string> = {
  rigveda: '#FEF3E2',
  samaveda: '#E8F5F3',
  yajurveda: '#F3EEF9',
  atharvaveda: '#FBEAEA',
  multiple: '#FEF3E2',
};

const VEDA_LABEL: Record<string, string> = {
  rigveda: 'Rigveda',
  samaveda: 'Samaveda',
  yajurveda: 'Yajurveda',
  atharvaveda: 'Atharvaveda',
  multiple: 'Multiple Vedas',
};

function vedaColor(assoc?: string) {
  return VEDA_COLOUR[assoc ?? 'rigveda'] ?? '#C07828';
}
function vedaLight(assoc?: string) {
  return VEDA_LIGHT[assoc ?? 'rigveda'] ?? '#FEF3E2';
}

type Props = { rishi: Rishi };

export function RishiTemplate({ rishi }: Props) {
  const color = vedaColor(rishi.vedaAssociation);
  const light = vedaLight(rishi.vedaAssociation);

  const relatedReadingItems = (rishi.relatedTopics ?? []).map((t) => ({
    title: t.title,
    href: `/topics/${t.slug}`,
    summary: t.summary,
    type: 'guide' as const,
  }));

  return (
    <article className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-caption text-ink-muted" aria-label="Breadcrumb">
        <Link href="/" className="no-underline hover:text-saffron-500">Home</Link>
        <span aria-hidden="true">→</span>
        <Link href="/rishis" className="no-underline hover:text-saffron-500">Rishis</Link>
        <span aria-hidden="true">→</span>
        <span className="text-ink">{rishi.name}</span>
      </nav>

      {/* Hero — two column on desktop */}
      <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: identity */}
        <div className="space-y-4">
          {rishi.devanagari && (
            <div
              className="devanagari leading-none"
              style={{ fontSize: 48, color }}
              aria-label={`Devanagari: ${rishi.devanagari}`}
            >
              {rishi.devanagari}
            </div>
          )}
          <div>
            <h1 className="font-serif text-display-sm text-ink">{rishi.name}</h1>
            {rishi.transliteration && (
              <p className="mt-1 text-body-sm italic text-ink-muted">{rishi.transliteration}</p>
            )}
          </div>
          {rishi.epithet && (
            <p className="font-serif text-body italic text-ink-muted">{rishi.epithet}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {rishi.period && (
              <span
                className="rounded-sm px-2 py-0.5 text-caption font-medium"
                style={{ background: light, color }}
              >
                {rishi.period}
              </span>
            )}
            {rishi.vedaAssociation && (
              <span
                className="rounded-sm px-2 py-0.5 text-caption font-medium"
                style={{ background: light, color }}
              >
                {VEDA_LABEL[rishi.vedaAssociation] ?? rishi.vedaAssociation}
              </span>
            )}
          </div>
        </div>
        {/* Right: summary */}
        <div className="flex items-start">
          <p className="font-serif text-body-lg leading-relaxed text-ink-muted">{rishi.summary}</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Biography */}
        {rishi.biography && rishi.biography.length > 0 && (
          <section>
            <h2 className="mb-4 font-serif text-heading text-ink">Biography</h2>
            <div className="prose-vedika">
              <PortableContent blocks={rishi.biography} />
            </div>
          </section>
        )}

        {/* Key compositions */}
        {rishi.keyCompositions && rishi.keyCompositions.length > 0 && (
          <section>
            <h2 className="mb-4 font-serif text-heading text-ink">Key compositions</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {rishi.keyCompositions.map((comp, i) => (
                <div key={i} className="rounded-lg border bg-white p-4 shadow-card">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-serif text-subheading text-ink">{comp.title}</span>
                    {comp.reference && (
                      <span
                        className="rounded-sm px-1.5 py-0.5 text-[10px] font-medium"
                        style={{ background: light, color }}
                      >
                        {comp.reference}
                      </span>
                    )}
                  </div>
                  {comp.description && (
                    <p className="mt-2 text-body-sm text-ink-muted">{comp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Famous verse */}
        {rishi.famousVerse && (
          <section
            className="rounded-xl p-8"
            style={{ background: light, border: `1px solid ${color}44` }}
          >
            <p className="mb-4 text-overline tracking-widest" style={{ color }}>
              A key verse
            </p>
            <p
              className="devanagari text-[18px] leading-loose text-ink"
              style={{ whiteSpace: 'pre-line' }}
            >
              {rishi.famousVerse}
            </p>
            {rishi.famousVerseTranslation && (
              <>
                <hr className="my-4" style={{ borderColor: `${color}33` }} />
                <p className="font-serif text-body italic text-ink-muted">
                  {rishi.famousVerseTranslation}
                </p>
              </>
            )}
            {rishi.famousVerseSource && (
              <p className="mt-3 text-caption" style={{ color }}>
                {rishi.famousVerseSource}
              </p>
            )}
          </section>
        )}

        {/* Lineage & disciples */}
        {(rishi.lineage || rishi.disciples) && (
          <section>
            <h2 className="mb-4 font-serif text-heading text-ink">Lineage & disciples</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {rishi.lineage && (
                <div>
                  <p className="mb-1 text-overline tracking-widest text-saffron-500">Lineage / Gotra</p>
                  <p className="text-body text-ink">{rishi.lineage}</p>
                </div>
              )}
              {rishi.disciples && (
                <div>
                  <p className="mb-1 text-overline tracking-widest text-saffron-500">Notable disciples</p>
                  <p className="text-body text-ink">{rishi.disciples}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Related rishis */}
        {rishi.relatedRishis && rishi.relatedRishis.length > 0 && (
          <section>
            <h2 className="mb-4 font-serif text-heading text-ink">Related rishis</h2>
            <div className="flex flex-wrap gap-3">
              {rishi.relatedRishis.map((r) => (
                <Link
                  key={r._id}
                  href={`/rishis/${r.slug}`}
                  className="group block rounded-lg border bg-white p-4 no-underline shadow-card transition-all hover:scale-[1.01] hover:shadow-card-md"
                  style={{ minWidth: 160 }}
                >
                  {r.devanagari && (
                    <div
                      className="devanagari mb-1 text-[28px] leading-none"
                      style={{ color: vedaColor(r.vedaAssociation) }}
                    >
                      {r.devanagari[0]}
                    </div>
                  )}
                  <p className="font-serif text-subheading text-ink group-hover:text-saffron-500">
                    {r.name}
                  </p>
                  {r.epithet && (
                    <p className="mt-0.5 text-caption italic text-ink-muted">{r.epithet}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related topics */}
        {relatedReadingItems.length > 0 && (
          <RelatedReadingGrid items={relatedReadingItems} />
        )}

        {/* Sources */}
        {rishi.sourceRefs && rishi.sourceRefs.length > 0 && (
          <section>
            <h2 className="mb-4 font-serif text-subheading text-ink">Sources</h2>
            <div className="flex flex-wrap gap-2">
              {rishi.sourceRefs.map((src) => (
                <span key={src._id} className="source-badge">
                  {src.url ? (
                    <a href={src.url} target="_blank" rel="noreferrer" className="no-underline hover:text-saffron-500">
                      {src.label}
                    </a>
                  ) : (
                    src.label
                  )}
                  {src.citationText && (
                    <span className="ml-1 text-ink-faint">
                      — {src.citationText.length > 80 ? `${src.citationText.slice(0, 80)}…` : src.citationText}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div>
          <Link href="/vedas" className="text-caption text-saffron-500 no-underline hover:underline">
            ← Back to Veda Vriksha
          </Link>
        </div>
      </div>
    </article>
  );
}
