import Link from 'next/link';

const guides = [
  {
    title: 'How to read a source page on Vedika',
    summary: 'A short guide to evaluating context, commentary, and provenance.'
  },
  {
    title: 'Beginning with the Bhagavad Gita responsibly',
    summary: 'Suggested reading sequence with linked thematic cross-references.'
  },
  {
    title: 'Navigating multiple commentarial traditions',
    summary: 'A framework to compare interpretations without flattening differences.'
  }
];

export function FeaturedGuides() {
  return (
    <div className="space-y-3">
      {guides.map((guide) => (
        <article key={guide.title} className="rounded-lg border border-amber-100 bg-white p-5">
          <h3 className="text-lg font-semibold">{guide.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{guide.summary}</p>
          <Link href="/research" className="mt-3 inline-flex text-sm font-medium text-saffron">
            Read guide
          </Link>
        </article>
      ))}
    </div>
  );
}
