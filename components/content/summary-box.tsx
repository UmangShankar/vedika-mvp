type SummaryBoxProps = {
  title?: string;
  content?: string;
};

export function SummaryBox({ title = 'Summary', content }: SummaryBoxProps) {
  if (!content) return null;

  return (
    <section className="rounded-xl border border-amber-100 bg-white p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-slate-700">{content}</p>
    </section>
  );
}
