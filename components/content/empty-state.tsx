type EmptyStateProps = {
  title: string;
  message: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-amber-200 bg-white p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-slate-700">{message}</p>
    </div>
  );
}
