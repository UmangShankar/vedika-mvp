import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';
import { EmptyState } from '@/components/content/empty-state';
import { PortableContent } from '@/components/content/portable-content';
import { getTopic } from '@/lib/sanity/content';
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
  const topic = await getTopic(slug);

  if (!topic) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Topic unavailable" message="This topic does not exist or is not published." />
      </section>
    );
  }

  return (
    <ArticleLayout title={topic.title} dek={topic.summary} meta={topic.difficulty ? `Level: ${topic.difficulty}` : undefined}>
      <PortableContent blocks={topic.body} />
    </ArticleLayout>
  );
}
