type SourceCardProps = {
  title: string;
  type?: string;
  description?: string;
};

export function SourceCard({ title, type, description }: SourceCardProps) {
  return (
    <article className="rounded-lg border border-amber-100 bg-white p-4">
      <h3 className="font-semibold">{title}</h3>
      {type ? <p className="text-xs uppercase tracking-wide text-slate-500">{type}</p> : null}
      {description ? <p className="mt-2 text-sm text-slate-700">{description}</p> : null}
    </article>
  );
}
