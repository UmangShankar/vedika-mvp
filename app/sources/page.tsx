import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Source Collections',
  description: 'Trace Vedika topics to curated source collections and related research pages.'
};

const sourceCollections = [
  {
    name: 'Sruti',
    notes: 'Primary textual strata with contextual reading notes.'
  },
  {
    name: 'Smriti',
    notes: 'Dharmic and narrative corpus arranged by thematic relevance.'
  },
  {
    name: 'Bhashya & Tika',
    notes: 'Classical commentaries indexed by school and era.'
  }
];

export default function SourcesPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Source Collections</h1>
      <ul className="space-y-3">
        {sourceCollections.map((collection) => (
          <li key={collection.name} className="rounded-lg border border-amber-100 bg-white p-4">
            <h2 className="font-semibold">{collection.name}</h2>
            <p className="text-slate-700">{collection.notes}</p>
          </li>
        ))}
      </ul>
      <p className="text-slate-700">
        Need a topical entry point? Visit the <Link href="/research">Research Library</Link>.
      </p>
    </section>
  );
}
