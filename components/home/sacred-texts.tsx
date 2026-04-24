import Link from 'next/link';

const experiences = [
  {
    glyph: 'ॐ',
    glyphColor: '#C07828',
    experienceLabel: 'Four Vedas · Knowledge Tree',
    title: 'Veda Vriksha',
    description:
      'The oldest sacred literature in human existence. Rigveda, Samaveda, Yajurveda, Atharvaveda — explore their devas, rishis, themes and astronomical dating through an interactive branching tree.',
    href: '/vedas',
  },
  {
    glyph: 'गी',
    glyphColor: '#B03030',
    experienceLabel: 'Bhagavad Gita · 18 Adhyāyas · 700 Ślokas',
    title: 'Jñāna Chakra',
    description:
      'Kṛṣṇa\'s teaching to Arjuna on the field of Kurukshetra. All 18 adhyāyas with full Sanskrit ślokas, scene setting, the three yoga paths, and Śaṅkara and Rāmānuja commentary.',
    href: '/bhagavad-gita',
  },
  {
    glyph: 'उ',
    glyphColor: '#2D7A6F',
    experienceLabel: 'Principal Upaniṣads · Vedānta · End of the Vedas',
    title: 'Upaniṣad Nakṣatra',
    description:
      '108 philosophical dialogues on consciousness, Brahman, Ātman, and liberation. The four Mahāvākyas. Interactive constellation view with Śaṅkara, Rāmānuja, and Madhva commentary.',
    href: '/upanishads',
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
            Three interactive experiences — each built to let you explore primary texts directly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((e) => (
            <article
              key={e.title}
              className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-md"
            >
              {/* Top */}
              <div className="flex-1 p-6 border-b">
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: `${e.glyphColor}14` }}
                >
                  <span
                    className="devanagari text-3xl font-medium leading-none"
                    style={{ color: e.glyphColor }}
                  >
                    {e.glyph}
                  </span>
                </div>
                <p
                  className="text-overline uppercase tracking-wider mb-1"
                  style={{ color: e.glyphColor }}
                >
                  {e.experienceLabel}
                </p>
                <h3 className="font-serif text-subheading font-semibold text-ink">{e.title}</h3>
                <p className="mt-3 text-body-sm text-ink-muted">{e.description}</p>
              </div>

              {/* Bottom CTA */}
              <div className="px-6 py-4">
                <Link
                  href={e.href}
                  className="text-body-sm font-medium no-underline transition-colors"
                  style={{ color: e.glyphColor }}
                >
                  Explore →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
