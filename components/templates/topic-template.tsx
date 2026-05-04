import Link from 'next/link';
import { ArticleHeader } from '@/components/content/article-header';
import { KeyTakeawayBox } from '@/components/content/key-takeaway-box';
import { PortableContent, toHeadingId } from '@/components/content/portable-content';
import { RelatedReadingGrid } from '@/components/content/related-reading-grid';
import { SummaryBox } from '@/components/content/summary-box';
import { TopicTableOfContents } from '@/components/traditions/topic-toc';
import type { GlossaryEntry, Topic } from '@/lib/sanity/types';

// --- Static maps ---

const TOPIC_GLOSSARY_MAP: Record<string, string[]> = {
  'atman-and-brahman':  ['atman', 'ātman', 'brahman', 'maya', 'māyā'],
  'buddhist-darshana':  ['anatman', 'anātman', 'dependent origination', 'pratītyasamutpāda', 'dukkha'],
  'carvaka-lokayata':   ['pratyaksa', 'pratyakṣa', 'pramana', 'pramāṇa', 'svabhava', 'svabhāva'],
  'dharma':             ['dharma', 'karma', 'rta', 'ṛta'],
  'jain-philosophy':    ['ahimsa', 'ahiṃsā', 'anekantavada', 'anekāntavāda', 'jiva', 'jīva'],
};

type RelatedConcept = { slug: string; name: string; question: string };

const TOPIC_RELATED_CONCEPTS: Record<string, RelatedConcept[]> = {
  'atman-and-brahman': [
    { slug: 'dharma',           name: 'Dharma',          question: 'The cosmic law connecting ātman to the world' },
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'The tradition that most directly challenges ātman' },
    { slug: 'madhyamaka',       name: 'Madhyamaka',      question: 'Śūnyatā vs Brahman — emptiness and fullness' },
    { slug: 'yogacara',         name: 'Yogācāra',        question: 'Consciousness as the sole reality' },
  ],
  'buddhist-darshana': [
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'Anātman and the four noble truths in full' },
    { slug: 'madhyamaka',       name: 'Madhyamaka',      question: 'Śūnyatā as the extension of anātman' },
    { slug: 'yogacara',         name: 'Yogācāra',        question: 'Mind-only — the idealist Buddhist school' },
    { slug: 'zen-chan',          name: 'Zen / Chan',      question: 'Direct transmission beyond scripture' },
  ],
  'carvaka-lokayata': [
    { slug: 'carvaka',          name: 'Cārvāka deep dive', question: 'The full Cārvāka philosophical tradition' },
    { slug: 'ajnana',           name: 'Ajñāna',          question: "India's school of radical skepticism" },
    { slug: 'ajivika',          name: 'Ājīvika',         question: 'Absolute fate — another heterodox challenger' },
    { slug: 'jain-philosophy',  name: 'Jain Philosophy', question: 'A contrasting heterodox tradition' },
  ],
  'dharma': [
    { slug: 'zoroastrianism',   name: 'Zoroastrianism',  question: 'Asha — the cousin concept from a shared ancestor' },
    { slug: 'confucianism',     name: 'Confucianism',    question: 'Lǐ — dharma\'s parallel in Chinese thought' },
    { slug: 'taoism',           name: 'Taoism',          question: 'The Tao — another unnameable cosmic order' },
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'How Buddhism reframes dharma as dhamma' },
  ],
  'jain-philosophy': [
    { slug: 'carvaka',          name: 'Cārvāka',         question: 'The other great heterodox challenger' },
    { slug: 'early-buddhism',   name: 'Early Buddhism',  question: 'The third great Śramaṇa movement' },
    { slug: 'ajivika',          name: 'Ājīvika',         question: 'Absolute determinism vs karmic agency' },
  ],
};

type ComparisonCallout = { darshana: string; title: string; question: string; slug?: string };

