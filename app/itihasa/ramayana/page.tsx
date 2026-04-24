import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rāmāyaṇa',
  description: 'The Rāmāyaṇa — 7 kāṇḍas, 24,000 ślokas, the journey of Rāma.',
};

export default function RamayanPage() {
  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-overline uppercase tracking-widest text-saffron-500 mb-2">Itihāsa</p>
      <h1 className="font-serif text-display-sm text-ink mb-4">
        <span className="devanagari mr-3 text-saffron-500">रामायण</span>
        Rāmāyaṇa
      </h1>
      <p className="text-body text-ink-muted max-w-content mb-6">
        7 kāṇḍas · 24,000 ślokas · The journey.
        Deep dive coming soon.
      </p>
      <p className="text-body-sm text-ink-faint italic">
        &ldquo;The first poem — Ādikāvya — composed by Vālmīki.&rdquo;
      </p>
    </div>
  );
}
