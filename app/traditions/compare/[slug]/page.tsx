export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { ComparisonTemplate } from '@/components/traditions/comparison-template';
import { buildMetadata } from '@/lib/sanity/metadata';
import { COMPARISONS } from '@/lib/traditions/comparisons-data';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const comparison = COMPARISONS.find((c) => c.slug === slug);

  if (comparison) {
    return buildMetadata({
      title: `${comparison.traditionA.name} vs ${comparison.traditionB.name}`,
      description: comparison.subtitle,
    });
  }

  return buildMetadata({
    title: 'Comparison not found',
    description: 'This comparison page is missing or unpublished.',
  });
}

export default function CompareSlugPage({ params }: Props) {
  const { slug } = params;
  const comparison = COMPARISONS.find((c) => c.slug === slug);

  if (!comparison) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState
          title="Comparison unavailable"
          message="This comparison page does not exist or has not been published yet."
        />
      </section>
    );
  }

  return <ComparisonTemplate comparison={comparison} />;
}
