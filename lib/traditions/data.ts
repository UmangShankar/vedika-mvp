// ── Types ───────────────────────────────────────────────────────────────────

export type AccentKey = 'purple' | 'teal' | 'coral' | 'amber' | 'green' | 'pink' | 'gray' | 'blue';

export const ACCENT_COLORS: Record<AccentKey, { fill: string; border: string; text: string }> = {
  purple: { fill: '#EEEDFE', border: '#AFA9EC', text: '#3C3489' },
  teal:   { fill: '#E1F5EE', border: '#5DCAA5', text: '#085041' },
  coral:  { fill: '#FCEBEB', border: '#F09595', text: '#791F1F' },
  amber:  { fill: '#FAEEDA', border: '#EF9F27', text: '#633806' },
  green:  { fill: '#EAF3DE', border: '#97C459', text: '#27500A' },
  pink:   { fill: '#FBEAF0', border: '#ED93B1', text: '#72243E' },
  gray:   { fill: '#F1EFE8', border: '#B4B2A9', text: '#444441' },
  blue:   { fill: '#E6F1FB', border: '#85B7EB', text: '#0C447C' },
};

export type Thinker = {
  name: string;
  dates: string;
  role: string;
  quote: string;
  works: string[];
};

export type Comparison = {
  darshana: string;
  title: string;
  question: string;
  slug?: string; // if page exists, undefined = link to Ask Vedika
};

export type Tradition = {
  slug: string;
  name: string;
  section: 'heterodox' | 'buddhist' | 'world';
  accent: AccentKey;
  level: 'beginner' | 'intermediate' | 'advanced';
  tagline: string;
  iconLetter: string;
  opening: string; // 2-3 sentences
  concepts: string[]; // concept names
  thinkers: Thinker[];
  comparisons: Comparison[];
  // Deep-dive page content
  badge: string; // e.g. "Heterodox school · Nāstika"
  h1: string; // full descriptive title
  subtitle: string; // 2-3 sentence philosophical orientation
  readTime: string;
  relatedSlugs: string[]; // other tradition slugs
  essaySections: Array<{ heading: string; body: string }>;
  sources: Array<{ title: string; note: string }>;
};

// ── Tradition data ───────────────────────────────────────────────────────────

