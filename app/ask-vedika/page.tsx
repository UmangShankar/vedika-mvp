import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ask Vedika',
  description:
    'AI-assisted exploration of Sanatan Dharma. Source-grounded responses with clear Beta labeling.',
};

const sampleQ = 'How do different commentators explain svadharma in Bhagavad Gita chapter 3?';
const sampleA =
  `Śaṅkara reads svadharma as the duties determined by one's varṇa and āśrama. Madhva emphasises devotional duty as primary. Tilak frames it as action without selfish motive. All three agree that abandoning one's own dharma (paradharma) carries inherent risk.`;
const sampleSources = ['Gita Bhashya — Śaṅkara', 'Gita Tatparya — Madhva', 'Gita Rahasya — Tilak'];

export default function AskVedikaPage() {
  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-display-sm text-ink">Ask Vedika</h1>
        <span className="beta-badge">Beta</span>
      </div>

      {/* Trust notice */}
      <div className="mb-8 rounded-lg border border-dharma-border bg-dharma-light p-4">
        <p className="text-body-sm text-ink-light">
          This is AI-assisted exploration, not authoritative commentary. Always verify claims
          with linked sources before relying on any response.
        </p>
      </div>

      {/* Chat interface */}
      <div className="rounded-xl border bg-white shadow-card-md">
        {/* Message list */}
        <div className="max-h-[500px] space-y-4 overflow-y-auto p-6">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-md rounded-lg bg-sandal-100 px-4 py-3 text-body-sm text-ink-light">
              {sampleQ}
            </div>
          </div>

          {/* Vedika response */}
          <div className="flex justify-start">
            <div className="max-w-xl rounded-lg border bg-white px-4 py-4 shadow-card">
              <p className="font-serif text-body text-ink-light">{sampleA}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {sampleSources.map((s) => (
                  <span key={s} className="source-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="border-t border-[rgba(192,120,40,0.18)] p-4">
          <form className="flex gap-3" action="#" method="post">
            <label htmlFor="ask-input" className="sr-only">
              Ask a question
            </label>
            <input
              id="ask-input"
              name="question"
              type="text"
              placeholder="Ask about a text, concept, or tradition…"
              className="w-full rounded-sm border border-[rgba(192,120,40,0.30)] bg-sandal-50 px-3 py-2 text-body-sm text-ink placeholder:text-ink-faint focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400"
            />
            <button
              type="submit"
              className="rounded-sm bg-saffron-500 px-4 py-2 text-body-sm font-medium text-white transition-colors hover:bg-saffron-600"
            >
              Ask
            </button>
          </form>
        </div>
      </div>

      {/* Below chat */}
      <p className="mt-6 text-center text-body-sm text-ink-muted">
        Or explore the{' '}
        <Link href="/research" className="text-saffron-500 underline underline-offset-4 hover:text-saffron-600">
          Research Library →
        </Link>
      </p>

      {/* Disclaimer */}
      <p className="mt-4 text-center text-caption text-ink-faint">
        AI responses are draft guidance. Always verify with linked sources.
      </p>
    </div>
  );
}