const TOPIC_COMPARISON_CALLOUTS: Record<string, ComparisonCallout[]> = {
  'atman-and-brahman': [
    {
      darshana: 'Early Buddhism',
      title: 'Ātman vs Anātman: the fundamental metaphysical fork',
      question: 'Is there a permanent self, or is selfhood a process?',
      slug: 'early-buddhism-vs-advaita',
    },
    {
      darshana: 'Madhyamaka',
      title: 'Brahman vs Śūnyatā: fullness and emptiness as ultimate reality',
      question: 'What is the ontological status of the apparent world?',
      slug: 'madhyamaka-vs-advaita',
    },
  ],
  'buddhist-darshana': [
    {
      darshana: 'Advaita Vedānta',
      title: 'Anātman vs Ātman: two routes to liberation',
      question: 'Can you reach freedom without a self to free?',
      slug: 'early-buddhism-vs-advaita',
    },
    {
      darshana: 'Madhyamaka',
      title: 'Śūnyatā vs Brahman: is emptiness the same as fullness?',
      question: 'The most sophisticated version of this debate',
      slug: 'madhyamaka-vs-advaita',
    },
    {
      darshana: 'Yogācāra',
      title: 'Vijñaptimātratā vs Brahman: two mind-only philosophies',
      question: 'When both traditions reduce everything to consciousness',
      slug: 'yogacara-vs-advaita',
    },
  ],
  'carvaka-lokayata': [
    {
      darshana: 'Nyāya',
      title: 'Cārvāka vs Nyāya: can inference survive the challenge?',
      question: 'The pramāṇa debate that drove Nyāya epistemology',
      slug: 'carvaka-vs-nyaya',
    },
    {
      darshana: 'Sāṃkhya',
      title: 'One substance or two? Materialism vs Sāṃkhya dualism',
      question: 'Cārvāka says one (matter); Sāṃkhya says two (Prakṛti + Puruṣa)',
      slug: 'carvaka-vs-samkhya',
    },
  ],
  'dharma': [
    {
      darshana: 'Zoroastrianism',
      title: 'Dharma/ṛta vs Asha: shared ancestor, diverging paths',
      question: 'The Proto-Indo-Iranian root that became two cosmic-order concepts',
      slug: 'zoroastrianism-vs-vedic',
    },
  ],
  'jain-philosophy': [
    {
      darshana: 'Advaita Vedānta',
      title: 'Anekāntavāda vs absolute non-dualism: many truths or one?',
      question: 'Can both perspectives on truth be right simultaneously?',
      slug: 'jain-philosophy-vs-advaita',
    },
    {
      darshana: 'Sāṃkhya',
      title: 'Karma as matter vs karma as guṇa-tendency',
      question: 'The most concrete metaphysical disagreement about karma',
      slug: 'jain-philosophy-vs-samkhya',
    },
  ],
};

type PronunciationEntry = { term: string; pronunciation: string; meaning?: string };

const TOPIC_PRONUNCIATION_GUIDES: Record<string, PronunciationEntry[]> = {
  'jain-philosophy': [
    { term: 'Ahiṃsā', pronunciation: 'a-HIM-saa', meaning: 'non-violence' },
    { term: 'Anekāntavāda', pronunciation: 'a-ne-KANT-a-vaa-da', meaning: 'many-sidedness of truth' },
    { term: 'Syādvāda', pronunciation: 'syaad-VAA-da', meaning: 'conditional predication' },
    { term: 'Tīrthaṅkara', pronunciation: 'teer-THAN-ka-ra', meaning: 'ford-maker, liberated teacher' },
    { term: 'Jīva', pronunciation: 'JEE-va', meaning: 'soul, living substance' },
    { term: 'Ajīva', pronunciation: 'a-JEE-va', meaning: 'non-soul substance' },
  ],
};

type TableRow = { dimension: string; traditionA: string; traditionB: string };
type ComparativeTable = { caption: string; headerA: string; headerB: string; rows: TableRow[] };

