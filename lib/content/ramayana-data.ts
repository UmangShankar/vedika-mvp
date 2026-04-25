export type KandaItem = {
  number: number;
  devanagari: string;
  name: string;
  sargas: number;
  shlokas: number;
  description: string;
  events: string[];
  manasDeviation?: { heading: string; body: string };
  visualVariant?: 'primary' | 'muted' | 'highlighted';
};

export type TraditionCard = {
  language: string;
  name: string;
  author: string;
  period: string;
  isPrimary?: boolean;
};

export type CharacterCard = {
  glyph: string;
  name: string;
  role: string;
  note?: string;
};

export type ShlokaBlock = {
  devanagari: string;
  translation: string;
  source: string;
  reference: string;
};

export const RAMAYANA_KANDAS: KandaItem[] = [
  {
    number: 1,
    devanagari: 'बाल',
    name: 'Bāla Kāṇḍa',
    sargas: 77,
    shlokas: 2115,
    description:
      "The childhood kāṇḍa. Rāma is born to Kausalyā following King Daśaratha's Putrakāmeṣṭi yajña. Viśvāmitra takes Rāma and Lakṣmaṇa to protect his forest sacrifice — Rāma slays the rākṣasī Tāṭakā and liberates Ahalyā. At the svayaṃvara in Mithilā, Rāma alone lifts and strings the divine bow of Śiva (Pināka) and weds Sītā.",
    events: [
      'Putrakāmeṣṭi yajña',
      'Birth of Rāma',
      'Tāṭakā-vadha',
      "Ahalyā's liberation",
      'Sītā svayaṃvara',
      'Paraśurāma encounter',
    ],
    manasDeviation: {
      heading: 'Rāmcaritmānas differs',
      body: "In Vālmīki, Ahalyā is transformed into stone until Rāma's touch liberates her. In Tulsīdāsa's telling, she waits invisible — not as stone — and is released by Rāma's sight. The metaphysical implication shifts: Vālmīki emphasises physical transformation; Tulsīdāsa emphasises spiritual invisibility and devotional waiting.",
    },
  },
  {
    number: 2,
    devanagari: 'अयोध्या',
    name: 'Ayodhyā Kāṇḍa',
    sargas: 119,
    shlokas: 4030,
    description:
      "The largest and most psychologically dense kāṇḍa. Daśaratha plans Rāma's coronation; Mantharā turns Kaikeyī's mind; Kaikeyī invokes her two boons — Bharata's coronation and Rāma's fourteen-year exile. Daśaratha is shattered but honour-bound. Rāma accepts without complaint. He departs with Sītā and Lakṣmaṇa. Daśaratha dies of grief. Bharata refuses the throne, placing Rāma's pādukā on the seat as regent.",
    events: [
      'Coronation announced',
      "Kaikeyī's boons",
      "Rāma's exile",
      "Daśaratha's death",
      "Bharata's pādukā-rājya",
      'Guha of Śṛṅgaverapura',
    ],
    manasDeviation: {
      heading: 'Rāmcaritmānas differs',
      body: "Tulsīdāsa frames Kaikeyī's demand as divinely orchestrated — Sarasvatī is said to have distorted her speech. This substantially reduces her moral agency: the event becomes cosmically predetermined. Vālmīki is harsher toward Kaikeyī and gives her full human agency in her decision.",
    },
  },
  {
    number: 3,
    devanagari: 'अरण्य',
    name: 'Araṇya Kāṇḍa',
    sargas: 75,
    shlokas: 2387,
    description:
      "The forest exile. Moving through the Daṇḍaka forest, Rāma annihilates Khara's army of 14,000 single-handedly after Śūrpaṇakhā's disfigurement. Rāvaṇa, enchanted by Sītā's description, plots her abduction using Mārīca as a golden deer. Sītā is taken. The vulture Jaṭāyu fights Rāvaṇa and is mortally wounded. Rāma finds Jaṭāyu dying and learns of the abduction.",
    events: [
      'Viradha-vadha',
      "Śūrpaṇakhā's mutilation",
      'Khara-Dūṣaṇa war',
      "Mārīca's golden deer",
      "Sītā's abduction",
      "Jaṭāyu's sacrifice",
    ],
    manasDeviation: {
      heading: 'Rāmcaritmānas differs',
      body: "Tulsīdāsa introduces chāyā-Sītā (shadow-Sītā): before the abduction, the real Sītā is placed in Agni's care and an illusory Sītā is taken by Rāvaṇa. This device is entirely absent in Vālmīki. It resolves theological discomfort about Sītā's contact with Rāvaṇa and aligns with the Adhyātma Rāmāyaṇa tradition.",
    },
  },
  {
    number: 4,
    devanagari: 'किष्किन्धा',
    name: 'Kiṣkindhā Kāṇḍa',
    sargas: 67,
    shlokas: 2665,
    description:
      "Rāma meets Hanumān and through him, Sugrīva — the exiled vānara king. Rāma slays Vāli from concealment to restore Sugrīva's kingdom; Sugrīva pledges his army to find Sītā. Search parties are dispatched in all directions. Only the southern party, led by Aṅgada with Hanumān, receives intelligence of Sītā in Laṅkā from the vulture Sampāti.",
    events: [
      'Meeting Hanumān',
      'Sugrīva pact',
      'Vāli-vadha',
      "Sugrīva's coronation",
      'Search parties sent',
      "Sampāti's intelligence",
    ],
    manasDeviation: {
      heading: 'Rāmcaritmānas differs',
      body: "Tulsīdāsa softens the Vāli episode's moral tension. In Vālmīki, Vāli delivers a powerful speech directly challenging the ethics of being killed from concealment — Rāma's formal dharmic response is considered strained by some readers. Tulsīdāsa gives far less space to this philosophical challenge, framing the act more straightforwardly as righteous.",
    },
  },
  {
    number: 5,
    devanagari: 'सुन्दर',
    name: 'Sundara Kāṇḍa',
    sargas: 68,
    shlokas: 2885,
    visualVariant: 'highlighted',
    description:
      "The 'beautiful' kāṇḍa — named for Hanumān's grace, the lyricism of the verses, or the island of Laṅkā itself. Hanumān leaps the ocean, searches Laṅkā, discovers Sītā in the Aśoka grove. He offers to carry her back; Sītā refuses — only Rāma must rescue her, to uphold honour. Hanumān delivers Rāma's message, allows his capture, is brought before Rāvaṇa. His tail is set alight; he burns Laṅkā and returns with Sītā's chūḍāmaṇi.",
    events: [
      'Ocean crossing',
      'Laṅkā reconnaissance',
      'Sītā in Aśoka grove',
      "Rāma's message delivered",
      'Laṅkā-dahana',
      'Chūḍāmaṇi returned',
    ],
  },
  {
    number: 6,
    devanagari: 'युद्ध',
    name: 'Yuddha Kāṇḍa',
    sargas: 128,
    shlokas: 5700,
    description:
      "The war kāṇḍa — the longest. The vānara army crosses the ocean via Nala's setu. Rāvaṇa's brother Vibhīṣaṇa defects to Rāma. Kumbhakarṇa, Indrajit (Meghanāda), and Rāvaṇa himself are slain across days of battle. Sītā undergoes agni-parīkṣā — Agni himself testifies to her purity. Rāma returns to Ayodhyā; the fourteen-year exile ends; Rāma is crowned.",
    events: [
      'Nala-setu construction',
      "Vibhīṣaṇa's defection",
      'Kumbhakarṇa-vadha',
      'Indrajit-vadha',
      'Rāvaṇa-vadha',
      'Agni-parīkṣā',
      'Return to Ayodhyā',
    ],
    manasDeviation: {
      heading: 'Rāmcaritmānas differs',
      body: "In Tulsīdāsa, the chāyā-Sītā (shadow) enters the fire — a ritual exchange, not a chastity test. The real Sītā emerges restored. In Vālmīki there is no shadow-Sītā; the agni-parīkṣā is genuine, and Rāma's prior rejection of Sītā before the test is dramatically stark and theologically complex.",
    },
  },
  {
    number: 7,
    devanagari: 'उत्तर',
    name: 'Uttara Kāṇḍa',
    sargas: 111,
    shlokas: 3195,
    visualVariant: 'muted',
    description:
      "The 'later' kāṇḍa — considered by many scholars a later addition to the original six. Rāma rules Ayodhyā. A washerman's slur about accepting a wife who lived in another's house reaches him. Though convinced of Sītā's purity, Rāma as king sends the pregnant Sītā into forest exile. She takes refuge with Vālmīki and gives birth to Lava and Kuśa. At a great yajña, the twins sing the Rāmāyaṇa before Rāma. Sītā is summoned — and invokes the earth to reclaim her. Rāma eventually attains jala-samādhi in the Sarayū.",
    events: [
      'Rāma-rājya',
      "Sītā's second exile",
      'Lava–Kuśa born',
      'Rāmāyaṇa sung to Rāma',
      "Sītā's return to earth",
      "Rāma's jala-samādhi",
    ],
    manasDeviation: {
      heading: 'Rāmcaritmānas differs — significantly',
      body: "Tulsīdāsa's Mānas largely omits Sītā's second exile and the darker episodes of the Uttara Kāṇḍa entirely. The text ends on the celebration of Rāma's coronation and reign — Rāma-rājya as the fulfilment of the bhakti vision. This is a deliberate theological choice: the Mānas is a devotional poem oriented toward Rāma's divine glory, not a chronicle of political tragedy. Note also that the Uttara Kāṇḍa's own authenticity is debated within the Vālmīki tradition itself.",
    },
  },
];

