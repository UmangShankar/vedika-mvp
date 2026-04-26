export type Guna = 'sattva' | 'rajas' | 'tamas'
export type Tier = 1 | 2 | 3

export type Purana = {
  slug: string
  glyph: string
  name: string
  subtitle: string
  shlokas: number
  barPct: number       // % of Skanda max (81,100)
  guna: Guna
  tier: Tier
  themes: string[]
  desc: string
  special?: string     // renders with lotus accent tag if present
}

export type GunaSection = {
  guna: Guna
  decorativeGlyph: string
  meta: string
  name: string
  desc: string
}

export const PURANAS: Purana[] = [
  // ── SATTVA ──────────────────────────────────────────────────────
  { slug:'bhagavata',      glyph:'भा',    name:'Bhāgavata Purāṇa',   subtitle:'Śrīmad Bhāgavatam · 12 skandhas',   shlokas:18000, barPct:22,  guna:'sattva', tier:1, themes:['Bhakti','Kṛṣṇa','Avatāra','Cosmology'],          desc:'Most studied Purāṇa; 12 skandhas culminating in Kṛṣṇa\'s life-story and the theology of devotional surrender.' },
  { slug:'vishnu',         glyph:'वि',    name:'Viṣṇu Purāṇa',       subtitle:'6 aṃśas',                           shlokas:23000, barPct:28,  guna:'sattva', tier:1, themes:['Cosmic order','Avatāra','Vaṃśa'],                desc:'Most systematic Vaiṣṇava theology; first Purāṇa translated into English (Wilson, 1840).' },
  { slug:'padma',          glyph:'प',     name:'Padma Purāṇa',        subtitle:'5 khaṇḍas',                         shlokas:55000, barPct:68,  guna:'sattva', tier:2, themes:['Tīrtha','Guṇa taxonomy','Gītā glory'],           desc:'Second largest of the 18; its Uttara Khaṇḍa contains the guṇa classification of all 18 Purāṇas used on this very page.' },
  { slug:'narada',         glyph:'ना',    name:'Nārada Purāṇa',       subtitle:'Nāradīya · 2 parts',                shlokas:25000, barPct:31,  guna:'sattva', tier:2, themes:['Music','Bhakti path','Sacred sound'],            desc:'Covers ritual, Viṣṇu\'s names, and music theory — the Purāṇa most relevant to devotional music traditions.' },
  { slug:'garuda',         glyph:'ग',     name:'Garuḍa Purāṇa',       subtitle:'2 khaṇḍas · 279 chapters',         shlokas:19000, barPct:23,  guna:'sattva', tier:2, themes:['Afterlife','Death rites','Eschatology'],          desc:'The Purāṇa of the afterlife; recited at funerals; maps the soul\'s post-mortem journey unlike any other text in the canon.' },
  { slug:'varaha',         glyph:'व',     name:'Varāha Purāṇa',        subtitle:'217 chapters',                      shlokas:24000, barPct:30,  guna:'sattva', tier:3, themes:['Varāha avatāra','Earth goddess','Pilgrimage'],   desc:'Dialogue between Viṣṇu\'s Varāha form and Bhūdevī; best studied alongside Matsya and Kūrma in the avatāra sequence.' },
  // ── RAJAS ───────────────────────────────────────────────────────
  { slug:'markandeya',     glyph:'मा',    name:'Mārkaṇḍeya Purāṇa',  subtitle:'137 chapters',                      shlokas:9000,  barPct:11,  guna:'rajas',  tier:1, themes:['Śāktism','Cycles of time'],                    desc:'Despite Rājasika classification, hosts the Devī Māhātmya (700 verses) — the foundational text of Śāktism, recited across India during Navaratri.', special:'Contains Devī Māhātmya' },
  { slug:'brahma-vaivarta',glyph:'ब्र',   name:'Brahma Vaivarta',     subtitle:'4 khaṇḍas',                         shlokas:18000, barPct:22,  guna:'rajas',  tier:2, themes:['Rādhā theology','Śakti','Kṛṣṇa'],               desc:'Primary Purāṇic source on Rādhā and the Rādhā-Kṛṣṇa relationship; significant for Gauḍīya Vaiṣṇavism.' },
  { slug:'brahmanda',      glyph:'ब्रां', name:'Brahmāṇḍa Purāṇa',   subtitle:'Lalitā Sahasranāma within',         shlokas:12000, barPct:15,  guna:'rajas',  tier:3, themes:['Cosmology','Navagrahas','Lalitā Sahasranāma'],   desc:'Uttara Khaṇḍa contains the Lalitā Sahasranāma — a major Śākta hymn in wide independent liturgical use.' },
  { slug:'bhavishya',      glyph:'भ',     name:'Bhaviṣya Purāṇa',     subtitle:'4 parvas · prophetic',              shlokas:14500, barPct:18,  guna:'rajas',  tier:3, themes:['Prophecy','Solar worship','Festivals'],           desc:'Prophetic in structure; textually contested — portions show significant later interpolation and must be cited with that caveat.' },
  { slug:'vamana',         glyph:'वा',    name:'Vāmana Purāṇa',       subtitle:'95 chapters',                       shlokas:10000, barPct:12,  guna:'rajas',  tier:3, themes:['Vāmana avatāra','Bali','Śaiva material'],        desc:'Centers on Vāmana\'s three-step defeat of Bali; includes Śaiva material despite Brahmic classification.' },
  { slug:'brahma',         glyph:'ब',     name:'Brahma Purāṇa',        subtitle:'Ādi Purāṇa · 245 chapters',        shlokas:10000, barPct:12,  guna:'rajas',  tier:3, themes:['Creation','Jagannātha','Odisha tīrthas'],         desc:'One of the oldest; significant for covering Odisha\'s sacred sites and the Jagannātha tradition at Purī.' },
  // ── TAMAS ───────────────────────────────────────────────────────
  { slug:'shiva',          glyph:'शि',    name:'Śiva Purāṇa',         subtitle:'7 saṃhitās',                        shlokas:24000, barPct:30,  guna:'tamas',  tier:1, themes:['Śiva supremacy','Liṅga','Pārvatī','Kārttikeya'], desc:'Primary Śaiva Purāṇa; 7 saṃhitās covering Śiva\'s mythology, his family, and the philosophical basis of Śaiva devotion.' },
  { slug:'skanda',         glyph:'स्क',   name:'Skanda Purāṇa',       subtitle:'Largest · 6 khaṇḍas',               shlokas:81100, barPct:100, guna:'tamas',  tier:2, themes:['Sacred geography','Tīrtha atlas','Kāśī'],         desc:'Largest of all 18 at 81,100 verses — the Purāṇic atlas of Śaiva sacred geography across India.' },
  { slug:'agni',           glyph:'अ',     name:'Agni Purāṇa',         subtitle:'383 chapters',                      shlokas:15400, barPct:19,  guna:'tamas',  tier:2, themes:['Āyurveda','Vāstu','Poetics','Astronomy'],         desc:'Most encyclopedic of the 18; covers medicine, architecture, poetics, and astronomy — the only Purāṇa functioning as a classical compendium.' },
  { slug:'matsya',         glyph:'म',     name:'Matsya Purāṇa',        subtitle:'291 chapters · oldest',             shlokas:14000, barPct:17,  guna:'tamas',  tier:2, themes:['Flood narrative','Canon index','Manu'],           desc:'Contains the index of all 18 Mahāpurāṇas and the Matsya-Manu flood narrative — uniquely meta-canonical within the corpus.' },
  { slug:'kurma',          glyph:'कू',    name:'Kūrma Purāṇa',        subtitle:'2 khaṇḍas',                         shlokas:17000, barPct:21,  guna:'tamas',  tier:2, themes:['Śiva-Viṣṇu unity','Samudra-manthana','Smārta'],  desc:'Presents Śiva and Viṣṇu as equal manifestations of one supreme reality; significant for the Smārta tradition.' },
  { slug:'linga',          glyph:'लि',    name:'Liṅga Purāṇa',        subtitle:'2 bhagas · 163 chapters',           shlokas:11000, barPct:14,  guna:'tamas',  tier:2, themes:['Liṅgodbhava','Śaiva cosmology'],                  desc:'Centers on the Liṅgodbhava — Śiva\'s self-manifestation as an infinite pillar of light; primary source for Śivalinga theology.' },
]

