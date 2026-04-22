#!/usr/bin/env node
/**
 * Vedika — Sanity Content Seed Script
 * ------------------------------------
 * Populates your Sanity dataset with well-researched, source-attributed,
 * humanised, SEO-ready content across all content types.
 *
 * SETUP BEFORE RUNNING:
 *   1. In sanity.io/manage → your project → API → Tokens → Add API token
 *      Give it "Editor" permissions and copy the token.
 *   2. Add to your .env.local:
 *        SANITY_WRITE_TOKEN=your_token_here
 *   3. Confirm these are also in .env.local:
 *        NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 *        NEXT_PUBLIC_SANITY_DATASET=production
 *
 * RUN:
 *   node scripts/seed-content.mjs
 *
 * This script is IDEMPOTENT — safe to re-run. It uses createOrReplace,
 * so existing documents are overwritten, not duplicated.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// ─── Environment loading ─────────────────────────────────────────────────────

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
  // .env.local may not exist in CI; rely on real env vars
}

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DATASET    = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const TOKEN      = process.env.SANITY_WRITE_TOKEN

if (!PROJECT_ID) {
  console.error('❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set.')
  process.exit(1)
}
if (!TOKEN) {
  console.error('❌  SANITY_WRITE_TOKEN is not set. See script header for instructions.')
  process.exit(1)
}

const client = createClient({
  projectId:  PROJECT_ID,
  dataset:    DATASET,
  apiVersion: '2024-01-01',
  token:      TOKEN,
  useCdn:     false,
})

// ─── Portable text helpers ───────────────────────────────────────────────────

let _key = 0
const k = (prefix = 'k') => `${prefix}${++_key}`

/** Build a portable text paragraph block */
const p = (text) => ({
  _type: 'block', _key: k('blk'), style: 'normal', markDefs: [],
  children: [{ _type: 'span', _key: k('sp'), text, marks: [] }],
})

/** Build a heading-2 block */
const h2 = (text) => ({
  _type: 'block', _key: k('blk'), style: 'h2', markDefs: [],
  children: [{ _type: 'span', _key: k('sp'), text, marks: [] }],
})

/** Build a heading-3 block */
const h3 = (text) => ({
  _type: 'block', _key: k('blk'), style: 'h3', markDefs: [],
  children: [{ _type: 'span', _key: k('sp'), text, marks: [] }],
})

/** Build a blockquote block */
const bq = (text) => ({
  _type: 'block', _key: k('blk'), style: 'blockquote', markDefs: [],
  children: [{ _type: 'span', _key: k('sp'), text, marks: [] }],
})

const slug  = (current) => ({ _type: 'slug', current })
const ref   = (id)      => ({ _type: 'reference', _ref: id })

// ─── Source References ───────────────────────────────────────────────────────

const sourceRefs = [
  {
    _id: 'src-rigveda',
    _type: 'sourceRef',
    label: 'Ṛgveda Saṃhitā',
    sourceType: 'primary_text',
    author: 'Attributed to Vedic Ṛṣis; compiled by Veda Vyāsa; commentary by Sāyaṇācārya (14th c. CE)',
    workTitle: 'Ṛgveda Saṃhitā (10 maṇḍalas, 10,552 ṛks)',
    citationText: 'The foundational traditional commentary is Sāyaṇācārya\'s Ṛgveda Bhāṣya (14th century CE), which remains the primary interpretive authority across all traditional study lineages. Sri Aurobindo\'s The Secret of the Veda (Sri Aurobindo Ashram, Pondicherry, 1956) is the essential modern Indian philosophical reading — it recovers the inner symbolic meaning of the hymns from within the tradition\'s own language and explicitly refutes Orientalist reductions. The R.L. Kashyap multi-volume edition with Sayana commentary (Saksi / Aurobindo Kapali Shastry Institute of Vedic Culture, Bangalore) is the recommended Sanskrit study edition. T.V. Kapali Shastry\'s Rig Bhashyam (Dipti Publications, Sri Aurobindo Ashram) provides further traditional commentary aligned with Sri Aurobindo\'s approach. The Nāsadīya Sūkta (RV 10.129) and Puruṣa Sūkta (RV 10.90) are among the most philosophically cited hymns.',
    url: 'https://www.sacred-texts.com/hin/rigveda/',
    slug: slug('rigveda-samhita'),
  },
  {
    _id: 'src-upanishads',
    _type: 'sourceRef',
    label: 'Mukhya Upaniṣads (Principal Upanishads)',
    sourceType: 'primary_text',
    author: 'Various Ṛṣis; commentaries by Adi Śaṅkarācārya (c. 788–820 CE)',
    workTitle: 'Bṛhadāraṇyaka, Chāndogya, Taittirīya, Aitareya, Kauṣītaki, Kena, Kaṭha, Īśā, Śvetāśvatara, Muṇḍaka, Māṇḍūkya, Praśna',
    citationText: 'The twelve principal Upaniṣads recognised across all major Vedānta schools, composed roughly 800–200 BCE. Śaṅkara wrote commentaries on ten of these. Swami Gambhirananda\'s eight-volume translation with Śaṅkara\'s bhāṣya (Advaita Ashrama, Calcutta) is the standard traditional study edition. Swami Nikhilananda\'s four-volume edition (Ramakrishna-Vivekananda Center) provides extensive traditional commentary. Swami Ranganathananda\'s The Message of the Upanishads (Bharatiya Vidya Bhavan) is recommended for general readers. The Gita Press Gorakhpur bilingual editions are the standard print reference for Sanskrit study.',
    url: 'https://www.vedantasociety.net/books/upanishads.htm',
    slug: slug('mukhya-upanishads'),
  },
  {
    _id: 'src-bhagavad-gita',
    _type: 'sourceRef',
    label: 'Bhagavad Gītā with Śaṅkara Bhāṣya',
    sourceType: 'commentary',
    author: 'Vyāsa (text); Adi Śaṅkarācārya (Bhāṣya, c. 820 CE)',
    workTitle: 'Śrīmadbhagavadgītā Śaṅkarabhāṣyasahitā',
    citationText: 'The Bhagavad Gītā constitutes chapters 23–40 of the Bhīṣma Parva of the Mahābhārata (700 verses across 18 chapters). Śaṅkara\'s commentary is the foundational Advaita reading and the oldest extant bhāṣya on the Gita. Swami Gambhirananda\'s English translation of the text with Śaṅkara\'s commentary (Advaita Ashrama, Calcutta, 1984) is the standard scholarly-devotional edition. The Gita Supersite at IIT Kanpur (gitasupersite.iitk.ac.in) provides the full Sanskrit text with eighteen Indian commentaries in parallel — an invaluable free resource for comparative traditional study.',
    url: 'https://www.gitasupersite.iitk.ac.in',
    slug: slug('bhagavad-gita-shankara-bhashya'),
  },
  {
    _id: 'src-bhagavatam',
    _type: 'sourceRef',
    label: 'Śrīmad Bhāgavata Purāṇa',
    sourceType: 'primary_text',
    author: 'Attributed to Veda Vyāsa; Sridhara Swami\'s Sanskrit commentary (c. 13th c.)',
    workTitle: 'Śrīmad Bhāgavatam (12 skandhas, ~18,000 verses)',
    citationText: 'One of the eighteen Mahāpurāṇas, composed approximately 9th century CE. The daśama skandha (Book 10), narrating the life of Śrī Kṛṣṇa, is the most widely studied. The Gita Press Gorakhpur bilingual edition (Sanskrit/Hindi) is the standard print reference across India. Swami Tapasyananda\'s four-volume English translation with commentary (Ramakrishna Math, Chennai) is the recommended traditional study edition in English. A.C. Bhaktivedanta Swami Prabhupada\'s multi-volume edition (Bhaktivedanta Book Trust, 1972–1977) is the most comprehensive Vaiṣṇava reading with extensive purports from the Gauḍīya tradition.',
    url: 'https://www.srimadbhagavatam.com',
    slug: slug('srimad-bhagavatam'),
  },
  {
    _id: 'src-yoga-sutras',
    _type: 'sourceRef',
    label: 'Yoga Sūtras of Patañjali',
    sourceType: 'primary_text',
    author: 'Patañjali (c. 400 CE); commentary by Vyāsa (Vyāsabhāṣya)',
    workTitle: 'Yoga Sūtras (196 sūtras in four pādas)',
    citationText: 'The foundational text of the Yoga darśana, one of the six āstika philosophical schools. The four chapters address samādhi, practice (sādhana), supernormal capacities (vibhūti), and liberation (kaivalya). The Vyāsabhāṣya of Vyāsa is the earliest extant commentary, followed by Vācaspati Miśra\'s Tattvavaiśāradī. Swami Hariharananda Aranya\'s Yoga Philosophy of Patanjali (translated by P.N. Mukerji, University of Calcutta Press) is the most rigorous traditional Sanskrit commentary in English, drawing directly on the classical bhāṣya lineage. Swami Vivekananda\'s Raja Yoga (Complete Works, Volume 1, Advaita Ashrama) is the essential Indian interpretive framework. Swami Krishnananda\'s The Study and Practice of Yoga (The Divine Life Society, Rishikesh) provides systematic practical guidance.',
    url: 'https://www.sacred-texts.com/hin/yogasutr.htm',
    slug: slug('yoga-sutras-patanjali'),
  },
  {
    _id: 'src-manusmriti',
    _type: 'sourceRef',
    label: 'Mānava Dharmaśāstra (Manusmṛti)',
    sourceType: 'primary_text',
    author: 'Attributed to Manu; compiled c. 200 BCE–200 CE; commentary by Kullūka Bhaṭṭa (12th c.)',
    workTitle: 'Manusmṛti (2,694 ślokas across 12 chapters)',
    citationText: 'The most cited of the dharmaśāstra literature, covering cosmogony, social ethics, legal procedure, and the duties of each stage of life. The two primary traditional commentaries are Medhatithi\'s Manubhāṣya (10th century CE) and Kullūka Bhaṭṭa\'s Manvarthamuktāvalī (12th century CE) — these remain the authoritative interpretive frameworks within the tradition. The Gita Press Gorakhpur bilingual edition (Sanskrit/Hindi) is the standard print edition. The text belongs to the dharmaśāstra corpus and should be studied with its traditional commentaries rather than through modern frameworks that extract ślokas without their classical interpretive context.',
    url: 'https://www.sacred-texts.com/hin/manu.htm',
    slug: slug('manusmriti'),
  },
  {
    _id: 'src-vivekachudamani',
    _type: 'sourceRef',
    label: 'Vivekacūḍāmaṇi (Crest Jewel of Discernment)',
    sourceType: 'commentary',
    author: 'Adi Śaṅkarācārya (c. 788–820 CE)',
    workTitle: 'Vivekacūḍāmaṇi (580 ślokas)',
    citationText: 'A masterwork of Advaita Vedānta in verse, systematically explaining viveka (discernment between the real and the apparent), the nature of Ātman-Brahman identity, and the conditions for mokṣa. Swami Madhavananda\'s translation (Advaita Ashrama, Calcutta) is the standard English edition. Swami Chinmayananda\'s two-volume commentary edition is recommended for students wanting guided exposition.',
    url: 'https://www.advaita-vedanta.org/avhp/vivekachudamani.html',
    slug: slug('vivekachudamani'),
  },
  {
    _id: 'src-narada-bhakti',
    _type: 'sourceRef',
    label: 'Nārada Bhakti Sūtras',
    sourceType: 'primary_text',
    author: 'Attributed to Nārada Muni; composition date uncertain',
    workTitle: 'Nārada Bhakti Sūtras (84 sūtras)',
    citationText: 'A concise text defining the nature, forms, and disciplines of bhakti (devotion). It engages directly with questions about the relation between love, knowledge, and liberation. Swami Tyagisananda\'s translation and commentary (Ramakrishna Math, 1943) and Swami Prabhavananda\'s rendering are the accessible English editions. The text is best read alongside the tenth book of the Bhāgavatam.',
    url: 'https://www.holy-bhagavad-gita.org/page/narada-bhakti-sutra',
    slug: slug('narada-bhakti-sutras'),
  },
]

// ─── Glossary Entries ────────────────────────────────────────────────────────

const glossaryEntries = [
  {
    _id: 'gloss-dharma',
    _type: 'glossaryEntry',
    term: 'Dharma',
    slug: slug('dharma'),
    transliteration: 'Dharma (धर्म)',
    definition: 'From the Sanskrit root dhṛ — "to hold, to sustain, to carry." Dharma is the foundational ordering principle of Sanatan Dharma: the law that holds the cosmos together, the code of right conduct that sustains society, and the inner duty that sustains the individual soul on its path. Unlike "religion" or "duty" in Western usage, dharma is relational and contextual: universal dharma (sāmānya-dharma) applies to all beings; one\'s personal dharma (svadharma) varies with nature, role, and circumstance. Its first appearances are in the Rigveda as dharman, linked closely to Ṛta, the principle of cosmic order.',
  },
  {
    _id: 'gloss-karma',
    _type: 'glossaryEntry',
    term: 'Karma',
    slug: slug('karma'),
    transliteration: 'Karma (कर्म)',
    definition: 'From the root kṛ — "to do, to make, to act." Karma denotes action in its widest sense: physical, verbal, mental. Philosophically, the doctrine holds that every intentional action plants a seed (saṃskāra) whose fruit must eventually be experienced. This is not fatalism — the Bhagavad Gita (2.47) famously locates freedom precisely in the quality of action: "Your right is to action alone, never to its fruits." Karma yoga — the yoga of action — teaches engagement with full effort and without clinging to outcome, as the route to both ethical clarity and spiritual liberation.',
  },
  {
    _id: 'gloss-moksha',
    _type: 'glossaryEntry',
    term: 'Moksha',
    slug: slug('moksha'),
    transliteration: 'Mokṣa (मोक्ष)',
    definition: 'From the root muc — "to release, to free." Mokṣa is the highest of the four purusharthas (aims of human life): liberation from the saṃsāric cycle of birth, death, and rebirth. Different schools understand it differently. For Advaita Vedānta, mokṣa is the experiential recognition that ātman and Brahman are identical — no becoming, only recognition. For Dvaita Vedānta and Vaiṣṇava schools, it is the soul\'s eternal residence in the presence of a personal God. For Yoga philosophy, it is kaivalya — the puruṣa resting in its own nature, free of entanglement with prakṛti.',
  },
  {
    _id: 'gloss-atman',
    _type: 'glossaryEntry',
    term: 'Ātman',
    slug: slug('atman'),
    transliteration: 'Ātman (आत्मन्)',
    definition: 'The innermost self; the unchanging witness behind all experience. Ātman is not the ego, the body, the mind, or even the intellect — it is the pure awareness in which all these arise and pass away. The Kaṭha Upaniṣad describes it as "subtler than the subtle, greater than the great, seated in the heart." In Advaita Vedānta, ātman is ultimately identical with Brahman (universal consciousness). In Dvaita, it is an eternal individual distinct from but dependent on God. The recognition of one\'s ātman — or rather, the removal of the ignorance that conceals it — is the goal of Vedāntic inquiry.',
  },
  {
    _id: 'gloss-brahman',
    _type: 'glossaryEntry',
    term: 'Brahman',
    slug: slug('brahman'),
    transliteration: 'Brahman (ब्रह्मन्)',
    definition: 'From the root bṛh — "to expand, to grow, to be vast." Brahman is the ultimate, self-luminous, undifferentiated ground of all that exists — not a god among gods, but the very nature of being itself. The Chāndogya Upaniṣad declares it tat tvam asi ("That thou art") and the Bṛhadāraṇyaka identifies it with pure consciousness (prajñānam brahma). It is described as sat-cit-ānanda: being (sat), consciousness (cit), and felicity (ānanda). Brahman should not be confused with Brahmā, the creator deity, or brahmin, the social category.',
  },
  {
    _id: 'gloss-maya',
    _type: 'glossaryEntry',
    term: 'Māyā',
    slug: slug('maya'),
    transliteration: 'Māyā (माया)',
    definition: 'From the root mā — "to measure, to create, to build." In early Vedic usage, māyā is the creative, magical power of the gods. In Advaita Vedānta, Śaṅkara redefines it as the cosmic power of veiling (āvaraṇa) and projection (vikṣepa) — the force by which the infinite appears as the finite, by which Brahman appears as the multiplicity of the world. Māyā is not illusion in the sense of non-existence: the world is real as experience; what is false is the belief that it is independently real, self-sufficient, and permanent.',
  },
  {
    _id: 'gloss-yoga',
    _type: 'glossaryEntry',
    term: 'Yoga',
    slug: slug('yoga'),
    transliteration: 'Yoga (योग)',
    definition: 'From the root yuj — "to yoke, to join, to discipline." Yoga means union: the dissolution of the felt separation between individual self and universal reality. The word covers an enormous range: Patañjali\'s systematic eight-limbed path, the Gita\'s four main paths (jñāna, bhakti, karma, rāja), and the body-focussed haṭha yoga that is most familiar in the modern West. In the Bhagavad Gita, Kṛṣṇa calls "evenness of mind" (samatvam) itself yoga — a definition worth sitting with before narrowing to any specific technique.',
  },
  {
    _id: 'gloss-ahimsa',
    _type: 'glossaryEntry',
    term: 'Ahiṃsā',
    slug: slug('ahimsa'),
    transliteration: 'Ahiṃsā (अहिंसा)',
    definition: 'Non-harming; the practice of causing no injury — physical, verbal, or mental — to any living being. Listed by Patañjali as the first of the five yamas (ethical restraints) in the Yoga Sutras, and foundational to the ethical teachings of the Mahābhārata and Manusmṛti. While often translated as "non-violence," the scope is wider: it encompasses intention, speech, and thought, not only physical action. The Mahābhārata states: "Ahiṃsā is the highest dharma" (Anuśāsana Parva 115.1) — though the text also recognises contextual dharmic use of force, making its interpretation nuanced rather than absolute.',
  },
  {
    _id: 'gloss-satya',
    _type: 'glossaryEntry',
    term: 'Satya',
    slug: slug('satya'),
    transliteration: 'Satya (सत्य)',
    definition: 'From sat — "being, existence, truth." Satya is truthfulness: the alignment of thought, speech, and action. The second of Patañjali\'s yamas. In Vedāntic philosophy, satya carries a deeper resonance: that which is real, that which endures — ultimately pointing to Brahman as the only satya, while the world of change is mithyā (not unreal, but not independently real). The tension between conventional truth and ultimate truth (paramārtha) is a recurring theme across Upaniṣadic and Vedānta literature.',
  },
  {
    _id: 'gloss-samsara',
    _type: 'glossaryEntry',
    term: 'Saṃsāra',
    slug: slug('samsara'),
    transliteration: 'Saṃsāra (संसार)',
    definition: 'From saṃ + sṛ — "to flow together, to wander." The continuous stream of birth, life, death, and rebirth driven by karma and attachment. Saṃsāra is not a punishment but a consequence: the soul, mistaking the finite for the infinite, is drawn back by desire and unfulfilled action into repeated embodiment. The first systematic presentations of karma-saṃsāra doctrine appear in the Bṛhadāraṇyaka and Chāndogya Upaniṣads. Liberation from saṃsāra — mokṣa — is the central soteriological goal across virtually all Hindu darśanas.',
  },
  {
    _id: 'gloss-guna',
    _type: 'glossaryEntry',
    term: 'Guṇa',
    slug: slug('guna'),
    transliteration: 'Guṇa (गुण)',
    definition: 'Thread, quality, strand. In Sāṃkhya and Yoga philosophy, the three guṇas are the constitutive qualities of Prakṛti (nature): Sattva (clarity, purity, lightness), Rajas (energy, passion, agitation), and Tamas (inertia, heaviness, obscuration). Everything in the material world — matter, the senses, the mind, the intellect, even the ego — is a blend of these three in varying proportions. The Bhagavad Gita devotes an entire chapter (14) to their characteristics and effects, and teaches that the spiritual aspirant should cultivate sattva, then transcend all three guṇas toward the guṇātīta state.',
  },
  {
    _id: 'gloss-viveka',
    _type: 'glossaryEntry',
    term: 'Viveka',
    slug: slug('viveka'),
    transliteration: 'Viveka (विवेक)',
    definition: 'From vi + vic — "to separate, to discern, to distinguish." Viveka is the capacity to discriminate between the real and the apparent, the permanent and the transient, the self (ātman) and the not-self (anātman). Śaṅkara identifies viveka as the first and most fundamental prerequisite for Vedāntic inquiry — without the ability to distinguish sat (being, real) from asat (non-being, apparent), the student cannot benefit from the highest teachings. His Vivekacūḍāmaṇi (Crest Jewel of Discernment) takes its name from this central faculty.',
  },
  {
    _id: 'gloss-vairagya',
    _type: 'glossaryEntry',
    term: 'Vairāgya',
    slug: slug('vairagya'),
    transliteration: 'Vairāgya (वैराग्य)',
    definition: 'From vi + rāga — "beyond passion, dispassion." Vairāgya is the quality of non-attachment — not indifference to the world, but freedom from compulsive craving for it. Patañjali defines it (Yoga Sutras 1.15) as the "consciousness of mastery" — the state of one who has ceased to thirst for objects seen or heard of. Śaṅkara pairs it directly with viveka as the two foundational qualifications for Vedāntic study: one must be able to discern the real from the unreal, and be sufficiently disenchanted with the unreal to pursue the real.',
  },
  {
    _id: 'gloss-prakriti',
    _type: 'glossaryEntry',
    term: 'Prakṛti',
    slug: slug('prakriti'),
    transliteration: 'Prakṛti (प्रकृति)',
    definition: 'From pra + kṛ — "primary doing, original activity." In Sāṃkhya philosophy, Prakṛti is primal matter — the uncaused, undifferentiated source of all material existence. Everything in the phenomenal world — from gross matter to the subtlest mental operations — evolves from Prakṛti. It operates through the three guṇas. Puruṣa (pure consciousness) is Prakṛti\'s eternal partner and witness: consciousness observes, matter acts. The confusion between Puruṣa and Prakṛti — taking the body-mind complex for the self — is, in Sāṃkhya, the root of bondage.',
  },
  {
    _id: 'gloss-purusharthas',
    _type: 'glossaryEntry',
    term: 'Puruṣārthas',
    slug: slug('purusharthas'),
    transliteration: 'Puruṣārtha (पुरुषार्थ)',
    definition: 'The four legitimate aims (arthāḥ) of a human life (puruṣa): Dharma (righteous conduct), Artha (material prosperity and security), Kāma (legitimate pleasure and desire), and Mokṣa (liberation). Together they form a framework that honours the full range of human aspiration without reducing life to either purely worldly or purely other-worldly ends. The tension between the four — particularly between artha/kāma and dharma, and between all three and mokṣa — structures much of the ethical reasoning in the Mahābhārata, Manusmṛti, and Arthaśāstra.',
  },
]

