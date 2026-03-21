import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';
import { EmptyState } from '@/components/content/empty-state';
import { PortableContent } from '@/components/content/portable-content';
import { getText } from '@/lib/sanity/content';
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
  const text = await getText(slug);

  if (!text) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Text unavailable" message="This text does not exist or is not published." />
      </section>
    );
  }

  return (
    <ArticleLayout title={text.title} dek={text.overview} meta={text.traditionLabel}>
      <PortableContent blocks={text.content} />
    </ArticleLayout>
  );
}
