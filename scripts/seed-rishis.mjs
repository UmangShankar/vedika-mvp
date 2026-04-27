#!/usr/bin/env node
/**
 * Vedika — Rishi Profile Seed Script
 * ------------------------------------
 * Seeds all 16 rishi documents into Sanity using createOrReplace (idempotent).
 *
 * SETUP:
 *   1. sanity.io/manage → project ashqn4dx → API → Tokens → Editor token
 *   2. Add to .env.local:  SANITY_WRITE_TOKEN=your_token_here
 *
 * RUN:
 *   npm run seed:rishis
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// ─── Environment loading ──────────────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url))

try {
  const envPath = resolve(__dirname, '../.env.local')
  const env = readFileSync(envPath, 'utf-8')
  for (const line of env.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const k = trimmed.slice(0, eqIdx).trim()
    const v = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
    if (!process.env[k]) process.env[k] = v
  }
} catch {
  // rely on real env vars in CI
}

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DATASET    = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const TOKEN      = process.env.SANITY_WRITE_TOKEN

if (!PROJECT_ID) { console.error('❌  NEXT_PUBLIC_SANITY_PROJECT_ID not set'); process.exit(1) }
if (!TOKEN)      { console.error('❌  SANITY_WRITE_TOKEN not set — see script header'); process.exit(1) }

const client = createClient({
  projectId:  PROJECT_ID,
  dataset:    DATASET,
  apiVersion: '2024-01-01',
  token:      TOKEN,
  useCdn:     false,
})

// ─── Rishi documents ──────────────────────────────────────────────────────────
const rishis = [
  {
    _type: 'rishi',
    _id: 'rishi-vishvamitra',
    name: 'Vishvamitra',
    slug: { _type: 'slug', current: 'vishvamitra' },
    devanagari: 'विश्वामित्र',
    transliteration: 'Viśvāmitra',
    vedaAssociation: 'rigveda',
    period: '~4000 BCE',
    epithet: 'Composer of the Gayatri Mantra — the most recited verse in human history',
    summary: 'Vishvamitra was a king who through extraordinary tapas became a brahmarishi — the highest class of seer. He composed the Gayatri Mantra (Rigveda 3.62.10), chanted daily for over 4,000 years. His transformation from warrior-king to cosmic seer is the archetypal story of human will overcoming destiny.',
    famousVerse: 'तत् सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
    famousVerseTranslation: 'We meditate on the divine light of Savitri; may it illuminate our intellect.',
    famousVerseSource: 'Rigveda 3.62.10 — the Gayatri Mantra',
    lineage: 'Kushika clan · Kaushika gotra',
    disciples: 'Rama, Lakshmana',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Gayatri Mantra', reference: 'Rigveda 3.62.10', description: 'The most sacred verse in Vedic literature — chanted at dawn, noon, and dusk for over 4,000 years.' },
      { _type: 'object', _key: 'kc2', title: 'Mandala 3', reference: 'Rigveda Book 3', description: 'The entire third book of the Rigveda — 62 hymns addressed to Indra, Agni, and the Vishvedevas.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-vasistha',
    name: 'Vasistha',
    slug: { _type: 'slug', current: 'vasistha' },
    devanagari: 'वसिष्ठ',
    transliteration: 'Vasiṣṭha',
    vedaAssociation: 'rigveda',
    period: '~4000 BCE',
    epithet: 'Seer of Mandala 7 — royal priest of the solar dynasty',
    summary: 'Vasistha is one of the Saptarishis — the seven eternal seers whose names mark stars of the Great Bear. Royal priest of the Ikshvaku dynasty including Rama. His rivalry with Vishvamitra and his possession of the divine cow Kamadhenu are among the most celebrated stories in Vedic literature.',
    famousVerse: 'मित्रश्च वरुणश्च दैवा\nअदितिः सिन्धुः पृथिवी\nउत द्यौः ॥',
    famousVerseTranslation: 'Mitra and Varuna, divine Aditi, Sindhu, Earth and Heaven — may they all grant us their blessings.',
    famousVerseSource: 'Rigveda 7.35.14',
    lineage: 'Brahma → Vasistha · Vasishtha gotra',
    disciples: 'Rama, entire Ikshvaku dynasty',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Mandala 7', reference: 'Rigveda Book 7', description: '104 hymns — the Varuna hymns exploring cosmic law, guilt, and forgiveness are among the most moving in the Rigveda.' },
      { _type: 'object', _key: 'kc2', title: 'Yoga Vasistha', reference: 'Philosophical text', description: 'A vast text recording teachings to Rama on consciousness, maya, and liberation.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-dirghatamas',
    name: 'Dirghatamas',
    slug: { _type: 'slug', current: 'dirghatamas' },
    devanagari: 'दीर्घतमस्',
    transliteration: 'Dīrghatamas',
    vedaAssociation: 'rigveda',
    period: '~4000 BCE',
    epithet: 'The blind seer — composer of the most philosophically daring riddle hymns',
    summary: 'Born blind, Dirghatamas composed some of the most cryptic and philosophically profound hymns of the Rigveda. His Mandala 1 riddle hymns — especially RV 1.164 — are cascades of cosmological puzzles still being interpreted today by scholars worldwide.',
    famousVerse: 'द्वा सुपर्णा सयुजा सखाया\nसमानं वृक्षं परि षस्वजाते ।\nतयोरन्यः पिप्पलं स्वाद्वत्ति\nअनश्नन्नन्यो अभिचाकशीति ॥',
    famousVerseTranslation: 'Two birds, bound together as companions, clasp the same tree. One eats the sweet fruit; the other looks on without eating.',
    famousVerseSource: 'Rigveda 1.164.20 — quoted in the Mundaka and Shvetashvatara Upanishads',
    lineage: 'Angirasa family',
    disciples: 'His sons carried on the Gautama lineage',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'The Riddle Hymn', reference: 'Rigveda 1.164', description: 'A 52-verse hymn of cosmological riddles. The two-birds verse became foundational to Upanishadic philosophy.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-lopamudra',
    name: 'Lopamudra',
    slug: { _type: 'slug', current: 'lopamudra' },
    devanagari: 'लोपामुद्रा',
    transliteration: 'Lopāmudrā',
    vedaAssociation: 'rigveda',
    period: '~4000 BCE',
    epithet: 'Brahmavadini — female seer who composed the dialogue hymn of the Rigveda',
    summary: 'Lopamudra is one of the rare brahmavadinis — female seers who composed Vedic hymns. Author of Rigveda 1.179, a frank dialogue with husband Agastya on desire, duty, and the householder path. Her existence proves that early Vedic tradition included women as full intellectual equals.',
    famousVerse: 'इयं नारी पतिलोकं वृणाना\nनि पद्यते सलिले संविदाना ॥',
    famousVerseTranslation: "This woman, choosing her husband's world, lays herself down having come to understanding.",
    famousVerseSource: 'Rigveda 1.179.2',
    lineage: 'Princess of Vidarbha · wife of Agastya',
    disciples: '—',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Dialogue Hymn', reference: 'Rigveda 1.179', description: "A conversation between Lopamudra and Agastya on desire, dharma, and the householder's path — two great minds as equals." }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-jaimini',
    name: 'Jaimini',
    slug: { _type: 'slug', current: 'jaimini' },
    devanagari: 'जैमिनि',
    transliteration: 'Jaimini',
    vedaAssociation: 'samaveda',
    period: '~3000 BCE',
    epithet: 'Founder of Purva Mimamsa — the most rigorous analysis of Vedic ritual',
    summary: 'Jaimini systematised the Samaveda tradition and founded Purva Mimamsa — the philosophical school analysing the eternal validity of the Vedas and the nature of dharmic duty. His Mimamsa Sutras remain the most thorough examination of Vedic ritual obligation ever composed.',
    famousVerse: 'चोदना लक्षणोऽर्थो धर्मः ॥',
    famousVerseTranslation: 'Dharma is that whose character is the injunction of the Vedas.',
    famousVerseSource: 'Mimamsa Sutra 1.1.2 — the foundational definition of dharma',
    lineage: 'Disciple of Veda Vyasa',
    disciples: 'Sumantu, Paushyinji',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Mimamsa Sutras', reference: 'Purva Mimamsa', description: '2,745 sutras — the most systematic defence of the eternality and authority of the Vedas ever composed.' },
      { _type: 'object', _key: 'kc2', title: 'Jaimini Bharata', reference: 'Epic tradition', description: 'A version of the Mahabharata from the Samaveda perspective.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-veda-vyasa',
    name: 'Veda Vyasa',
    slug: { _type: 'slug', current: 'veda-vyasa' },
    devanagari: 'वेद व्यास',
    transliteration: 'Veda Vyāsa',
    vedaAssociation: 'multiple',
    period: '~3100 BCE',
    epithet: 'Organiser of the four Vedas — author of the Mahabharata and Bhagavatam',
    summary: 'Veda Vyasa — Krishna Dvaipayana — is the most prolific figure in all of Sanskrit literature. He classified the single Veda into four, composed the Mahabharata, the 18 Puranas, and the Brahma Sutras. He is considered a chiranjivi — an immortal who lives across all ages.',
    famousVerse: 'धर्मे चार्थे च कामे च\nमोक्षे च भरतर्षभ ।\nयदिहास्ति तदन्यत्र\nयन्नेहास्ति न तत्क्वचित् ॥',
    famousVerseTranslation: 'Whatever is here regarding dharma, artha, kama, and moksha — that is found elsewhere too. What is not here, is nowhere.',
    famousVerseSource: 'Mahabharata — Vyasa on the scope of his own composition',
    lineage: 'Son of Parashara and Satyavati · Parashara gotra',
    disciples: 'Paila, Vaishampayana, Jaimini, Sumantu, Shuka',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Classification of the Four Vedas', reference: 'Vedic canon', description: 'Organised the single primordial Veda into Rigveda, Samaveda, Yajurveda, and Atharvaveda.' },
      { _type: 'object', _key: 'kc2', title: 'Mahabharata', reference: '100,000 verses', description: 'The longest poem in human history. Contains the Bhagavad Gita as its philosophical heart.' },
      { _type: 'object', _key: 'kc3', title: 'Srimad Bhagavatam', reference: '18,000 verses', description: "Composed at the instruction of Narada as Vyasa's most complete work — the crown jewel of Puranic literature." },
      { _type: 'object', _key: 'kc4', title: 'Brahma Sutras', reference: 'Vedanta Sutras', description: '555 sutras systematising the Upanishads. Commented upon by Shankara, Ramanuja, and Madhva.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-kauthuma',
    name: 'Kauthuma',
    slug: { _type: 'slug', current: 'kauthuma' },
    devanagari: 'कौथुम',
    transliteration: 'Kauthuma',
    vedaAssociation: 'samaveda',
    period: '~2500 BCE',
    epithet: 'Founder of the most widespread living school of the Samaveda',
    summary: 'Kauthuma founded the Kauthuma shakha — the most widely practised school of the Samaveda, still actively chanted today in Gujarat, Maharashtra, and Tamil Nadu. His lineage represents one of the last living connections to the original Samavedic musical tradition.',
    famousVerse: 'ओम् अग्न आ याहि वीतये\nगृणानो हव्यदातये ।',
    famousVerseTranslation: 'O Agni, come for the feast, praised one, for the gift of oblations.',
    famousVerseSource: 'Samaveda Purvarchika 1.1 — opening of the Kauthuma recension',
    lineage: 'Disciple of Veda Vyasa through the Samaveda lineage',
    disciples: 'His school continues in living practitioners today',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Kauthuma Samhita', reference: 'Samaveda recension', description: 'The most widely transmitted recension — 1,875 verses with full musical notation. Still chanted in its original form today.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-narada',
    name: 'Narada',
    slug: { _type: 'slug', current: 'narada' },
    devanagari: 'नारद',
    transliteration: 'Nārada',
    vedaAssociation: 'samaveda',
    period: 'Treta Yuga — travels across all ages',
    epithet: 'Divine musician — cosmic messenger who travels the three worlds with his vina',
    summary: 'Narada is the great cosmic wanderer — a devarishi who travels ceaselessly across the three worlds with his vina, singing the names of Vishnu. He transmitted the musical tradition of the Samaveda and appears throughout the Puranas as catalyst, guide, and divine messenger.',
    famousVerse: 'नारायण नारायण ।',
    famousVerseTranslation: 'Narayana, Narayana — the eternal chant of the divine name carried across all the worlds.',
    famousVerseSource: 'Traditional invocation of Narada',
    lineage: 'Mind-born son of Brahma',
    disciples: 'Prahlada, Dhruva, Valmiki (directed him to compose the Ramayana)',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Narada Bhakti Sutras', reference: '84 sutras', description: '84 sutras defining, analysing, and celebrating love of the divine — the foundational text on bhakti philosophy.' },
      { _type: 'object', _key: 'kc2', title: 'Naradiya Shiksha', reference: 'Samaveda phonetics', description: 'A foundational text on Vedic phonetics and the proper chanting of the Samaveda.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-yajnavalkya',
    name: 'Yajnavalkya',
    slug: { _type: 'slug', current: 'yajnavalkya' },
    devanagari: 'याज्ञवल्क्य',
    transliteration: 'Yājñavalkya',
    vedaAssociation: 'yajurveda',
    period: '~3000 BCE',
    epithet: 'Greatest philosopher of the Vedic age — composer of the Brihadaranyaka Upanishad',
    summary: "Yajnavalkya is the towering intellect of all Vedic literature. He systematised the White Yajurveda, composed the Brihadaranyaka Upanishad, and defeated every scholar at King Janaka's court for 1,000 prize cows. His Neti Neti teaching changed Indian philosophy forever.",
    famousVerse: 'नेति नेति ।\nन इत्येव ।\nन ह्येतस्मादिति नेत्युक्त्वा विरमेत् ॥',
    famousVerseTranslation: 'Not this, not this. There is no better description than "not this." Beyond all description — that is Brahman.',
    famousVerseSource: 'Brihadaranyaka Upanishad 2.3.6',
    lineage: 'Student of Vaishampayana · received Shukla Yajurveda from Surya',
    disciples: 'Maitreyi, Katyayani',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Brihadaranyaka Upanishad', reference: 'Shukla Yajurveda', description: 'Oldest and largest Upanishad. Contains Neti Neti, the Maitreyi dialogue, and Madhu Vidya. Foundation of Advaita Vedanta.' },
      { _type: 'object', _key: 'kc2', title: 'Shukla Yajurveda', reference: 'Vajasaneyi Samhita', description: 'Received from Surya in the form of a horse — kept mantras and commentary separate for the first time.' },
      { _type: 'object', _key: 'kc3', title: 'Yajnavalkya Smriti', reference: 'Dharmashastra', description: 'Most authoritative text on dharmic law — still cited in Indian courts through the Mitakshara commentary.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-baudhayana',
    name: 'Baudhayana',
    slug: { _type: 'slug', current: 'baudhayana' },
    devanagari: 'बौधायन',
    transliteration: 'Baudhāyana',
    vedaAssociation: 'yajurveda',
    period: '~800 BCE',
    epithet: 'Author of the Pythagorean theorem — 1,000 years before Pythagoras',
    summary: 'Baudhayana composed the Baudhayana Shulba Sutra — containing the theorem now known as the Pythagorean theorem over a thousand years before Pythagoras was born. His fire altar geometry instructions encode pi, Pythagorean triples, and astronomical cycles.',
    famousVerse: 'दीर्घचतुरश्रस्याक्ष्णया रज्जुः\nपार्श्वमानी तिर्यङ्मानी च\nयत् पृथग्भूते कुरुतस्तदुभयं करोति ॥',
    famousVerseTranslation: 'The diagonal of a rectangle produces both the areas which its length and breadth produce separately — stated 800 BCE, predating Pythagoras by over 300 years.',
    famousVerseSource: 'Baudhayana Shulba Sutra 1.12',
    lineage: 'Taittiriya school of the Krishna Yajurveda',
    disciples: 'His geometric tradition influenced all subsequent Indian mathematics',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Baudhayana Shulba Sutra', reference: 'Yajurveda tradition', description: 'Contains the Pythagorean theorem, methods for constructing fire altars of specific areas, and early approximations of the square root of 2.' },
      { _type: 'object', _key: 'kc2', title: 'Baudhayana Dharmasutra', reference: 'Dharmashastra', description: 'One of the oldest surviving dharmasutras — rules for all four stages of life.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-vaishampayana',
    name: 'Vaishampayana',
    slug: { _type: 'slug', current: 'vaishampayana' },
    devanagari: 'वैशम्पायन',
    transliteration: 'Vaiśampāyana',
    vedaAssociation: 'yajurveda',
    period: '~3100 BCE',
    epithet: 'Transmitter of the Black Yajurveda and reciter of the Mahabharata',
    summary: 'Vaishampayana received the Krishna (Black) Yajurveda from Veda Vyasa and transmitted it to his disciples. He also recited the entire Mahabharata to King Janamejaya at the great serpent sacrifice — our primary source for the epic as we know it today.',
    famousVerse: 'जनमेजय उवाच —\nब्रह्मर्षे किमिदं सर्वं\nयथावत् कथयस्व मे ॥',
    famousVerseTranslation: "Janamejaya said: O brahmarishi, tell me truly all of this — the complete account of my forefathers.",
    famousVerseSource: "Mahabharata Adi Parva — Janamejaya's request to Vaishampayana",
    lineage: 'Direct disciple of Veda Vyasa',
    disciples: 'Yajnavalkya (who later broke away to receive the Shukla recension)',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Taittiriya Samhita', reference: 'Krishna Yajurveda', description: 'The most widely studied recension of the Black Yajurveda — containing the Sri Rudram, Purusha Sukta, and core sacrificial formulas.' },
      { _type: 'object', _key: 'kc2', title: 'Mahabharata recitation', reference: 'At the Sarpa Satra', description: "Recited the entire Mahabharata at King Janamejaya's serpent sacrifice — the primary occasion of its transmission." }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-tittiri',
    name: 'Tittiri',
    slug: { _type: 'slug', current: 'tittiri' },
    devanagari: 'तित्तिरि',
    transliteration: 'Tittiri',
    vedaAssociation: 'yajurveda',
    period: '~3000 BCE',
    epithet: 'Namesake of the Taittiriya school — the most vibrant living Yajurvedic tradition',
    summary: 'Tittiri was a disciple of Vaishampayana whose name became attached to the most widely practised school of the Black Yajurveda. The Taittiriya Samhita, Brahmana, Aranyaka, and Upanishad all carry his name and remain actively chanted today.',
    famousVerse: 'सह नाववतु । सह नौ भुनक्तु ।\nसह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु\nमा विद्विषावहै ॥',
    famousVerseTranslation: 'May we be protected together, may we be nourished together, may we work with great energy. May our study be luminous. May we not be hostile to each other.',
    famousVerseSource: 'Taittiriya Upanishad 2.1 — the Shanti Patha of the Taittiriya school',
    lineage: 'Disciple of Vaishampayana',
    disciples: 'His tradition continues in living practitioners across Andhra, Karnataka, and Tamil Nadu',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Taittiriya Samhita', reference: 'Krishna Yajurveda', description: 'The most complete and widely used text of the Black Yajurveda. Named after Tittiri.' },
      { _type: 'object', _key: 'kc2', title: 'Taittiriya Upanishad', reference: 'Vedanta', description: 'Contains the Brahmananda Valli — teaching that Brahman is ananda (bliss). One of the most studied Upanishads today.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-atharvan',
    name: 'Atharvan',
    slug: { _type: 'slug', current: 'atharvan' },
    devanagari: 'अथर्वन्',
    transliteration: 'Atharvan',
    vedaAssociation: 'atharvaveda',
    period: 'Primordial — said to precede recorded time',
    epithet: 'Primordial fire priest — first to draw fire from heaven',
    summary: 'Atharvan is the mythic founder of the fire-priest lineage. His name means "one who knows the paths of fire." Said to have first drawn fire from heaven and established the sacred fire that sustains cosmic order. The Atharvaveda bears his name as its primary transmission lineage.',
    famousVerse: 'अथर्वा पुरस्तादग्निमजनयत् ।\nतस्मादस्य अथर्वा अग्निनामा ॥',
    famousVerseTranslation: 'Atharvan first generated fire. Therefore his fire bears the name Atharvan.',
    famousVerseSource: 'Atharvaveda tradition — on the origin of the sacred fire lineage',
    lineage: 'Son of Brahma · oldest of the four rishi lineages',
    disciples: 'Angiras (co-founder of the Atharvagirasas)',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Atharvaveda (core hymns)', reference: 'Atharvan lineage', description: 'The foundational hymns trace to the Atharvan lineage — fire rituals, healing, protection, and cosmic philosophy.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-angiras',
    name: 'Angiras',
    slug: { _type: 'slug', current: 'angiras' },
    devanagari: 'अङ्गिरस्',
    transliteration: 'Aṅgiras',
    vedaAssociation: 'atharvaveda',
    period: 'Primordial',
    epithet: 'Co-founder of the Atharvagirasas — seer of cosmic philosophy and astronomy',
    summary: 'Angiras is one of the seven eternal rishis (Saptarishis) and co-founder of the Atharvaveda tradition alongside Atharvan. The Atharvaveda was originally called the Atharvagirasas — of Atharvan and Angiras. His lineage contributed cosmological, astronomical, and philosophical hymns.',
    famousVerse: 'अग्निरृषिः पवमानः पाञ्चजन्यः\nऋषिर्देवः करिष्यत् ॥',
    famousVerseTranslation: 'Agni is the rishi, the purifier of the five peoples — the divine rishi who acts and creates.',
    famousVerseSource: 'Atharvaveda — Angirasa tradition',
    lineage: 'Mind-born son of Brahma · one of the Saptarishis',
    disciples: 'Brihaspati (his son — preceptor of the devas)',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Atharvagirasas', reference: 'Atharvaveda', description: "The original name of the Atharvaveda — the combined tradition of Atharvan and Angiras — reflects Angiras's co-foundational role." },
      { _type: 'object', _key: 'kc2', title: 'Angirasa hymns', reference: 'Rigveda', description: 'The Angirasa family composed significant portions of the Rigveda as well.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-shaunaka',
    name: 'Shaunaka',
    slug: { _type: 'slug', current: 'shaunaka' },
    devanagari: 'शौनक',
    transliteration: 'Śaunaka',
    vedaAssociation: 'atharvaveda',
    period: '~1000 BCE',
    epithet: 'Compiler of the Atharvaveda Samhita and author of the Brihaddevata',
    summary: 'Shaunaka compiled the most widely used recension of the Atharvaveda — the Shaunaka Samhita with 730 hymns. He also composed the Brihaddevata — the most comprehensive encyclopaedia of all Vedic deities. Without Shaunaka, much of the Atharvaveda might not have survived.',
    famousVerse: 'कस्मिन् विज्ञाते सर्वमिदं\nविज्ञातं भवति ॥',
    famousVerseTranslation: 'By knowing what, is all this known?',
    famousVerseSource: 'Mundaka Upanishad 1.1.3 — from the Atharvaveda',
    lineage: 'Gritsamada lineage',
    disciples: 'His school continues — the Shaunaka recension is the standard Atharvaveda',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Shaunaka Samhita', reference: 'Atharvaveda', description: '730 hymns in 20 books — the standard recension of the Atharvaveda as studied worldwide.' },
      { _type: 'object', _key: 'kc2', title: 'Brihaddevata', reference: 'Vedic encyclopaedia', description: 'A complete guide to all Vedic deities — their mythology and relationships. An indispensable reference for Vedic studies.' }
    ]
  },
  {
    _type: 'rishi',
    _id: 'rishi-paippalada',
    name: 'Paippalada',
    slug: { _type: 'slug', current: 'paippalada' },
    devanagari: 'पैप्पलाद',
    transliteration: 'Paippalāda',
    vedaAssociation: 'atharvaveda',
    period: '~1000 BCE',
    epithet: 'Head of the second Atharvaveda school — preserved in Kashmir and Odisha',
    summary: 'Paippalada headed the second major school of the Atharvaveda — the Paippalada Samhita, preserved uniquely in Kashmir and Odisha. It contains hymns and passages found nowhere else in the entire Vedic corpus. His tradition survived against extraordinary historical odds.',
    famousVerse: 'ये त्रिषप्ताः परियन्ति\nविश्वा रूपाणि बिभ्रतः ।\nवाचस्पतिर्बला तेषां\nतन्वो अद्य दधातु मे ॥',
    famousVerseTranslation: 'Those three-times-seven who move through the world bearing all forms — may the Lord of Speech bestow their strength in my body today.',
    famousVerseSource: 'Paippalada Samhita — unique to the Paippalada recension',
    lineage: 'Parallel to the Shaunaka lineage within the Atharvaveda tradition',
    disciples: 'His school survived in Kashmir manuscripts and living practitioners in Odisha',
    keyCompositions: [
      { _type: 'object', _key: 'kc1', title: 'Paippalada Samhita', reference: 'Atharvaveda', description: 'Contains unique hymns not found in the Shaunaka recension. Manuscripts recovered in Kashmir and Odisha in the 20th century.' }
    ]
  }
]

// ─── Seed ─────────────────────────────────────────────────────────────────────
console.log(`\n🌿 Vedika — Rishi Profile Seed`)
console.log(`   Project: ${PROJECT_ID}  Dataset: ${DATASET}`)
console.log(`   Seeding ${rishis.length} rishi profiles...\n`)

let created = 0
let failed  = 0

for (const doc of rishis) {
  try {
    await client.createOrReplace(doc)
    console.log(`   ✓  ${doc.name.padEnd(20)} (${doc._id})`)
    created++
  } catch (err) {
    console.error(`   ✗  ${doc.name.padEnd(20)} — ${err.message}`)
    failed++
  }
}

console.log(`\n${created === rishis.length ? '✅' : '⚠️ '} Done — ${created} created, ${failed} failed.\n`)
if (failed > 0) process.exit(1)
