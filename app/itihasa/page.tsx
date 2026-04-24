import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Itihāsa & Purāṇa',
  description: 'Explore the great Indian epics and Puranic literature — Mahābhārata, Rāmāyaṇa, and the 18 Mahāpurāṇas.',
};

export default function ItihasaPage() {
  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-overline uppercase tracking-widest text-saffron-500 mb-2">Itihāsa</p>
      <h1 className="font-serif text-display-sm text-ink mb-4">Itihāsa &amp; Purāṇa</h1>
      <p className="text-body text-ink-muted max-w-content mb-8">
        The great epics and Puranic literature — deep dives coming soon.
      </p>
      <div className="flex gap-4 flex-wrap">
        {[
          { label: 'Mahābhārata', href: '/itihasa/mahabharata' },
          { label: 'Rāmāyaṇa',   href: '/itihasa/ramayana'    },
          { label: 'Purāṇas',    href: '/itihasa/puranas'     },
        ].map(l => (
          <Link key={l.href} href={l.href}
            className="rounded-sm border border-warm px-4 py-2 text-body-sm text-ink-muted no-underline hover:text-saffron-500 hover:border-saffron-400 transition-colors">
            {l.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
