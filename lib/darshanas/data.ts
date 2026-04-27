export const SCHOOL_ORDER = ['nyaya', 'vaisheshika', 'samkhya', 'yoga', 'mimamsa', 'vedanta'];

export const PAIR_MAP: Record<string, string> = {
  nyaya: 'vaisheshika', vaisheshika: 'nyaya',
  samkhya: 'yoga', yoga: 'samkhya',
  mimamsa: 'vedanta', vedanta: 'mimamsa',
};

export const PAIRS = [
  { a: 'nyaya', b: 'vaisheshika', label: 'Nyāya · Vaiśeṣika', desc: 'Logic & Ontology' },
  { a: 'samkhya', b: 'yoga', label: 'Sāṃkhya · Yoga', desc: 'Theory & Practice' },
  { a: 'mimamsa', b: 'vedanta', label: 'Mīmāṃsā · Vedānta', desc: 'Ritual & Knowledge' },
];

export interface Tenet {
  title: string;
  body: string;
  note: string;
}

export interface Commentator {
  name: string;
  text: string;
  period: string;
  note: string;
}

export interface School {
  id: string;
  glyph: string;
  name: string;
  sub: string;
  category: string;
  badge: 'Sīśvara' | 'Nirīśvara';
  founder: string;
  period: string;
  pramanas: string;
  text: string;
  question: string;
  blurb: string;
  callout: string;
  subSchools?: string[];
  pairId: string;
  sutra: string;
  sutraRef: string;
  sutraTrans: string;
  sutraNote: string;
  tenets: Tenet[];
  commentators: Commentator[];
  dialogue: string;
}

export interface MatrixRow {
  school: string;
  schoolId: string;
  pramanas: string;
  ontology: string;
  atman: string;
  liberation: string;
}

