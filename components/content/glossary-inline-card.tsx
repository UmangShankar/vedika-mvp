import Link from 'next/link';

type GlossaryInlineCardProps = {
  term: string;
  definition: string;
  href: string;
};

export function GlossaryInlineCard({ term, definition, href }: GlossaryInlineCardProps) {
  return (
    <aside className="rounded-lg border border-amber-200 bg-amber-50 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">Glossary</p>
      <h3 className="mt-1 font-semibold">
        <Link href={href} className="no-underline hover:text-saffron">
          {term}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-slate-700">{definition}</p>
    </aside>
  );
}
