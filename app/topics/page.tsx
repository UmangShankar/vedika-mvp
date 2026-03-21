import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { IndexList } from '@/components/content/index-list';
import { getTopics } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Topics',
  description: 'Explore Vedika topic pages sourced from the editorial CMS.'
});

export default async function TopicsPage() {
  const topics = await getTopics();

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Topics</h1>
      {topics.length ? (
        <IndexList
          items={topics.map((topic) => ({
            id: topic._id,
            title: topic.title,
            href: `/topics/${topic.slug}`,
            summary: topic.summary,
            meta: topic.difficulty ? `Level: ${topic.difficulty}` : undefined
          }))}
        />
      ) : (
        <EmptyState
          title="No topics published yet"
          message="Once topics are published in Sanity, they will appear here automatically."
        />
      )}
    </section>
  );
}
