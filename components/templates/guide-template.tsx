import { ArticleHeader } from '@/components/content/article-header';
import { KeyTakeawayBox } from '@/components/content/key-takeaway-box';
import { PortableContent } from '@/components/content/portable-content';
import { RelatedReadingGrid } from '@/components/content/related-reading-grid';
import type { Guide } from '@/lib/sanity/types';

type GuideTemplateProps = {
  guide: Guide;
  relatedReading?: Array<{ title: string; href: string; summary: string }>;
};

export function GuideTemplate({ guide, relatedReading = [] }: GuideTemplateProps) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={guide.title} dek={guide.excerpt} badges={['Guide']} />
      <KeyTakeawayBox points={['Use this guide as a pathway, not a replacement for primary sources.', 'Follow linked readings to validate interpretation context.']} />
      <PortableContent blocks={guide.body} />
      <RelatedReadingGrid items={relatedReading} />
    </article>
  );
}
