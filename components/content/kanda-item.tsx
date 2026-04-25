import type { KandaItem } from '@/lib/content/ramayana-data';
import { ManasDeviation } from './manas-deviation';

type KandaItemProps = KandaItem & { isLast: boolean };

function circleClasses(variant?: 'primary' | 'muted' | 'highlighted'): string {
  if (variant === 'highlighted') return 'bg-saffron-300 text-ink';
  if (variant === 'muted') return 'bg-sandal-300 text-ink-light';
  return 'bg-saffron-500 text-white';
}

export function KandaItemRow({
  number,
  devanagari,
  name,
  sargas,
  shlokas,
  description,
  events,
  manasDeviation,
  visualVariant,
  isLast,
}: KandaItemProps) {
  return (
    <div className="flex gap-0">
      {/* Left column: circle + line */}
      <div className="flex flex-col items-center" style={{ width: 56 }}>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-caption font-bold ${circleClasses(visualVariant)}`}
        >
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-sandal-300 flex-1 mt-1" />}
      </div>

      {/* Right column */}
      <div className="pb-8 flex-1 min-w-0">
        {/* Header row */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-devanagari text-[22px] text-saffron-400 leading-none">{devanagari}</span>
          <span className="font-serif text-heading text-ink">{name}</span>
          <span className="text-caption text-ink-faint ml-auto whitespace-nowrap">
            {sargas} sargas · {shlokas.toLocaleString()} ślokas
          </span>
        </div>

        <p className="text-body-sm text-ink-muted max-w-[540px] mb-3">{description}</p>

        {/* Event pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {events.map((ev) => (
            <span
              key={ev}
              className="text-caption px-2.5 py-1 bg-white border border-[rgba(192,120,40,0.20)] rounded-xl text-ink-light"
            >
              {ev}
            </span>
          ))}
        </div>

        {manasDeviation && (
          <ManasDeviation heading={manasDeviation.heading} body={manasDeviation.body} />
        )}
      </div>
    </div>
  );
}
