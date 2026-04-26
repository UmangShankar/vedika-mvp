import type { Tenet } from '@/lib/darshanas/types'

interface TenetCardProps {
  tenet: Tenet
  index: number
  color: string
}

export function TenetCard({ tenet, index, color }: TenetCardProps) {
  return (
    <div
      className="bg-white rounded-xl border p-5 flex flex-col gap-2"
      style={{ borderColor: `${color}25` }}
    >
      <div className="flex items-start gap-3">
        <span
          className="text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white"
          style={{ backgroundColor: color }}
        >
          {index + 1}
        </span>
        <div className="text-subheading font-semibold text-ink leading-tight">{tenet.label}</div>
      </div>
      <p className="text-body-sm text-ink-muted leading-relaxed pl-9">{tenet.body}</p>
    </div>
  )
}
