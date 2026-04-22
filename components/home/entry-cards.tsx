import Link from 'next/link';

const entries = [
  {
    glyph: 'ऋ',
    title: 'The Four Vedas',
    description: 'Rigveda, Samaveda, Yajurveda, and Atharvaveda — the foundational revelation of Sanatan Dharma.',
    href: '/texts',
  },
  {
    glyph: 'उ',
    title: 'Upanishads',
    description: 'Dialogues on consciousness, the self, and ultimate reality — the philosophical heart of Vedanta.',
    href: '/texts/upanishads',
  },
  {
    glyph: 'भ',
    title: 'Srimad Bhagavatam',
    description: 'Divine narrative across twelve cantos — the story of creation, devotion, and the life of Sri Krishna.',
    href: '/texts/srimad-bhagavatam',
  },
  {
    glyph: 'गी',
    title: 'Bhagavad Gita',
    description: "Krishna's teaching on dharma, karma, and liberation — the most studied text in the tradition.",
    href: '/texts/bhagavad-gita',
  },
];

export function EntryCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {entries.map((entry) => (
        <li key={entry.title} className="rounded-xl border border-amber-100 bg-white p-5">
          <span className="text-3xl font-semibold text-amber-600">{entry.glyph}</span>
          <h3 className="mt-2 text-lg font-semibold">{entry.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{entry.description}</p>
          <Link href={entry.href} className="mt-4 inline-flex text-sm font-medium text-amber-600 hover:text-amber-700">
            Explore →
          </Link>
        </li>
      ))}
    </ul>
  );
}
