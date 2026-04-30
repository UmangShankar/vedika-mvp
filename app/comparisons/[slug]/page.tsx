export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { ComparisonTemplate } from '@/components/templates/comparison-template';
import { getComparison } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

type ComparisonDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ComparisonDetailPageProps): Promise<Metadata> {
  const comparison = await getComparison(params.slug);

  if (!comparison) {
    return buildMetadata({
      title: 'Comparison not found',
      description: 'This comparison is missing or unpublished.'
    });
  }

  return buildMetadata({ title: comparison.title, description: comparison.summary, seo: comparison.seo });
}

export default async function ComparisonDetailPage({ params }: ComparisonDetailPageProps) {
  const comparison = await getComparison(params.slug);

  if (!comparison) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Comparison unavailable" message="This comparison does not exist or is not published." />
      </section>
    );
  }

  return <ComparisonTemplate comparison={comparison} />;
}