export const RAMAYANA_TRADITIONS: TraditionCard[] = [
  {
    language: 'Sanskrit',
    name: 'Vālmīki Rāmāyaṇa',
    author: 'Vālmīki Maharṣi',
    period: '~5th–1st century BCE · Primary source',
    isPrimary: true,
  },
  {
    language: 'Awadhi Hindi',
    name: 'Rāmcaritmānas',
    author: 'Tulsīdāsa',
    period: '16th century CE · Bhakti tradition',
  },
  {
    language: 'Tamil',
    name: 'Irāmāvatāram',
    author: 'Kambar',
    period: '12th century CE · Śaiva-Vaiṣṇava',
  },
  {
    language: 'Bengali',
    name: 'Kṛttivāsī Rāmāyaṇa',
    author: 'Kṛttivāsa Ojhā',
    period: '15th century CE',
  },
  {
    language: 'Telugu',
    name: 'Raṅganātha Rāmāyaṇa',
    author: 'Goṇa Buddha Reddy',
    period: '13th century CE',
  },
  {
    language: 'Marathi',
    name: 'Bhāvartha Rāmāyaṇa',
    author: 'Eknātha',
    period: '16th century CE',
  },
  {
    language: 'Malayalam',
    name: 'Adhyātma Rāmāyaṇam',
    author: 'Ezhuthachan',
    period: '16th century CE · Kilippaṭṭu style',
  },
  {
    language: 'Sanskrit · Philosophical',
    name: 'Adhyātma Rāmāyaṇa',
    author: 'Part of Brahmāṇḍa Purāṇa',
    period: 'Medieval · Advaita framing',
  },
  {
    language: 'Sanskrit · Tantric',
    name: 'Adbhuta Rāmāyaṇa',
    author: 'Attr. Vālmīki',
    period: 'Medieval · Śakta emphasis',
  },
  {
    language: 'Kannada',
    name: 'Torave Rāmāyaṇa',
    author: 'Narahari',
    period: '16th century CE',
  },
];