export const GUNA_SECTIONS: GunaSection[] = [
  { guna:'sattva', decorativeGlyph:'स', meta:'Sattva guṇa · Truth & Purity · 6 texts',       name:'Vaiṣṇava Purāṇas', desc:'Oriented toward Viṣṇu, his avatāras, and the path of devotion. The Padma Purāṇa — itself in this group — is the source of the guṇa classification system used on this page.' },
  { guna:'rajas',  decorativeGlyph:'र', meta:'Rajas guṇa · Passion & Activity · 6 texts',    name:'Brahmic Purāṇas',  desc:'Associated with creative activity and Brahma\'s function as world-creator. Theologically diverse — the Mārkaṇḍeya carries the founding text of Śāktism; the Brahma Vaivarta is the primary source on Rādhā\'s theology.' },
  { guna:'tamas',  decorativeGlyph:'त', meta:'Tamas guṇa · Transformation · 6 texts',        name:'Śaiva Purāṇas',   desc:'Associated with dissolution and transformation — Śiva\'s domain. The tamas label is the Padma Purāṇa\'s Vaiṣṇava classification; it carries no qualitative judgement. Skanda is the largest text in the entire canon.' },
]

// ── Bhāgavata deep dive data ─────────────────────────────────────

export type PhilosophyTenet = {
  devanagari: string
  sanskrit: string
  english: string
  definition: string
}