export const TRADITIONS: Tradition[] = [

  // ── Section A: Heterodox ────────────────────────────────────────────────

  {
    slug: 'carvaka',
    name: 'Cārvāka / Lokāyata',
    section: 'heterodox',
    accent: 'coral',
    level: 'intermediate',
    tagline: 'Classical Indian materialism — only this life is real',
    iconLetter: 'C',
    opening: 'Radical empiricism. Only direct perception (pratyakṣa) is valid knowledge. No karma, no rebirth, no gods. The school that forced every other Indian tradition to justify its metaphysics. Its primary texts are lost; known almost entirely through opponents\' critiques — which makes Cārvāka one of philosophy\'s great absent voices.',
    concepts: [
      'Pratyakṣa (sole pramāṇa)',
      'Rejection of karma',
      'Svabhāva (nature alone)',
      'Consciousness as epiphenomenon',
    ],
    thinkers: [
      {
        name: 'Bṛhaspati',
        dates: 'c. 600 BCE (legendary)',
        role: 'Founder — Bārhaspatya Sūtras lost',
        quote: 'Accept only what perception shows you. All else is conjecture dressed as revelation.',
        works: ['Bārhaspatya Sūtras (lost)'],
      },
    ],
    comparisons: [
      {
        darshana: 'Nyāya',
        title: 'Can inference ever give us knowledge that perception cannot?',
        question: 'The inference debate',
        slug: 'carvaka-vs-nyaya',
      },
      {
        darshana: 'Sāṃkhya',
        title: 'Two atheisms: one sees only matter, one sees Puruṣa beyond it',
        question: 'Materialism vs dualism',
        slug: 'carvaka-vs-samkhya',
      },
      {
        darshana: 'Mīmāṃsā',
        title: 'Is the Vedic word authoritative — or just more human testimony?',
        question: 'The authority of scripture',
        slug: undefined,
      },
    ],
    badge: 'Heterodox school · Nāstika',
    h1: 'Cārvāka / Lokāyata — Classical Indian Materialism and the Sole Authority of Perception',
    subtitle: 'The only Indian school to reject all metaphysics beyond the directly perceptible. Cārvāka\'s radical empiricism — accepting only perception as valid knowledge, denying karma, rebirth, and gods — forced every other school to prove rather than merely assert the realities they claimed. Its texts are lost; it survives entirely through its opponents\' refutations.',
    readTime: '12 min',
    relatedSlugs: ['jain-philosophy', 'early-buddhism', 'madhyamaka'],
    essaySections: [
      {
        heading: 'What this tradition is — and what it is not',
        body: 'Cārvāka is not scepticism in the Western sense — it does not doubt whether we can know anything. It is confident materialism: the world is exactly as perception shows it to be. Matter is the only reality. Consciousness is a byproduct of the right combination of material elements. When the body dissolves, consciousness dissolves with it. There is no soul, no karma, no god, no afterlife — and the Vedas are the composition of fraudulent priests.\n\nThis is not nihilism either. Cārvāka affirms pleasure (kāma) and this-worldly gain (artha) as legitimate ends. It denies the fourth end — liberation (mokṣa) — not because it dismisses wellbeing, but because it sees no soul that needs liberating.',
      },
      {
        heading: 'Historical and civilisational context',
        body: 'Cārvāka belongs to the Śramaṇa era — the extraordinary intellectual ferment of c. 700–300 BCE when India produced Buddhism, Jainism, Ājīvika, and Cārvāka almost simultaneously. All challenged the Vedic sacrificial order. Cārvāka challenged it most radically.\n\nThe Bārhaspatya Sūtras (attributed to Bṛhaspati, a semi-legendary figure) are entirely lost. What survives: fragments quoted by opponents — Śaṅkara, Mādhava (Sarva-darśana-saṃgraha), Jayanta Bhaṭṭa — who quote Cārvāka in order to refute it. This makes Cārvāka philosophy one of the most philosophically important traditions known almost entirely through hostile sources.',
      },
      {
        heading: 'Core claim: pratyakṣa as the sole pramāṇa',
        body: 'Every other Indian school accepts multiple pramāṇas — perception, inference, testimony, comparison. Cārvāka accepts only perception. Its argument against inference: inference depends on the principle that a mark reliably indicates its referent (e.g., smoke always indicates fire). But this principle can only be established by induction — observing many cases. And induction cannot be verified without already accepting inference. Inference, therefore, is circular. It gives us nothing perception cannot give us directly.',
      },
      {
        heading: 'Core claim: consciousness as epiphenomenon',
        body: 'Consciousness (caitanya) is not a separate substance but an emergent property of the body — specifically, of the combination of the four elements (earth, water, fire, air) in the right proportion. The analogy: the intoxicating power of fermented grain is not present in the grain itself but emerges from the right combination. Consciousness is like this — a byproduct, not a substance.\n\nThis collapses the Sāṃkhya distinction between Prakṛti and Puruṣa, the Advaita identification of ātman with Brahman, the Buddhist notion of a mental continuum, and the Nyāya postulation of a permanent self.',
      },
      {
        heading: 'The irony of its survival',
        body: 'Cārvāka survives because its opponents needed it. Śaṅkara refutes it to establish Advaita. Udayana argues against it to prove god\'s existence. The Nyāya school develops its theory of inference partly to answer Cārvāka\'s challenge. This is Cārvāka\'s lasting philosophical contribution: not its own positive doctrine (largely lost) but the pressure it exerted on every other school to justify its foundations.',
      },
    ],
    sources: [
      {
        title: 'Sarva-darśana-saṃgraha · Mādhava (14th c. CE)',
        note: 'Contains the most complete surviving account of Cārvāka philosophy, quoted from lost originals',
      },
      {
        title: 'Nyāya-Mañjarī · Jayanta Bhaṭṭa (9th c. CE)',
        note: 'Extensive Cārvāka quotations in the context of pramāṇa debate',
      },
    ],
  },

  {
    slug: 'jain-philosophy',
    name: 'Jain Philosophy',
    section: 'heterodox',
    accent: 'green',
    level: 'intermediate',
    tagline: 'Anekāntavāda, ahiṃsā, and the perfectible soul',
    iconLetter: 'J',
    opening: 'One of the oldest surviving Indian philosophies. The soul (jīva) is eternal and real — but bound by literal karmic matter. Liberation is the soul\'s return to its own intrinsic nature: omniscience, bliss, infinite energy. Anekāntavāda — the many-sidedness of truth — is Jainism\'s greatest intellectual gift to all of Indian philosophy.',
    concepts: [
      'Anekāntavāda',
      'Syādvāda',
      'Jīva / Ajīva',
      'Karma as matter',
      'Three jewels (samyak jñāna, darśana, cāritra)',
    ],
    thinkers: [
      {
        name: 'Mahāvīra',
        dates: 'c. 599–527 BCE',
        role: '24th Tīrthaṅkara',
        quote: 'The soul that has shed all karma rises to the apex of the universe and rests in its own nature.',
        works: ['Āgamas (oral tradition)'],
      },
      {
        name: 'Umāsvāti',
        dates: 'c. 2nd–5th c. CE',
        role: 'Systematiser — Tattvārtha Sūtra',
        quote: 'Tattvartha Sutra: \'right faith, right knowledge, right conduct together constitute the path to liberation.\'',
        works: ['Tattvārtha Sūtra'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'Anekāntavāda vs one absolute truth: can both be right?',
        question: 'Many perspectives vs one reality',
        slug: 'jain-philosophy-vs-advaita',
      },
      {
        darshana: 'Sāṃkhya',
        title: 'Karma as matter vs karma as guṇa-motion: what is at stake?',
        question: 'The metaphysics of karma',
        slug: 'jain-philosophy-vs-samkhya',
      },
      {
        darshana: 'Vedānta on mokṣa',
        title: 'Individual soul perfected vs individual soul dissolved',
        question: 'Liberation: perfection or dissolution?',
        slug: undefined,
      },
    ],
    badge: 'Heterodox school · Nāstika',
    h1: 'Jain Philosophy — Anekāntavāda, Karma as Matter, and the Perfectible Soul',
    subtitle: 'One of the oldest continuously surviving Indian philosophical traditions. Jainism affirms a real, eternal soul (jīva) bound by literal karmic matter — and its liberation as the soul\'s return to omniscience, bliss, and infinite energy at the apex of the universe. Its doctrine of anekāntavāda — the many-sidedness of truth — remains one of the most original contributions to epistemology in any philosophical tradition.',
    readTime: '14 min',
    relatedSlugs: ['carvaka', 'early-buddhism', 'jain-philosophy-vs-advaita'],
    essaySections: [
      {
        heading: 'What this tradition is — and what it is not',
        body: 'Jainism is often reduced to ahiṃsā — non-violence. This misses the systematic philosophical architecture underneath. Jainism is a complete metaphysics: a detailed ontology of souls (jīvas) and non-soul substances (ajīvas), a physical theory of karma as actual fine particles that adhere to the soul, a liberation path structured around three jewels, and an epistemology (anekāntavāda) that addresses the partial nature of all human knowledge.\n\nIt is not Hindu — it explicitly rejects Vedic authority, the caste system as metaphysically grounded, and the existence of a creator god. But unlike Cārvāka, it is profoundly metaphysical: the soul is real, karma is real, liberation is real.',
      },
      {
        heading: 'Karma as physical matter',
        body: 'Jainism\'s most distinctive metaphysical claim: karma is not a moral law or a tendency but actual fine matter (kārmaṇa-vargaṇā) that adheres to the soul through the force of passions (kaṣāyas) — anger, pride, deceit, greed. As karma accumulates, it obscures the soul\'s natural omniscience.\n\nLiberation, accordingly, is a physical process: the shedding of all accumulated karma through non-attachment, non-violence, and ascetic practice, until the soul\'s natural luminosity is fully restored. The liberated soul (siddha) rises to the apex of the universe (loka-ākāśa) and rests there, motionless, in infinite knowledge, infinite perception, infinite bliss, infinite energy.',
      },
      {
        heading: 'Anekāntavāda — the many-sidedness of truth',
        body: 'Anekāntavāda is the philosophical thesis that reality is complex and no single perspective can capture it fully. Every statement about reality is true from one perspective (naya) and partial from another. Syādvāda — the doctrine of conditional predication — expresses this through a sevenfold formula: a thing is (syāt asti), is not (syāt nāsti), both is and is not, inexpressible, and so on.\n\nThis is not relativism — Jainism does not say all views are equally true. It says all views are partially true, and the philosophically rigorous response is to acknowledge the limitation of each. The practical consequence: intellectual non-violence (ahiṃsā in thought) as a form of the same principle as physical ahiṃsā.',
      },
    ],
    sources: [
      {
        title: 'Tattvārtha Sūtra · Umāsvāti',
        note: 'The foundational philosophical treatise of Jain metaphysics — the most systematic Jain text',
      },
      {
        title: 'Āptamīmāṃsā · Samantabhadra (c. 2nd c. CE)',
        note: 'Classic defence of Jain epistemology and anekāntavāda',
      },
    ],
  },

  {
    slug: 'ajivika',
    name: 'Ājīvika',
    section: 'heterodox',
    accent: 'amber',
    level: 'advanced',
    tagline: 'Absolute fate — no free will, liberation by cosmic schedule',
    iconLetter: 'Ā',
    opening: 'One of the three great Śramaṇa movements alongside Buddhism and Jainism. Held that every soul passes through exactly 8,400,000 mahākalpas before liberation — not one more, not one less. No action, no asceticism, no knowledge can alter this schedule. Known almost entirely through hostile Buddhist and Jain sources.',
    concepts: [
      'Niyati (absolute fate)',
      'Rejection of karma\'s efficacy',
      'Fixed cosmic cycle',
    ],
    thinkers: [
      {
        name: 'Makkhali Gosāla',
        dates: 'c. 6th c. BCE',
        role: 'Founder — direct contemporary of the Buddha',
        quote: 'Liberation is not earned. It arrives when the cosmic cycle is complete — for all souls equally.',
        works: ['No texts survive'],
      },
    ],
    comparisons: [
      {
        darshana: 'Sāṃkhya',
        title: 'Fixed liberation vs liberation through discrimination: does the path matter?',
        question: 'Niyati vs vivekakhyāti',
        slug: 'ajivika-vs-samkhya',
      },
      {
        darshana: 'Mīmāṃsā',
        title: 'If fate is fixed, are Vedic injunctions pointless?',
        question: 'Ritual efficacy under determinism',
        slug: undefined,
      },
    ],
    badge: 'Heterodox school · Nāstika',
    h1: 'Ājīvika — Absolute Fate, the Cosmic Schedule, and the Impossibility of Earned Liberation',
    subtitle: 'The most radically deterministic of all Indian philosophical schools. The Ājīvika school held that every soul\'s liberation was scheduled at a fixed point in a cosmic cycle of exactly 8,400,000 mahākalpas — and that no action, practice, or knowledge could alter this timing by a single moment. Known almost entirely through the hostile accounts of Buddhist and Jain opponents who considered Makkhali Gosāla one of the Buddha\'s six great philosophical adversaries.',
    readTime: '10 min',
    relatedSlugs: ['carvaka', 'ajnana', 'jain-philosophy'],
    essaySections: [
      {
        heading: 'Niyati: fate as cosmic law',
        body: 'Ājīvika\'s central doctrine is niyati — absolute fate. Every being in the universe is on a fixed cosmic schedule: after passing through exactly 8,400,000 mahākalpas in various states of existence, every soul automatically attains liberation (nirvāṇa). Not one soul will fail to achieve this. Not one soul can accelerate it.\n\nThe implication is total. Asceticism does not help — the Ājīvika ascetics practiced severe austerities, not because they helped, but as an expression of the tradition\'s spirit. Ethics do not help. The smart person and the fool arrive at the same destination at the same time. The Buddha named Makkhali Gosāla as the most dangerous of his six opponents, precisely because niyati destroys the basis of the entire Buddhist path.',
      },
      {
        heading: 'The paradox: ascetics without purpose',
        body: 'Ājīvika monks practiced extreme asceticism — going naked, eating from cupped hands, refusing shelter. Why, if effort is causally inert? Scholars disagree. Possible answers: the austerities themselves are part of the cosmic schedule (everything that happens is fated, including the asceticism); or the austerities reflect the tradition\'s cosmological picture of purification as a process the soul passes through, not initiates. This remains one of the tradition\'s unresolved paradoxes, made worse by the loss of all primary texts.',
      },
    ],
    sources: [
      {
        title: 'Sāmaññaphala Sutta · Pali Canon',
        note: 'Contains the Buddha\'s account of Makkhali Gosāla\'s teaching — the most complete surviving description of Ājīvika doctrine',
      },
      {
        title: 'Āyāraṃga Sutta · Jain Āgamas',
        note: 'Jain account of Gosāla, including his early relationship with Mahāvīra',
      },
    ],
  },

  {
    slug: 'ajnana',
    name: 'Ajñāna',
    section: 'heterodox',
    accent: 'gray',
    level: 'advanced',
    tagline: 'Radical skepticism — all philosophical positions refused',
    iconLetter: '?',
    opening: 'India\'s school of radical skepticism. Refused to advance any positive philosophical thesis — not from laziness but from the rigorous argument that all conceptual positions are incoherent under examination. The fourfold evasion method (amarāvikkhepavāda) is structurally identical to Pyrrhonian skepticism, developed independently in Greece a century later.',
    concepts: [
      'Amarāvikkhepavāda (fourfold evasion)',
      'Challenge to all pramāṇa systems',
    ],
    thinkers: [
      {
        name: 'Sañjaya Belaṭṭhaputta',
        dates: 'c. 6th c. BCE',
        role: 'Founder',
        quote: 'To every philosophical question, he replied with a fourfold evasion: refusing to affirm, deny, affirm-and-deny, or neither-affirm-nor-deny.',
        works: ['No texts survive'],
      },
    ],
    comparisons: [
      {
        darshana: 'Nyāya',
        title: 'Can Nyāya prove valid knowledge is possible against a thoroughgoing skeptic?',
        question: 'Pramāṇa against skepticism',
        slug: undefined,
      },
    ],
    badge: 'Heterodox school · Nāstika',
    h1: 'Ajñāna — Radical Skepticism and the Refusal of Every Philosophical Position',
    subtitle: 'India\'s school of systematic philosophical skepticism. Ajñāna did not merely doubt individual claims — it refused to advance any philosophical thesis at all, arguing through the fourfold evasion (amarāvikkhepavāda) that all conceptual positions collapse under examination. Its structural parallel with Pyrrhonian skepticism in Greece — developed independently a century later — is one of comparative philosophy\'s most striking discoveries.',
    readTime: '8 min',
    relatedSlugs: ['carvaka', 'ajivika', 'madhyamaka'],
    essaySections: [
      {
        heading: 'The fourfold evasion',
        body: 'When asked any philosophical question — \'Is there an afterlife?\', \'Is the soul the same as the body?\', \'Does the liberated being exist after death?\' — Sañjaya replied with a fourfold evasion (amarāvikkhepavāda):\n\n1. I do not think it is so.\n2. I do not think it is not so.\n3. I do not think it is and is not so.\n4. I do not think it is neither so nor not so.\n\nThis is not the refusal of a confused mind. It is a rigorous epistemological position: no answer to these questions can be adequately justified, so the philosophically honest response is to affirm none of them. The name amarāvikkhepavāda translates roughly as \'eel-wriggling doctrine\' — a hostile description from Buddhist sources, but one that captures the tradition\'s evasive method.',
      },
      {
        heading: 'The Pyrrhonian parallel',
        body: 'Pyrrho of Elis (c. 360–270 BCE) developed almost exactly the same method a century later: the epoché — suspension of judgment — as the response to the inability of any position to withstand rigorous examination. The tranquillity (ataraxia) that follows suspension of judgment parallels what Ajñāna claimed: that not-asserting is not a deficiency but a kind of liberation from the anxiety of defending positions.\n\nThe parallel is philosophically significant regardless of whether there was historical contact (there may have been — Alexander\'s invasion, Indian gymnosophists). Two independent traditions arrived at the same radical conclusion: the honest philosopher affirms nothing.',
      },
    ],
    sources: [
      {
        title: 'Sāmaññaphala Sutta · Pali Canon',
        note: 'Primary source for Sañjaya\'s teaching, quoted extensively in the Buddha\'s account of contemporary schools',
      },
    ],
  },

  // ── Section B: Buddhist lineages ────────────────────────────────────────

  {
    slug: 'early-buddhism',
    name: 'Early Buddhism',
    section: 'buddhist',
    accent: 'teal',
    level: 'intermediate',
    tagline: 'The middle path, anātman, and the four noble truths',
    iconLetter: 'B',
    opening: 'The Pali Canon and the earliest Buddhist philosophy. The Buddha accepted the Indian framework of karma, saṃsāra, and rebirth entirely — then challenged its central premise: there is no permanent self (anātman) doing the rebirthing. This single move opened one of the richest philosophical dialogues in human history.',
    concepts: [
      'Anātman (no-self)',
      'Pratītyasamutpāda',
      'Pañca-skandha',
      'Dukkha',
      'Nirvāṇa',
    ],
    thinkers: [
      {
        name: 'Gautama Buddha',
        dates: 'c. 563–483 BCE',
        role: 'Founder',
        quote: 'The self is a river, not a stone. Look for the stone and you will not find it.',
        works: ['Pali Canon (Dhammapada, Majjhima Nikāya)'],
      },
      {
        name: 'Buddhaghosa',
        dates: 'c. 5th c. CE',
        role: 'Theravāda systematiser — Visuddhimagga',
        quote: 'The path is not walked by a self; the path is what walks.',
        works: ['Visuddhimagga'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'Anātman vs ātman: no-self vs universal self — are these opposite answers or the same insight?',
        question: 'The central metaphysical debate of Indian philosophy',
        slug: 'early-buddhism-vs-advaita',
      },
      {
        darshana: 'Sāṃkhya',
        title: 'Nirvāṇa vs vivekakhyāti: liberation as cessation vs liberation as discrimination',
        question: 'What liberation is',
        slug: undefined,
      },
      {
        darshana: 'Nyāya-Vaiśeṣika',
        title: 'Dependent origination vs atomic causality: what is the ultimate unit of reality?',
        question: 'The metaphysics of causation',
        slug: undefined,
      },
    ],
    badge: 'Buddhist lineage',
    h1: 'Early Buddhism — Anātman, Dependent Origination, and the Middle Path',
    subtitle: 'The Buddha\'s original philosophical revolution: accepting the Vedic framework of karma, saṃsāra, and liberation entirely — then denying the self (ātman) that Vedic thought placed at the centre of that framework. The doctrine of anātman and dependent origination (pratītyasamutpāda) are the two hinges on which the entire edifice of Buddhist philosophy turns.',
    readTime: '15 min',
    relatedSlugs: ['madhyamaka', 'yogacara', 'mahayana'],
    essaySections: [
      {
        heading: 'The central move: anātman',
        body: 'The Buddha did not reject the Indian metaphysical framework — he radicalised it. Karma, rebirth, saṃsāra, liberation: all accepted. But the presupposition of that framework — that there is a permanent, unchanging self (ātman) doing the karmic actions and accumulating the rebirths — this he denied.\n\nInstead: the five aggregates (pañca-skandha) — form, feeling, perception, mental formations, consciousness — constitute what we call a \'person\'. None is the self. Together they do not constitute a self either. What we call \'I\' is a conventional designation for a causally connected process, not a substance.',
      },
      {
        heading: 'Pratītyasamutpāda — dependent origination',
        body: 'All phenomena arise in dependence on conditions (pratītyasamutpāda). Nothing has independent, intrinsic existence. The twelve-linked chain of dependent origination traces the arising of suffering from ignorance through craving, attachment, and becoming to birth, aging, and death.\n\nThe liberating insight: since suffering arises from conditions, it can cease when those conditions cease. Liberation is not an achievement but a cessation — the extinguishing (nirvāṇa, literally \'blowing out\') of the conditions that sustain the suffering process.',
      },
    ],
    sources: [
      {
        title: 'Dhammapada · Pali Canon',
        note: 'The most widely read early Buddhist text — the Buddha\'s teaching in verse',
      },
      {
        title: 'Majjhima Nikāya · Pali Canon',
        note: 'Middle-length discourses, containing key philosophical teachings including anātman and the middle path',
      },
    ],
  },

  {
    slug: 'mahayana',
    name: 'Mahāyāna',
    section: 'buddhist',
    accent: 'purple',
    level: 'intermediate',
    tagline: 'The great vehicle — liberation for all beings',
    iconLetter: 'M',
    opening: 'The great vehicle extends the ideal from individual liberation to the bodhisattva — one who vows to remain in the cycle of rebirth until every being is free. This shift carries enormous philosophical consequences. Mahāyāna\'s answer shaped the entirety of East Asian civilisation.',
    concepts: [
      'Bodhisattva ideal',
      'Tathāgatagarbha (Buddha-nature)',
      'Upāya (skilful means)',
    ],
    thinkers: [
      {
        name: 'Śāntideva',
        dates: 'c. 685–763 CE',
        role: 'Bodhicaryāvatāra',
        quote: 'All suffering arises from seeking happiness for oneself alone.',
        works: ['Bodhicaryāvatāra'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'Tathāgatagarbha vs ātman: did Mahāyāna quietly reintroduce the self?',
        question: 'Buddha-nature and the universal self',
        slug: undefined,
      },
      {
        darshana: 'Yoga / Gītā',
        title: 'Acting for all beings vs acting without ego: the same dharma?',
        question: 'Universal action in Mahāyāna and Yoga',
        slug: undefined,
      },
    ],
    badge: 'Buddhist lineage',
    h1: 'Mahāyāna — The Great Vehicle, the Bodhisattva Ideal, and the Question of Buddha-Nature',
    subtitle: 'The major expansion of Buddhist philosophy — extending the goal from individual liberation to liberation for all sentient beings. The bodhisattva ideal transforms the entire ethical and metaphysical architecture of Buddhist thought: what does compassion look like at the level of cosmology? Mahāyāna\'s answer — including the controversial doctrine of tathāgatagarbha (Buddha-nature in all beings) — shaped the entirety of East Asian civilisation.',
    readTime: '13 min',
    relatedSlugs: ['early-buddhism', 'madhyamaka', 'yogacara', 'vajrayana'],
    essaySections: [
      {
        heading: 'The bodhisattva ideal',
        body: 'Early Buddhism\'s goal is the arhat — the individual who attains nirvāṇa and is released from the cycle. Mahāyāna reframes this as a lesser goal. The bodhisattva takes a vow to remain in saṃsāra until all beings are liberated — even at the cost of postponing one\'s own nirvāṇa by cosmic aeons.\n\nThis is not merely ethical altruism — it has metaphysical weight. If all beings lack a self, then \'I am suffering\' and \'they are suffering\' are equally constructed designations. The compassion that motivates the bodhisattva is rooted in seeing through this construction: there is no privileged \'self\' whose suffering takes priority.',
      },
    ],
    sources: [
      {
        title: 'Bodhicaryāvatāra · Śāntideva',
        note: 'The most philosophically rich guide to the bodhisattva path — combines Madhyamaka with ethics',
      },
    ],
  },

  {
    slug: 'vajrayana',
    name: 'Vajrayāna',
    section: 'buddhist',
    accent: 'amber',
    level: 'advanced',
    tagline: 'The tantric diamond vehicle — fast path through the body',
    iconLetter: 'V',
    opening: 'The diamond vehicle. Where Mahāyāna says liberation may take three cosmic aeons, Vajrayāna claims it can be achieved in a single lifetime through esoteric tantric methods: deity yoga, mandalas, mantra, and the transformation of the ordinary body-mind into the body of a Buddha. Flourishes in Tibet, Bhutan, Mongolia, and the Himalayas.',
    concepts: [
      'Deity yoga',
      'Maṇḍala',
      'Rigpa (nature of mind)',
    ],
    thinkers: [
      {
        name: 'Tsongkhapa',
        dates: '1357–1419 CE',
        role: 'Gelug school founder — synthesised Madhyamaka with tantric practice',
        quote: 'Without the view of emptiness, tantra is spiritually dangerous; with it, it is the fastest path.',
        works: ['Lam Rim Chenmo', 'Ngag Rim Chenmo'],
      },
    ],
    comparisons: [
      {
        darshana: 'Hindu Śākta tantra',
        title: 'Buddhist tantra vs Hindu tantra: shared methods, different metaphysics?',
        question: 'Two tantric traditions',
        slug: undefined,
      },
      {
        darshana: 'Yoga darśana',
        title: 'Deity as path: Vajrayāna and Yoga Sūtras in dialogue',
        question: 'Ritual transformation of the mind',
        slug: undefined,
      },
    ],
    badge: 'Buddhist lineage',
    h1: 'Vajrayāna — The Diamond Vehicle, Deity Yoga, and Liberation in a Single Lifetime',
    subtitle: 'The esoteric extension of Mahāyāna Buddhism, practised in Tibet, Bhutan, Mongolia, and the Himalayas. Vajrayāna maintains all of Mahāyāna\'s philosophical framework — emptiness, bodhisattva ideal, Buddha-nature — but adds a complete system of tantric methods: deity yoga, mantra, mandala, and dream yoga. The claim: what Mahāyāna says requires three cosmic aeons, Vajrayāna achieves in one lifetime.',
    readTime: '12 min',
    relatedSlugs: ['mahayana', 'madhyamaka', 'bon'],
    essaySections: [
      {
        heading: 'The tantric method: transformation, not renunciation',
        body: 'Mainstream Buddhist practice works by renouncing attachment to objects that cause suffering. Vajrayāna works differently: it transforms the energy of passions rather than renouncing them. Anger becomes mirror-like wisdom. Desire becomes discriminating awareness. The poison is the medicine.\n\nDeity yoga is the central practice: the practitioner visualises themselves as already a fully awakened being (a buddha or bodhisattva), speaks in their mantra, and contemplates their mandala. The principle: you become what you consistently impersonate. The practice mimics the end state to produce it.',
      },
    ],
    sources: [
      {
        title: 'Lam Rim Chenmo · Tsongkhapa',
        note: 'The great exposition of the stages of the path — the definitive Gelug integration of Madhyamaka and tantra',
      },
    ],
  },

  {
    slug: 'bon',
    name: 'Bon',
    section: 'buddhist',
    accent: 'coral',
    level: 'advanced',
    tagline: 'Tibet before Buddhism — the indigenous sacred world',
    iconLetter: 'B̈',
    opening: 'The indigenous spiritual tradition of Tibet, predating Buddhism\'s arrival in the 7th century CE. Encompasses a rich cosmology of sky-father deities, earth spirits, shamanic ritual, and a complete path to liberation (Dzogchen). After Buddhism\'s arrival, Bon adapted and survived. Today officially recognised by the Dalai Lama as a fifth school of Tibetan religion.',
    concepts: [
      'Dzogchen (great perfection)',
      'Bon cosmology (three worlds)',
    ],
    thinkers: [
      {
        name: 'Tönpa Shenrab Miwoche',
        dates: 'legendary (parallel figure to the Buddha)',
        role: 'Legendary founder of Bon',
        quote: 'The nature of mind is primordially pure — recognition is the path.',
        works: ['No historically datable texts'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'Bon rigpa vs Advaita ātman: primordial awareness by two names?',
        question: 'Recognition of primordial nature',
        slug: undefined,
      },
    ],
    badge: 'Buddhist lineage · Tibetan',
    h1: 'Bon — Tibet\'s Indigenous Tradition, Dzogchen, and the Nature of Mind',
    subtitle: 'The oldest surviving spiritual tradition of Tibet, predating Buddhism\'s arrival by centuries. Bon contains a complete cosmological system, shamanic ritual practices, and — most philosophically significant — a mature Dzogchen teaching on the nature of mind that is structurally identical to the Dzogchen found in Nyingma Buddhism. Whether this represents independent development or mutual influence remains one of Tibetan studies\' central questions.',
    readTime: '11 min',
    relatedSlugs: ['vajrayana', 'mahayana', 'early-buddhism'],
    essaySections: [
      {
        heading: 'Dzogchen: the great perfection',
        body: 'Dzogchen is the highest teaching of both Bon and the Nyingma school of Tibetan Buddhism. Its central claim: the nature of mind (rigpa) is already primordially pure, always and already awakened. The obscurations that hide this nature are adventitious — they were never actually part of the mind.\n\nLiberation is not achieved by practice but by recognition: the moment of directly recognising rigpa as one\'s own nature. Practice in Dzogchen is a preparation for recognition, not a cause of liberation. This distinguishes it sharply from gradual path traditions.',
      },
    ],
    sources: [
      {
        title: 'Zhuangzi on Taoism\'s view of Bon parallel — see Tibetan sources',
        note: 'Primary Bon texts available in Shardza Tashi Gyaltsen\'s writings',
      },
    ],
  },

  {
    slug: 'madhyamaka',
    name: 'Madhyamaka',
    section: 'buddhist',
    accent: 'blue',
    level: 'advanced',
    tagline: 'All phenomena are empty — including emptiness itself',
    iconLetter: 'Ø',
    opening: 'Nāgārjuna\'s radical extension of the Buddha\'s anātman: not just the self, but all phenomena lack inherent, independent existence (svabhāva). The two-truths doctrine allows the world of experience while refusing any ultimate metaphysical foundation. The most internationally influential school of Buddhist philosophy.',
    concepts: [
      'Śūnyatā',
      'Two truths (saṃvṛti / paramārtha)',
      'Svabhāva (denied)',
      'Prasaṅga method',
    ],
    thinkers: [
      {
        name: 'Nāgārjuna',
        dates: 'c. 150–250 CE',
        role: 'Founder — Mūlamadhyamakakārikā',
        quote: 'All things are empty of inherent existence — including emptiness itself.',
        works: ['Mūlamadhyamakakārikā', 'Vigrahavyāvartanī'],
      },
      {
        name: 'Candrakīrti',
        dates: 'c. 7th c. CE',
        role: 'Prāsaṅgika interpretation — Prasannapadā',
        quote: 'The world is not false; it is like a dream, which is not nothing.',
        works: ['Prasannapadā', 'Madhyamakāvatāra'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'Śūnyatā vs Brahman: is emptiness the same as the plenum of pure being?',
        question: 'Emptiness and fullness as two names for one reality?',
        slug: 'madhyamaka-vs-advaita',
      },
      {
        darshana: 'Vaiśeṣika',
        title: 'Can emptiness dissolve the eternal atom?',
        question: 'Atomism under the prasaṅga analysis',
        slug: undefined,
      },
    ],
    badge: 'Buddhist lineage · Madhyamaka',
    h1: 'Madhyamaka — Śūnyatā, the Two Truths, and the Philosophy of the Middle Way',
    subtitle: 'Nāgārjuna\'s Madhyamaka is the most radically anti-foundationalist philosophy in the Indian tradition. Not only is the self empty of inherent existence — all phenomena are. The two-truths doctrine (conventional truth / ultimate truth) preserves the world of experience while denying any metaphysical foundation to it. Madhyamaka\'s influence on Tibetan Buddhism, Zen, and Yogācāra is profound; its dialogue with Advaita Vedānta is philosophy\'s most searching debate about ultimate reality.',
    readTime: '16 min',
    relatedSlugs: ['early-buddhism', 'yogacara', 'madhyamaka-vs-advaita'],
    essaySections: [
      {
        heading: 'The prasaṅga method: refutation without counter-thesis',
        body: 'Nāgārjuna\'s method is not to advance a positive thesis but to show that every possible thesis about ultimate reality leads to absurdity (prasaṅga). He does not say \'reality is X instead of Y\' — he shows that \'reality is Y\' leads to contradiction. This is why Madhyamaka is so philosophically difficult and so influential: it refuses to give its opponents anything to refute.\n\nThe Mūlamadhyamakakārikā systematically applies this method to causation, time, motion, perception, the self, nirvāṇa, and the Buddha. In each case, the conclusion is the same: the thing exists conventionally (it is not nothing) but lacks inherent existence (svabhāva) — it has no nature of its own, independent of all other things.',
      },
    ],
    sources: [
      {
        title: 'Mūlamadhyamakakārikā · Nāgārjuna',
        note: 'The foundational text of Madhyamaka philosophy — 27 chapters systematically establishing śūnyatā',
      },
      {
        title: 'Prasannapadā · Candrakīrti',
        note: 'The definitive Prāsaṅgika commentary — the standard interpretation of Madhyamaka in Tibetan Buddhism',
      },
    ],
  },

  {
    slug: 'yogacara',
    name: 'Yogācāra',
    section: 'buddhist',
    accent: 'pink',
    level: 'advanced',
    tagline: 'Mind-only — consciousness is the sole reality',
    iconLetter: 'Y',
    opening: 'The idealist school of Buddhist philosophy. There is no external world — only the stream of consciousness mistaking its own projections for external objects. The ālayavijñāna (store-consciousness) holds all karmic seeds. Liberation is the recognition that the apparent duality of perceiver and perceived was never real.',
    concepts: [
      'Vijñaptimātratā (mind-only)',
      'Ālayavijñāna (store-consciousness)',
      'Trisvabhāva (three natures)',
    ],
    thinkers: [
      {
        name: 'Vasubandhu',
        dates: 'c. 4th–5th c. CE',
        role: 'Viṃśatikā — foundational idealist text',
        quote: 'There is no external world — only the stream of consciousness mistaking itself for it.',
        works: ['Viṃśatikā', 'Triṃśikā', 'Abhidharmakośa'],
      },
      {
        name: 'Asaṅga',
        dates: 'c. 4th c. CE',
        role: 'Yogācārabhūmi — co-founder',
        quote: 'Mind is the architect of all worlds.',
        works: ['Yogācārabhūmi', 'Mahāyānasaṃgraha'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'Consciousness without a self vs consciousness as the universal self',
        question: 'Two idealisms with different metaphysical anchors',
        slug: 'yogacara-vs-advaita',
      },
      {
        darshana: 'Sāṃkhya',
        title: 'Ālayavijñāna vs Prakṛti as substrate of experience',
        question: 'The unconscious substrate',
        slug: undefined,
      },
    ],
    badge: 'Buddhist lineage · Yogācāra',
    h1: 'Yogācāra — Mind-Only, the Store-Consciousness, and the Three Natures',
    subtitle: 'The idealist school of Buddhist philosophy: there is no external world independent of the consciousness that perceives it. Yogācāra\'s ālayavijñāna (store-consciousness) — holding all karmic seeds — is the closest Buddhist philosophy comes to a substrate consciousness, making the comparison with Advaita Vedānta\'s ātman/Brahman one of the most philosophically productive in Indian thought.',
    readTime: '14 min',
    relatedSlugs: ['madhyamaka', 'early-buddhism', 'yogacara-vs-advaita'],
    essaySections: [
      {
        heading: 'The mind-only thesis',
        body: 'Yogācāra\'s vijñaptimātratā — mind-only — means that what we take to be external objects are actually nothing but representations (vijñapti) arising within consciousness. The argument: if all we ever have access to are representations, and if representations are by nature mental, there is no reason to posit a non-mental world that the representations supposedly represent.\n\nThe ālayavijñāna (store-consciousness) is the substrate: a \'below-consciousness\' stream that holds all karmic seeds (bījas). These seeds ripen into the representations that constitute experienced reality. Liberation is the transformation of the ālayavijñāna at its base (āśrayaparāvṛtti) — the moment when the karmic seeds no longer generate the illusion of an external world.',
      },
    ],
    sources: [
      {
        title: 'Viṃśatikā · Vasubandhu',
        note: 'Twenty verses establishing the mind-only thesis with philosophical rigour',
      },
      {
        title: 'Mahāyānasaṃgraha · Asaṅga',
        note: 'Comprehensive Yogācāra treatise covering all major philosophical topics',
      },
    ],
  },

  {
    slug: 'zen-chan',
    name: 'Zen / Chan',
    section: 'buddhist',
    accent: 'gray',
    level: 'intermediate',
    tagline: 'Direct mind transmission — the kōan and sudden enlightenment',
    iconLetter: 'Z',
    opening: 'The school of direct mind transmission. Kōans, sitting meditation, and the radical stripping away of conceptual scaffolding. The question that cannot be answered by thinking: what is your original face before your parents were born?',
    concepts: [
      'Kōan',
      'Zazen',
      'Sudden enlightenment (kenshō)',
      'Mind-to-mind transmission',
    ],
    thinkers: [
      {
        name: 'Bodhidharma',
        dates: 'c. 5th–6th c. CE (legendary)',
        role: 'Legendary founder — brought Chan from India to China',
        quote: 'A special transmission outside scriptures; no dependence on words and letters.',
        works: ['Attributed: Two Entries and Four Practices'],
      },
      {
        name: 'Huineng',
        dates: 'c. 638–713 CE',
        role: '6th Patriarch — Southern school of sudden enlightenment',
        quote: 'Originally there is not a single thing. Where could dust alight?',
        works: ['Platform Sūtra'],
      },
    ],
    comparisons: [
      {
        darshana: 'Yoga darśana',
        title: 'Two traditions of mental discipline: stillness as practice across different metaphysical foundations',
        question: 'Meditation without a meditator vs meditation toward Puruṣa',
        slug: undefined,
      },
    ],
    badge: 'Buddhist lineage · Zen/Chan',
    h1: 'Zen / Chan — Direct Transmission, the Kōan, and the Nature of Sudden Enlightenment',
    subtitle: 'The most radical simplification of Buddhist philosophy: all scholastic frameworks, all conceptual analysis, all canonical learning — stripped away. What remains is the direct recognition of mind\'s nature, transmitted from teacher to student outside scriptures. The kōan is Zen\'s signature method: a question that cannot be answered by ordinary thought, whose non-resolution forces a break in the conceptual stream.',
    readTime: '11 min',
    relatedSlugs: ['early-buddhism', 'mahayana', 'madhyamaka'],
    essaySections: [
      {
        heading: 'The kōan: thought-stopping as method',
        body: 'A kōan is not a riddle with a hidden answer. It is a presentation designed to exhaust the conceptual mind — to push thinking to the point where it breaks and something non-conceptual can show itself. Classic examples: \'What is the sound of one hand clapping?\' \'What was your original face before your parents were born?\' \'Does a dog have Buddha-nature?\'\n\nThe practitioner takes the kōan into zazen (seated meditation) and works with it — not by analysing it but by living with it, feeling its pressure, allowing it to become the whole of one\'s awareness. The kenshō experience — sudden enlightenment — is the moment when the conceptual struggle collapses and what the kōan was pointing to is directly seen.',
      },
    ],
    sources: [
      {
        title: 'Platform Sūtra · Huineng',
        note: 'The only indigenous Chinese Buddhist text to be accorded the status of a sūtra — the foundational text of Chan/Zen',
      },
      {
        title: 'Blue Cliff Record · Compiled by Xuedou (11th c.)',
        note: 'The most celebrated collection of kōans with commentary',
      },
    ],
  },

  // ── Section C: World traditions ─────────────────────────────────────────

  {
    slug: 'taoism',
    name: 'Taoism',
    section: 'world',
    accent: 'teal',
    level: 'intermediate',
    tagline: 'The way that cannot be named — wu wei and cosmic harmony',
    iconLetter: 'T',
    opening: 'The oldest and most influential tradition of Chinese philosophy. The Tao is the formless ground of all being, unnameable, preceding heaven and earth. Wu wei — effortless, non-forcing action — is the human response to this ground. The resonances with Brahman, ṛta, and the Vedic sense of cosmic order are striking.',
    concepts: [
      'Tao (the Way)',
      'Wu wei (non-forcing action)',
      'Te (virtue/power)',
      'Ziran (naturalness)',
    ],
    thinkers: [
      {
        name: 'Lao-tzu',
        dates: 'c. 6th c. BCE (trad.)',
        role: 'Tao Te Ching — the foundational text',
        quote: 'The Tao that can be named is not the eternal Tao.',
        works: ['Tao Te Ching'],
      },
      {
        name: 'Zhuangzi',
        dates: 'c. 369–286 BCE',
        role: 'Extended Taoism to its most radical philosophical conclusions',
        quote: 'Once upon a time, I, Chuang Tzu, dreamt I was a butterfly. Now I do not know whether I was a man dreaming I was a butterfly, or whether I am now a butterfly dreaming I am a man.',
        works: ['Zhuangzi'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'The Tao and Brahman: unnameable formless ground — same intuition?',
        question: 'Tao vs Brahman as ultimate ground',
        slug: 'taoism-vs-advaita',
      },
      {
        darshana: 'Yoga / Gītā',
        title: 'Wu wei and naiṣkarmya-karma: effortless action across traditions',
        question: 'Non-forcing action and desireless action',
        slug: undefined,
      },
      {
        darshana: 'Mīmāṃsā',
        title: 'The unnameable Tao and the unauthored Veda: language at its limit',
        question: 'Sacred language beyond human construction',
        slug: undefined,
      },
    ],
    badge: 'World tradition · China',
    h1: 'Taoism — The Tao, Wu Wei, and the Unnameable Ground of Being',
    subtitle: 'The oldest and most philosophically influential tradition of Chinese thought. The Tao — the way that cannot be named — is the formless ground preceding all distinctions. Wu wei — non-forcing action in alignment with the Tao — is both an ethical orientation and a metaphysical claim. The resonances with Vedic ṛta, Advaita Brahman, and naiṣkarmya-karma in the Bhagavad Gītā are among the most productive areas of comparative philosophy.',
    readTime: '13 min',
    relatedSlugs: ['early-buddhism', 'zen-chan', 'taoism-vs-advaita'],
    essaySections: [
      {
        heading: 'The Tao: unnameable ground',
        body: 'The opening of the Tao Te Ching states its own limit: \'The Tao that can be named is not the eternal Tao.\' This is not mystical hand-waving — it is a philosophical claim about the relationship between language and reality. Language works by making distinctions (this vs that, being vs non-being). The Tao precedes all distinctions. It cannot be an object of predication without being reduced to something less than it is.\n\nCompare with Śaṅkara: Brahman cannot be described by any positive predicate because every predicate implies a limit. The Vedic neti neti (not this, not this) is structurally parallel to the Taoist refusal of naming. Whether this represents historical contact or convergent philosophical discovery remains open.',
      },
    ],
    sources: [
      {
        title: 'Tao Te Ching · Lao-tzu (trad.)',
        note: 'The foundational text — 81 short chapters. D.C. Lau\'s translation (Penguin) is the most philosophically reliable',
      },
      {
        title: 'Zhuangzi · Zhuangzi',
        note: 'The most philosophically rich Taoist text — includes the butterfly dream, the cook and the ox, and extensive epistemological reflection',
      },
    ],
  },

  {
    slug: 'zoroastrianism',
    name: 'Zoroastrianism',
    section: 'world',
    accent: 'coral',
    level: 'intermediate',
    tagline: 'The cousin tradition — shared Vedic roots, different path',
    iconLetter: 'Z̈',
    opening: 'Not merely a world tradition in resonance — Zoroastrianism shares Proto-Indo-Iranian roots with the Vedic tradition. Avestan is closely related to Vedic Sanskrit. Asha directly cognates with Vedic ṛta. This is a parting of ways within a shared ancestral tradition, making comparison essential rather than incidental.',
    concepts: [
      'Asha (cosmic order/truth)',
      'Cosmic dualism (Ahura Mazdā vs Angra Mainyu)',
      'Frashokereti (final renovation of the world)',
    ],
    thinkers: [
      {
        name: 'Zarathuštra',
        dates: 'c. 1500–1000 BCE est.',
        role: 'Reformer — Gāthās',
        quote: 'I will speak of the two spirits at the beginning of existence, of whom the holier spoke to the evil: \'Neither our thoughts, nor our teachings, nor our wills, nor our choices, nor our words, nor our deeds, nor our inner selves, nor our souls agree.\'',
        works: ['Gāthās (Avesta)'],
      },
    ],
    comparisons: [
      {
        darshana: 'Vedic ṛta / Dharma',
        title: 'Asha and ṛta: the same word, the same concept, different traditions?',
        question: 'Shared ancestry, divergent paths',
        slug: 'zoroastrianism-vs-vedic',
      },
      {
        darshana: 'Sāṃkhya',
        title: 'Moral dualism vs metaphysical dualism: the Indian answer to good-vs-evil cosmology',
        question: 'Two kinds of dualism',
        slug: undefined,
      },
    ],
    badge: 'World tradition · Iran',
    h1: 'Zoroastrianism — Asha, the Cosmic Dualism, and the Shared Vedic Ancestor',
    subtitle: 'The only world tradition that is not merely in resonance with Vedic thought but shares a direct ancestral lineage with it. Avestan (the language of the Zoroastrian scriptures) and Vedic Sanskrit are sister languages. Asha (cosmic truth-order) and ṛta are cognate words. The parting of Vedic and Zoroastrian thought is a parting within a shared tradition — and understanding it illuminates both.',
    readTime: '12 min',
    relatedSlugs: ['taoism', 'confucianism', 'zoroastrianism-vs-vedic'],
    essaySections: [
      {
        heading: 'Asha and ṛta: the same concept?',
        body: 'The Proto-Indo-Iranian root *Hr̥tá- gives Vedic ṛta and Avestan asha/arta — both meaning roughly \'cosmic truth, order, rightness\'. In both traditions, this concept refers to the fundamental ordering principle of the universe: the way things are when they are as they should be, when the cosmic and moral order coincide.\n\nBut the traditions diverge significantly in how this concept functions. In Vedic thought, ṛta is the impersonal order that the gods (devas) uphold and that ritual maintains. In Zarathuštra\'s Gāthās, asha is a moral principle actively chosen against druj (deception/evil) in a cosmic struggle. The Zoroastrian cosmos is dualistic: Ahura Mazdā (the wise lord, associated with asha) and Angra Mainyu (the destructive spirit, associated with druj) are co-eternal antagonists.',
      },
    ],
    sources: [
      {
        title: 'Gāthās · Zarathuštra (Avesta)',
        note: 'The 17 hymns attributed to Zarathuštra himself — among the world\'s oldest religious poetry',
      },
      {
        title: 'The Wonder That Was India · A.L. Basham',
        note: 'Essential context for the Indo-Iranian shared tradition',
      },
    ],
  },

  {
    slug: 'sufism',
    name: 'Sufism',
    section: 'world',
    accent: 'pink',
    level: 'intermediate',
    tagline: 'Islamic mysticism and its encounter with bhakti on Indian soil',
    iconLetter: 'S',
    opening: 'The inward path of Islam — the discipline of dissolving the ego-self in the reality of God. In India, it met the bhakti tradition and produced one of the most philosophically consequential syncretic exchanges in human history.',
    concepts: [
      'Fanāʾ (annihilation)',
      'Baqāʾ (subsistence)',
      'Waḥdat al-Wujūd',
      'Tajallī (divine disclosure)',
      'Silsila',
      'Nirguna Bhakti',
    ],
    thinkers: [
      {
        name: 'Ibn Arabī',
        dates: '1165–1240 CE',
        role: 'Fuṣūṣ al-Ḥikam',
        quote: 'You are He, and He is you, without any imperfections.',
        works: ['Fuṣūṣ al-Ḥikam', 'Al-Futūḥāt al-Makkiyya'],
      },
      {
        name: 'Rūmī',
        dates: '1207–1273 CE',
        role: 'Masnavi',
        quote: 'The Masnavi is not a book of poetry. It is a philosophy of return.',
        works: ['Masnavi', 'Dīwān-e Shams-e Tabrīzī'],
      },
      {
        name: 'Kabīr',
        dates: 'c. 1398–1518 CE',
        role: 'Synthesis lived in a weaver\'s life',
        quote: 'The river that flows in you also flows in me.',
        works: ['Bijak', 'Dohas'],
      },
      {
        name: 'Dara Shikoh',
        dates: '1615–1659 CE',
        role: 'Translated 52 Upaniṣads into Persian — Sirr-e-Akbar',
        quote: 'The Upanishads and the Quran are two paths to the same ocean.',
        works: ['Sirr-e-Akbar', 'Majmaʿ al-Baḥrayn'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'Waḥdat al-wujūd vs Brahman: one reality, two philosophies?',
        question: 'Unity of being in Sufism and Advaita',
        slug: 'sufism-vs-advaita',
      },
      {
        darshana: 'Viśiṣṭādvaita',
        title: 'Waḥdat al-shuhūd (Sirhindī) vs Rāmānuja: two qualified non-dualisms',
        question: 'Qualified non-dualism across traditions',
        slug: undefined,
      },
      {
        darshana: 'Yoga / Bhagavad Gītā',
        title: 'Divine love as metaphysics: ʿishq and bhakti',
        question: 'Love as the path and the destination',
        slug: undefined,
      },
    ],
    badge: 'World tradition · Islamic',
    h1: 'Sufism — Islamic Mysticism, Waḥdat al-Wujūd, and the Meeting with Bhakti',
    subtitle: 'The inward path of Islam — the discipline of annihilating the ego-self (fanāʾ) in the reality of God, and the subsequent subsistence (baqāʾ) in God. In India, Sufism met the bhakti tradition and produced the most philosophically significant syncretic exchange in the subcontinent\'s intellectual history: Kabīr, Dara Shikoh, and the continuous conversation between Waḥdat al-wujūd and Advaita Vedānta.',
    readTime: '16 min',
    relatedSlugs: ['taoism', 'neoplatonism', 'sufism-vs-advaita'],
    essaySections: [
      {
        heading: 'Waḥdat al-wujūd: the unity of being',
        body: 'Ibn Arabī\'s foundational doctrine: there is only one Being (al-wujūd), and everything that exists is a manifestation (tajallī) of that one Being. The apparent multiplicity of the world is real as manifestation but not real as independent being. The mystic\'s path is the gradual removal of the veils (ḥujub) that prevent recognition of this unity.\n\nThe parallel with Advaita Vedānta is immediate and striking. Brahman alone is real; the world is not separate from Brahman but appears as such through māyā/avidyā. Dara Shikoh, in his Majmaʿ al-Baḥrayn (The Confluence of Two Oceans), argued explicitly that waḥdat al-wujūd and Advaita Vedānta were the same philosophical insight expressed in different cultural vocabularies.',
      },
    ],
    sources: [
      {
        title: 'Fuṣūṣ al-Ḥikam · Ibn Arabī',
        note: 'The most systematic exposition of waḥdat al-wujūd — the Bezels of Wisdom',
      },
      {
        title: 'Majmaʿ al-Baḥrayn · Dara Shikoh',
        note: 'The Confluence of Two Oceans — Dara Shikoh\'s explicit comparison of Sufism and Vedānta',
      },
    ],
  },

  {
    slug: 'shinto',
    name: 'Shintō',
    section: 'world',
    accent: 'amber',
    level: 'beginner',
    tagline: 'Kami, purity, and the divine present in all of nature',
    iconLetter: 'Sh',
    opening: 'Japan\'s indigenous spiritual worldview — a tradition of sacred presence rather than systematic doctrine. Kami inhabit natural phenomena, ancestral spirits, and extraordinary places. No founding figure, no canonical scripture, no systematic theology. Shintō is a practice of attention to the sacred dimension of ordinary life.',
    concepts: [
      'Kami (sacred spirits)',
      'Misogi (ritual purification)',
      'Musubi (creative harmonising force)',
    ],
    thinkers: [
      {
        name: '(No canonical founder)',
        dates: 'Older than recorded history',
        role: 'The tradition predates any named teacher',
        quote: 'The kami are not remote — they are the sacredness in the wind, the river, the ancestor.',
        works: ['Kojiki (8th c. CE) · Nihon Shoki (720 CE)'],
      },
    ],
    comparisons: [
      {
        darshana: 'Vedic tradition',
        title: 'Kami and deva: sacred powers in nature across two traditions',
        question: 'Nature deities in Vedic and Shintō cosmology',
        slug: undefined,
      },
      {
        darshana: 'Mīmāṃsā / Vedic ritual',
        title: 'Ritual purity as sacred precondition: Japan and India in parallel',
        question: 'Purification ritual in two ancient traditions',
        slug: undefined,
      },
    ],
    badge: 'World tradition · Japan',
    h1: 'Shintō — Kami, Sacred Presence, and the Practice of Purity',
    subtitle: 'Japan\'s indigenous spiritual tradition — one of the world\'s few remaining living examples of a prehistoric nature-spirit religion that survived into the modern era. Shintō has no founding figure, no canonical scripture, no systematic theology. It is a practice of attention to the sacred dimension of ordinary reality: the kami that inhabit natural phenomena, places, and ancestors.',
    readTime: '9 min',
    relatedSlugs: ['confucianism', 'taoism', 'zoroastrianism'],
    essaySections: [
      {
        heading: 'Kami: sacred presence, not supernatural beings',
        body: 'Kami is often translated as \'god\' or \'spirit\' — both are misleading. Kami are not separate beings who inhabit a supernatural realm above the natural world. They are the sacred quality that certain natural phenomena, places, persons, and processes possess. A waterfall can be kami. A mountain is kami. An ancestor becomes kami after death.\n\nThe Vedic parallel is not the personal deva but the concept of brahman in its early sense — the sacred power immanent in certain words, actions, and objects. Kami and this pre-Upanishadic brahman share the quality of being the sacred as inherent in things, not imposed on them from outside.',
      },
    ],
    sources: [
      {
        title: 'Kojiki (Record of Ancient Matters, 712 CE)',
        note: 'The earliest account of Japanese mythology and kami cosmology',
      },
    ],
  },

  {
    slug: 'confucianism',
    name: 'Confucianism',
    section: 'world',
    accent: 'blue',
    level: 'intermediate',
    tagline: 'Relational ethics, ritual propriety, and the Mandate of Heaven',
    iconLetter: 'C̈',
    opening: 'Relational ethics and ritual propriety (lǐ). The Mandate of Heaven. Moral cultivation within social roles. Compare with dharma\'s relational structure and the Manusmṛti\'s account of social order — two traditions that understood moral order as simultaneously cosmic, social, and role-specific.',
    concepts: [
      'Lǐ (ritual propriety)',
      'Rén (benevolence/humaneness)',
      'Mandate of Heaven (Tiānmìng)',
    ],
    thinkers: [
      {
        name: 'Confucius',
        dates: '551–479 BCE',
        role: 'Analects — the foundational text',
        quote: 'The superior person cultivates virtue; the inferior person cultivates land.',
        works: ['Analects (compiled by students)'],
      },
      {
        name: 'Mencius',
        dates: 'c. 372–289 BCE',
        role: 'Human nature is inherently good — social-political philosophy',
        quote: 'The feeling of compassion is the beginning of benevolence.',
        works: ['Mencius'],
      },
    ],
    comparisons: [
      {
        darshana: 'Vedic Dharma',
        title: 'Dharma vs lǐ as cosmic-social order: role-specific ethics across civilisations',
        question: 'Role-specific moral order in China and India',
        slug: undefined,
      },
      {
        darshana: 'Mīmāṃsā',
        title: 'Ritual as the binding of social order: two traditions of sacred formalism',
        question: 'Ritual as moral infrastructure',
        slug: undefined,
      },
    ],
    badge: 'World tradition · China',
    h1: 'Confucianism — Relational Ethics, Ritual Propriety, and the Cultivation of the Human',
    subtitle: 'The most influential ethical and political philosophy in East Asian history. Confucianism is not primarily a metaphysics but an account of how human beings flourish: through cultivation of virtue (rén), observance of ritual propriety (lǐ), and fulfilment of social roles within a cosmic order (Tiānmìng — the Mandate of Heaven). The comparison with Vedic dharma — role-specific moral order as simultaneously cosmic and social — is among the most productive in comparative ethics.',
    readTime: '12 min',
    relatedSlugs: ['taoism', 'shinto', 'zen-chan'],
    essaySections: [
      {
        heading: 'Lǐ and dharma: ritual propriety as cosmic order',
        body: 'Lǐ (禮) is often translated as \'ritual\' or \'propriety\' but encompasses something broader: the entire system of social forms — ceremonies, greetings, forms of address, mourning rites — that maintain the moral fabric of society. For Confucius, these forms are not arbitrary conventions but the accumulated wisdom of the sages: the shape that human virtue takes in social life.\n\nThe Vedic parallel is striking. Dharma in its social dimension (varṇāśrama-dharma) is precisely the set of role-specific duties — the social forms that maintain cosmic order. Both traditions see social ritual as metaphysically grounded, not merely culturally constructed.',
      },
    ],
    sources: [
      {
        title: 'Analects · Confucius (compiled by students)',
        note: 'The primary source for Confucian philosophy — conversations and aphorisms',
      },
      {
        title: 'Mencius',
        note: 'The most philosophical of the Four Books — develops human nature theory and political philosophy',
      },
    ],
  },

  {
    slug: 'neoplatonism',
    name: 'Neoplatonism',
    section: 'world',
    accent: 'purple',
    level: 'advanced',
    tagline: 'The One, emanation, and the striking parallel with Advaita',
    iconLetter: 'N',
    opening: 'Plotinus\'s system maps onto Advaita Vedānta with uncanny precision — the One, emanation of Nous and Soul, the return of the individual soul to its source. Whether this reflects historical contact via Alexandria and India, or convergent philosophical evolution, is one of comparative philosophy\'s most productive open questions.',
    concepts: [
      'The One (to Hen)',
      'Emanation / hypostasis',
      'Return (epistrophē)',
      'Henosis (union with the One)',
    ],
    thinkers: [
      {
        name: 'Plotinus',
        dates: 'c. 204–270 CE',
        role: 'Enneads — the most systematic Western non-dualist philosopher',
        quote: 'The One is perfect because it seeks nothing, has nothing, needs nothing.',
        works: ['Enneads'],
      },
      {
        name: 'Proclus',
        dates: 'c. 412–485 CE',
        role: 'Systematised Neoplatonism into its most complete philosophical form',
        quote: 'All things are in all things, but in each according to its proper nature.',
        works: ['Elements of Theology', 'Platonic Theology'],
      },
    ],
    comparisons: [
      {
        darshana: 'Advaita Vedānta',
        title: 'The One vs Brahman, emanation vs māyā: convergent or connected?',
        question: 'Western and Indian non-dualism compared',
        slug: 'neoplatonism-vs-advaita',
      },
      {
        darshana: 'Madhyamaka',
        title: 'The One vs śūnyatā: one fullness and one emptiness pointing at the same thing?',
        question: 'Fullness and emptiness as two names for the unnameable?',
        slug: undefined,
      },
    ],
    badge: 'World tradition · Hellenistic',
    h1: 'Neoplatonism — The One, Emanation, and the Return of the Soul',
    subtitle: 'Plotinus\'s Neoplatonism is the closest Western philosophy comes to Advaita Vedānta: the One (to Hen) is beyond being and thought, and all reality proceeds from it by emanation through the hypostases of Nous (intellect) and Soul. Individual souls that have forgotten their source return to the One through philosophical contemplation and mystical union (henosis). Whether this resemblance reflects historical contact between Alexandria and India — or independent philosophical convergence — is one of comparative philosophy\'s most fascinating open questions.',
    readTime: '13 min',
    relatedSlugs: ['sufism', 'taoism', 'neoplatonism-vs-advaita'],
    essaySections: [
      {
        heading: 'The One: beyond being and thought',
        body: 'Plotinus\'s One is utterly simple — no parts, no predicates, no self-knowledge (self-knowledge implies a knower and a known, hence duality). It is beyond being (since \'being\' implies a determinate nature) and beyond thought (since thought requires a distinction between thinker and thought). It generates reality not by choice or intention but by necessity — as a candle cannot help giving light.\n\nCompare Śaṅkara\'s nirguṇa Brahman: without qualities (nirguṇa), without parts, beyond thought (anirvacanīya). The Mandukya Upaniṣad\'s turīya — the fourth state, the ground of the other three — is structurally identical to Plotinus\'s One as the ground of Nous, Soul, and Matter.',
      },
    ],
    sources: [
      {
        title: 'Enneads · Plotinus (tr. A.H. Armstrong, Loeb)',
        note: 'The foundational Neoplatonic text — six sets of nine treatises on the One, Nous, and Soul',
      },
      {
        title: 'Neoplatonism and Indian Thought · ed. R. Baine Harris',
        note: 'The key comparative study examining historical and philosophical parallels',
      },
    ],
  },
];
