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
    <div className="mx-auto max-w-[640px] rounded-2xl border border-[rgba(192,120,40,0.20)] bg-white shadow-[0_8px_24px_rgba(28,18,8,0.10),0_2px_6px_rgba(28,18,8,0.04)] overflow-hidden">

      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(192,120,40,0.12)] bg-[#FDFAF6]">
        <div className="w-8 h-8 rounded-full bg-[#FEF7ED] border border-[#FDECD3] flex items-center justify-center shrink-0">
          <span className="text-[#C07828] text-sm font-serif">ॐ</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[0.875rem] font-semibold text-[#1C1208]">Ask Vedika</span>
            <span className="inline-flex items-center text-[0.625rem] tracking-[0.12em] font-semibold text-[#C07828] bg-[#FEF7ED] border border-[#FDECD3] px-1.5 py-0.5 rounded-sm uppercase">
              Beta
            </span>
          </div>
          <p className="text-[0.75rem] text-[#A89880] leading-none mt-0.5">Source-grounded exploration</p>
        </div>
      </div>

      {/* Chat exchange */}
      <div className="px-5 pt-5 pb-4 space-y-4">

        {/* User bubble */}
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[#F5EFE5] px-4 py-2.5">
            <p className="text-[0.875rem] text-[#1C1208] leading-relaxed">
              {SAMPLE_EXCHANGE.question}
            </p>
          </div>
        </div>

        {/* Vedika response */}
        <div className="flex justify-start gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#FEF7ED] border border-[#FDECD3] flex items-center justify-center shrink-0 mt-1">
            <span className="text-[#C07828] text-[10px] font-serif">ॐ</span>
          </div>
          <div className="flex-1 space-y-2.5">
            <div className="rounded-2xl rounded-tl-sm border border-[rgba(192,120,40,0.15)] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(28,18,8,0.05)]">
              <p className="text-[0.875rem] text-[#4A3B28] leading-[1.7] font-serif whitespace-pre-wrap">
                {SAMPLE_EXCHANGE.answer}
              </p>
            </div>

            {/* Sources */}
            <div className="space-y-1.5">
              <p className="text-[0.625rem] tracking-[0.12em] font-semibold text-[#A89880] uppercase">
                Sources
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SAMPLE_EXCHANGE.sources.map((source, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[0.75rem] text-[#7A6A56] border border-[rgba(192,120,40,0.20)] bg-[#FDFAF6] px-2 py-1 rounded-sm"
                  >
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
      <div className="px-5 py-4 bg-[#FDFAF6] border-t border-[rgba(192,120,40,0.12)] flex items-center justify-between gap-4">
        <p className="text-[0.75rem] text-[#A89880] leading-snug">
          AI guidance only. Always verify with the cited sources.
        </p>
        <Link
          href="/ask-vedika"
          className="shrink-0 bg-[#C07828] hover:bg-[#9A5E1C] text-white text-[0.8125rem] font-medium px-4 py-2 rounded-lg transition-colors no-underline whitespace-nowrap"
        >
          Try Ask Vedika →
        </Link>
      </div>

    </div>
  );
}
