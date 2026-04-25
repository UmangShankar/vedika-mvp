import Link from 'next/link';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata = buildMetadata({
  title: 'Itihāsa',
  description: 'Epic literature of Sanatan Dharma — the Mahābhārata and Rāmāyaṇa.',
});

export default function ItihasaPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-serif text-display-sm text-ink mb-4">Itihāsa</h1>
      <p className="text-body text-ink-muted mb-8">
        Epic literature of Sanatan Dharma — the Mahābhārata and Rāmāyaṇa.
      </p>
      <div className="flex flex-col gap-3">
        <Link
          href="/itihasa/mahabharata"
          className="inline-flex items-center text-body text-saffron-500 hover:text-saffron-600 font-serif no-underline"
        >
          Mahābhārata →
        </Link>
        <p className="text-body-sm text-ink-faint font-serif italic">Rāmāyaṇa — coming soon</p>
      </div>
    </div>
  );
}
