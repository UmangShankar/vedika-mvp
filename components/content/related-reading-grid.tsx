import Link from 'next/link';

type RelatedItem = {
  title: string;
  href: string;
  summary: string;
  type?: 'topic' | 'guide' | 'text';
};

type RelatedReadingGridProps = {
  title?: string;
  items?: RelatedItem[];
};

const typeBadgeClass: Record<string, string> = {
  topic: 'bg-saffron-50 text-saffron-600',
  guide: 'bg-dharma-light text-dharma',
  text:  'bg-sandal-200 text-ink-muted',
};

export function RelatedReadingGrid({ title = 'Continue reading', items = [] }: RelatedReadingGridProps) {
  if (!items.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-subheading text-ink">{title}</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={`${item.href}-${item.title}`} className="rounded-lg border bg-white p-4 shadow-card">
            {item.type && (
              <span className={`mb-2 inline-flex rounded-sm px-2 py-0.5 text-label ${typeBadgeClass[item.type] ?? ''}`}>
                {item.type}
              </span>
            )}
            <h3 className="text-body-sm font-semibold text-ink">
              <Link href={item.href} className="no-underline hover:text-saffron-500">
                {item.title}
              </Link>
            </h3>
            <p className="mt-1 text-caption text-ink-muted">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
