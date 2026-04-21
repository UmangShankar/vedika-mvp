import Link from 'next/link';

const sampleQ = 'How do different commentators explain svadharma in Bhagavad Gita chapter 3?';
const sampleA =
  `Śaṅkara reads svadharma as the duties determined by one's varṇa and āśrama. Madhva emphasises devotional duty as primary. Tilak frames it as action without selfish motive. All three agree that abandoning one's own dharma (paradharma) carries inherent risk.`;
const sources = ['Gita Bhashya — Śaṅkara', 'Gita Tatparya — Madhva', 'Gita Rahasya — Tilak'];

export function AskPreview() {
  return (
    <div className="mx-auto max-w-wide rounded-xl border bg-sandal-50 p-6 shadow-card-md md:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-saffron-200 bg-saffron-50">
          <span className="devanagari text-sm text-saffron-500">ॐ</span>
        </div>
        <h3 className="font-serif text-heading text-ink">Ask Vedika</h3>
        <span className="beta-badge">Beta</span>
      </div>

      {/* Sample exchange */}
      <div className="mt-6 space-y-4">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-md rounded-lg bg-sandal-100 px-4 py-3 text-body-sm text-ink-light">
            {sampleQ}
          </div>
        </div>

        {/* Vedika response */}
        <div className="flex justify-start">
          <div className="max-w-lg rounded-lg border bg-white px-4 py-3">
            <p className="font-serif text-body-sm text-ink-light">{sampleA}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sources.map((s) => (
                <span key={s} className="source-badge">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/ask-vedika"
          className="inline-flex rounded-sm bg-saffron-500 px-4 py-2 text-body-sm font-medium text-white no-underline hover:bg-saffron-600"
        >
          Try Ask Vedika →
        </Link>
        <p className="text-caption text-ink-faint">
          AI responses are draft guidance. Always verify with linked sources.
        </p>
      </div>
    </div>
  );
}
