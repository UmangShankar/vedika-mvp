type KeyTakeawayBoxProps = {
  children: React.ReactNode;
};

export function KeyTakeawayBox({ children }: KeyTakeawayBoxProps) {
  return (
    <div className="rounded-r-lg border-l-[3px] border-saffron-300 bg-saffron-50 p-5">
      <p className="text-overline uppercase tracking-[0.12em] text-saffron-600">Key Takeaway</p>
      <div className="mt-2 font-serif text-body text-ink-light">{children}</div>
    </div>
  );
}
