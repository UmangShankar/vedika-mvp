export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { FeatureGrid, HubHero, HubSection } from '@/components/content/hub-primitives';
import { getTopics } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Topics',
  description: 'Explore Vedika topic pages sourced from the editorial CMS.'
});

export default async function TopicsPage() {
  const topics = await getTopics();
  const featuredTopicCards = topics.slice(0, 6).map((topic) => ({
    title: topic.title,
    href: `/topics/${topic.slug}`,
    summary: topic.summary,
    meta: topic.difficulty ? `Level: ${topic.difficulty}` : undefined
  }));

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <HubHero
        eyebrow="Foundations hub"
        title="Begin with the foundations of Sanatan Dharma"
        description="This hub is designed for first-time and returning learners: broad orientation, clear pathways, and concept-first entry points that lead naturally into deeper study."
        cta={{ href: '/guides', label: 'Start with a guide' }}
      />

      <HubSection
        title="How to use this hub"
        subtitle="Move from orientation to depth without losing context."
      >
        <FeatureGrid
          cards={[
            {
              title: 'Core concept pathways',
              href: '/topics',
              summary: 'Explore dharma, karma, yoga, and Vedanta through linked topic pages curated for progressive depth.'
            },
            {
              title: 'Primary text anchors',
              href: '/texts',
              summary: 'Enter the canon through Bhagavad Gita and Upanishads hubs that map key themes and study routes.'
            },
            {
              title: 'Source-grounded research',
              href: '/sources',
              summary: 'Trace claims back to source collections before relying on summaries or interpretation layers.'
            },
            {
              title: 'Guided reading plans',
              href: '/guides',
              summary: 'Use editorial guides to structure what to read first, what to compare, and where to go deeper next.'
            }
          ]}
        />
      </HubSection>

      <HubSection title="Featured concepts" subtitle="Beginner-friendly entry points from the CMS.">
        {featuredTopicCards.length ? (
          <FeatureGrid cards={featuredTopicCards} />
        ) : (
          <EmptyState
            title="No topics published yet"
            message="Once topics are published in Sanity, featured concept cards will appear here."
          />
        )}
      </HubSection>
    </div>
  );

}