const TOPIC_COMPARATIVE_TABLES: Record<string, ComparativeTable> = {
  'jain-philosophy': {
    caption: 'Jain philosophy vs Vedānta — key metaphysical comparisons',
    headerA: 'Jainism',
    headerB: 'Vedānta / Sanātana Dharma',
    rows: [
      {
        dimension: 'Soul',
        traditionA: 'Individual jīva — eternal, real, perfectible',
        traditionB: 'Ātman — ultimately identical with Brahman (Advaita) or eternally related (Viśiṣṭādvaita / Dvaita)',
      },
      {
        dimension: 'Karma',
        traditionA: 'Fine physical matter (kārmaṇa-vargaṇā) adhering to the soul',
        traditionB: 'Moral tendency, vāsanā, or guṇa-motion — not physical substance',
      },
      {
        dimension: 'What binds the soul',
        traditionA: 'Accumulated karmic matter obscuring omniscience',
        traditionB: 'Avidyā (ignorance) or māyā — epistemic, not material',
      },
      {
        dimension: 'Liberation',
        traditionA: 'Siddha: soul at the apex of the universe — individual, omniscient, motionless',
        traditionB: 'Advaita: merger into Brahman; Dvaita: eternal participation with Īśvara',
      },
      {
        dimension: 'Creator God',
        traditionA: 'None — no creator; the world is beginningless',
        traditionB: 'Brahman (impersonal, Advaita) or Īśvara / Viṣṇu / Śiva (theistic schools)',
      },
      {
        dimension: 'Scripture',
        traditionA: 'Āgamas (the 12 Aṅgas) — oral teachings of Tīrthaṅkaras',
        traditionB: 'Vedas, Upaniṣads, Bhagavad Gītā — śruti and smṛti',
      },
    ],
  },
};

type EssaySection = { heading: string; body: string };

