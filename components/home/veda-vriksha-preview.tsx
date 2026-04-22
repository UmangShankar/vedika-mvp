import Link from 'next/link';

const vedas = [
  {
    glyph: 'ऋ',
    name: 'Rigveda',
    tradition: 'Sruti · Samhita',
    date: '~6000 BCE',
    description: 'Hymns to the devas — the foundational revelation of cosmic order.',
    href: '/vedas',
    color: '#C07828',
  },
  {
    glyph: 'स',
    name: 'Samaveda',
    tradition: 'Sruti · Gana',
    date: '~4000 BCE',
    description: 'Melodies of devotion — 75 unique verses set to sacred chant.',
    href: '/vedas',
    color: '#2D7A6F',
  },
  {
    glyph: 'य',
    name: 'Yajurveda',
    tradition: 'Sruti · Yajna',
    date: '~3500 BCE',
    description: 'Ritual formulas and prose — the liturgy of the sacrificial fire.',
    href: '/vedas',
    color: '#6B3FA0',
  },
  {
    glyph: 'अ',
    name: 'Atharvaveda',
    tradition: 'Sruti · Atharvan',
    date: '~3100 BCE',
    description: 'Spells, healing hymns, and cosmological wisdom for daily life.',
    href: '/vedas',
    color: '#C0392B',
  },
];

export function VedaVriksha() {
  return (
    <div className="space-y-8">
      {/* Section heading */}
      <header className="space-y-2">
        <p className="text-overline tracking-widest text-saffron-500">The Knowledge Tree</p>
        <h2 className="font-serif text-display-sm text-ink">Veda Vriksha</h2>
        <p className="max-w-content text-body text-ink-muted">
          Four sacred revelations from one source. Explore the devas, rishis, themes and
          fascinating facts of each Veda.
        </p>
      </header>

      {/* 4-card grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {vedas.map((veda) => (
          <article
            key={veda.name}
            className="rounded-lg border bg-white p-5 shadow-card transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card-md"
          >
            {/* Devanagari glyph */}
            <div
              className="devanagari mb-3 text-[32px] leading-none"
              style={{ color: veda.color }}
              aria-hidden="true"
            >
              {veda.glyph}
            </div>

            <h3 className="font-serif text-subheading text-ink">{veda.name}</h3>

            <p className="mt-0.5 text-overline tracking-widest text-saffron-500">
              {veda.tradition}
            </p>

            <p className="mt-1 text-caption text-ink-muted">{veda.date}</p>

            <p className="mt-2 text-body-sm text-ink-muted">{veda.description}</p>

            <Link
              href={veda.href}
              className="mt-3 inline-flex text-caption text-saffron-500 no-underline hover:text-saffron-600"
            >
              Explore →
            </Link>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-2 pt-2">
        <Link
          href="/vedas"
          className="rounded-sm bg-saffron-500 px-6 py-2.5 text-body-sm font-medium text-white no-underline transition-colors hover:bg-saffron-600"
        >
          Open Veda Vriksha
        </Link>
        <p className="text-center text-caption italic text-ink-faint">
          Dates per Indian astronomical scholarship — Tilak, Subhash Kak, David Frawley
        </p>
      </div>
    </div>
  );
}
