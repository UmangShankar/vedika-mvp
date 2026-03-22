type PullQuoteProps = {
  quote: string;
};

export function PullQuote({ quote }: PullQuoteProps) {
  if (!quote) return null;

  return (
    <blockquote className="rounded-r-lg border-l-4 border-saffron bg-white px-5 py-4 text-lg italic text-slate-700">
      “{quote}”
    </blockquote>
  );
}
