import Link from 'next/link';

const pillars = [
  {
    glyph: 'ॐ',
    glyphColor: '#C47820',
    name: 'The Four Vedas',
    experienceLabel: 'Veda Vriksha — Knowledge Tree',
    experienceColor: '#C47820',
    description:
      'The oldest sacred literature in human existence. Rigveda, Samaveda, Yajurveda, Atharvaveda — explore their devas, rishis, themes and astronomical dating.',
    stats: [
      { value: '4', label: 'Vedas' },
      { value: '~6000 BCE', label: '' },
      { value: '64K+', label: 'Verses' },
    ],
    ctaLabel: 'Open Veda Vriksha →',
    href: '/vedas',
    badge: 'Interactive tree',
    ctaColor: '#C47820',
  },
  {
    glyph: 'गी',
    glyphColor: '#B03030',
    name: 'Bhagavad Gita',
    experienceLabel: 'Jñāna Chakra — Knowledge Web',
    experienceColor: '#B03030',
    description:
      'Krishna\'s teaching to Arjuna on the battlefield of Kurukshetra. All 18 adhyayas with full shlokas, scene setting, commentary and context.',
    stats: [
      { value: '18', label: 'Chapters' },
      { value: '700', label: 'Shlokas' },
      { value: '3', label: 'Yoga Paths' },
    ],
    ctaLabel: 'Open Jñāna Chakra →',
    href: '/bhagavad-gita',
    badge: 'Interactive web',
    ctaColor: '#B03030',
  },
  {
    glyph: 'उ',
    glyphColor: '#2D7A6F',
    name: 'Upanishads',
    experienceLabel: 'Vedānta — End of the Vedas',
    experienceColor: '#2D7A6F',
    description:
      '108 philosophical dialogues on consciousness, Brahman, Atman, and liberation. The heart of all Vedantic thought.',
    stats: [
      { value: '108', label: 'Texts' },
      { value: '13', label: 'Principal' },
      { value: '~800 BCE', label: '' },
    ],
    ctaLabel: 'Explore Upanishads →',
    href: '/upanishads',
    badge: 'Interactive constellation',
    ctaColor: '#2D7A6F',
  },
];

export function SacredTexts() {
  return (
    <section className="w-full bg-sandal-200 py-16">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <header className="mb-10 space-y-2">
          <p className="text-overline uppercase tracking-widest text-saffron-500">The sacred texts</p>
          <h2 className="font-serif text-display-sm text-ink">Begin with the sources</h2>
          <p className="max-w-content text-body text-ink-muted">
            Three interactive experiences — each built to let you explore the primary texts directly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-md"
            >
              {/* Card top */}
              <div className="flex-1 border-b p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: `${p.glyphColor}14` }}
                >
                  <span
                    className="font-serif text-2xl font-medium"
                    style={{ color: p.glyphColor }}
                  >
                    {p.glyph}
                  </span>
                </div>
                <p
                  className="text-overline uppercase tracking-wider"
                  style={{ color: p.experienceColor }}
                >
                  {p.experienceLabel}
                </p>
                <h3 className="mt-1 font-serif text-subheading font-semibold text-ink">{p.name}</h3>
                <p className="mt-3 text-body-sm text-ink-muted">{p.description}</p>
              </div>

              {/* Stats row */}
              <div className="flex gap-6 border-b px-6 py-4">
                {p.stats.map((s) => (
                  <div key={s.label || s.value}>
                    <p
                      className="font-serif text-[20px] font-semibold leading-none"
                      style={{ color: p.ctaColor }}
                    >
                      {s.value}
                    </p>
                    {s.label && (
                      <p className="mt-0.5 text-caption text-ink-muted">{s.label}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Card bottom */}
              <div className="flex items-center justify-between px-6 py-4">
                <Link
                  href={p.href}
                  className="text-body-sm font-medium no-underline"
                  style={{ color: p.ctaColor }}
                >
                  {p.ctaLabel}
                </Link>
                <span
                  className="rounded-full border px-2.5 py-0.5 text-caption"
                  style={{ borderColor: `${p.ctaColor}40`, color: p.ctaColor }}
                >
                  {p.badge}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
