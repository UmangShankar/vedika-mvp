import Link from 'next/link';
import { ArticleHeader } from '@/components/content/article-header';
import { KeyTakeawayBox } from '@/components/content/key-takeaway-box';
import { PortableContent, toHeadingId } from '@/components/content/portable-content';
import { RelatedReadingGrid } from '@/components/content/related-reading-grid';
import { SummaryBox } from '@/components/content/summary-box';
import { TopicTableOfContents } from '@/components/traditions/topic-toc';
import type { GlossaryEntry, Topic } from '@/lib/sanity/types';

// --- Static maps ---

const TOPIC_GLOSSARY_MAP: Record<string, string[]> = {
  'atman-and-brahman':  ['atman', 'ātman', 'brahman', 'maya', 'māyā'],
  'buddhist-darshana':  ['anatman', 'anātman', 'dependent origination', 'pratītyasamutpāda', 'dukkha'],
  'carvaka-lokayata':   ['pratyaksa', 'pratyakṣa', 'pramana', 'pramāṇa', 'svabhava', 'svabhāva'],
  'dharma':             ['dharma', 'karma', 'rta', 'ṛta'],
  'jain-philosophy':    ['ahimsa', 'ahiṃsā', 'anekantavada', 'anekāntavāda', 'jiva', 'jīva'],
};

type RelatedConcept = { slug: string; name: string; question: string };

const TOPIC_RELATED_CONCEPTS: Record<string, RelatedConcept[]> = {
  'atman-and-brahman': [
    { slug: 'dharma',           name: 'Dharma',          question: 'The cosmic law connecting ātman to the world' },
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'The tradition that most directly challenges ātman' },
    { slug: 'madhyamaka',       name: 'Madhyamaka',      question: 'Śūnyatā vs Brahman — emptiness and fullness' },
    { slug: 'yogacara',         name: 'Yogācāra',        question: 'Consciousness as the sole reality' },
  ],
  'buddhist-darshana': [
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'Anātman and the four noble truths in full' },
    { slug: 'madhyamaka',       name: 'Madhyamaka',      question: 'Śūnyatā as the extension of anātman' },
    { slug: 'yogacara',         name: 'Yogācāra',        question: 'Mind-only — the idealist Buddhist school' },
    { slug: 'zen-chan',          name: 'Zen / Chan',      question: 'Direct transmission beyond scripture' },
  ],
  'carvaka-lokayata': [
    { slug: 'carvaka',          name: 'Cārvāka deep dive', question: 'The full Cārvāka philosophical tradition' },
    { slug: 'ajnana',           name: 'Ajñāna',          question: "India's school of radical skepticism" },
    { slug: 'ajivika',          name: 'Ājīvika',         question: 'Absolute fate — another heterodox challenger' },
    { slug: 'jain-philosophy',  name: 'Jain Philosophy', question: 'A contrasting heterodox tradition' },
  ],
  'dharma': [
    { slug: 'zoroastrianism',   name: 'Zoroastrianism',  question: 'Asha — the cousin concept from a shared ancestor' },
    { slug: 'confucianism',     name: 'Confucianism',    question: 'Lǐ — dharma\'s parallel in Chinese thought' },
    { slug: 'taoism',           name: 'Taoism',          question: 'The Tao — another unnameable cosmic order' },
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'How Buddhism reframes dharma as dhamma' },
  ],
  'jain-philosophy': [
    { slug: 'carvaka',          name: 'Cārvāka',         question: 'The other great heterodox challenger' },
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'The third great Śramaṇa movement' },
    { slug: 'ajivika',          name: 'Ājīvika',         question: 'Absolute determinism vs karmic agency' },
  ],
};

// --- Helpers ---

function getContextGlossary(slug: string, entries: GlossaryEntry[]): GlossaryEntry[] {
  const targets = TOPIC_GLOSSARY_MAP[slug];
  if (!targets) return [];
  return entries
    .filter((e) =>
      targets.some(
        (t) =>
          e.term.toLowerCase().includes(t.toLowerCase()) ||
          t.toLowerCase().includes(e.term.toLowerCase())
      )
    )
    .slice(0, 3);
}