export const SCHOOLS: Record<string, School> = {
  nyaya: {
    id: 'nyaya',
    glyph: 'न्या',
    name: 'Nyāya',
    sub: 'न्यायशास्त्र',
    category: 'Logic & Valid Reasoning',
    badge: 'Sīśvara',
    founder: 'Nyāya Sūtras · Akṣapāda Gautama',
    period: 'c. 2nd century BCE – 2nd century CE',
    pramanas: '4 — pratyakṣa, anumāna, upamāna, śabda',
    text: 'Nyāyasūtras (5 adhyāyas) · Nyāyabhāṣya',
    question: '"How do we arrive at valid knowledge?"',
    blurb: 'Liberation through tattvajñāna — correct knowledge of the 16 padārthas. Valid reasoning structured around the five-membered syllogism (pañcāvayava) is the primary instrument of philosophical inquiry.',
    callout: 'Sīśvara — Nyāya offers the most technically systematic theistic proofs in Indian philosophy. Udayana\'s Nyāyakusumāñjali presents five independent arguments for Īśvara whose structure remains unrefuted within the tradition.',
    pairId: 'vaisheshika',
    sutra: 'प्रमाणप्रमेयसंशयप्रयोजनदृष्टान्तसिद्धान्तावयवतर्कनिर्णयवादजल्पवितण्डाहेत्वाभासच्छलजातिनिग्रहस्थानानां तत्त्वज्ञानान्निःश्रेयसाधिगमः ॥',
    sutraRef: 'Nyāyasūtra 1.1.1 · Akṣapāda Gautama',
    sutraTrans: 'Knowledge of the true nature of the sixteen categories — pramāṇa, prameya, saṃśaya, prayojana, dṛṣṭānta, siddhānta, avayava, tarka, nirṇaya, vāda, jalpa, vitaṇḍā, hetvābhāsa, chala, jāti, nigrahasthāna — is the means to niḥśreyasa, the highest good.',
    sutraNote: 'The opening sūtra names all sixteen categories in a single compound, then promises liberation through knowing them. The structure is programmatic: Nyāya maps not just valid knowledge but the pathology of bad argument — uniquely treating the failure of knowledge as philosophically important as knowledge itself.',
    tenets: [
      {
        title: 'Sixteen padārthas — the structure of inquiry',
        body: 'The Nyāyasūtra maps all philosophical activity under sixteen categories spanning three domains: epistemological foundations (pramāṇa through dṛṣṭānta), dialectical procedure (siddhānta through nirṇaya), and the pathology of argument (vāda through nigrahasthāna). Unlike Vaiśeṣika\'s ontological padārthas, the sixteen categories are methodological — they describe how inquiry proceeds, not what the world contains. Mapping the failure of knowledge alongside knowledge itself is uniquely Nyāya.',
        note: 'The inclusion of jalpa (debate aimed at winning) and vitaṇḍā (destructive criticism without counter-thesis) as distinct categories reflects Nyāya\'s sociological realism: it acknowledges that argument occurs in contexts of competition, not just cooperative truth-seeking. Gaṅgeśa\'s Navya-Nyāya later abandoned this broad dialectical scope in favour of pure semantic analysis of vyāpti.',
      },
      {
        title: 'Pañcāvayava — the five-membered syllogism',
        body: 'The Nyāya syllogism has five limbs: pratijñā (thesis: "The mountain has fire"), hetu (reason: "because it has smoke"), udāharaṇa (universal with concrete example: "wherever smoke, fire — as in a kitchen"), upanaya (application: "this mountain has such smoke"), nigamana (conclusion: "therefore fire"). The third limb — a concrete illustration alongside the universal — distinguishes this from Aristotelian syllogism. Vyāpti (invariable concomitance) is the logical glue that makes the inference valid.',
        note: 'Navya-Nyāya developed highly technical formal notation (using anuyogi, pratiyogi, avacchedaka) to express vyāpti relations with precision approaching modern relational logic — six centuries before Frege, independently developed.',
      },
      {
        title: 'Hetvābhāsa — doctrine of fallacious inference',
        body: 'Five types of fallacious inference: sādhyasama (reason as unproven as the thesis), viruddha (reason contradicts the thesis), anaikāntika (reason too wide — occurs in sādhya-absent cases too), savyabhicāra (reason is irregular), bādhita (reason overridden by a stronger pramāṇa). This taxonomy was sharpened through six centuries of debate with Buddhist logicians — Dignāga\'s Hetucakra and Dharmakīrti\'s Nyāyabindu forced repeated refinements of every category.',
        note: 'The intellectual rivalry with Buddhist pramāṇavādins is the single greatest creative spur in Indian logic. Uddyotakara\'s Nyāyavārttika is largely a sustained refutation of Dignāga; without Buddhist critique, Nyāya might not have achieved its technical precision.',
      },
      {
        title: 'Theology, soteriology, and niḥśreyasa',
        body: 'Nyāya is uniquely and methodically theistic. Udayana\'s Nyāyakusumāñjali (10th–11th c.) presents five independent proofs for Īśvara: from effect (kāryāt), from composition (āyojanāt), from support (dhṛtyādibhiḥ), from verbal testimony (padāt), and from scripture\'s surplus validity (prāmāṇyāt). Liberation (niḥśreyasa) is permanent cessation of all pain — not positive bliss. This distinguishes Nyāya sharply from Vedāntic ānanda: the telos is absence of suffering, not experience of joy.',
        note: 'Niḥśreyasa-as-cessation versus Vedāntic ānanda-as-bliss is perhaps the sharpest soteriological divide among āstika systems. Rāmānuja objected that a liberation without positive bliss is no better than annihilation.',
      },
    ],
    commentators: [
      { name: 'Akṣapāda Gautama', text: 'Nyāyasūtras', period: 'c. 2nd century CE', note: '16-category framework; five-membered syllogism; debate theory' },
      { name: 'Vātsyāyana', text: 'Nyāyabhāṣya', period: 'c. 4th–5th century', note: 'First major commentary; established realist epistemology against Buddhist critique' },
      { name: 'Uddyotakara', text: 'Nyāyavārttika', period: 'c. 6th century', note: 'Systematic refutation of Dignāga; refined vyāpti; defended permanent ātman' },
      { name: 'Vācaspati Miśra', text: 'Nyāyavārttikatātparyaṭīkā', period: 'c. 9th century', note: 'Commentary on Uddyotakara; uniquely commented on Nyāya, Sāṃkhya, and Advaita' },
      { name: 'Udayana', text: 'Nyāyakusumāñjali · Ātmatattvaviveka', period: 'c. 10th–11th century', note: 'Five independent proofs for Īśvara; apex of classical Nyāya theism' },
      { name: 'Gaṅgeśa Upādhyāya', text: 'Tattvacintāmaṇi', period: 'c. 13th century', note: 'Founded Navya-Nyāya; transformed Indian logic into quasi-formal relational language' },
    ],
    dialogue: 'Vaiśeṣika provides the ontological inventory — what kinds of things exist: atoms, substances, qualities, universals, particulars, inherence. Nyāya provides the epistemological and logical apparatus — how we know that inventory to be true and how we argue for it. The schools are often summarised: Vaiśeṣika = "what there is"; Nyāya = "how we know it and argue about it." By the medieval period the schools merged into a Nyāya-Vaiśeṣika synthesis — but asymmetrically: Nyāya\'s logic became the shared methodology of nearly all subsequent Hindu philosophy.',
  },

  vaisheshika: {
    id: 'vaisheshika',
    glyph: 'वै',
    name: 'Vaiśeṣika',
    sub: 'वैशेषिकशास्त्र',
    category: 'Atomism & Categories of Being',
    badge: 'Sīśvara',
    founder: 'Vaiśeṣika Sūtras · Kaṇāda (Ulūka)',
    period: 'c. 3rd–2nd century BCE',
    pramanas: '2 — pratyakṣa, anumāna (+ śabda accepted later)',
    text: 'Vaiśeṣikasūtras · Padārthadharmasaṃgraha (Praśastapāda)',
    question: '"What are the irreducible constituents of existence?"',
    blurb: 'Reality consists of seven padārthas — dravya, guṇa, karma, sāmānya, viśeṣa, samavāya, abhāva — built from eternal indivisible paramāṇus. Liberation is knowledge of these categories.',
    callout: 'Paramāṇuvāda — Vaiśeṣika\'s atomic theory is philosophically unique: atoms are eternal by nature, never products of division. Two atoms form a dyad (sub-perceptible); three dyads a triad (the smallest perceptible aggregate). This is not Greek atomism.',
    pairId: 'nyaya',
    sutra: 'यतोऽभ्युदयनिःश्रेयससिद्धिः स धर्मः ॥',
    sutraRef: 'Vaiśeṣikasūtra 1.1.2 · Kaṇāda',
    sutraTrans: 'That from which the accomplishment of prosperity (abhyudaya) and of the highest good (niḥśreyasa) arises — that is dharma.',
    sutraNote: 'Vaiśeṣika defines dharma functionally — as any cause of both worldly flourishing and ultimate liberation — rather than Mīmāṃsā\'s injunctive definition. This grounds the atomistic ontology in a soteriological purpose: knowing the seven categories accurately is itself liberatory.',
    tenets: [
      {
        title: 'Seven padārthas — the inventory of existence',
        body: 'All of reality falls under seven irreducible categories: dravya (substance — 9 types: earth, water, fire, air, ether, time, space, ātman, manas), guṇa (quality — 24 types), karma (motion — 5 types), sāmānya (universal), viśeṣa (ultimate differentiator), samavāya (inherence), and abhāva (absence). The first three are positive existents; the next three govern universals, particulars, and relations; abhāva formalises the ontology of negation.',
        note: 'The category of viśeṣa (ultimate particularity) is Vaiśeṣika\'s most original contribution. Two atoms of the same element are qualitatively identical. What makes them numerically distinct? Each possesses its own irreducible viśeṣa — a bare "thisness" (haecceity in Scotist terms) grounding numerical difference without qualitative difference.',
      },
      {
        title: 'Atomic theory — paramāṇuvāda',
        body: 'Physical reality is ultimately composed of eternal, indivisible, partless atoms (paramāṇu) of four elemental types: earth (pārthiva), water (āpya), fire (tejas), air (vāyavya). Ether, time, space, ātman, and manas are also dravyas but are all-pervading rather than atomic. Each elemental atom carries a primary quality as its locus: earth-atoms have smell (gandha), water-atoms taste (rasa), fire-atoms colour (rūpa), air-atoms touch (sparśa).',
        note: 'The Vaiśeṣika atomic argument: "if matter were infinitely divisible, no real macroscopic aggregates would exist — the whole would equal its infinitely divisible parts, and no new wholes could emerge." The argument concerns conditions for the existence of composite entities (avayavin), not empirical indivisibility.',
      },
      {
        title: 'Samavāya — inherence and its critics',
        body: 'Samavāya is the inseparable relation between a substance and its qualities, a whole and its parts, a universal and its instances. Unlike conjunction (saṃyoga, a separable relation), samavāya is constitutive. It is posited as a single eternal omnipresent entity — a padārtha in its own right. Critics pressed the regress: does samavāya itself inhere via a second-order samavāya? Vaiśeṣika\'s reply: samavāya is svāśrayavṛtti — self-relating, requiring no further relation.',
        note: 'Śaṃkara\'s Advaita attack on samavāya is one of the sharpest arguments in the Brahmasūtrabhāṣya: if the cloth-thread relation requires samavāya, and samavāya requires a further relation, infinite regress follows — unless identity (tādātmya) is the ground. For Advaita all relations reduce to identity.',
      },
      {
        title: 'Liberation — ātman\'s reversion to natural state',
        body: 'The Vaiśeṣika ātman is philosophically unusual: unconscious by nature, becoming conscious only when joined with manas. Consciousness is thus a contingent relational quality of the ātman — not its essence. Liberation is the permanent separation of ātman from manas — cessation of all pleasure and pain — the ātman reverts to its natural unconscious state. Īśvara is the nimittakāraṇa (efficient cause) of creation but not the material cause.',
        note: 'The unconscious-ātman thesis sets Vaiśeṣika apart from every other āstika school. In Sāṃkhya, Puruṣa is pure consciousness by nature. In Advaita, Brahman = cit as absolute substrate. Only Vaiśeṣika makes consciousness a relational emergent. This position was criticised by all: if the liberated ātman is unconscious, in what sense is liberation a good?',
      },
    ],
    commentators: [
      { name: 'Kaṇāda (Ulūka)', text: 'Vaiśeṣikasūtras', period: 'c. 3rd–2nd century BCE', note: '7-category framework; atomic theory; soteriology of category-knowledge' },
      { name: 'Praśastapāda', text: 'Padārthadharmasaṃgraha', period: 'c. 5th–6th century', note: 'More influential than the original sūtras; added abhāva; comprehensive atomic physics' },
      { name: 'Śrīdhara', text: 'Nyāyakandalī', period: 'c. 10th century', note: 'Lucid commentary on Praśastapāda; most accessible classical exposition' },
      { name: 'Udayana', text: 'Kiraṇāvalī', period: 'c. 10th–11th century', note: 'Refined samavāya doctrine; theistic arguments consistent with Nyāya synthesis' },
      { name: 'Śivāditya', text: 'Saptapadārthī', period: 'c. 11th century', note: 'Systematic treatment of all seven padārthas; standard introductory text' },
    ],
    dialogue: 'Nyāya provides the epistemological framework — how we come to know things, how we argue validly, how we identify fallacies. Vaiśeṣika fills in the metaphysical inventory — what kinds of things actually exist, how atoms combine into the objects we perceive. The synthesised Nyāya-Vaiśeṣika tradition (from c. 10th century) accepted Nyāya\'s four pramāṇas alongside Vaiśeṣika\'s seven padārthas as jointly constituting a complete philosophical system.',
  },

  samkhya: {
    id: 'samkhya',
    glyph: 'सां',
    name: 'Sāṃkhya',
    sub: 'सांख्यशास्त्र',
    category: 'Enumeration — Dualism of Puruṣa & Prakṛti',
    badge: 'Nirīśvara',
    founder: 'Sāṃkhya Kārikā · Kapila (legendary) · Īśvarakṛṣṇa (historical)',
    period: 'c. 3rd century BCE – 4th century CE',
    pramanas: '3 — pratyakṣa, anumāna, āptavacana',
    text: 'Sāṃkhyakārikā (72 verses) · Īśvarakṛṣṇa',
    question: '"What is the relation between consciousness and matter?"',
    blurb: '25 tattvas unfold from Prakṛti. Liberation is viveka — the Puruṣa recognising its absolute separation from Prakṛti. The only āstika darśana that is explicitly atheistic.',
    callout: 'Nirīśvara — Sāṃkhyakārikā 61 argues explicitly against God\'s existence: since liberated Puruṣas are inert and unaffected, no Īśvara can be proven from effects. One of two classical āstika darśanas that are explicitly atheistic.',
    pairId: 'yoga',
    sutra: 'दुःखत्रयाभिघाताज्जिज्ञासा तदपघातके हेतौ ।\nदृष्टे सापार्था चेन्नैकान्तात्यन्ततोऽभावात् ॥',
    sutraRef: 'Sāṃkhyakārikā 1 · Īśvarakṛṣṇa',
    sutraTrans: 'From torment by the three kinds of suffering — ādhyātmika (arising from within: disease, mental affliction), ādhibhautika (from other beings), ādhidaivika (from cosmic forces: flood, drought, fate) — arises the desire to know the means of removing them. Ordinary means are inadequate since their relief is not absolute or permanent.',
    sutraNote: 'Kārikā 1 opens with human suffering, not a definition of reality — placing soteriology structurally before metaphysics. Sāṃkhya is the only āstika system to begin with the datum of pain. The second half performs an argumentative move: it dismisses ordinary (dṛṣṭa) remedies as inadequate, motivating the need for extraordinary (adṛṣṭa) metaphysical knowledge.',
    tenets: [
      {
        title: 'Puruṣa–Prakṛti dualism',
        body: 'Two ultimate, irreducible, co-eternal principles. Puruṣa (plural): pure consciousness (cit), absolutely passive (akartā), a mere witness (sākṣin), without qualities. There are infinitely many Puruṣas — each embodied jīva has its own. Prakṛti (singular): unconscious matter-energy, active, the root-cause of all cosmic evolution, consisting of three guṇas in perfect pre-cosmic equilibrium. The proximity (sannidhi) of Puruṣas disturbs this equilibrium and triggers evolution — not through causal action by Puruṣa but through mutual "benefit."',
        note: 'Sāṃkhya is the only classical āstika system that is atheistic. No Īśvara, no creator, no cosmic sustainer. The cosmos arises from Prakṛti\'s intrinsically purposive evolution in the presence of Puruṣa — a kind of teleological materialism without a designer.',
      },
      {
        title: 'The 25 tattvas — complete map of existence',
        body: 'From Prakṛti evolve 23 further principles: Mahat/Buddhi (cosmic intelligence) → Ahaṃkāra (ego-principle) → from sāttvika ahaṃkāra: 5 jñānendriyas + 5 karmendriyas + manas; from tāmasa ahaṃkāra: 5 tanmātras → 5 mahābhūtas. Total: Puruṣa (×∞) + Prakṛti (1) + 23 evolutes = 25. The name Sāṃkhya ("enumeration") derives precisely from this exhaustive counting.',
        note: 'Nothing lies outside the 25-tattva grid: cosmic, psychological, sensory, and physical reality are fully mapped. Liberation does not require a 26th entity — it requires recognising that Puruṣa is not part of the grid. The grid belongs to Prakṛti alone; Puruṣa was always outside it.',
      },
      {
        title: 'Three guṇas — the fabric of Prakṛti',
        body: 'Prakṛti consists of three ever-interacting strands: sattva (luminosity, clarity, pleasure), rajas (activity, restlessness, pain), tamas (inertia, heaviness, obscurity). Pre-evolution: perfect guṇa-equilibrium. The proximity of Puruṣa disturbs this, triggering the evolutionary cascade. Every psychological state, every physical object is analysable as a ratio of the three. Liberation requires transcending all three; the liberated Puruṣa is nirguṇa.',
        note: 'The guṇa theory is Sāṃkhya\'s most pervasive export. Absorbed wholesale by Yoga, applied throughout the Bhagavad Gītā\'s analysis of action (18.23–25), knowledge (18.20–22), food (17.8–10), and sacrifice. Arguably the single most widely diffused analytical tool in the Hindu philosophical tradition.',
      },
      {
        title: 'Liberation — vivekakhyāti',
        body: 'Liberation (mokṣa/kaivalya) is vivekakhyāti — discriminative cognition achieving the distinction (viveka) between Puruṣa and Buddhi/Prakṛti. When Buddhi becomes perfectly sāttvika, it mirrors Puruṣa\'s consciousness and "sees" the truth: Puruṣa was always free. Prakṛti, having accomplished her purpose (like a dancer who retires once seen — Kārikā 59), ceases to evolve for that Puruṣa. Jīvanmukti (liberation while living) is possible.',
        note: 'Kārikā 59–62: Puruṣa and Prakṛti are like a lame man (sees, cannot walk) and a blind woman (walks, cannot see). Their partnership produces the world; their separation is liberation. The analogy captures both the necessity of initial conjunction and the naturalness of eventual separation.',
      },
    ],
    commentators: [
      { name: 'Īśvarakṛṣṇa', text: 'Sāṃkhyakārikā (72 verses)', period: 'c. 4th–5th century', note: 'Canonical 72-verse summary; translated into Chinese by Paramārtha c. 560 CE' },
      { name: 'Gauḍapāda', text: 'Sāṃkhyakārikābhāṣya', period: 'c. 6th century', note: 'Oldest extant commentary; distinct from the Advaita Gauḍapāda of the Māṇḍūkyakārikā' },
      { name: 'Vācaspati Miśra', text: 'Tattvakaumudī', period: 'c. 9th century', note: 'Most influential commentary; decisive for the "standard" Sāṃkhya reading' },
      { name: 'Vijñānabhikṣu', text: 'Sāṃkhyapravacanabhāṣya', period: 'c. 16th century', note: 'Theistic re-reading; controversial reconciliation with Vedānta; rejected by orthodox interpreters' },
    ],
    dialogue: 'Yoga accepts the entire 25-tattva metaphysical system of Sāṃkhya without modification. The differences are exactly two: (1) Yoga adds Īśvara as puruṣaviśeṣa — a special eternally-free Puruṣa, not a creator; (2) Yoga adds the aṣṭāṅga practice as the methodological route to vivekakhyāti, arguing that theoretical understanding alone is insufficient because the subtle kleśas remain active until burned by yogic practice. Sāṃkhya\'s liberation is primarily cognitive; Yoga\'s is cognitive-cum-meditative.',
  },

  yoga: {
    id: 'yoga',
    glyph: 'यो',
    name: 'Yoga',
    sub: 'योगशास्त्र',
    category: 'Discipline — Stilling of Mental Fluctuations',
    badge: 'Sīśvara',
    founder: 'Yoga Sūtras · Patañjali',
    period: 'c. 2nd century BCE – 4th century CE',
    pramanas: '3 — pratyakṣa, anumāna, āgama (+ yogic direct perception)',
    text: 'Yogasūtras (196 sūtras · 4 pādas) · Vyāsabhāṣya',
    question: '"How does the mind achieve complete stillness?"',
    blurb: 'Yogaś citta-vṛtti-nirodhaḥ. Liberation through stilling all modifications of the mind-stuff. Accepts Sāṃkhya\'s 25-tattva metaphysics but adds Īśvara and the aṣṭāṅga practice as the reliable vehicle for vivekakhyāti.',
    callout: 'Sīśvara — unlike twin school Sāṃkhya, Yoga accepts Īśvara as a special eternal Puruṣa (puruṣaviśeṣa) untouched by afflictions, karma, and their fruits (YS 1.24). Īśvara is not a creator — Prakṛti remains the material cause.',
    pairId: 'samkhya',
    sutra: 'अथ योगानुशासनम् ॥\nयोगश्चित्तवृत्तिनिरोधः ॥\nतदा द्रष्टुः स्वरूपेऽवस्थानम् ॥',
    sutraRef: 'Yogasūtra 1.1–3 · Patañjali',
    sutraTrans: 'Now, the authoritative instruction on yoga (1.1). Yoga is the cessation (nirodha) of the modifications (vṛtti) of the mind-stuff (citta) (1.2). Then the seer (draṣṭā) abides in its own essential form (svarūpa) (1.3).',
    sutraNote: 'These three sūtras form the most compact philosophical programme in Indian literature. "Now" implies prerequisites — typically prior Sāṃkhya study. The definition (1.2) has every word commented on exhaustively: citta = buddhi + ahaṃkāra + manas; vṛtti = the five modification-types; nirodha = not suppression but positive stilling. Sūtra 1.4 names the failure mode: otherwise the seer takes the form of the vṛttis (sārūpyam itaratra) — misidentification driving saṃsāra.',
    tenets: [
      {
        title: 'Citta-vṛtti-nirodha — the definition and its stakes',
        body: 'Citta encompasses the entire psychic apparatus: buddhi (intellect), ahaṃkāra (ego-sense), and manas (coordinating sense-mind). Five types of vṛtti: pramāṇa (valid cognition), viparyaya (error), vikalpa (conceptualisation without real object), nidrā (sleep), smṛti (memory) — each kliṣṭa (afflicted) or akliṣṭa (non-afflicted). Nirodha is the positive stilling of all these — not suppression, which implies force and resistance, but the natural settling when the cause of disturbance is removed.',
        note: 'Svarūpe\'vasthānam (1.3) — "abiding in the seer\'s own form" — is Yoga\'s liberation formula. It presupposes Sāṃkhya: Puruṣa has a "form" (pure witnessing consciousness) genuinely distinct from Prakṛti\'s modifications. Liberation is not dissolution into Brahman but persistent self-luminous witnessing.',
      },
      {
        title: 'Aṣṭāṅga yoga — the eight-limbed path',
        body: 'Eight progressive limbs: (1) yama — five ethical restraints (ahiṃsā, satya, asteya, brahmacarya, aparigraha), (2) niyama — five observances, (3) āsana — stable seated posture, (4) prāṇāyāma — regulated breath, (5) pratyāhāra — withdrawal of senses, (6) dhāraṇā — concentration on a single object, (7) dhyāna — uninterrupted flow of attention, (8) samādhi — merger of object-consciousness and subject-consciousness. The last three (saṃyama) are the direct instrument of yogic higher perception.',
        note: 'Modern yoga privileges āsana (2 of 196 sūtras). The ethical limbs yama and niyama receive ten sūtras. Patañjali\'s yoga is primarily an ethical-cognitive-meditative discipline; the physical posture tradition belongs to the later haṭha yoga lineage (Haṭhapradīpikā, c. 15th century).',
      },
      {
        title: 'Samādhi — stages and their metaphysical map',
        body: 'Samprajñāta (with seed, with object): savitarka (gross object with verbal construction) → nirvitarka (without construction) → savicāra (subtle object with reflection) → nirvicāra (without reflection). Beyond: asamprajñāta (without seed). Final: dharma-meghā-samādhi — discriminative wisdom floods in, kleśas are burned, kaivalya follows immediately.',
        note: 'The progression maps onto Sāṃkhya\'s tattva hierarchy: gross elements → tanmātras → ahaṃkāra → buddhi → near Puruṣa. Each samādhi stage penetrates one level deeper into Prakṛti\'s structure until Puruṣa is fully disclosed. The metaphysical and soteriological architectures are perfectly isomorphic.',
      },
      {
        title: 'Īśvara — Yoga\'s departure from Sāṃkhya',
        body: 'YS 1.24: Īśvara is kleśa-karma-vipākāśayair aparāmṛṣṭaḥ puruṣaviśeṣa — a special Puruṣa untouched by afflictions, karma, their results, and latent impressions. Not a creator god. Īśvara is the ideal object of devotional meditation (Īśvarapraṇidhāna) and the guru of all prior teachers, transcending time (YS 1.26).',
        note: 'The tension: if all Puruṣas are self-identical pure witnessing consciousness, what genuinely distinguishes Īśvara from other freed Puruṣas? Vyāsa: eternal (not achieved) freedom and fully actualised omniscience. Vijñānabhikṣu argued this makes Yoga secretly theistic; Vācaspati Miśra maintained the distinction is one of degree, not kind.',
      },
    ],
    commentators: [
      { name: 'Patañjali', text: 'Yogasūtras (196 sūtras, 4 pādas)', period: 'c. 2nd c. BCE – 4th c. CE', note: 'Canonical synthesis of yoga traditions into Sāṃkhya-metaphysical framework' },
      { name: 'Vyāsa', text: 'Yogabhāṣya (Vyāsabhāṣya)', period: 'c. 4th–5th century', note: 'Essential; without it many sūtras are too terse to interpret; standard reading of citta-vṛtti-nirodha' },
      { name: 'Vācaspati Miśra', text: 'Tattvavaiśāradī', period: 'c. 9th century', note: 'Commentary on Vyāsa; most systematic classical exposition; clarified samādhi typology' },
      { name: 'Bhoja Rāja', text: 'Rājamārtaṇḍa', period: 'c. 11th century', note: 'Independent commentary; sometimes diverges from standard reading; practical royal framing' },
      { name: 'Vijñānabhikṣu', text: 'Yogavārttika', period: 'c. 16th century', note: 'Theistic synthesis; argued Yoga compatible with Vedānta; controversial but widely read' },
    ],
    dialogue: 'Sāṃkhya is the theory; Yoga is the practice — but precisely: Sāṃkhya holds that correct theoretical understanding of the 25 tattvas is sufficient for liberation. Yoga agrees discriminative knowledge is necessary but argues it is not sufficient: the five kleśas (avidyā, asmitā, rāga, dveṣa, abhiniveśa) have been active for beginningless time and leave karmic residues (saṃskāras) that theoretical understanding alone does not uproot. The aṣṭāṅga path is required to actually burn these residues and make vivekakhyāti permanent.',
  },

  mimamsa: {
    id: 'mimamsa',
    glyph: 'मी',
    name: 'Mīmāṃsā',
    sub: 'पूर्वमीमांसा',
    category: 'Inquiry into Vedic Injunctions',
    badge: 'Nirīśvara',
    founder: 'Mīmāṃsā Sūtras · Jaimini',
    period: 'c. 3rd–2nd century BCE',
    pramanas: '6 (Bhāṭṭa) — pratyakṣa, anumāna, upamāna, arthāpatti, anupalabdhi, śabda · 5 (Prābhākara)',
    text: 'Mīmāṃsāsūtras · Śābarabhāṣya · Ślokavārttika (Kumārila) · Bṛhatī (Prabhākara)',
    question: '"What constitutes dharmic duty and how is it known?"',
    blurb: 'Dharma is what the Veda enjoins — codanālakṣaṇo\'rtho dharmaḥ. The Veda is apauruṣeya: eternal, unauthored, self-validating. Mīmāṃsā is the science of Vedic hermeneutics.',
    callout: 'Nirīśvara — Kumārila Bhaṭṭa argues explicitly against God\'s existence (Ślokavārttika, Codanāsūtra). Vedic authority requires no divine author: the Vedas are self-authorising (svataḥprāmāṇya). This is atheism-by-argument, not atheism-by-neglect.',
    pairId: 'vedanta',
    sutra: 'अथातो धर्मजिज्ञासा ॥',
    sutraRef: 'Mīmāṃsāsūtra 1.1.1 · Jaimini',
    sutraTrans: 'Now, therefore, the inquiry into dharma.',
    sutraNote: 'Three words, each weighted. "Now" (atha) implies prerequisites: the student has completed prior Vedic study. "Therefore" (ataḥ) implies a reason for this inquiry. Dharma is defined in sūtra 1.1.2 as "an object characterised by Vedic injunction" (codanālakṣaṇo\'rtho dharmaḥ). Brahmasūtra 1.1.1 deliberately echoes this — substituting "Brahman" for "dharma" — signalling that Vedānta picks up the inquiry where Mīmāṃsā ends.',
    tenets: [
      {
        title: 'Apauruṣeyatva — the authorless, eternal Veda',
        body: 'The Vedas are not authored by any person — human or divine. They are eternal (nitya), beginningless, self-validating (svataḥprāmāṇya), and the relationship between Vedic words and their meanings is natural, not conventional. This entails: the Veda requires no divine author; the words and meanings of the Veda are eternal entities; phonemes, words, and sentences are eternal even if individual utterances are transient.',
        note: 'Apauruṣeyatva grounds Vedic authority not in theism but in linguistic metaphysics. The Vedas are prior to God — not the word of God. Kumārila\'s Ślokavārttika devotes extensive analysis to defending the eternity of the śabda (phoneme) against Buddhist impermanence arguments.',
      },
      {
        title: 'Six pramāṇas — especially arthāpatti',
        body: 'The Bhāṭṭa school accepts six independent pramāṇas: pratyakṣa, anumāna, upamāna, arthāpatti, anupalabdhi, and śabda. The Prābhākara school rejects anupalabdhi as separate, accepting five. Arthāpatti (postulation) is Mīmāṃsā\'s distinctive contribution: the cognition of a fact whose existence is required to make sense of another known fact. Classic example: Devadatta is alive (known) but not at home (observed) — he must be elsewhere. Known not by inference (no explicit universal) but by forced-gap filling.',
        note: 'The debate over anupalabdhi (non-apprehension) between Bhāṭṭa and Prābhākara anticipates contemporary epistemology debates: is absence cognised directly (Bhāṭṭa: yes) or inferred from the non-occurrence of positive cognition (Prābhākara)?',
      },
      {
        title: 'Sentence meaning — the Bhāṭṭa/Prābhākara split',
        body: 'How does a sentence generate cognition? Kumārila\'s Bhāṭṭa school (abhihitānvaya): each word expresses its own independent meaning; sentence-meaning as a unified relational whole is known by a separate subsequent mental act of synthesis. Prabhākara\'s school (anvitābhidhāna): words inherently express meanings in relational form — the sentence-meaning is primary; word-meanings are derived by analysis.',
        note: 'This split determines how Vedic injunctions bind the ritualist — what "knowing dharma" means for practical conduct. It also shapes all subsequent Indian philosophy of language, including Abhinavagupta\'s aesthetics and Bharatṛhari\'s philosophy of śabda.',
      },
      {
        title: 'Dharma, karma-kāṇḍa, and liberation',
        body: 'Early Mīmāṃsā: the goal of Vedic ritual is svarga (heaven) — not permanent liberation. Mokṣa was initially foreign to Mīmāṃsā\'s concerns. Later Mīmāṃsakas (Kumārila) accepted mokṣa while insisting on the priority of ritual. The ātman is plural, eternal, and the active agent of karma — a direct counter to both Advaita\'s single Brahman and Buddhist anātman.',
        note: 'Kumārila is reported in Mādhava\'s Śaṃkaradigvijaya to have debated Śaṃkara\'s disciples, been refuted, and converted to Advaita at life\'s end. Whether historical or not, this tradition illustrates the deep intellectual competition between Mīmāṃsā and Advaita for control of Vedic interpretation.',
      },
    ],
    commentators: [
      { name: 'Jaimini', text: 'Mīmāṃsāsūtras (12 adhyāyas)', period: 'c. 3rd–2nd century BCE', note: 'Definitional framework; dharma as codanālakṣaṇa; foundational hermeneutic rules' },
      { name: 'Śabara Svāmin', text: 'Śābarabhāṣya', period: 'c. 3rd–5th century', note: 'First comprehensive commentary; foundation for both Bhāṭṭa and Prābhākara schools' },
      { name: 'Kumārila Bhaṭṭa', text: 'Ślokavārttika · Tantravārttika · Ṭupṭīkā', period: 'c. 7th century', note: 'Bhāṭṭa school; anti-Buddhist polemic; 6 pramāṇas; svataḥprāmāṇya defended in depth' },
      { name: 'Prabhākarapāda (Guru)', text: 'Bṛhatī', period: 'c. 7th century', note: 'Prābhākara school; anvitābhidhāna theory; rejected anupalabdhi; stricter ritualism' },
      { name: 'Pārthasārathi Miśra', text: 'Nyāyaratnākara · Śāstradīpikā', period: 'c. 10th–11th century', note: 'Definitive consolidation of the Bhāṭṭa position' },
    ],
    dialogue: 'Mīmāṃsā (Pūrva, "prior") and Vedānta (Uttara, "later") both claim the Veda as sole authority but interpret different portions. Pūrva-Mīmāṃsā addresses the karma-kāṇḍa — injunctions and ritual. Vedānta addresses the jñāna-kāṇḍa — the Upaniṣads. The central dispute: Mīmāṃsakas held that Vedic injunctions are the Veda\'s primary function; metaphysical statements are secondary, serving only to support injunctions. Śaṃkara reversed this: the Upaniṣadic mahāvākyas are the Veda\'s supreme purpose; ritual is preparatory, not final.',
  },

  vedanta: {
    id: 'vedanta',
    glyph: 'वे',
    name: 'Vedānta',
    sub: 'उत्तरमीमांसा',
    category: 'End of the Vedas — Inquiry into Brahman',
    badge: 'Sīśvara',
    founder: 'Brahma Sūtras · Bādarāyaṇa',
    period: 'c. 1st–5th century CE (sūtras) · 8th–13th century (major commentaries)',
    pramanas: '3 — pratyakṣa, anumāna, śabda (śruti primary; anumāna must not contradict)',
    text: 'Prasthāna-traya: Upaniṣads + Brahmasūtras + Bhagavad Gītā',
    question: '"What is the relation between the individual self and ultimate reality?"',
    blurb: 'Inquiry into Brahman, Ātman, and their relation via the Prasthānatraya. Three sub-schools — Advaita, Viśiṣṭādvaita, Dvaita — give mutually exclusive answers to every question in the comparative matrix.',
    callout: 'Vedānta is an umbrella tradition, not a single school. Advaita (Śaṃkara), Viśiṣṭādvaita (Rāmānuja), and Dvaita (Madhva) wrote commentaries on the same 555 terse Brahmasūtras and arrived at radically incompatible conclusions. The sūtras are so terse that meaning is almost entirely commentary-dependent.',
    subSchools: ['Advaita · Śaṃkara', 'Viśiṣṭādvaita · Rāmānuja', 'Dvaita · Madhva'],
    pairId: 'mimamsa',
    sutra: 'अथातो ब्रह्मजिज्ञासा ॥\nजन्माद्यस्य यतः ॥',
    sutraRef: 'Brahmasūtra 1.1.1–2 · Bādarāyaṇa',
    sutraTrans: 'Now, therefore, the inquiry into Brahman (1.1.1). That from which the origin, sustenance, and dissolution of this world proceed — that is Brahman (1.1.2).',
    sutraNote: 'Sūtra 1.1.1 echoes Mīmāṃsāsūtra 1.1.1 deliberately: substituting "Brahman" for "dharma" signals that Vedānta begins where Pūrva-Mīmāṃsā ends. Sūtra 1.1.2 defines Brahman as the ultimate cause of the world\'s origin, sustenance, and dissolution. All three Vedānta schools agree that Brahman is the answer — they disagree radically on what Brahman is and its relation to jīvas and the world.',
    tenets: [
      {
        title: 'Advaita — Śaṃkara (8th century)',
        body: 'Brahman alone is ultimately real (pāramārthikasatya) — pure undifferentiated consciousness-bliss-being (saccidānanda). The individual self (jīva) is Brahman under the limiting adjunct (upādhi) of buddhi; on liberation the upādhi dissolves and identity with Brahman is recognised. The world (jagat) has empirical (vyāvahārika) reality — not hallucination — but is ultimately indeterminate (anirvacanīya). Māyā conceals and projects multiplicity from the one Brahman. Liberation = direct non-dual cognition (aparokṣānubhūti) of tat tvam asi. Jīvanmukti possible.',
        note: 'Rāmānuja\'s objection: if knower, act of knowing, and object known are ultimately identical as one Brahman, knowledge itself becomes impossible. "Indeterminate being" (anirvacanīya) is incoherent — a thing is either real (sat) or unreal (asat); there is no coherent third category.',
      },
      {
        title: 'Viśiṣṭādvaita — Rāmānuja (11th–12th century)',
        body: 'Brahman is one but qualified (viśiṣṭa) by real internal attributes — including jīvas and jagat as Brahman\'s body (śarīra). Three mutually dependent real tattvas: Brahman/Īśvara (Viṣṇu), cit (jīvas — conscious, atomic, real and eternally distinct), acit (matter). Māyā is Brahman\'s real creative power. Liberation = sāyujya with Viṣṇu, retaining full individual identity. Degrees: sālokya → sāmīpya → sārūpya → sāyujya.',
        note: 'Viśiṣṭādvaita navigates between Advaita\'s identity (incoherent) and Dvaita\'s pure difference (theologically unsatisfying): the qualified whole is one — non-dualism preserved — but the modes are real and distinct — the devotee-Bhagavān relation is not dissolved at liberation.',
      },
      {
        title: 'Dvaita — Madhva (13th century)',
        body: 'Five eternal real differences (pañcabheda): (1) Īśvara ≠ jīva, (2) Īśvara ≠ jagat, (3) jīva ≠ jagat, (4) jīva ≠ jīva, (5) jagat-entities ≠ each other. All five are real and eternal. Viṣṇu alone is absolutely independent (svatantra); all jīvas and matter are absolutely dependent (paratantra). Even in liberation, ānanda has gradations (tāratamya) — the highest liberated being (Lakṣmī) still falls infinitely short of Viṣṇu\'s ānanda.',
        note: 'Madhva posits three classes of jīvas: mukti-yogya (capable of liberation), nitya-saṃsārin (condemned to eternal saṃsāra), tamo-yogya (condemned to eternal tamas). No other Hindu school posits preestablished condemnation — a position that has no parallel in the tradition and is closer to Calvinist double predestination.',
      },
      {
        title: 'Tat tvam asi — the three-school fault-line',
        body: 'All three schools interpret Chāndogya 6.8.7 ("That thou art") differently, mutually exclusively. Advaita: strict identity — both "tat" and "tvam" refer to the same pure consciousness after limiting adjuncts are stripped via lakṣaṇā. Viśiṣṭādvaita: identity-in-difference — "tvam" refers to the jīva as a mode (prakāra) of Brahman; identity holds at the level of the qualified whole. Dvaita: tadātmya = similarity, not identity — the jīva is Brahman\'s image (pratibimba).',
        note: 'The three readings are logically exhaustive (identity, qualified identity, difference) and mutually exclusive. No synthesis has been achieved despite centuries of argument. This is arguably the deepest philosophical fault-line in Indian thought — generating completely different soteriologies, ritual logics, and theologies. The debate continues in living form in the Vedānta traditions of South India.',
      },
    ],
    commentators: [
      { name: 'Bādarāyaṇa', text: 'Brahmasūtras (555 sūtras, 4 adhyāyas)', period: 'c. 1st–5th century CE', note: 'Foundational terse sūtras; meaning is almost entirely commentary-dependent' },
      { name: 'Śaṃkarācārya', text: 'Brahmasūtrabhāṣya · Upadeśasāhasrī', period: 'c. 788–820 CE', note: 'Founded Advaita; bhāṣyas on all 10 principal Upaniṣads and the Gītā; established four Āmnāya maṭhas' },
      { name: 'Rāmānujācārya', text: 'Śrī Bhāṣya · Vedārthasaṃgraha', period: 'c. 1017–1137 CE', note: 'Founded Viśiṣṭādvaita; refuted Advaita\'s anirvacanīya; synthesised Āḻvār devotional tradition' },
      { name: 'Madhvācārya', text: 'Brahmasūtrabhāṣya · Anuvyākhyāna', period: 'c. 1238–1317 CE', note: 'Founded Dvaita; pañcabheda; tāratamya; bhāṣyas on 10 Upaniṣads' },
      { name: 'Jayatīrtha', text: 'Nyāyasudhā', period: 'c. 14th century', note: 'Most technically rigorous Dvaita logician; apex of Dvaita philosophical argumentation' },
      { name: 'Vidyāraṇya', text: 'Pañcadaśī', period: 'c. 14th century', note: 'Major Advaita consolidator; Pañcadaśī is the most widely read introductory Advaita text' },
    ],
    dialogue: 'Mīmāṃsā and Vedānta both claim the Veda as sole authority but interpret different portions. The central dispute concerns which portion is primary (pradhāna): Mīmāṃsakas held that Vedic injunctions are the Veda\'s primary function; Vedāntic statements about Brahman are arthavāda (explanatory passages) serving only to support injunctions. Śaṃkara reversed this hierarchy: the Upaniṣadic mahāvākyas are the Veda\'s supreme purpose; ritual injunctions are anuvādika (restatement) serving only to purify the mind for jñāna.',
  },
};

