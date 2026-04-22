import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veda Vriksha',
  description: 'The complete interactive knowledge tree of the four Vedas.',
};

export default function VedasPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-display text-ink">Veda Vriksha</h1>
      <p className="mt-3 text-body text-ink-muted">
        The complete interactive knowledge tree of the four Vedas
      </p>
      <p className="mt-8 rounded-lg border border-saffron-300 bg-saffron-50 px-6 py-4 text-body-sm text-ink-muted">
        Full interactive explorer coming soon — building now.
      </p>
      <Link href="/" className="mt-8 inline-flex text-caption text-saffron-500 no-underline hover:text-saffron-600">
        ← Back to homepage
      </Link>
    </main>
  );
}
