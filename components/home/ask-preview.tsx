import Link from 'next/link';

const sampleQ = 'How do different commentators explain svadharma in Bhagavad Gita chapter 3?';
const sampleA =
  'Śaṅkara reads svadharma as the duties determined by one\'s varṇa and āśrama. Madhva emphasises devotional duty as primary. Tilak frames it as action without selfish motive. All three agree that abandoning one\'s own dharma carries inherent risk.';
const sources = ['Gita Bhashya — Śaṅkara', 'Gita Tatparya — Madhva', 'Gita Rahasya — Tilak'];

export function AskPreview() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left — editorial column */}
          <div className="space-y-6">
            <header className="space-y-2">
              <p className="text-overline uppercase tracking-widest text-saffron-500">Ask Vedika</p>
              <h2 className="font-serif text-display-sm text-ink">
                Ask anything. Sources first.
              </h2>
              <p className="text-body text-ink-muted">
                Vedika's AI companion surfaces answers grounded in primary texts — Vedas, Upaniṣads,
                Gita, Purāṇas. Every response links the source so you can read further.
              </p>
            </header>

            <ul className="space-y-3">
              {[
                'Answers cite chapter and verse',
                'Multiple commentators presented side-by-side',
                'Clearly labeled Beta — content always leads',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-body-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/ask-vedika"
              className="inline-flex rounded-sm bg-saffron-500 px-5 py-2.5 text-body-sm font-medium text-white no-underline transition-colors hover:bg-saffron-600"
            >
              Try Ask Vedika →
            </Link>
          </div>

          {/* Right — sample chat UI */}
          <div className="rounded-xl border bg-sandal-50 p-5 shadow-card-md md:p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-saffron-200 bg-saffron-50">
                <span className="devanagari text-sm text-saffron-500">ॐ</span>
              </div>
              <span className="font-serif text-body-sm font-semibold text-ink">Ask Vedika</span>
              <span className="beta-badge">Beta</span>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div className="max-w-xs rounded-lg bg-sandal-200 px-4 py-3 text-body-sm text-ink-light">
                {sampleQ}
              </div>
            </div>

            {/* Response */}
            <div className="mt-3 flex justify-start">
              <div className="rounded-lg border bg-white px-4 py-3">
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

            <p className="mt-4 text-caption text-ink-faint">
              AI responses are draft guidance. Always verify with linked sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