export const MATRIX: MatrixRow[] = [
  { school: 'Nyāya', schoolId: 'nyaya', pramanas: '4 — pratyakṣa, anumāna, upamāna, śabda', ontology: 'Pluralist realism · 16-category inquiry framework · individual ātmans real', atman: 'Multiple, real; unconscious substances becoming conscious via manas-conjunction', liberation: 'Niḥśreyasa — permanent cessation of all pain; not positive bliss' },
  { school: 'Vaiśeṣika', schoolId: 'vaisheshika', pramanas: '2 — pratyakṣa, anumāna (+ śabda later)', ontology: 'Atomic pluralism · 7 padārthas · 9 substances · eternal paramāṇus', atman: 'Multiple, real; unconscious by nature — consciousness a contingent relational quality', liberation: 'Cessation of pleasure and pain; ātman reverts to natural unconscious state' },
  { school: 'Sāṃkhya', schoolId: 'samkhya', pramanas: '3 — pratyakṣa, anumāna, āptavacana', ontology: 'Radical dualism · Puruṣa (×∞) + Prakṛti (1) · 25 tattvas · atheistic', atman: 'Infinite individual Puruṣas — pure consciousness, passive, never actually bound', liberation: 'Vivekakhyāti — discriminative cognition separating Puruṣa from Prakṛti' },
  { school: 'Yoga', schoolId: 'yoga', pramanas: '3 + samādhijñāna (yogic direct perception)', ontology: 'Same as Sāṃkhya + Īśvara as puruṣaviśeṣa · aṣṭāṅga practice path', atman: 'Same as Sāṃkhya; Īśvara is a special eternally-free Puruṣa (YS 1.24)', liberation: 'Kaivalya — Puruṣa\'s complete isolation via meditative practice' },
  { school: 'Mīmāṃsā', schoolId: 'mimamsa', pramanas: '6 (Bhāṭṭa) / 5 (Prābhākara) — includes arthāpatti', ontology: 'Pluralist realism · Vedas eternal and authorless · dharma as codanā-defined', atman: 'Multiple, eternal, active agents of karma; consciousness essential to ātman', liberation: 'Svarga (early Mīmāṃsā) → mokṣa via karma + jñāna (later)' },
  { school: 'Advaita', schoolId: 'vedanta', pramanas: 'Śabda (śruti) primary; anumāna subordinate', ontology: 'Non-dualism — Brahman alone ultimately real; jagat anirvacanīya; māyā/avidyā', atman: 'Jīva = Brahman under upādhi; liberation = recognition of pre-existing identity', liberation: 'Jñāna — aparokṣānubhūti of tat tvam asi; jīvanmukti possible' },
  { school: 'Viśiṣṭādvaita', schoolId: 'vedanta', pramanas: 'Śabda (śruti) primary', ontology: 'Qualified non-dualism — 3 real tattvas: Brahman, cit, acit; jīvas = Brahman\'s body', atman: 'Jīva = real, eternal, atomic; Brahman\'s mode/body; never reduced to Brahman', liberation: 'Bhakti + jñāna → sāyujya with Viṣṇu; individual identity retained' },
  { school: 'Dvaita', schoolId: 'vedanta', pramanas: 'Śabda (śruti) primary', ontology: 'Absolute dualism — 5 eternal differences (pañcabheda); God alone svatantra', atman: 'Jīva ≠ Brahman absolutely; 3 classes: mukti-yogya, nitya-saṃsārin, tamo-yogya', liberation: 'Ānanda in proximity to Viṣṇu with gradations (tāratamya); never equal to Viṣṇu' },
];
