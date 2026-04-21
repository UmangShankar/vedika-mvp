type EmptyStateProps = {
  title: string;
  message: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-warm bg-sandal-50 p-6">
      <h2 className="font-serif text-subheading text-ink">{title}</h2>
      <p className="mt-2 text-ink-muted">{message}</p>
    </div>
  );
}
