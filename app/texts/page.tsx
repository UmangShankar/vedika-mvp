import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { IndexList } from '@/components/content/index-list';
import { getTexts } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Texts',
  description: 'Browse curated text pages from Vedika CMS content.'
});

export default async function TextsPage() {
  const texts = await getTexts();

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Texts</h1>
      {texts.length ? (
        <IndexList
          items={texts.map((text) => ({
            id: text._id,
            title: text.title,
            href: `/texts/${text.slug}`,
            summary: text.overview,
            meta: text.traditionLabel
          }))}
        />
      ) : (
        <EmptyState title="No texts published yet" message="Publish text entries in Sanity to populate this page." />
      )}
    </section>
  );
}
