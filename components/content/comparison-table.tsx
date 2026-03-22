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
    <div className="overflow-x-auto rounded-lg border border-amber-100 bg-white">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-amber-50">
          <tr>
            <th className="px-4 py-3 font-semibold">Aspect</th>
            <th className="px-4 py-3 font-semibold">{leftLabel}</th>
            <th className="px-4 py-3 font-semibold">{rightLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.aspect} className="border-t border-amber-100 align-top">
              <th className="px-4 py-3 font-medium">{row.aspect}</th>
              <td className="px-4 py-3 text-slate-700">{row.left}</td>
              <td className="px-4 py-3 text-slate-700">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
