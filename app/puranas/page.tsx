import type { Metadata } from 'next';
import { GunaSection } from '@/components/content/guna-section';
import { PuranaCard } from '@/components/content/purana-card';
import { GUNA_SECTIONS, PURANAS } from '@/lib/content/puranas-data';

export const metadata: Metadata = {
  title: 'The Eighteen Mahāpurāṇas | Vedika',
  description:
    'All 18 Mahāpurāṇas grouped by guṇa — Sattva, Rajas, Tamas — with tier depth indicators showing how Vedika covers each text. No text buried in a footnote.',
};

export default function PuranasPage() {
  return (
    <main>
      <div className="mx-auto max-w-full-w">
        {/* Zone 1 — Page header */}
        <div className="bg-sandal-100 px-6 py-10 border-b border-[rgba(192,120,40,0.20)]">
          <p className="text-overline text-saffron-500 mb-2 uppercase tracking-widest">
            PURĀṆA CANON · SMṚTI · 18 MAHĀPURĀṆAS
          </p>
          <h1 className="font-serif text-display text-ink mb-2">The Eighteen Mahāpurāṇas</h1>
          <p className="text-body text-ink-muted max-w-[520px] mb-4">
            All eighteen texts given proper treatment — grouped by the guṇa classification of the
            Padma Purāṇa. Each carries a depth indicator. No text is buried in a footnote.
          </p>

          {/* Tier key */}
          <div className="bg-white border border-[rgba(192,120,40,0.18)] rounded-lg px-4 py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-overline text-ink-faint mr-2 uppercase tracking-widest">DEPTH</span>
            <div className="flex items-center gap-2 text-[11px] text-ink-light">
              <span className="w-2 h-2 rounded-sm bg-saffron-500 flex-shrink-0" />
              Hub — full interpretive page, commentarial traditions
            </div>
            <div className="flex items-center gap-2 text-[11px] text-ink-light">
              <span className="w-2 h-2 rounded-full border-2 border-dharma flex-shrink-0" />
              Overview — source-grounded page, key themes
            </div>
            <div className="flex items-center gap-2 text-[11px] text-ink-light">
              <span className="w-2 h-2 rounded-full border-2 border-[rgba(192,120,40,0.40)] flex-shrink-0" />
              Collection — grouped thematically with related texts
            </div>
          </div>
        </div>

        {/* Zones 2–4 — Guṇa sections */}
        {GUNA_SECTIONS.map((section, i) => (
          <div key={section.guna}>
            {i > 0 && <div className="h-px bg-saffron-200" />}
            <GunaSection section={section}>
              {PURANAS.filter((p) => p.guna === section.guna).map((p) => (
                <PuranaCard key={p.slug} purana={p} />
              ))}
            </GunaSection>
          </div>
        ))}

        {/* Zone 5 — Canon note */}
        <div className="h-px bg-saffron-200" />
        <p className="px-6 py-4 text-caption text-ink-faint leading-relaxed border-t border-[rgba(192,120,40,0.16)]">
          Guṇa classification per Padma Purāṇa, Uttara Khaṇḍa 236.18–21 · Verse counts approximate;
          critical editions vary · Tamas label reflects Śiva&apos;s domain and carries no qualitative
          judgement · Upapurāṇas (18 minor texts incl. Devī Bhāgavata, Gaṇeśa, Nṛsiṃha) treated
          separately · Hub pages in Sprint 1: Bhāgavata, Viṣṇu, Śiva, Mārkaṇḍeya
        </p>
      </div>
    </main>
  );
}
