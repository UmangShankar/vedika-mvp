import Link from 'next/link';

const entries = [
  {
    glyph: 'ऋ',
    title: 'Rigveda',
    description: 'The oldest layer of Vedic literature',
    href: '/texts/rigveda',
  },
  {
    glyph: 'उ',
    title: 'Upanishads',
    description: 'Dialogues on consciousness and ultimate reality',
    href: '/texts/upanishads',
  },
  {
    glyph: 'भ',
    title: 'Bhagavatam',
    description: 'Divine narrative across ten cantos',
    href: '/texts/bhagavatam',
  },
  {
    glyph: 'गी',
    title: 'Bhagavad Gita',
    description: "Krishna's teaching on dharma and liberation",
    href: '/texts/bhagavad-gita',
  },
];

export function EntryCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {entries.map((entry) => (
        <li
          key={entry.title}
          className="rounded-lg border bg-sandal-50 p-5 shadow-card transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card-md"
        >
          {/* Devanagari glyph */}
          <span className="devanagari block text-[28px] leading-none text-saffron-500">
            {entry.glyph}
          </span>
          <h3 className="mt-3 font-serif text-subheading text-ink">{entry.title}</h3>
          <p className="mt-1 text-body-sm text-ink-muted">{entry.description}</p>
          <Link
            href={entry.href}
            className="mt-4 inline-flex text-body-sm font-medium text-saffron-500 no-underline hover:text-saffron-600"
          >
            Explore →
          </Link>
        </li>
      ))}
    </ul>
  );
}
