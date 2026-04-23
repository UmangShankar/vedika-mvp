import Link from 'next/link';
import { getTopics } from '@/lib/sanity/content';

export async function FeaturedTopics() {
  const allTopics = await getTopics();
  const topics = allTopics.slice(0, 6);

  if (!topics.length) return null;

  return (
    <section className="w-full bg-sandal-100 py-14 md:py-20">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-end justify-between">
          <div className="space-y-1">
            <p className="text-overline uppercase tracking-widest text-saffron-500">Topics</p>
            <h2 className="font-serif text-display-sm text-ink">Featured topics</h2>
          </div>
          <Link
            href="/topics"
            className="hidden text-body-sm font-medium text-saffron-500 no-underline hover:text-saffron-600 sm:block"
          >
            Browse all →
          </Link>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic._id}
              className="rounded-lg border bg-sandal-50 p-4 shadow-card transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card-md"
            >
              <h3 className="font-serif text-heading text-ink">{topic.title}</h3>
              <p className="mt-2 text-body-sm text-ink-muted">{topic.summary}</p>
              <Link
                href={`/topics/${topic.slug}`}
                className="mt-3 inline-flex text-caption text-saffron-500 no-underline hover:text-saffron-600"
              >
                Explore →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/topics"
            className="text-body-sm font-medium text-saffron-500 no-underline hover:text-saffron-600"
          >
            Browse all topics →
          </Link>
        </div>
      </div>
    </section>
  );
}
