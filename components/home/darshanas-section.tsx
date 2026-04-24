'use client';

import { useState } from 'react';

type TheismType = 'sishvara' | 'nirishvara';

interface School {
  id: string;
  pair: 'nyaya-vaisheshika' | 'samkhya-yoga' | 'mimamsa-vedanta';
  devanagari: string;
  name: string;
  meaning: string;
  sutra: string;
  founder: string;
  theism: TheismType;
  pramanas: number;
  pramanaList: string[];
  focus: string;
  keyQuestion: string;
  note?: string;
  subSchools?: { name: string; founder: string }[];
}

const SCHOOLS: School[] = [
  {
    id: 'nyaya',
    pair: 'nyaya-vaisheshika',
    devanagari: 'न्याय',
    name: 'Nyāya',
    meaning: 'Logic & Valid Reasoning',
    sutra: 'Nyāya Sūtras',
    founder: 'Akṣapāda Gautama',
    theism: 'sishvara',
    pramanas: 4,
    pramanaList: ['pratyakṣa', 'anumāna', 'upamāna', 'śabda'],
    focus:
      'Liberation through tattvajñāna — correct knowledge of the 12 prameyas. Valid reasoning is the primary instrument.',
    keyQuestion: 'How do we arrive at valid knowledge?',
  },
  {
    id: 'vaisheshika',
    pair: 'nyaya-vaisheshika',
    devanagari: 'वैशेषिक',
    name: 'Vaiśeṣika',
    meaning: 'Atomism & Categories of Being',
    sutra: 'Vaiśeṣika Sūtras',
    founder: 'Kaṇāda (Ulūka)',
    theism: 'sishvara',
    pramanas: 2,
    pramanaList: ['pratyakṣa', 'anumāna'],
    focus:
      'Reality consists of 6 padārthas — dravya, guṇa, karma, sāmānya, viśeṣa, samavāya — built from eternal paramāṇus.',
    keyQuestion: 'What are the irreducible constituents of existence?',
  },
  {
    id: 'samkhya',
    pair: 'samkhya-yoga',
    devanagari: 'सांख्य',
    name: 'Sāṃkhya',
    meaning: 'Enumeration — Dualism of Puruṣa & Prakṛti',
    sutra: 'Sāṃkhya Kārikā',
    founder: 'Kapila, systematised by Īśvarakṛṣṇa',
    theism: 'nirishvara',
    pramanas: 3,
    pramanaList: ['pratyakṣa', 'anumāna', 'āgama'],
    focus:
      '25 tattvas unfold from Prakṛti. Liberation is viveka — the Puruṣa recognising its absolute separation from Prakṛti.',
    keyQuestion: 'What is the relation between consciousness and matter?',
    note:
      'Nirīśvara — does not posit God. One of two classical darśanas that are explicitly atheistic.',
  },
  {
    id: 'yoga',
    pair: 'samkhya-yoga',
    devanagari: 'योग',
    name: 'Yoga',
    meaning: 'Discipline — Stilling of Mental Fluctuations',
    sutra: 'Yoga Sūtras',
    founder: 'Patañjali',
    theism: 'sishvara',
    pramanas: 3,
    pramanaList: ['pratyakṣa', 'anumāna', 'āgama'],
    focus:
      'Yogaś citta-vṛtti-nirodhaḥ. Liberation through the aṣṭāṅga path. Accepts Sāṃkhya\'s metaphysics but adds Īśvara.',
    keyQuestion: 'How does the mind achieve complete stillness?',
    note:
      'Sīśvara — unlike twin school Sāṃkhya, Yoga accepts Īśvara as a special eternal Puruṣa (YS 1.24).',
  },
  {
    id: 'mimamsa',
    pair: 'mimamsa-vedanta',
    devanagari: 'मीमांसा',
    name: 'Mīmāṃsā',
    meaning: 'Inquiry into Vedic Injunctions',
    sutra: 'Mīmāṃsā Sūtras',
    founder: 'Jaimini',
    theism: 'nirishvara',
    pramanas: 6,
    pramanaList: ['pratyakṣa', 'anumāna', 'upamāna', 'arthāpatti', 'anupalabdhi', 'śabda'],
    focus:
      'Dharma is what the Veda enjoins — codanālakṣaṇo\'rtho dharmaḥ. The Veda is apauruṣeya: eternal, unauthored.',
    keyQuestion: 'What constitutes dharmic duty and how is it known?',
    note:
      'Nirīśvara — Kumārila Bhaṭṭa argues explicitly against theism. Vedic authority requires no God.',
  },
  {
    id: 'vedanta',
    pair: 'mimamsa-vedanta',
    devanagari: 'वेदान्त',
    name: 'Vedānta',
    meaning: 'End of the Vedas — Inquiry into Brahman',
    sutra: 'Brahma Sūtras (Vedānta Sūtras)',
    founder: 'Bādarāyaṇa',
    theism: 'sishvara',
    pramanas: 3,
    pramanaList: ['pratyakṣa', 'anumāna', 'śruti (Prasthānatraya)'],
    focus:
      'Inquiry into Brahman, Ātman, and their relation via the Prasthānatraya: Upaniṣads, Brahma Sūtras, Bhagavad Gītā.',
    keyQuestion: 'What is the relation between the individual self and ultimate reality?',
    note:
      'Vedānta is an umbrella. Each sub-school gives a different answer to every question in the matrix.',
    subSchools: [
      { name: 'Advaita', founder: 'Śaṅkara' },
      { name: 'Viśiṣṭādvaita', founder: 'Rāmānuja' },
      { name: 'Dvaita', founder: 'Madhva' },
    ],
  },
];