// ─── Topics ──────────────────────────────────────────────────────────────────

const topics = [
  {
    _id: 'topic-dharma',
    _type: 'topic',
    title: 'Dharma — Cosmic Order and Ethical Duty',
    slug: slug('dharma'),
    summary: 'Dharma is the foundational ordering principle of Sanatan Dharma — encompassing cosmic law, personal ethical duty, and the sustaining fabric of both individual life and the wider universe. Correctly understood, dharma is not a fixed rule-book but a living, relational concept that responds to nature, role, and circumstance.',
    difficulty: 'beginner',
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-manusmriti'), ref('src-rigveda')],
    body: [
      h2('What dharma actually means'),
      p('The word dharma (धर्म) derives from the Sanskrit root dhṛ — to hold, to sustain, to carry. This etymology is the key to the concept. Dharma is not an external law imposed from outside but the inner coherence of things: what holds a community together, what sustains the cosmos in its order, what keeps an individual aligned with their deepest nature.'),
      p('In Western discourse, dharma is often translated as "religion," "duty," or "righteousness." Each catches something real, but all fall short. Dharma is relational in a way these words are not: what is right conduct depends on who you are, what role you hold, which moment you inhabit. There is universal dharma (sāmānya-dharma) that applies to all beings — ahiṃsā, satya, cleanliness, generosity — and there is particular dharma (viśeṣa-dharma) that is specific to one\'s nature and station in life.'),
      h2('Dharma in the Rigveda: Ṛta and order'),
      p('The earliest Vedic concept closest to dharma is Ṛta — the cosmic order that governs the movement of the sun, the sequence of seasons, the rhythm of sacrifice, and the moral order of human conduct. Varuṇa, the great Vedic deity of sky and ocean, is the guardian of Ṛta. When human conduct aligns with Ṛta, the world flourishes; when it violates it, disorder — adharma — ensues.'),
      p('The word dharman (from the same root as dharma) appears in the Rigveda explicitly in passages that speak of establishing right order: "sustaining truth" (RV 1.22.18). By the time of the Upaniṣads and the Mahābhārata, dharma has developed into the rich, multi-layered concept we encounter today.'),
      h2('The Bhagavad Gita on svadharma'),
      bq('Śreyān svadharmo viguṇaḥ paradharmāt svanuṣṭhitāt — Better is one\'s own dharma, even imperfectly performed, than the dharma of another well performed. (BG 3.35)'),
      p('This is among the most commented-upon verses in all of Sanskrit literature. Kṛṣṇa\'s point is not that your dharma is superior to another\'s but that authenticity in living your own dharma — however imperfect — is more fruitful than performing a role that belongs to another. Forcing yourself into a pattern that does not fit your nature creates internal violence; svadharma, by contrast, releases your deepest capacities.'),
      h2('The ongoing inquiry'),
      p('Dharma is not a concept you grasp once and then store away. The tradition itself presents it as an ongoing inquiry. The Mahābhārata famously says: dharmasya tattvaṃ nihitaṃ guhāyām — "the truth of dharma is hidden in a cave." The difficulty is part of the teaching: moral life requires continuous discernment, not the application of a fixed formula.'),
      p('For modern readers approaching Sanatan Dharma, the most useful entry point is to resist the temptation to flatten dharma into a single definition. Begin with the primary texts — the Bhagavad Gita is the most accessible — and allow the concept to reveal itself through multiple contexts and commentaries.'),
    ],
  },
  {
    _id: 'topic-karma',
    _type: 'topic',
    title: 'Karma — Action, Consequence, and Liberation',
    slug: slug('karma'),
    summary: 'Karma (कर्म) means action — but in its philosophical depth, it names the entire causal chain linking intentional deed to its inevitable fruit across time and lifetimes. The tradition\'s teaching on karma is not fatalistic: the Bhagavad Gita locates human freedom precisely within karma itself, in the quality of how we act.',
    difficulty: 'beginner',
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-upanishads'), ref('src-yoga-sutras')],
    body: [
      h2('Karma is not fate'),
      p('The word karma simply means "action" — from the root kṛ, "to do or make." But the doctrine of karma encompasses something far larger: the principle that every intentional act plants a seed (saṃskāra) whose fruit must eventually be experienced. Past actions shape present conditions; present actions shape future ones. This is karma as cosmological law — not a moral police system but the structure of cause and effect applied to conscious action.'),
      p('Where karma is often misunderstood is in its relationship to fate. Karma does not mean you are trapped by your past. The doctrine is actually a teaching on freedom: because you are acting now, you are always generating new karma, always capable of redirecting the stream. The Chāndogya Upaniṣad (3.14.1) states: "One becomes what one wills" — and what one wills is expressed through action.'),
      h2('Three kinds of karma'),
      p('The tradition distinguishes three categories. Sañcita karma is the accumulated store of past actions not yet ripened into experience — the vast reservoir you carry. Prārabdha karma is the portion of that store that has already "begun" — the conditions of this particular life, including your body, family, and early circumstances. Āgāmi karma is the karma you are generating right now through your present thoughts and actions.'),
      p('The key insight of karma yoga is that while you cannot immediately dissolve your sañcita and prārabdha karma, you can stop generating new bondage-creating karma by acting without selfish attachment to results.'),
      h2('Karma yoga: action as spiritual path'),
      bq('Karmaṇy-evādhikāras te mā phaleṣu kadācana — Your right is to action alone, never to its fruits. (BG 2.47)'),
      p('This verse from the Bhagavad Gita is perhaps the most cited teaching on karma in the entire tradition. Kṛṣṇa\'s instruction to Arjuna — act fully, act rightly, but release your grip on outcome — is not passivity. It is a precise teaching on where mental energy should and should not be invested. When action is motivated by desire for a specific result and identification with the result, it creates bondage. When action flows from duty, clarity, and surrender, it purifies the mind without creating new entanglement.'),
      h2('Karma in the Upanishads'),
      p('The earliest systematic formulation of karma-and-rebirth appears in the Bṛhadāraṇyaka Upaniṣad (3.2.13), where Yājñavalkya tells Artabhāga: "Come, let us discuss this in private" — then explains that a person becomes exactly what their actions have made them. The Chāndogya Upaniṣad extends this: those of good conduct attain a good womb; those of foul conduct attain a foul one. This is not a moral judgment but a natural law, as impersonal as gravity.'),
    ],
  },
  {
    _id: 'topic-atman-brahman',
    _type: 'topic',
    title: 'Ātman and Brahman — Self and Ultimate Reality',
    slug: slug('atman-brahman'),
    summary: 'The relationship between Ātman (the individual self) and Brahman (ultimate reality) is the central metaphysical question of Vedāntic philosophy. The three great schools of Vedānta — Advaita, Viśiṣṭādvaita, and Dvaita — each offer a different answer, and understanding the disagreement deepens your reading of the source texts enormously.',
    difficulty: 'intermediate',
    sourceRefs: [ref('src-upanishads'), ref('src-bhagavad-gita'), ref('src-vivekachudamani')],
    body: [
      h2('The inquiry that structures everything'),
      p('Before Vedic philosophy speculates about cosmology or ethics, it asks a foundational question: what am I? Not what body do I have, not what social role do I occupy — but what is the witnessing awareness that notices all these things? This is the inquiry into Ātman.'),
      p('Ātman (आत्मन्) is not the ego. It is not your personality, your memories, or even your intellect. It is the pure awareness — the witness — in which body, mind, emotions, and thoughts arise and pass away. The Kaṭha Upaniṣad describes it as "subtler than the subtle, greater than the great, seated in the heart of this creature." The Māṇḍūkya Upaniṣad identifies it with the fourth state of consciousness (turīya): the aware background of waking, dreaming, and deep sleep.'),
      h2('Brahman: the ground of all that exists'),
      p('Brahman (ब्रह्मन्) is the ultimate, self-luminous reality — not a personal god though it may take personal form, not a distant creator though creation flows from it. The Taittirīya Upaniṣad offers the terse formulation: satyaṃ jñānaṃ anantaṃ brahma — Brahman is truth, consciousness, infinity. The Bṛhadāraṇyaka adds: prajñānam brahma — consciousness is Brahman.'),
      p('The word itself comes from bṛh — "to expand, to grow vast." Brahman is not an entity within the universe but the very nature of being: the single ground from which the apparent multiplicity of the world arises.'),
      h2('The mahāvākyas: great declarations of identity'),
      p('Four statements from the principal Upaniṣads are revered as mahāvākyas — "great sayings" — that express the relationship between ātman and Brahman directly: tat tvam asi (That thou art — Chāndogya), ahaṃ brahmāsmi (I am Brahman — Bṛhadāraṇyaka), prajñānaṃ brahma (Consciousness is Brahman — Aitareya), and ayam ātmā brahma (This self is Brahman — Māṇḍūkya). These are not metaphors. The tradition intends them as direct declarations of identity — the deepest nature of the self is not separate from the deepest nature of reality.'),
      h2('Three schools, three answers'),
      p('The most famous philosophical debate in the Vedānta tradition concerns how to understand these statements. Adi Śaṅkarācārya (8th century CE) reads them as expressing strict non-duality: ātman and Brahman are numerically identical; the appearance of multiplicity is māyā. Rāmānuja (11th century) objects: there is genuine difference between selves, the world, and God — but they exist as the body of Brahman, in qualified non-dual relation (viśiṣṭādvaita). Madhvācārya (13th century) argues for irreducible distinction between the individual soul, the world, and a personal God: dvaita.'),
      p('These are not merely abstract disagreements. They have concrete implications for how you practice, what liberation means, and what the highest form of the spiritual life looks like. Beginning students benefit from knowing the disagreement exists before committing too quickly to any single reading.'),
    ],
  },
  {
    _id: 'topic-four-yogas',
    _type: 'topic',
    title: 'The Four Yogas — Paths to Liberation',
    slug: slug('four-yogas'),
    summary: 'Yoga means union — the dissolution of felt separation between individual self and universal reality. The Bhagavad Gita systematically presents four paths: Jñāna (knowledge), Bhakti (devotion), Karma (action), and Rāja (meditation and self-discipline). They are not competing routes but complementary expressions of the same journey, suited to different temperaments.',
    difficulty: 'beginner',
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-yoga-sutras'), ref('src-narada-bhakti')],
    body: [
      h2('Why four paths?'),
      p('The tradition\'s recognition that there is not one path to liberation but several reflects a sophisticated understanding of human nature. People differ in temperament, in the faculties that are most alive in them, in the contexts and relationships that open them most readily. A highly intellectual person may find jñāna yoga most natural; a devotionally oriented person may find bhakti yoga the most direct entry. These are not competing routes but different doors into the same building.'),
      p('Swami Vivekananda, in his systematic presentation of the four yogas in the late 19th century, popularized this fourfold framework for Western audiences. The structure itself is drawn from the Bhagavad Gita, where Kṛṣṇa addresses Arjuna through all four approaches across the eighteen chapters.'),
      h2('Jñāna Yoga: the path of discernment'),
      p('Jñāna yoga is the path of discriminative knowledge (viveka) — the systematic inquiry into the nature of the self and reality. The student learns to distinguish the permanent from the transient, the self from the not-self, Brahman from māyā. The practice involves śravana (hearing the teaching), manana (sustained reflection until doubts dissolve), and nididhyāsana (deep contemplation until the knowledge becomes lived reality, not merely intellectual).'),
      p('The Vivekacūḍāmaṇi of Śaṅkara is the classical text of this path. It is demanding — the jñānin must have exhausted the appeal of finite satisfactions sufficiently to sustain the inquiry with full sincerity.'),
      h2('Bhakti Yoga: the path of devotion'),
      p('Bhakti yoga is the path of love and devotion to a personal form of the divine. The Nārada Bhakti Sūtras define bhakti as paramā prema — supreme love. This is not sentimental religiosity but a disciplined orientation of the heart: every action, thought, and relationship gradually becomes an offering to the beloved divine. The path has nine classical forms from śravaṇa (hearing sacred stories) to ātma-nivedana (complete self-surrender).'),
      bq('Ananyāś cintayanto māṃ ye janāḥ paryupāsate / teṣāṃ nityābhiyuktānāṃ yoga-kṣemaṃ vahāmy aham — Those who worship me with exclusive devotion, meditating on my transcendental form — to them I carry what they lack and preserve what they have. (BG 9.22)'),
      h2('Karma Yoga: the path of action'),
      p('Karma yoga is not a path of works in the sense of accumulating merit through ritual — it is the path of action performed without ego-driven attachment to results. The Gita\'s key teaching (BG 2.47) is that you have a right to action but not to its fruits. By acting from duty and inner clarity rather than desire for reward or fear of failure, the karma yogi gradually purifies the mind and dissolves the sense of a separate self that "owns" the action.'),
      h2('Rāja Yoga: the path of meditation'),
      p('Rāja yoga — "royal yoga" — follows the systematic eight-limbed (aṣṭāṅga) path laid out in Patañjali\'s Yoga Sūtras: ethical foundations (yama/niyama), physical stability (āsana), regulation of vital energy (prāṇāyāma), withdrawal of the senses (pratyāhāra), concentration (dhāraṇā), meditation (dhyāna), and absorption (samādhi). The goal is citta-vṛtti-nirodha — the stilling of the fluctuations of the mind — allowing the witnessing awareness to rest in its own nature.'),
    ],
  },
  {
    _id: 'topic-moksha',
    _type: 'topic',
    title: 'Moksha — Liberation and the End of Seeking',
    slug: slug('moksha'),
    summary: 'Mokṣa — liberation, release, freedom — is the fourth and highest of the four purusharthas. It names freedom from the cycle of saṃsāra and the full realisation of one\'s true nature. Different traditions within Sanatan Dharma understand what this means quite differently, and those differences are worth understanding clearly.',
    difficulty: 'intermediate',
    sourceRefs: [ref('src-upanishads'), ref('src-vivekachudamani'), ref('src-bhagavad-gita')],
    body: [
      h2('What is being released?'),
      p('The root of mokṣa (मोक्ष) is muc — to release, to free, to untie. What is being released? Not the self, because the self was never truly bound. What is released is the ignorance (avidyā) that causes the self to misidentify with the body-mind complex, with desires, with social roles — and thereby to suffer the endless restlessness of saṃsāra.'),
      p('This is a subtle but crucial point: in Advaita Vedānta especially, mokṣa is not a state you achieve but a recognition of what was always already the case. The Bṛhadāraṇyaka Upaniṣad (4.3.19) says the self in deep sleep already touches this freedom — "it is like a man in the embrace of his beloved, who knows neither within nor without." Mokṣa extends that peace into the waking state, permanently.'),
      h2('Jīvanmukti: liberation while living'),
      p('One of the remarkable contributions of the Advaita tradition is the concept of jīvanmukti — liberation while still alive in the body. The jīvanmukta has recognised the nature of the self as identical with Brahman and thereby dissolved the cause of bondage, yet continues to live, act, and engage with the world. Prārabdha karma — the karma already in motion at the time of liberation — continues to unfold, producing experiences the body-mind undergoes. But the jīvanmukta is no longer identified with any of it.'),
      p('This stands in contrast to traditions that see liberation as primarily post-mortem (videhamukti — liberation at death). Both are recognised; the Advaita emphasis on jīvanmukti reflects its conviction that liberation is a knowledge-event, not a location or a future state.'),
      h2('Different schools, different understandings'),
      p('For Rāmānuja\'s Viśiṣṭādvaita, mokṣa is the soul\'s entry into a state of perfect devotional intimacy with Viṣṇu — the soul retains individual identity but is freed from the limiting effects of karma and prakṛti. For Madhvācārya\'s Dvaita, liberation is the soul\'s eternal enjoyment of divine bliss in Viṣṇu\'s presence, maintaining permanent distinction from both God and other liberated souls.'),
      p('For Patañjali\'s Yoga, the equivalent term is kaivalya — aloneness or isolation — the state in which puruṣa (consciousness) rests in its own nature, disentangled from the superimpositions of prakṛti. No merger with a universal self here: the emphasis is on the clarity of the witness, no longer confused with the contents of experience.'),
      h2('A note for new students'),
      p('Mokṣa can feel like an abstract destination when you encounter it in texts. The tradition\'s teachers consistently bring it back to the present: not as something that will happen in a future life or at the moment of death, but as what you are already pointing toward every time you pause, breathe, and recognise the awareness in which your thoughts and sensations are arising right now. The inquiry into mokṣa and the inquiry into "what am I?" are ultimately the same question.'),
    ],
  },
  {
    _id: 'topic-three-gunas',
    _type: 'topic',
    title: 'The Three Guṇas — The Qualities of Nature',
    slug: slug('three-gunas'),
    summary: 'In Sāṃkhya and Yoga philosophy, the three guṇas — Sattva (clarity), Rajas (energy), and Tamas (inertia) — are the constitutive qualities of Prakṛti. Everything in the material world, including the human mind, is a blend of all three. The Bhagavad Gita teaches that spiritual progress involves cultivating sattva, then transcending even sattva.',
    difficulty: 'intermediate',
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-yoga-sutras')],
    body: [
      h2('Three threads in the fabric of nature'),
      p('The word guṇa (गुण) means thread, quality, or strand. The metaphor is a rope: a rope is made of three twisted strands, inseparable from each other, each modified by the others, yet distinguishable when examined closely. Similarly, all of Prakṛti (material nature) — from the densest matter to the subtlest mental operation — is woven from three strands: Sattva, Rajas, and Tamas.'),
      p('This is not merely a cosmological theory. The guṇas have direct practical implications for how you understand your own mind, why different actions have different psychological effects, and what "progress" in spiritual practice actually looks like.'),
      h2('Sattva: clarity, purity, lightness'),
      p('Sattva is associated with light, clarity, purity, and the capacity for knowledge. When sattva predominates in the mind, there is a sense of ease, discernment, and spaciousness. Sattvic foods, environments, and activities support the mind\'s capacity to meditate and discern. The Bhagavad Gita (14.6) describes sattva as "luminous and pure" but warns that it binds the soul through attachment to happiness and knowledge — even clarity can become a subtle form of clinging.'),
      h2('Rajas: energy, passion, restlessness'),
      p('Rajas is characterised by activity, passion, desire, and agitation. Rajasic states drive ambition, creativity, anger, and restlessness — the mind is always moving toward or away from something. Rajas is not "bad": without it, nothing would ever be done. But when it dominates, the mind is like a fire that consumes its fuel constantly, unable to rest. The Gita (14.7) describes rajas as the source of desire (kāma) and attachment — it binds through craving for action and its results.'),
      h2('Tamas: inertia, heaviness, obscuration'),
      p('Tamas is associated with heaviness, inertia, darkness, and obscuration. In the body, tamas manifests as lethargy, oversleeping, and dullness. In the mind, it appears as confusion, delusion, and resistance to inquiry. Tamasic states cloud discrimination and pull toward unconsciousness. The Gita (14.8) describes tamas as arising from ignorance, binding the soul through heedlessness, laziness, and sleep.'),
      h2('The path through the guṇas'),
      p('Spiritual practice in this framework is not a leap past the guṇas but a gradual transmutation: Tamas is first overcome by Rajas (activity, discipline, engagement), and Rajas is then refined by Sattva (clarity, purity, equanimity). But even Sattva must eventually be transcended. The guṇātīta — one who is beyond the guṇas (BG 14.22–25) — acts without being driven by any of them: steady in pleasure and pain, unswayed by praise or blame, equal to friend and enemy.'),
    ],
  },
  {
    _id: 'topic-samsara',
    _type: 'topic',
    title: 'Saṃsāra — The Cycle of Birth, Death, and Rebirth',
    slug: slug('samsara'),
    summary: 'Saṃsāra is the continuous stream of embodied existence — birth, growth, decay, death, and rebirth — sustained by karma and the soul\'s unfulfilled desires. It is not a punishment but a consequence of mistaken identity. Understanding saṃsāra clearly is the first step toward the sustained motivation required for genuine spiritual inquiry.',
    difficulty: 'beginner',
    sourceRefs: [ref('src-upanishads'), ref('src-bhagavad-gita')],
    body: [
      h2('The flowing world'),
      p('The word saṃsāra (संसार) comes from saṃ + sṛ — "to flow together." It names the continuous stream of experience: the round of births and deaths driven by karma and the soul\'s attachment to the objects it desires. The image is of a river that keeps flowing because the source of water — unfulfilled longing, unsettled action — has not been dried up.'),
      p('Saṃsāra is first clearly described in the Bṛhadāraṇyaka Upaniṣad (3.2.13), where the sage Yājñavalkya explains to Artabhāga that a person becomes what their actions have prepared them to become, and that the soul passes from one body to the next as a caterpillar moves from leaf to leaf. The Chāndogya Upaniṣad (5.3–10) describes the two paths after death: the "path of the gods" (devayāna) leading toward liberation, and the "path of the ancestors" (pitṛyāna) leading back to rebirth on earth.'),
      h2('Why saṃsāra is not a punishment'),
      p('A critical distinction: saṃsāra is not inflicted on the soul by an external authority. It is the natural consequence of the soul\'s own orientation. When the soul is turned outward, toward the finite and the transient, identifying with the body and its desires, it generates karma that draws it back into embodied experience. This is simply how consciousness and causality work together.'),
      p('This matters practically. If saṃsāra were punishment, liberation would require appeasing someone. Because it is consequence, liberation requires understanding — specifically, the understanding that dissolves the mistaken identification at the root.'),
      h2('The Bhagavad Gita\'s perspective'),
      bq('It is never born, nor does It die at any time. Having come to be, It will not cease to exist again. Birthless, eternal, ever-existing and primeval, It is not slain when the body is slain. (BG 2.20, Swami Gambhirananda trans., Advaita Ashrama)'),
      p('Kṛṣṇa\'s extended teaching on the nature of the ātman in Chapter 2 is partly an argument about saṃsāra: grief over death is based on a misunderstanding of what the self is. The body comes and goes; the self does not. This is not a consolation prize but the foundation of an inquiry — if the self is not the body, not the mind, not the social role, then what is it? And what is the saṃsāric condition, understood from that vantage?'),
      h2('Living with the teaching'),
      p('For contemporary readers, the doctrine of saṃsāra raises difficult questions: Is rebirth literally true? What, exactly, transmigrates? These are genuine questions and the tradition addresses them carefully. But even setting aside literal rebirth, the psychological truth of saṃsāra is immediate: we are born repeatedly into habitual patterns of reactivity, repeat the same relational dynamics, find ourselves bound by the same desires generation to generation. The liberation the tradition points toward — freedom from compulsive repetition — is available as inquiry right now.'),
    ],
  },
  {
    _id: 'topic-purusharthas',
    _type: 'topic',
    title: 'The Purusharthas — Four Aims of Human Life',
    slug: slug('purusharthas'),
    summary: 'The four purusharthas — Dharma (righteous conduct), Artha (prosperity), Kāma (legitimate desire), and Mokṣa (liberation) — are the tradition\'s framework for a complete human life. They acknowledge the full range of human aspiration without reducing existence to either pure materialism or world-renouncing asceticism.',
    difficulty: 'beginner',
    sourceRefs: [ref('src-manusmriti'), ref('src-bhagavad-gita')],
    body: [
      h2('A framework for being fully human'),
      p('The word puruṣārtha means "the aim of a person" — what a human being legitimately pursues. The tradition\'s recognition of four distinct and valid aims reflects a mature anthropology: human beings are complex; the good life involves multiple dimensions, not the crushing of some in favour of others.'),
      p('What is remarkable about this framework is what it does not do. It does not say: suppress your desires, ignore your economic needs, renounce worldly engagement, and only pursue mokṣa. It says: pursue all four, in their proper order and proportion. Artha and Kāma — wealth and pleasure — are legitimate when they operate within the bounds of dharma. Mokṣa is the crown, but its pursuit does not require abandoning the other three except in specific conditions of renunciation.'),
      h2('Dharma: the integrating principle'),
      p('Dharma stands first among the purusharthas not because it overrides all others but because it provides the framework within which the others are pursued rightly. Artha pursued without dharma becomes exploitation; Kāma without dharma becomes compulsion; Mokṣa pursued without dharmic grounding risks bypassing genuine transformation. Dharma is the regulating thread.'),
      h2('Artha: the necessity of material life'),
      p('Artha (अर्थ) means meaning, purpose, and material means — wealth, resources, political power, security. The Arthaśāstra of Kauṭilya (c. 3rd century BCE) is the tradition\'s most systematic treatment of artha as statecraft and economics. Manusmṛti addresses it as a householder\'s responsibility. The tradition is clear: poverty is not spiritually virtuous. Providing for one\'s family, contributing to community welfare, and sustaining the conditions for study and practice are legitimate and necessary aims.'),
      h2('Kāma: the place of pleasure'),
      p('Kāma (काम) is desire, pleasure, love, and aesthetic enjoyment. The Kāma Sūtras of Vātsyāyana are the tradition\'s systematic treatment of kāma — not simply a manual for physical pleasure but a serious treatise on the arts of relationship, sensory refinement, and the cultivation of the pleasurable dimensions of life. The tradition neither represses nor worships desire: it treats it as a dimension of human experience to be engaged with intelligence and self-awareness rather than compulsion.'),
      h2('Moksha: the final aim'),
      p('Mokṣa stands at the summit of the purusharthas not because the other three are inferior but because they are ultimately insufficient. Dharma, artha, and kāma can be fulfilled beautifully — and the tradition strongly affirms doing so — and yet leave a residual restlessness that no outer arrangement can resolve. This restlessness, in Vedāntic thought, is the soul\'s recognition that its deepest nature cannot be satisfied by the finite. Mokṣa is the final answer to that recognition.'),
    ],
  },
]

