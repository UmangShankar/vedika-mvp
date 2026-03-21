import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/article-layout';
import { EmptyState } from '@/components/content/empty-state';
import { getGlossaryEntry } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

type GlossaryDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: GlossaryDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const entry = await getGlossaryEntry(slug);

  if (!entry) {
    return buildMetadata({ title: 'Glossary entry not found', description: 'This glossary entry is unavailable.' });
  }

  return buildMetadata({ title: entry.term, description: entry.definition, seo: entry.seo });
}

export default async function GlossaryDetailPage({ params }: GlossaryDetailPageProps) {
  const { slug } = params;
  const entry = await getGlossaryEntry(slug);

  if (!entry) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Glossary entry unavailable" message="This glossary entry does not exist or is not published." />
      </section>
    );
  }

  return (
    <ArticleLayout title={entry.term} dek={entry.definition} meta={entry.transliteration}>
      <p>{entry.definition}</p>
    </ArticleLayout>
  );
}
