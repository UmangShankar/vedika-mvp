'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

type Persona = 'beginner' | 'intermediate' | 'advanced';

type Resource = {
  label: string;
  type: 'tradition' | 'text' | 'darshana' | 'ai';
  href?: string;
};

type Step = {
  type: string;
  title: string;
  description: string;
  resources: Resource[];
  meta: string;
  source?: string;
  isTransition?: boolean;
  nextPersona?: Persona;
  isFinal?: boolean;
};

type PathData = {
  name: string;
  devanagari: string;
  label: string;
  icon: string;
  personaDesc: string;
  stepCount: string;
  description: string;
  steps: Step[];
};

const ACCENT: Record<Persona, { color: string; light: string; border: string; text: string; ring: string }> = {
  beginner:     { color: 'var(--lp-teal)',   light: 'var(--lp-teal-light)',   border: 'var(--lp-teal-border)',   text: 'var(--lp-teal-text)',   ring: 'rgba(15,107,86,0.12)'   },
  intermediate: { color: 'var(--lp-amber)',  light: 'var(--lp-amber-light)',  border: 'var(--lp-amber-border)',  text: 'var(--lp-amber-text)',  ring: 'rgba(168,88,24,0.12)'  },
  advanced:     { color: 'var(--lp-purple)', light: 'var(--lp-purple-light)', border: 'var(--lp-purple-border)', text: 'var(--lp-purple-text)', ring: 'rgba(74,56,120,0.12)'  },
};

