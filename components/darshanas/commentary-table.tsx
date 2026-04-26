import type { Commentator } from '@/lib/darshanas/types'

interface CommentaryTableProps {
  commentators: Commentator[]
  color: string
}

export function CommentaryTable({ commentators, color }: CommentaryTableProps) {
  return (
    <div className="flex flex-col divide-y divide-[rgba(192,120,40,0.10)]">
      {commentators.map(c => (
        <div key={c.name} className="grid grid-cols-[160px_1fr] py-5 gap-5">
          <div className="pr-5 border-r border-[rgba(192,120,40,0.12)]">
            <div className="text-subheading font-semibold text-ink leading-tight mb-1">{c.name}</div>
            <div className="text-caption text-ink-faint">{c.period}</div>
          </div>
          <div className="pl-2">
            <span
              className="text-caption px-2.5 py-1 rounded-full inline-block mb-3"
              style={{ backgroundColor: `${color}15`, color }}
            >
              {c.work}
            </span>
            <p className="text-body-sm text-ink-muted leading-relaxed">{c.note}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
