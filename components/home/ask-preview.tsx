import Link from 'next/link';

const SAMPLE_EXCHANGE = {
  question: 'What does the Bhagavad Gita say about action without attachment?',
  answer: `The Gita's central teaching appears in 2.47 — one is entitled to perform action, but not to claim its fruits. This is the foundation of karma yoga.

Shankaracharya's Advaita reading treats this as preparation for jnana: desireless action purifies the mind until knowledge of the Self arises. Ramanujacharya's Vishishtadvaita view holds that action offered to God is itself a direct path to liberation.`,
  sources: [
    { label: 'Bhagavad Gita 2.47', type: 'primary' },
    { label: 'Bhagavad Gita 3.19', type: 'primary' },
    { label: 'Shankaracharya Gita Bhashya', type: 'commentary' },
    { label: 'Ramanujacharya Gita Bhashya', type: 'commentary' },
  ],
};

const SOURCE_ICONS: Record<string, string> = {
  primary: '📜',
  commentary: '✍️',
  scholarly: '📚',
};

export function AskPreview() {
  return (
    <div className="mx-auto max-w-[640px] overflow-hidden rounded-xl border bg-sandal-50">

      {/* Header bar */}
      <div className="flex items-center gap-3 border-b bg-sandal-100 px-5 py-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-sandal-100">
          <span className="font-serif text-sm text-saffron-500">ॐ</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-body-sm font-semibold text-ink">Ask Vedika</span>
            <span className="beta-badge">Beta</span>
          </div>
          <p className="mt-0.5 text-caption leading-none text-ink-faint">Source-grounded exploration</p>
        </div>
      </div>

      {/* Chat exchange */}
      <div className="space-y-4 px-5 pb-4 pt-5">

        {/* User bubble */}
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-lg rounded-tr-sm bg-sandal-100 px-4 py-2.5">
            <p className="text-body-sm leading-relaxed text-ink">
              {SAMPLE_EXCHANGE.question}
            </p>
          </div>
        </div>

        {/* Vedika response */}
        <div className="flex justify-start gap-2.5">
          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-sandal-100">
            <span className="font-serif text-[10px] text-saffron-500">ॐ</span>
          </div>
          <div className="flex-1 space-y-2.5">
            <div className="rounded-lg rounded-tl-sm border bg-sandal-50 px-4 py-3">
              <p className="whitespace-pre-wrap text-body-sm leading-[1.7] text-ink-light">
                {SAMPLE_EXCHANGE.answer}
              </p>
            </div>

            {/* Sources */}
            <div className="space-y-1.5">
              <p className="text-overline uppercase tracking-widest text-ink-faint">
                Sources
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SAMPLE_EXCHANGE.sources.map((source, i) => (
                  <span key={i} className="source-badge">
                    <span className="text-[11px]">{SOURCE_ICONS[source.type] ?? '📄'}</span>
                    <span>{source.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA footer */}
      <div className="flex items-center justify-between gap-4 border-t bg-sandal-100 px-5 py-4">
        <p className="text-caption leading-snug text-ink-faint">
          AI guidance only. Always verify with the cited sources.
        </p>
        <Link
          href="/ask-vedika"
          className="shrink-0 whitespace-nowrap rounded-sm bg-saffron-500 px-4 py-2 text-body-sm font-medium text-white no-underline transition-colors hover:bg-saffron-600"
        >
          Try Ask Vedika →
        </Link>
      </div>

    </div>
  );
}
