export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { IndexList } from '@/components/content/index-list';
import { getGuides } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Guides',
  description: 'Read structured study guides from Sanity content.'
});

export default async function GuidesPage() {
  const guides = await getGuides();

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Guides</h1>
      {guides.length ? (
        <IndexList
          items={guides.map((guide) => ({
            id: guide._id,
            title: guide.title,
            href: `/guides/${guide.slug}`,
            summary: guide.excerpt
          }))}
        />
      ) : (
        <EmptyState title="No guides published yet" message="Publish guides in Sanity to render this index." />
      )}
    </section>
  );
}