export type Skandha = {
  number: number
  name: string
  desc: string
  isHighlight?: boolean
  highlightLabel?: string
}

export type DeepDiveFigure = {
  glyph: string
  name: string
  role: string
  note: string
}

export type Commentator = {
  name: string
  period: string
  school: string
  schoolStyle: 'advaita' | 'suddha' | 'gaudi'
  text: string
  workTitle: string
}

export type PuranaVerse = {
  devanagari: string
  translation: string
  source: string
  reference: string
}

export const BHAGAVATA_TENETS: PhilosophyTenet[] = [
  { devanagari: 'भक्ति', sanskrit: 'Bhakti', english: 'Supreme devotion', definition: 'Devotion to Kṛṣṇa is the highest yoga — above jñāna, karma, and aṣṭāṅga. The Bhāgavata is the fullest elaboration of bhakti as a complete path to liberation.' },
  { devanagari: 'स्वयम्', sanskrit: 'Svayam Bhagavān', english: 'Kṛṣṇa as the source', definition: 'Kṛṣṇa is not an avatāra of Viṣṇu — Viṣṇu and all avatāras are expansions of Kṛṣṇa. This inversion of the standard avatāra hierarchy is the text\'s most theologically contested claim.' },
  { devanagari: 'लीला', sanskrit: 'Līlā', english: 'Divine play', definition: 'Kṛṣṇa\'s cosmic and earthly acts are not purposive labour but spontaneous divine play — the overflow of bliss. The 10th skandha is its fullest expression.' },
  { devanagari: 'माया', sanskrit: 'Māyā', english: 'Creative illusion', definition: 'The phenomenal world is Viṣṇu\'s Māyā — not falsehood but a veiling of the absolute. Liberation is seeing through Māyā to the Brahman behind it.' },
  { devanagari: 'अवतार', sanskrit: 'Avatāra', english: 'Divine descent', definition: 'Viṣṇu descends in forms to restore dharma and liberate devotees. The Bhāgavata lists 22 principal avatāras in the 1st skandha.' },
  { devanagari: 'मुक्ति', sanskrit: 'Mukti through bhakti', english: 'Liberation via devotion', definition: 'The Bhāgavata\'s liberation is intimate relationship with Kṛṣṇa in his eternal abode — not Advaitic dissolution into Nirguṇa Brahman.' },
]

export const BHAGAVATA_SKANDHAS: Skandha[] = [
  { number: 1,  name: 'Cosmogony',          desc: 'Brahma\'s questions; avatāra list; the nature of Bhagavat' },
  { number: 2,  name: 'Śuka\'s discourse',  desc: 'Parīkṣit\'s question; eight questions on liberation' },
  { number: 3,  name: 'Detailed creation',  desc: 'Maitreya-Vidura dialogue; Brahmā\'s day; Kapila\'s sāṃkhya' },
  { number: 4,  name: 'Dharma & ages',      desc: 'Dakṣa\'s yajña; Dhruva; Pṛthu; the Puruñjana allegory' },
  { number: 5,  name: 'Cosmic geography',   desc: 'Structure of the universe; Bharatavarṣa; hell realms' },
  { number: 6,  name: 'Viṣṇu\'s messengers', desc: 'Ajāmila; Viṣṇu-dūtas vs Yama-dūtas; Dakṣa\'s sons' },
  { number: 7,  name: 'Prahlāda',           desc: 'Prahlāda\'s devotion; Narasiṃha\'s appearance; bhakti as refuge' },
  { number: 8,  name: 'Ocean churning',     desc: 'Samudra-manthana; Vāmana & Bali; Manvantara cycles' },
  { number: 9,  name: 'Royal genealogies',  desc: 'Solar and lunar dynasties; Rāma\'s story summarised' },
  { number: 10, name: 'Kṛṣṇa\'s life',      desc: 'Birth · Vṛndāvana · Rāsa-līlā · Mathurā · Dvārakā', isHighlight: true, highlightLabel: 'Theological culmination' },
  { number: 11, name: 'Uddhava Gītā',       desc: 'Kṛṣṇa\'s final teachings to Uddhava; his departure from the world' },
  { number: 12, name: 'Kali Yuga',          desc: 'The dark age; the Bhāgavata itself declared the liberating text' },
]