type TocHeadingRaw = { style?: string; children?: Array<{ text?: string }> };

function extractHeadings(blocks: TocHeadingRaw[]) {
  return blocks
    .filter((b) => b.style === 'h2')
    .map((b) => {
      const text = (b.children ?? []).map((s) => s.text ?? '').join('');
      return { id: toHeadingId(text), text };
    })
    .filter((h) => h.text.length > 0);
}

// --- Component ---

type TopicTemplateProps = {
  topic: Topic;
  slug?: string;
  relatedReading?: Array<{ title: string; href: string; summary: string }>;
  glossaryEntries?: GlossaryEntry[];
  /** @deprecated pass glossaryEntries + slug instead */
  glossarySpotlight?: GlossaryEntry | null;
};

export function TopicTemplate({
  topic,
  slug,
  relatedReading = [],
  glossaryEntries = [],
  glossarySpotlight,
}: TopicTemplateProps) {
  const effectiveSlug = slug ?? '';
  const contextGlossary = glossaryEntries.length
    ? getContextGlossary(effectiveSlug, glossaryEntries)
    : glossarySpotlight
    ? [glossarySpotlight]
    : [];

  const headings = extractHeadings((topic.body ?? []) as TocHeadingRaw[]);
  const relatedConcepts = TOPIC_RELATED_CONCEPTS[effectiveSlug] ?? [];

  return (
    <article className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader
        title={topic.title}
        subtitle={topic.summary}
        sourceCount={0}
        readingTime="5 min"
      />

      <div className="mt-8 space-y-8">
        <SummaryBox
          items={[
            topic.summary,
            `Difficulty: ${topic.difficulty ?? 'All levels'}`,
          ]}
        />

        {/* Table of contents */}
        {headings.length > 1 && <TopicTableOfContents headings={headings} />}

        <PortableContent blocks={topic.body} />

        <KeyTakeawayBox>
          Begin with {topic.title} through primary sources. Cross-check claims
          with citations before relying on conclusions.
        </KeyTakeawayBox>

        {/* Context-specific glossary */}
        {contextGlossary.length > 0 && (
          <section>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Key terms on this page
            </p>
            <div className="flex flex-wrap gap-2">
              {contextGlossary.map((entry) => (
                <Link
                  key={entry._id ?? entry.term}
                  href={`/glossary/${entry.slug}`}
                  className="rounded-full border border-[rgba(192,120,40,0.18)] bg-sandal-50 px-3 py-1 text-caption text-ink-muted no-underline transition-colors hover:border-[rgba(192,120,40,0.30)] hover:bg-sandal-100 hover:text-ink-light"
                >
                  {entry.term}
                  {entry.transliteration && (
                    <span className="ml-1 text-ink-faint">· {entry.transliteration}</span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Source badges */}
        {topic.sourceRefs && topic.sourceRefs.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 font-serif text-subheading text-ink">Sources used in this article</h2>
            <div className="flex flex-wrap gap-2">
              {topic.sourceRefs.map((source) => (
                <span key={source._id} className="source-badge">
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noreferrer" className="no-underline hover:text-saffron-500">
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                  {source.citationText && (
                    <span className="ml-1 text-ink-faint">
                      — {source.citationText.length > 80 ? `${source.citationText.slice(0, 80)}…` : source.citationText}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Related concepts */}
        {relatedConcepts.length > 0 && (
          <section>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Related traditions and concepts
            </p>
            <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
              {relatedConcepts.map((concept) => (
                <Link
                  key={concept.slug}
                  href={`/traditions/${concept.slug}`}
                  className="block rounded-md border border-[rgba(192,120,40,0.18)] bg-sandal-100 p-3 no-underline transition-colors hover:border-[rgba(192,120,40,0.30)]"
                >
                  <p className="text-[13px] font-medium text-ink">{concept.name}</p>
                  <p className="mt-0.5 text-[11px] italic text-ink-muted">{concept.question}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <RelatedReadingGrid
          items={relatedReading.map((r) => ({ ...r, type: 'guide' as const }))}
        />
      </div>
    </article>
  );
}
