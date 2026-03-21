import Link from 'next/link';

type RelatedReadingItem = {
  title: string;
  href: string;
  summary: string;
};

type RelatedReadingGridProps = {
  title?: string;
  items?: RelatedReadingItem[];
};

export function RelatedReadingGrid({ title = 'Related reading', items = [] }: RelatedReadingGridProps) {
  if (!items.length) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={`${item.href}-${item.title}`} className="rounded-lg border border-amber-100 bg-white p-4">
            <h3 className="font-semibold">
              <Link href={item.href} className="no-underline hover:text-saffron">
                {item.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
