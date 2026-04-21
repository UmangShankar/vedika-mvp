import Link from 'next/link';

const guides = [
  {
    title: 'How to read a source page on Vedika',
    description: 'A short guide to evaluating context, commentary, and provenance.',
    difficulty: 'Beginner',
    href: '/guides/how-to-read-source-page',
  },
  {
    title: 'Beginning with the Bhagavad Gita responsibly',
    description: 'Suggested reading sequence with linked thematic cross-references.',
    difficulty: 'Beginner',
    href: '/guides/bhagavad-gita-start',
  },
  {
    title: 'Navigating multiple commentarial traditions',
    description: 'A framework to compare interpretations without flattening differences.',
    difficulty: 'Intermediate',
    href: '/guides/commentarial-traditions',
  },
  {
    title: 'Core concepts in Vedanta for new readers',
    description: 'From Atman to Moksha — building a conceptual vocabulary before diving in.',
    difficulty: 'Beginner',
    href: '/guides/vedanta-concepts',
  },
];

const difficultyColor: Record<string, string> = {
  Beginner:     'bg-dharma-light text-dharma',
  Intermediate: 'bg-saffron-50 text-saffron-600',
  Advanced:     'bg-lotus-light text-lotus',
};

export function FeaturedGuides() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {guides.map((guide) => (
        <article
          key={guide.title}
          className="rounded-r-lg border-l-[3px] border-saffron-300 bg-sandal-50 p-5 transition-all duration-200 hover:scale-[1.01] hover:border-l-saffron-500"
        >
          <h3 className="font-serif text-subheading text-ink">{guide.title}</h3>
          <p className="mt-1.5 text-body-sm text-ink-muted">{guide.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <span
              className={`rounded-sm px-2 py-0.5 text-label ${difficultyColor[guide.difficulty] ?? 'bg-sandal-200 text-ink-muted'}`}
            >
              {guide.difficulty}
            </span>
            <Link
              href={guide.href}
              className="text-caption font-medium text-saffron-500 no-underline hover:text-saffron-600"
            >
              Read guide →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
