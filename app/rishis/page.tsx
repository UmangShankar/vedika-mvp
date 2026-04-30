export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import { EmptyState } from '@/components/content/empty-state';
import { getRishis } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Rishis',
  description: 'The seers and sages of the Vedic tradition — composers of the sacred hymns.',
});

const VEDA_COLOUR: Record<string, string> = {
  rigveda: '#C07828',
  samaveda: '#2D7A6F',
  yajurveda: '#6B3FA0',
  atharvaveda: '#C0392B',
  multiple: '#C07828',
};

export default async function RishisPage() {
  const rishis = await getRishis();

  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-overline tracking-widest text-saffron-500">Vedic tradition</p>
        <h1 className="mb-3 font-serif text-display-sm text-ink">The Rishis</h1>
        <p className="max-w-content text-body-lg text-ink-muted">
          The seers who heard the Vedas — not authors but receivers. Their names are attached
          to the hymns they perceived in deep meditation.
        </p>
      </div>

      {rishis.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rishis.map((r) => {
            const color = VEDA_COLOUR[r.vedaAssociation ?? 'rigveda'] ?? '#C07828';
            return (
              <Link key={r._id} href={`/rishis/${r.slug}`} className="no-underline group">
                <div className="rounded-lg border bg-white p-5 shadow-card transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card-md">
                  <div
                    className="devanagari mb-2 text-3xl leading-none"
                    style={{ color }}
                  >
                    {r.devanagari?.charAt(0) ?? r.name.charAt(0)}
                  </div>
                  <p className="font-serif text-subheading text-ink">{r.name}</p>
                  {r.devanagari && (
                    <p className="mt-0.5 text-caption text-ink-muted">{r.devanagari}</p>
                  )}
                  {r.epithet && (
                    <p className="mt-1.5 text-caption italic text-saffron-500">{r.epithet}</p>
                  )}
                  {r.period && (
                    <p className="mt-1 text-caption text-ink-faint">{r.period}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="No rishis published yet"
          message="Add rishi profiles in Sanity Studio to populate this page."
        />
      )}
    </div>
  );
}
