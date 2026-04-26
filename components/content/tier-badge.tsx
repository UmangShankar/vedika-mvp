import type { Tier } from '@/lib/content/puranas-data';

const CONFIG: Record<Tier, { wrapper: string; dot: string; label: string }> = {
  1: { wrapper: 'bg-saffron-500 text-white',                                     dot: 'bg-white',                        label: 'Hub' },
  2: { wrapper: 'border border-dharma text-dharma bg-transparent',               dot: 'bg-dharma',                       label: 'Overview' },
  3: { wrapper: 'border border-[rgba(192,120,40,0.40)] text-ink-faint bg-transparent', dot: 'bg-ink-faint',              label: 'Collection' },
};

export function TierBadge({ tier }: { tier: Tier }) {
  const { wrapper, dot, label } = CONFIG[tier];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[9px] tracking-wider px-2 py-0.5 rounded-full ${wrapper}`}>
      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${dot}`} />
      {label}
    </span>
  );
}
