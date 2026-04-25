import Link from 'next/link';
import { getTopics } from '@/lib/sanity/content';

type TopicDiscoveryItem = {
  id: string;
  label: string;
  href?: string;
};

const FALLBACK_TOPICS = ['Dharma', 'Karma', 'Yoga', 'Vedanta'] as const;

async function getTopicDiscoveryItems(): Promise<{
  items: TopicDiscoveryItem[];
  isFallback: boolean;
}> {
  try {
    const topics = (await getTopics()).slice(0, 6);

    if (topics.length) {
      return {
        items: topics.map((topic) => ({
          id: topic._id,
          label: topic.title,
          href: topic.slug ? `/topics/${topic.slug}` : undefined,
        })),
        isFallback: false,
      };
    }
  } catch {
    // Fall through to static discovery chips when CMS content is unavailable.
  }

  return {
    items: FALLBACK_TOPICS.map((topic) => ({
      id: topic.toLowerCase(),
      label: topic,
    })),
    isFallback: true,
  };
}

export async function Hero() {
  const { items: topicDiscoveryItems, isFallback } =
    await getTopicDiscoveryItems();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden bg-sandal-100 py-10 md:py-14"
    >
      {/* Decorative OM — top-right, 4% opacity */}
      <span
        aria-hidden="true"
        className="devanagari pointer-events-none absolute right-6 top-4 z-0 select-none text-[200px] leading-none text-saffron-400 opacity-[0.07]"
      >
        ॐ
      </span>

      <div className="relative z-10 mx-auto max-w-full-w px-4 text-center sm:px-6 lg:px-8">
        {/* Overline */}
        <p className="text-overline uppercase tracking-[0.12em] text-saffron-500">
          Sanatan Dharma Research
        </p>

        {/* H1 */}
        <h1
          id="hero-title"
          className="mx-auto mt-4 max-w-wide font-serif text-display-lg text-ink"
        >
          Research Sanatan Dharma
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-content text-body-lg text-ink-muted">
          Source-grounded study paths with a carefully labeled AI companion for
          thoughtful exploration of primary texts and traditions.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/topics"
            className="rounded-sm bg-saffron-500 px-5 py-2.5 text-body-sm font-medium text-white no-underline transition-colors hover:bg-saffron-600"
          >
            Start exploring
          </Link>
          <Link
            href="/ask-vedika"
            className="rounded-sm border border-saffron-500 px-5 py-2.5 text-body-sm font-medium text-saffron-500 no-underline transition-colors hover:bg-saffron-50"
          >
            Ask Vedika →
          </Link>
        </div>

        <div className="mx-auto mt-6 max-w-content">
          <p className="text-caption uppercase tracking-[0.14em] text-ink-muted">
            Start with a topic
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5">
            {topicDiscoveryItems.map((item) =>
              item.href ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-full border border-saffron-200 bg-sandal-50 px-3.5 py-1.5 text-body-sm text-ink no-underline transition-colors hover:border-saffron-400 hover:bg-saffron-50 hover:text-saffron-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.id}
                  className="rounded-full border border-sandal-300 bg-sandal-50 px-3.5 py-1.5 text-body-sm text-ink"
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
          {isFallback ? (
            <div className="mt-3">
              <Link
                href="/topics"
                className="text-caption text-saffron-500 no-underline hover:text-saffron-600"
              >
                Browse the Topics hub →
              </Link>
            </div>
          ) : null}
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-caption text-ink-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-400" />
            Source-grounded
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-400" />
            Multiple traditions
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-400" />
            AI clearly labeled <span className="beta-badge ml-1">Beta</span>
          </span>
        </div>
      </div>
    </section>
  );
}
