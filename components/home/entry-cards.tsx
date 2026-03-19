import Link from 'next/link';

const entries = [
  {
    title: 'Foundations of Sanatan Dharma',
    description: 'Start with core concepts, terminology, and textual map for reliable orientation.',
    href: '/research'
  },
  {
    title: 'Bhagavad Gita',
    description: 'Navigate chapter themes, key terms, and commentarial traditions with clear links.',
    href: '/sources'
  },
  {
    title: 'Upanishads',
    description: 'Follow primary ideas across principal Upanishads and classical interpretive lenses.',
    href: '/sources'
  },
  {
    title: 'Ask Vedika (Beta)',
    description: 'Use AI as a study assistant, then verify every claim through indexed source pathways.',
    href: '/ask-vedika'
  }
];

export function EntryCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {entries.map((entry) => (
        <li key={entry.title} className="rounded-xl border border-amber-100 bg-white p-5">
          <h3 className="text-lg font-semibold">{entry.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{entry.description}</p>
          <Link href={entry.href} className="mt-4 inline-flex text-sm font-medium text-saffron">
            Open section
          </Link>
        </li>
      ))}
    </ul>
  );
}
