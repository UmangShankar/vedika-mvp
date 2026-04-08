import { ArticleHeader } from '@/components/content/article-header';
import { CanonBadge } from '@/components/content/canon-badge';
import { KeyTakeawayBox } from '@/components/content/key-takeaway-box';
import { PortableContent } from '@/components/content/portable-content';
import { PullQuote } from '@/components/content/pull-quote';
import { RelatedReadingGrid } from '@/components/content/related-reading-grid';
import { SummaryBox } from '@/components/content/summary-box';
import type { TextEntry } from '@/lib/sanity/types';

type TextOverviewTemplateProps = {
  text: TextEntry;
  relatedReading?: Array<{ title: string; href: string; summary: string }>;
};

export function TextOverviewTemplate({ text, relatedReading = [] }: TextOverviewTemplateProps) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={text.title} dek={text.overview} meta={text.traditionLabel} badges={['Text overview']} />
      <div>
        <CanonBadge label={text.traditionLabel} />
      </div>
      <SummaryBox content={text.overview} />
      <KeyTakeawayBox points={['Read the text in sequence before drawing comparative conclusions.', 'Track recurring concepts and verify with cited source pathways.']} />
      <PullQuote quote={text.overview} />
      <PortableContent blocks={text.content} />
      <RelatedReadingGrid items={relatedReading} />
    </article>
  );
}
