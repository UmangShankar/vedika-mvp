import Link from 'next/link';

const topics = [
  'Dharma and ethical frameworks',
  'Atman and Brahman in major Upanishads',
  'Karma and action in the Gita',
  'Yoga paths across classical texts',
  'Purusharthas in lived tradition',
  'Commentarial schools and methods'
];

export function FeaturedTopics() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <li key={topic} className="rounded-lg border border-amber-100 bg-white p-4 text-sm text-slate-800">
          {topic}
        </li>
      ))}
      <li className="rounded-lg border border-dashed border-saffron/50 bg-white p-4 text-sm">
        <Link href="/research" className="font-medium text-saffron">
          Browse all topics →
        </Link>
      </li>
    </ul>
  );
}
