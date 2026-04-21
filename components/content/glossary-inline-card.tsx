import Link from 'next/link';

type GlossaryInlineCardProps = {
  term: string;
  devanagari?: string;
  transliteration?: string;
  definition: string;
  href: string;
};

export function GlossaryInlineCard({
  term,
  devanagari,
  transliteration,
  definition,
  href,
}: GlossaryInlineCardProps) {
  return (
    <aside className="max-w-xs rounded-lg border bg-white p-4 shadow-card-md">
      {devanagari && (
        <span className="devanagari block text-[18px] text-saffron-500">{devanagari}</span>
      )}
      {transliteration && (
        <p className="text-label text-ink-muted">{transliteration}</p>
      )}
      {!devanagari && (
        <p className="font-semibold text-ink">{term}</p>
      )}
      <p className="mt-2 text-body-sm text-ink-light">{definition}</p>
      <Link href={href} className="mt-3 inline-flex text-caption text-saffron-500 no-underline hover:text-saffron-600">
        → Full entry
      </Link>
    </aside>
  );
}