const TOPIC_BODY_SUPPLEMENTS: Record<string, EssaySection[]> = {
  'atman-and-brahman': [
    {
      heading: 'Three Vedāntic answers to the ātman-Brahman relation',
      body: 'Vedānta is not a single position but a family of positions, each offering a different account of how ātman (individual self) and Brahman (ultimate reality) are related.\n\nAdvaita Vedānta (Śaṅkara, 8th c. CE): ātman and Brahman are numerically identical — not just similar or related, but literally the same. The apparent multiplicity of selves is a superimposition (adhyāsa) produced by avidyā (ignorance). Liberation is the recognition of this identity.\n\nViśiṣṭādvaita (Rāmānuja, 11th–12th c. CE): ātman is real but is a mode (prakāra) of Brahman — as the body is a mode of the self. Individual selves and the world are not illusory; they are genuinely real as attributes of Brahman. Liberation is not absorption but a perfected relationship with Brahman.\n\nDvaita (Madhva, 13th c. CE): ātman and Brahman are eternally, irreducibly distinct. The individual soul is dependent on Brahman but never identical with it. Liberation is not dissolution but eternal, blissful proximity to Brahman (specifically Viṣṇu). This is the Vedāntic school closest to Western theism.',
    },
    {
      heading: 'Māyā: how one appears as many',
      body: 'Māyā is the most contested concept in Vedānta. In Advaita, māyā is the power by which Brahman appears as a multiplicity of selves and objects — it is neither purely real (it has no independent being apart from Brahman) nor purely unreal (it is not nothing — the world we experience is not nothing). Śaṅkara calls it anirvacanīya — literally \'impossible to categorise\' as either being or non-being.\n\nThe challenge māyā poses: if Brahman is pure consciousness and pure being, how does ignorance (avidyā) arise? Brahman cannot be ignorant of itself. The individual self (jīva) cannot be ignorant, because the jīva is ultimately Brahman. This is the anādi (beginningless) problem of māyā — it has no traceable origin within the system. Critics, from Rāmānuja onward, argued this makes Advaita incoherent: it posits something whose existence it cannot account for.',
    },
    {
      heading: 'The Buddhist counter-thesis: anātman',
      body: 'Buddhism\'s most radical departure from the Vedic and Upaniṣadic traditions: there is no ātman. What we call a \'self\' is a process — a causally connected series of physical and mental events (skandhas: form, feeling, perception, mental formations, consciousness) with no permanent, unchanging substrate.\n\nThis is not nihilism about persons — the Buddha explicitly rejected both the view that the self exists absolutely and the view that it does not exist at all (the two extremes his middle way avoids). The person is real as a conventional designation; the permanent, independent self is not real at the ultimate level.\n\nThe Advaita response: the Buddhist critique of the self correctly negates the ego-self (ahaṃkāra) and the empirical person — but misses the transcendent ātman, which is not a personal entity but pure witness-consciousness. Both traditions agree that the ego-self is not the ultimate reality; they disagree on whether something like consciousness-as-such (Brahman/ātman) underlies and survives the negation of the ego.',
    },
  ],
  'buddhist-darshana': [
    {
      heading: 'The three marks of existence as a philosophical system',
      body: 'The three marks (tilakkhaṇa in Pāli, trilakṣaṇa in Sanskrit) are not merely descriptive observations about experience — they form a philosophical system that is internally coherent and mutually supporting.\n\nAnicca (impermanence): everything that arises is conditioned, and everything conditioned is impermanent. This applies not only to gross objects but to mental states, sense experiences, and the sense of self itself.\n\nAnattā (non-self): the inference from anicca. If the self were real, it would be constant and in control. But what we identify as \'self\' is a changing, causally conditioned process — neither constant nor in control. Therefore, the permanent self is not there to be found.\n\nDukkha (unsatisfactoriness / suffering): the inference from both. If we identify with what is impermanent and treat non-self as self, we generate suffering — not as punishment but as a structural consequence. The structure of the mistake produces the structure of the suffering. Liberation (nibbāna) is the extinguishing of this mistaken identification — the \'blowing out\' of the flame of craving that keeps the cycle running.',
    },
    {
      heading: 'Schools of Buddhist philosophy',
      body: 'Early Buddhism (Theravāda): holds to the Buddha\'s teaching as recorded in the Pāli Canon. The world is a causally connected series of momentary events (dharmas) — each real, none permanent. The person is a conventional designation for this series.\n\nMadhyamaka (Nāgārjuna, c. 2nd c. CE): radicalises the anattā teaching into śūnyatā (emptiness). It is not just the self that lacks inherent existence — all dharmas lack svabhāva (self-nature). Even the doctrine of emptiness is empty of inherent existence. The two truths: conventional reality (things appear and function) vs ultimate reality (nothing has independent, inherent existence).\n\nYogācāra / Vijñānavāda (Asaṅga and Vasubandhu, 4th–5th c. CE): all that can be known is cognition — vijñaptimātratā (representation only). The \'external world\' is not directly knowable, and the evidence for positing an external world beyond cognition is inadequate. This is the Buddhist idealism that comes closest — in its ontological structure — to Advaita Vedānta, while remaining radically different in its rejection of ātman.\n\nZen / Chan: the Mahāyāna school that rejected scriptural learning for direct transmission — the pointing finger vs the moon it points at. Liberation is not philosophical understanding but direct realisation, transmitted from mind to mind.',
    },
  ],
};

// --- Helpers ---

function getContextGlossary(slug: string, entries: GlossaryEntry[]): GlossaryEntry[] {
  const targets = TOPIC_GLOSSARY_MAP[slug];
  if (!targets) return [];
  return entries
    .filter((e) =>
      targets.some(
        (t) =>
          e.term.toLowerCase().includes(t.toLowerCase()) ||
          t.toLowerCase().includes(e.term.toLowerCase())
      )
    )
    .slice(0, 3);
}

type TocHeadingRaw = { style?: string; children?: Array<{ text?: string }> };