// ─── Texts ───────────────────────────────────────────────────────────────────

const texts = [
  {
    _id: 'text-bhagavad-gita',
    _type: 'text',
    title: 'Bhagavad Gita',
    slug: slug('bhagavad-gita'),
    traditionLabel: 'Smṛti — Itihāsa (Mahābhārata)',
    overview: 'The Bhagavad Gītā is a 700-verse dialogue between the warrior Arjuna and his charioteer-teacher Kṛṣṇa, embedded in the Bhīṣma Parva of the Mahābhārata. Composed between approximately 200 BCE and 200 CE, it unfolds on the eve of the Kurukshetra war, where Arjuna\'s existential crisis — faced with the prospect of fighting and killing his own kinsmen — becomes the occasion for one of world literature\'s most searching treatments of ethics, identity, action, devotion, and liberation.',
    sourceRefs: [ref('src-bhagavad-gita')],
    topics: [ref('topic-dharma'), ref('topic-karma'), ref('topic-four-yogas')],
    content: [
      h2('Structure and setting'),
      p('The text is organised in 18 chapters (adhyāyas), traditionally grouped into three sections of six chapters: the first six address karma yoga and the nature of action; chapters seven through twelve address bhakti and the divine nature of Kṛṣṇa; the final six address jñāna, the nature of the field and the knower of the field, and the guṇas. The dialogue format — a distressed student, a composed teacher, a crisis that cannot wait — creates urgency and intimacy rarely matched in philosophical literature.'),
      h2('The question at the centre'),
      p('Arjuna\'s collapse at BG 1.28 is not simply stage fright. It is a genuine moral crisis: how can killing one\'s teachers, relatives, and companions in pursuit of a kingdom be dharma? Kṛṣṇa\'s answer occupies the next 17 chapters and addresses not merely the immediate question but its roots — in the soul\'s misidentification with the body, in the confusion between action and its motivation, in the false belief that results can be owned.'),
      h2('Commentarial traditions'),
      p('The Bhagavad Gita has attracted more commentaries than perhaps any other Sanskrit text. The three Vedāntic ācāryas — Śaṅkara (Advaita), Rāmānuja (Viśiṣṭādvaita), and Madhva (Dvaita) — each wrote full bhāṣyas on it, and their disagreements illuminate the depth of the text\'s philosophical range. Modern commentators from Bal Gangadhar Tilak (karma yoga emphasis) to Swami Vivekananda, Aurobindo, and Swami Chinmayananda each bring different lenses. Reading across commentaries is more illuminating than any single reading.'),
      h2('Recommended approach for new readers'),
      p('Begin with the text itself before any commentary. The Gita Supersite at IIT Kanpur (gitasupersite.iitk.ac.in) provides the full Sanskrit with multiple Indian commentaries in parallel — the most comprehensive free resource for traditional study. Then choose a single commentary and read it through completely before sampling others. Swami Gambhirananda\'s translation of Śaṅkara\'s bhāṣya (Advaita Ashrama) is the scholarly-devotional standard. Swami Chinmayananda\'s discourses are more accessible for beginners.'),
    ],
  },
  {
    _id: 'text-upanishads',
    _type: 'text',
    title: 'The Upanishads',
    slug: slug('upanishads'),
    traditionLabel: 'Śruti — Vedānta (end of the Vedas)',
    overview: 'The Upaniṣads are the philosophical culmination of the Vedic corpus — hence the name Vedānta, "end of the Vedas." Composed over several centuries from approximately 800 BCE, they record dialogues between sages and students in forest retreats and royal courts. Their central concern is the nature of consciousness, the relationship between the individual self (ātman) and ultimate reality (Brahman), and the conditions for liberation from saṃsāra.',
    sourceRefs: [ref('src-upanishads')],
    topics: [ref('topic-atman-brahman'), ref('topic-moksha'), ref('topic-samsara')],
    content: [
      h2('What the Upanishads are — and what they are not'),
      p('The Upaniṣads are not a single book with a single author and a single argument. They are a genre of text — dialogues, declarations, and meditations — produced across a span of several centuries by multiple teachers in multiple lineages. The word Upaniṣad itself is traditionally read as upa + ni + sad: "sitting down near" — the transmission of knowledge from teacher to student in close proximity.'),
      p('There are over two hundred texts that carry the Upaniṣad name. Twelve are universally recognised as "principal" Upaniṣads (mukhya) by virtue of having received Śaṅkara\'s commentary. These twelve — from the large, narrative Bṛhadāraṇyaka and Chāndogya to the short, pithy Māṇḍūkya (twelve verses only) — span a remarkable range of style and approach.'),
      h2('The central inquiry'),
      p('Every Upaniṣad circles around a cluster of related questions: What is the ātman — the self? What is Brahman — ultimate reality? What is their relationship? What is the nature of bondage and the nature of liberation? The Chāndogya\'s "tat tvam asi" (That thou art — 6.8.7) and the Bṛhadāraṇyaka\'s "ahaṃ brahmāsmi" (I am Brahman — 1.4.10) are the most famous formulations of the answer.'),
      h2('Recommended sequence for study'),
      p('For new students, the Kaṭha Upaniṣad is the best starting point: it has a compelling narrative frame (the boy Naciketā demanding the secret of death from Yama himself), is relatively short, and introduces the key themes of ātman, Brahman, and mokṣa with unusual clarity and poetry. From there, the Īśā Upaniṣad (eighteen verses) and Kena Upaniṣad offer compressed philosophical statements. The Chāndogya and Bṛhadāraṇyaka are the deep reservoirs — read them slowly, in good translation, with commentary.'),
      h2('Translation recommendations'),
      p('Swami Gambhirananda\'s eight-volume translation with Śaṅkara\'s commentary (Advaita Ashrama, Calcutta) is the standard traditional study edition and the authoritative choice for serious students. Swami Nikhilananda\'s four-volume Ramakrishna Math edition gives extensive traditional commentary alongside the text. Swami Ranganathananda\'s The Message of the Upanishads (Bharatiya Vidya Bhavan) is the most accessible single-volume introduction from within the tradition. For individual Upaniṣads with Swami Chinmayananda\'s commentary, the Chinmaya Mission editions are excellent entry points for new students.'),
    ],
  },
  {
    _id: 'text-rigveda',
    _type: 'text',
    title: 'Rigveda',
    slug: slug('rigveda'),
    traditionLabel: 'Śruti — Ṛgveda Saṃhitā',
    overview: 'The Ṛgveda is among the oldest known records of human philosophical and spiritual inquiry, composed in Vedic Sanskrit across many generations of Ṛṣis (seers). Comprising 10,552 verses (ṛks) in ten books (maṇḍalas), it is a liturgical and poetic collection of hymns addressed to cosmic deities — Agni, Indra, Varuṇa, Sūrya, and many others — and is the foundation of the entire Vedic scriptural tradition. Its philosophical importance reaches its peak in the tenth maṇḍala, particularly the Nāsadīya Sūkta (RV 10.129): the celebrated "Hymn of Creation" that asks whether even the gods know how the world began.',
    sourceRefs: [ref('src-rigveda')],
    topics: [ref('topic-dharma')],
    content: [
      h2('Structure and composition'),
      p('The ten maṇḍalas of the Ṛgveda were not composed in order. The "family books" (maṇḍalas 2–7) are considered the oldest; they are attributed to specific Vedic clans and contain hymns associated with a particular family lineage. Maṇḍalas 1, 8, 9, and 10 are later compilations. The ninth maṇḍala (Soma Maṇḍala) is devoted entirely to hymns addressed to Soma — the sacred plant and its ritual preparation.'),
      p('Most Ṛgvedic hymns follow a recognisable structure: invocation of the deity, enumeration of the deity\'s powers and past deeds, request for specific blessings (protection, cattle, offspring, victory in battle), and concluding verses of praise. The language is archaic and dense; without commentary or linguistic training, even educated Sanskrit speakers find it opaque.'),
      h2('The Nāsadīya Sūkta: a philosophical landmark'),
      bq('Who really knows? Who will here proclaim it? Whence was it produced? Whence is this creation? The gods came afterwards, with the creation of this universe. Who then knows whence it has arisen? (RV 10.129.6)'),
      p('The Nāsadīya Sūkta (Hymn of Non-existence, RV 10.129) is among the most remarkable philosophical texts in world literature. In seven verses, the unknown Ṛṣi speculates about the state before creation: neither being nor non-being existed; neither space nor sky; neither death nor immortality. The hymn ends not with an answer but with an open question — perhaps the most honest cosmological statement ever composed.'),
      h2('Approaching the Rigveda today'),
      p('Direct study of the Ṛgveda requires patience and good guidance. The most important starting point is Sri Aurobindo\'s The Secret of the Veda (Sri Aurobindo Ashram, Pondicherry, 1956) — a foundational Indian philosophical reading that recovers the psychological and spiritual depth of the hymns from within the tradition\'s own symbolic vocabulary. The R.L. Kashyap multi-volume edition with Sayana\'s commentary (Saksi, Bangalore) provides the traditional Sanskrit commentary alongside the text. The Vedika Topics pages on Dharma and the Upanishads provide useful conceptual bridges from Ṛgvedic thought to later classical philosophy.'),
    ],
  },
  {
    _id: 'text-bhagavatam',
    _type: 'text',
    title: 'Srimad Bhagavatam',
    slug: slug('srimad-bhagavatam'),
    traditionLabel: 'Purāṇa — Mahāpurāṇa (Vaiṣṇava)',
    overview: 'The Śrīmad Bhāgavata Purāṇa stands among the eighteen Mahāpurāṇas and occupies a position of singular importance in Vaiṣṇava tradition. Its twelve skandhas (books) and approximately 18,000 verses weave together cosmology, genealogy, devotional theology, and the lives of the great bhaktas (devotees) of Viṣṇu. The daśama skandha — the tenth book — narrates the life, teachings, and divine play (līlā) of Śrī Kṛṣṇa, and is among the most beloved texts in the entire Sanskrit tradition.',
    sourceRefs: [ref('src-bhagavatam')],
    topics: [ref('topic-four-yogas'), ref('topic-moksha')],
    content: [
      h2('An ocean of devotion'),
      p('The Bhāgavatam begins with a famous invocation: satyaṃ paraṃ dhīmahi — "we meditate on the supreme truth." It was composed for those who have lost interest in the material world (nirviṇṇa) and are turning toward liberation — but its primary mode is not philosophical argument; it is narrative, devotion, and the gradual flooding of the heart with love for the divine.'),
      p('The frame story is itself a teaching on listening: the sage Śuka narrates the Bhāgavatam to king Parīkṣit, who has just seven days to live following a sage\'s curse. What would you want to hear if you had only a week? This question structures the entire text and gives it an urgency that keeps devotional listeners rapt.'),
      h2('The ten topics of a Purāṇa'),
      p('Classical Purāṇic literature is traditionally expected to address ten topics (daśalakṣaṇa): primary creation (sarga), secondary creation (visarga), maintenance of the world (sthāna), protection and sustenance (poṣaṇa), the impulses of desire (ūti), the epochs of the Manus (manvantara), stories of the divine descendants (vaṃśa), their histories (vaṃśānucarita), dissolution (saṃsthā), and the supreme spiritual refuge (āśraya). The Bhāgavatam addresses all ten, though it is the treatment of āśraya — Brahman as the ultimate refuge — that gives it its distinctively philosophical weight.'),
      h2('The tenth book and Kṛṣṇa'),
      p('The daśama skandha is the heart of the Bhāgavatam and the text most widely studied and performed across Vaiṣṇava traditions. It describes Kṛṣṇa\'s birth in Mathurā, his childhood in Vṛndāvana, his relationships with the cowherd community (gopas and gopīs), his slaying of numerous demons, and his eventual role in the events of the Mahābhārata. The rāsa-līlā — Kṛṣṇa\'s dance with the gopīs — is the subject of the most elevated mystical commentary in the tradition, where every element is read as a parable of the soul\'s relationship with the divine.'),
    ],
  },
  {
    _id: 'text-yoga-sutras',
    _type: 'text',
    title: 'Yoga Sutras of Patanjali',
    slug: slug('yoga-sutras-of-patanjali'),
    traditionLabel: 'Darśana — Yoga (āstika philosophical school)',
    overview: 'Patañjali\'s Yoga Sūtras are the foundational text of the Yoga darśana — one of the six classical systems of Indian philosophy. The 196 sūtras, extraordinarily compressed and precise, lay out a systematic psychology of consciousness and an eightfold path (aṣṭāṅga yoga) toward samādhi: the state of undistracted, unified awareness. They are as relevant to meditation practice today as when they were compiled, approximately 400 CE.',
    sourceRefs: [ref('src-yoga-sutras')],
    topics: [ref('topic-four-yogas'), ref('topic-moksha')],
    content: [
      h2('Four chapters, one question'),
      p('The Yoga Sūtras are divided into four pādas (chapters). The first, Samādhi Pāda, defines yoga and its goal: "Yogaś citta-vṛtti-nirodhaḥ" — yoga is the stilling of the fluctuations of the mind. The second, Sādhana Pāda, outlines kriyā yoga (the yoga of action) and the eight limbs. The third, Vibhūti Pāda, addresses the supernormal capacities (siddhis) that arise from advanced practice — and their dangers as objects of attachment. The fourth, Kaivalya Pāda, concludes with the nature of liberation: the puruṣa resting in its own nature, untangled from prakṛti.'),
      h2('Ashtanga: the eight limbs'),
      p('Patañjali\'s aṣṭāṅga yoga is not a sequence of stages to complete in order but an integrated discipline. The eight limbs are: yama (ethical restraints: ahiṃsā, satya, asteya, brahmacarya, aparigraha), niyama (personal observances: śauca, santoṣa, tapas, svādhyāya, Īśvara-praṇidhāna), āsana (stable, comfortable seated posture), prāṇāyāma (regulation of breath), pratyāhāra (withdrawal of the senses from their objects), dhāraṇā (concentration), dhyāna (unbroken meditative attention), and samādhi (absorption).'),
      p('The first two limbs — yama and niyama — are the ethical foundation without which the remaining six are unstable. A contemporary tendency to practice āsana and prāṇāyāma in isolation from the yamas is a significant departure from Patañjali\'s intent.'),
      h2('Sāṃkhya metaphysics in the background'),
      p('The Yoga Sūtras presuppose the cosmological framework of Sāṃkhya philosophy: Puruṣa (pure consciousness) and Prakṛti (primordial nature) are the two irreducible realities. Bondage arises from their confusion; liberation is the disentanglement. Patañjali adds a personal God — Īśvara — as a special puruṣa untouched by afflictions, karmas, or their results (YS 1.24), and commends surrender to Īśvara (Īśvara-praṇidhāna) as a particularly effective path. This distinguishes the Yoga darśana from classical Sāṃkhya, which does not posit a theistic element.'),
    ],
  },
]

