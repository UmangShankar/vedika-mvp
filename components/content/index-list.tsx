import Link from 'next/link';

type ListItem = {
  id: string;
  title: string;
  href: string;
  summary: string;
  meta?: string;
};

type IndexListProps = {
  items: ListItem[];
};

export function IndexList({ items }: IndexListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id} className="rounded-lg border bg-sandal-50 p-5 transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card">
          <h2 className="font-serif text-subheading font-semibold text-ink">
            <Link href={item.href} className="no-underline hover:text-saffron-500">
              {item.title}
            </Link>
          </h2>
          {item.meta ? <p className="mt-1 text-caption text-ink-muted">{item.meta}</p> : null}
          <p className="mt-2 text-ink-muted">{item.summary}</p>
        </li>
      ))}
    </ul>
  );
}
