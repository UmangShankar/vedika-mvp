import Link from 'next/link';

const texts = [
  {
    metaphor: 'The River',
    metaphorDesc: 'It contains everything',
    devanagari: 'महाभारत',
    name: 'Mahābhārata',
    stats: '18 Parvas · 100,000 Verses',
    description:
      'The longest epic in world literature. The Kurukshetra war between the Pāṇḍavas and Kauravas is the frame for the most comprehensive account of dharma, statecraft, and cosmic order in any tradition. The Bhagavad Gita is embedded in its 6th parva.',
    highlight: 'Contains the Bhagavad Gita — Bhīṣma Parva, chapters 25–42',
    href: '/itihasa/mahabharata',
  },
  {
    metaphor: 'The Journey',
    metaphorDesc: 'From exile to return',
    devanagari: 'रामायण',
    name: 'Rāmāyaṇa',
    stats: '7 Kāṇḍas · 24,000 Ślokas',
    description:
      'The first poem — Ādikāvya — composed by the sage Vālmīki. The journey of Rāma from Ayodhyā through exile in the forest, the abduction of Sītā by Rāvaṇa, and the great battle of Laṅkā. The ideal of dharmic kingship and devoted love.',
    highlight: 'Vālmīki — "the first poet" — composed this in anuṣṭubh metre after witnessing a heron shot by a hunter',
    href: '/itihasa/ramayana',
  },
  {
    metaphor: 'The Wheel',
    metaphorDesc: 'Of time and creation',
    devanagari: 'पुराण',
    name: 'Purāṇas',
    stats: '18 Mahāpurāṇas · 400,000+ Verses',
    description:
      'The encyclopaedia of the tradition — cosmology, genealogy, devotion, ritual, philosophy, and the great cycles of creation and dissolution. The Bhāgavata Purāṇa, Viṣṇu Purāṇa, and Śiva Purāṇa each tell the same cosmos from a different center.',
    highlight: '"Purāṇam" — that which renews what is ancient. The Purāṇas make the Vedic world accessible.',
    href: '/itihasa/puranas',
  },
];

export function ItihasaSection() {
  return (
    <section className="w-full bg-sandal-100 py-16">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <header className="mb-10 space-y-2">
          <p className="text-overline uppercase tracking-widest text-saffron-500">Itihāsa &amp; Purāṇa</p>
          <h2 className="font-serif text-display-sm text-ink">The great narratives</h2>
          <p className="max-w-content text-body text-ink-muted">
            The Itihāsas and Purāṇas are the living transmission of Vedic thought — philosophy
            through story, cosmology through myth. Deep dives coming soon.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {texts.map((t) => (
            <article
              key={t.name}
              className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-card"
            >
              {/* Metaphor badge */}
              <div className="border-b bg-sandal-50 px-6 py-3">
                <span className="text-caption font-semibold text-ink-muted">{t.metaphor}</span>
                <span className="ml-2 text-caption italic text-ink-faint">— {t.metaphorDesc}</span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <span className="devanagari block text-3xl font-medium text-saffron-500 leading-none mb-1">
                    {t.devanagari}
                  </span>
                  <h3 className="font-serif text-subheading font-semibold text-ink">{t.name}</h3>
                  <p className="mt-0.5 text-caption text-ink-muted">{t.stats}</p>
                </div>

                <p className="flex-1 text-body-sm text-ink-muted">{t.description}</p>

                {/* Highlight callout */}
                <div className="mt-5 rounded-md border-l-2 border-saffron-300 bg-saffron-50 px-4 py-3">
                  <p className="text-caption text-ink-muted italic">{t.highlight}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t px-6 py-4">
                <Link
                  href={t.href}
                  className="text-body-sm font-medium text-saffron-500 no-underline hover:text-saffron-600"
                >
                  Explore →
                </Link>
                <span className="rounded-full border border-sandal-300 bg-sandal-100 px-2.5 py-0.5 text-caption text-ink-muted">
                  Coming soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
