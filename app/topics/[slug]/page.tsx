export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { TopicTemplate } from '@/components/templates/topic-template';
import { getGlossaryEntries, getGuides, getTopic } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';


type TopicDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: TopicDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const topic = await getTopic(slug);

  if (!topic) {
    return buildMetadata({
      title: 'Topic not found',
      description: 'This topic is missing or unpublished.'
    });
  }

  return buildMetadata({
    title: topic.title,
    description: topic.summary,
    seo: topic.seo
  });
}

export default async function TopicDetailPage({ params }: TopicDetailPageProps) {
  const { slug } = params;
  const [topic, guides, glossary] = await Promise.all([getTopic(slug), getGuides(), getGlossaryEntries()]);

  if (!topic) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Topic unavailable" message="This topic does not exist or is not published." />
      </section>
    );
  }

  const relatedReading = guides.slice(0, 3).map((guide) => ({
    title: guide.title,
    href: `/guides/${guide.slug}`,
    summary: guide.excerpt
  }));

  return <TopicTemplate topic={topic} slug={slug} relatedReading={relatedReading} glossaryEntries={glossary} />;
}
