type KeyTakeawayBoxProps = {
  points?: string[];
};

export function KeyTakeawayBox({ points = [] }: KeyTakeawayBoxProps) {
  if (!points.length) return null;

  return (
    <section className="rounded-xl border border-saffron/30 bg-amber-50 p-5">
      <h2 className="text-lg font-semibold">Key takeaways</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
