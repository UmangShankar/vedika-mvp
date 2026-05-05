export interface TextEntry {
  title: string
  meta: string
  right: string
  href?: string   // path to an EXISTING page on the site — never /sources/[anything]
}

export interface CollectionTab {
  label: string
  key: string
}

export interface Collection {
  id: 'sruti' | 'smriti' | 'bhashya'
  name: string
  dot: 'purple' | 'teal' | 'amber'
  sub: string
  meta: string
  panelTitle: string
  tabs: CollectionTab[]
  texts: Record<string, TextEntry[]>
}

export interface CrossrefResult {
  coll: string
  badge: 'purple' | 'teal' | 'amber'
  texts: Array<{ title: string; meta: string; href?: string }>
}

export interface ConceptPage {
  heading: string
  desc: string
  results: CrossrefResult[]
}

export interface CompareRow {
  dimension: string
  advaita: string
  vishishtadvaita: string
  dvaita: string
}

export interface ComparePage {
  slug: string
  title: string
  desc: string
  columns: string[]
  rows: CompareRow[]
}

export const collections: Collection[] = [
  {
    id: 'sruti',
    name: 'Śruti',
    dot: 'purple',
    sub: 'Four Vedas, Brāhmaṇas, Āraṇyakas, and Upaniṣads. Primary textual strata with contextual reading notes.',
    meta: '14 texts · 4 categories',
    panelTitle: 'Śruti — primary revelation',
    tabs: [
      { label: 'All', key: 'all' },
      { label: 'Vedas', key: 'vedas' },
      { label: 'Upaniṣads', key: 'upanishads' },
      { label: 'Āraṇyakas', key: 'aranyakas' },
      { label: 'Brāhmaṇas', key: 'brahmanas' },
    ],
    texts: {
      all: [
        { title: 'Ṛgveda', meta: 'Saṃhitā · 10 maṇḍalas · 1,028 sūktas', right: 'c. 1500–1200 BCE', href: '/texts/rigveda' },
        { title: 'Sāmaveda', meta: 'Saṃhitā · liturgical melodies', right: 'c. 1200–800 BCE' },
        { title: 'Yajurveda', meta: 'Saṃhitā · ritual formulae (Śukla & Kṛṣṇa)', right: 'c. 1200–800 BCE' },
        { title: 'Atharvaveda', meta: 'Saṃhitā · 730 sūktas · 20 kāṇḍas', right: 'c. 1200–800 BCE' },
        { title: 'Bṛhadāraṇyaka Upaniṣad', meta: 'Principal Upaniṣad · Śukla Yajurveda', right: 'c. 800–600 BCE' },
        { title: 'Chāndogya Upaniṣad', meta: 'Principal Upaniṣad · Sāmaveda', right: 'c. 800–600 BCE', href: '/texts/chandogya-upanishad' },
        { title: 'Taittirīya Upaniṣad', meta: 'Principal Upaniṣad · Kṛṣṇa Yajurveda', right: 'c. 600 BCE' },
        { title: 'Muṇḍaka Upaniṣad', meta: 'Principal Upaniṣad · Atharvaveda', right: 'c. 400 BCE' },
        { title: 'Māṇḍūkya Upaniṣad', meta: 'Principal Upaniṣad · Atharvaveda · 12 verses', right: 'c. 200 BCE' },
        { title: 'Kaṭha Upaniṣad', meta: 'Principal Upaniṣad · Kṛṣṇa Yajurveda', right: 'c. 400 BCE' },
        { title: 'Aitareya Āraṇyaka', meta: 'Āraṇyaka · Ṛgveda', right: 'Forest text' },
        { title: 'Taittirīya Āraṇyaka', meta: 'Āraṇyaka · Kṛṣṇa Yajurveda', right: 'Forest text' },
        { title: 'Aitareya Brāhmaṇa', meta: 'Brāhmaṇa · Ṛgveda · 40 adhyāyas', right: 'Ritual manual' },
        { title: 'Śatapatha Brāhmaṇa', meta: 'Brāhmaṇa · Yajurveda · 100 adhyāyas', right: 'Ritual manual' },
      ],
      vedas: [
        { title: 'Ṛgveda', meta: 'Saṃhitā · 10 maṇḍalas · 1,028 sūktas', right: 'c. 1500–1200 BCE', href: '/texts/rigveda' },
        { title: 'Sāmaveda', meta: 'Saṃhitā · liturgical melodies', right: 'c. 1200–800 BCE' },
        { title: 'Yajurveda', meta: 'Saṃhitā · ritual formulae', right: 'c. 1200–800 BCE' },
        { title: 'Atharvaveda', meta: 'Saṃhitā · 730 sūktas', right: 'c. 1200–800 BCE' },
      ],
      upanishads: [
        { title: 'Bṛhadāraṇyaka Upaniṣad', meta: 'Principal · Śukla Yajurveda · 6 adhyāyas', right: 'c. 800 BCE' },
        { title: 'Chāndogya Upaniṣad', meta: 'Principal · Sāmaveda · 8 chapters', right: 'c. 800 BCE', href: '/texts/chandogya-upanishad' },
        { title: 'Taittirīya Upaniṣad', meta: 'Principal · Kṛṣṇa Yajurveda · 3 vallis', right: 'c. 600 BCE' },
        { title: 'Aitareya Upaniṣad', meta: 'Principal · Ṛgveda · 3 chapters', right: 'c. 600 BCE' },
        { title: 'Kaṭha Upaniṣad', meta: 'Principal · Kṛṣṇa Yajurveda · 2 adhyāyas', right: 'c. 400 BCE' },
        { title: 'Muṇḍaka Upaniṣad', meta: 'Principal · Atharvaveda · 3 muṇḍakas', right: 'c. 400 BCE' },
        { title: 'Māṇḍūkya Upaniṣad', meta: 'Principal · Atharvaveda · 12 verses', right: 'c. 200 BCE' },
        { title: 'Īśā Upaniṣad', meta: 'Principal · Śukla Yajurveda · 18 verses', right: 'c. 400 BCE' },
        { title: 'Praśna Upaniṣad', meta: 'Principal · Atharvaveda · 6 praśnas', right: 'c. 400 BCE' },
        { title: 'Śvetāśvatara Upaniṣad', meta: 'Minor · Kṛṣṇa Yajurveda', right: 'c. 400–200 BCE' },
      ],
      aranyakas: [
        { title: 'Aitareya Āraṇyaka', meta: 'Āraṇyaka · Ṛgveda · 5 books', right: 'c. 700 BCE' },
        { title: 'Taittirīya Āraṇyaka', meta: 'Āraṇyaka · Kṛṣṇa Yajurveda · 10 praśnas', right: 'c. 700 BCE' },
        { title: 'Śāṅkhāyana Āraṇyaka', meta: 'Āraṇyaka · Ṛgveda · 15 adhyāyas', right: 'c. 700 BCE' },
        { title: 'Bṛhadāraṇyaka', meta: 'Āraṇyaka/Upaniṣad · Śukla Yajurveda', right: 'c. 800 BCE' },
      ],
      brahmanas: [
        { title: 'Aitareya Brāhmaṇa', meta: 'Brāhmaṇa · Ṛgveda · 40 adhyāyas', right: 'c. 800 BCE' },
        { title: 'Śatapatha Brāhmaṇa', meta: 'Brāhmaṇa · Yajurveda · 100 adhyāyas', right: 'c. 700 BCE' },
        { title: 'Jaiminīya Brāhmaṇa', meta: 'Brāhmaṇa · Sāmaveda', right: 'c. 800 BCE' },
        { title: 'Gopatha Brāhmaṇa', meta: 'Brāhmaṇa · Atharvaveda', right: 'c. 500 BCE' },
      ],
    },
  },
  {
    id: 'smriti',
    name: 'Smṛti',
    dot: 'teal',
    sub: 'Dharmic and narrative corpus — Itihāsa, Mahāpurāṇas, Dharmaśāstra, and Sūtras.',
    meta: '31 texts · 6 categories',
    panelTitle: 'Smṛti — remembered corpus',
    tabs: [
      { label: 'All', key: 'all' },
      { label: 'Itihāsa', key: 'itihaasa' },
      { label: 'Purāṇas', key: 'puranas' },
      { label: 'Dharmaśāstra', key: 'dharmashastra' },
      { label: 'Sūtras', key: 'sutras' },
    ],
    texts: {
      all: [
        { title: 'Mahābhārata', meta: 'Itihāsa · includes Bhagavad Gītā · 18 parvans', right: 'c. 400 BCE–400 CE' },
        { title: 'Rāmāyaṇa', meta: 'Itihāsa · Vālmīki · 7 kāṇḍas', right: 'c. 500–200 BCE', href: '/texts/ramayana' },
        { title: 'Harivaṃśa', meta: 'Itihāsa · supplement to Mahābhārata', right: 'c. 1st–4th c. CE' },
        { title: 'Bhagavata Purāṇa', meta: 'Mahāpurāṇa · Vaiṣṇava · 12 skandhas', right: 'c. 6th–10th c. CE', href: '/puranas/bhagavata' },
        { title: 'Viṣṇu Purāṇa', meta: 'Mahāpurāṇa · Vaiṣṇava · 6 aṃśas', right: 'c. 1st–4th c. CE' },
        { title: 'Śiva Purāṇa', meta: 'Mahāpurāṇa · Śaiva · 7 saṃhitās', right: 'c. 3rd–10th c. CE' },
        { title: 'Manusmṛti', meta: 'Dharmaśāstra · law code · 12 adhyāyas', right: 'c. 200 BCE–200 CE' },
        { title: 'Yājñavalkya Smṛti', meta: 'Dharmaśāstra · 3 adhyāyas', right: 'c. 100–300 CE' },
        { title: 'Brahmasūtras', meta: 'Vedāntasūtra · Bādarāyaṇa · 555 sūtras', right: 'c. 400–200 BCE' },
        { title: 'Mīmāṃsāsūtras', meta: 'Sūtra · Jaimini · 12 adhyāyas', right: 'c. 300 BCE' },
      ],
      itihaasa: [
        { title: 'Mahābhārata', meta: 'Itihāsa · 18 parvans · includes Bhagavad Gītā', right: 'c. 400 BCE–400 CE' },
        { title: 'Rāmāyaṇa', meta: 'Itihāsa · Vālmīki · 7 kāṇḍas · 24,000 ślokas', right: 'c. 500–200 BCE', href: '/texts/ramayana' },
        { title: 'Harivaṃśa', meta: 'Itihāsa · supplement to Mahābhārata · 3 sections', right: 'c. 1st–4th c. CE' },
      ],
      puranas: [
        { title: 'Bhagavata Purāṇa', meta: 'Mahāpurāṇa · Vaiṣṇava · 12 skandhas', right: 'c. 6th–10th c. CE', href: '/puranas/bhagavata' },
        { title: 'Viṣṇu Purāṇa', meta: 'Mahāpurāṇa · Vaiṣṇava · 6 aṃśas', right: 'c. 1st–4th c. CE' },
        { title: 'Śiva Purāṇa', meta: 'Mahāpurāṇa · Śaiva · 7 saṃhitās', right: 'c. 3rd–10th c. CE' },
        { title: 'Devī Bhāgavata Purāṇa', meta: 'Mahāpurāṇa · Śākta · 12 skandhas', right: 'c. 6th–11th c. CE' },
        { title: 'Mārkaṇḍeya Purāṇa', meta: 'Mahāpurāṇa · includes Devī Māhātmya', right: 'c. 3rd–7th c. CE' },
      ],
      dharmashastra: [
        { title: 'Manusmṛti', meta: 'Dharmaśāstra · 12 adhyāyas · law code', right: 'c. 200 BCE–200 CE' },
        { title: 'Yājñavalkya Smṛti', meta: 'Dharmaśāstra · 3 adhyāyas', right: 'c. 100–300 CE' },
        { title: 'Viṣṇu Smṛti', meta: 'Dharmaśāstra · 100 adhyāyas · Vaiṣṇava law', right: 'c. 1st–3rd c. CE' },
        { title: 'Parāśara Smṛti', meta: 'Dharmaśāstra · law for the Kali yuga', right: 'c. 3rd–5th c. CE' },
      ],
      sutras: [
        { title: 'Brahmasūtras (Vedāntasūtra)', meta: 'Sūtra · Bādarāyaṇa · 555 sūtras · 4 adhyāyas', right: 'c. 400–200 BCE' },
        { title: 'Mīmāṃsāsūtras', meta: 'Sūtra · Jaimini · 12 adhyāyas', right: 'c. 300 BCE' },
        { title: 'Nyāyasūtras', meta: 'Sūtra · Gautama · 5 adhyāyas', right: 'c. 200 BCE' },
        { title: 'Vaiśeṣikasūtras', meta: 'Sūtra · Kaṇāda · 10 adhyāyas', right: 'c. 200 BCE' },
        { title: 'Yogasūtras', meta: 'Sūtra · Patañjali · 4 pādas · 196 sūtras', right: 'c. 400 CE' },
        { title: 'Sāṃkhyakārikā', meta: 'Sūtra · Īśvarakṛṣṇa · 72 kārikās', right: 'c. 400 CE' },
      ],
    },
  },
  {
    id: 'bhashya',
    name: 'Bhāṣya & Ṭīkā',
    dot: 'amber',
    sub: 'Classical commentaries by Śaṅkara, Rāmānuja, Madhva and subsequent sub-commentators.',
    meta: '22 texts · 8 schools',
    panelTitle: 'Bhāṣya & Ṭīkā — classical commentary',
    tabs: [
      { label: 'All', key: 'all' },
      { label: 'Advaita', key: 'advaita' },
      { label: 'Viśiṣṭādvaita', key: 'vishishtadvaita' },
      { label: 'Dvaita', key: 'dvaita' },
      { label: 'Other schools', key: 'other' },
    ],
    texts: {
      all: [
        { title: 'Brahmasūtra Bhāṣya', meta: 'Bhāṣya · Śaṅkarācārya · Advaita · 4 adhyāyas', right: 'c. 8th c. CE', href: '/texts/brahmasutra-bhashya' },
        { title: 'Gītā Bhāṣya', meta: 'Bhāṣya · Śaṅkarācārya · Advaita · 18 adhyāyas', right: 'c. 8th c. CE' },
        { title: 'Vivekacūḍāmaṇi', meta: 'Prakaraṇa · Śaṅkarācārya · 580 verses', right: 'c. 8th c. CE' },
        { title: 'Śrī Bhāṣya', meta: 'Bhāṣya · Rāmānuja · Viśiṣṭādvaita', right: 'c. 11th c. CE' },
        { title: 'Brahmasūtra Bhāṣya', meta: 'Bhāṣya · Rāmānuja · Viśiṣṭādvaita', right: 'c. 11th c. CE' },
        { title: 'Vedārthasaṃgraha', meta: 'Prakaraṇa · Rāmānuja · scriptural synthesis', right: 'c. 11th c. CE' },
        { title: 'Brahmasūtra Bhāṣya', meta: 'Bhāṣya · Madhvācārya · Dvaita · 4 adhyāyas', right: 'c. 13th c. CE' },
        { title: 'Anuvyākhyāna', meta: 'Ṭīkā · Madhvācārya · verse commentary', right: 'c. 13th c. CE' },
        { title: 'Pañcadaśī', meta: 'Prakaraṇa · Vidyāraṇya Svāmī · 15 prakaraṇas', right: 'c. 14th c. CE' },
        { title: 'Gauḍapādīya Kārikā', meta: 'Kārikā · Gauḍapāda · on Māṇḍūkya', right: 'c. 6th–7th c. CE' },
      ],
      advaita: [
        { title: 'Brahmasūtra Bhāṣya', meta: 'Śaṅkarācārya · 4 adhyāyas · 555 sūtras', right: 'c. 8th c. CE', href: '/texts/brahmasutra-bhashya' },
        { title: 'Gītā Bhāṣya', meta: 'Śaṅkarācārya · 18 adhyāyas', right: 'c. 8th c. CE' },
        { title: 'Māṇḍūkya Kārikā Bhāṣya', meta: 'Śaṅkarācārya · on Gauḍapāda', right: 'c. 8th c. CE' },
        { title: 'Upadeśasāhasrī', meta: 'Śaṅkarācārya · prose + verse', right: 'c. 8th c. CE' },
        { title: 'Vivekacūḍāmaṇi', meta: 'Śaṅkarācārya · 580 verses · introductory', right: 'c. 8th c. CE' },
        { title: 'Pañcadaśī', meta: 'Vidyāraṇya Svāmī · 15 prakaraṇas', right: 'c. 14th c. CE' },
        { title: 'Gauḍapādīya Kārikā', meta: 'Gauḍapāda · 4 prakaraṇas · on Māṇḍūkya', right: 'c. 6th–7th c. CE' },
      ],
      vishishtadvaita: [
        { title: 'Śrī Bhāṣya', meta: 'Rāmānuja · on Brahmasūtras', right: 'c. 11th c. CE' },
        { title: 'Brahmasūtra Bhāṣya', meta: 'Rāmānuja · Viśiṣṭādvaita · 4 adhyāyas', right: 'c. 11th c. CE' },
        { title: 'Gītā Bhāṣya', meta: 'Rāmānuja · 18 adhyāyas', right: 'c. 11th c. CE' },
        { title: 'Vedārthasaṃgraha', meta: 'Rāmānuja · scriptural synthesis', right: 'c. 11th c. CE' },
        { title: 'Vedāntatattvasāra', meta: 'Rāmānuja · summary treatise', right: 'c. 11th c. CE' },
      ],
      dvaita: [
        { title: 'Brahmasūtra Bhāṣya', meta: 'Madhvācārya · Dvaita · 4 adhyāyas', right: 'c. 13th c. CE' },
        { title: 'Anuvyākhyāna', meta: 'Madhvācārya · verse commentary on Brahmasūtras', right: 'c. 13th c. CE' },
        { title: 'Gītā Bhāṣya', meta: 'Madhvācārya · 18 adhyāyas', right: 'c. 13th c. CE' },
        { title: 'Mahābhārata Tātparya Nirṇaya', meta: 'Madhvācārya · on Mahābhārata', right: 'c. 13th c. CE' },
      ],
      other: [
        { title: 'Brahmasūtra Bhāṣya', meta: 'Vallabhācārya · Śuddhādvaita', right: 'c. 15th–16th c. CE' },
        { title: 'Brahmasūtra Bhāṣya', meta: 'Nimbārka · Dvaitādvaita', right: 'c. 12th–13th c. CE' },
        { title: 'Prabhākara Mīmāṃsā', meta: 'Prabhākara · Mīmāṃsā school', right: 'c. 7th c. CE' },
        { title: 'Ślokavārttika', meta: 'Kumārila Bhaṭṭa · Mīmāṃsā · verse commentary', right: 'c. 7th c. CE' },
      ],
    },
  },
]

