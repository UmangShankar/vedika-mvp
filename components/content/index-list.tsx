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
        <li key={item.id} className="rounded-lg border border-amber-100 bg-white p-5">
          <h2 className="text-xl font-semibold">
            <Link href={item.href} className="no-underline hover:text-saffron">
              {item.title}
            </Link>
          </h2>
          {item.meta ? <p className="mt-1 text-sm text-slate-500">{item.meta}</p> : null}
          <p className="mt-2 text-slate-700">{item.summary}</p>
        </li>
      ))}
    </ul>
  );
}
