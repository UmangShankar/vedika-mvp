import { ArticleHeader } from '@/components/content/article-header';
import { CitationBlock } from '@/components/content/citation-block';
import { ComparisonTable } from '@/components/content/comparison-table';
import { PortableContent } from '@/components/content/portable-content';
import { SummaryBox } from '@/components/content/summary-box';
import type { Comparison } from '@/lib/sanity/types';

type ComparisonTemplateProps = {
  comparison: Comparison;
};

export function ComparisonTemplate({ comparison }: ComparisonTemplateProps) {
  const rows = [
    {
      aspect: 'Focus',
      left: comparison.leftTopicLabel || '—',
      right: comparison.rightTopicLabel || '—',
    },
    {
      aspect: 'Method',
      left: 'Read through source context and commentary lineage.',
      right: 'Compare themes while preserving differences.',
    },
  ];

  return (
    <article className="mx-auto max-w-content space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={comparison.title} subtitle={comparison.summary} />

      <SummaryBox items={[comparison.summary]} />

      <ComparisonTable
        leftLabel={comparison.leftTopicLabel ?? 'View A'}
        rightLabel={comparison.rightTopicLabel ?? 'View B'}
        rows={rows}
      />

      <PortableContent blocks={comparison.analysis} />

      {comparison.sourceRefs?.map((source) => (
        <CitationBlock
          key={source._id}
          label={source.label}
          citationText={source.citationText ?? 'Citation details pending.'}
          url={source.url}
        />
      ))}
    </article>
  );
}