function extractHeadings(blocks: TocHeadingRaw[]) {
  return blocks
    .filter((b) => b.style === 'h2')
    .map((b) => {
      const text = (b.children ?? []).map((s) => s.text ?? '').join('');
      return { id: toHeadingId(text), text };
    })
    .filter((h) => h.text.length > 0);
}

// --- Component ---

type TopicTemplateProps = {
  topic: Topic;
  slug?: string;
  relatedReading?: Array<{ title: string; href: string; summary: string }>;
  glossaryEntries?: GlossaryEntry[];
  /** @deprecated pass glossaryEntries + slug instead */
  glossarySpotlight?: GlossaryEntry | null;
};

export function TopicTemplate({
  topic,
  slug,
  relatedReading = [],
  glossaryEntries = [],
  glossarySpotlight,
}: TopicTemplateProps) {
  const effectiveSlug = slug ?? '';
  const contextGlossary = glossaryEntries.length
    ? getContextGlossary(effectiveSlug, glossaryEntries)
    : glossarySpotlight
    ? [glossarySpotlight]
    : [];

  const headings = extractHeadings((topic.body ?? []) as TocHeadingRaw[]);
  const relatedConcepts = TOPIC_RELATED_CONCEPTS[effectiveSlug] ?? [];
  const comparisonCallouts = TOPIC_COMPARISON_CALLOUTS[effectiveSlug] ?? [];
  const pronunciationGuide = TOPIC_PRONUNCIATION_GUIDES[effectiveSlug] ?? [];
  const comparativeTable = TOPIC_COMPARATIVE_TABLES[effectiveSlug] ?? null;
  const bodySupplement = TOPIC_BODY_SUPPLEMENTS[effectiveSlug] ?? [];

  return (
    <article className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader
        title={topic.title}
        subtitle={topic.summary}
        sourceCount={0}
        readingTime="5 min"
      />

      <div className="mt-8 space-y-8">
        <SummaryBox
          items={[
            topic.summary,
            `Difficulty: ${topic.difficulty ?? 'All levels'}`,
          ]}
        />

        {/* Table of contents */}
        {headings.length > 1 && <TopicTableOfContents headings={headings} />}

        <PortableContent blocks={topic.body} />

        {/* Static body supplement for sparse Sanity pages */}
        {bodySupplement.length > 0 && (
          <div className="space-y-6">
            {bodySupplement.map((section) => (
              <section key={section.heading}>
                <h2 className="mt-8 mb-4 font-serif text-heading text-ink scroll-mt-20">
                  {section.heading}
                </h2>
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-5 font-serif text-body leading-relaxed text-ink-light">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        )}

        <KeyTakeawayBox>
          Begin with {topic.title} through primary sources. Cross-check claims
          with citations before relying on conclusions.
        </KeyTakeawayBox>

        {/* Pronunciation guide */}
        {pronunciationGuide.length > 0 && (
          <section>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              How to pronounce key terms
            </p>
            <div className="rounded-lg border border-[rgba(192,120,40,0.18)] bg-sandal-50 divide-y divide-[rgba(192,120,40,0.10)]">
              {pronunciationGuide.map((entry) => (
                <div key={entry.term} className="flex items-baseline gap-4 px-4 py-2.5">
                  <span className="w-36 flex-shrink-0 font-serif text-[13px] font-medium text-ink">
                    {entry.term}
                  </span>
                  <span className="font-mono text-[12px] text-saffron-600 tracking-wide">
                    {entry.pronunciation}
                  </span>
                  {entry.meaning && (
                    <span className="text-[11px] italic text-ink-muted">— {entry.meaning}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Context-specific glossary */}
        {contextGlossary.length > 0 && (
          <section>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Key terms on this page
            </p>
            <div className="flex flex-wrap gap-2">
              {contextGlossary.map((entry) => (
                <Link
                  key={entry._id ?? entry.term}
                  href={`/glossary/${entry.slug}`}
                  className="rounded-full border border-[rgba(192,120,40,0.18)] bg-sandal-50 px-3 py-1 text-caption text-ink-muted no-underline transition-colors hover:border-[rgba(192,120,40,0.30)] hover:bg-sandal-100 hover:text-ink-light"
                >
                  {entry.term}
                  {entry.transliteration && (
                    <span className="ml-1 text-ink-faint">· {entry.transliteration}</span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Comparative table */}
        {comparativeTable && (
          <section>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Side-by-side comparison
            </p>
            <div className="overflow-x-auto rounded-lg border border-[rgba(192,120,40,0.18)]">
              <table className="w-full text-[13px]">
                <caption className="sr-only">{comparativeTable.caption}</caption>
                <thead>
                  <tr className="border-b border-[rgba(192,120,40,0.18)] bg-sandal-100">
                    <th
                      scope="col"
                      className="px-4 py-2.5 text-left font-medium text-ink-muted text-[11px] uppercase tracking-wider w-32"
                    >
                      Dimension
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2.5 text-left font-medium text-ink text-[12px]"
                    >
                      {comparativeTable.headerA}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2.5 text-left font-medium text-ink text-[12px]"
                    >
                      {comparativeTable.headerB}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(192,120,40,0.10)]">
                  {comparativeTable.rows.map((row) => (
                    <tr key={row.dimension} className="bg-sandal-50 hover:bg-sandal-100 transition-colors">
                      <td className="px-4 py-3 font-medium text-ink-muted text-[11px] uppercase tracking-wider align-top">
                        {row.dimension}
                      </td>
                      <td className="px-4 py-3 text-ink-light align-top leading-relaxed">
                        {row.traditionA}
                      </td>
                      <td className="px-4 py-3 text-ink-light align-top leading-relaxed">
                        {row.traditionB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Source badges */}
        {topic.sourceRefs && topic.sourceRefs.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 font-serif text-subheading text-ink">Sources used in this article</h2>
            <div className="flex flex-wrap gap-2">
              {topic.sourceRefs.map((source) => (
                <span key={source._id} className="source-badge">
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noreferrer" className="no-underline hover:text-saffron-500">
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                  {source.citationText && (
                    <span className="ml-1 text-ink-faint">
                      — {source.citationText.length > 80 ? `${source.citationText.slice(0, 80)}…` : source.citationText}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Comparison callout cards */}
        {comparisonCallouts.length > 0 && (
          <section>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Side-by-side comparisons
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {comparisonCallouts.map((cmp) => (
                <div
                  key={cmp.title}
                  className="rounded-lg border border-[rgba(192,120,40,0.18)] bg-sandal-50 p-4"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                    vs {cmp.darshana}
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-ink leading-snug">
                    {cmp.title}
                  </p>
                  <p className="mt-1 text-[11px] italic text-ink-muted">{cmp.question}</p>
                  <div className="mt-3">
                    {cmp.slug ? (
                      <Link
                        href={`/traditions/compare/${cmp.slug}`}
                        className="text-[12px] font-medium text-saffron-600 no-underline hover:text-saffron-700"
                      >
                        Read comparison →
                      </Link>
                    ) : (
                      <Link
                        href="/chat"
                        className="text-[12px] font-medium text-ink-muted no-underline hover:text-ink-light"
                      >
                        Ask Vedika →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related concepts */}
        {relatedConcepts.length > 0 && (
          <section>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Related traditions and concepts
            </p>
            <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
              {relatedConcepts.map((concept) => (
                <Link
                  key={concept.slug}
                  href={`/traditions/${concept.slug}`}
                  className="block rounded-md border border-[rgba(192,120,40,0.18)] bg-sandal-100 p-3 no-underline transition-colors hover:border-[rgba(192,120,40,0.30)]"
                >
                  <p className="text-[13px] font-medium text-ink">{concept.name}</p>
                  <p className="mt-0.5 text-[11px] italic text-ink-muted">{concept.question}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <RelatedReadingGrid
          items={relatedReading.map((r) => ({ ...r, type: 'guide' as const }))}
        />
      </div>
    </article>
  );
}