export const RAMAYANA_CHARACTERS: CharacterCard[] = [
  {
    glyph: 'रा',
    name: 'Rāma',
    role: 'Son of Daśaratha; seventh avatāra of Viṣṇu (implicit in Vālmīki, explicit in Uttara Kāṇḍa)',
    note: 'Maryādā Puruṣottama — the ideal of righteous conduct',
  },
  {
    glyph: 'सी',
    name: 'Sītā',
    role: "Daughter of Janaka; born from the earth; Rāma's wife",
    note: 'Her agency and suffering are more prominent in Vālmīki than in many later retellings',
  },
  {
    glyph: 'ह',
    name: 'Hanumān',
    role: 'Vānara; son of Vāyu; minister of Sugrīva; devotee of Rāma',
    note: 'The Sundara Kāṇḍa is effectively his kāṇḍa',
  },
  {
    glyph: 'र',
    name: 'Rāvaṇa',
    role: 'King of Laṅkā; great scholar; devotee of Śiva; antagonist',
    note: 'In Vālmīki, complex — mighty, learned, undone by kāma',
  },
  {
    glyph: 'ल',
    name: 'Lakṣmaṇa',
    role: "Rāma's inseparable brother; son of Sumitrā",
    note: 'Embodies service and fraternal devotion without self-annihilation',
  },
  {
    glyph: 'भ',
    name: 'Bharata',
    role: "Son of Kaikeyī; refuses kingship; rules with Rāma's sandals as proxy",
    note: 'The archetype of renunciation in service of dharma',
  },
];

export const RAMAYANA_SHLOKA: ShlokaBlock = {
  devanagari:
    'मा निषाद प्रतिष्ठां त्वमगमः शाश्वतीः समाः।\nयत्क्रौञ्चमिथुनादेकमवधीः काममोहितम्॥',
  translation:
    '"O hunter, may you never find rest for eternity — for you have slain one of a pair of krauñca birds, lost in the rapture of love."',
  source: "First śloka of Sanskrit poetry — arising from Vālmīki's grief (śoka → śloka)",
  reference: 'Bāla Kāṇḍa 1.2 · Vālmīki Rāmāyaṇa',
};
