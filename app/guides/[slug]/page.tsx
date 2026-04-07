import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { GuideTemplate } from '@/components/templates/guide-template';
import { getGuide, getGuides } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

type GuideDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: GuideDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const guide = await getGuide(slug);

  if (!guide) {
    return buildMetadata({ title: 'Guide not found', description: 'This guide is unavailable.' });
  }

  return buildMetadata({ title: guide.title, description: guide.excerpt, seo: guide.seo });
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  const { slug } = params;
  const [guide, guides] = await Promise.all([getGuide(slug), getGuides()]);

  if (!guide) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Guide unavailable" message="This guide does not exist or is not published." />
      </section>
    );
  }

  const relatedReading = guides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 4)
    .map((item) => ({ title: item.title, href: `/guides/${item.slug}`, summary: item.excerpt }));