// ─── Guides ──────────────────────────────────────────────────────────────────

const guides = [
  {
    _id: 'guide-starting-sanatan-dharma',
    _type: 'guide',
    title: 'Beginning Your Study of Sanatan Dharma — A Grounded First Pathway',
    slug: slug('beginning-study-sanatan-dharma'),
    excerpt: 'Starting with Sanatan Dharma can feel overwhelming when every doorway seems to open onto an infinite corridor of texts, traditions, and interpretations. This guide offers one honest, source-grounded pathway for new students — not the only way, but a well-worn one.',
    topics: [ref('topic-dharma'), ref('topic-karma'), ref('topic-four-yogas')],
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-upanishads')],
    body: [
      h2('Why it can feel overwhelming — and why it need not be'),
      p('Sanatan Dharma ("the eternal order") is not a single tradition with a founding figure, a fixed creed, and a uniform practice. It is a civilisational river fed by thousands of tributaries over four thousand years: multiple philosophical schools, regional traditions, festival cycles, textual lineages, and living teachers. This is its richness — and the reason first-time students often freeze.'),
      p('The solution is not to master the whole before you begin. It is to start at one sound entry point, follow it with patience and genuine curiosity, and trust that the tradition will gradually reveal its larger architecture through the practice of attention.'),
      h2('The Bhagavad Gita as entry text'),
      p('Of all the texts in the tradition, the Bhagavad Gita is the most widely recommended starting point — and for good reason. It is accessible in length (700 verses, eighteen chapters), dramatically vivid (it opens in a crisis), philosophically comprehensive (it addresses karma, knowledge, devotion, and the nature of the self within a single sustained dialogue), and saturated with commentary that helps contextualise difficult passages.'),
      p('Choose one translation and one commentary and stay with them until you have finished, before sampling others. Swami Gambhirananda\'s translation of the Gita with Śaṅkara\'s commentary (Advaita Ashrama) is a demanding but deeply rewarding first companion. Swami Chinmayananda\'s discourses (Chinmaya Publications) are more accessible for absolute beginners. Swami Swarupananda\'s translation (Advaita Ashrama) is another clear traditional edition for those starting out.'),
      h2('What to hold in mind as you read'),
      p('Reading sacred texts is different from reading informational prose. The tradition recommends three forms of engagement: śravaṇa (listening or reading — giving the text your full, patient attention), manana (reflection — sitting with what you have heard until its meaning deepens and your doubts are genuinely addressed), and nididhyāsana (contemplation — allowing the understanding to become lived rather than merely intellectual).'),
      p('This is not a speed-reading exercise. A single verse — say, BG 2.47 on action and non-attachment — studied slowly over a week will give you more than a chapter read in an evening for completeness.'),
      h2('Moving into the Upanishads'),
      p('Once you have read the Gita and sat with its core teachings, the Kaṭha Upaniṣad is the natural next step. Its narrative frame — a young student pressing Yama (Death) himself for the secret of the self — is one of the most compelling in world literature, and its teachings on the ātman are among the clearest in the Upaniṣadic corpus.'),
      p('From the Kaṭha, the Īśā and Kena Upaniṣads are short (eighteen and thirty-four verses respectively) and cover essential territory. Then the Chāndogya and Bṛhadāraṇyaka — the two largest principal Upaniṣads — reward slow, accompanied reading with a commentary.'),
      h2('Using Vedika as you read'),
      p('Each text in the Vedika library links to its source references and to related topic pages. As you encounter key concepts — dharma, karma, ātman, Brahman, māyā, guṇas — use the topic pages to track the concept across multiple texts and commentarial traditions. The glossary gives you etymologies and definitions to clarify terms as they appear. The source pages link to authoritative editions and translations so you can always follow the thread back to primary material.'),
      p('The goal is not consumption of content but the building of a reliable map through a vast and generous tradition — one that you can navigate for a lifetime.'),
    ],
  },
  {
    _id: 'guide-reading-bhagavad-gita',
    _type: 'guide',
    title: 'How to Read the Bhagavad Gita — A Responsible Approach for New Readers',
    slug: slug('how-to-read-bhagavad-gita'),
    excerpt: 'The Bhagavad Gita is one of the most translated texts in human history, which means it is also one of the most variously interpreted. Before settling on a translation or commentary, it helps to understand what kind of text you are holding, what questions it is answering, and how the tradition has read it.',
    topics: [ref('topic-dharma'), ref('topic-karma'), ref('topic-four-yogas')],
    sourceRefs: [ref('src-bhagavad-gita')],
    body: [
      h2('What kind of text is the Bhagavad Gita?'),
      p('The Gita is a section of the Mahābhārata — the great epic poem that, at roughly 100,000 couplets, is the longest poem in human history. It appears in the Bhīṣma Parva, at the moment the two armies stand facing each other on the field of Kurukṣetra. Arjuna, the great warrior, collapses in grief and confusion at the prospect of fighting his teachers and kinsmen. His charioteer Kṛṣṇa — revealed through the Gita to be the Supreme — teaches him the nature of the self, the meaning of duty, the paths of liberation, and the structure of ultimate reality.'),
      p('It is simultaneously a text of ethics, metaphysics, psychology, devotional theology, and practical instruction. No single reading exhausts it. Every tradition that has engaged seriously with it — Advaita, Viśiṣṭādvaita, Dvaita, Kashmir Śaivism, the independence movement, modern yoga — has found different emphases. This is not a weakness; it is evidence of depth.'),
      h2('The problem of too many translations'),
      p('There are more English translations of the Bhagavad Gita than of almost any other Sanskrit text. They range from scholarly and precise to paraphrastic and culturally adapted to openly devotional. Before choosing, ask yourself what you need: Do you want to engage with the Sanskrit? Do you want a traditional commentarial perspective? Are you looking for a first orientation before deeper study?'),
      p('For traditional study with commentary: Swami Gambhirananda\'s translation of the Gita with Śaṅkara\'s Bhāṣya (Advaita Ashrama, Calcutta) is the primary traditional English edition. Swami Chinmayananda\'s multi-volume discourse series (Chinmaya Mission) is more accessible for new students. Swami Sivananda\'s translation and commentary (The Divine Life Society, Rishikesh) is freely available and widely used. For a Vaiṣṇava reading: Swami Prabhupada\'s Bhagavad Gita As It Is (BBT) is devotionally rich, though it reflects a specific sampradāya reading. For close Sanskrit study, the Gita Supersite at IIT Kanpur (gitasupersite.iitk.ac.in) provides the Sanskrit text alongside multiple Indian commentaries in parallel — an invaluable free resource.'),
      h2('Reading commentary alongside the text'),
      p('The tradition insists that the Gita should not be read without commentary — the text is too compressed, too allusive, and too philosophically technical to be safely approached without a guide. This is not elitism; it is practical wisdom earned across centuries of careful study.'),
      p('A commentary does two things: it explains difficult verses and terms, and it reads the text within a particular philosophical framework. Reading Śaṅkara\'s commentary alongside Rāmānuja\'s (The Bhagavad Gita Ramanuja\'s Commentary, Adyar Library) on even a small number of verses — say, the opening of Chapter 13 on the "field and knower of the field" — reveals how the same words can bear different coherent meanings, and why the interpretive tradition is genuinely richer than any single school.'),
      h2('The eighteen chapters: a rough map'),
      p('Chapter 1 sets the scene. Chapter 2 is the philosophical core — often read as a self-contained summary of the Gita\'s key teachings on the immortal self, the nature of action, and the qualities of the person of steady wisdom (sthitaprajña). Chapters 3–6 develop karma yoga in depth. Chapters 7–12 address Kṛṣṇa\'s divine nature and the path of devotion. Chapters 13–18 work through the framework of Prakṛti, Puruṣa, the guṇas, and the four varṇas before concluding with Kṛṣṇa\'s final, direct invitation to Arjuna — and to the reader.'),
      h2('A practice for reading'),
      p('Read one chapter at a time — not one sitting, but one chapter per study session, over multiple days if needed. After reading, identify one verse that arrests you: something puzzling, something resonant, something that challenges what you thought you knew. Sit with that verse. Write about it. Return to it the next day before moving on. The Gita rewards this kind of slow, recursive attention far more than linear completion.'),
    ],
  },
  {
    _id: 'guide-understanding-upanishads',
    _type: 'guide',
    title: 'Understanding the Upanishads — Keys to Entering the Philosophical Heart of Vedanta',
    slug: slug('understanding-the-upanishads'),
    excerpt: 'The Upanishads are not a single book but a category of texts — dialogues, meditations, and declarations composed over several centuries. They resist easy summary because they were never designed as systematic philosophy but as transmissions between teacher and student. This guide introduces the principal Upanishads and suggests an honest approach for reading them.',
    topics: [ref('topic-atman-brahman'), ref('topic-moksha')],
    sourceRefs: [ref('src-upanishads')],
    body: [
      h2('What you are holding when you hold an Upanishad'),
      p('The word Upaniṣad is traditionally parsed as upa (near) + ni (down) + sad (to sit) — the transmission of liberating knowledge from teacher to student sitting in close proximity. This etymology is a teaching in itself: the Upaniṣads are not meant to be absorbed in isolation as information. They are records of dialogues — of knowledge given from one awakened mind to another in a relationship of trust, preparation, and readiness.'),
      p('Reading an Upaniṣad is therefore an invitation to enter a conversation. You are the student in these exchanges — Naciketā at Yama\'s gate, Śvetaketu receiving the teaching "tat tvam asi" from his father Uddālaka, Maitreyī questioning Yājñavalkya before he departs for the forest. Your quality of attention when reading determines how much of the conversation you actually hear.'),
      h2('The twelve principal Upanishads: a brief orientation'),
      p('The Bṛhadāraṇyaka and Chāndogya are the two largest and oldest — each is the size of a short book, and each contains multiple independent dialogues and teachings gathered under one title. The Taittirīya is the most accessible systematic statement of the doctrine of the five sheaths (pañcakośa). The Kaṭha narrates the encounter of Naciketā with Yama with unusual dramatic power. The Kena asks "By whom is the mind impelled?" — a question that points directly at the witness behind all cognition. The Īśā (eighteen verses) offers the most compressed statement of the Upaniṣadic vision of non-dual awareness as the ground of ethical action. The Muṇḍaka distinguishes the two kinds of knowledge: lower (aparā) and higher (parā). The Māṇḍūkya — twelve verses — maps the four states of consciousness with extraordinary precision.'),
      h2('The four mahāvākyas and why they matter'),
      p('Four statements, one from each of the four Vedas (specifically from the principal Upaniṣad of each), are revered as mahāvākyas — "great sayings" expressing the identity of ātman and Brahman directly. These are: prajñānaṃ brahma (Aitareya Upaniṣad / Ṛgveda — Consciousness is Brahman), ahaṃ brahmāsmi (Bṛhadāraṇyaka / Yajurveda — I am Brahman), tat tvam asi (Chāndogya / Sāmaveda — That thou art), and ayam ātmā brahma (Māṇḍūkya / Atharvaveda — This ātman is Brahman).'),
      p('These are not poetic metaphors. The tradition intends them as direct declarations of identity — statements about the deepest nature of reality that, when genuinely understood (not merely intellectually assented to), constitute liberation itself. Śaṅkara takes them as the central scriptural evidence for the non-dual nature of Brahman.'),
      h2('Translation recommendations for study'),
      p('Swami Gambhirananda\'s eight-volume edition with Śaṅkara\'s commentary (Advaita Ashrama, Calcutta) is the standard for traditional study. For individual Upaniṣads, the Chinmaya Mission editions with Swami Chinmayananda\'s commentary are excellent entry points. Swami Ranganathananda\'s The Message of the Upanishads (Bharatiya Vidya Bhavan) covers all principal Upaniṣads with depth and accessibility. Swami Krishnananda\'s The Philosophy of the Upanishads (The Divine Life Society, Rishikesh) provides rigorous systematic treatment across the principal texts.'),
      p('The Muṇḍaka Upaniṣad (2.2.5) and Śaṅkara\'s commentary tradition prescribe three stages for engaging with the Upaniṣadic teaching: śravaṇa — patient listening or reading, receiving the teaching without immediate reaction; manana — sustained reflection, working through objections and apparent contradictions until the teaching becomes intellectually clear; and nididhyāsana — deep contemplation, allowing the understanding to permeate beyond the intellect into actual recognition.'),
      p('These three stages are not a one-time sequence. A serious student cycles through them repeatedly with the same text, each cycle revealing greater depth. The Kena Upaniṣad acknowledges this paradox explicitly: "He by whom it is not known, knows it. He by whom it is known, does not know it" (Kena 2.3) — pointing to the limits of purely conceptual understanding of that which is itself the knowing faculty.'),
    ],
  },
  {
    _id: 'guide-vedanta-traditions',
    _type: 'guide',
    title: 'Navigating Vedanta\'s Three Schools — Advaita, Vishishtadvaita, and Dvaita',
    slug: slug('navigating-vedanta-three-schools'),
    excerpt: 'Three of the most significant schools of Vedānta — Advaita (Śaṅkarācārya), Viśiṣṭādvaita (Rāmānuja), and Dvaita (Madhvācārya) — offer deeply different readings of the same scriptural sources. Understanding the stakes of each disagreement enriches your reading of the texts themselves and sharpens your own inquiry.',
    topics: [ref('topic-atman-brahman'), ref('topic-moksha'), ref('topic-four-yogas')],
    sourceRefs: [ref('src-upanishads'), ref('src-bhagavad-gita'), ref('src-vivekachudamani')],
    body: [
      h2('Why the same texts produce different philosophies'),
      p('All three schools — Advaita, Viśiṣṭādvaita, and Dvaita — accept the same three textual authorities (prasthānatrayī): the Upaniṣads, the Bhagavad Gita, and the Brahma Sūtras of Bādarāyaṇa. All three hold that Brahman is the ultimate reality and that the Upaniṣadic mahāvākyas are the highest scriptural testimony. Yet they arrive at strikingly different conclusions. How?'),
      p('The answer lies partly in exegetical method — how you handle apparently contradictory verses (and the Upaniṣads contain many) — and partly in what question you take as primary. If you ask "What is the nature of Brahman as the absolute?" you tend toward Advaita. If you ask "What is the nature of Brahman as a personal God in relation to creation and souls?" you tend toward Viśiṣṭādvaita or Dvaita.'),
      h2('Advaita Vedanta: one reality without a second'),
      p('Adi Śaṅkarācārya (c. 788–820 CE) argued that Brahman is pure, undifferentiated consciousness — nirguṇa (without qualities), nirviśeṣa (without characteristics). The individual self (jīva), the world (jagat), and God (Īśvara) are ultimately one: the multiplicity we experience is māyā — the superimposition of the many on the One. Liberation (mokṣa) is the recognition of this non-duality, not a journey toward it.'),
      p('Śaṅkara\'s method is via negativa: Brahman is neti neti — "not this, not this" — and can only be pointed at by removing false attributions. His commentaries on the Upaniṣads, the Gita, and the Brahma Sūtras form the most systematic philosophical edifice in the Vedāntic tradition.'),
      h2('Vishishtadvaita: qualified non-dualism'),
      p('Rāmānuja (c. 1017–1137 CE) vigorously challenged Śaṅkara on two grounds: the concept of māyā as cosmic illusion, and the idea that Brahman has no qualities. For Rāmānuja, the individual souls (cit) and the material world (acit) are real — but they exist as the body of Brahman, in an inseparable organic relation to the supreme personal God, Viṣṇu-Nārāyaṇa. This is "qualified non-dualism": one reality (Brahman), but differentiated within itself.'),
      p('Liberation in Viśiṣṭādvaita is not the dissolution of the individual self but its entry into a state of perfect devotional intimacy with God — the soul retains identity but is freed from the limiting effects of karma and the material body.'),
      h2('Dvaita: irreducible difference'),
      p('Madhvācārya (c. 1238–1317 CE) went further than Rāmānuja. For Madhva, there are five fundamental and eternal differences (pañca-bheda): between God and individual souls, between God and matter, between individual souls, between souls and matter, and between different forms of matter. These distinctions are real, irreducible, and eternal — even in the state of liberation.'),
      p('For Madhva, Viṣṇu is the supreme independent reality; everything else is dependent on him. Liberation is the soul\'s eternal enjoyment of bliss in Viṣṇu\'s presence, maintaining its distinct identity permanently.'),
      h2('What the differences reveal about the texts'),
      p('One of the most valuable exercises for any serious student of the Upaniṣads is to read the same verse through each school\'s commentary. Take Chāndogya 6.8.7: "tat tvam asi" — That thou art. Śaṅkara reads it as a direct statement of numerical identity (you are Brahman, without remainder). Rāmānuja reads it as saying that the self is Brahman\'s mode — you are an expression of the divine body. Madhva reads it as a statement of dependence — thou art that (thy existence derives entirely from Brahman). Same three words; three coherent, rigorous, incompatible readings.'),
      p('This is not a problem to be solved by picking the right one. It is a feature of the tradition\'s intellectual depth. The disagreements force you to examine your own assumptions about the nature of identity, difference, and consciousness — which is precisely what the texts are designed to do.'),
    ],
  },
]

