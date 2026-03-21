import Link from 'next/link';

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="space-y-5 pt-2">
      <p className="inline-flex rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-medium text-saffron">
        Content-first Sanatan Dharma research
      </p>
      <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Research Sanatan Dharma with source clarity and calm guidance.
      </h1>
      <p className="max-w-3xl text-lg text-slate-700">
        Vedika combines rigorous source-first study paths with a carefully labeled AI companion for thoughtful
        exploration.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="#featured-topics" className="rounded-md bg-saffron px-4 py-2 font-medium text-white no-underline">
          Explore Topics
        </Link>
        <Link href="/ask-vedika" className="rounded-md border border-amber-300 bg-white px-4 py-2 font-medium no-underline">
          Ask Vedika (Beta)
        </Link>
      </div>
    </section>
  );
}