export const BHAGAVATA_FIGURES: DeepDiveFigure[] = [
  { glyph: 'कृ',  name: 'Kṛṣṇa',    role: 'Supreme Bhagavān; the Bhāgavata\'s object of devotion and its theological subject throughout all 12 skandhas', note: '10th skandha — his complete life-story' },
  { glyph: 'शु',  name: 'Śuka',     role: 'Son of Veda Vyāsa; narrator who recites the entire Bhāgavata to the dying king Parīkṣit in seven days', note: 'Frame narrative · 1st–12th skandha' },
  { glyph: 'ना',  name: 'Nārada',   role: 'Divine sage and chief transmitter of bhakti; appears across all twelve skandhas as the connective thread', note: 'Bhāgavata\'s spiritual lineage' },
  { glyph: 'प्र', name: 'Prahlāda', role: 'Archetype of devotion under persecution; child who withstands his father Hiraṇyakaśipu\'s violence through steadfast bhakti', note: '7th skandha' },
  { glyph: 'ध्रु', name: 'Dhruva',  role: 'Child devotee who attains Viṣṇu through single-minded tapas at age five; becomes the Pole Star as divine reward', note: '4th skandha' },
  { glyph: 'ब्र', name: 'Brahmā',   role: 'The creator; first recipient of Viṣṇu\'s knowledge; his cosmogonic confusion and instruction open the 1st skandha', note: '1st–3rd skandha' },
]

export const BHAGAVATA_COMMENTATORS: Commentator[] = [
  { name: 'Śrīdhara Svāmī',          period: '14th century CE',  school: 'Advaita Vedānta',    schoolStyle: 'advaita', text: 'The standard Sanskrit commentary — every subsequent commentator engages with it. Reads the Bhāgavata through an Advaitic lens where Kṛṣṇa is Nirguṇa Brahman with qualities superimposed.',               workTitle: 'Bhāvārthadīpikā' },
  { name: 'Vallabhācārya',            period: '1479–1531 CE',     school: 'Śuddhādvaita',       schoolStyle: 'suddha',  text: 'Kṛṣṇa is Brahman himself — not an avatāra, not Nirguṇa, but the supremely personal absolute. Foundational for Puṣṭimārga; makes the 10th skandha the entire theological point.',           workTitle: 'Subodhini' },
  { name: 'Jīva Gosvāmī',            period: '1513–1598 CE',     school: 'Acintya-bhedābheda', schoolStyle: 'gaudi',   text: 'The most philosophically systematic commentary. Kṛṣṇa is simultaneously identical and different from the cosmos. Backbone of Gauḍīya Vaiṣṇavism; the six Sandarbhas form a complete theological system.', workTitle: 'Krama-sandarbha (6 Sandarbhas)' },
  { name: 'A.C. Bhaktivedanta Swami', period: '1896–1977 CE',     school: 'Gauḍīya · ISKCON',   schoolStyle: 'gaudi',   text: '18-volume English translation and commentary following Jīva Gosvāmī\'s framework. Brought the Bhāgavata to a global readership; the most widely read version outside India.',                              workTitle: 'Śrīmad Bhāgavatam (BBT, 1972–77)' },
]

export const BHAGAVATA_VERSE: PuranaVerse = {
  devanagari: 'जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः स्वराट्\nतेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरयः।\nतेजोवारिमृदां यथा विनिमयो यत्र त्रिसर्गोऽमृषा\nधाम्ना स्वेन सदा निरस्तकुहकं सत्यं परं धीमहि॥',
  translation: '"We meditate upon that Supreme Truth — from whom this cosmos springs and into whom it dissolves — self-sovereign, known by direct experience — before whom even the wise are bewildered — who by his own effulgence forever dispels illusion."',
  source: 'trans. after Śrīdhara Svāmī · Bhāvārthadīpikā',
  reference: 'Bhāgavata Purāṇa 1.1.1',
}
