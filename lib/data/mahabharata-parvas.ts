export type ParvaAlignment = 'pandava' | 'kaurava' | 'neutral';

export type ParvaActor = {
  name: string;
  nameDevanagari?: string;
  role: string;
  alignment: ParvaAlignment;
  description: string;
};

export type ParvaShloka = {
  ref: string;
  devanagari: string;
  iast: string;
  meaning: string;
};

export type ParvaStat = {
  label: string;
  value: string;
};

export type ParvaPhase = 'before' | 'war' | 'after';

export type ParvaContent = {
  number: number;
  name: string;
  nameDevanagari: string;
  nameIAST: string;
  verseCount: number;
  containsGita: boolean;
  gitaChapterRange?: string;
  phase: ParvaPhase;
  shloka: ParvaShloka;
  stats: ParvaStat[];
  narrative: string;
  actors: ParvaActor[];
  facts: string[];
  dating: string;
  geography: string;
  teaching: string;
};

export const PARVA_DATA: ParvaContent[] = [
  {
    number: 1,
    name: 'Adi',
    nameDevanagari: 'आदि',
    nameIAST: 'Ādi',
    verseCount: 8884,
    containsGita: false,
    phase: 'before',
    shloka: {
      ref: 'Adi Parva 1.1 — the invocation that opens the entire Mahābhārata',
      devanagari: 'नारायणं नमस्कृत्य नरं चैव नरोत्तमम् ।\nदेवीं सरस्वतीं चैव ततो जयमुदीरयेत् ॥',
      iast: 'nārāyaṇaṃ namaskṛtya naraṃ caiva narottamam ·\ndevīṃ sarasvatīṃ caiva tato jayam udīrayet ॥',
      meaning: 'Having bowed to Nārāyaṇa and to Nara, the most exalted of men, and to the goddess Sarasvatī — then let one recite Jaya.',
    },
    stats: [
      { label: 'Sub-parvas', value: '19 sections' },
      { label: 'Setting', value: 'Cosmic origin → Hastinapura court' },
      { label: 'Ends with', value: 'Burning of Khāṇḍava; Māyā-sabhā commissioned' },
    ],
    narrative: 'The first book opens the river at its source — not with the war but with the world\'s own origin: the churning of the cosmic ocean, the birth of the nāgas, celestial beings cursed into human form. Vyāsa sets the entire epic\'s moral architecture before a single Kuru prince appears. Competing duties, vows that outlive their purpose, karma inherited across generations. By the time the young Pandavas and Kauravas spar in Droṇa\'s school, we already understand that every character is downstream of choices made before their birth. The original name of the epic — Jaya, meaning Victory — survives in this opening invocation alone.',
    actors: [
      { name: 'Vyāsa', nameDevanagari: 'व्यास', role: 'narrator, author, character', alignment: 'neutral', description: 'Structures the frame narrative and dictates the epic to Gaṇeśa. His simultaneous presence as character and author establishes that the story already knows its own ending.' },
      { name: 'Bhīṣma', nameDevanagari: 'भीष्म', role: 'grandsire, celibate warrior', alignment: 'neutral', description: 'His terrible vow of lifelong celibacy — taken to allow his father\'s remarriage — sets the Kuru succession crisis in motion two generations before the war begins.' },
      { name: 'Arjuna', nameDevanagari: 'अर्जुन', role: 'student archer, Pandava', alignment: 'pandava', description: 'Emerges as Droṇa\'s finest student, then burns the Khāṇḍava forest alongside Kṛṣṇa. The destruction of an ecosystem for a deity\'s appetite is the epic\'s first unanswered moral act.' },
      { name: 'Duryodhana', nameDevanagari: 'दुर्योधन', role: 'Kaurava crown prince', alignment: 'kaurava', description: 'His jealousy of the Pandavas calcifies in childhood. The plot on Bhīma\'s life at Vāraṇāvata is already being planned by the time this parva closes.' },
      { name: 'Karṇa', nameDevanagari: 'कर्ण', role: 'son of Sūrya, raised as charioteer\'s son', alignment: 'kaurava', description: 'Humiliated at Droṇa\'s tournament on grounds of birth, he is immediately crowned king of Aṅga by Duryodhana. The loyalty that will eventually kill him is formed in a single afternoon.' },
    ],
    facts: [
      'The Adi Parva contains the entire Āstīka sub-parva — the legend of Garuḍa stealing amṛta — which has nothing directly to do with the war. These nested stories are moral lenses, not digressions. Vyāsa is teaching the reader how to read before the main story begins.',
      'The epic\'s original title was Jaya (Victory), a text of 8,800 verses attributed directly to Vyāsa. It was then expanded to Bhārata (24,000 verses) and finally to Mahābhārata (100,000 verses) across centuries of oral transmission.',
      'Droṇa asks each student what they see when aiming at a bird\'s eye on a branch. Only Arjuna answers correctly: only the eye. This pedagogical test encodes the Gīta\'s central instruction — focused, undistracted action — before the Gīta has been spoken.',
    ],
    dating: 'Nilesh Oak (When Did the Mahābhārata War Happen?, 2011) identifies planetary configurations described in the Adi Parva using astronomy software. Jupiter near Śravaṇa nakṣatra during the Pandava birth sequences aligns with sky positions around 5561 BCE in Oak\'s model; P.V. Vartak\'s independent analysis arrives at ~3100 BCE. The BORI Critical Edition team treats dating as outside their textual remit.',
    geography: 'Hastinapura is identified with modern Hastinapur town, Meerut district, Uttar Pradesh — ASI excavations found Painted Grey Ware pottery (c. 1200–600 BCE) consistent with Kuru-era habitation. The Khāṇḍava forest is placed in the Delhi–NCR region near the Yamuna. Indraprastha, built on the cleared site, lies beneath Purana Qila (Old Fort), Delhi, where PGW occupation layers have been confirmed.',
    teaching: 'Every lineage carries the seeds of its own dissolution. What is inherited is not only land and blood — it is the shape of the choices one\'s fathers could not make.',
  },

  {
    number: 2,
    name: 'Sabha',
    nameDevanagari: 'सभा',
    nameIAST: 'Sabhā',
    verseCount: 2511,
    containsGita: false,
    phase: 'before',
    shloka: {
      ref: 'Sabha Parva 2.1 — Kṛṣṇa departs after commissioning the great hall',
      devanagari: 'ततः प्रभाते विमले कृतकर्मा जनार्दनः ।\nपाण्डवं समनुज्ञाप्य ययौ द्वारवतीं पुरीम् ॥',
      iast: 'tataḥ prabhāte vimale kṛtakarmā janārdanaḥ ·\npāṇḍavaṃ samanujñāpya yayau dvāravatīṃ purīm ॥',
      meaning: 'Then, at the clear dawn, Janārdana — his work accomplished — took leave of the Pāṇḍava and departed for the city of Dvāravatī.',
    },
    stats: [
      { label: 'Key event', value: 'The dice game + vastra-haraṇa' },
      { label: 'Outcome', value: '12 yr exile + 1 yr incognito' },
      { label: 'Architect', value: 'Maya Dānava — builder of Māyā-sabhā' },
    ],
    narrative: 'The Sabha Parva is the shortest of the pre-war books and the most catastrophic. Yudhiṣṭhira builds the most magnificent assembly hall in the world — then loses it, his kingdom, his brothers, and his wife in a single afternoon of dice. Vyāsa\'s essay is precise: nobody in the hall breaks any rule. Nobody does the right thing. Draupadī\'s unanswerable legal question — was I fairly staked, given that my husband had already forfeited himself? — receives silence from every patriarch in the hall, including the grandsire on his throne.',
    actors: [
      { name: 'Śakuni', nameDevanagari: 'शकुनि', role: 'Gāndhāra prince, dice-player', alignment: 'kaurava', description: 'Plays the dice on Duryodhana\'s behalf. The text says he "knew the science of dice" — it does not say the dice were loaded. That ambiguity is entirely deliberate and has never been resolved.' },
      { name: 'Draupadī', nameDevanagari: 'द्रौपदी', role: 'queen of the Pandavas, born from fire', alignment: 'pandava', description: 'This parva belongs entirely to her. Dragged into the hall in a single garment, she asks one precise legal question that no elder will answer. Her silence after Kṛṣṇa\'s intervention is more devastating than any speech.' },
      { name: 'Bhīṣma', nameDevanagari: 'भीष्म', role: 'grandsire, patriarch of the Kurus', alignment: 'neutral', description: 'Sits in the hall throughout and does not intervene. His explanation afterward — that dharma was obscured — is the moment the Kuru patriarchy completes its moral bankruptcy.' },
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'eldest Pandava, king of dharma', alignment: 'pandava', description: 'He knew he was addicted to dice, had no skill, and would lose. He accepted the challenge anyway because refusing a royal invitation violated his own dharmic code. The text\'s most precise anatomy of how rules consume the people they were built to protect.' },
    ],
    facts: [
      'The Māyā-sabhā had floors that looked like water and pools that appeared to be solid ground. Duryodhana fell into a pool thinking it was a floor; Draupadī laughed. Many scholars trace the entire war to this single moment of public humiliation in a magical hall.',
      'After the vastra-haraṇa, Dhṛtarāṣṭra offers Draupadī any three boons. She asks only for her husbands\' freedom — nothing else. No wealth, no revenge, no kingdoms. The text treats this restraint as the most sovereign act in the parva.',
      'Maya the demon-architect who built the hall was the same craftsman who built Laṅkā. He built Yudhiṣṭhira\'s sabhā as a debt of gratitude for Arjuna sparing his life during the Khāṇḍava burning — connecting the destruction of the first parva to the destruction of the second.',
    ],
    dating: 'Oak\'s astronomical mapping identifies a solar eclipse referenced in the Sabha Parva visible from northern India. Cross-referencing with Vartak\'s work, the dice game is placed around 5560–5558 BCE. The 13-year exile that follows has been independently matched to planetary configurations at the opening of the Vana Parva, providing a consistent internal astronomical calendar across consecutive books.',
    geography: 'The Māyā-sabhā stood at Indraprastha — Purana Qila, Delhi. Dhṛtarāṣṭra\'s court was at Hastinapura, Meerut district. Śakuni came from Gāndhāra — the Kandahar–Peshawar corridor of modern Afghanistan and northwestern Pakistan. The Gāndhāra capital Takṣaśilā (Taxila) is a UNESCO World Heritage site in Punjab, Pakistan.',
    teaching: 'Dharma tested in public becomes a mirror for every silent witness. When the hall stays quiet, the hall is the crime.',
  },

  {
    number: 3,
    name: 'Vana',
    nameDevanagari: 'वन',
    nameIAST: 'Vana',
    verseCount: 11664,
    containsGita: false,
    phase: 'before',
    shloka: {
      ref: 'Vana Parva 3.1 — the Pandavas enter Kāmyaka forest',
      devanagari: 'ततस्ते पाण्डवाः सर्वे सभार्याः सपरिच्छदाः ।\nधर्मराजपुरोगामाः काम्यकं वनमाविशन् ॥',
      iast: 'tatas te pāṇḍavāḥ sarve sabhāryāḥ saparicchadāḥ ·\ndharmarājapurogāmāḥ kāmyakaṃ vanam āviśan ॥',
      meaning: 'Then all the Pāṇḍavas, together with their wife and retinue, led by the king of dharma, entered the Kāmyaka forest.',
    },
    stats: [
      { label: 'Duration', value: '12 years of forest exile' },
      { label: 'Sub-parvas', value: '21 sections — largest parva' },
      { label: 'Embedded texts', value: 'Nala-Damayanti, Rāma story, Sāvitri, Yakṣa Praśna' },
    ],
    narrative: 'The Vana Parva is the epic\'s longest book and its most philosophical — twelve years in which the Pandavas are stripped of everything except who they are. Draupadi argues with Yudhiṣṭhira about passive acceptance; rishis tell nested stories about loss and recovery; Arjuna ascends to Indra\'s heaven to obtain celestial weapons from Śiva and Indra himself. The forest is not punishment — it is a crucible. The Yakṣa Praśna near the end — where Yudhiṣṭhira answers a crane\'s questions on dharma to revive his brothers — contains the most compressed ethical philosophy in the epic.',
    actors: [
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'eldest Pandava, dharma\'s student', alignment: 'pandava', description: 'The forest tests his patience and his politics. His exchange with the Yakṣa — particularly the question "What is the greatest wonder?" and his answer — is the parva\'s philosophical summit.' },
      { name: 'Arjuna', nameDevanagari: 'अर्जुन', role: 'archer, celestial weapon seeker', alignment: 'pandava', description: 'Travels alone to obtain divine weapons from Indra and Śiva. His encounter with Śiva disguised as a Kirāta hunter — who defeats him in combat — reveals that even the greatest warrior must be broken before he can be armed.' },
      { name: 'Draupadī', nameDevanagari: 'द्रौपदी', role: 'wife, philosopher, fire', alignment: 'pandava', description: 'Her conversations with Yudhiṣṭhira on whether passive acceptance of injustice is virtue or cowardice constitute one of the Mahābhārata\'s most sophisticated ethical exchanges. She never accepts the answer that suffering is deserved.' },
      { name: 'Hanumān', nameDevanagari: 'हनुमान', role: 'divine figure, Bhīma\'s elder brother', alignment: 'neutral', description: 'Appears in the forest to test Bhīma\'s pride — as an old monkey blocking a path. When Bhīma cannot lift his tail, he is humbled. Hanumān reveals himself, blesses Arjuna\'s banner, and the two epics touch briefly.' },
    ],
    facts: [
      'The Sāvitri episode — in which Sāvitri argues with Yama, god of death, to recover her husband\'s life through a series of boons — is embedded here. She is so skilled with words that she technically never asks for the one boon she wants, yet receives it. It is the epic\'s treatise on the power of precise speech.',
      'The Nala-Damayanti story, told to console Yudhiṣṭhira by Bṛhadaśva, is a near-mirror of the Pandava situation: a king loses his kingdom at dice, goes into exile with his wife, is eventually restored. Its placement is not coincidental.',
      'Arjuna\'s obtaining of the Pāśupatastra from Śiva required him to fight the god in disguise first. Śiva shattered every arrow Arjuna fired and then broke his bow. Only after complete defeat was the weapon given. The Mahābhārata consistently insists that divine gifts follow human exhaustion.',
    ],
    dating: 'The Vana Parva contains multiple solar and lunar eclipse references that Oak uses as astronomical timestamps. His dating places the forest exile between approximately 5573 and 5561 BCE. The descriptions of forest habitation near what was then a flowing Sarasvatī river are consistent with a much earlier period than the current landscape suggests.',
    geography: 'The Kāmyaka forest is identified with the region near Kurukshetra in present-day Haryana near the dried Sarasvatī riverbed. The Dvaitavana forest is placed near modern Kurukshetra district. Arjuna\'s northward journey to obtain weapons from Indra\'s heaven (Amarāvatī) has been associated with the Himalayan foothills. The Yakṣa Praśna episode near a lake aligns geographically with the Dvaitavana tank tradition.',
    teaching: 'Exile is not punishment — it is preparation. What is stripped away in the forest is not what was taken in the dice hall. It is what was never truly yours to begin with.',
  },

  {
    number: 4,
    name: 'Virāṭa',
    nameDevanagari: 'विराट',
    nameIAST: 'Virāṭa',
    verseCount: 2050,
    containsGita: false,
    phase: 'before',
    shloka: {
      ref: 'Virāṭa Parva 4.1 — the Pandavas plan their incognito year',
      devanagari: 'विराटनगरं रम्यं पाण्डवाः प्राप्य भारत ।\nअज्ञातवासं वसताम् इत्युवाच युधिष्ठिरः ॥',
      iast: 'virāṭanagaraṃ ramyaṃ pāṇḍavāḥ prāpya bhārata ·\najñātavāsaṃ vasatām ity uvāca yudhiṣṭhiraḥ ॥',
      meaning: 'Having reached the beautiful city of Virāṭa, O Bhārata, Yudhiṣṭhira spoke to them of the incognito life they were to live.',
    },
    stats: [
      { label: 'Duration', value: 'One year in disguise' },
      { label: 'Kingdom', value: 'Matsya — ruled by King Virāṭa' },
      { label: 'Stakes', value: 'Discovery means 12 more years of exile' },
    ],
    narrative: 'The thirteenth year of exile — the year of concealment — is the epic\'s chamber drama. Each Pandava adopts a persona precisely inverse to their nature: the dharmic king becomes a gambling companion, the mighty Bhīma a cook, the celestial archer Arjuna a eunuch dance teacher. Draupadī becomes a handmaid. The tension of containing who they are within who they must appear to be generates the parva\'s psychological richness. When Arjuna\'s identity is finally exposed in the cattle raid, it is almost a relief — the armour of disguise had grown heavier than any battle.',
    actors: [
      { name: 'Arjuna as Bṛhannaḷā', nameDevanagari: 'अर्जुन', role: 'peerless archer, disguised as eunuch', alignment: 'pandava', description: 'Teaches dance and music to Virāṭa\'s daughter Uttarā. The parva\'s greatest moment: when he finally takes up his Gāṇḍīva bow again to fight the Kaurava cattle raiders, the very trees bow under the bow\'s resonance.' },
      { name: 'Bhīma as Vallava', nameDevanagari: 'भीम', role: 'Pandava second, disguised as cook', alignment: 'pandava', description: 'Kills Kīcaka — Virāṭa\'s powerful brother-in-law who harassed Draupadī — in a secret night encounter. He disguises the murder so thoroughly that the body is unrecognisable. His restraint throughout the parva costs him visibly.' },
      { name: 'Draupadī as Sairandhrī', nameDevanagari: 'द्रौपदी', role: 'queen, disguised as handmaid', alignment: 'pandava', description: 'Serves Virāṭa\'s queen as a hairdresser. Her management of Kīcaka\'s advances without breaking her disguise — while her husbands cannot openly protect her — is the parva\'s sustained ethical agony.' },
      { name: 'Uttarā', nameDevanagari: 'उत्तरा', role: 'Virāṭa\'s daughter, Arjuna\'s student', alignment: 'neutral', description: 'Her marriage to Abhimanyu at the parva\'s close is the one moment of uncomplicated joy in the entire middle section of the epic. Her son Parīkṣit will be the last survivor of the war\'s bloodline.' },
    ],
    facts: [
      'Arjuna\'s eunuch disguise (Bṛhannaḷā) is not merely practical — the text uses it to explore gender and identity in ways unusual for ancient literature. He teaches classical dance as authentically as he fights; the disguise requires him to inhabit an entirely different relationship with his own body and skill.',
      'The Kauravas\' cattle raid on Virāṭa was a deliberate attempt to unmask the Pandavas in their final year. When Arjuna single-handedly repelled the entire Kaurava army — including Bhīṣma, Droṇa, Karṇa, and Duryodhana — while still technically in disguise, the year had technically ended by one day. The precise accounting of the vow\'s fulfilment is disputed.',
      'Yudhiṣṭhira\'s disguise as Kaṅka — a brahmin who plays dice for the king — is the text\'s darkest irony: the man ruined by dice must now use dice as his cover story.',
    ],
    dating: 'The Virāṭa Parva\'s one-year incognito period gives researchers a fixed astronomical window. Oak identifies constellation positions described at the beginning of this parva that match sky conditions of approximately 5562 BCE. The precise year-length vow provides one of the more tractable astronomical constraints in the entire chronological debate.',
    geography: 'Virāṭa\'s Matsya kingdom is identified with the region around modern Bairat (Virat Nagar), Alwar district, Rajasthan — where ASI excavations found evidence of a significant ancient settlement including a Buddhist stupa of the Mauryan period above much earlier habitation layers. The cattle raid battlefield is placed in the plains northeast of modern Jaipur.',
    teaching: 'True character is revealed not by what one does in glory but by what one contains under concealment. Disguise does not diminish the Pandavas — it reveals what they are made of when no one is watching.',
  },

  {
    number: 5,
    name: 'Udyoga',
    nameDevanagari: 'उद्योग',
    nameIAST: 'Udyoga',
    verseCount: 6698,
    containsGita: false,
    phase: 'before',
    shloka: {
      ref: 'Udyoga Parva 5.1 — the Pandavas gather at Upaplavya',
      devanagari: 'ततो विराटनगरात् पाण्डवाः प्रस्थितास्तदा ।\nउपप्लव्यं महाराज सर्वे समभिजग्मिरे ॥',
      iast: 'tato virāṭanagarāt pāṇḍavāḥ prasthitās tadā ·\nupaplavyaṃ mahārāja sarve samabhijagmire ॥',
      meaning: 'Then the Pāṇḍavas, departing from the city of Virāṭa, O great king, all came together to Upaplavya.',
    },
    stats: [
      { label: 'Key missions', value: 'Kṛṣṇa\'s embassy to Hastinapura' },
      { label: 'Akshauhinis', value: '18 total — 7 Pandava, 11 Kaurava' },
      { label: 'Revelation', value: 'Karṇa\'s true birth disclosed to him by Kuntī' },
    ],
    narrative: 'The Udyoga Parva is the epic\'s last attempt at peace — and its most searching examination of why peace fails. Kṛṣṇa travels to Hastinapura as the Pandavas\' ambassador, offers Duryodhana five villages in place of the kingdom, and is refused. The parva contains the great mobilisation: eighteen akshauhinis of troops drawn from across the subcontinent. It also contains Kuntī\'s secret visit to Karṇa, in which she reveals that he is her firstborn son — and he refuses to change sides, asking only that she not lose six sons total.',
    actors: [
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'Pandava ambassador, divine strategist', alignment: 'neutral', description: 'His embassy to Hastinapura is the epic\'s most theatrically charged peace mission. He offers five villages. Duryodhana refuses even a needle\'s point of territory. Kṛṣṇa then reveals his Viśvarūpa briefly in the Kaurava court — a moment of theophany inside a diplomatic failure.' },
      { name: 'Karṇa', nameDevanagari: 'कर्ण', role: 'Kaurava commander, Kuntī\'s firstborn', alignment: 'kaurava', description: 'Kuntī visits him in secret at dawn prayer and reveals the truth of his birth. He already knew. He refuses to abandon Duryodhana but promises Kuntī he will kill only Arjuna — she will not lose more than one son either way. This conversation is among the most heartbreaking in world literature.' },
      { name: 'Duryodhana', nameDevanagari: 'दुर्योधन', role: 'Kaurava king, war\'s architect', alignment: 'kaurava', description: 'His refusal of five villages — "I will not give land the width of a needle\'s point without a fight" — is the war\'s formal declaration. The text ensures we understand that this is a choice, not a fate.' },
      { name: 'Kuntī', nameDevanagari: 'कुन्ती', role: 'mother of the Pandavas', alignment: 'neutral', description: 'Her pre-war visit to Karṇa is her most morally complex act: she claims him as a son only when it might serve as leverage, and he refuses to be claimed. The parva refuses to adjudicate who is right.' },
    ],
    facts: [
      'The eighteen akshauhinis — each akshauhini comprising 21,870 chariots, 21,870 elephants, 65,610 horses, and 109,350 infantry — would total approximately 3.9 million combatants. Whether taken literally or symbolically, the number encodes the totality of destruction that follows.',
      'Kṛṣṇa offered Duryodhana a choice before the war: take Kṛṣṇa himself as an unarmed advisor, or take his entire Nārāyaṇī army of one akshauhini. Duryodhana immediately chose the army. Arjuna immediately chose Kṛṣṇa. The parva treats this as the definitive illustration of the difference between the two sides.',
      'The Vidura-nīti embedded in this parva — Vidura\'s counsel to Dhṛtarāṣṭra on wise governance — is one of Sanskrit literature\'s earliest systematic political philosophy texts, predating Kauṭilya\'s Arthaśāstra in its oral tradition though not in its written form.',
    ],
    dating: 'Oak identifies planetary groupings at the opening of the Udyoga Parva that mark the pre-war period as occurring in mid-autumn by his astronomical model. The text\'s explicit statement that the war began near a new moon in the month of Kārttika has been used by multiple researchers, yielding dates from 3067 BCE (Vartak) to 5561 BCE (Oak) depending on which celestial cycle is assumed.',
    geography: 'Upaplavya, the Pandava war council gathering point, is identified with Virat Nagar, Rajasthan. Hastinapura (Meerut district) was the Kaurava capital where Kṛṣṇa\'s embassy was received. The mobilisation of allied kingdoms covers a geographic span from the Himalayan kingdoms (Pāñcāla, in modern UP) to the far south and northwest, reflecting the subcontinent\'s full political geography.',
    teaching: 'Peace offered sincerely and refused reveals who truly desires war. The tragedy is not that the peace failed — it is that everyone who refused it knew exactly what they were choosing.',
  },

  {
    number: 6,
    name: 'Bhīṣma',
    nameDevanagari: 'भीष्म',
    nameIAST: 'Bhīṣma',
    verseCount: 5884,
    containsGita: true,
    gitaChapterRange: 'Chapters 25–42 of Bhīṣma Parva (Critical Edition)',
    phase: 'war',
    shloka: {
      ref: 'Bhīṣma Parva 6.1 — also the first verse of the Bhagavad Gīta itself',
      devanagari: 'धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥',
      iast: 'dharmakṣetre kurukṣetre samavetā yuyutsavaḥ ·\nmāmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ॥',
      meaning: 'On the field of dharma, on the field of the Kurus, assembled and eager for battle — what did my people and the Pāṇḍavas do, O Sañjaya?',
    },
    stats: [
      { label: 'Gīta location', value: 'Chapters 25–42, Critical Ed.' },
      { label: 'War days', value: 'Days 1 through 10' },
      { label: 'Bhīṣma\'s fate', value: 'Falls on arrow-bed; awaits Uttarāyaṇa' },
    ],
    narrative: 'Bhīṣma commands the Kaurava forces for ten days. But the parva\'s centre of gravity is not the battlefield — it is the eighteen-chapter conversation between Arjuna and Kṛṣṇa before a single arrow flies. When Arjuna\'s bow falls from his hands on seeing his grandfather and teacher arrayed against him, the Mahābhārata pauses the entire war to let Kṛṣṇa speak. What emerges across chapters 25–42 of this parva is the Bhagavad Gīta: not a battle manual but a complete system on action, consciousness, devotion, and the self. The war resumes; Bhīṣma falls on a bed of arrows of his own choosing.',
    actors: [
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'charioteer, teacher', alignment: 'neutral', description: 'Takes no weapon yet shapes every outcome. The Gīta unfolds from his willingness to stop the war\'s clock and answer one archer\'s crisis of conscience. Chapters 25–42 are the most commented-upon text in Sanskrit literature.' },
      { name: 'Arjuna', nameDevanagari: 'अर्जुन', role: 'archer, Kṛṣṇa\'s student', alignment: 'pandava', description: 'His collapse at the opening of the Gīta is not cowardice but moral clarity — he sees exactly what will be destroyed. Kṛṣṇa\'s teaching begins precisely because Arjuna has not stopped thinking.' },
      { name: 'Bhīṣma', nameDevanagari: 'भीष्म', role: 'Kaurava commander, grandsire', alignment: 'neutral', description: 'Commands brilliantly but with concealed reluctance — he has already told Yudhiṣṭhira privately how he can be killed. When Śikhāṇḍī advances, he lowers his bow. His arrow-bed begins here.' },
      { name: 'Sañjaya', nameDevanagari: 'संजय', role: 'Dhṛtarāṣṭra\'s narrator, receiver of divine vision', alignment: 'neutral', description: 'Narrates the entire war to the blind king in Hastinapura in real time — the first description in world literature of what we would call a live broadcast. Vyāsa granted him this remote vision specifically for this purpose.' },
    ],
    facts: [
      'The Gīta\'s 700 verses sit inside a parva of nearly 6,000 — yet they have generated more commentary than all the remaining 5,300 verses combined. Śaṅkarācārya, Rāmānuja, Madhva, Tilak, Gandhi, and Aurobindo each wrote full-length independent commentaries treating it as a complete philosophical system.',
      'Bhīṣma had the boon of choosing his own death (icchā-mṛtyu). He lay on his arrow-bed for weeks, refusing to release his life until the winter solstice (Uttarāyaṇa), delivering the Śānti and Anuśāsana teachings in the interval. He died on the date he chose, fully conscious.',
      'On day 9, Kṛṣṇa broke his own vow not to bear arms — he lifted a chariot wheel to charge at Bhīṣma after Arjuna hesitated. Bhīṣma put down his bow and bowed. It is one of the few moments in the epic where the divine appears genuinely tested by its own promises.',
    ],
    dating: 'Oak\'s most specific claim: the war began on 16 October 5561 BCE, based on the simultaneous conjunction of seven planets described at the opening of this parva (3.14–29, Critical Edition). Vartak\'s software simulation using the same verses arrives at 3067 BCE. Achar places it at 1478 BCE. The disagreement concerns which astronomical cycle the text references — all three researchers agree it is describing real sky positions.',
    geography: 'Kurukṣetra is a district in Haryana, 170 km north of Delhi, on the flat alluvial plain between the ancient Sarasvatī and Dṛṣadvatī rivers. The Sarasvatī now flows mostly underground — identified with the Ghaggar-Hakra system. The Jyotisar tank near Thanesar is traditionally the exact spot where Kṛṣṇa spoke the Gīta. Brahmasarovar, one of India\'s largest sacred tanks, remains an active pilgrimage site in Kurukṣetra city.',
    teaching: 'You have a right to perform your prescribed duties — but you are not entitled to the fruits of your actions. Never consider yourself the cause of results, and never be attached to not doing your duty. — Gīta 2.47',
  },

  {
    number: 7,
    name: 'Droṇa',
    nameDevanagari: 'द्रोण',
    nameIAST: 'Droṇa',
    verseCount: 8909,
    containsGita: false,
    phase: 'war',
    shloka: {
      ref: 'Droṇa Parva 7.1 — Duryodhana appoints the new commander',
      devanagari: 'ततः सम्पूज्य राजेन्द्र द्रोणमाचार्यमन्तिके ।\nसेनापत्ये महाराज दुर्योधनो न्ययोजयत् ॥',
      iast: 'tataḥ sampūjya rājendra droṇam ācāryam antike ·\nsenāpatye mahārāja duryodhano nyayojayat ॥',
      meaning: 'Then, having honoured the teacher Droṇa in his presence, O king of kings, O great king, Duryodhana appointed him to the command.',
    },
    stats: [
      { label: 'War days', value: 'Days 11 through 15' },
      { label: 'Key death', value: 'Abhimanyu — day 13' },
      { label: 'Arjuna\'s oath', value: 'Kill Jayadratha by sunset or self-immolate' },
    ],
    narrative: 'Droṇa as commander brings tactical genius and personal grief in equal measure. He creates the chakra-vyūha — the spinning wheel formation that only Abhimanyu knows how to enter but not exit. The young warrior\'s death inside that formation, assaulted by six maharathis simultaneously in violation of war codes, is the war\'s moral turning point. After it, both sides abandon the rules. Droṇa himself is killed not in battle but through deception: Yudhiṣṭhira — whose dharmic reputation for truth is his shield — is manipulated into delivering the false news that Aśvatthāmā is dead.',
    actors: [
      { name: 'Droṇa', nameDevanagari: 'द्रोण', role: 'Kaurava commander, preceptor', alignment: 'kaurava', description: 'Fights with unsurpassed skill but increasing reluctance. He could not refuse Duryodhana\'s command because loyalty to the throne was his bound duty. He lays down his arms when he believes his son Aśvatthāmā is dead — and is immediately slain by Dhṛṣṭadyumna.' },
      { name: 'Abhimanyu', nameDevanagari: 'अभिमन्यु', role: 'Arjuna\'s son, master of the chakra-vyūha entrance', alignment: 'pandava', description: 'Learned the chakra-vyūha entry technique while still in his mother\'s womb — but she fell asleep before Arjuna taught the exit. He enters and fights six maharathis alone. His death is the war\'s unambiguous moral low point — even the Kaurava side is ashamed afterward.' },
      { name: 'Arjuna', nameDevanagari: 'अर्जुन', role: 'Pandava archer, bereaved father', alignment: 'pandava', description: 'Kept away from Abhimanyu\'s killing by a diversionary attack. His oath to kill Jayadratha — who sealed the chakra-vyūha exit — by sunset or die is the parva\'s structural spine. Kṛṣṇa hides the sun with his Sudarśana chakra to create a false sunset, luring Jayadratha into the open.' },
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'Pandava king, truth\'s embodiment', alignment: 'pandava', description: 'Forced to tell the half-lie that breaks Droṇa: "Aśvatthāmā is dead" — then softly adds "the elephant" as Kṛṣṇa sounds a conch to drown the qualification. It costs him his divine aura. The text does not spare him the consequence.' },
    ],
    facts: [
      'Abhimanyu\'s simultaneous assault by six maharathis — Droṇa, Karṇa, Kṛpa, Aśvatthāmā, Śalya, and Duryodhana\'s brother — while alone in the chakra-vyūha was explicitly against the rules of war (no multiple warriors against one). Even Karṇa reportedly felt shame. The Mahābhārata uses this violation to signal that the rules of dharmic war are now permanently broken.',
      'Kṛṣṇa\'s tactical use of a false sunset to kill Jayadratha is one of several instances in the war where he employs deception in service of dharma — each time the text frames the deception as necessitated by prior adharma on the other side.',
      'The Droṇa Parva contains the Nārāyaṇāstra episode — Droṇa\'s son Aśvatthāmā releases a divine weapon that only surrenders to those who bow to it. Arjuna refuses to bow. Kṛṣṇa makes all the Pandavas bow. The weapon withdraws. It is one of the text\'s most concentrated teachings on when pride must yield.',
    ],
    dating: 'The descriptions of war beginning in autumn and running across approximately eighteen days can be cross-referenced with lunar calendar descriptions. Oak\'s model places the war in October-November of 5561 BCE; the Droṇa Parva\'s days 11–15 in this model fall across the dark fortnight of the month.',
    geography: 'Kurukṣetra battlefield, Haryana. The chakra-vyūha formation implies a relatively flat, open plain consistent with the Kurukṣetra terrain. The Sarasvatī river — flowing at the time — would have defined the northern boundary of the battlefield. Modern Kurukṣetra city preserves 48 sacred sites (tīrthas) associated with the war.',
    teaching: 'When dharma is abandoned in battle, every victory becomes a wound. The rules of war exist not to protect the enemy — but to protect the self from becoming what it is fighting.',
  },

  {
    number: 8,
    name: 'Karṇa',
    nameDevanagari: 'कर्ण',
    nameIAST: 'Karṇa',
    verseCount: 4964,
    containsGita: false,
    phase: 'war',
    shloka: {
      ref: 'Karṇa Parva 8.1 — Duryodhana appoints the final hope',
      devanagari: 'हते द्रोणे महेष्वासे सूतपुत्रं महारथम् ।\nदुर्योधनो महाराज सेनापत्येऽभ्यषेचयत् ॥',
      iast: 'hate droṇe maheṣvāse sūtaputraṃ mahāratham ·\nduryodhano mahārāja senāpatye \'bhyaṣecayat ॥',
      meaning: 'With the great archer Droṇa slain, King Duryodhana, O great king, anointed the charioteer\'s son, that great warrior, to the command.',
    },
    stats: [
      { label: 'War days', value: 'Days 16 and 17' },
      { label: 'Climax', value: 'Arjuna vs. Karṇa — the defining duel' },
      { label: 'Karṇa\'s curse', value: 'Wheel sinks into earth at the crucial moment' },
    ],
    narrative: 'The Karṇa Parva is the epic\'s tragic centrepiece — two days in which the war\'s most morally complex figure commands and falls. Karṇa was born a Pandava, raised a Kaurava, loyal to the wrong side, stripped of his divine armour by Indra\'s trickery, cursed by Paraśurāma to forget his most powerful mantra when he needs it most, and finally killed not in equal combat but when his chariot wheel is stuck in the earth and he appeals to Arjuna\'s sense of fair play. Kṛṣṇa\'s response — reminding Arjuna of every rule Karṇa himself had broken — is the Mahābhārata at its most ethically ruthless.',
    actors: [
      { name: 'Karṇa', nameDevanagari: 'कर्ण', role: 'Kaurava commander, Kuntī\'s firstborn', alignment: 'kaurava', description: 'Commands with full knowledge of his disadvantages: no divine armour, his Śakti used on Ghaṭotkaca, a curse activated at the worst moment, and a charioteer (Śalya) who demoralises him. He fights anyway. This parva belongs entirely to what courage looks like without hope.' },
      { name: 'Arjuna', nameDevanagari: 'अर्जुन', role: 'Pandava archer, Karṇa\'s destined opponent', alignment: 'pandava', description: 'The duel between Arjuna and Karṇa has been building since the tournament in Adi Parva. When Karṇa\'s wheel sinks and he appeals for the pause, Kṛṣṇa intervenes to prevent Arjuna\'s hesitation. The arrow is fired. Arjuna does not celebrate.' },
      { name: 'Śalya', nameDevanagari: 'शल्य', role: 'Karṇa\'s charioteer, secret Pandava sympathiser', alignment: 'kaurava', description: 'Was tricked into serving the Kauravas (Duryodhana fed him lavishly without revealing the purpose) and agreed by code to serve as Karṇa\'s charioteer. Yudhiṣṭhira had previously asked him to demoralise Karṇa from within — which he does, throughout the two days, relentlessly.' },
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'strategist, dharma\'s arbiter in extremity', alignment: 'neutral', description: 'When Karṇa asks for a dharmic pause while his wheel is stuck, Kṛṣṇa reminds Arjuna of every dharmically dubious act Karṇa committed. The text does not make this comfortable. It presents Kṛṣṇa\'s argument as correct and the moment as terrible simultaneously.' },
    ],
    facts: [
      'Karṇa gave away his natural divine kavaca (armour) and kuṇḍala (earrings) to Indra — who came in disguise as a brahmin beggar — despite knowing it would leave him vulnerable. He gave them because he was asked and because giving was his nature. The sun warned him. He gave anyway.',
      'Paraśurāma cursed Karṇa to forget his Brahmāstra at the moment of greatest need when he discovered Karṇa had claimed to be a brahmin to receive instruction. Yet Paraśurāma also blessed him: "You will be remembered as the equal of Arjuna in all the three worlds." The curse and the blessing are inseparable.',
      'Ghaṭotkaca — Bhīma\'s rakṣasa son — was deliberately unleashed by Kṛṣṇa to force Karṇa to use the Śakti weapon Indra had given him (which could only be used once) against someone other than Arjuna. When Karṇa killed Ghaṭotkaca with it, Kṛṣṇa laughed with relief. The text does not soften the cost: Ghaṭotkaca is dead.',
    ],
    dating: 'The Karṇa Parva covers days 16 and 17 of the war. In Oak\'s model, these fall in late October 5561 BCE. The specific description of a solar halo and atmospheric phenomena during the Arjuna-Karṇa duel has been used as an independent astronomical timestamp by some researchers.',
    geography: 'The duel between Arjuna and Karṇa took place on the central Kurukṣetra plain, Haryana. Karṇa\'s hometown Aṅga — where Duryodhana crowned him king — is identified with the Bhagalpur region of modern Bihar. His life traces a geography from Bihar to Kurukṣetra: the longest journey in the epic measured in social distance.',
    teaching: 'The most painful battles are fought between those who could have been brothers. Karṇa\'s tragedy is not that he was on the wrong side — it is that the right side would not have him when it mattered.',
  },

  {
    number: 9,
    name: 'Śalya',
    nameDevanagari: 'शल्य',
    nameIAST: 'Śalya',
    verseCount: 3220,
    containsGita: false,
    phase: 'war',
    shloka: {
      ref: 'Śalya Parva 9.1 — the last commander',
      devanagari: 'कर्णे निहते वीरे सूतपुत्रे महारथे ।\nततो दुर्योधनो राजा शल्यमाहूय सत्वरम् ॥',
      iast: 'karṇe nihate vīre sūtaputre mahārathe ·\ntato duryodhano rājā śalyam āhūya satvaram ॥',
      meaning: 'With the hero Karṇa, that great warrior son of a charioteer, slain — King Duryodhana then quickly summoned Śalya.',
    },
    stats: [
      { label: 'War days', value: 'Day 18 — the final day' },
      { label: 'Śalya\'s reign', value: 'Half a day before being killed by Yudhiṣṭhira' },
      { label: 'Final battle', value: 'Bhīma vs. Duryodhana, mace fight at the lake' },
    ],
    narrative: 'The war\'s final day begins and ends in a single parva. Śalya commands the Kaurava remnant for half a day before Yudhiṣṭhira himself kills him — the only major kill that belongs to the dharmic king rather than his warrior brothers. Duryodhana retreats to a lake and conceals himself beneath the water. The Pandavas find him; he emerges; he fights Bhīma in the mace duel that was always coming. Bhīma strikes his thigh — an illegal blow — and Duryodhana falls. The war ends. Nobody celebrates.',
    actors: [
      { name: 'Duryodhana', nameDevanagari: 'दुर्योधन', role: 'Kaurava king, last man standing', alignment: 'kaurava', description: 'Retreating to the Dvaipayana lake and hiding beneath the water is simultaneously cowardly and utterly human. When found and challenged, he chooses to fight Bhīma in a mace duel he knows he might win by skill — rather than surrender. He refuses disgrace more than he desires survival.' },
      { name: 'Bhīma', nameDevanagari: 'भीम', role: 'Pandava second, Duryodhana\'s destined opponent', alignment: 'pandava', description: 'His oath to kill Duryodhana by striking his thigh — the thigh Duryodhana once bared insultingly toward Draupadī — is fulfilled with a blow that is technically against the rules of mace combat. Kṛṣṇa touches his own thigh in a subtle signal. Balarāma is furious. Yudhiṣṭhira is silent.' },
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'Pandava king, unlikely killer of Śalya', alignment: 'pandava', description: 'Kills Śalya with a javelin in the day\'s first hour — a military act jarring against his pacifist nature. The text grants it to him deliberately: the dharmic king must also be capable of ending what he is responsible for.' },
    ],
    facts: [
      'Duryodhana hiding in the lake is described with the detail that he stopped the water above him by his yogic power. When the Pandavas taunt him from the bank and offer him any single-combat opponent of his choice, he chooses Bhīma — not the easier option of fighting Yudhiṣṭhira. The text honours this courage even while condemning his cause.',
      'Balarāma — Kṛṣṇa\'s elder brother, Duryodhana\'s mace-combat teacher — arrives at the lake just in time to witness Bhīma\'s illegal blow. He raises his plough weapon in fury. Kṛṣṇa restrains him with arguments about oaths and justice. Balarāma leaves in grief. The text gives him no clean response to what happened.',
      'The parva contains the Sarasvatī pilgrimage account, which Balarāma undertook during the war (he refused to take sides). The geographical detail of his route along the Sarasvatī river — touching sites now in Haryana and Rajasthan — provides one of the most specific geographic records in the entire epic.',
    ],
    dating: 'Day 18 of the war, in Oak\'s model 2 November 5561 BCE. The Śalya Parva\'s closing verses describe the sunset after the war ends — used by Oak to triangulate the war\'s precise ending time and confirm his eighteen-day duration calculation against the described lunar phase.',
    geography: 'The Dvaipayana lake where Duryodhana hid is identified with Dvaipayana Sarovara, a sacred tank in Kurukṣetra district, Haryana. The mace fight\'s location is traditionally marked at Samantapañcaka within the Kurukṣetra region. Śalya was king of Madra — identified with the Sialkot region of modern Punjab, Pakistan.',
    teaching: 'Even victory in a just war carries an irreducible grief. The Pandavas win and do not celebrate. The crown that was always theirs now costs everything it was worth to them.',
  },

  {
    number: 10,
    name: 'Sauptika',
    nameDevanagari: 'सौप्तिक',
    nameIAST: 'Sauptika',
    verseCount: 870,
    containsGita: false,
    phase: 'war',
    shloka: {
      ref: 'Sauptika Parva 10.1 — three survivors in the dark',
      devanagari: 'हते दुर्योधने राजन् विद्धे च बहुशः शरैः ।\nअश्वत्थामा कृपश्चैव कृतवर्मा च सात्वतः ॥',
      iast: 'hate duryodhane rājan viddhe ca bahuśaḥ śaraiḥ ·\naśvatthāmā kṛpaś caiva kṛtavarmā ca sātvataḥ ॥',
      meaning: 'With Duryodhana slain, O king, pierced again and again by arrows — Aśvatthāmā, Kṛpa, and Kṛtavarman the Sātvata remained.',
    },
    stats: [
      { label: 'Survivors', value: 'Aśvatthāmā, Kṛpa, Kṛtavarman — three Kauravas' },
      { label: 'The act', value: 'Night raid on sleeping Pandava camp' },
      { label: 'Killed', value: 'Draupadī\'s five sons (the Upapāṇḍavas)' },
    ],
    narrative: 'The war has ended, but Aśvatthāmā has not. Watching an owl kill sleeping crows in the dark, he devises a night raid on the Pandava camp. He kills Dhṛṣṭadyumna, Śikhāṇḍī, and all five of Draupadī\'s sons in their sleep. The Pandavas and Kṛṣṇa survive only because they were elsewhere. The parva then describes Aśvatthāmā releasing the Brahmāstra — a weapon that cannot be recalled — and Kṛṣṇa asking Arjuna to counter it. When Aśvatthāmā redirects his weapon toward the Pandava womb-line, Kṛṣṇa intervenes. Aśvatthāmā\'s gem is ripped from his forehead as punishment. He is cursed to wander.',
    actors: [
      { name: 'Aśvatthāmā', nameDevanagari: 'अश्वत्थामा', role: 'Droṇa\'s son, last Kaurava act', alignment: 'kaurava', description: 'His night raid is beyond any war\'s rules — killing sleeping men, children, Draupadī\'s sons. The text does not explain or excuse it. It simply describes it with the same clarity it uses for every other act in the epic, which is in some ways the most disturbing response possible.' },
      { name: 'Draupadī', nameDevanagari: 'द्रौपदी', role: 'bereaved mother, dharma\'s final witness', alignment: 'pandava', description: 'When her sons are killed, she does not ask for Aśvatthāmā\'s execution. She asks that the gem be taken from his forehead — the source of his immortality — and given to Yudhiṣṭhira. Even in total grief her demand is precise and purposeful.' },
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'intervener against the Brahmāstra', alignment: 'neutral', description: 'When Aśvatthāmā\'s redirected Brahmāstra threatens Uttarā\'s unborn child (Parīkṣit — the last of the Kuru line), Kṛṣṇa intervenes personally to protect the embryo. The child survives. The dynasty survives by one thread.' },
    ],
    facts: [
      'The Brahmāstra — released by Aśvatthāmā and countered by Arjuna\'s own — would have burned the entire earth if both had not been withdrawn. Only two people in the epic know how to recall it: Arjuna (who withdraws his) and Aśvatthāmā (who cannot, because he was never taught the recall). He redirects it instead.',
      'Aśvatthāmā is one of the eight cirajīvis — beings granted immortality in Hindu tradition. The curse imposed after his night raid — to wander the earth in agony, the wound from the gem\'s removal never healing — means his immortality becomes punishment. Some traditions report him as still wandering.',
      'The night raid is the only major act in the war described as occurring in total darkness, outside any established protocol of combat. Its placement after the war\'s official end signals that the Mahābhārata\'s moral universe does not close cleanly when the battle does.',
    ],
    dating: 'The Sauptika Parva\'s events occur the night after the war\'s last day. In Oak\'s model, this is the night of 2–3 November 5561 BCE. The description of specific star positions visible on that night has been cross-referenced with his astronomical calculations.',
    geography: 'The Pandava camp attacked by Aśvatthāmā was located on the Kurukṣetra plain. After the raid, pursuit and the Brahmāstra confrontation are described near the Gaṅgā river — suggesting the Pandavas had moved northeast toward the river after the war ended, consistent with the geography of the region east of Kurukṣetra toward Hardwar.',
    teaching: 'Vengeance taken in darkness destroys the avenger first. Aśvatthāmā\'s act grants him only the wound he cannot heal and an eternity he cannot end.',
  },

  {
    number: 11,
    name: 'Strī',
    nameDevanagari: 'स्त्री',
    nameIAST: 'Strī',
    verseCount: 775,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Strī Parva 11.1 — the living face the field',
      devanagari: 'ततो दुर्योधने भूमौ गतासाविव पातिते ।\nधार्तराष्ट्र्यः समाजग्मुः क्रन्दन्त्यो भृशदुःखिताः ॥',
      iast: 'tato duryodhane bhūmau gatāsāv iva pātite ·\ndhārtarāṣṭryaḥ samājagmuḥ krandantyo bhṛśaduḥkhitāḥ ॥',
      meaning: 'Then, with Duryodhana struck down upon the earth as if his life had departed — the women of Dhṛtarāṣṭra\'s house came together, crying out, overcome with grief.',
    },
    stats: [
      { label: 'Setting', value: 'Kurukṣetra battlefield — the aftermath' },
      { label: 'Central voice', value: 'Gāndhārī — mother of the fallen Kauravas' },
      { label: 'Key act', value: 'Gāndhārī curses Kṛṣṇa; he accepts it' },
    ],
    narrative: 'The Strī Parva gives the war\'s cost to the women who witness it. Dhṛtarāṣṭra and Gāndhārī are led to the battlefield. Gāndhārī, who has worn a blindfold since her marriage to share her husband\'s blindness, removes it and looks at her dead sons. Her grief is the parva\'s spine — and from it she unleashes a curse on Kṛṣṇa: that his clan the Yādavas will destroy itself in thirty-six years, just as she has watched the Kurus destroy themselves. Kṛṣṇa accepts the curse. The parva also holds Kuntī\'s revelation that Karṇa was her firstborn son — delivered standing over his body.',
    actors: [
      { name: 'Gāndhārī', nameDevanagari: 'गांधारी', role: 'mother of the Kauravas, saint and sage', alignment: 'neutral', description: 'Her curse of Kṛṣṇa — delivered with the full moral authority of a grieving mother and a woman of unbroken spiritual practice — is accepted by him without argument. The text treats her grief as legitimate and her curse as just.' },
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'the cursed, the accepting', alignment: 'neutral', description: 'His response to Gāndhārī\'s curse is to acknowledge it: "I know. This is already known to me. The Yādavas can be destroyed by no one but themselves. Your curse will come to pass." He does not attempt to deflect or undo it.' },
      { name: 'Kuntī', nameDevanagari: 'कुन्ती', role: 'mother of the Pandavas — and of Karṇa', alignment: 'neutral', description: 'She stands over Karṇa\'s body and reveals to her sons that he was their eldest brother. The Pandavas grieve — and are furious with her for the secret. Yudhiṣṭhira, most wounded, pronounces a curse on all women: that they shall not be able to keep secrets.' },
      { name: 'Draupadī', nameDevanagari: 'द्रौपदी', role: 'wife, mother, witness', alignment: 'pandava', description: 'She does not speak much in this parva — but her presence among the grieving women, having lost her own five sons in the Sauptika Parva, gives it its depth of collective loss. The war\'s cost lands most fully here.' },
    ],
    facts: [
      'Gāndhārī\'s blindfold — worn voluntarily since her wedding to share her blind husband\'s darkness — is the most sustained act of willed solidarity in the epic. When she finally sees the battlefield with full sight, the text suggests her śakti (spiritual power from austerity) concentrated in her eyes could have burned Yudhiṣṭhira\'s toe when her gaze fell on him. He was warned and looked down.',
      'Kuntī\'s revelation about Karṇa is the parva\'s most quietly devastating moment. She says she wanted to tell the Pandavas before the war, so they might embrace their eldest brother. She did not. The text does not explain why. The reader must live with the silence.',
      'Dhṛtarāṣṭra, when the Pandavas approach him, is about to crush Bhīma in an embrace — out of grief transformed into rage. Kṛṣṇa substitutes an iron statue of Bhīma; Dhṛtarāṣṭra crushes it, the iron shatters, and his grief is discharged. He then embraces the real Bhīma gently.',
    ],
    dating: 'The Strī Parva occurs in the days immediately following the war\'s end. In Oak\'s model, the battlefield aftermath visits take place in early November 5561 BCE. The Gaṅgā riverside cremations described at the parva\'s close — performed over several days — provide geographic and temporal context.',
    geography: 'The Kurukṣetra battlefield, Haryana — specifically the area around Samantapañcaka where the mace fight ended. The cremation of the war\'s dead on the Gaṅgā\'s banks is associated with the Hardwar–Rishikesh region of modern Uttarakhand, upriver from the battlefield. The journey from Kurukṣetra to the Gaṅgā would have taken several days.',
    teaching: 'The women who witness war understand its price more completely than those who wage it. Gāndhārī is not wrong. Kṛṣṇa accepting her curse is the closest the epic comes to an admission of guilt from the divine.',
  },

  {
    number: 12,
    name: 'Śānti',
    nameDevanagari: 'शान्ति',
    nameIAST: 'Śānti',
    verseCount: 14732,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Śānti Parva 12.1 — victory and its weight',
      devanagari: 'जित्वा तु पाण्डवाः शत्रून् कृत्वा कर्म सुदुष्करम् ।\nशिबिरं प्रविशन्तस्ते बभूवुश्चिन्तया ग्रहाः ॥',
      iast: 'jitvā tu pāṇḍavāḥ śatrūn kṛtvā karma suduṣkaram ·\nśibiraṃ praviśantas te babhūvuś cintayā grahāḥ ॥',
      meaning: 'Having conquered their enemies and accomplished the most terrible of deeds, the Pāṇḍavas, entering the camp, were seized with anguish.',
    },
    stats: [
      { label: 'Verses', value: '14,732 — the longest parva' },
      { label: 'Three books', value: 'Rājadharma · Āpaddharma · Mokṣadharma' },
      { label: 'Contains', value: 'Viṣṇu Sahasranāma · Bhīṣma\'s full teaching' },
    ],
    narrative: 'The Śānti Parva is the Mahābhārata\'s philosophical heart — and its longest book. Bhīṣma lies on his arrow-bed, choosing not to die, and Yudhiṣṭhira comes to him with every question that the war has made unanswerable. The teaching spans governance, ethics in extremity, the nature of the self, Sāṃkhya philosophy, Yoga, Vedānta, and liberation. The Viṣṇu Sahasranāma — the thousand names of Viṣṇu — is recited here. What distinguishes this parva from philosophical treatise is that the questions are asked by a man who has just won a war at incalculable human cost, and answered by a man dying on arrows of his enemies\' making.',
    actors: [
      { name: 'Bhīṣma', nameDevanagari: 'भीष्म', role: 'teacher, dying grandsire', alignment: 'neutral', description: 'Lies on his arrow-bed for weeks, choosing not to die yet. His sustained teaching across this and the next parva is the most complete account of dharma in classical Sanskrit — and it is given by someone who followed dharma and arrived on an arrow-bed.' },
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'questioner, king, the war\'s most wounded survivor', alignment: 'pandava', description: 'He won the war and cannot celebrate. He asks every question that haunts him: Was the war justified? Can a king kill? What is greater — renunciation or governance? Bhīṣma does not give him comfort. He gives him clarity.' },
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'witness, prompter of the teaching', alignment: 'neutral', description: 'Encourages Yudhiṣṭhira to go to Bhīṣma while he still lives, knowing the teaching will be lost when the grandsire dies. The Śānti Parva could not have existed without Kṛṣṇa\'s insistence that grief be postponed for the sake of knowledge.' },
    ],
    facts: [
      'The Mokṣadharma section of the Śānti Parva — alone — contains more systematic philosophy than most standalone ancient philosophical texts. It includes early formulations of Sāṃkhya, Yoga, and proto-Vedānta alongside political philosophy, economics, and ethics. Scholars consider it the single richest repository of early Indian thought in a single text.',
      'The Viṣṇu Sahasranāma is recited by Bhīṣma here in response to Yudhiṣṭhira\'s question: "Who is the one being worthy of worship above all?" It remains among the most widely chanted texts in daily Hindu practice — recited not in a temple but on a battlefield, by a dying general, to a grieving king.',
      'Bhīṣma\'s three-part structure — Rājadharma (duties of a king), Āpaddharma (dharma in catastrophe), Mokṣadharma (dharma leading to liberation) — anticipates the structure of Kauṭilya\'s Arthaśāstra and may be its source tradition. The Śānti Parva was almost certainly the reference text for early Indian statecraft.',
    ],
    dating: 'The Śānti Parva\'s duration on the arrow-bed is described as covering a period from the war\'s end to the winter solstice (Uttarāyaṇa). In Oak\'s model, this is a period of approximately 58 days between early November and late December/January of 5561–5560 BCE.',
    geography: 'Bhīṣma\'s arrow-bed was on the Kurukṣetra plain, Haryana. The Samantapañcaka region — five lakes said to have been filled with blood by Paraśurāma — is traditionally identified with the area where Bhīṣma lay. The site is now within modern Kurukṣetra city, near the Brahmasarovar tank.',
    teaching: 'Governance without dharma is organised violence. Dharma without governance remains aspiration. The Śānti Parva insists that wisdom earned through suffering is the only wisdom worth having — and that it must still be used.',
  },

  {
    number: 13,
    name: 'Anuśāsana',
    nameDevanagari: 'अनुशासन',
    nameIAST: 'Anuśāsana',
    verseCount: 6748,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Anuśāsana Parva 13.1 — the final instructions',
      devanagari: 'पितामहस्य वचनं श्रुत्वा पाण्डुसुतस्तदा ।\nपुनः पप्रच्छ राजेन्द्रं धर्मान् स युधिष्ठिरः ॥',
      iast: 'pitāmahasya vacanaṃ śrutvā pāṇḍusutastadā ·\npunaḥ papraccha rājendraṃ dharmān sa yudhiṣṭhiraḥ ॥',
      meaning: 'Having heard the words of the grandsire, that son of Pāṇḍu — Yudhiṣṭhira — again questioned the king of kings on matters of dharma.',
    },
    stats: [
      { label: 'Topics', value: 'Dāna · penance · daily ethics · liberation' },
      { label: 'Ends with', value: 'Bhīṣma\'s death on Uttarāyaṇa' },
      { label: 'Duration', value: 'The remaining weeks on the arrow-bed' },
    ],
    narrative: 'The Anuśāsana Parva continues Bhīṣma\'s teaching — more intimate now, as both speaker and listener know the teaching is nearly complete. Where the Śānti Parva addressed governance and metaphysics, this parva turns to the ethics of daily life: the nature of charitable giving, the dharma of pilgrimage, the duties of women and men in different āśramas, the nature of time and karma. At the parva\'s end, Bhīṣma chooses his moment — the sun moving northward toward Uttarāyaṇa — releases his prāṇa, and dies. His death is the epic\'s most serene moment.',
    actors: [
      { name: 'Bhīṣma', nameDevanagari: 'भीष्म', role: 'grandsire, teacher, the dying one who chooses his death', alignment: 'neutral', description: 'His final teaching is on the nature of gifts, pilgrimage, and liberation — intimate rather than grand. When Uttarāyaṇa arrives, he collects his breath upward through his body, from feet to crown, and releases it. The description of his death is the most precise account of conscious dying in Sanskrit literature.' },
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'king, student, the one who must now govern', alignment: 'pandava', description: 'By the end of this parva he has received a complete education in dharma from the person best qualified to give it. He is ready to be king — but this parva also contains everything he will carry forward as guilt.' },
    ],
    facts: [
      'Bhīṣma\'s boon of icchā-mṛtyu (choosing one\'s death date) was granted by his father Śāntanu for the sacrifice Bhīṣma made in renouncing the throne and taking his celibacy vow. The parva\'s close — where he counts the sun\'s position, waits for Uttarāyaṇa, and then deliberately releases his life — is the fulfilment of a vow that began before the epic started.',
      'The Anuśāsana Parva contains the Dānādharma section — an extended treatment of the ethics of giving — that is among the oldest surviving systematic discussions of charity, gift, and reciprocity in Indian literature. Its insistence that the spirit of giving matters more than the gift itself anticipates later Vedāntic formulations.',
      'Bhīṣma\'s death is witnessed by Kṛṣṇa, the Pandavas, the remaining Kaurava survivors, and celestial beings. Flowers are said to fall from the sky. The Gaṅgā is said to weep. The text allows itself this one moment of open mourning for a character it has consistently respected while never excusing.',
    ],
    dating: 'The winter solstice (Uttarāyaṇa) is described as the specific astronomical moment of Bhīṣma\'s death. In Oak\'s model, this corresponds to late December 5561 BCE or early January 5560 BCE — consistent with his eighteen-day war in October–November followed by approximately 58 days on the arrow-bed.',
    geography: 'Bhīṣma died on the Kurukṣetra plain. His body was carried to the Gaṅgā for cremation. The Bhīṣmakuṇḍ — a sacred tank in Kurukṣetra — is traditionally associated with the arrow-bed site. The Gaṅgā (Bhīṣma\'s mother by divine origin) is said to have risen at his death, in some retellings, to receive him.',
    teaching: 'Dying with full consciousness, teaching until the last breath, choosing the moment of release — this is itself a form of mokṣa. Bhīṣma\'s death is not the end of his dharma but its completion.',
  },

  {
    number: 14,
    name: 'Āśvamedhika',
    nameDevanagari: 'अश्वमेधिक',
    nameIAST: 'Āśvamedhika',
    verseCount: 3320,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Āśvamedhika Parva 14.1 — the king seeks purification',
      devanagari: 'ततो राजा युधिष्ठिरः प्राप्य राज्यमकण्टकम् ।\nअश्वमेधं महायज्ञं कर्तुमैच्छद्विशाम्पते ॥',
      iast: 'tato rājā yudhiṣṭhiraḥ prāpya rājyam akaṇṭakam ·\naśvamedhaṃ mahāyajñaṃ kartum aicchat viśāmpate ॥',
      meaning: 'Then King Yudhiṣṭhira, having secured an uncontested kingdom, desired to perform the great sacrifice of the Aśvamedha, O lord of the people.',
    },
    stats: [
      { label: 'Purpose', value: 'Purification from the sin of brahmin and kinsman killing' },
      { label: 'Contains', value: 'Anugīta — Kṛṣṇa\'s summary of the Gīta to Arjuna' },
      { label: 'Strange battle', value: 'Arjuna killed and revived by his own son' },
    ],
    narrative: 'The horse sacrifice is the ancient Vedic mechanism for a king to cleanse cosmic debt accrued through war. A consecrated horse wanders freely for a year; any king who stops it must fight or submit; Arjuna follows to enforce the ritual. The parva\'s strangest episode: in Maṇipura, Arjuna is killed by Babhruvāhana — his own son from his Nāga wife Citrāṅgadā — and is revived by Ulupi (his other Nāga wife) with a gem from the underworld. The parva also contains the Anugīta — Kṛṣṇa\'s abbreviated re-teaching of the Gīta to Arjuna, who admits he has forgotten it.',
    actors: [
      { name: 'Arjuna', nameDevanagari: 'अर्जुन', role: 'guardian of the sacrificial horse', alignment: 'pandava', description: 'Spends a year following the horse across the subcontinent, fighting kings. His death at the hands of his own son — and revival — is the parva\'s most psychologically interesting episode: the warrior who faced every enemy except the consequence of his own past.' },
      { name: 'Babhruvāhana', nameDevanagari: 'बभ्रुवाहन', role: 'Arjuna\'s son, king of Maṇipura', alignment: 'neutral', description: 'Kills his own father in single combat because Arjuna demands it — insisting that a son who does not fight when his father\'s war-flag arrives is no son at all. The parva\'s ethics are not tidy. He revives Arjuna and is acknowledged; Arjuna acknowledges him.' },
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'teacher, Gīta re-summariser', alignment: 'neutral', description: 'When Arjuna admits he has forgotten the Gīta, Kṛṣṇa says he cannot reproduce it exactly as it was spoken in the heat of the moment — the exact words arose from a specific state. He gives the Anugīta as a summary instead. This admission of unrepeatable experience is philosophically significant.' },
    ],
    facts: [
      'Arjuna\'s admission that he forgot the Gīta is the Mahābhārata\'s quiet confession that transformation is not linear. The epic does not shame him for forgetting — Kṛṣṇa simply gives a shorter version. This may be the oldest textual acknowledgement that even the greatest spiritual teaching requires repeated encounter.',
      'The Aśvamedha horse wandering for a year across the subcontinent functions as a cartographic device: the kings who submit mark the boundaries of Yudhiṣṭhira\'s empire, and those who fight mark the edges of his influence. The ritual is as much political geography as spiritual purification.',
      'Ulupi — the Nāga princess who revives Arjuna — acts here from her own love and her own guilt (she had previously asked Babhruvāhana to fight Arjuna). The parva allows its women complex motivations across multiple books without reducing them.',
    ],
    dating: 'The Āśvamedhika Parva is set several years after the war. Oak\'s dating places it in the early years of Yudhiṣṭhira\'s reign, approximately 5558–5555 BCE. The horse\'s year-long journey creates a natural narrative gap after the war that is consistent with the time required for kingdom stabilisation.',
    geography: 'The sacrificial horse wandered across the entire subcontinent — from Hastinapura northward to the Himalayas, eastward to Bengal, south to the Deccan, and west to the sea. Maṇipura — where Arjuna was killed and revived — is identified with modern Manipur in northeast India, where the Citrakūṭa mountain associated with Arjuna\'s Nāga wife traditions is still venerated.',
    teaching: 'Even a righteous king must undergo purification. Power accumulates stain regardless of the justice of the cause. The Aśvamedha is not about guilt — it is about the acknowledgement that governance and violence cannot be fully separated, and that acknowledgement itself has value.',
  },

  {
    number: 15,
    name: 'Āśramavāsika',
    nameDevanagari: 'आश्रमवासिक',
    nameIAST: 'Āśramavāsika',
    verseCount: 1506,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Āśramavāsika Parva 15.1 — the old king resolves to leave',
      devanagari: 'ततः कालेन महता धृतराष्ट्रो जनेश्वरः ।\nगान्धार्या सहितो राजन् वनं यातुं व्यवस्यत ॥',
      iast: 'tataḥ kālena mahatā dhṛtarāṣṭro janeśvaraḥ ·\ngāndhāryā sahito rājan vanaṃ yātuṃ vyavasita ॥',
      meaning: 'Then, after a long time, Dhṛtarāṣṭra, lord of the people, resolved together with Gāndhārī, O king, to depart for the forest.',
    },
    stats: [
      { label: 'Those who depart', value: 'Dhṛtarāṣṭra, Gāndhārī, Kuntī, Vidura' },
      { label: 'Vidura\'s liberation', value: 'Merges into Yudhiṣṭhira — yoga dehatyāga' },
      { label: 'Final deaths', value: 'Forest fire takes Dhṛtarāṣṭra, Gāndhārī, Kuntī' },
    ],
    narrative: 'The Āśramavāsika Parva is the epic\'s autumnal book — the generation that caused the war completing their arcs in forest renunciation. Dhṛtarāṣṭra and Gāndhārī, having lived in Hastinapura under Yudhiṣṭhira\'s care for fifteen years, finally depart for the forest with Kuntī and Vidura. Vidura achieves liberation first — in a scene of extraordinary intimacy, he sheds his body into Yudhiṣṭhira\'s. The three elders die in a forest fire. Yudhiṣṭhira is told by Nārada; the Pandavas grieve and perform the rites. The parva is quiet and certain.',
    actors: [
      { name: 'Dhṛtarāṣṭra', nameDevanagari: 'धृतराष्ट्र', role: 'blind king, bereaved father, renunciant', alignment: 'kaurava', description: 'His fifteen years in Hastinapura after the war — as guest of the very sons of the man his son wronged — are described with more dignity than most of his earlier life. His forest departure is voluntary, not exile. The text grants him this.' },
      { name: 'Gāndhārī', nameDevanagari: 'गांधारी', role: 'queen, ascetic, the woman who saw the truth', alignment: 'neutral', description: 'Accompanies her husband to the forest as she accompanied him in blindness throughout. Her death in the forest fire is peaceful — consistent with someone who has been practising equanimity for fifty years.' },
      { name: 'Kuntī', nameDevanagari: 'कुन्ती', role: 'mother of the Pandavas, renunciant', alignment: 'neutral', description: 'Chooses to accompany Dhṛtarāṣṭra and Gāndhārī to the forest rather than live in comfort with her victorious sons. The text offers no explanation for this choice. It does not need one.' },
      { name: 'Vidura', nameDevanagari: 'विदुर', role: 'Kaurava minister, dharma embodied', alignment: 'neutral', description: 'Dies first — in a forest meeting with Yudhiṣṭhira. He sits against a tree, enters a yogic state, and literally transmits his life-force into Yudhiṣṭhira. The king suddenly feels luminous. This is deha-tyāga, voluntary death through yoga — one of the earliest descriptions in Sanskrit literature.' },
    ],
    facts: [
      'The forest fire that kills the three elders is described as beginning from a spark from their own ritual fires — which is to say, from their own austerities. The text treats this as fitting: they die from the heat of their own tapas, not from external violence. The war killed their children; their own practice claims them.',
      'Vyāsa appears to Dhṛtarāṣṭra in the forest and grants him — briefly, for one night — the sight to see all his dead sons restored to their pre-war forms, healthy and at peace. The vision lasts one night on the Gaṅgā\'s banks. By morning, they have dissolved back into their cosmic forms.',
      'Vidura\'s merger into Yudhiṣṭhira is one of the few descriptions of voluntary physical death through yoga in the Mahābhārata. The text says Yudhiṣṭhira became simultaneously brighter and heavier afterward — as if carrying something additional. He did not eat for that day.',
    ],
    dating: 'This parva is set fifteen years after the war\'s end, in Oak\'s model approximately 5546 BCE. The departure of the elders to the forest follows the traditional āśrama system: the vanaprastha (forest-dwelling) stage after a full householder life — here fulfilled literally rather than symbolically.',
    geography: 'The elders depart for the Himalayas — specifically the Gaṅgā valley near Hardwar in present-day Uttarakhand. The forest fire and their deaths are associated with the deep forest region of the upper Gaṅgā valley. Vidura\'s liberation is described near a lake in this same region, which is still considered sacred ground in the Haridwar pilgrimage tradition.',
    teaching: 'Renunciation is not failure — it is the completion of a life\'s arc. What Dhṛtarāṣṭra and Gāndhārī could not do as rulers, they achieve in the forest: they die having made their peace.',
  },

  {
    number: 16,
    name: 'Mausala',
    nameDevanagari: 'मौसल',
    nameIAST: 'Mausala',
    verseCount: 320,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Mausala Parva 16.1 — the omens before the end',
      devanagari: 'षट्त्रिंशे तु तदा वर्षे गते भारतसत्तम ।\nयदूनां निधनं घोरमुत्पातैरभ्यसूचयत् ॥',
      iast: 'ṣaṭtriṃśe tu tadā varṣe gate bhāratasattama ·\nyadūnāṃ nidhanaṃ ghoram utpātair abhyasūcayat ॥',
      meaning: 'In the thirty-sixth year, O best of the Bhāratas, terrible omens foretold the dreadful destruction of the Yādavas.',
    },
    stats: [
      { label: 'Time elapsed', value: '36 years after the Kurukṣetra war' },
      { label: 'The curse', value: 'Gāndhārī\'s — fulfilled exactly' },
      { label: 'Kṛṣṇa\'s end', value: 'Arrow in the heel by hunter Jara; he departs willingly' },
    ],
    narrative: 'Thirty-six years after the war, Gāndhārī\'s curse lands. Terrible omens precede the Yādava destruction: fish fall from the sky, rats gnaw at weapons, children mock their elders, the sea surges without wind. A group of sages curses some young Yādava nobles; from the curse grows an eraka reed that, turned to powder, becomes the club with which the Yādavas kill one another in a drunken brawl at Prabhāsa. Balarāma releases his life first in meditation; a white serpent exits his mouth and enters the sea. Kṛṣṇa, meditating beneath a tree, is shot in the heel by a hunter named Jara — mistaken for a deer. He receives the arrow calmly and departs. Arjuna watches Dvārakā sink into the sea.',
    actors: [
      { name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', role: 'the departing god', alignment: 'neutral', description: 'His death — a hunter\'s arrow in the sole of his foot, his one vulnerable point — is simultaneously an accident and an acceptance. He tells Jara not to grieve; the arrow was welcome. His departure is as intentional as Bhīṣma\'s, only quieter.' },
      { name: 'Balarāma', nameDevanagari: 'बलराम', role: 'Kṛṣṇa\'s brother, the plough-bearer', alignment: 'neutral', description: 'Sits in meditation at the sea\'s edge, releases his life through yoga, and a white serpent (Śeṣa Nāga — his original form) exits through his mouth into the ocean. He dies before his brother, in perfect peace, without drama.' },
      { name: 'Arjuna', nameDevanagari: 'अर्जुन', role: 'witness to the end of an age', alignment: 'pandava', description: 'Arrives at Dvārakā after Kṛṣṇa\'s death to shepherd the surviving Yādava women and children to Indraprastha. Midway through the journey, the party is attacked by ordinary bandits — and Arjuna cannot invoke his celestial weapons. His skill has departed with Kṛṣṇa. He fights with what he has and fails to protect everyone. This moment, more than any other, marks the end of the age.' },
    ],
    facts: [
      'The immediate cause of the Yādava destruction was a curse by ṛṣis whom some young Yādavas had mocked — dressing a young man in women\'s clothes and pretending he was pregnant, asking the sages to predict the birth. The sages cursed the "child" to become an iron club that would destroy the Yādava race. The club was ground to powder and thrown into the sea; it washed back as the eraka reed.',
      'Kṛṣṇa\'s heel was vulnerable because of his childhood — when his mother Yaśodā held him by the foot to swing him overhead (or, in some traditions, because he was shot at the heel\'s sole while the rest of him was divine). Jara the hunter\'s name means "old age." Kṛṣṇa was killed by Old Age mistaking him for a deer.',
      'Dvārakā — Kṛṣṇa\'s golden city — sank into the sea exactly as Kṛṣṇa had predicted. Marine archaeologists from the National Institute of Oceanography have found submerged structures off the coast of Dwarka, Gujarat, at depths consistent with ancient occupation — though their dating and relationship to the text remain scholarly questions.',
    ],
    dating: 'The text states explicitly that the Yādava destruction occurred thirty-six years after the Kurukṣetra war. In Oak\'s model, this places the Mausala Parva\'s events around 5525 BCE. The submersion of Dvārakā is geologically consistent with rising sea levels at the end of the last glacial period, which Oak uses as independent support for his early dating.',
    geography: 'Prabhāsa — where the Yādavas destroyed one another — is identified with Somanātha, Gujarat, on the Arabian Sea coast. Dvārakā is the modern city of Dwarka, Gujarat, sacred as one of the four dhāms. The National Institute of Oceanography has documented submerged structures in the Gulf of Kutch near Bet Dwarka island, dated by some researchers to 9,000 years ago, though the academic consensus remains cautious.',
    teaching: 'Even the divine protector cannot prevent what karma has set in motion. Kṛṣṇa knew the Yādavas would destroy themselves — he knew since Gāndhārī spoke on the battlefield. He did not prevent it. The Mahābhārata insists that even omniscience does not mean the right or the power to undo consequence.',
  },

  {
    number: 17,
    name: 'Mahāprasthānika',
    nameDevanagari: 'महाप्रस्थानिक',
    nameIAST: 'Mahāprasthānika',
    verseCount: 106,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Mahāprasthānika Parva 17.1 — after Kṛṣṇa, the Pāṇḍavas resolve',
      devanagari: 'ततः श्रुत्वा महाबाहुः कृष्णस्य निधनं नृप ।\nपाण्डवः परमोदर्कं चिन्तयन्नुपविष्टवान् ॥',
      iast: 'tataḥ śrutvā mahābāhuḥ kṛṣṇasya nidhanaṃ nṛpa ·\npāṇḍavaḥ paramodarkam cintayann upaviṣṭavān ॥',
      meaning: 'Then, having heard of the death of Kṛṣṇa, O king, the mighty-armed Pāṇḍava sat in contemplation of what must now follow.',
    },
    stats: [
      { label: 'Verses', value: '106 — second shortest parva' },
      { label: 'Walkers', value: 'Five Pandavas + Draupadī + a dog' },
      { label: 'Direction', value: 'North — toward Sumeru, the cosmic mountain' },
    ],
    narrative: 'The shortest of the major parvas — just 106 verses — and the one that requires the least. Yudhiṣṭhira crowns Parīkṣit (Abhimanyu\'s son, the war\'s last survivor) king of Hastinapura, places Yuyutsu over the Kurus, and the Pandavas walk north. They do not look back. One by one they fall along the path: Draupadī first (partial attachment), then Sahadeva (pride in wisdom), Nakula (pride in beauty), Arjuna (pride in skill), Bhīma (pride in strength). Only Yudhiṣṭhira and a dog walk on. At the mountain\'s edge Indra appears with a celestial chariot. He says the dog cannot enter heaven. Yudhiṣṭhira refuses to board without the dog.',
    actors: [
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'the last walker, the one who refuses', alignment: 'pandava', description: 'His refusal to abandon the dog even at the threshold of heaven is the parva\'s moral summit — and the final test. He would not abandon Draupadī in the dice hall, but the hall contained a thousand reasons for inaction. Here there is nothing to excuse him if he boards. He does not board.' },
      { name: 'Draupadī', nameDevanagari: 'द्रौपदी', role: 'first to fall', alignment: 'pandava', description: 'Falls first — the text says because of unequal love for Arjuna. She did not love all five husbands equally; she loved Arjuna most. The Mahābhārata does not present this as a sin. It presents it as the most human thing about her — and in the economy of the mahāprasthāna, the most human thing is the first to be left behind.' },
      { name: 'The dog', nameDevanagari: '(श्वान)', role: 'companion, the final test', alignment: 'neutral', description: 'Walked with Yudhiṣṭhira the entire journey. When Indra says it cannot enter heaven, Yudhiṣṭhira chooses the dog over the chariot. The dog then reveals itself as Dharma — Yudhiṣṭhira\'s father, testing his son one final time. He passes.' },
    ],
    facts: [
      'The reason each Pandava falls is given explicitly — and each reason is a specific pride or attachment rooted in their greatest strength. Arjuna\'s fall comes from pride in his archery ("I will destroy all my enemies in a single day"). The greatest warriors fall from exactly the virtue that made them warriors.',
      'Yudhiṣṭhira\'s response to Indra\'s prohibition of the dog is a philosophical argument: a person who abandons one who has been faithful, who seeks protection, who has done no wrong — such a person commits a sin equal to the great sins. He applies his own dharmic reasoning to a dog. The test is whether dharma is conditional.',
      'The dog revealing itself as Dharma (Yama/Dharmarāja) is the third time Yudhiṣṭhira\'s father appears in animal form to test him — the first being the crane (Yakṣa) in the Vana Parva. The epic frames the final test as a repetition of the first, with the answer the same.',
    ],
    dating: 'The mahāprasthāna is set after the 36-year post-war period and the Yādava destruction, placing it in Oak\'s model around 5524–5523 BCE. The northward walk toward "Sumeru" — interpreted as the Himalayas — is geographically consistent with a departure from the Gangetic plain toward the high ranges.',
    geography: 'The mahāprasthāna route is traditionally traced northward from Hastinapura through the Himalayas. The Pandavas are said to have passed through the Himalayas near modern Uttarkashi, Uttarakhand, and continued toward the peaks. The "mountain of Sumeru" is associated with Mount Meru — variously identified with Kailash in Tibet or with the axial mountain of cosmological geography.',
    teaching: 'The final act of a dharmic life is the act of letting everything go — except the one commitment that cannot be abandoned without abandoning dharma itself. Yudhiṣṭhira does not enter heaven. He refuses entry on those terms. And that refusal is what earns it.',
  },

  {
    number: 18,
    name: 'Svargārohaṇa',
    nameDevanagari: 'स्वर्गारोहण',
    nameIAST: 'Svargārohaṇa',
    verseCount: 209,
    containsGita: false,
    phase: 'after',
    shloka: {
      ref: 'Svargārohaṇa Parva 18.1 — the king ascends and is tested one last time',
      devanagari: 'ततो युधिष्ठिरो राजा प्राप्य स्वर्गमनुत्तमम् ।\nददर्श कौरवान् सर्वान् स्वर्गस्थान् दिव्यरूपिणः ॥',
      iast: 'tato yudhiṣṭhiro rājā prāpya svargam anuttamam ·\ndadarśa kauravān sarvān svargasthān divyarūpiṇaḥ ॥',
      meaning: 'Then King Yudhiṣṭhira, having attained the highest heaven, beheld all the Kauravas there, clothed in divine and radiant forms.',
    },
    stats: [
      { label: 'Verses', value: '209 — shortest parva' },
      { label: 'The final test', value: 'Yudhiṣṭhira sees his brothers in apparent hell' },
      { label: 'Resolution', value: 'All illusions dissolve; all are seen in their true forms' },
    ],
    narrative: 'The final parva of the Mahābhārata is brief and absolute. Yudhiṣṭhira enters the celestial realm but finds Duryodhana seated in glory while his own brothers and Draupadī appear to be in suffering. He refuses to stay in a heaven that holds his enemies in bliss and his kin in pain — and says so to the divine messengers. This refusal is the last test: the suffering is revealed as illusion, the final purification. All characters appear in their true cosmic forms — Draupadī as the goddess Śrī, Karṇa in solar radiance, the Pandavas as forms of Indra and the Aśvins — and Yudhiṣṭhira bathes in the Gaṅgā of heaven to shed his human form. The river ends.',
    actors: [
      { name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', role: 'the righteous king, tested one last time', alignment: 'pandava', description: 'His anger at finding Duryodhana in heaven and his brothers in apparent suffering — and his willingness to stay in "hell" with his brothers rather than accept a heaven that violates his sense of justice — is the last and most complete expression of his dharma. He cannot accept selective grace.' },
      { name: 'Karṇa', nameDevanagari: 'कर्ण', role: 'revealed in his true radiance', alignment: 'neutral', description: 'Appears in his solar form — the son of Sūrya, the sun god, restored to his divine nature after the suffering of his human life. The text\'s final gift to its most tragic character: he is seen, at last, as what he always was.' },
      { name: 'Draupadī', nameDevanagari: 'द्रौपदी', role: 'revealed as the goddess Śrī', alignment: 'neutral', description: 'Appears in her true form as Śrī — the goddess of sovereignty and abundance — after the dissolution of the illusory torment. The woman who was staked in a dice game, dragged into a court, whose sons were killed in their sleep, is revealed as the goddess who never ceased to be sovereign.' },
    ],
    facts: [
      'The apparent suffering of the Pandavas in "hell" is explicitly described as a brief period of purification — a burning away of whatever karma remained from their acts in the war. The text teaches that even the righteous must pass through this. The Mahābhārata does not offer clean moral accounting: good acts do not cancel bad acts, they must both be lived through.',
      'Duryodhana is in heaven because he died as a warrior on the battlefield, having fulfilled his role without flinching. The text is categorical about this: a warrior\'s death in battle is itself a form of sacrifice. The parva does not morally rehabilitate Duryodhana — it simply confirms that the afterlife is not a continuation of earthly judgment.',
      'The Mahābhārata ends not with a victory celebration but with a bath. Yudhiṣṭhira sheds his human body in the Gaṅgā of heaven, emerges in his divine form, and is greeted by all the figures of the epic restored to their cosmic identities. The final image is of everyone, simultaneously, at home.',
    ],
    dating: 'The Svargārohaṇa Parva has no astronomical timestamps — it is set in the celestial realm. It is the only parva entirely outside historical or geographical time. Oak and other researchers do not attempt to date it; it is by design beyond the scope of terrestrial chronology.',
    geography: 'No earthly geography applies to this parva — it is set in svarga (the celestial sphere). The Gaṅgā of heaven (Mandākinī) in which Yudhiṣṭhira bathes is the cosmic river of which the terrestrial Gaṅgā is a portion. The parva\'s deliberate departure from geography is the text\'s signal that the journey is complete: there is no place left to locate it.',
    teaching: 'Heaven itself is the last illusion. The test is not whether you deserve to enter — it is whether you can recognise that the categories of heaven and hell, friend and enemy, victory and defeat, are themselves the final veil. When Yudhiṣṭhira refuses to accept a heaven that seems unjust, he passes through the last gate. Truth is found when all categories dissolve.',
  },
];
