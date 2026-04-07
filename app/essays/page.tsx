import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { IndexList } from '@/components/content/index-list';
import { getEssays } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Essays',
  description: 'Explore long-form essays managed in Sanity.'
});

export default async function EssaysPage() {
  const essays = await getEssays();

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Essays</h1>
      {essays.length ? (
        <IndexList
          items={essays.map((essay) => ({
            id: essay._id,
            title: essay.title,
            href: `/essays/${essay.slug}`,
            summary: essay.dek
          }))}
        />
      ) : (
        <EmptyState title="No essays published yet" message="Publish essays in Sanity to render this list." />
      )}
    </section>
  );
}
