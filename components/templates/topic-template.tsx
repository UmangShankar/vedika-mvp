import { ArticleHeader } from '@/components/content/article-header';
import { GlossaryInlineCard } from '@/components/content/glossary-inline-card';
import { KeyTakeawayBox } from '@/components/content/key-takeaway-box';
import { PortableContent } from '@/components/content/portable-content';
import { RelatedReadingGrid } from '@/components/content/related-reading-grid';
import { SummaryBox } from '@/components/content/summary-box';
import type { GlossaryEntry, Topic } from '@/lib/sanity/types';

type TopicTemplateProps = {
  topic: Topic;
  relatedReading?: Array<{ title: string; href: string; summary: string }>;
  glossarySpotlight?: GlossaryEntry | null;
};

export function TopicTemplate({ topic, relatedReading = [], glossarySpotlight }: TopicTemplateProps) {
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

        <PortableContent blocks={topic.body} />

        <KeyTakeawayBox>
          Begin with {topic.title} through primary sources. Cross-check claims
          with citations before relying on conclusions.
        </KeyTakeawayBox>

        {glossarySpotlight ? (
          <GlossaryInlineCard
            term={glossarySpotlight.term}
            transliteration={glossarySpotlight.transliteration}
            definition={glossarySpotlight.definition}
            href={`/glossary/${glossarySpotlight.slug}`}
          />
        ) : null}

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

        <RelatedReadingGrid
          items={relatedReading.map((r) => ({ ...r, type: 'guide' as const }))}
        />
      </div>
    </article>
  );
}
