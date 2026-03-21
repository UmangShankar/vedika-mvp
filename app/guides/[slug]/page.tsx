import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';
import { EmptyState } from '@/components/content/empty-state';
import { PortableContent } from '@/components/content/portable-content';
import { getGuide } from '@/lib/sanity/content';
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
  const guide = await getGuide(slug);

  if (!guide) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Guide unavailable" message="This guide does not exist or is not published." />
      </section>
    );
  }

  return (
    <ArticleLayout title={guide.title} dek={guide.excerpt}>
      <PortableContent blocks={guide.body} />
    </ArticleLayout>
  );
}