export const concepts: Record<string, ConceptPage> = {
  atman: {
    heading: 'Ātman — across collections',
    desc: 'All source texts addressing the nature of the individual self, organised by textual authority.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Chāndogya Upaniṣad 6.8–16', meta: 'tat tvam asi — nine parables identifying ātman with Brahman', href: '/texts/chandogya-upanishad' },
        { title: 'Bṛhadāraṇyaka Upaniṣad 3.4', meta: '"neti neti" — Yājñavalkya\'s apophatic definition of ātman' },
        { title: 'Māṇḍūkya Upaniṣad 1–12', meta: 'Four states of consciousness — avasthā-traya' },
        { title: 'Kaṭha Upaniṣad 1.2.18–19', meta: 'Naciketa and Yama on the immortality of the self' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Bhagavad Gītā 2.17–25', meta: 'Kṛṣṇa\'s teaching on the indestructibility of the self to Arjuna' },
        { title: 'Bhagavad Gītā 13.19–34', meta: 'Distinction between kṣetra (field) and kṣetrajña (knower of field)' },
        { title: 'Brahmasūtras 1.1.1', meta: '"Athāto brahmajijñāsā" — the inquiry into Brahman as ātman' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Brahmasūtra Bhāṣya (Śaṅkara) 1.1.1', meta: 'Ātman and Brahman are numerically identical — adhyāsa as the root problem', href: '/texts/brahmasutra-bhashya' },
        { title: 'Śrī Bhāṣya (Rāmānuja) intro', meta: 'Ātman is a real but dependent mode (prakāra) of Brahman' },
        { title: 'Vivekacūḍāmaṇi 204–260', meta: 'Śaṅkara\'s systematic account of ātman as pure witness consciousness' },
      ]},
    ],
  },
  brahman: {
    heading: 'Brahman — across collections',
    desc: 'Source texts on the ultimate ground of being — from Vedic hymns to systematic commentary.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Taittirīya Upaniṣad 2.1', meta: '"Brahman is sat (being), cit (consciousness), ānanda (bliss)" — saccidānanda' },
        { title: 'Chāndogya Upaniṣad 3.14', meta: '"Sarvam khalv idaṃ brahma" — all this is Brahman', href: '/texts/chandogya-upanishad' },
        { title: 'Bṛhadāraṇyaka Upaniṣad 1.4.10', meta: '"Ahaṃ brahmāsmi" — I am Brahman (second mahāvākya)' },
        { title: 'Muṇḍaka Upaniṣad 2.2.5', meta: 'Brahman as the source from which all beings arise' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Brahmasūtras 1.1.2', meta: '"Janmādyasya yataḥ" — Brahman as origin of the world' },
        { title: 'Bhagavad Gītā 10.8–11', meta: 'Kṛṣṇa as Brahman — the supreme source of all creation' },
        { title: 'Viṣṇu Purāṇa 1.1', meta: 'Brahman as para-vāsudeva in Vaiṣṇava cosmology' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Brahmasūtra Bhāṣya (Śaṅkara) 1.1.2', meta: 'Brahman as nirguṇa — without qualities; Saguṇa Brahman as provisional', href: '/texts/brahmasutra-bhashya' },
        { title: 'Śrī Bhāṣya intro — Rāmānuja', meta: 'Brahman as Viṣṇu — personal, qualified, omniscient, omnipotent' },
      ]},
    ],
  },
  karma: {
    heading: 'Karma — across collections',
    desc: 'The doctrine of action and consequence across textual strata — from Vedic ritual to philosophical analysis.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Bṛhadāraṇyaka Upaniṣad 3.2.13', meta: '"As a man acts, so does he become" — foundational karmic statement' },
        { title: 'Chāndogya Upaniṣad 5.10', meta: 'Two paths after death — pitṛyāna and devayāna', href: '/texts/chandogya-upanishad' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Bhagavad Gītā 3.4–9', meta: 'Karmayoga — action without attachment to fruits (naiṣkarmya)' },
        { title: 'Bhagavad Gītā 18.41–44', meta: 'Varṇa-karma — prescribed duties by social nature' },
        { title: 'Manusmṛti 12.1–24', meta: 'Karmic consequences and future births — systematic classification' },
        { title: 'Yogasūtras 2.12–14', meta: 'Karmāśaya — the storehouse of karmic residues (saṃskāras)' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Mīmāṃsāsūtras (Jaimini)', meta: 'Karma as cosmic mechanism — Mīmāṃsā prioritises karmakāṇḍa' },
        { title: 'Brahmasūtra Bhāṣya (Śaṅkara)', meta: 'Karma as operating within māyā — jñāna ultimately supersedes karma', href: '/texts/brahmasutra-bhashya' },
      ]},
    ],
  },
  moksha: {
    heading: 'Mokṣa — across collections',
    desc: 'Liberation from saṃsāra — its nature, means, and whether merger or proximity.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Muṇḍaka Upaniṣad 3.1.2', meta: '"The knower of Brahman becomes Brahman" — identity view of liberation' },
        { title: 'Kaṭha Upaniṣad 2.3.12–15', meta: 'Mokṣa as beyond the senses — the soundless, bodiless state' },
        { title: 'Bṛhadāraṇyaka Upaniṣad 4.4.6–7', meta: 'Liberation as the dissolution of individuality into Brahman' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Bhagavad Gītā 18.54–56', meta: 'Brahman-realisation and the four paths — jñāna, bhakti, karma, rāja' },
        { title: 'Brahmasūtras 4.4.1–7', meta: 'Mukti and the state of the liberated soul' },
        { title: 'Yogasūtras 4.29–34', meta: 'Dharmamegha samādhi and kaivalya — final liberation in Yoga darśana' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Brahmasūtra Bhāṣya (Śaṅkara) 4.4', meta: 'Mukti is the removal of avidyā — no new state is produced', href: '/texts/brahmasutra-bhashya' },
        { title: 'Śrī Bhāṣya (Rāmānuja) 4.4', meta: 'Mokṣa as eternal loving proximity to Viṣṇu — distinct souls remain' },
        { title: 'Anuvyākhyāna (Madhva)', meta: 'Mokṣa as ānanda in the presence of Viṣṇu — permanent distinction of jīvas' },
      ]},
    ],
  },
  dharma: {
    heading: 'Dharma — across collections',
    desc: 'Cosmic order, ethical duty, and social law — from Ṛta in the Ṛgveda to Manusmṛti.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Ṛgveda 1.23.5', meta: 'Ṛta — cosmic order as precursor to the concept of Dharma', href: '/texts/rigveda' },
        { title: 'Taittirīya Upaniṣad 1.11', meta: '"Satyaṃ vada, dharmaṃ cara" — speak truth, follow dharma' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Manusmṛti 1.1–119', meta: 'Comprehensive dharmaśāstra — varnāśramadharma, sadācāra, state law' },
        { title: 'Bhagavad Gītā 2.31–37', meta: 'Svadharma and kṣatradharma — Arjuna\'s duty as warrior' },
        { title: 'Mahābhārata Śāntiparva', meta: 'Extensive treatment of rājadharma and āpaddharma (dharma in extremity)' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Mīmāṃsāsūtras 1.1.2', meta: '"Codanā-lakṣaṇo\'rtho dharmaḥ" — dharma as that which is enjoined by Vedic injunction' },
      ]},
    ],
  },
  maya: {
    heading: 'Māyā — across collections',
    desc: 'The concept of cosmic illusion and ignorance — from early Vedic usage to systematic Advaita ontology.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Śvetāśvatara Upaniṣad 4.10', meta: 'Māyā as the creative power (śakti) of Brahman — divine conjuring' },
        { title: 'Ṛgveda 10.177.1', meta: 'Māyin — the wielder of māyā as a cosmological power (early usage)', href: '/texts/rigveda' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Bhagavad Gītā 7.14–15', meta: 'Kṛṣṇa\'s daivī māyā — divine illusion difficult to transcend' },
        { title: 'Bhagavad Gītā 18.61', meta: 'Beings revolving on the machine of māyā' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Brahmasūtra Bhāṣya (Śaṅkara)', meta: 'Māyā as beginningless, indescribable (anirvacanīya) — neither being nor non-being', href: '/texts/brahmasutra-bhashya' },
        { title: 'Pañcadaśī (Vidyāraṇya)', meta: 'Systematic treatment of māyā, avidyā, and their relationship to Brahman' },
      ]},
    ],
  },
  time: {
    heading: 'Time & cosmology — across collections',
    desc: 'Vedic and Purāṇic accounts of cosmic time, the yuga cycle, and creation.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Ṛgveda 10.129 (Nāsadīya Sūkta)', meta: 'Cosmogonic speculation — before existence and non-existence', href: '/texts/rigveda' },
        { title: 'Chāndogya Upaniṣad 3.11', meta: 'The sun as foundation of time — Vedic cosmology', href: '/texts/chandogya-upanishad' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Viṣṇu Purāṇa 1.3', meta: 'Four yugas — Kṛta, Tretā, Dvāpara, Kali — with exact durations' },
        { title: 'Bhagavata Purāṇa 3.11', meta: 'Atomic time (paramāṇu) to Brahma\'s lifespan — Purāṇic time scale', href: '/puranas/bhagavata' },
        { title: 'Manusmṛti 1.64–80', meta: 'Yuga lengths and the progression of dharma through cosmic ages' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Brahmasūtra Bhāṣya (Śaṅkara) 2.3', meta: 'Time as a product of māyā — Advaita treatment of temporal cosmology', href: '/texts/brahmasutra-bhashya' },
      ]},
    ],
  },
  ethics: {
    heading: 'Ethics — across collections',
    desc: 'Moral philosophy across collections — from Vedic injunction to systematic ethical reasoning.',
    results: [
      { coll: 'Śruti', badge: 'purple', texts: [
        { title: 'Taittirīya Upaniṣad 1.11', meta: '"Satyaṃ vada, dharmaṃ cara" — speak truth, practise righteousness' },
        { title: 'Īśā Upaniṣad 1', meta: 'Renunciation and enjoyment — the foundational ethical tension' },
      ]},
      { coll: 'Smṛti', badge: 'teal', texts: [
        { title: 'Bhagavad Gītā 3.9–16', meta: 'Yajña as ethical framework — action as sacrifice, not self-interest' },
        { title: 'Manusmṛti 2.1–24', meta: 'Ācāra — proper conduct as the root of dharma' },
        { title: 'Yogasūtras 2.30–45', meta: 'Yamas and niyamas — the ethical and observational foundations of Yoga' },
      ]},
      { coll: 'Bhāṣya', badge: 'amber', texts: [
        { title: 'Mīmāṃsāsūtras (Jaimini)', meta: 'Vedic injunction (vidhi) as the only valid basis for ethical obligation' },
        { title: 'Śrī Bhāṣya intro (Rāmānuja)', meta: 'Bhakti as the supreme ethical orientation — devotion as both means and end' },
      ]},
    ],
  },
}

