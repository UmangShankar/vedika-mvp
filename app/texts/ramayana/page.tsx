import type { Metadata } from 'next';
import { TraditionCardItem } from '@/components/content/tradition-card';
import { KandaItemRow } from '@/components/content/kanda-item';
import { ShlokaBlockDisplay } from '@/components/content/shloka-block';
import {
  RAMAYANA_KANDAS,
  RAMAYANA_TRADITIONS,
  RAMAYANA_CHARACTERS,
  RAMAYANA_SHLOKA,
} from '@/lib/content/ramayana-data';
import { getText } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const dynamic = 'force-dynamic';

const FALLBACK_DESCRIPTION =
  'Source-grounded study of the Vālmīki Rāmāyaṇa across seven kāṇḍas, with Rāmcaritmānas deviation notes and a map of 300+ versions.';

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText('ramayana');
  return buildMetadata({
    title: 'Vālmīki Rāmāyaṇa | Vedika',
    description: text?.seo?.metaDescription ?? FALLBACK_DESCRIPTION,
    seo: text?.seo,
  });
}

export default async function RamayanaPage() {
  const text = await getText('ramayana');
  void text;

  return (
    <main>
      {/* Zone 1 — Hero */}
      <section className="bg-ink relative overflow-hidden py-14 px-8">
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 font-devanagari text-[180px] text-saffron-500/[0.06] leading-none pointer-events-none select-none"
        >
          ॐ
        </span>
        <p className="text-overline text-saffron-300 mb-4 uppercase tracking-widest">
          Ādikāvya · Itihāsa
        </p>
        <h1 className="font-serif text-display text-sandal-50 max-w-lg mb-3">
          The Rāmāyaṇa of Vālmīki
        </h1>
        <p className="text-body-sm text-ink-faint max-w-md mb-6">
          The ādikāvya — the first poem. ~24,000 ślokas across seven kāṇḍas. The source from which
          all later Rāma traditions flow.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            '~24,000 ślokas',
            '7 Kāṇḍas',
            'Sanskrit · Anuṣṭubh metre',
            '~5th–1st century BCE',
            'Vālmīki Maharṣi',
          ].map((badge) => (
            <span
              key={badge}
              className="text-[11px] px-2.5 py-1 border border-saffron-500/40 rounded-sm text-saffron-200 bg-saffron-500/10"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Zone 2 — Traditions */}
      <section className="py-10 px-8 bg-sandal-100">
        <p className="text-overline text-saffron-500 mb-2 uppercase tracking-widest">
          The living tradition
        </p>
        <h2 className="font-serif text-display-sm text-ink mb-2">300+ versions across India</h2>
        <p className="text-body-sm text-ink-muted mb-7">
          The Rāmāyaṇa is not one text — it is a living tradition retold across every major Indian
          language and school of thought. This page uses Vālmīki as the primary reference.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3 mb-5">
          {RAMAYANA_TRADITIONS.map((t) => (
            <TraditionCardItem key={t.name} {...t} />
          ))}
        </div>
        <div className="bg-dharma-light border border-dharma-border rounded-lg p-4 text-body-sm text-ink-light">
          This page uses Vālmīki Rāmāyaṇa as the primary reference throughout. Where the
          Rāmcaritmānas of Tulsīdāsa differs meaningfully, it is noted inline in rose-coloured
          sections.
        </div>
      </section>

      {/* Zone 3 — Kāṇḍas */}
      <section className="py-10 px-8 bg-sandal-50">
        <p className="text-overline text-saffron-500 mb-2 uppercase tracking-widest">
          The kāṇḍa journey
        </p>
        <h2 className="font-serif text-display-sm text-ink mb-2">The Seven Kāṇḍas</h2>
        <p className="text-body-sm text-ink-muted mb-8">
          Each kāṇḍa (book) is a distinct arc. Rose-coloured notes mark where Tulsīdāsa's
          Rāmcaritmānas diverges from Vālmīki.
        </p>
        <div className="flex flex-col">
          {RAMAYANA_KANDAS.map((kanda, i) => (
            <KandaItemRow key={kanda.number} {...kanda} isLast={i === 6} />
          ))}
        </div>
      </section>

      {/* Zone 4 — Shloka */}
      <section className="py-10 px-8 bg-ink relative overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute right-5 bottom-[-10px] font-devanagari text-[120px] text-saffron-500/[0.08] leading-none pointer-events-none"
        >
          रा
        </span>
        <p className="text-overline text-saffron-400 mb-4 relative z-10 uppercase tracking-widest">
          Opening śloka · Bāla Kāṇḍa 1.2
        </p>
        <div className="relative z-10">
          <ShlokaBlockDisplay {...RAMAYANA_SHLOKA} />
        </div>
      </section>

      {/* Zone 5 — Characters */}
      <section className="py-10 px-8 bg-sandal-100">
        <p className="text-overline text-saffron-500 mb-2 uppercase tracking-widest">
          Dramatis personae
        </p>
        <h2 className="font-serif text-display-sm text-ink mb-2">The central characters</h2>
        <p className="text-body-sm text-ink-muted mb-7">
          As rendered in the Vālmīki Rāmāyaṇa — complex figures whose moral weight differs from
          later devotional retellings.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
          {RAMAYANA_CHARACTERS.map((char) => (
            <div
              key={char.name}
              className="bg-white border border-[rgba(192,120,40,0.20)] rounded-xl p-4 text-center"
            >
              <span className="font-devanagari text-[32px] text-saffron-400 block mb-2 leading-none">
                {char.glyph}
              </span>
              <p className="text-subheading font-semibold text-ink mb-1">{char.name}</p>
              <p className="text-caption text-ink-muted leading-snug">{char.role}</p>
              {char.note && (
                <p className="text-caption text-ink-faint mt-1.5 italic">{char.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Zone 6 — Sources bar */}
      <section className="bg-sandal-200 border-t border-[rgba(192,120,40,0.30)] py-5 px-8 flex flex-wrap items-center gap-3">
        <span className="text-overline text-ink-faint mr-2 uppercase tracking-widest">Sources</span>
        <ul role="list" className="flex flex-wrap gap-2">
          <li><span className="source-badge">Vālmīki Rāmāyaṇa (Gita Press ed.)</span></li>
          <li><span className="source-badge">Rāmcaritmānas — Tulsīdāsa (Gita Press)</span></li>
          <li><span className="source-badge">A.K. Ramanujan — "Three Hundred Rāmāyaṇas" (1991)</span></li>
          <li><span className="source-badge">Goldman, R.P. — Vālmīki Rāmāyaṇa (Princeton trans.)</span></li>
        </ul>
      </section>
    </main>
  );
}
