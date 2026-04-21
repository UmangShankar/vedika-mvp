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

        <RelatedReadingGrid
          items={relatedReading.map((r) => ({ ...r, type: 'guide' as const }))}
        />
      </div>
    </article>
  );
}
