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
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader
        title={topic.title}
        dek={topic.summary}
        meta={topic.difficulty ? `Level: ${topic.difficulty}` : undefined}
        badges={['Topic']}
      />
      <SummaryBox content={topic.summary} />
      <KeyTakeawayBox points={[`Begin with ${topic.title} through primary sources.`, 'Cross-check claims with citations before relying on conclusions.']} />
      {glossarySpotlight ? (
        <GlossaryInlineCard term={glossarySpotlight.term} definition={glossarySpotlight.definition} href={`/glossary/${glossarySpotlight.slug}`} />
      ) : null}
      <PortableContent blocks={topic.body} />
      <RelatedReadingGrid items={relatedReading} />
    </article>
  );
}
