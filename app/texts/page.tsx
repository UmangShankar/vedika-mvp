import type { Metadata } from 'next';
import Link from 'next/link';
import { EmptyState } from '@/components/content/empty-state';
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
        <ul className="space-y-4">
          {texts.map((text) => {
            const isGita = /bhagavad.?gita/i.test(text.slug) || /bhagavad.?gita/i.test(text.title);
            return (
              <li
                key={text._id}
                className="rounded-lg border bg-sandal-50 p-5 transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card"
              >
                <h2 className="font-serif text-subheading font-semibold text-ink">
                  <Link href={`/texts/${text.slug}`} className="no-underline hover:text-saffron-500">
                    {text.title}
                  </Link>
                </h2>
                {text.traditionLabel ? (
                  <p className="mt-1 text-caption text-ink-muted">{text.traditionLabel}</p>
                ) : null}
                <p className="mt-2 text-ink-muted">{text.overview}</p>
                {isGita && (
                  <Link
                    href="/bhagavad-gita"
                    className="mt-3 inline-flex text-caption font-medium text-saffron-500 no-underline hover:text-saffron-600"
                  >
                    Explore Jñāna Chakra →
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <EmptyState
          title="No texts published yet"
          message="Publish text entries in Sanity to populate this page."
        />
      )}
    </section>
  );
}
