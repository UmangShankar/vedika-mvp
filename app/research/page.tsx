import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Library',
  description: 'Browse Vedika research paths, thematic indexes, and source-linked summaries.'
};

export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Research Library</h1>
      <p className="text-slate-700">
        This section is structured for long-form study. Topics interlink to source collections and terminology indexes
        so readers can validate context quickly.
      </p>
      <p className="text-slate-700">
        Start with <Link href="/sources">Source Collections</Link> for primary references or go to{' '}
        <Link href="/ask-vedika">Ask Vedika (Beta)</Link> for guided query refinement.
      </p>
    </section>
  );
}
