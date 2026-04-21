type SourceCardProps = {
  title: string;
  type?: string;
  description?: string;
};

export function SourceCard({ title, type, description }: SourceCardProps) {
  return (
    <article className="rounded-lg border bg-sandal-50 p-4">
      <h3 className="font-serif text-subheading text-ink">{title}</h3>
      {type ? <p className="text-overline text-ink-faint">{type}</p> : null}
      {description ? <p className="mt-2 text-body-sm text-ink-muted">{description}</p> : null}
    </article>
  );
}
