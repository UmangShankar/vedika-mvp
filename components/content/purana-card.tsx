import type { Purana } from '@/lib/content/puranas-data';
import { TierBadge } from './tier-badge';

const GUNA_LEFT: Record<string, string> = {
  sattva: 'border-l-[3px] border-l-saffron-500',
  rajas:  'border-l-[3px] border-l-dharma',
  tamas:  'border-l-[3px] border-l-ink-muted',
};

const GUNA_GLYPH: Record<string, string> = {
  sattva: 'text-saffron-400',
  rajas:  'text-dharma',
  tamas:  'text-ink-muted',
};

const GUNA_BAR: Record<string, string> = {
  sattva: 'bg-saffron-300',
  rajas:  'bg-dharma-border',
  tamas:  'bg-sandal-300',
};

export function PuranaCard({ purana }: { purana: Purana }) {
  return (
    <div
      className={`bg-white rounded-lg border border-[rgba(192,120,40,0.18)] p-3 flex flex-col gap-2 ${GUNA_LEFT[purana.guna]}`}
    >
      {/* Top row */}
      <div className="flex justify-between items-start">
        <TierBadge tier={purana.tier} />
        <span className={`font-devanagari text-[20px] leading-none ${GUNA_GLYPH[purana.guna]}`}>
          {purana.glyph}
        </span>
      </div>

      {/* Name block */}
      <div>
        <p className="text-[13px] font-semibold text-ink leading-tight">{purana.name}</p>
        <p className="text-[10px] text-ink-faint mt-0.5">{purana.subtitle}</p>
      </div>

      {/* Verse bar */}
      <div className="flex flex-col gap-1">
        <div>
          <span className="text-[12px] font-bold text-ink-light tabular-nums">
            {purana.shlokas.toLocaleString()}
          </span>
          <span className="text-[9px] text-ink-faint ml-1">ślokas</span>
        </div>
        <div className="h-[2px] w-full bg-sandal-200 rounded-full">
          <div
            className={`h-[2px] rounded-full ${GUNA_BAR[purana.guna]}`}
            style={{ width: `${purana.barPct}%` }}
          />
        </div>
      </div>

      {/* Theme tags */}
      <div className="flex flex-wrap gap-1">
        {purana.special && (
          <span className="text-[9.5px] px-1.5 py-0.5 bg-lotus-light border border-lotus-border rounded-full text-lotus">
            {purana.special}
          </span>
        )}
        {purana.themes.map((theme) => (
          <span
            key={theme}
            className="text-[9.5px] px-1.5 py-0.5 bg-sandal-100 border border-[rgba(192,120,40,0.16)] rounded-full text-ink-muted"
          >
            {theme}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-[11px] text-ink-muted leading-relaxed flex-1">{purana.desc}</p>
    </div>
  );
}
