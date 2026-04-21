import Link from 'next/link';
import { CanonBadge } from '@/components/content/canon-badge';

const topics = [
  {
    badge: 'sruti' as const,
    title: 'Dharma and Ethical Frameworks',
    summary: 'How duty, cosmic order, and right conduct are defined across Vedic and post-Vedic traditions.',
    sourceCount: 12,
    href: '/topics/dharma',
  },
  {
    badge: 'smriti' as const,
    title: 'Atman and Brahman',
    summary: 'The relationship between individual consciousness and ultimate reality in principal Upanishads.',
    sourceCount: 9,
    href: '/topics/atman-brahman',
  },
  {
    badge: 'smriti' as const,
    title: 'Karma and Action',
    summary: 'The mechanics of cause and effect, intention, and liberation through right action in the Gita.',
    sourceCount: 7,
    href: '/topics/karma',
  },
];

export function FeaturedTopics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {topics.map((topic) => (
        <article
          key={topic.title}
          className="rounded-lg border bg-sandal-50 p-4 shadow-card transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card-md"
        >
          <div className="mb-3">
            <CanonBadge canon={topic.badge} />
          </div>
          <h3 className="font-serif text-heading text-ink">{topic.title}</h3>
          <p className="mt-2 text-body-sm text-ink-muted">{topic.summary}</p>
          <Link
            href={topic.href}
            className="mt-3 inline-flex text-caption text-saffron-500 no-underline hover:text-saffron-600"
          >
            {topic.sourceCount} sources →
          </Link>
        </article>
      ))}
    </div>
  );
}
