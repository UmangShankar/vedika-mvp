import { ArticleHeader } from '@/components/content/article-header';
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
    <article className="mx-auto max-w-content space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={text.title} subtitle={text.overview} />

      <SummaryBox items={[text.overview, `Tradition: ${text.traditionLabel}`]} />

      <PortableContent blocks={text.content} />

      <KeyTakeawayBox>
        Read the text in sequence before drawing comparative conclusions. Track recurring
        concepts and verify with cited source pathways.
      </KeyTakeawayBox>

      <PullQuote quote={text.overview} attribution={text.traditionLabel} />

      <RelatedReadingGrid
        items={relatedReading.map((r) => ({ ...r, type: 'guide' as const }))}
      />
    </article>
  );
}
