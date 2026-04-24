import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Purāṇas',
  description: 'The 18 Mahāpurāṇas — cosmic histories, creation cycles, and the wheel of time.',
};

export default function PuranasPage() {
  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-overline uppercase tracking-widest text-saffron-500 mb-2">Purāṇa</p>
      <h1 className="font-serif text-display-sm text-ink mb-4">
        <span className="devanagari mr-3 text-saffron-500">पुराण</span>
        Purāṇas
      </h1>
      <p className="text-body text-ink-muted max-w-content mb-6">
        18 Mahāpurāṇas · The wheel of time · Cosmic histories and creation cycles.
        Deep dive coming soon.
      </p>
      <p className="text-body-sm text-ink-faint italic">
        &ldquo;Purāṇam — that which renews the ancient.&rdquo;
      </p>
    </div>
  );
}
