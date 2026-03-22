import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { IndexList } from '@/components/content/index-list';
import { SourceCard } from '@/components/content/source-card';
import { getComparisons } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Comparisons',
  description: 'Compare concepts and interpretations with explicit source support.'
});

export default async function ComparisonsPage() {
  const comparisons = await getComparisons();

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Comparisons</h1>
      {comparisons.length ? (
        <>
          <SourceCard
            title="How to read comparisons"
            type="Editorial method"
            description="Each comparison should be read alongside source references and lineage context."
          />
          <IndexList
            items={comparisons.map((comparison) => ({
              id: comparison._id,
              title: comparison.title,
              href: `/comparisons/${comparison.slug}`,
              summary: comparison.summary
            }))}
          />
        </>
      ) : (
        <EmptyState title="No comparisons published yet" message="Publish comparison entries in Sanity to populate this page." />
      )}
    </section>
  );
}
