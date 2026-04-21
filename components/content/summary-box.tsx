type SummaryBoxProps = {
  items: string[];
};

export function SummaryBox({ items }: SummaryBoxProps) {
  if (!items?.length) return null;

  return (
    <div className="rounded-lg border border-dharma-border bg-dharma-light p-5">
      <p className="text-overline uppercase tracking-[0.12em] text-dharma">In Brief</p>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-body-sm text-ink-light">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dharma" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
