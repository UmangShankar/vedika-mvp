import Link from 'next/link';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden bg-sandal-100 py-20 md:py-28"
    >
      {/* Decorative OM — top-right, 4% opacity */}
      <span
        aria-hidden="true"
        className="devanagari pointer-events-none absolute right-6 top-4 select-none text-[180px] leading-none text-saffron-500 opacity-[0.04]"
      >
        ॐ
      </span>

      <div className="relative mx-auto max-w-full-w px-4 text-center sm:px-6 lg:px-8">
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