const PATHS: Record<Persona, PathData> = {
  beginner: {
    name: 'First Steps',
    devanagari: 'जिज्ञासु',
    label: 'Beginner',
    icon: '🌱',
    personaDesc: 'New to Sanatan Dharma. Start here if terms like Vedānta, Śruti, or darśana are unfamiliar.',
    stepCount: '6 steps · ~90 min total',
    description: "Orient yourself in Sanatan Dharma — the tradition's shape, its core texts, and its six schools of philosophy",
    steps: [
      {
        type: 'Orient',
        title: 'What is Sanatan Dharma?',
        description: '"Hinduism" is a 19th-century colonial label applied to a vast, pluralistic tradition that had no single name for itself. Sanatan Dharma — "the eternal order" — is closer to how practitioners understood it: not a creed but a civilisation, not a church but a conversation across millennia. This step situates you before you read a single text.',
        resources: [
          { label: 'Traditions overview', type: 'tradition', href: '/traditions' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~10 min',
        source: 'Traditions hub',
      },
      {
        type: 'Foundation',
        title: 'The shape of the canon — Śruti, Smṛti, Itihāsa',
        description: 'Before reading any text, understand why Vedic literature is structured as it is. Śruti is "that which was heard" — the eternal, authorless revelation of the Vedas and Upaniṣads. Smṛti is "that which was remembered" — human commentary, law codes, devotional literature. Itihāsa is history — the epics that carry philosophy inside narrative.',
        resources: [
          { label: 'Texts overview', type: 'text', href: '/traditions' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~15 min',
        source: 'Texts section',
      },
      {
        type: 'First text',
        title: 'The Bhagavad Gita — the ideal entry point',
        description: 'Short enough to read in a weekend, rich enough to study for a lifetime. 700 verses embedded in the Mahābhārata (Itihāsa — not Smṛti). Three paths to liberation: jñāna (knowledge), bhakti (devotion), karma (action). The dialogue between Arjuna and Kṛṣṇa on the battlefield of Kurukṣetra is the closest thing Sanatan Dharma has to a universally accessible text.',
        resources: [
          { label: 'Bhagavad Gita', type: 'text', href: '/traditions' },
          { label: 'Ask Vedika about the Gita', type: 'ai' },
        ],
        meta: '~20 min orientation',
        source: 'Texts',
      },
      {
        type: 'Philosophy',
        title: 'The six darśanas — how India reasoned about reality',
        description: 'Six orthodox schools, each a complete philosophical system: Sāṃkhya (dualist metaphysics), Yoga (its practical counterpart), Nyāya (logic and epistemology), Vaiśeṣika (atomic theory), Mīmāṃsā (Vedic hermeneutics), Vedānta (the culmination). They share the Vedas as pramāṇa but diverge sharply on what reality is and how liberation is attained.',
        resources: [
          { label: 'Darśanas overview', type: 'darshana', href: '/darshanas' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~20 min',
        source: 'Darśanas',
      },
      {
        type: 'Explore',
        title: 'Choose a tradition to follow deeper',
        description: "Now that you have the map, choose one tradition as your first deep study. Advaita Vedānta (Śaṅkara's non-dualism) is the most philosophically dense. Vaiṣṇavism (Rāmānuja, Madhva) integrates bhakti with rigorous theology. Śaivism spans Kashmir's tantra to South India's Śaiva Siddhānta. Each has its own lineage, texts, and living practice.",
        resources: [
          { label: 'Browse traditions', type: 'tradition', href: '/traditions' },
          { label: 'Ask Vedika to recommend', type: 'ai' },
        ],
        meta: '~15 min',
        source: 'Traditions hub',
      },
      {
        type: 'Advance',
        title: 'Ready for the next level?',
        description: 'You have the structural foundation. The Intermediate path takes you into the primary texts themselves: the principal Upaniṣads, the Brahmasūtras, and the competing theological responses of Advaita, Viśiṣṭādvaita, and Vaiṣṇava bhakti.',
        resources: [],
        isTransition: true,
        nextPersona: 'intermediate',
        meta: 'When ready',
      },
    ],
  },
  intermediate: {
    name: 'Going Deeper',
    devanagari: 'साधक',
    label: 'Intermediate',
    icon: '📖',
    personaDesc: 'Familiar with the Gita, know the broad traditions. Ready for primary texts and school-level philosophy.',
    stepCount: '6 steps · ~2.5 hrs total',
    description: 'Move from orientation into the primary texts and the philosophical frameworks that organise Vedic thought',
    steps: [
      {
        type: 'Primary text',
        title: "The Upaniṣads — Vedānta's source",
        description: '108 Upaniṣads form the philosophical culmination of the Vedas (Vedānta literally means "end of the Vedas"). The Praśna, Muṇḍaka, Māṇḍūkya, Bṛhadāraṇyaka, and Chāndogya are the essential starting points. Key formula: Tat tvam asi — "That thou art." The Upaniṣads ask: what is the nature of Brahman (ultimate reality), and what is its relationship to ātman (the individual self)?',
        resources: [
          { label: 'Upaniṣads', type: 'text', href: '/traditions' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~30 min',
        source: 'Texts',
      },
      {
        type: 'School',
        title: "Advaita Vedānta — Śaṅkara's non-dualism",
        description: "Śaṅkarācārya (8th c. CE) wrote commentaries on the Upaniṣads, Brahmasūtras, and Gita that established Advaita as the dominant Vedāntic school. Core thesis: Brahman alone is ultimately real. The individual self (jīva) and the world (jagat) are not separate from Brahman — they appear separate due to avidyā (ignorance). Liberation is the recognition of this identity, not the attainment of something new.",
        resources: [
          { label: 'Advaita Vedānta', type: 'tradition', href: '/traditions/advaita-vedanta' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~25 min',
        source: 'Traditions',
      },
      {
        type: 'Philosophy',
        title: 'Sāṃkhya–Yoga — the metaphysics of practice',
        description: "Sāṃkhya gives the map: Puruṣa (pure consciousness) and Prakṛti (primal matter) as the two ultimate realities. Everything in the manifest world — including the mind — is an evolute of Prakṛti. Puruṣa is the silent witness. Yoga, as systematised by Patañjali's Yogasūtras, is the practice that follows from this: restraining the modifications of Prakṛti so the Puruṣa is revealed.",
        resources: [
          { label: 'Sāṃkhya', type: 'darshana', href: '/darshanas' },
          { label: 'Yoga darśana', type: 'darshana', href: '/darshanas' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~25 min',
        source: 'Darśanas',
      },
      {
        type: 'Primary text',
        title: "The Brahmasūtras — the canon's organising text",
        description: "555 terse aphorisms by Bādarāyaṇa that systematise Upaniṣadic teaching into a coherent philosophy of Brahman. Critically: every major Vedāntic school defines itself by its commentary (bhāṣya) on the Brahmasūtras. To understand Śaṅkara's Advaita, Rāmānuja's Viśiṣṭādvaita, or Madhva's Dvaita, you need to understand what they are each arguing the Sūtras actually mean.",
        resources: [
          { label: 'Ask Vedika about the Brahmasūtras', type: 'ai' },
        ],
        meta: '~20 min orientation',
        source: 'Research',
      },
      {
        type: 'Tradition',
        title: 'Bhakti traditions — Vaiṣṇavism and the Purāṇas',
        description: "The Bhāgavata Purāṇa (Srimad Bhagavatam) and the Pāñcarātra Āgamas form the scriptural basis of Vaiṣṇava bhakti. Rāmānuja's Viśiṣṭādvaita (\"qualified non-dualism\") and Madhva's Dvaita (\"dualism\") are both theological responses to Śaṅkara — each preserving a real distinction between the devotee and God, making bhakti meaningful in a way that Advaita's complete identity cannot.",
        resources: [
          { label: 'Vaiṣṇavism', type: 'tradition', href: '/traditions' },
          { label: 'Srimad Bhagavatam', type: 'text', href: '/traditions' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~30 min',
        source: 'Traditions + Texts',
      },
      {
        type: 'Advance',
        title: 'Ready for the advanced path?',
        description: 'The Advanced path enters the inter-school debates in depth: Advaita vs Viśiṣṭādvaita vs Dvaita on the Brahmasūtras, Kashmir Śaiva synthesis (Abhinavagupta\'s Tantrāloka), Mīmāṃsā hermeneutics, and the Nāstika (Buddhist, Jain) counterarguments that sharpened Āstika positions.',
        resources: [],
        isTransition: true,
        nextPersona: 'advanced',
        meta: 'When ready',
      },
    ],
  },
  advanced: {
    name: 'Scholarly Study',
    devanagari: 'विवेकी',
    label: 'Advanced',
    icon: '🔬',
    personaDesc: 'Deeply familiar with the texts. Entering inter-school debates, Āgamic canon, and scholarly apparatus.',
    stepCount: '6 steps · ~4 hrs total',
    description: 'Engage the inter-school debates, the commentarial tradition, the Āgamic canon, and Nāstika counterarguments',
    steps: [
      {
        type: 'Inter-school debate',
        title: 'Advaita vs Viśiṣṭādvaita vs Dvaita on the Brahmasūtras',
        description: 'Śaṅkara, Rāmānuja, and Madhva each wrote their own Brahmasūtra bhāṣya, and each arrives at a radically different conclusion about the same text. The core divergence: is the jīva (individual self) identical to Brahman, a qualified mode of Brahman, or eternally distinct from Brahman? Your position on this question determines your entire soteriological and ritual framework.',
        resources: [
          { label: 'Advaita Vedānta', type: 'tradition', href: '/traditions/advaita-vedanta' },
          { label: 'Viśiṣṭādvaita', type: 'tradition', href: '/traditions' },
          { label: 'Ask Vedika to compare schools', type: 'ai' },
        ],
        meta: '~45 min',
        source: 'Traditions',
      },
      {
        type: 'Tradition',
        title: 'Kashmir Śaivism — the Trika synthesis',
        description: "Abhinavagupta's Tantrāloka (11th c. CE) is the most philosophically comprehensive text in the Āgamic tradition. The Trika system synthesises three streams (Spanda, Pratyabhijñā, Krama) into a non-dual Śaiva philosophy that rivals Advaita in depth. Key concept: Śiva as the universal consciousness that freely contracts into individual awareness (anu) through māyā-śakti — and the recognition (pratyabhijñā) that dissolves this contraction.",
        resources: [
          { label: 'Kashmir Śaivism', type: 'tradition', href: '/traditions/kashmir-shaivism' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~40 min',
        source: 'Traditions',
      },
      {
        type: 'Darśana',
        title: 'Mīmāṃsā — the hermeneutics of Vedic injunction',
        description: "The most technically rigorous of the six darśanas, Mīmāṃsā asks: how do we correctly interpret Vedic injunctions (vidhi)? Jaimini's Mīmāṃsāsūtras and Kumārila Bhaṭṭa's Ślokavārttika are the key texts. Critical for understanding: how Vedic ritual is justified philosophically, why the Veda is held to be self-valid (svataḥprāmāṇya), and how śabda (verbal testimony) functions as pramāṇa.",
        resources: [
          { label: 'Mīmāṃsā', type: 'darshana', href: '/darshanas' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        meta: '~35 min',
        source: 'Darśanas',
      },
      {
        type: 'Cross-tradition',
        title: 'Nāstika traditions — Buddhist and Jain counterarguments',
        description: "The Āstika schools defined themselves partly in opposition to the Nāstikas — those who reject Vedic authority. Nāgārjuna's Mādhyamaka (śūnyatā: the emptiness of intrinsic nature), Dignāga's Buddhist epistemology, and the Jain anekāntavāda (non-one-sidedness) are not merely alternatives to the Āstika synthesis — they sharpened it. You cannot fully understand Śaṅkara's Advaita without reading his refutations of Buddhist idealism.",
        resources: [
          { label: 'Buddhist traditions', type: 'tradition', href: '/traditions' },
          { label: 'Jainism', type: 'tradition', href: '/traditions' },
          { label: 'Ask Vedika to map the debates', type: 'ai' },
        ],
        meta: '~40 min',
        source: 'Traditions',
      },
      {
        type: 'Primary text',
        title: 'The Āgamic canon — Śaiva, Vaiṣṇava, Śākta',
        description: 'The Āgamas are a vast revealed literature parallel to the Vedas: 28 Śaivāgamas, 108 Vaiṣṇava Pāñcarātra Saṃhitās, and the Śākta Tantras. They govern temple ritual, iconography, mantra, initiatory lineages, and cosmology. The Āgamas have received far less Western scholarly attention than the Vedas and Upaniṣads — making them the frontier of current scholarship.',
        resources: [
          { label: 'Ask Vedika about the Āgamas', type: 'ai' },
        ],
        meta: '~45 min orientation',
        source: 'Research',
      },
      {
        type: 'Research',
        title: 'Primary sources, critical editions, and scholarly apparatus',
        description: "You have completed the structured learning paths. From here, the work is in primary sources: Gretil (digital Sanskrit library), DSBC (Digital Sanskrit Buddhist Canon), critical editions from the Bhandarkar Oriental Research Institute, and the growing body of open-access Indological scholarship. Vedika's Research section indexes secondary scholarship and connects it to the primary texts.",
        resources: [
          { label: 'Research section', type: 'tradition', href: '/research' },
          { label: 'Sources', type: 'text', href: '/sources' },
          { label: 'Ask Vedika', type: 'ai' },
        ],
        isFinal: true,
        meta: 'Ongoing',
        source: 'Research + Sources',
      },
    ],
  },
};

const PERSONAS: Persona[] = ['beginner', 'intermediate', 'advanced'];
const NEXT_PERSONA: Partial<Record<Persona, Persona>> = { beginner: 'intermediate', intermediate: 'advanced' };

function chipIconStyle(type: string): React.CSSProperties {
  switch (type) {
    case 'tradition': return { background: '#e8f4f0', color: '#1a7a62' };
    case 'text':      return { background: '#fdf0e4', color: '#b05c18' };
    case 'darshana':  return { background: '#ece8f8', color: '#5040a0' };
    default:          return { background: 'rgba(255,255,255,0.15)', color: 'white' };
  }
}

function chipIconLabel(type: string): string {
  switch (type) {
    case 'tradition': return 'T';
    case 'text':      return 'S';
    case 'darshana':  return 'D';
    default:          return '✦';
  }
}

export function LearningPathsPage() {
  const [persona, setPersona] = useState<Persona>('beginner');
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<Record<Persona, Set<number>>>({
    beginner: new Set(),
    intermediate: new Set(),
    advanced: new Set(),
  });

  const pathHeaderRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const path = PATHS[persona];
  const accent = ACCENT[persona];
  const done = completed[persona];
  const total = path.steps.length;
  const doneCount = done.size;
  const pct = Math.round((doneCount / total) * 100);
  const nextPersona = NEXT_PERSONA[persona];

  const isLocked = (i: number) =>
    i > 0 && !done.has(i - 1) && !done.has(i) && activeStep !== i;

  const scrollToPathHeader = () => {
    setTimeout(() => pathHeaderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  };

  const handleSelectPersona = (p: Persona) => {
    const pathDone = completed[p];
    const pathSteps = PATHS[p].steps;
    let first = -1;
    for (let i = 0; i < pathSteps.length; i++) {
      if (!pathDone.has(i)) { first = i; break; }
    }
    setPersona(p);
    setActiveStep(first);
    scrollToPathHeader();
  };

  const handleStepClick = (i: number) => {
    if (isLocked(i)) return;
    setActiveStep(i);
  };

  const handleCompleteStep = (i: number) => {
    const newSet = new Set(completed[persona]);
    newSet.add(i);
    setCompleted({ ...completed, [persona]: newSet });
    const next = i + 1;
    if (next < total) {
      setActiveStep(next);
      setTimeout(() => stepRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
    } else {
      setActiveStep(-1);
    }
  };

  const handleTransition = (next: Persona, stepIdx: number) => {
    const newSet = new Set(completed[persona]);
    newSet.add(stepIdx);
    setCompleted({ ...completed, [persona]: newSet });
    setPersona(next);
    setActiveStep(0);
    scrollToPathHeader();
  };

  const handleRestart = () => {
    setCompleted({ ...completed, [persona]: new Set() });
    setActiveStep(0);
  };

  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">

      {/* Page header */}
      <div className="mb-10 grid grid-cols-1 items-end gap-8 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-2.5 text-overline uppercase tracking-widest text-ink-muted">Guides</p>
          <h1 className="mb-3 font-serif text-display-sm text-ink">Learning Paths</h1>
          <p className="max-w-lg text-body text-ink-muted">
            Structured journeys through Sanatan Dharma — from first encounter to advanced scholarship.
            Each path builds on the last, linking directly to Vedika's content and AI assistant.
          </p>
        </div>
        <div className="hidden gap-5 pb-1 sm:flex">
          {[['3', 'Paths'], ['18', 'Steps total']].map(([num, label]) => (
            <div key={label} className="text-right">
              <div className="font-serif text-[28px] leading-none text-ink">{num}</div>
              <div className="mt-1 text-overline uppercase tracking-widest text-ink-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Persona selector */}
      <div className="mb-8">
        <p className="mb-3 text-overline uppercase tracking-widest text-ink-muted">Choose your level</p>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {PERSONAS.map((p) => {
            const pd = PATHS[p];
            const ac = ACCENT[p];
            const isActive = persona === p;
            return (
              <div
                key={p}
                role="button"
                tabIndex={0}
                onClick={() => handleSelectPersona(p)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelectPersona(p); } }}
                className="relative cursor-pointer overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:-translate-y-px hover:shadow-card-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-saffron-400 focus-visible:outline-offset-2"
                style={isActive
                  ? { borderColor: ac.border, backgroundColor: ac.light }
                  : { borderColor: 'rgba(192,120,40,0.18)' }
                }
              >
                {/* Top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] transition-opacity duration-200"
                  style={{ backgroundColor: ac.color, opacity: isActive ? 1 : 0 }}
                />
                <div className="p-4 pt-5">
                  <div
                    className="mb-3 flex h-8 w-8 items-center justify-center rounded-full text-[15px]"
                    style={{ backgroundColor: isActive ? ac.ring : 'rgba(192,120,40,0.08)' }}
                  >
                    {pd.icon}
                  </div>
                  <p
                    className="mb-0.5 font-devanagari text-[18px] font-normal leading-tight"
                    style={isActive ? { color: ac.text } : { color: '#1C1208' }}
                  >
                    {pd.devanagari}
                  </p>
                  <p
                    className="mb-1 text-[14px] font-medium"
                    style={isActive ? { color: ac.text } : { color: '#1C1208' }}
                  >
                    {pd.label}
                  </p>
                  <p className="text-[12px] leading-snug text-ink-muted">{pd.personaDesc}</p>
                  <div className="mt-3.5 flex items-center gap-1.5 border-t border-[rgba(25,23,15,0.08)] pt-3 text-[11px] text-ink-muted">
                    <span
                      className="inline-block h-[5px] w-[5px] rounded-full"
                      style={{ backgroundColor: isActive ? ac.color : 'rgba(192,120,40,0.28)' }}
                    />
                    {pd.stepCount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Path header */}
      <div
        ref={pathHeaderRef}
        className="mb-5 flex items-center gap-5 rounded-xl border bg-white p-5"
        style={{ borderColor: 'rgba(192,120,40,0.12)' }}
      >
        <div className="flex-1">
          <p className="font-serif text-[20px] font-normal text-ink">{path.name}</p>
          <p className="mt-1 text-[13px] leading-snug text-ink-muted">{path.description}</p>
        </div>
        <span
          className="flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium"
          style={{ backgroundColor: accent.light, color: accent.text, border: `0.5px solid ${accent.border}` }}
        >
          {path.label} · {total} steps
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-[12px] text-ink-muted">
            {doneCount === total ? 'Path complete' : `${doneCount} of ${total} complete`}
          </span>
          <span className="text-[12px] font-medium text-ink-light">{pct}%</span>
        </div>
        <div
          className="h-1 overflow-hidden rounded-full"
          style={{ backgroundColor: 'rgba(192,120,40,0.12)' }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ width: `${pct}%`, backgroundColor: accent.color }}
          />
        </div>
      </div>

      {/* Steps list */}
      <div className="flex flex-col">
        {path.steps.map((step, i) => {
          const isDone = done.has(i);
          const isActive = activeStep === i;
          const locked = isLocked(i);
          const isLast = i === total - 1;

          const circleStyle: React.CSSProperties = isDone
            ? { backgroundColor: accent.color, color: 'white', borderColor: 'transparent' }
            : isActive
              ? { backgroundColor: accent.color, color: 'white', borderColor: 'transparent', boxShadow: `0 0 0 5px ${accent.light}` }
              : locked
                ? { backgroundColor: 'rgba(192,120,40,0.06)', color: 'rgba(192,120,40,0.35)', borderColor: 'rgba(192,120,40,0.12)' }
                : { backgroundColor: 'white', color: '#7A6A56', borderColor: 'rgba(192,120,40,0.20)' };

          const cardStyle: React.CSSProperties = isActive
            ? { borderColor: accent.border, backgroundColor: accent.light }
            : isDone
              ? { borderColor: 'rgba(192,120,40,0.10)', backgroundColor: '#FDFAF6' }
              : locked
                ? { borderColor: 'rgba(192,120,40,0.10)', backgroundColor: 'white', opacity: 0.45 }
                : { borderColor: 'rgba(192,120,40,0.12)', backgroundColor: 'white' };

          const titleColor: React.CSSProperties = isActive
            ? { color: accent.text }
            : isDone
              ? { color: '#9a9288' }
              : {};

          const badge = isDone ? (
            <span className="ml-2 mt-0.5 flex-shrink-0 whitespace-nowrap rounded-full border border-[rgba(192,120,40,0.16)] bg-sandal-50 px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
              Complete
            </span>
          ) : locked ? (
            <span className="ml-2 mt-0.5 flex-shrink-0 whitespace-nowrap rounded-full border border-[rgba(192,120,40,0.10)] bg-sandal-50 px-2.5 py-0.5 text-[11px] font-medium text-ink-faint">
              Locked
            </span>
          ) : isActive ? (
            <span
              className="ml-2 mt-0.5 flex-shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-medium"
              style={{ backgroundColor: accent.light, color: accent.color, border: `0.5px solid ${accent.border}` }}
            >
              {step.type}
            </span>
          ) : (
            <span className="ml-2 mt-0.5 flex-shrink-0 whitespace-nowrap rounded-full border border-[rgba(192,120,40,0.14)] bg-sandal-50 px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
              {step.type}
            </span>
          );

          return (
            <div key={i} className="flex">
              {/* Spine */}
              <div className="flex w-12 flex-shrink-0 flex-col items-center pt-5">
                <div
                  className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[12px] font-medium font-sans transition-all duration-200"
                  style={circleStyle}
                >
                  {isDone ? '✓' : i + 1}
                </div>
                {!isLast && (
                  <div
                    className="mt-1 min-h-4 w-px flex-1 transition-colors duration-300"
                    style={{
                      backgroundColor: isDone ? accent.color : 'rgba(192,120,40,0.18)',
                      opacity: isDone ? 0.35 : 1,
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="mb-3 ml-3.5 flex-1"
                ref={(el) => { stepRefs.current[i] = el; }}
              >
                <div
                  role="button"
                  tabIndex={locked ? -1 : 0}
                  aria-disabled={locked}
                  onClick={() => handleStepClick(i)}
                  onKeyDown={(e) => {
                    if (!locked && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleStepClick(i);
                    }
                  }}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    !locked ? 'cursor-pointer hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-saffron-400 focus-visible:outline-offset-2' : 'cursor-default'
                  }`}
                  style={cardStyle}
                >
                  {/* Collapsed header — always visible */}
                  <div className="flex items-start justify-between gap-3 px-5 py-4">
                    <div className="flex-1">
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.05em] text-ink-muted">
                        {step.type}
                      </p>
                      <p className="font-serif text-[18px] font-normal leading-snug" style={titleColor}>
                        {step.title}
                      </p>
                    </div>
                    {badge}
                  </div>

                  {/* Expanded content — active step only */}
                  {isActive && (
                    <div
                      className="border-t border-[rgba(192,120,40,0.12)] px-5 py-5"
                      style={{ animation: 'expandIn 0.2s ease' }}
                    >
                      <p className="mb-5 text-[14px] leading-[1.7] text-ink-light">{step.description}</p>

                      {step.resources.length > 0 && (
                        <div className="mb-5">
                          <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.07em] text-ink-muted">
                            Resources on Vedika
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.resources.map((r, ri) =>
                              r.type === 'ai' ? (
                                <Link
                                  key={ri}
                                  href={`/ask-vedika?context=learning-path-${persona}-step-${i}`}
                                  className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-normal text-white no-underline transition-opacity hover:[opacity:0.88]"
                                  style={{ backgroundColor: '#1C1208' }}
                                >
                                  <span
                                    className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded text-[10px]"
                                    style={{ background: 'rgba(255,255,255,0.15)' }}
                                  >
                                    ✦
                                  </span>
                                  {r.label}
                                </Link>
                              ) : (
                                <Link
                                  key={ri}
                                  href={r.href ?? '#'}
                                  className="inline-flex items-center gap-1.5 rounded-md border border-[rgba(192,120,40,0.18)] bg-white px-3 py-1.5 text-[12px] font-normal text-ink no-underline transition-colors hover:border-[rgba(192,120,40,0.30)] hover:bg-sandal-50"
                                >
                                  <span
                                    className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded text-[10px]"
                                    style={chipIconStyle(r.type)}
                                  >
                                    {chipIconLabel(r.type)}
                                  </span>
                                  {r.label}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Step footer */}
                      <div className="flex items-center justify-between gap-3 border-t border-[rgba(192,120,40,0.10)] pt-4">
                        <div className="flex items-center gap-3 text-[11px] text-ink-muted">
                          <span>{step.meta}</span>
                          {step.source && (
                            <>
                              <span style={{ color: 'rgba(192,120,40,0.28)' }}>·</span>
                              <span>{step.source}</span>
                            </>
                          )}
                        </div>

                        {step.isTransition ? (
                          <button
                            className="whitespace-nowrap rounded-md border border-[rgba(192,120,40,0.18)] bg-white px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-[rgba(192,120,40,0.30)] hover:bg-sandal-50"
                            onClick={(e) => { e.stopPropagation(); handleTransition(step.nextPersona!, i); }}
                          >
                            Continue to {PATHS[step.nextPersona!].name} →
                          </button>
                        ) : !isDone ? (
                          <button
                            className="whitespace-nowrap rounded-md px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: accent.color }}
                            onClick={(e) => { e.stopPropagation(); handleCompleteStep(i); }}
                          >
                            Mark complete
                          </button>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion state */}
      {doneCount === total && (
        <div
          className="mt-6 rounded-xl px-8 py-8 text-center"
          style={{ backgroundColor: accent.light, border: `0.5px solid ${accent.border}`, animation: 'expandIn 0.3s ease' }}
        >
          <p className="mb-3 font-serif text-[36px] leading-none" aria-hidden="true" style={{ color: accent.color }}>
            ॥
          </p>
          <p className="mb-2 font-serif text-[24px] font-normal text-ink">Path complete</p>
          <p className="mx-auto mb-6 max-w-sm text-[14px] leading-relaxed text-ink-muted">
            {persona === 'advanced'
              ? 'You have completed all three learning paths. The structured journey ends here — the primary sources await.'
              : `You've completed the ${path.name} path. Continue to the ${PATHS[nextPersona!].name} path when you're ready.`}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {nextPersona && (
              <button
                className="rounded-md px-5 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT[nextPersona].color }}
                onClick={() => handleSelectPersona(nextPersona)}
              >
                Continue to {PATHS[nextPersona].name} →
              </button>
            )}
            <button
              className="rounded-md border border-[rgba(192,120,40,0.18)] bg-white px-5 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-sandal-50"
              onClick={handleRestart}
            >
              Restart this path
            </button>
            <Link
              href="/ask-vedika"
              className="rounded-md border border-[rgba(192,120,40,0.18)] bg-white px-5 py-2 text-[13px] font-medium text-ink no-underline transition-colors hover:bg-sandal-50"
            >
              Ask Vedika ✦
            </Link>
          </div>
        </div>
      )}

      {/* All paths overview */}
      <div className="mt-16 border-t border-[rgba(192,120,40,0.18)] pt-8">
        <p className="mb-1 font-serif text-[20px] font-normal text-ink">All paths at a glance</p>
        <p className="mb-5 text-[13px] text-ink-muted">Click any path to jump straight in</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PERSONAS.map((p) => {
            const pd = PATHS[p];
            const ac = ACCENT[p];
            const doneCnt = completed[p].size;
            const pctDone = Math.round((doneCnt / pd.steps.length) * 100);
            const isSelected = persona === p;
            return (
              <div
                key={p}
                role="button"
                tabIndex={0}
                onClick={() => handleSelectPersona(p)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelectPersona(p); } }}
                className="relative cursor-pointer overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:border-[rgba(192,120,40,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-saffron-400 focus-visible:outline-offset-2"
                style={{ borderColor: isSelected ? 'rgba(192,120,40,0.28)' : 'rgba(192,120,40,0.12)' }}
              >
                {/* Bottom accent line */}
                <div
                  className="absolute inset-x-0 bottom-0 h-0.5 transition-opacity duration-200"
                  style={{ backgroundColor: ac.color, opacity: isSelected ? 1 : 0 }}
                />
                <div className="p-5 pb-6">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em]" style={{ color: ac.color }}>
                    {pd.devanagari} · {pd.label}
                  </p>
                  <p className="mb-1.5 font-serif text-[17px] font-normal text-ink">{pd.name}</p>
                  <p className="mb-3 text-[11px] text-ink-muted">
                    {pctDone > 0 ? `${pctDone}% complete` : 'Not started'}
                  </p>
                  <ul className="space-y-0">
                    {pd.steps.slice(0, 5).map((s, si) => (
                      <li
                        key={si}
                        className="flex items-start gap-2 border-b border-[rgba(192,120,40,0.08)] py-1 text-[12px] text-ink-muted last:border-0"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: ac.color, opacity: 0.5 }}
                        />
                        <span className="leading-snug">{s.title}</span>
                      </li>
                    ))}
                    {pd.steps.length > 5 && (
                      <li className="flex items-start gap-2 py-1 text-[12px] text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: ac.color, opacity: 0.5 }} />
                        <span>+ {pd.steps.length - 5} more</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
