type ComparisonRow = {
  aspect: string;
  left: string;
  right: string;
};

type ComparisonTableProps = {
  leftLabel: string;
  rightLabel: string;
  rows?: ComparisonRow[];
};

export function ComparisonTable({ leftLabel, rightLabel, rows = [] }: ComparisonTableProps) {
  if (!rows.length) return null;

  return (
    <div className="overflow-x-auto rounded-lg border bg-sandal-50">
      <table className="w-full min-w-[560px] text-left text-body-sm">
        <thead className="bg-sandal-100">
          <tr>
            <th className="px-4 py-3 font-semibold text-ink">Aspect</th>
            <th className="px-4 py-3 font-semibold text-ink">{leftLabel}</th>
            <th className="px-4 py-3 font-semibold text-ink">{rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.aspect} className="border-t align-top">
              <th className="px-4 py-3 font-medium text-ink">{row.aspect}</th>
              <td className="px-4 py-3 text-ink-muted">{row.left}</td>
              <td className="px-4 py-3 text-ink-muted">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
