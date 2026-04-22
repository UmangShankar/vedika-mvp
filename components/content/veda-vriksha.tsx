'use client';

import Link from 'next/link';
import { useState } from 'react';

/* ─── types ─────────────────────────────────────────────── */
type DevaSymbol = 'bolt' | 'flame' | 'moon' | 'wave' | 'sun' | 'lotus' | 'trident' | 'pillar';

interface Deva {
  name: string;
  devanagari: string;
  role: string;
  hymns: string;
  symbol: DevaSymbol;
}
interface Rishi {
  name: string;
  devanagari: string;
  role: string;
  badge: string;
  glossarySlug: string;
}
interface Theme {
  name: string;
  description: string;
}
interface Fact {
  title: string;
  body: string;
  question: string;
}
interface Verse {
  devanagari: string;
  iast: string;
  meaning: string;
  source: string;
}
interface VedaData {
  id: string;
  name: string;
  devanagari: string;
  glyph: string;
  color: string;
  colorLight: string;
  era: string;
  description: string;
  devas: Deva[];
  rishis: Rishi[];
  themes: Theme[];
  facts: Fact[];
  verse: Verse;
  cx: number;
  cy: number;
  date: string;
}

/* ─── SVG symbol component ───────────────────────────────── */
function DevaIcon({ symbol, color }: { symbol: DevaSymbol; color: string }) {
  const paths: Record<DevaSymbol, React.ReactNode> = {
    bolt: <path d="M12 2L7 11h5l-3 7 7-9H11Z" fill="currentColor" />,
    flame: (
      <path
        d="M10 18C6 15 5 11 7 8C8 6 9 6 9 9C10 6 11 2 13 5C15 8 15 12 12 14C12 11 11 10 11 13C13 13 14 15 12 17 11.5 17.5 10.5 18 10 18Z"
        fill="currentColor"
      />
    ),
    moon: (
      <path
        d="M14 10A6 6 0 0 1 8 4C5.5 4 3 6.5 3 10C3 13.5 5.5 16 8 16C11.5 16 14 13.5 14 10Z"
        fill="currentColor"
      />
    ),
    wave: (
      <path
        d="M1 11C3.5 7.5 5.5 7.5 8 11C10.5 14.5 12.5 14.5 15 11C17.5 7.5 19.5 7.5 21 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    ),
    sun: <circle cx="10" cy="10" r="3.5" fill="currentColor" />,
    lotus: (
      <path
        d="M10 15C10 15 5.5 12.5 5.5 8.5C5.5 6 7.5 5 10 7.5C12.5 5 14.5 6 14.5 8.5C14.5 12.5 10 15 10 15Z"
        fill="currentColor"
      />
    ),
    trident: (
      <>
        <path d="M10 18V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M6.5 3V7C6.5 8.4 8 9 10 9C12 9 13.5 8.4 13.5 7V3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    pillar: (
      <path
        d="M10 3v14M6 6h8M6 14h8M8 3v14M12 3v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
  };
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" style={{ color }} aria-hidden="true">
      {paths[symbol]}
    </svg>
  );
}

/* ─── veda data ──────────────────────────────────────────── */
const VEDAS: VedaData[] = [
  {
    id: 'rigveda',
    name: 'Rigveda',
    devanagari: 'ऋग्वेद',
    glyph: 'ऋ',
    color: '#C07828',
    colorLight: '#FEF3E2',
    cx: 110,
    cy: 55,
    date: '~6000 BCE',
    era: '~6000 BCE (Tilak · Orion precession) · Pre-1900 BCE minimum (Sarasvati satellite evidence)',
    description:
      'The oldest and most extensive of the four Vedas — 1,028 hymns in ten mandalas addressed to the devas. The foundational revelation of cosmic order (Ṛta) and the source from which all Vedic knowledge flows.',
    devas: [
      { name: 'Indra', devanagari: 'इन्द्र', role: 'King of Devas, storm and thunder', hymns: '250+ hymns', symbol: 'bolt' },
      { name: 'Agni', devanagari: 'अग्नि', role: 'God of fire, divine messenger', hymns: '200+ hymns', symbol: 'flame' },
      { name: 'Soma', devanagari: 'सोम', role: 'God of the sacred plant and moon', hymns: '114 hymns', symbol: 'moon' },
      { name: 'Varuna', devanagari: 'वरुण', role: 'Lord of cosmic order and water', hymns: '46 hymns', symbol: 'wave' },
      { name: 'Ushas', devanagari: 'उषस्', role: 'Goddess of dawn, feminine divine', hymns: '20 hymns', symbol: 'sun' },
      { name: 'Vishnu', devanagari: 'विष्णु', role: 'Pervader of the cosmos, three strides', hymns: '6 hymns', symbol: 'lotus' },
    ],
    rishis: [
      { name: 'Vishvamitra', devanagari: 'विश्वामित्र', role: 'Composed the Gayatri Mantra (RV 3.62.10)', badge: 'Mandala 3', glossarySlug: 'vishvamitra' },
      { name: 'Vasistha', devanagari: 'वसिष्ठ', role: 'Author of the entire seventh Mandala', badge: 'Mandala 7', glossarySlug: 'vasistha' },
      { name: 'Dirghatamas', devanagari: 'दीर्घतमस्', role: 'Blind seer, composer of the riddling Asya Vamasya hymn', badge: 'Mandala 1', glossarySlug: 'dirghatamas' },
      { name: 'Lopamudra', devanagari: 'लोपामुद्रा', role: 'Female rishi, dialogue with Agastya (RV 1.179)', badge: 'Mandala 1', glossarySlug: 'lopamudra' },
    ],
    themes: [
      { name: 'Cosmic Order (Ṛta)', description: 'The principle of truth, cosmic law and righteous conduct underpinning all existence — a proto-dharma concept.' },
      { name: 'Fire & Sacrifice', description: 'Agni as the link between mortals and devas, carrying offerings through smoke to the heavens.' },
      { name: 'Creation Cosmology', description: 'The Nasadiya Sukta (10.129) questions the origin of existence itself — who, if anyone, created the cosmos?' },
      { name: 'Dawn & Light', description: 'Ushas hymns celebrate the daily renewal of light as a metaphor for illumined consciousness.' },
    ],
    facts: [
      { title: 'The Nasadiya Sukta questions God', body: 'RV 10.129 asks whether even the creator knows how creation occurred — a remarkable philosophical agnosticism in one of the world\'s oldest texts.', question: 'What is the Nasadiya Sukta and what does it say about creation?' },
      { title: 'Sarasvati river proof', body: 'Satellite imagery of the now-dry Sarasvati river bed (Ghaggar-Hakra) confirms the Rigveda\'s description, placing it before 1900 BCE when the river dried.', question: 'How does the Sarasvati river evidence date the Rigveda?' },
      { title: 'Gayatri — 6000 years unbroken', body: 'The Gayatri Mantra (RV 3.62.10) has been recited daily without interruption for at least 6,000 years — possibly the oldest continuously recited prayer in human history.', question: 'Tell me about the Gayatri Mantra and its history' },
      { title: 'Tilak\'s astronomical proof', body: 'Bal Gangadhar Tilak showed in "The Orion" (1893) that RV hymns describe the star Orion at the vernal equinox — only possible ~6000 BCE.', question: 'What is Tilak\'s astronomical argument for the age of the Rigveda?' },
    ],
    verse: {
      devanagari: 'तत् सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात्',
      iast: 'tat saviturvareṇyaṃ\nbhargo devasya dhīmahi\ndhiyo yo naḥ pracodayāt',
      meaning: 'We meditate on the glorious splendour of that divine Sun — may it illuminate our intellects.',
      source: 'Rigveda 3.62.10 · Gayatri Mantra · Rishi Vishvamitra',
    },
  },
  {
    id: 'samaveda',
    name: 'Samaveda',
    devanagari: 'सामवेद',
    glyph: 'स',
    color: '#2D7A6F',
    colorLight: '#E8F5F3',
    cx: 570,
    cy: 55,
    date: '~4000 BCE',
    era: '~4000 BCE · Ancestor of all Indian classical music',
    description:
      'The Veda of melodies — 1,875 verses drawn largely from the Rigveda, set to elaborate musical notation. The mother of Indian classical music and the origin of the sāman singing tradition.',
    devas: [
      { name: 'Soma', devanagari: 'सोम', role: 'Occupies the entire first book (Purvarchika)', hymns: 'Book 1', symbol: 'moon' },
      { name: 'Agni', devanagari: 'अग्नि', role: 'Divine fire, receiver of offerings', hymns: 'Book 2', symbol: 'flame' },
      { name: 'Indra', devanagari: 'इन्द्र', role: 'Thunderer, protector of yajna', hymns: 'Book 2', symbol: 'bolt' },
      { name: 'Vishnu', devanagari: 'विष्णु', role: 'Cosmic pervader, invoked in Uttararchika', hymns: 'Uttararchika', symbol: 'lotus' },
    ],
    rishis: [
      { name: 'Jaimini', devanagari: 'जैमिनि', role: 'Founder of the Mimamsa philosophical school', badge: 'Mimamsa Sutras', glossarySlug: 'jaimini' },
      { name: 'Veda Vyasa', devanagari: 'वेदव्यास', role: 'Organiser and systematiser of the Vedas', badge: 'All Four Vedas', glossarySlug: 'veda-vyasa' },
      { name: 'Kauthuma', devanagari: 'कौथुम', role: 'Head of the living recitation tradition (Kauthuma shakha)', badge: 'Living tradition', glossarySlug: 'kauthuma' },
      { name: 'Narada', devanagari: 'नारद', role: 'Divine musician, carrier of celestial melodies', badge: 'Gandharva Veda', glossarySlug: 'narada' },
    ],
    themes: [
      { name: 'Music as Moksha', description: 'The sāman melodies are themselves a path — sound (nāda) as the bridge between human and divine consciousness.' },
      { name: 'Soma Ritual', description: 'The pressing and offering of Soma forms the centrepiece; the plant\'s identity debated from mushroom to ephedra.' },
      { name: 'Liturgical Precision', description: 'Exact musical notation (svaras) preserved for millennia — among the world\'s oldest surviving musical notations.' },
      { name: 'Unity with Rigveda', description: 'Only 75 of its 1,875 verses are unique — the rest drawn from the Rigveda, musically transformed.' },
    ],
    facts: [
      { title: 'Krishna\'s own declaration', body: 'In Bhagavad Gita 10.22, Krishna declares "vedānāṃ sāmavedo\'smi" — "Among the Vedas I am the Samaveda" — singling it out above all others.', question: 'What does Krishna say about the Samaveda in the Bhagavad Gita?' },
      { title: '1,000 schools, 3 survive', body: 'Ancient texts list up to 1,000 shakhas (recitation schools) of the Samaveda. Today only three survive: Kauthuma, Ranayaniya, and Jaiminiya.', question: 'How many Samaveda schools originally existed and how many survive today?' },
      { title: 'Mother of Indian music', body: 'The seven svaras (sa, re, ga, ma, pa, dha, ni) trace their origin to the sāman melodies — Indian classical music begins here.', question: 'How is the Samaveda the origin of Indian classical music?' },
      { title: 'Only 75 unique verses', body: 'Of 1,875 verses, only 75 are found nowhere in the Rigveda — demonstrating the Samaveda\'s role as musical transformation of existing revelation.', question: 'How many unique verses does the Samaveda have and what does this tell us?' },
    ],
    verse: {
      devanagari: 'अग्न आ याहि वीतये\nगृणानो हव्यदातये\nनि होता सत्सि बर्हिषि',
      iast: 'agna ā yāhi vītaye\ngṛṇāno havyadātaye\nni hotā satsi barhiṣi',
      meaning: 'O Agni, come for our gladness, praised as the giver of oblations; sit as the Hotar priest on the sacred grass.',
      source: 'Samaveda · Purvarchika 1.1 · Opening verse of the tradition',
    },
  },
  {
    id: 'yajurveda',
    name: 'Yajurveda',
    devanagari: 'यजुर्वेद',
    glyph: 'य',
    color: '#6B3FA0',
    colorLight: '#F3EEF9',
    cx: 110,
    cy: 230,
    date: '~3500 BCE',
    era: '~3500 BCE · Baudhayana Shulba Sutra predates Pythagoras by 1,000 years',
    description:
      'The Veda of ritual formulas — prose and verse instructions for the Soma sacrifice and other yajnas. Home to the Sri Rudram, the Isha Upanishad, and mathematical genius that predates ancient Greece.',
    devas: [
      { name: 'Rudra', devanagari: 'रुद्र', role: 'Centrepiece of Sri Rudram — 11 anuvaka litany', hymns: 'Sri Rudram', symbol: 'trident' },
      { name: 'Prajapati', devanagari: 'प्रजापति', role: 'Lord of creatures, creator deity', hymns: 'Shatapatha Brahmana', symbol: 'sun' },
      { name: 'Vishnu', devanagari: 'विष्णु', role: 'Three strides encompassing all worlds', hymns: 'Multiple', symbol: 'lotus' },
      { name: 'Varuna', devanagari: 'वरुण', role: 'Cosmic law, invoked in purification rites', hymns: 'Multiple', symbol: 'wave' },
    ],
    rishis: [
      { name: 'Yajnavalkya', devanagari: 'याज्ञवल्क्य', role: 'Greatest philosopher — Brihadaranyaka Upanishad, won 1,000 cows debate', badge: 'Shukla YV', glossarySlug: 'yajnavalkya' },
      { name: 'Baudhayana', devanagari: 'बौधायन', role: 'Mathematician — stated the diagonal theorem 1,000 years before Pythagoras', badge: 'Shulba Sutra', glossarySlug: 'baudhayana' },
      { name: 'Vaishampayana', devanagari: 'वैशम्पायन', role: 'Transmitted the Krishna (Black) Yajurveda', badge: 'Krishna YV', glossarySlug: 'vaishampayana' },
      { name: 'Tittiri', devanagari: 'तित्तिरि', role: 'Founder of the Taittiriya shakha — most widely recited today', badge: 'Taittiriya', glossarySlug: 'tittiri' },
    ],
    themes: [
      { name: 'Yajna as Cosmos', description: 'The sacrifice is not merely ritual — the Shatapatha Brahmana presents it as a re-enactment of cosmic creation itself.' },
      { name: 'Inner Fire (Adhyatma)', description: 'Yajnavalkya transforms external ritual into internal meditation — the "inner Agnihotra" of the Brihadaranyaka.' },
      { name: 'Mathematical Precision', description: 'Altar construction required precise geometry — yielding the Pythagorean theorem, irrational numbers, and early calculus ideas.' },
      { name: 'Two Recensions', description: 'Krishna (Black) and Shukla (White) Yajurveda are completely different in arrangement, reflecting two major schools of transmission.' },
    ],
    facts: [
      { title: 'Baudhayana before Pythagoras', body: 'The Baudhayana Shulba Sutra (~800 BCE) states "the diagonal of a rectangle produces the sum of the areas of the two sides" — the Pythagorean theorem, 250+ years before Pythagoras.', question: 'Did the Baudhayana Shulba Sutra contain the Pythagorean theorem before Pythagoras?' },
      { title: 'Yajnavalkya\'s 1,000 cows', body: 'At King Janaka\'s court, Yajnavalkya challenged all philosophers to debate, staking 1,000 cows. He defeated every challenger, establishing that Brahman is pure consciousness.', question: 'Tell me about Yajnavalkya\'s famous debate at the court of King Janaka' },
      { title: 'Two completely different recensions', body: 'The Shukla (White) and Krishna (Black) Yajurveda differ so fundamentally in arrangement they appear to be different texts — a unique split in Vedic transmission history.', question: 'What is the difference between Krishna and Shukla Yajurveda?' },
      { title: 'Gandhi\'s 18 verses', body: 'Mahatma Gandhi called the Isha Upanishad (Shukla Yajurveda, chapter 40) sufficient — he said if all Hindu scriptures were lost but these 18 verses survived, Hinduism would live.', question: 'What did Gandhi say about the Isha Upanishad?' },
    ],
    verse: {
      devanagari: 'ॐ पूर्णमदः पूर्णमिदम्\nपूर्णात् पूर्णमुदच्यते\nपूर्णस्य पूर्णमादाय\nपूर्णमेवावशिष्यते',
      iast: 'oṃ pūrṇamadaḥ pūrṇamidaṃ\npūrṇāt pūrṇamudacyate\npūrṇasya pūrṇamādāya\npūrṇamevāvaśiṣyate',
      meaning: 'That is whole, this is whole. Wholeness comes from wholeness. Take wholeness from wholeness — wholeness alone remains.',
      source: 'Isha Upanishad · Invocation · Shukla Yajurveda 40',
    },
  },
  {
    id: 'atharvaveda',
    name: 'Atharvaveda',
    devanagari: 'अथर्ववेद',
    glyph: 'अ',
    color: '#C0392B',
    colorLight: '#FBEAEA',
    cx: 570,
    cy: 230,
    date: '~3100 BCE',
    era: '~3100 BCE (Aldebaran astronomical reference)',
    description:
      'The Veda of daily life — 730 hymns of healing, protection, cosmology, and ecology. Often called the "democratic Veda" for its concern with ordinary people, Ayurveda, and the Prithvi Sukta — the world\'s first ecological text.',
    devas: [
      { name: 'Prithvi', devanagari: 'पृथ्वी', role: 'Earth goddess, 63-verse Prithvi Sukta (AV 12.1)', hymns: '63 verses', symbol: 'lotus' },
      { name: 'Skambha', devanagari: 'स्कम्भ', role: 'Cosmic pillar supporting the universe — unique AV cosmology', hymns: 'AV 10.7-8', symbol: 'pillar' },
      { name: 'Prajapati', devanagari: 'प्रजापति', role: 'Creator, lord of beings, sustainer', hymns: 'Multiple', symbol: 'sun' },
      { name: 'Varuna', devanagari: 'वरुण', role: 'Healer, cleanser of sin and disease', hymns: 'Multiple', symbol: 'wave' },
      { name: 'Rohita', devanagari: 'रोहित', role: 'Solar deity unique to the Atharvaveda', hymns: 'AV 13.1-2', symbol: 'sun' },
    ],
    rishis: [
      { name: 'Atharvan', devanagari: 'अथर्वन्', role: 'Primordial fire priest, first to extract Soma', badge: 'Fire priest', glossarySlug: 'atharvan' },
      { name: 'Angiras', devanagari: 'अङ्गिरस्', role: 'Co-founder of the tradition (AV = Atharvaṅgirasa)', badge: 'Co-founder', glossarySlug: 'angiras' },
      { name: 'Shaunaka', devanagari: 'शौनक', role: 'Main compiler of the Shaunaka recension — the standard text', badge: 'Main compiler', glossarySlug: 'shaunaka' },
      { name: 'Paippalada', devanagari: 'पैप्पलाद', role: 'Kashmir school — the Paippalada Samhita', badge: 'Kashmir school', glossarySlug: 'paippalada' },
    ],
    themes: [
      { name: 'Ecology & Earth', description: 'The Prithvi Sukta (AV 12.1) — 63 verses on Earth as mother — is the world\'s oldest ecological text and first articulation of environmental ethics.' },
      { name: 'Healing & Ayurveda', description: 'The Atharvaveda is the textual source of Ayurveda — containing the earliest descriptions of herbs, disease, and therapeutic ritual.' },
      { name: 'Cosmological Speculation', description: 'Skambha hymns present a unique cosmological model — a cosmic pillar sustaining the universe — influencing later Shaiva cosmology.' },
      { name: 'Protection & Daily Life', description: 'Unlike the other three Vedas focused on elite ritual, the AV addresses farmers, craftspeople, and ordinary life — earning the "democratic Veda" epithet.' },
    ],
    facts: [
      { title: 'World\'s first ecological text', body: 'The Prithvi Sukta (AV 12.1) — addressed to the Earth goddess — contains 63 verses articulating humanity\'s duty to protect the earth. Nothing earlier exists in any civilization.', question: 'What is the Prithvi Sukta and why is it the world\'s first ecological text?' },
      { title: 'Source of Ayurveda', body: 'The Atharvaveda contains the earliest systematic description of medicinal plants, disease categories, and healing prayers — it is the foundational text of Ayurvedic medicine.', question: 'How is the Atharvaveda connected to the origins of Ayurveda?' },
      { title: 'Mandukya: 12 verses for liberation', body: 'The Mandukya Upanishad (embedded in AV) has only 12 verses — yet Gaudapada and Adi Shankaracharya both declared it sufficient for complete liberation (moksha).', question: 'Why is the Mandukya Upanishad considered sufficient for moksha?' },
      { title: 'The democratic Veda', body: 'While the Rigveda addresses elite priestly concerns, the Atharvaveda speaks to farmers, craftsmen, lovers, healers — the full spectrum of Vedic society.', question: 'Why is the Atharvaveda called the democratic Veda?' },
    ],
    verse: {
      devanagari: 'माता भूमिः पुत्रोऽहं\nपृथिव्याः\nपर्जन्यः पिता स उ\nनः पिपर्तु',
      iast: 'mātā bhūmiḥ putro\'haṃ\npṛthivyāḥ\nparjanyaḥ pitā sa u\nnaḥ pipartu',
      meaning: 'Earth is my mother, I am her son. Parjanya (rain) is our father — may he nourish us.',
      source: 'Atharvaveda 12.1.12 · Prithvi Sukta · The first ecological verse',
    },
  },
];

/* ─── branch helpers ─────────────────────────────────────── */
const OM_CX = 340;
const OM_CY = 150;

function branchPath(cx: number, cy: number): string {
  const mx = (OM_CX + cx) / 2;
  return `M${OM_CX},${OM_CY} Q${mx},${OM_CY} ${cx},${cy}`;
}

function branchLength(cx: number, cy: number): number {
  const dx = cx - OM_CX;
  const dy = cy - OM_CY;
  return Math.sqrt(dx * dx + dy * dy) * 1.3;
}

/* ─── tab type ───────────────────────────────────────────── */
type TabId = 'devas' | 'rishis' | 'themes' | 'facts';

const MAT = 'cubic-bezier(0.4, 0, 0.2, 1)';

/* ─── main component ─────────────────────────────────────── */
export function VedaVrikshaExplorer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>('devas');

  const activeVeda = VEDAS.find((v) => v.id === activeId) ?? null;

  function handleNodeClick(id: string) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setActiveTab('devas');
    }
  }

  return (
    <div className="space-y-6">
      <style>{`
        @keyframes grow {
          from { stroke-dashoffset: var(--L); }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes scIn {
          from { transform: scale(0.55); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        @keyframes fdIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pu {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.85; }
        }
        .branch-path {
          animation: grow 0.85s ease-out both;
        }
        .veda-node-g {
          animation: scIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .rel-line {
          animation: fdIn 0.5s ease both;
        }
        .hint-text {
          animation: fdIn 0.6s ease both;
        }
        *:focus { outline: none !important; }
        *:focus-visible { outline: none !important; }
      `}</style>

      {/* SVG tree */}
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 680 320"
          width="100%"
          tabIndex={-1}
          style={{
            maxWidth: 680,
            display: 'block',
            margin: '0 auto',
            outline: 'none',
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          aria-label="Veda Vriksha — interactive knowledge tree"
        >
          {/* Branch paths */}
          {VEDAS.map((v, i) => {
            const L = branchLength(v.cx, v.cy);
            return (
              <path
                key={v.id}
                d={branchPath(v.cx, v.cy)}
                fill="none"
                stroke={v.color}
                strokeLinecap="round"
                strokeDasharray={L}
                className="branch-path"
                style={
                  {
                    '--L': L,
                    animationDelay: `${i * 0.18}s`,
                    strokeWidth: activeId === v.id ? 2.5 : 0.8,
                    transition: `stroke-width 0.25s ${MAT}`,
                  } as React.CSSProperties
                }
              />
            );
          })}

          {/* Rigveda–Samaveda relationship line */}
          <g className="rel-line" style={{ animationDelay: '2.1s', opacity: 0 }}>
            <line
              x1="140" y1="55" x2="540" y2="55"
              stroke="#C07828"
              strokeWidth="0.8"
              strokeDasharray="4 3"
              opacity="0.45"
            />
            <text
              x="340" y="43"
              textAnchor="middle"
              fontSize="8"
              fill="#C07828"
              opacity="0.7"
              fontStyle="italic"
            >
              Sāmaveda&apos;s melodies drawn from the Ṛgveda
            </text>
          </g>

          {/* Veda nodes */}
          {VEDAS.map((v, i) => {
            const isActive = activeId === v.id;
            const isInactive = activeId !== null && !isActive;
            const scale = isActive ? 1.1 : isInactive ? 0.92 : 1;
            const opacity = isInactive ? 0.55 : 1;
            const sw = isActive ? 3 : 0.8;
            const isTop = v.cy < 150;

            return (
              <g
                key={v.id}
                className="veda-node-g"
                tabIndex={-1}
                role="button"
                aria-label={`Select ${v.name}`}
                aria-pressed={isActive}
                onClick={() => handleNodeClick(v.id)}
                onKeyDown={(e) => e.key === 'Enter' && handleNodeClick(v.id)}
                style={{
                  animationDelay: `${0.85 + i * 0.12}s`,
                  opacity: 0,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {/* Inner group handles scale/opacity so the initial scIn animation still works */}
                <g
                  style={{
                    transformOrigin: `${v.cx}px ${v.cy}px`,
                    transform: `scale(${scale})`,
                    opacity,
                    transition: `transform 0.25s ${MAT}, opacity 0.25s ${MAT}`,
                  }}
                >
                  <circle
                    cx={v.cx} cy={v.cy} r={30}
                    fill={v.colorLight}
                    stroke={v.color}
                    strokeWidth={sw}
                    style={{ transition: `stroke-width 0.25s ${MAT}` }}
                  />
                  <text
                    x={v.cx} y={v.cy + 9}
                    textAnchor="middle"
                    fontSize="22"
                    fill={v.color}
                    fontFamily="'Noto Serif Devanagari', serif"
                  >
                    {v.glyph}
                  </text>
                  {/* name */}
                  <text
                    x={v.cx}
                    y={isTop ? v.cy + 50 : v.cy - 38}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#1C1208"
                    fontWeight="600"
                  >
                    {v.name}
                  </text>
                  {/* date */}
                  <text
                    x={v.cx}
                    y={isTop ? v.cy + 62 : v.cy - 26}
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6B5B3E"
                  >
                    {v.date}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Central OM node — rendered last so it sits above branches */}
          <circle
            cx={OM_CX} cy={OM_CY} r={36}
            fill="none"
            stroke="#C07828"
            strokeWidth="1.2"
            style={{ animation: 'pu 3s ease-in-out infinite' }}
          />
          <circle cx={OM_CX} cy={OM_CY} r={30} fill="#FEF3E2" stroke="#C07828" strokeWidth="1.5" />
          <text
            x={OM_CX} y={OM_CY + 9}
            textAnchor="middle"
            fontSize="22"
            fill="#C07828"
            fontFamily="'Noto Serif Devanagari', serif"
          >
            ॐ
          </text>
        </svg>
      </div>

      {/* Hint text — changes when a Veda is selected */}
      <p
        className="hint-text text-center text-caption text-ink-muted"
        style={{ animationDelay: '2.3s', opacity: 0 }}
      >
        {activeVeda ? (
          <span style={{ color: activeVeda.color }}>Exploring {activeVeda.name} ↓</span>
        ) : (
          'Select a Veda to explore its knowledge'
        )}
      </p>

      {/* Detail panel — always in DOM, opacity/transform driven by state */}
      <div
        style={{
          opacity: activeVeda ? 1 : 0,
          transform: activeVeda ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: activeVeda ? 'auto' : 'none',
          transition: `opacity 0.3s ease, transform 0.3s ease`,
        }}
      >
        {activeVeda && (
          <div className="space-y-6 rounded-xl border bg-white p-6 shadow-card-md">
            {/* Header */}
            <div className="space-y-1">
              <p className="text-overline tracking-widest" style={{ color: activeVeda.color }}>
                {activeVeda.era}
              </p>
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="font-serif text-display-sm text-ink">{activeVeda.name}</h2>
                <span className="devanagari text-[22px] leading-none" style={{ color: activeVeda.color }}>
                  {activeVeda.devanagari}
                </span>
              </div>
              <p className="max-w-content text-body text-ink-muted">{activeVeda.description}</p>
            </div>

            {/* Tabs */}
            <div
              className="flex gap-1 overflow-x-auto border-b"
              style={{ borderColor: `${activeVeda.color}33` }}
            >
              {(
                [
                  { id: 'devas', label: 'Devas & Devis' },
                  { id: 'rishis', label: 'Rishis' },
                  { id: 'themes', label: 'Themes' },
                  { id: 'facts', label: 'Fascinating Facts' },
                ] as { id: TabId; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  tabIndex={-1}
                  onClick={() => setActiveTab(tab.id)}
                  className="shrink-0 border-b-2 px-4 py-2 text-caption font-medium"
                  style={{
                    outline: 'none',
                    borderColor: activeTab === tab.id ? activeVeda.color : 'transparent',
                    color: activeTab === tab.id ? activeVeda.color : '#6B5B3E',
                    transition: `border-color 0.2s ${MAT}, color 0.2s ${MAT}`,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div>
              {activeTab === 'devas' && (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {activeVeda.devas.map((deva) => (
                    <div
                      key={deva.name}
                      className="flex items-start gap-3 rounded-lg border p-4"
                      style={{ borderColor: `${activeVeda.color}33`, background: activeVeda.colorLight }}
                    >
                      <div className="mt-0.5 shrink-0">
                        <DevaIcon symbol={deva.symbol} color={activeVeda.color} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="font-serif text-body-sm font-semibold text-ink">{deva.name}</span>
                          <span className="devanagari text-caption" style={{ color: activeVeda.color }}>
                            {deva.devanagari}
                          </span>
                        </div>
                        <p className="mt-0.5 text-caption text-ink-muted">{deva.role}</p>
                        <span
                          className="mt-1.5 inline-block rounded-sm px-1.5 py-0.5 text-[10px] font-medium"
                          style={{ background: `${activeVeda.color}18`, color: activeVeda.color }}
                        >
                          {deva.hymns}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'rishis' && (
                <div className="space-y-3">
                  {activeVeda.rishis.map((rishi) => (
                    <div key={rishi.name} className="flex items-start gap-4 rounded-lg border p-4">
                      <div
                        className="devanagari flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[16px] font-semibold text-white"
                        style={{ background: activeVeda.color }}
                      >
                        {rishi.devanagari[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="font-serif text-body-sm font-semibold text-ink">{rishi.name}</span>
                          <span className="devanagari text-caption text-ink-muted">{rishi.devanagari}</span>
                          <span
                            className="rounded-sm px-1.5 py-0.5 text-[10px] font-medium"
                            style={{ background: `${activeVeda.color}18`, color: activeVeda.color }}
                          >
                            {rishi.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-caption text-ink-muted">{rishi.role}</p>
                        <Link
                          href={`/glossary/${rishi.glossarySlug}`}
                          className="mt-1.5 inline-flex text-caption no-underline hover:underline"
                          style={{ color: activeVeda.color, outline: 'none' }}
                        >
                          Explore full profile →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'themes' && (
                <div className="space-y-3">
                  {activeVeda.themes.map((theme) => (
                    <div
                      key={theme.name}
                      className="rounded-r-lg border-l-4 bg-sandal-50 px-4 py-3"
                      style={{ borderColor: activeVeda.color }}
                    >
                      <p className="font-serif text-body-sm font-semibold text-ink">{theme.name}</p>
                      <p className="mt-1 text-caption text-ink-muted">{theme.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'facts' && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {activeVeda.facts.map((fact) => (
                    <Link
                      key={fact.title}
                      href={`/ask-vedika?q=${encodeURIComponent(fact.question)}`}
                      className="group block rounded-lg border p-4 no-underline transition-all hover:scale-[1.01] hover:shadow-card-md"
                      style={{ borderColor: `${activeVeda.color}33`, outline: 'none' }}
                    >
                      <p
                        className="font-serif text-body-sm font-semibold group-hover:underline"
                        style={{ color: activeVeda.color }}
                      >
                        {fact.title}
                      </p>
                      <p className="mt-1.5 text-caption text-ink-muted">{fact.body}</p>
                      <p className="mt-2 text-[10px] font-medium" style={{ color: activeVeda.color }}>
                        Ask Vedika →
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Key verse */}
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: `${activeVeda.color}44`, background: activeVeda.colorLight }}
            >
              <p className="mb-3 text-overline tracking-widest" style={{ color: activeVeda.color }}>
                Key Verse
              </p>
              <p
                className="devanagari leading-relaxed text-ink sm:text-[16px] text-[14px]"
                style={{ whiteSpace: 'pre-line' }}
              >
                {activeVeda.verse.devanagari}
              </p>
              <p className="mt-3 text-body-sm italic text-ink-muted" style={{ whiteSpace: 'pre-line' }}>
                {activeVeda.verse.iast}
              </p>
              <p className="mt-3 font-serif text-body text-ink">{activeVeda.verse.meaning}</p>
              <p className="mt-3 text-caption" style={{ color: activeVeda.color }}>
                {activeVeda.verse.source}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