// ─── Essays ──────────────────────────────────────────────────────────────────

const essays = [
  {
    _id: 'essay-sanatan-dharma-meaning',
    _type: 'essay',
    title: 'What Does "Sanatan Dharma" Actually Mean?',
    slug: slug('what-does-sanatan-dharma-mean'),
    dek: 'The term "Hinduism" is less than two centuries old. The tradition it names is far older — and its own self-description, "Sanatan Dharma," carries meanings that reshape how you read everything that follows.',
    topics: [ref('topic-dharma')],
    sourceRefs: [ref('src-rigveda'), ref('src-manusmriti')],
    body: [
      h2('A name invented from outside'),
      p('The word "Hinduism" is not found in any classical Sanskrit text. It derives from the Persian "Hind," which in turn comes from "Sindhu" — the Sanskrit name for the Indus river. Persian and later Arabic geographers used "Hindu" to describe the peoples living beyond the Sindhu; British colonial administrators in the 19th century consolidated the diverse religious practices of the subcontinent under the single administrative label "Hinduism." This is not a conspiracy theory; it is simply historical fact, acknowledged by scholars across the tradition.'),
      p('The tradition\'s own name for itself is Sanatan Dharma — the eternal order, the timeless law. These two words carry a great deal. Sanatan (सनातन) means "that which always was, that which has no beginning or end." Dharma (धर्म) we have explored elsewhere — it means cosmic order, right conduct, sustaining law. Together: the order that was before any particular revelation, before any single founding teacher, before any doctrinal formulation.'),
      h2('Why "eternal" is a philosophical claim, not just a rhetorical one'),
      p('The claim that dharma is sanatan — eternal — is not national pride or religious hyperbole. It is a philosophical position: that the principles governing right conduct, the nature of the self, the structure of karma and its fruits, the conditions for liberation — these are not human inventions but discovered truths, as impersonal and universal as the laws of mathematics or physics.'),
      p('This is why the tradition can accommodate significant internal diversity without fracturing: if dharma is the nature of things rather than a set of rules issued by a specific authority, then multiple paths of inquiry, multiple formulations, multiple practices can all be in contact with the same reality without being reducible to a single creed.'),
      h2('What it means to study a tradition from the inside'),
      p('Using the term "Sanatan Dharma" rather than "Hinduism" is not merely a semantic preference. It signals a shift in perspective: from the view of an outside observer classifying a social phenomenon to the view of one engaging with a body of inquiry on its own terms. Whether you are a practitioner, a scholar, or a curious newcomer, the question is: what does the tradition itself say about what it is, and how can I encounter it clearly?'),
      p('Vedika uses the term Sanatan Dharma throughout because the tradition\'s own vocabulary is the most accurate map into its own terrain. Where "Hinduism" is used in scholarship and is unavoidable in academic contexts, we note it alongside, but the primary orientation is toward the tradition\'s self-understanding.'),
    ],
  },
  {
    _id: 'essay-many-gods',
    _type: 'essay',
    title: 'The Question of Many Gods — How the Veda Understands Its Own Deities',
    slug: slug('question-of-many-gods'),
    dek: 'Visitors to Sanatan Dharma often arrive carrying a binary framing borrowed from Abrahamic theology: polytheism (many gods) versus monotheism (one God). The tradition\'s own answer — articulated in its earliest texts — is considerably more precise than either category.',
    topics: [ref('topic-atman-brahman')],
    sourceRefs: [ref('src-rigveda'), ref('src-upanishads'), ref('src-bhagavad-gita')],
    body: [
      h2('The Rigveda\'s own statement'),
      p('The Ṛgveda addresses more than thirty distinct deities — Agni (fire), Indra (thunder, heroism), Varuṇa (cosmic law and the sky), Sūrya (the sun), Uṣas (dawn), Sarasvatī (knowledge and the sacred river), and many others. On the surface, this looks like a pantheon of distinct divine persons with different portfolios and personalities.'),
      p('But the Veda does not leave us to guess at how it understands its own deities. RV 1.164.46 states directly: "Ekam sad viprā bahudhā vadanti" — That which is, is one; the wise call it by many names. The deities are multiple forms and names of a single underlying reality, approached differently by different seers for different purposes. This is not an interpretation imposed from outside; it is the Veda\'s own declared self-understanding, embedded in its own hymns.'),
      p('Western scholarship in the 19th century coined the term "henotheism" to describe this approach — but the tradition has no need of that external category. The principle was already articulated precisely in the hymns themselves, centuries before Western comparative religion existed as a discipline.'),
      h2('The Upanishadic resolution'),
      p('The Upaniṣads, composed later, move the inquiry to its metaphysical foundation: what is the ultimate nature of reality? Their answer — Brahman as the sole, undifferentiated ground of all existence — does not contradict the Vedic understanding but deepens it. The personal devas of the Vedic tradition are not rejected; they are understood as aspects or expressions of Brahman, each making a specific quality of the divine accessible for worship and realisation. The question "how many gods are there?" becomes less interesting than "what is the nature of the one reality in which all apparent multiplicity arises?"'),
      h2('The Bhagavad Gita\'s integration'),
      p('Kṛṣṇa tells Arjuna in BG 9.23: those who worship other devatās with faith and devotion — they too are worshipping me, though through a different form. Combined with Chapter 10\'s vibhūti yoga — where Kṛṣṇa enumerates how the divine pervades all excellence in the world — the text presents a vision in which the tradition\'s many forms of worship are not competing routes but different concentrations of one underlying reality.'),
      h2('What this means for how you encounter the tradition'),
      p('When you encounter the vast visual diversity of Sanatan Dharma — the forms of Śiva, Viṣṇu, Devī, Gaṇeśa, Kārttikeya, Sūrya, and countless regional and local devatās — hold this background: each form is a doorway, a specific concentration of a quality of the divine, adapted to particular relationships, temperaments, and contexts of approach. The tradition\'s depth lies in offering multiple doorways without collapsing them into identical sameness — while also maintaining that no doorway leads anywhere other than the one reality. How you navigate between the specific and the universal, the personal and the impersonal, is itself a lifelong inquiry.'),
    ],
  },
]

// ─── Comparisons ─────────────────────────────────────────────────────────────

