import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ask Vedika (Beta)',
  description: 'AI-assisted question exploration with explicit beta labeling and source validation guidance.'
};

export default function AskVedikaPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Ask Vedika <span className="align-middle text-base font-medium text-saffron">Beta</span>
      </h1>
      <p className="text-slate-700">
        Ask Vedika is an AI layer for question refinement and discovery. It does not replace direct study of source
        pages.
      </p>
      <div className="rounded-lg border border-amber-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Before you rely on an answer</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Cross-check claims using linked source collections.</li>
          <li>Treat output as draft guidance, not final authority.</li>
          <li>No citations are shown unless they are backed by real indexed sources.</li>
        </ul>
      </div>
      <p className="text-slate-700">
        Continue in the <Link href="/research">Research Library</Link> or inspect{' '}
        <Link href="/sources">Source Collections</Link>.
      </p>
    </section>
  );
}