export const comparePages: Record<string, ComparePage> = {
  'bhashya-schools': {
    slug: 'bhashya-schools',
    title: 'Advaita · Viśiṣṭādvaita · Dvaita — commentary tradition',
    desc: 'The three principal Vedāntic schools each produced a bhāṣya on the prasthānatrayī. Their divergences are not merely interpretive but reflect fundamentally different ontologies.',
    columns: ['Advaita (Śaṅkara)', 'Viśiṣṭādvaita (Rāmānuja)', 'Dvaita (Madhva)'],
    rows: [
      {
        dimension: 'Brahman',
        advaita: 'Nirguṇa — without attributes; pure consciousness',
        vishishtadvaita: 'Saguṇa — possesses real attributes; identical with Viṣṇu',
        dvaita: 'Saguṇa — Viṣṇu as supreme personal deity',
      },
      {
        dimension: 'Ātman–Brahman',
        advaita: 'Numerically identical (aikya). Difference is superimposition (adhyāsa)',
        vishishtadvaita: 'Ātman is a real mode (prakāra) of Brahman — distinct but inseparable',
        dvaita: 'Ātman and Brahman are eternally and fundamentally distinct (bheda)',
      },
      {
        dimension: 'World (jagat)',
        advaita: 'Mithyā — not absolutely real; appearance on Brahman',
        vishishtadvaita: 'Real, but a real body of Brahman (śarīra)',
        dvaita: 'Real and permanently distinct from Brahman',
      },
      {
        dimension: 'Māyā',
        advaita: 'Cosmic ignorance obscuring the non-dual truth',
        vishishtadvaita: 'Rejected; world is not illusory but real and divine',
        dvaita: 'Rejected; world is genuinely other than Brahman',
      },
      {
        dimension: 'Liberation (mokṣa)',
        advaita: 'Removal of ignorance; realisation of pre-existing identity with Brahman',
        vishishtadvaita: 'Eternal, loving proximity to Brahman — not merger',
        dvaita: 'Eternal bliss in devotion to Viṣṇu; no merger, permanent distinction preserved',
      },
      {
        dimension: 'Primary bhāṣya',
        advaita: 'Brahmasūtra Bhāṣya (8th c.)',
        vishishtadvaita: 'Śrī Bhāṣya (11th c.)',
        dvaita: 'Brahmasūtra Bhāṣya (13th c.)',
      },
      {
        dimension: 'tat tvam asi reading',
        advaita: 'Numerical identity of jīva and Brahman',
        vishishtadvaita: 'Qualified identity — jīva is a mode of Brahman',
        dvaita: 'Similarity (sādṛśya), not identity',
      },
    ],
  },
}
