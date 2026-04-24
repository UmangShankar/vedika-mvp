import Link from 'next/link';

const pillars = [
  {
    glyph: 'ऋ',
    experienceLabel: 'The earliest revelation',
    title: 'The Vedas',
    description:
      'Four Saṃhitās — Ṛgveda, Yajurveda, Sāmaveda, Atharvaveda — plus Brāhmaṇas, Āraṇyakas, and Upaniṣads. The foundational corpus of Sanatan Dharma.',
    stats: [
      { value: '4', label: 'Saṃhitās' },
      { value: '108', label: 'Upaniṣads' },
      { value: '10,600+', label: 'Ṛk verses' },
    ],
    href: '/vedas',
    badge: 'Śruti',
  },
  {
    glyph: 'गी',
    experienceLabel: 'The song of the divine',
    title: 'Bhagavad Gita',
    description:
      '18 chapters, 700 shlokas. The Kurukshetra crisis becomes the occasion for Kṛṣṇa to expound the three paths of Karma, Bhakti, and Jñāna Yoga.',
    stats: [
      { value: '18', label: 'Adhyāyas' },
      { value: '700', label: 'Shlokas' },
      { value: '3', label: 'Yoga paths' },
    ],
    href: '/bhagavad-gita',
    badge: 'Smṛti',
  },
  {
    glyph: 'उप',
    experienceLabel: 'The seat of wisdom',
    title: 'Upaniṣads',
    description:
      'The philosophical crown of the Vedas. Ten principal Upaniṣads expound Brahman, Ātman, and the nature of liberation through dialogue between teachers and students.',
    stats: [
      { value: '10', label: 'Principal texts' },
      { value: '108', label: 'Total texts' },
      { value: '∞', label: 'Commentaries' },
    ],
    href: '/upanishads',
    badge: 'Interactive constellation',
  },
];

export function SacredTexts() {
  return (
    <section className="w-full bg-sandal-200 py-14 md:py-20">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <header className="mb-10 space-y-2">
          <p className="text-overline uppercase tracking-widest text-saffron-500">Sacred Texts</p>
          <h2 className="font-serif text-display-sm text-ink">Three pillars of the tradition</h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-xl border border-[rgba(192,120,40,0.18)] bg-sandal-50 p-6 shadow-card"
            >
              {/* Devanagari glyph */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron-50">
                <span className="devanagari text-2xl font-medium text-saffron-500">{p.glyph}</span>
              </div>

              <p className="text-caption italic text-ink-faint">{p.experienceLabel}</p>
              <h3 className="mt-1 font-serif text-subheading font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 flex-1 text-body-sm text-ink-muted">{p.description}</p>

              {/* Stats */}
              <div className="mt-5 flex gap-6 border-t border-[rgba(192,120,40,0.14)] pt-5">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-[22px] font-medium leading-none text-ink">{s.value}</p>
                    <p className="mt-0.5 text-caption text-ink-muted">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between">
                <Link
                  href={p.href}
                  className="text-body-sm font-medium text-saffron-500 no-underline hover:text-saffron-600"
                >
                  Explore →
                </Link>
                <span className="rounded-full border border-[rgba(192,120,40,0.30)] px-2.5 py-0.5 text-caption text-ink-muted">
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