const comparisons = [
  {
    _id: 'comp-advaita-vishishtadvaita',
    _type: 'comparison',
    title: 'Advaita and Vishishtadvaita — Where They Agree and Where They Part',
    slug: slug('advaita-vishishtadvaita'),
    summary: 'Both Advaita Vedānta (Śaṅkarācārya) and Viśiṣṭādvaita (Rāmānuja) accept the authority of the Upaniṣads, the Gita, and the Brahma Sūtras. Both hold Brahman as ultimate reality. But their understanding of the relationship between individual souls, the world, and Brahman diverges in ways that affect practice, devotion, and the very goal of spiritual life.',
    topicsCompared: [ref('topic-atman-brahman'), ref('topic-moksha')],
    sourceRefs: [ref('src-upanishads'), ref('src-bhagavad-gita'), ref('src-vivekachudamani')],
    analysis: [
      h2('Shared ground'),
      p('Both schools are rooted in what the tradition calls prasthānatrayī — the triple canonical basis: the Upaniṣads, the Bhagavad Gita, and the Brahma Sūtras. Both accept that Brahman is the ultimate reality; both hold that the purpose of scriptural study and spiritual practice is liberation from saṃsāra; both use the same technical vocabulary — ātman, Brahman, māyā, karma, mokṣa, jñāna, bhakti. The fact that they arrive at such different conclusions from the same texts tells us something important about the depth of ambiguity in those texts — and about how much depends on what you take to be the central question.'),
      h2('The nature of Brahman: nirguṇa or saguṇa?'),
      p('For Śaṅkara, Brahman\'s ultimate nature is nirguṇa — without qualities, beyond all predication. Any description of Brahman as personal, as omniscient, as creator, belongs to the "lower" Brahman (Īśvara), which is Brahman as experienced through the lens of māyā — ultimately a superimposition. The "higher" Brahman (paramārtha) is pure, undifferentiated consciousness, beyond all characterisation.'),
      p('For Rāmānuja, this is a philosophical error. The Upaniṣads themselves describe Brahman with qualities — sat, cit, ānanda; omniscient, omnipotent, the inner controller of all — and these descriptions are not from a "lower" vantage point but from the true nature of Brahman. To posit a higher nirguṇa Brahman behind the described Brahman is to introduce a distinction the texts do not support.'),
      h2('The status of the world: real or illusory?'),
      p('In Advaita, the world\'s apparent multiplicity — all the distinctions between objects, selves, and God — is the product of māyā: not ultimately real, not absolutely unreal, but "indescribable" (anirvacanīya). From the absolute standpoint, only Brahman exists; the world has pragmatic reality (vyavahārika) but not ultimate reality (pāramārthika).'),
      p('Rāmānuja finds this deeply unsatisfying. If the world were ultimately unreal, the Upaniṣadic statements about the causal relationship between Brahman and the world would be meaningless. For Rāmānuja, the world and individual souls are real — but they exist as the body of Brahman (śarīra), in organic, inseparable relation to the divine. This is "qualified non-dualism": one substance, but internally differentiated.'),
      h2('Liberation: identical to Brahman, or intimate with God?'),
      p('The practical consequence of these positions becomes most vivid at the question of what liberation actually means. For Śaṅkara, mokṣa is the recognition of one\'s identity with Brahman — not a journey somewhere, not an achievement, but the removal of the ignorance that made you think you were separate. The jīvanmukta remains in the world but is no longer identified with it.'),
      p('For Rāmānuja, mokṣa is the liberated soul\'s entry into a state of perfect, unobstructed communion with Viṣṇu-Nārāyaṇa. The soul retains its individuality — indeed, its love is richer for that individuality — but is freed from the limitations of karma and the material body. This vision is deeply personal: it preserves the possibility of bhakti, of love, in the state of liberation itself.'),
    ],
  },
  {
    _id: 'comp-jnana-bhakti',
    _type: 'comparison',
    title: 'Jnana Yoga and Bhakti Yoga — Different Paths or the Same Journey?',
    slug: slug('jnana-yoga-bhakti-yoga'),
    summary: 'The Bhagavad Gita presents both Jñāna Yoga (knowledge) and Bhakti Yoga (devotion) as valid paths to liberation. From Śaṅkara to Rāmānuja and the great bhakti poets, their relationship has been debated, synthesised, and lived out in remarkably different ways.',
    topicsCompared: [ref('topic-four-yogas'), ref('topic-moksha')],
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-narada-bhakti'), ref('src-vivekachudamani')],
    analysis: [
      h2('What each path prioritises'),
      p('Jñāna yoga, the path of discernment and knowledge, begins with the question "What am I?" It proceeds through rigorous inquiry into the nature of the self, the world, and their relationship. Its tools are śravana (hearing the teaching), manana (reflecting until doubts dissolve), and nididhyāsana (deep contemplation). Its fruit is viveka — the capacity to clearly distinguish the permanent from the transient — and ultimately the direct recognition of ātman as Brahman. The text most closely associated with jñāna yoga in Advaita is the Vivekacūḍāmaṇi of Śaṅkara.'),
      p('Bhakti yoga, the path of devotion and love, begins with the heart rather than the intellect. It approaches the divine through an intense personal relationship — as the beloved, the child, the friend, the servant. Its cultivation involves śravaṇa (hearing stories of the divine), kīrtana (singing divine names), smaraṇa (remembering the divine constantly), arcana (worship), vandana (prostration), dāsya (servitude), sakhya (friendship), and ātma-nivedana (complete self-surrender). The Nārada Bhakti Sūtras define bhakti as paramā prema — supreme love — and describe the bhakta as one who is "saturated with that and tasting only that."'),
      h2('The Bhagavad Gita\'s position'),
      p('The Gita is notably catholic on this question. It presents karma yoga (Chapters 3–6), jñāna yoga (Chapters 13–15), bhakti yoga (Chapters 7–12), and their synthesis across the text. In BG 12.12, Kṛṣṇa offers a hierarchy: better than practice is knowledge; better than knowledge is meditation; better than meditation is renunciation of the fruits of action — peace immediately follows. But the very next verse praises the bhakta above all: "Dear to me is the devotee who is the same in honour and dishonour, in heat and cold, in pleasure and pain..." (BG 12.17–19).'),
      p('The scholarly consensus is that the Gita does not declare one path superior in a final sense but recognises that different temperaments require different primary approaches — and that the mature practitioner integrates all four.'),
      h2('Historical tensions'),
      p('The history of the tradition shows real tension between the jñāna and bhakti orientations. Śaṅkara emphasised jñāna as the direct path: bhakti and karma are preparatory practices that purify the mind for the direct knowledge of Brahman. Without that knowledge, liberation cannot occur. Rāmānuja countered that bhakti — specifically parā-bhakti, supreme devotional contemplation — is itself the means and the end: it is both the path to God\'s grace and the mode of the liberated soul\'s eternal life.'),
      p('The great bhakti poets — Kabīr, Mīrābāī, Sūrdās, Tukārām, Rāmprasād Sen — often wrote in explicit tension with the scholastic jñāna tradition: God is not reached through argument, they insisted, but through love that breaks open the heart. Yet many of them were deeply learned; their devotion was informed by knowledge, not opposed to it.'),
      h2('A practical synthesis'),
      p('Swami Vivekananda\'s famous formulation is still the most practically useful: "Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal. Do this either by work (karma), or worship (bhakti), or philosophy (jñāna), or psychic control (rāja) — by one, or more, or all of these — and be free." The paths are not competitors. They are expressions of the same underlying movement toward wholeness, activated differently in different people and at different stages of life.'),
    ],
  },
]

// ─── Additional Source References ────────────────────────────────────────────

const additionalSourceRefs = [
  {
    _id: 'src-arsha-vidya',
    _type: 'sourceRef',
    label: 'Arsha Vidya Gurukulam — Swami Dayananda Saraswati',
    sourceType: 'commentary',
    author: 'Swami Dayananda Saraswati (1930–2013)',
    workTitle: 'Bhagavad Gita Home Study Course (9 vols.); Upaniṣad commentaries; Tattva Bodha; Introduction to Vedanta series',
    citationText: 'Swami Dayananda Saraswati of Arsha Vidya Gurukulam is among the most significant traditional Vedanta teachers of the twentieth century. Trained in the traditional guru-śiṣya paramparā, he systematised a rigorous pedagogical method for teaching Vedanta that honours both the integrity of the traditional Sanskrit texts and the comprehension needs of modern students. His nine-volume Bhagavad Gita Home Study Course (Arsha Vidya Research and Publication Trust, Chennai) is the most methodical modern traditional exposition of the Gita available in English. His Introduction to Vedanta series is the recommended entry point for new students of Advaita. Arsha Vidya Gurukulam operates from Anaikatti, Coimbatore (Tamil Nadu) and Saylorsburg, Pennsylvania.',
    url: 'https://www.arshavidya.in',
    slug: slug('arsha-vidya-swami-dayananda'),
  },
  {
    _id: 'src-carvaka',
    _type: 'sourceRef',
    label: 'Cārvāka / Lokāyata — Classical Indian Materialism',
    sourceType: 'primary_text',
    author: 'Attributed to Bṛhaspati (legendary); reconstructed through Mādhavācārya\'s Sarvadarśanasaṃgraha (14th c. CE) and Jayarāśi Bhaṭṭa\'s Tattvopaplavasiṃha (8th c. CE)',
    workTitle: 'Barhaspatya Sūtras (fragments only); Tattvopaplavasiṃha; Cārvāka chapter of Sarvadarśanasaṃgraha',
    citationText: 'The primary texts of the Cārvāka school are largely lost; the tradition is reconstructed through quotations and refutations in Vedāntic, Buddhist, and Jain philosophical literature. The most accessible survey is the opening chapter of Mādhavācārya\'s Sarvadarśanasaṃgraha (a 14th-century compendium of all Indian philosophical schools), which states Cārvāka positions before refuting them. Jayarāśi Bhaṭṭa\'s Tattvopaplavasiṃha (8th century CE) is the only surviving text that may be affiliated with the school and offers a radical epistemological critique of all pramāṇas. The Gita Press Gorakhpur edition of the Sarvadarśanasaṃgraha (Sanskrit/Hindi) is the standard Indian study edition.',
    url: 'https://www.sacred-texts.com/hin/sds/index.htm',
    slug: slug('carvaka-lokayata'),
  },
  {
    _id: 'src-dhammapada',
    _type: 'sourceRef',
    label: 'Dhammapada (Pali Canon, Theravāda)',
    sourceType: 'primary_text',
    author: 'From the teachings of Gautama Buddha; compiled in the Khuddaka Nikāya of the Pali Canon',
    workTitle: 'Dhammapada (423 verses in 26 chapters)',
    citationText: 'The Dhammapada is one of the best-known and most widely studied texts of the Theravāda Buddhist tradition, presenting the core ethical and spiritual teachings of the Buddha in memorable verse form. It forms part of the Khuddaka Nikāya within the Sutta Piṭaka of the Pali Canon. Bhikkhu Bodhi\'s translation with commentary (Buddhist Publication Society, Kandy, Sri Lanka) is the standard study edition. The Narada Maha Thera translation (Buddhist Missionary Society, Malaysia) is also widely used in traditional study. The text is freely available through Access to Insight (accesstoinsight.org), a respected Theravāda resource.',
    url: 'https://www.accesstoinsight.org/tipitaka/kn/dhp/',
    slug: slug('dhammapada-pali-canon'),
  },
  {
    _id: 'src-tattvartha-sutra',
    _type: 'sourceRef',
    label: 'Tattvārtha Sūtra of Umāsvāti',
    sourceType: 'primary_text',
    author: 'Umāsvāti / Umāsvāmī (c. 2nd–5th century CE)',
    workTitle: 'Tattvārtha Sūtra (514 sūtras across 10 adhyāyas)',
    citationText: 'The Tattvārtha Sūtra is the foundational systematic philosophical text of the Jain tradition, uniquely accepted by both Digambara and Śvetāmbara sects. Its ten chapters cover the nature of the soul (jīva), the non-soul (ajīva), karma, the path to liberation (mokṣamārga), and the liberated state. It presents Jain metaphysics, cosmology, and ethics with extraordinary precision. Nathmal Tatia\'s translation (That Which Is, HarperCollins India / Sacred Literature Series) is recommended. The Jain Vishva Bharati, Ladnun (Rajasthan) publishes authoritative traditional editions with Sanskrit commentary.',
    url: 'https://www.jainlibrary.org',
    slug: slug('tattvartha-sutra-umasvati'),
  },
  {
    _id: 'src-guru-granth-sahib',
    _type: 'sourceRef',
    label: 'Śrī Guru Granth Sāhib Jī',
    sourceType: 'primary_text',
    author: 'Compiled by Gurū Arjan Dev Jī (5th Gurū, 1563–1606 CE); finalised and given Gurūhood by Gurū Gobind Singh Jī (10th Gurū, 1666–1708 CE)',
    workTitle: 'Śrī Guru Granth Sāhib Jī (1,430 angs in Gurmukhī script)',
    citationText: 'The Śrī Guru Granth Sāhib Jī is the eternal living Gurū of the Sikh tradition — declared so by Gurū Gobind Singh Jī at Nanded in 1708. It contains 1,430 angs (pages) of sacred poetry, hymns, and teachings in Gurmukhī script, composed by six of the ten Sikh Gurūs alongside thirty-six Bhagats (saints) from various traditions including Bhakti saints Kabīr Jī, Raidās Jī, and Nāmdev Jī. The Shiromani Gurdwara Parbandhak Committee (SGPC), Amritsar, is the authoritative publisher of the standard text. The SikhiWiki and STTM (SearchGurbani) provide online access with transliteration and translation for study.',
    url: 'https://www.srigranth.org',
    slug: slug('sri-guru-granth-sahib'),
  },
]

// ─── Additional Glossary Entries ─────────────────────────────────────────────

const additionalGlossary = [
  {
    _id: 'gloss-nirvana',
    _type: 'glossaryEntry',
    term: 'Nirvāṇa',
    slug: slug('nirvana'),
    transliteration: 'Nirvāṇa (निर्वाण)',
    definition: 'From the Sanskrit nir + vā — "blowing out" or "extinguishing." In Buddhist philosophy, nirvāṇa is the cessation of the three fires of greed (lobha), hatred (dveṣa), and delusion (moha) that perpetuate suffering and rebirth. It is the goal of the Buddhist path — the end of dukkha and the cycle of saṃsāra. Unlike the Vedāntic concept of mokṣa, nirvāṇa does not necessarily imply the union of an individual soul with a universal ground; the Buddha deliberately avoided metaphysical characterisation of the nirvāṇic state beyond the cessation of suffering. The Mahāparinirvāṇa is the final passing of a fully enlightened being who does not return to rebirth.',
  },
  {
    _id: 'gloss-anatman',
    _type: 'glossaryEntry',
    term: 'Anātman',
    slug: slug('anatman'),
    transliteration: 'Anātman / Anattā (अनात्मन् / Pali: anattā)',
    definition: 'The Buddhist doctrine of non-self: the teaching that what we conventionally call "the self" is not a fixed, permanent, independently existing entity but a flowing, interdependent process — a stream of arising and passing physical and mental events (the five aggregates: rūpa, vedanā, saññā, saṃskāra, vijñāna). This stands in direct philosophical tension with the Vedāntic ātman doctrine. The Buddha did not deny that there is experience, consciousness, or continuity — he denied that these require or point toward an eternal, unchanging self. The debate between the ātman and anātman positions is one of the richest philosophical exchanges in the Indian tradition.',
  },
  {
    _id: 'gloss-anekantavada',
    _type: 'glossaryEntry',
    term: 'Anekāntavāda',
    slug: slug('anekantavada'),
    transliteration: 'Anekāntavāda (अनेकान्तवाद)',
    definition: 'The Jain doctrine of "many-sidedness" or "non-one-sidedness." It holds that no single perspective (dṛṣṭi) can capture the whole of reality; truth has many facets, and every statement about reality is conditionally true from a particular standpoint. Its practical expression is syādvāda (conditional predication): every proposition is prefaced with syāt ("in some respect" or "perhaps"), acknowledging its relative validity. This epistemological humility made Jain logic unusually rich and led to detailed engagement with all rival philosophical schools. Anekāntavāda is not relativism — it does not say all views are equally valid, but that reality is more complex than any single view can encompass.',
  },
  {
    _id: 'gloss-shramana',
    _type: 'glossaryEntry',
    term: 'Śramaṇa',
    slug: slug('shramana'),
    transliteration: 'Śramaṇa (श्रमण)',
    definition: 'From the root śram — "to toil, to strive." A Śramaṇa is a renunciant practitioner who follows an inner path of effort and austerity, in contrast to the Brāhmaṇa who follows the path of outer ritual and Vedic authority. The Śramaṇa traditions — principally Buddhism and Jainism — share with the Vedic tradition the same foundational concerns (karma, rebirth, liberation) but arrived at them through independent inquiry and rejected the authority of the Vedas. The dialogue between Vedic and Śramaṇa traditions from the 6th century BCE onward produced some of the most rigorous philosophical literature in human history, each tradition sharpening its positions in response to the other.',
  },
  {
    _id: 'gloss-ik-onkar',
    _type: 'glossaryEntry',
    term: 'Ik Oaṅkār',
    slug: slug('ik-onkar'),
    transliteration: 'Ik Oaṅkār (ੴ)',
    definition: 'The opening symbol of the Gurū Granth Sāhib Jī and the foundational declaration of Sikh theology: "One Universal Creator God." Composed of the numeral Ik (one), Oa (the Sanskrit Oṃ, cosmic sound), and ṅkār (the form of that sound — "Oneness"). It declares the absolute unity, formlessness, and omnipresence of Waheguru (the Wondrous Enlightener). The Ik Oaṅkār principle bridges the nirguṇa (formless, attributeless) and saguṇa (with form, relational) dimensions of the divine — God is beyond all qualification yet intimately accessible through Naam (the divine Name) and the Gurū\'s grace.',
  },
]

// ─── Additional Topics ────────────────────────────────────────────────────────

