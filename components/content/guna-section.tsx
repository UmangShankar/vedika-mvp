import type { ReactNode } from 'react';
import type { GunaSection } from '@/lib/content/puranas-data';

const BG: Record<string, string> = {
  sattva: 'bg-saffron-50',
  rajas:  'bg-dharma-light',
  tamas:  'bg-sandal-200',
};

const BAR: Record<string, string> = {
  sattva: 'bg-saffron-500',
  rajas:  'bg-dharma',
  tamas:  'bg-ink-muted',
};

const META: Record<string, string> = {
  sattva: 'text-saffron-600',
  rajas:  'text-dharma',
  tamas:  'text-ink-muted',
};

const DECO: Record<string, string> = {
  sattva: 'text-saffron-500/[0.12]',
  rajas:  'text-dharma/[0.12]',
  tamas:  'text-ink-muted/[0.12]',
};

export function GunaSection({
  section,
  children,
}: {
  section: GunaSection;
  children: ReactNode;
}) {
  return (
    <div className={`py-10 px-8 ${BG[section.guna]}`}>
      {/* Section header */}
      <div className="flex items-start gap-3 mb-6 pb-6 border-b border-[rgba(192,120,40,0.15)]">
        <div className={`w-1 min-h-[56px] flex-shrink-0 rounded-full ${BAR[section.guna]}`} />
        <div className="flex-1">
          <p className={`text-overline uppercase mb-1 ${META[section.guna]}`}>
            {section.meta}
          </p>
          <h2 className="font-serif text-heading font-normal text-ink mb-1">{section.name}</h2>
          <p className="text-body-sm text-ink-muted leading-relaxed max-w-[460px]">{section.desc}</p>
        </div>
        <span
          aria-hidden="true"
          className={`self-center ml-auto font-devanagari text-[48px] leading-none flex-shrink-0 ${DECO[section.guna]}`}
        >
          {section.decorativeGlyph}
        </span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-3 mt-0">{children}</div>
    </div>
  );
}
