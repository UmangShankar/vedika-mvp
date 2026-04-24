import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mahābhārata',
  description: 'The Mahābhārata — 18 parvas, 100,000 verses, the longest epic in world literature.',
};

export default function MahabharataPage() {
  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-overline uppercase tracking-widest text-saffron-500 mb-2">Itihāsa</p>
      <h1 className="font-serif text-display-sm text-ink mb-4">
        <span className="devanagari mr-3 text-saffron-500">महाभारत</span>
        Mahābhārata
      </h1>
      <p className="text-body text-ink-muted max-w-content mb-6">
        18 parvas · 100,000 verses · The river that contains everything.
        Deep dive coming soon.
      </p>
      <p className="text-body-sm text-ink-faint italic">
        &ldquo;Whatever is here is found elsewhere. What is not here is nowhere.&rdquo;
      </p>
    </div>
  );
}
