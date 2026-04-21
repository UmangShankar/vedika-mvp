type PullQuoteProps = {
  quote: string;
  attribution?: string;
};

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  if (!quote) return null;

  return (
    <blockquote className="my-8">
      <span aria-hidden="true" className="block font-serif text-[48px] leading-none text-saffron-200">
        &ldquo;
      </span>
      <p className="mt-2 font-serif text-heading italic text-ink-light">{quote}</p>
      {attribution && (
        <footer className="mt-3 text-right text-caption text-ink-muted">{attribution}</footer>
      )}
    </blockquote>
  );
}
