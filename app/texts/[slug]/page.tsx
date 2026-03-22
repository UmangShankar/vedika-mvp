import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { FeatureGrid, HubHero, HubSection } from '@/components/content/hub-primitives';
import { TextOverviewTemplate } from '@/components/templates/text-overview-template';
import { getGuides, getText, getTopics } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

type TextDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: TextDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const text = await getText(slug);

  if (!text) {
    return buildMetadata({ title: 'Text not found', description: 'This text is missing or unpublished.' });
  }

  return buildMetadata({ title: text.title, description: text.overview, seo: text.seo });
}

export default async function TextDetailPage({ params }: TextDetailPageProps) {
  const { slug } = params;
  const [text, topics, guides] = await Promise.all([getText(slug), getTopics(), getGuides()]);

  if (!text) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Text unavailable" message="This text does not exist or is not published." />
      </section>
    );
  }

  if (slug === 'bhagavad-gita') {
    const relatedConcepts = topics.slice(0, 4).map((topic) => ({
      title: topic.title,
      href: `/topics/${topic.slug}`,
      summary: topic.summary
    }));
    const relatedGuides = guides.slice(0, 3).map((guide) => ({
      title: guide.title,
      href: `/guides/${guide.slug}`,
      summary: guide.excerpt
    }));

    return (
      <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <HubHero
          eyebrow="Canonical entry point"
          title="Bhagavad Gita research hub"
          description="A clear starting point for core themes of action, duty, knowledge, devotion, and discernment—structured so new readers can enter confidently and advanced readers can map interpretations."
          cta={{ href: '/guides', label: 'Open related guides' }}
        />

        <HubSection title="Read with structure" subtitle="Use this sequence to avoid context loss.">
          <FeatureGrid
            cards={[
              {
                title: 'Orient first',
                href: '/research',
                summary: 'Start with research overviews to understand the Gita’s place in the broader textual landscape.'
              },
              {
                title: 'Track key concepts',
                href: '/topics',
                summary: 'Follow dharma, karma, yoga, and jnana as recurring conceptual threads across chapters.'
              },
              {
                title: 'Compare interpretations',
                href: '/sources',
                summary: 'Use source collections to compare commentarial approaches without flattening differences.'
              },
              {
                title: 'Apply guided reading',
                href: '/guides',
                summary: 'Use editorial reading plans for chapter-level study and reflection.'
              }
            ]}
          />
        </HubSection>

        <HubSection title="Related concepts">
          {relatedConcepts.length ? (
            <FeatureGrid cards={relatedConcepts} />
          ) : (
            <EmptyState title="No related concepts yet" message="Publish topic entries in Sanity to populate this section." />
          )}
        </HubSection>

        <HubSection title="Related guides">
          {relatedGuides.length ? (
            <FeatureGrid cards={relatedGuides} />
          ) : (
            <EmptyState title="No related guides yet" message="Publish guide entries in Sanity to populate this section." />
          )}
        </HubSection>

        <TextOverviewTemplate text={text} />
      </div>
    );
  }

  if (slug === 'upanishads') {
    const relatedConcepts = topics.slice(0, 6).map((topic) => ({
      title: topic.title,
      href: `/topics/${topic.slug}`,
      summary: topic.summary
    }));
    const relatedGuides = guides.slice(0, 3).map((guide) => ({
      title: guide.title,
      href: `/guides/${guide.slug}`,
      summary: guide.excerpt
    }));

    return (
      <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <HubHero
          eyebrow="Philosophical depth"
          title="Upanishads research hub"
          description="Enter the philosophical heart of Vedika through a calm, layered pathway: foundational orientation first, then deeper inquiry into Atman, Brahman, consciousness, and liberation."
          cta={{ href: '/topics', label: 'Explore core concepts' }}
        />

        <HubSection
          title="Study pathways"
          subtitle="Depth without intimidation: start broad, then narrow into specific inquiries."
        >
          <FeatureGrid
            cards={[
              {
                title: 'Foundational orientation',
                href: '/topics',
                summary: 'Build a stable conceptual vocabulary before comparing schools and metaphysical claims.'
              },
              {
                title: 'Primary source navigation',
                href: '/sources',
                summary: 'Use source collections to keep textual context visible while reading interpretations.'
              },
              {
                title: 'Cross-text concept tracking',
                href: '/texts',
                summary: 'Follow major themes across related text hubs to see continuity and contrast.'
              },
              {
                title: 'Guided depth sequence',
                href: '/guides',
                summary: 'Use guides to move from beginner-safe summaries toward nuanced comparative study.'
              }
            ]}
          />
        </HubSection>

        <HubSection title="Related concepts">
          {relatedConcepts.length ? (
            <FeatureGrid cards={relatedConcepts} />
          ) : (
            <EmptyState title="No related concepts yet" message="Publish topic entries in Sanity to populate this section." />
          )}
        </HubSection>

        <HubSection title="Related guides">
          {relatedGuides.length ? (
            <FeatureGrid cards={relatedGuides} />
          ) : (
            <EmptyState title="No related guides yet" message="Publish guide entries in Sanity to populate this section." />
          )}
        </HubSection>

        <TextOverviewTemplate text={text} />
      </div>
    );
  }

  const relatedReading = guides.slice(0, 4).map((guide) => ({
    title: guide.title,
    href: `/guides/${guide.slug}`,
    summary: guide.excerpt
  }));

  return <TextOverviewTemplate text={text} relatedReading={relatedReading} />;
}