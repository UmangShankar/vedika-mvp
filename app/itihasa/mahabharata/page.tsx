export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { buildMetadata } from '@/lib/sanity/metadata';
import { siteConfig } from '@/lib/site-config';
import { getParvas } from '@/lib/sanity/content';
import MahabharataExplorer from '@/components/itihasa/mahabharata-explorer';

export const metadata = buildMetadata({
  title: 'Mahābhārata',
  description:
    'Explore the 18 Parvas of the Mahābhārata — verse counts from BORI Critical Edition, attributed to Veda Vyāsa.',
});

// Attach openGraph.url per spec
Object.assign(metadata, {
  openGraph: {
    ...(metadata.openGraph ?? {}),
    url: siteConfig.baseUrl,
  },
});

export default async function MahabharataPage() {
  const parvas = await getParvas();

  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1.5 text-caption text-ink-faint font-serif">
          <li><Link href="/" className="hover:text-saffron-500 no-underline">Vedika</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/itihasa" className="hover:text-saffron-500 no-underline">Itihāsa</Link></li>
          <li aria-hidden="true">›</li>
          <li className="text-ink-muted">Mahābhārata</li>
        </ol>
      </nav>

      {/* Page header */}
      <header className="border-b border-[rgba(192,120,40,0.18)] pb-8 mb-10">
        <div className="mb-4">
          <span className="text-overline text-saffron-500 bg-saffron-50 border border-saffron-100 px-3 py-1 rounded-sm inline-flex items-center gap-2">
            〰 The River
          </span>
        </div>

        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <h1 className="font-serif text-display text-ink">Mahābhārata</h1>
          <span className="devanagari text-saffron-500 text-display-sm">महाभारत</span>
        </div>

        <p className="text-caption text-ink-faint font-serif italic mb-6">
          Attributed to Veda Vyāsa · Composed and transmitted over centuries
        </p>

        <div className="flex flex-wrap gap-5 mb-6">
          {[
            { label: 'Parvas',  value: '18' },
            { label: 'Verses',  value: '~100,000' },
            { label: 'Distinction', value: 'Longest epic in world literature' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-overline text-ink-faint uppercase tracking-widest">{stat.label}</p>
              <p className="text-subheading text-ink font-serif">{stat.value}</p>
            </div>
          ))}
        </div>

        <p className="text-body-lg text-ink-light font-serif max-w-content leading-relaxed">
          The Mahābhārata is not simply a battle epic — it is an encyclopaedia of dharma,
          a meditation on duty and consequence, and a river that carries every tradition within
          it. Its 18 Parvas move from origin to exile, war to aftermath, instruction to dissolution.
        </p>
      </header>

      {/* Source notice */}
      <div className="bg-dharma-light border border-dharma-border rounded-lg p-4 text-body-sm text-ink-light mb-8">
        <span className="font-semibold">Source note — </span>
        verse counts follow BORI Critical Edition, not popular or regional counts.
        Bhagavad Gita is in Bhīṣma Parva chapters 25–42 (Critical Edition numbering).
        Author attributed as Veda Vyāsa; not listed as anonymous.
      </div>

      {/* Gita callout */}
      <div className="bg-saffron-50 border border-saffron-200 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
        <div className="flex-1">
          <p className="text-overline text-saffron-600 uppercase tracking-widest mb-1">Within Bhīṣma Parva</p>
          <p className="font-serif text-ink text-heading mb-2">Bhagavad Gita — Jñāna Chakra</p>
          <p className="text-body-sm text-ink-muted">
            The Gita&apos;s 700 verses live inside Parva 6. The Jñāna Chakra explorer gives
            chapter-level access with Devanagari, IAST, and commentary layers.
          </p>
        </div>
        <Link
          href="/bhagavad-gita"
          className="bg-saffron-500 text-white px-4 py-2 rounded-md text-sm font-medium flex-shrink-0 no-underline hover:bg-saffron-600 transition-colors"
        >
          Open Jñāna Chakra →
        </Link>
      </div>

      {/* Explorer section */}
      <section aria-labelledby="explorer-heading" className="mb-12">
        <h2 id="explorer-heading" className="text-heading font-serif text-ink mb-2">
          Explore the text
        </h2>
        <p className="text-body-sm text-ink-muted mb-5">
          Toggle between the structural parva view and key dharmic figures.
          Each parva expands to show the central teaching and characters.
        </p>
        <MahabharataExplorer parvas={parvas} />
      </section>

      {/* Footer note */}
      <footer className="border-t border-[rgba(192,120,40,0.15)] mt-12 pt-6 text-caption text-ink-faint font-serif">
        Content on this page is editorial summary, not translation. For primary source access,
        consult the{' '}
        <a
          href="https://bori.res.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-saffron-500 underline underline-offset-2 hover:text-saffron-600"
        >
          BORI Critical Edition
        </a>
        {' '}and linked source collections. Vedika&apos;s AI layer is not active on this page.
      </footer>
    </div>
  );
}
