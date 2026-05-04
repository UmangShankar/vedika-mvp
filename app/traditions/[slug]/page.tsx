export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { TopicTemplate } from '@/components/templates/topic-template';
import { TraditionDeepDivePage } from '@/components/traditions/tradition-deep-dive';
import { getTopic, getGuides, getGlossaryEntries } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';
import { TRADITIONS } from '@/lib/traditions/data';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  // Check static tradition data first
  const tradition = TRADITIONS.find((t) => t.slug === slug);
  if (tradition) {
    return buildMetadata({
      title: tradition.name,
      description: tradition.subtitle,
    });
  }

  // Fall back to Sanity topic
  const topic = await getTopic(slug);
  if (topic) {
    return buildMetadata({
      title: topic.title,
      description: topic.summary,
      seo: topic.seo,
    });
  }

  return buildMetadata({
    title: 'Tradition not found',
    description: 'This tradition page is missing or unpublished.',
  });
}

export default async function TraditionSlugPage({ params }: Props) {
  const { slug } = params;

  // 1. Static tradition data takes precedence
  const tradition = TRADITIONS.find((t) => t.slug === slug);
  if (tradition) {
    return <TraditionDeepDivePage tradition={tradition} />;
  }

  // 2. Fall back to Sanity topic
  const [topic, guides, glossary] = await Promise.all([
    getTopic(slug),
    getGuides(),
    getGlossaryEntries(),
  ]);

  if (topic) {
    const relatedReading = guides.slice(0, 3).map((guide) => ({
      title: guide.title,
      href: `/guides/${guide.slug}`,
      summary: guide.excerpt,
    }));

    return (
      <TopicTemplate
        topic={topic}
        relatedReading={relatedReading}
        glossarySpotlight={glossary[0] ?? null}
      />
    );
  }

  // 3. Nothing found
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <EmptyState
        title="Tradition unavailable"
        message="This tradition page does not exist or has not been published yet."
      />
    </section>
  );
}
