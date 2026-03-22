type CanonBadgeProps = {
  label: string;
};

export function CanonBadge({ label }: CanonBadgeProps) {
  return <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-saffron">{label}</span>;
}