type FilterId = 'all' | 'nyaya-vaisheshika' | 'samkhya-yoga' | 'mimamsa-vedanta';

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all',                label: 'All six' },
  { id: 'nyaya-vaisheshika', label: 'Nyāya · Vaiśeṣika' },
  { id: 'samkhya-yoga',      label: 'Sāṃkhya · Yoga' },
  { id: 'mimamsa-vedanta',   label: 'Mīmāṃsā · Vedānta' },
];

const MATRIX = [
  {
    school: 'Nyāya',
    pramana: '4 pramāṇas',
    tattva: '16 topics of inquiry (ṣoḍaśa padārtha)',
    atman: 'Individual, eternal, bound by karma',
    moksha: 'Tattvajñāna — knowledge liberates from duḥkha',
  },
  {
    school: 'Sāṃkhya',
    pramana: '3 pramāṇas',
    tattva: '25 tattvas — 1 Puruṣa + 24 Prakṛti evolutes',
    atman: 'Plural, eternal, passive witness. Nirīśvara',
    moksha: 'Viveka — discriminating Puruṣa from Prakṛti',
  },
  {
    school: 'Vedānta',
    pramana: '3 pramāṇas (Prasthānatraya)',
    tattva: 'Varies by sub-school: Advaita (Brahman only) · Viśiṣṭādvaita (qualified non-dual) · Dvaita (5 eternal distinctions)',
    atman: 'Varies — not a single answer across sub-schools',
    moksha: 'Varies: jñāna (Advaita) · bhakti (Rāmānuja) · prapatti (Madhva)',
  },
];

