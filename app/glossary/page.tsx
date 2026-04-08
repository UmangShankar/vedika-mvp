import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { IndexList } from '@/components/content/index-list';
import { getGlossaryEntries } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Glossary',
  description: 'Study key terms with definitions maintained in Sanity.'
});

export default async function GlossaryPage() {
  const entries = await getGlossaryEntries();

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Glossary</h1>
      {entries.length ? (
        <IndexList
          items={entries.map((entry) => ({
            id: entry._id,
            title: entry.term,
            href: `/glossary/${entry.slug}`,
            summary: entry.definition,
            meta: entry.transliteration
          }))}
        />
      ) : (
        <EmptyState title="No glossary entries yet" message="Publish glossary entries in Sanity to show terms here." />
      )}
    </section>
  );
}