const additionalTopics = [
  {
    _id: 'topic-swami-dayananda-vedanta',
    _type: 'topic',
    title: 'Swami Dayananda Saraswati — Traditional Vedanta for the Modern Student',
    slug: slug('swami-dayananda-vedanta'),
    summary: 'Swami Dayananda Saraswati of Arsha Vidya Gurukulam (1930–2013) made the traditional Vedanta teaching methodology accessible to modern students without diluting its rigour or depth. His structured approach to self-knowledge — rooting every inquiry in the Upaniṣads, the Bhagavad Gita, and Śaṅkara\'s commentaries — represents one of the most complete transmissions of the tradition in contemporary times.',
    difficulty: 'intermediate',
    sourceRefs: [ref('src-arsha-vidya'), ref('src-bhagavad-gita'), ref('src-upanishads')],
    body: [
      h2('Who was Swami Dayananda Saraswati?'),
      p('Born in 1930 in Manjakkudi, Tamil Nadu, Swami Dayananda Saraswati received both modern education and traditional Sanskrit learning from an early age. He became a formal sannyāsi and studied Vedanta under the guidance of Swami Chinmayananda before establishing his own teaching lineage rooted in the direct, traditional method of textual study.'),
      p('His foundational insight was that Vedanta is not a collection of philosophical positions to be debated but a means of knowledge (pramāṇa) — specifically, a verbal means of self-knowledge. Just as perception (pratyakṣa) reveals objects the eyes can see, the Upaniṣadic statements (śabda) reveal the nature of the self that cannot be objectified. His entire teaching methodology flows from this clarity.'),
      h2('The adhyāropa-apavāda method'),
      p('Swami Dayananda followed the traditional Vedāntic method of adhyāropa-apavāda — "deliberate superimposition and subsequent negation." The teacher first accepts the student\'s ordinary view of the self (as a limited, bound individual) and works within that frame to build understanding. Then, gradually and precisely, each limitation is shown to be a superimposition (adhyāropa) that the direct Upaniṣadic teaching (mahāvākya) can negate (apavāda). The result is not a new belief but the removal of an old misidentification.'),
      p('This method makes his Bhagavad Gita Home Study Course (nine volumes) and his Upaniṣad commentaries unusual in their pedagogical clarity — each verse is unpacked not for its philosophical interest alone but for the specific transformation in understanding it is meant to produce in the student.'),
      h2('His contribution to contemporary Sanatan Dharma'),
      p('Beyond classroom teaching, Swami Dayananda was a significant public voice for Sanatan Dharma in contemporary interfaith dialogue. He insisted consistently that the tradition be represented from within its own framework — using its own vocabulary, grounded in its own texts — rather than through apologetic translation into Western philosophical categories. He was a founding trustee of the Hindu Dharma Acharya Sabha and worked to establish a unified platform for traditional acharyas across India.'),
      p('His Arsha Vidya Gurukulam at Anaikatti (near Coimbatore) and his global network of teachers continue to transmit traditional Vedanta through residential courses and correspondence study. For new students of Sanatan Dharma, his Introduction to Vedanta series is the most methodical modern entry point into Advaita available in clear English.'),
    ],
  },
  {
    _id: 'topic-carvaka',
    _type: 'topic',
    title: 'Cārvāka / Lokāyata — Classical Indian Materialism',
    slug: slug('carvaka-lokayata'),
    summary: 'Cārvāka (also called Lokāyata — the worldly school) is the classical Indian materialist and empiricist tradition. It accepts only direct perception as valid knowledge, rejects karma and rebirth, and affirms material life as the proper sphere of human flourishing. Its significance lies not in what it affirms but in what it demanded of every other Indian school: that they prove, not merely assert, the realities they claimed.',
    difficulty: 'intermediate',
    sourceRefs: [ref('src-carvaka')],
    body: [
      h2('The philosopher who said: prove it'),
      p('Of all the schools of classical Indian philosophy, Cārvāka is the most uncompromising in its scepticism. Attributed to the legendary sage Bṛhaspati (a different Bṛhaspati from the Vedic deity), the school takes its name either from its founder Cārvāka or, more evocatively, from cāru + vāk — "sweet-spoken" — a possibly ironic epithet from its opponents. Its other name, Lokāyata, means "that which is current among ordinary people" — a philosophy of the visible, tangible world.'),
      p('The Cārvāka position is radical in its economy: of the four classically recognised pramāṇas (means of valid knowledge) — pratyakṣa (perception), anumāna (inference), upamāna (comparison), and śabda (testimony) — Cārvāka accepts only pratyakṣa. Inference, it argues, depends on the assumption that the past will resemble the future — but this assumption is itself not perceivable, so inference is epistemologically unreliable. Testimony (the basis for accepting the Vedas) is even less secure.'),
      h2('What follows from perception alone'),
      p('If only direct perception is valid, then karma (whose fruits are experienced in a future life beyond present perception), rebirth (not perceivable), an afterlife (not perceivable), ātman as an entity distinct from the body (not perceivable), and mokṣa as a goal (not perceivable) all lose their epistemic warrant. The Cārvāka conclusion: consciousness is an emergent property of the material body — when the body dies, consciousness ceases, as fire ceases when fuel is consumed.'),
      p('The practical implication — often caricatured but worth understanding precisely — is that the proper aims of life are artha (material security) and kāma (pleasure). The famous verse attributed to the school: "While life remains, live joyfully; borrow and drink ghee if you cannot afford it. Once the body is cremated, how will it return?" This is not hedonism for its own sake but the logical consequence of rejecting extra-sensory reality.'),
      h2('Its philosophical contribution to the tradition'),
      p('The importance of Cārvāka lies precisely in what it demanded of the other schools. Every Indian philosophical school — Vedāntic, Buddhist, Jain, Nyāya, Mīmāṃsā, Vaiśeṣika — had to face the Cārvāka challenge and justify, through rigorous argument, why inference and testimony should be trusted as means of knowledge. The sophisticated epistemologies (pramāṇa śāstras) of Nyāya, Dignāga\'s Buddhist logic, and Jain syādvāda all developed partly in response to the Cārvāka challenge.'),
      p('Śaṅkara engages Cārvāka directly in the Brahma Sūtra Bhāṣya. The entire project of Advaita — establishing Brahman as knowable through śabda-pramāṇa (Vedic testimony) — must first answer why testimony is a valid means of knowledge at all. In this sense, Cārvāka was a necessary philosophical adversary that sharpened the tradition\'s own clarity.'),
      h2('The survival of the tradition'),
      p('The primary texts of Cārvāka are lost — their survival depends almost entirely on how their opponents quoted them. This tells us something: the tradition that engaged most seriously with Cārvāka was often the tradition that preserved it. The Sarvadarśanasaṃgraha of Mādhavācārya (14th century) presents the Cārvāka position with notable precision and intellectual respect before proceeding to its critique — a model of philosophical engagement across disagreement that is itself characteristically Indian.'),
    ],
  },
  {
    _id: 'topic-buddhist-darshana',
    _type: 'topic',
    title: 'Buddhist Darśana — The Middle Way and the Question of the Self',
    slug: slug('buddhist-darshana'),
    summary: 'Buddhism emerged from the same civilisational soil as Sanatan Dharma, sharing its concern with karma, rebirth, and liberation from suffering — while arriving at some fundamentally different answers. The most significant: where Vedānta affirms an eternal ātman, the Buddha taught anātman (no permanent self). The philosophical dialogue this created is one of the richest in human intellectual history.',
    difficulty: 'intermediate',
    sourceRefs: [ref('src-dhammapada')],
    body: [
      h2('The shared starting point'),
      p('Gautama Buddha (c. 563–483 BCE, though dates are debated) was born into a civilisation already shaped by Vedic thought, Upaniṣadic inquiry, and Śramaṇa renunciant traditions. He was, by background and training, deeply immersed in the same questions that occupied the Upaniṣadic sages: what is the nature of suffering? What is the self? What is the path to liberation from the cycle of rebirth?'),
      p('The Four Noble Truths (Catvāri Āryasatyāni) — that there is suffering (dukkha), that suffering has a cause (samudaya: craving, taṇhā), that the cessation of suffering is possible (nirodha), and that there is a path to that cessation (mārga: the Eightfold Path) — presuppose the Indian framework of karma and saṃsāra entirely. Without that framework, the Four Noble Truths make no sense. Buddhism is not a foreign arrival in the Indian tradition but an internal development from within it, even as it challenged some of its most fundamental assumptions.'),
      h2('The central departure: anātman'),
      p('The Buddha\'s most distinctive philosophical contribution is the anātman (Pali: anattā) teaching: the claim that what we take to be a permanent, unchanging self is, on careful examination, not there. What we call "the self" is a flowing, interdependent stream of five aggregates (skandhas): rūpa (form/body), vedanā (feeling-tone), saṃjñā (perception), saṃskāra (mental formations), and vijñāna (consciousness). These arise and pass in dependence on conditions — there is no unchanging entity behind or beneath them.'),
      p('This is the direct challenge to Vedāntic ātman doctrine. For Śaṅkara, the ātman is the one thing that is not subject to arising and passing — it is the eternal witness. The Buddhist response: even the experience of witnessing is itself a momentary arising within the stream. The two positions circle each other across centuries of rigorous argument, each demanding greater precision from the other.'),
      h2('Pratītyasamutpāda: dependent origination'),
      p('The positive doctrine that accompanies anātman is pratītyasamutpāda — dependent origination: everything that arises does so in dependence on conditions; nothing has independent, self-sufficient existence (svabhāva). The famous formula: "When this is, that is. From the arising of this comes the arising of that. When this is not, that is not. From the cessation of this comes the cessation of that." This is both a description of how suffering perpetuates itself (the twelve links of the nidāna chain) and the key to its dissolution.'),
      h2('The three great schools of Buddhist philosophy'),
      p('Theravāda (the "teaching of the elders") preserves the Pali Canon and emphasises the individual\'s liberation through the Eightfold Path toward nibbāna. Mahāyāna extends the ideal to the Bodhisattva — one who vows to remain in the cycle of rebirth until all beings are liberated. Its central philosophical development is Nāgārjuna\'s Madhyamaka (Middle Way school, c. 2nd century CE): the doctrine that all phenomena are śūnya (empty) of inherent, independent existence — including nirvāṇa itself. Vajrayāna (Diamond Vehicle) integrates tantric practice with Mahāyāna philosophy in a third development, particularly flourishing in Tibet.'),
      h2('Where Vedanta and Buddhism meet'),
      p('Contemporary teachers and scholars often note striking convergences between Advaita Vedānta and Buddhist Madhyamaka despite their doctrinal differences. Both hold that the ordinary sense of a fixed, substantial self is the root delusion. Both describe liberation as the direct recognition of what is actually the case — not a journey to acquire something new. Both warn that conceptual understanding, however sophisticated, is not itself liberation. The great Tibetan teacher Tsongkhapa and Śaṅkara disagree fundamentally on the nature of the self — yet the meditative instructions for investigating experience that both traditions offer are remarkably parallel.'),
    ],
  },
  {
    _id: 'topic-jain-philosophy',
    _type: 'topic',
    title: 'Jain Philosophy — Anekāntavāda, Ahiṃsā, and the Nature of the Soul',
    slug: slug('jain-philosophy'),
    summary: 'Jainism is one of the oldest surviving philosophical and spiritual traditions of the Indian subcontinent. Its foundational insights — the absolute value of non-violence (ahiṃsā), the many-sidedness of truth (anekāntavāda), and the soul\'s capacity for liberation through the shedding of karma — have influenced the entire range of Indian thought, including Sanatan Dharma and Buddhism.',
    difficulty: 'intermediate',
    sourceRefs: [ref('src-tattvartha-sutra')],
    body: [
      h2('The Tīrthaṅkara tradition'),
      p('Jainism teaches that in every cosmic cycle there appear twenty-four Tīrthaṅkaras — ford-makers, those who have crossed the ocean of saṃsāra and established the ford for others. The twenty-fourth and most recent Tīrthaṅkara of our era was Vardhamana Mahāvīra (c. 599–527 BCE), a contemporary of the Buddha. The twenty-third was Pārśvanātha (c. 872–772 BCE), whose existence is accepted by contemporary scholarship. The tradition does not claim to begin with Mahāvīra but to have been renewed by him after periods of obscuration.'),
      p('Jainism is nāstika in the technical Indian sense: it does not accept the authority of the Vedas. But it is deeply theistic in the sense that it venerates the liberated souls (the Siddhas and Arihants) as the highest reality, and it affirms the eternal existence of individual souls (jīvas), karma as real and binding, and mokṣa as the highest goal. Its metaphysics is rigorously realist: souls are real, matter is real, karma is real matter that binds the soul, and liberation is their complete separation.'),
      h2('Jīva and Ajīva: the foundational categories'),
      p('The Tattvārtha Sūtra of Umāsvāti opens with two foundational categories: jīva (soul, living being) and ajīva (non-soul, inert matter). Everything in the universe belongs to one of these two categories. Jīvas are characterised by consciousness (cetanā) and the capacity for experience; ajīvas (including the five forms of matter, space, time, and the media of motion and rest) have no consciousness. Karma in Jain philosophy is not merely a metaphorical law of moral causality — it is literal subtle matter (karma-vargaṇā) that flows into the soul (āsrava), sticks to it (bandha) due to the passions (kaṣāyas), and must be shed (nirjarā) through austerity and right conduct.'),
      h2('Anekāntavāda: the many-sidedness of truth'),
      p('Perhaps Jainism\'s greatest intellectual contribution is anekāntavāda — the doctrine that reality is manyfaceted and no single statement about it is unconditionally true. Every entity has infinite attributes; any particular statement grasps one facet from a particular standpoint (naya). The practical expression is syādvāda (conditional predication): propositions about reality are prefaced with syāt ("in some respect"), acknowledging that what is being said is true from a particular vantage but does not exhaust the whole. This makes Jain logic unusually nuanced and led to detailed, respectful engagement with all rival philosophical schools — Jain texts are among the best sources for understanding what opponents actually said.'),
      h2('Ahiṃsā: the first and highest principle'),
      p('The five Mahāvratas (great vows) of Jain monastics begin with ahiṃsā and are ordered in descending importance: non-violence, truthfulness, non-stealing, celibacy, non-possessiveness. For householders, these become the Aṇuvratas (minor vows) — modified forms of the same principles adapted to lay life. The extent of Jain ahiṃsā goes beyond human life: Jain monks strain their drinking water, sweep the path before them, and avoid certain foods during certain seasons to minimise harm to microscopic life. This thoroughgoing ahiṃsā had profound influence on Mahatma Gandhi and, through him, on political philosophy worldwide.'),
      h2('Liberation: the soul\'s return to its natural state'),
      p('For Jains, the liberated soul (siddha) does not merge with a universal reality — it rises to the apex of the universe (siddhalokaor Īṣatprāgbhārā) and rests there in its own nature: perfect knowledge (kevalajñāna), perfect perception (kevaladarśana), perfect bliss (sukha), and infinite energy (vīrya). This is not absorption into Brahman nor extinction of self but the soul\'s full realisation of its own intrinsic nature, free of all karmic covering. The path requires the three jewels: right knowledge (samyak jñāna), right faith (samyak darśana), and right conduct (samyak cāritra).'),
    ],
  },
  {
    _id: 'topic-sikh-philosophy',
    _type: 'topic',
    title: 'Sikh Philosophy — Ik Oaṅkār, Nāam, and the Way of the Gurū',
    slug: slug('sikh-philosophy'),
    summary: 'Sikhism arose in 15th-century Punjab through the direct spiritual experience and teaching of Gurū Nānak Dev Jī and nine successive Gurūs. Its philosophy — centred on the absolute oneness of the Creator (Ik Oaṅkār), liberation through the Gurū\'s word (Nāam), and the radical equality of all human beings — stands as one of the most complete expressions of nirguṇa bhakti in the Indic tradition.',
    difficulty: 'beginner',
    sourceRefs: [ref('src-guru-granth-sahib')],
    body: [
      h2('The founding revelation'),
      p('Gurū Nānak Dev Jī (1469–1539) was born in Rāi Bhoi dī Talvaṇḍī (present-day Nankana Sahib, Pakistan). The tradition records that after a period of contemplative withdrawal near the Vein river, Gurū Nānak received a direct revelation of the divine presence and emerged declaring: "There is no Hindu, there is no Musalman" — meaning that in the presence of the One Creator, all human divisions of religion, caste, and birth fall away. His teaching, transmitted through Śabda (the divine Word) and kirtan (devotional singing), gathered a community (Sangat) around the principles of Naam (divine Name), Daan (sharing), and Ishnaan (inner and outer cleanliness).'),
      p('Nine Gurūs succeeded him, each adding depth, structure, and in some cases, martial courage to the tradition. Gurū Gobind Singh Jī (1666–1708) was the last human Gurū; before his passing, he declared that henceforth the Gurū Granth Sāhib Jī would be the eternal, living Gurū. The scripture is treated with complete reverence as the presence of the Gurū himself.'),
      h2('Ik Oaṅkār: the one without a second'),
      p('The opening symbol of the Gurū Granth Sāhib is Ik Oaṅkār (ੴ) — One Universal Creator God. This declaration, foundational to all Sikh theology, asserts the absolute unity and formlessness of God (Waheguru — the Wondrous Enlightener). God is simultaneously nirguṇa — beyond all qualities, forms, and names — and saguṇa — present and accessible through the Gurū\'s grace and the Nāam. The creator is not distant or judicial but the very ground of existence, the One in whom all creation breathes.'),
      p('The Mūl Mantar — the root formula that opens the Gurū Granth Sāhib — is a compressed theological declaration: Ik Oaṅkār, Sat Nāam (truth is His name), Kartā Purkh (the Primal Being, the Doer), Nirbhau (fearless), Nirvair (without enmity), Akāl Mūrat (beyond time), Ajūnī (unborn), Saibhang (self-existent), Gurprasādi (realised through the Gurū\'s grace). Each term carries the weight of a philosophy.'),
      h2('Nāam Simran: the practice of remembrance'),
      p('The central spiritual practice in Sikhism is Nāam Simran — the continuous, meditative remembrance of the divine Name. This is not the mechanical repetition of a word but the orientation of the entire mind toward the divine presence. The Gurū Granth Sāhib describes the one who practises Nāam Simran as gradually free of ego (haumai — the sense of a separate self that is the root of spiritual blindness), fear, and the cycle of birth and death. The Simran is complemented by Sangat (the community of truth-seekers) and Seva (selfless service), which prevent spiritual practice from becoming self-regarding.'),
      h2('The institution of Langar: radical equality in practice'),
      p('Instituted by Gurū Nānak Dev Jī and developed through the Gurūship, Langar — the community kitchen in which all people, regardless of caste, creed, gender, or status, sit together in the same row and share the same meal — is not merely a charitable practice. It is a theological statement: in the presence of the One Creator, no human being is higher or lower than another. The Langar operates continuously at Gurdwaras across the world, serving millions of free meals daily. It is among the most sustained experiments in radical equality in human history.'),
      h2('Convergences with the Bhakti tradition'),
      p('The Gurū Granth Sāhib contains compositions not only from the ten Sikh Gurūs but also from thirty-six Bhagats — saints from various traditions including Bhakti poets Kabīr Jī, Raidās Jī, Nāmdev Jī, and Sufi saint Bābā Farīd. Their inclusion reflects the Sikh understanding that the direct experience of the divine is not the exclusive property of any single tradition — wherever genuine surrender to the One Creator occurs, that experience is recognised and honoured. This makes the Gurū Granth Sāhib a unique inter-traditional scripture while remaining centred on the Sikh revelation.'),
    ],
  },
  {
    _id: 'topic-dharmic-convergence',
    _type: 'topic',
    title: 'The Dharmic Family — Where Six Schools and Four Traditions Converge',
    slug: slug('dharmic-convergence'),
    summary: 'Sanatan Dharma, Buddhism, Jainism, and Sikhism — together with the classical philosophical schools of Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, Vedānta, and even the sceptical Cārvāka — share a common civilisational root. They ask the same foundational questions, use much of the same vocabulary, and engage in continuous philosophical dialogue. Understanding the convergences is as illuminating as understanding the differences.',
    difficulty: 'beginner',
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-dhammapada'), ref('src-tattvartha-sutra'), ref('src-guru-granth-sahib')],
    body: [
      h2('One civilisational inquiry, many answers'),
      p('No other civilisation produced such a sustained, pluralistic, internally contentious, and yet recognisably unified body of philosophical and spiritual inquiry as the Indian subcontinent across four thousand years. The Ṛgvedic seers, the Upaniṣadic sages, the Buddha and Mahāvīra, the great Vedāntic ācāryas, the Śaiva and Vaiṣṇava bhakti poets, the Sikh Gurūs — all address a recognisable family of questions, in a shared conceptual vocabulary, with deep mutual awareness of each other\'s positions.'),
      p('To understand this family of traditions is not to flatten their differences. The ātman-anātman debate between Vedānta and Buddhism is not a trivial disagreement. The Jain critique of Vedic authority is thoroughgoing. Sikh theology\'s insistence on the equality of all before the One Creator challenges caste structures embedded in some strands of traditional practice. These differences are real, important, and philosophically productive. And they exist within a shared frame.'),
      h2('What all these traditions share: karma'),
      p('With the sole exception of Cārvāka, every classical Indian philosophical school and spiritual tradition accepts some form of karma — the principle that intentional action has moral consequences that shape the experiencer\'s future, including future lives. Buddhism accepts karma fully (though without a permanent karmic agent). Jainism accepts it and develops perhaps its most precise mechanics (karma as subtle matter). Sikhism accepts it and teaches that Nāam and the Gurū\'s grace can dissolve accumulated karma. Even the sceptical Cārvāka\'s importance comes partly from its radical rejection of this universal acceptance — it was the internal challenge that forced every other school to articulate why karma is real.'),
      h2('What all share: the inadequacy of ordinary experience'),
      p('Every tradition in the Dharmic family begins with the recognition that ordinary human experience — driven by desire, aversion, and ignorance — is fundamentally unsatisfactory. Dukkha in Buddhism, saṃsāra in Vedānta, the bondage of karma in Jainism, haumai (ego) in Sikhism — these are different names for the same diagnosis: the human being in its ordinary condition is not living from its deepest nature, and something needs to be done about that.'),
      p('This shared diagnosis is why every tradition prescribes a path of practice — not just right belief, but transformed living. Ethics, meditation, inquiry, devotion, service — in different combinations and emphases, all traditions agree that liberation requires inner transformation, not merely correct doctrine.'),
      h2('What all share: ahiṃsā as the ethical foundation'),
      p('Non-violence (ahiṃsā in Sanskrit; ahiṃsā in Pali; ahiṃsā in Prākrit; the Sikh teaching of Daya, compassion) is the foundational ethical commitment across every tradition in the Dharmic family. The Mahābhārata states it simply: ahiṃsā paramo dharmaḥ — non-violence is the highest dharma. Jainism takes it to its most exacting expression. Buddhism grounds it in the recognition that all beings seek happiness and freedom from suffering. Sikhism grounds it in the presence of the divine in all creation. The specific applications differ; the commitment does not.'),
      h2('The productive disagreements'),
      p('What distinguishes the Dharmic family from a religion is precisely that it is a family of inquiry rather than a single doctrine. The great questions — is there an eternal self? What is the nature of the divine? Is liberation individual or universal? Is renunciation necessary or can the householder be liberated? — are not settled. Every tradition has a rigorous answer; the answers conflict; the conflict is generative. The Nyāya school developed formal logic partly to adjudicate these debates. Buddhist epistemology sharpened Vedāntic self-understanding. Jain logic preserved the positions of traditions whose texts were otherwise lost.'),
      p('For a student of Vedika, the point is this: you cannot understand Sanatan Dharma fully without some understanding of what Buddhism argued against it, what Jainism said about karma that Vedānta had to respond to, what the Sikh Gurūs said about the inner life that resonated across the bhakti world. These traditions are not background noise to the Vedic mainstream. They are part of the same conversation — and the conversation is still ongoing.'),
    ],
  },
]