function TheismPill({ theism }: { theism: TheismType }) {
  const isSishvara = theism === 'sishvara';
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-semibold ${
        isSishvara
          ? 'bg-dharma-light text-dharma border border-dharma-border'
          : 'bg-lotus-light text-lotus border border-lotus-border'
      }`}
    >
      {isSishvara ? 'Sīśvara' : 'Nirīśvara'}
    </span>
  );
}

export function DarshanasSection() {
  const [filter, setFilter] = useState<FilterId>('all');
  const [showMatrix, setShowMatrix] = useState(false);

  const visible =
    filter === 'all' ? SCHOOLS : SCHOOLS.filter((s) => s.pair === filter);

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 space-y-2">
          <p className="text-overline uppercase tracking-widest text-saffron-500">
            Āstika Philosophy
          </p>
          <h2 className="font-serif text-display-sm text-ink">Ṣaḍ Darśanas</h2>
          <p className="max-w-content text-body text-ink-muted">
            The six classical schools of Indian philosophy — each a complete system of
            epistemology, metaphysics, and soteriology. Paired as three mithuna (complementary) schools.
          </p>
        </header>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-caption font-medium transition-colors ${
                filter === f.id
                  ? 'border-saffron-500 bg-saffron-500 text-white'
                  : 'border-[rgba(192,120,40,0.25)] text-ink-muted hover:border-saffron-400 hover:text-saffron-500'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* School cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-xl border bg-sandal-50 p-5 shadow-card"
            >
              {/* Header row */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <span className="devanagari block text-2xl font-medium text-saffron-500 leading-none mb-1">
                    {s.devanagari}
                  </span>
                  <h3 className="font-serif text-subheading font-semibold text-ink">{s.name}</h3>
                  <p className="text-caption italic text-ink-muted">{s.meaning}</p>
                </div>
                <TheismPill theism={s.theism} />
              </div>

              {/* Sūtra + founder */}
              <div className="mb-4 space-y-0.5">
                <p className="text-caption text-ink-muted">
                  <span className="font-semibold text-ink-light">Sūtra:</span> {s.sutra}
                </p>
                <p className="text-caption text-ink-muted">
                  <span className="font-semibold text-ink-light">Founder:</span> {s.founder}
                </p>
                <p className="text-caption text-ink-muted">
                  <span className="font-semibold text-ink-light">Pramāṇas:</span> {s.pramanas} —{' '}
                  {s.pramanaList.join(', ')}
                </p>
              </div>

              {/* Key question */}
              <p className="mb-3 text-body-sm italic text-saffron-600">
                &ldquo;{s.keyQuestion}&rdquo;
              </p>

              {/* Focus */}
              <p className="flex-1 text-body-sm text-ink-muted">{s.focus}</p>

              {/* Sub-schools (Vedānta only) */}
              {s.subSchools && (
                <div className="mt-4 space-y-1.5">
                  <p className="text-caption font-semibold text-ink-muted">Sub-schools:</p>
                  <div className="flex flex-wrap gap-2">
                    {s.subSchools.map((sub) => (
                      <span
                        key={sub.name}
                        className="rounded-full border border-saffron-200 bg-saffron-50 px-2.5 py-0.5 text-caption text-saffron-600"
                      >
                        {sub.name} · {sub.founder}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Note callout */}
              {s.note && (
                <div className="mt-4 rounded-md border-l-2 border-dharma-border bg-dharma-light px-3 py-2">
                  <p className="text-caption text-ink-muted">{s.note}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Comparison matrix toggle */}
        <div className="mt-10">
          <button
            onClick={() => setShowMatrix((v) => !v)}
            className="flex items-center gap-2 text-body-sm font-medium text-saffron-500 hover:text-saffron-600"
          >
            <span>{showMatrix ? '▲' : '▼'}</span>
            Comparison matrix — Nyāya · Sāṃkhya · Vedānta
          </button>

          {showMatrix && (
            <div className="mt-4 overflow-x-auto rounded-xl border">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b bg-sandal-100">
                    <th className="px-4 py-3 text-left text-caption font-semibold text-ink-muted">School</th>
                    <th className="px-4 py-3 text-left text-caption font-semibold text-ink-muted">Pramāṇa</th>
                    <th className="px-4 py-3 text-left text-caption font-semibold text-ink-muted">Tattva</th>
                    <th className="px-4 py-3 text-left text-caption font-semibold text-ink-muted">Ātman</th>
                    <th className="px-4 py-3 text-left text-caption font-semibold text-ink-muted">Mokṣa</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((row, i) => (
                    <tr key={row.school} className={i % 2 === 0 ? 'bg-white' : 'bg-sandal-50'}>
                      <td className="px-4 py-3 font-serif font-semibold text-ink">{row.school}</td>
                      <td className="px-4 py-3 text-ink-muted">{row.pramana}</td>
                      <td className="px-4 py-3 text-ink-muted">{row.tattva}</td>
                      <td className="px-4 py-3 text-ink-muted">{row.atman}</td>
                      <td className="px-4 py-3 text-ink-muted">{row.moksha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="border-t bg-sandal-50 px-4 py-2 text-caption italic text-ink-faint">
                Note: Vedānta row reflects the range across Advaita, Viśiṣṭādvaita, and Dvaita — not a single school.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
