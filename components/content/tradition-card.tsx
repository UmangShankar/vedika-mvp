import type { TraditionCard } from '@/lib/content/ramayana-data';

export function TraditionCardItem({ language, name, author, period, isPrimary }: TraditionCard) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        isPrimary
          ? 'border-saffron-300 bg-saffron-50'
          : 'border-[rgba(192,120,40,0.20)] bg-white'
      }`}
    >
      <p className="text-overline text-saffron-500 uppercase mb-1">{language}</p>
      <p className={`text-subheading font-semibold ${isPrimary ? 'text-saffron-600' : 'text-ink'}`}>
        {name}
      </p>
      <p className="text-caption text-ink-muted mt-1">{author}</p>
      <p className="text-caption text-ink-faint mt-1">{period}</p>
    </div>
  );
}