// ─── Additional Comparisons ───────────────────────────────────────────────────

const additionalComparisons = [
  {
    _id: 'comp-vedanta-buddhism',
    _type: 'comparison',
    title: 'Vedānta and Buddhism — The Great Debate on the Self',
    slug: slug('vedanta-buddhism'),
    summary: 'The dialogue between Vedānta and Buddhism is the most profound and sustained philosophical exchange in the Dharmic tradition. Both start from the recognition that ordinary human experience is marked by suffering and driven by ignorance. Both point toward liberation. They disagree, precisely and consequentially, on what the self is — and whether there is one at all.',
    topicsCompared: [ref('topic-atman-brahman'), ref('topic-buddhist-darshana')],
    sourceRefs: [ref('src-upanishads'), ref('src-bhagavad-gita'), ref('src-dhammapada')],
    analysis: [
      h2('The shared diagnosis'),
      p('Both Vedānta and Buddhism agree on the problem with extraordinary precision: ordinary human consciousness is characterised by a deep, pre-reflective misidentification that generates suffering. In Vedānta this is avidyā (ignorance of the true nature of the self); in Buddhism it is avijjā (ignorance of the impermanent, conditioned, non-self nature of all phenomena). Both hold that this ignorance is not merely an intellectual error but a pervasive orientation of the entire psycho-physical system, and that its correction requires sustained practice, not just correct information.'),
      p('Both agree that liberation is not achieved by acquiring something new but by the removal of what obscures what is already the case. And both teach that meditative investigation — turning awareness toward its own nature — is a central element of that removal.'),
      h2('The foundational disagreement: ātman or anātman?'),
      p('For Advaita Vedānta, the deepest nature of the experiencer is ātman — pure, unchanging, self-luminous awareness, identical with Brahman, the ground of all being. The Upaniṣadic declaration aham brahmāsmi (I am Brahman) is the recognition of this identity. Liberation is the full, stable recognition that this has always been the case.'),
      p('For Buddhism, the investigation of experience reveals the opposite: there is no fixed, permanent, self-sufficient self to be found anywhere in experience. What presents itself as a unified self is a flowing stream of interdependent processes. The Buddha deliberately declined to answer whether a self exists or not after death ("Is the self the same after death or different?" — avyākata, undeclared) — not because the question is unimportant but because it is malformed: it presupposes a fixed entity where there is none.'),
      h2('Śaṅkara\'s charge: Buddhism without the self is the same as Advaita'),
      p('Śaṅkara made a famous and pointed charge in his Brahma Sūtra Bhāṣya: the Vijñānavāda (consciousness-only) school of Mahāyāna Buddhism (Yogācāra) is "crypto-Vedānta" (pracchanna-bauddha) in disguise — it posits a universal consciousness (ālaya-vijñāna) that plays the same structural role as Brahman. The Buddhist response, particularly from the Madhyamaka school, is that śūnyatā (emptiness) applies equally to any putative universal consciousness — including the Vedāntic Brahman. Neither school is simply right about the other\'s position, but the exchange pushed both to greater precision.'),
      h2('The convergence that neither school entirely denies'),
      p('Contemporary study finds striking structural parallels between Advaita and Madhyamaka despite their doctrinal incompatibility. Both hold that the ordinary sense of a fixed, independently existing self is the root delusion. Both warn that conceptual understanding of their own doctrines, however sophisticated, is not liberation. Both use negation (neti neti in Advaita; the tetralemma in Nāgārjuna) to guard against reifying their own teachings. Both locate liberation in a recognition that is immediate and non-conceptual. The question of whether the awareness that remains after the self\'s deconstruction is "pure consciousness" (Advaita) or "empty of inherent existence" (Madhyamaka) may be, as some contemporary philosophers suggest, a difference of emphasis rather than a difference in what is actually pointed at.'),
    ],
  },
  {
    _id: 'comp-dharmic-four-traditions',
    _type: 'comparison',
    title: 'Sanatan Dharma, Buddhism, Jainism, and Sikhism — Four Traditions, One Question',
    slug: slug('dharmic-four-traditions'),
    summary: 'The four great Dharmic traditions of the Indian subcontinent ask the same foundational question — how does a conscious being find liberation from the cycle of suffering? — and give remarkably coherent yet distinctly different answers. Mapping their convergences and divergences is one of the most illuminating exercises available to a serious student of any one of them.',
    topicsCompared: [ref('topic-dharmic-convergence'), ref('topic-sikh-philosophy')],
    sourceRefs: [ref('src-upanishads'), ref('src-dhammapada'), ref('src-tattvartha-sutra'), ref('src-guru-granth-sahib')],
    analysis: [
      h2('The nature of the ultimate reality'),
      p('Sanatan Dharma (specifically Advaita Vedānta): Brahman, the one non-dual consciousness, is the only ultimate reality. Individual souls and the world are real but not ultimately independent of Brahman. Buddhism (Madhyamaka): there is no ultimate substance — all phenomena, including consciousness, are empty of inherent, independent existence (śūnyatā). Liberation is the recognition of this emptiness. Jainism: both souls (jīvas) and matter (ajīvas) are ultimately real, eternal, and irreducible to each other. God as a personal creator is not posited — the highest ideal is the liberated soul (Siddha). Sikhism: there is one formless Creator (Waheguru, Ik Oaṅkār) who is both transcendent and immanent — the ground of all existence and the innermost reality of every soul.'),
      h2('The nature of the self'),
      p('Vedānta: ātman is real, eternal, and ultimately identical with Brahman. Buddhism: there is no permanent self; what we call "self" is a conventional designation for a stream of impermanent processes. Jainism: each soul (jīva) is real, individual, and eternal — souls do not merge with each other or with a universal reality even in liberation. Sikhism: the individual soul (jīva, ātmā) is real and distinct from God but is an expression of the one divine light — liberation is the soul\'s reunion with its source through the Gurū\'s grace.'),
      h2('The mechanism of bondage'),
      p('Vedānta: avidyā (ignorance of one\'s identity with Brahman), superimposed on the self through māyā. Buddhism: avijjā (ignorance of impermanence, suffering, and no-self), expressed as the three fires of craving, aversion, and delusion. Jainism: karma as subtle matter that clings to the soul due to passions (kaṣāyas: anger, pride, deceit, greed) and activity (yoga: mental, verbal, physical). Sikhism: haumai (ego-sense, the illusion of separate existence), the root of the five thieves — lust (kāma), anger (krodh), greed (lobh), attachment (moh), pride (ahankar).'),
      h2('The path to liberation'),
      p('Vedānta: jñāna (knowledge) — specifically the direct recognition of ātman-Brahman identity through hearing (śravaṇa), reflection (manana), and deep contemplation (nididhyāsana) of the mahāvākyas. Bhakti and karma are preparatory. Buddhism: the Eightfold Path — right understanding, intention, speech, action, livelihood, effort, mindfulness, and concentration — leading to insight into the three characteristics of existence. Jainism: the three jewels — samyak jñāna (right knowledge), samyak darśana (right faith), samyak cāritra (right conduct) — combined with tapas (austerity) to shed karmic matter. Sikhism: Nāam Simran (remembrance of the divine Name), Sangat (community), Seva (service), and surrender to the Gurū\'s shabad (word) — liberation comes through the Gurū\'s grace, not by individual effort alone.'),
      h2('The convergence that matters most'),
      p('Across all four traditions, the deepest agreement is ethical and experiential rather than metaphysical: that ordinary human consciousness, driven by self-centred desire and fear, generates suffering for oneself and others; that the reduction of violence, the cultivation of compassion, and the quieting of the ego are both morally essential and spiritually necessary; and that the highest human possibility is a life that has ceased to be organised around the protection and aggrandisement of a separate self. Whether that self is dissolved (Buddhism), recognised as Brahman (Vedānta), returned to its pure nature (Jainism), or reunited with its source (Sikhism) — the lived texture of liberation, as described by the tradition\'s realised teachers, is strikingly similar across all four.'),
    ],
  },
]

// ─── Additional Essay ─────────────────────────────────────────────────────────

const additionalEssays = [
  {
    _id: 'essay-one-soil-many-flowers',
    _type: 'essay',
    title: 'One Soil, Many Flowers — The Dharmic Family of Traditions',
    slug: slug('one-soil-many-flowers'),
    dek: 'The traditions we call Sanatan Dharma, Buddhism, Jainism, and Sikhism are not four separate religions that happen to share a geography. They are members of a philosophical family — asking the same questions, using much of the same vocabulary, aware of each other\'s positions, and in continuous, generative dialogue across twenty-five centuries.',
    topics: [ref('topic-dharmic-convergence')],
    sourceRefs: [ref('src-bhagavad-gita'), ref('src-dhammapada'), ref('src-tattvartha-sutra'), ref('src-guru-granth-sahib')],
    body: [
      h2('What makes a family of traditions'),
      p('A family of traditions is not a single tradition with minor variations. A family is a group of related but distinct lineages that share a common origin, use a common vocabulary, ask a common set of questions, and are in continuous, if contentious, relationship with each other. They disagree — sometimes profoundly. But they disagree about things that matter to all of them in ways that would not make sense to an outsider who didn\'t share the presuppositions.'),
      p('The great Dharmic traditions of the Indian subcontinent form exactly such a family. Sanatan Dharma, Buddhism, Jainism, and Sikhism are not four religions that happen to have emerged in the same geography. They are four sustained engagements with the same foundational questions — about the nature of the self, the mechanics of karma and rebirth, the structure of ethical life, and the conditions for liberation — questions that are native to the Indian civilisational conversation.'),
      h2('Karma: the shared presupposition'),
      p('The single most important shared presupposition of this family is karma — the principle that intentional action has moral-causal consequences that shape the experiencer\'s future. Every tradition in the Dharmic family (except Cārvāka, the internal sceptic) accepts some form of this. Buddhism accepts it fully (without requiring a permanent karmic agent). Jainism develops the most precise mechanics — karma as subtle matter that literally adheres to the soul. Sikhism accepts it and teaches that the Gurū\'s grace and Nāam can dissolve its accumulation. The precise mechanism differs; the principle does not.'),
      p('This shared acceptance of karma is what gives every Dharmic tradition its ethical seriousness. If what you do matters — not just for social approval but for the very structure of your future experience — then how you live is a spiritual question, not just a social one. This is why every Dharmic tradition has an integrated ethics, not an ethics separate from its metaphysics.'),
      h2('Ahiṃsā: the shared ethical foundation'),
      p('Of all the principles that unite the Dharmic family, ahiṃsā — non-violence, non-harming — is the most widely shared and the most universally foundational. The Mahābhārata calls it the highest dharma. Jainism takes it to its most exacting philosophical expression. The Buddha placed it at the root of the Eightfold Path. Sikhism grounds it in the recognition of the divine presence in all creation. Each tradition extends it differently — Jainism to microscopic life, Sikhism to include righteous resistance to oppression — but the core commitment is the same: the conscious being does not cause unnecessary harm.'),
      h2('The great internal debate: ātman, anātman, jīva'),
      p('Within the shared frame of karma, rebirth, and the goal of liberation, the Dharmic family\'s most consequential internal disagreement is about the nature of the self. Advaita Vedānta: the self is ātman, pure, eternal, and ultimately identical with Brahman — the one non-dual reality. Buddhism: there is no permanent self; what we call "self" is a flow of impermanent, interdependent processes. Jainism: souls are real, individual, eternal — they do not merge with each other or with a universal ground even in liberation. Sikhism: the individual soul is a ray of the divine light, destined to return to its source through the Gurū\'s grace.'),
      p('These are not superficial differences. The entire structure of each tradition\'s practice follows from its understanding of the self. What is remarkable is not that they disagree but that they have been in explicit, rigorous dialogue about this disagreement for over two thousand years — each tradition forcing the others to greater precision, and producing, in the process, some of the most sophisticated philosophy in human history.'),
      h2('The shared destination'),
      p('Despite their metaphysical disagreements, the great teachers of all four traditions describe what liberation actually feels like in strikingly similar terms: a cessation of the compulsive, fear-driven activity of the ordinary self; a quality of open, non-reactive presence; an effortless compassion that is not cultivated but arises naturally from the dissolution of self-concern; and a relationship with death that has ceased to be experienced as a threat. Whether this is called mokṣa, nirvāṇa, mukti, or the Gurū\'s grace — the tradition\'s realised teachers point, with different maps, toward the same territory.'),
      h2('Why this matters for students of Sanatan Dharma'),
      p('Understanding the Dharmic family does not dilute your understanding of Sanatan Dharma — it deepens it. The ātman doctrine becomes more precise when you have understood what the Buddha was arguing against. The Vedāntic understanding of karma becomes richer when you have seen Jainism\'s detailed analysis of how karma binds and is shed. The bhakti tradition that runs through Sanatan Dharma finds a powerful echo in the Sikh Gurūs\' poetry. And the Cārvāka challenge — prove that karma is real, prove that inference is reliable, prove that the Vedas are authoritative — is the question every student of any Dharmic tradition should be able to answer, because it is the question the tradition\'s great teachers spent considerable effort answering well.'),
    ],
  },
]

// ─── Main execution ──────────────────────────────────────────────────────────

async function seed() {
  const all = [
    ...sourceRefs,
    ...additionalSourceRefs,
    ...glossaryEntries,
    ...additionalGlossary,
    ...topics,
    ...additionalTopics,
    ...texts,
    ...guides,
    ...essays,
    ...additionalEssays,
    ...comparisons,
    ...additionalComparisons,
  ]

  console.log(`\n📚 Vedika content seed`)
  console.log(`   Project: ${PROJECT_ID}  Dataset: ${DATASET}`)
  console.log(`   Documents to create/replace: ${all.length}\n`)

  const BATCH_SIZE = 20
  let created = 0

  for (let i = 0; i < all.length; i += BATCH_SIZE) {
    const batch = all.slice(i, i + BATCH_SIZE)
    const tx = client.transaction()
    for (const doc of batch) {
      tx.createOrReplace(doc)
    }
    await tx.commit()
    created += batch.length
    console.log(`   ✓ ${created}/${all.length} documents committed`)
  }

  console.log(`\n✅  Seed complete. Open your Sanity Studio to verify content.\n`)
  console.log(`   Source refs:       ${sourceRefs.length + additionalSourceRefs.length}`)
  console.log(`   Glossary:          ${glossaryEntries.length + additionalGlossary.length}`)
  console.log(`   Topics:            ${topics.length + additionalTopics.length}`)
  console.log(`   Texts:             ${texts.length}`)
  console.log(`   Guides:            ${guides.length}`)
  console.log(`   Essays:            ${essays.length + additionalEssays.length}`)
  console.log(`   Comparisons:       ${comparisons.length + additionalComparisons.length}`)
  console.log(`   Total documents:   ${all.length}`)
  console.log(`\n   Next: run \`npm run dev\` and visit your site.\n`)
}

seed().catch((err) => {
  console.error('\n❌  Seed failed:', err.message)
  if (err.statusCode === 403) {
    console.error('    → Check that SANITY_WRITE_TOKEN has Editor permissions.\n')
  }
  process.exit(1)
})
