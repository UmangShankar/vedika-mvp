import Link from 'next/link';

export function GitaPreview() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <header className="space-y-2">
        <p className="text-overline tracking-widest text-saffron-500">
          Bhagavad Gita · 18 Adhyāyas · 700 Shlokas
        </p>
        <h2 className="font-serif text-display-sm text-ink">
          Jñāna Chakra — The Knowledge Web
        </h2>
        <p className="max-w-content text-body text-ink-muted">
          Explore every chapter of the Bhagavad Gita through an interactive web. Full Sanskrit
          shlokas, scene setting, commentary and fascinating facts.
        </p>
      </header>

      {/* Stats row */}
      <div className="flex flex-wrap gap-8">
        {[
          { value: '18', label: 'Chapters' },
          { value: '700', label: 'Shlokas' },
          { value: '3', label: 'Yoga Paths' },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-[28px] font-medium leading-none text-ink">
              {stat.value}
            </p>
            <p className="mt-1 text-caption text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col items-start gap-2">
        <Link
          href="/bhagavad-gita"
          className="inline-flex rounded-sm bg-saffron-500 px-6 py-2.5 text-body-sm font-medium text-white no-underline transition-colors hover:bg-saffron-600"
        >
          Open Jñāna Chakra
        </Link>
        <p className="text-caption italic text-ink-faint">
          Narrated by Sañjaya to Dhṛtarāṣṭra on the field of Kurukshetra
        </p>
      </div>
    </div>
  );
}
