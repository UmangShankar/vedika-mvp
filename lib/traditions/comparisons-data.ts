// ── Types ────────────────────────────────────────────────────────────────────

export type ComparisonPage = {
  slug: string;
  traditionA: { name: string; accent: string; thinker: string; dates: string };
  traditionB: { name: string; accent: string; thinker: string; dates: string };
  level: 'beginner' | 'intermediate' | 'advanced';
  h1: string;
  subtitle: string;
  sharedStarting: string;
  firstFork: string;
  cruxHeading: string;
  crux: string;
  statusOfIndividual: string;
  liberationCompared: string;
  verdict: string;
  matrix: Array<{ question: string; a: string; b: string }>;
  furtherReadingSlugs: string[];
};

// ── Data ─────────────────────────────────────────────────────────────────────

export const COMPARISONS: ComparisonPage[] = [

  // ── 1. Madhyamaka vs Advaita ─────────────────────────────────────────────

  {
    slug: 'madhyamaka-vs-advaita',
    traditionA: { name: 'Madhyamaka', accent: 'blue', thinker: 'Nāgārjuna', dates: 'c. 150–250 CE' },
    traditionB: { name: 'Advaita Vedānta', accent: 'purple', thinker: 'Śaṅkarācārya', dates: 'c. 788–820 CE' },
    level: 'advanced',
    h1: 'Madhyamaka and Advaita Vedānta — Emptiness and Fullness as Two Names for One Reality?',
    subtitle:
      'Two traditions arrive at structurally similar conclusions — that ultimate reality cannot be adequately described by ordinary thought and language — through diametrically opposite routes. Nāgārjuna refuses any ultimate positive claim; Śaṅkara makes the maximally positive claim: Brahman alone is real. The question is whether this difference is fundamental or merely expressive.',
    sharedStarting:
      'Both traditions agree that ordinary perception and thought cannot access ultimate reality. Both insist that the apparent multiplicity of the world — distinct, independent objects with their own natures — is somehow not the final story. Both use the two-truths framework (conventional and ultimate) and both have practitioners who describe liberation in similar terms: a falling-away of the sense of a separate self.\n\nBoth reject naive realism. Both argue that the \'self\' of ordinary experience is not ultimately real. Both claim their position is misunderstood as nihilism (Madhyamaka) or as a form of rigid monism (Advaita) — and both vigorously defend themselves from these charges.\n\nThe shared context: both traditions emerged from intense debate with Buddhist and Brahmanical opponents respectively, and both were shaped by the need to articulate a position that was neither \'the world is real and independent\' nor \'the world is simply nothing.\'',
    firstFork:
      'Śaṅkara: ultimate reality is Brahman — pure consciousness, infinite, blissful. It is the fullest possible being. The world is not a separate reality but Brahman appearing through māyā. The individual self (jīvātman) is ultimately identical with Brahman.\n\nNāgārjuna: there is no ultimate positive reality. Śūnyatā (emptiness) is not a thing, a substance, or a ground. It is the absence of svabhāva (inherent existence) from all phenomena — including Brahman, including consciousness, including emptiness itself. Any positive ultimate — even pure consciousness — would require a nature of its own, which is exactly what Madhyamaka denies.',
    cruxHeading: 'Śūnyatā vs Brahman',
    crux:
      'The deepest disagreement: Advaita requires an ultimate substratum — Brahman — that is the ground of all appearance. Without such a ground, the appearance of the world would be \'appearance of nothing.\' Madhyamaka denies that any ground is needed or coherent. Appearance does not require a substance that appears. The two-truths doctrine: at the conventional level, the world functions perfectly; at the ultimate level, nothing has inherent existence — including Brahman.\n\nŚaṅkara would respond: Nāgārjuna\'s śūnyatā is itself a concept. If emptiness is predicated of all things, then emptiness is something. Either it has inherent existence or it doesn\'t — if it doesn\'t, the claim \'all things are empty\' is itself empty, and Madhyamaka destroys itself. Nāgārjuna anticipated this objection (Vigrahavyāvartanī) and argued that his statements about emptiness are themselves conventional statements — not ultimate truths — which is why emptiness is empty of inherent existence too.',
    statusOfIndividual:
      'Advaita: the individual self (jīva) is ultimately identical with Brahman. The sense of individuality is a superimposition (adhyāsa) on pure consciousness. Liberation is the recognition of this identity.\n\nMadhyamaka: there is no self, no individual consciousness, no Brahman — at the ultimate level. The apparent individual is a conventional designation for a causally connected process. Liberation (nirvāṇa) is the cessation of the conditions that sustain suffering, not the revelation of an underlying true self.',
    liberationCompared:
      'Advaita: liberation (mokṣa) is the recognition that the individual self was always already Brahman. Nothing is added; a false identification is removed. The liberated person (jīvanmukta) continues in the world but without the superimposition of individuality.\n\nMadhyamaka: nirvāṇa is the cessation of dependent origination\'s suffering-producing chain — not a special state but the absence of the conditions for suffering. Crucially, nirvāṇa is not different from saṃsāra at the ultimate level — both are equally empty of inherent existence.',
    verdict:
      'Philosophers disagree sharply. Some (notably David Kalupahana) argue Madhyamaka and Advaita are fundamentally different — one refuses any ultimate reality, the other posits it. Others (T.R.V. Murti, some Tibetan commentators) argue the two-truths framework in both traditions points at the same inexpressible ultimate.\n\nThe most honest verdict: the practical descriptions of liberation are strikingly similar; the metaphysical frameworks for grounding those descriptions are genuinely different. Whether the difference matters ultimately may itself be a question both traditions would decline to answer definitively.',
    matrix: [
      { question: 'Ultimate reality', a: 'Śūnyatā — absence of inherent existence in all phenomena', b: 'Brahman — pure consciousness, infinite, the only real' },
      { question: 'Status of the world', a: 'Conventionally real, ultimately empty of svabhāva', b: 'Appearance of Brahman through māyā — not separately real' },
      { question: 'Why the world appears', a: 'Dependent origination — conditions give rise to experience', b: 'Māyā / avidyā — superimposition of multiplicity on Brahman' },
      { question: 'The individual self', a: 'Conventional designation for a causal process — no inherent self', b: 'Ultimately identical with Brahman — individuality is superimposition' },
      { question: 'Liberation', a: 'Nirvāṇa — cessation of conditions sustaining suffering', b: 'Mokṣa — recognition of identity with Brahman' },
      { question: 'Primary method', a: 'Prasaṅga — showing every thesis leads to absurdity', b: 'Mahāvākya contemplation — \'tat tvam asi\' / \'aham brahmāsmi\'' },
      { question: 'Verdict', a: 'Reality has no inherent nature — including this claim', b: 'Reality is pure self-luminous consciousness' },
    ],
    furtherReadingSlugs: ['madhyamaka', 'early-buddhism', 'yogacara'],
  },

  // ── 2. Yogācāra vs Advaita ───────────────────────────────────────────────

  {
    slug: 'yogacara-vs-advaita',
    traditionA: { name: 'Yogācāra', accent: 'pink', thinker: 'Vasubandhu', dates: 'c. 4th–5th c. CE' },
    traditionB: { name: 'Advaita Vedānta', accent: 'purple', thinker: 'Śaṅkarācārya', dates: 'c. 788–820 CE' },
    level: 'advanced',
    h1: 'Yogācāra and Advaita Vedānta — Two Idealisms, Two Metaphysical Anchors',
    subtitle:
      'Both traditions deny that there is an external world independent of consciousness. Both are forms of philosophical idealism. Yet they ground this idealism in fundamentally different metaphysical anchors: Advaita in Brahman — universal, self-luminous consciousness — and Yogācāra in a stream of consciousness without any self. The comparison reveals what is at stake in having, or not having, a universal self.',
    sharedStarting:
      'Both traditions hold that consciousness is more fundamental than any supposedly external world. Both argue that what naive realism takes to be independent external objects are actually within consciousness, not outside it. Both develop sophisticated analyses of the structure of experience — Advaita through vivartavāda (apparent transformation), Yogācāra through the doctrine of the three natures (trisvabhāva).\n\nBoth face the same primary objection from realist opponents: if everything is consciousness, why do different people perceive the same world? Both have sophisticated answers — Advaita via the doctrine of Brahman as the common ground; Yogācāra via the ālayavijñāna (store-consciousness) seeding consistent representations across individual mind-streams.',
    firstFork:
      'Advaita grounds its idealism in Brahman — a universal, unchanging, self-luminous consciousness that is the substratum of all appearances. Individual consciousness (jīva) is ultimately Brahman. The world is Brahman appearing.\n\nYogācāra refuses a universal ground. The ālayavijñāna (store-consciousness) is a stream of moments — impermanent, not a substance. There is no universal Brahman underlying individual mind-streams. Each sentient being has their own ālayavijñāna. What makes the world consistent across beings is not a shared ground but shared karmic seeds.',
    cruxHeading: 'Ālayavijñāna vs Brahman',
    crux:
      'The deepest difference: for Advaita, consciousness is fundamentally one — Brahman — and the appearance of many individual consciousnesses is a further appearance within that one. For Yogācāra, consciousness is fundamentally multiple — there are as many mind-streams as there are sentient beings — and the consistency of the apparent world is explained by karmic causation across streams, not by a single underlying ground.\n\nThis generates different accounts of liberation. For Advaita, liberation is recognising that individual consciousness was always Brahman. For Yogācāra, liberation is the transformation of the ālayavijñāna at its base — the seeds of misperception no longer germinate.',
    statusOfIndividual:
      'Advaita: the individual self is an apparent individual within Brahman — ultimately identical to Brahman, apparently separate through avidyā.\n\nYogācāra: the individual is a stream of experiential moments arising from the ālayavijñāna. There is no self (anātman). Liberation transforms the ālayavijñāna rather than dissolving the individual into a universal ground.',
    liberationCompared:
      'Advaita: mokṣa — recognition of the identity of jīvātman and Brahman. The superimposition of individuality is removed.\n\nYogācāra: āśrayaparāvṛtti — the \'revolution at the base\' of the store-consciousness. The habitual tendency to misperceive representations as external objects is uprooted. The result is described as the dharmakāya — the body of truth.',
    verdict:
      'The two traditions are closer than they appear on the surface — both are forms of idealism, both deny external reality, both describe liberation as a recognition. But the difference is real: Advaita has a universal self; Yogācāra has no self at all. These generate genuinely different metaphysics of liberation, despite the surface resemblance.',
    matrix: [
      { question: 'Ultimate reality', a: 'Mind-only (vijñaptimātratā) — but no universal consciousness', b: 'Brahman — universal, self-luminous consciousness' },
      { question: 'Status of the world', a: 'Representations (vijñapti) within individual mind-streams', b: 'Appearance of Brahman through māyā' },
      { question: 'Ground of consistency', a: 'Shared karmic seeds across ālayavijñānas', b: 'Single Brahman as common ground of all experience' },
      { question: 'The individual', a: 'Stream of experiential moments — no inherent self', b: 'Ultimately identical with Brahman' },
      { question: 'Liberation', a: 'Āśrayaparāvṛtti — transformation of store-consciousness', b: 'Mokṣa — recognition of identity with Brahman' },
      { question: 'Verdict', a: 'Consciousness without a self — no universal ground', b: 'Consciousness as the universal self — the one ground' },
    ],
    furtherReadingSlugs: ['yogacara', 'madhyamaka', 'early-buddhism'],
  },

  // ── 3. Jain Philosophy vs Advaita ────────────────────────────────────────

  {
    slug: 'jain-philosophy-vs-advaita',
    traditionA: { name: 'Jain Philosophy', accent: 'green', thinker: 'Mahāvīra / Umāsvāti', dates: 'c. 599–527 BCE / c. 2nd–5th c. CE' },
    traditionB: { name: 'Advaita Vedānta', accent: 'purple', thinker: 'Śaṅkarācārya', dates: 'c. 788–820 CE' },
    level: 'intermediate',
    h1: 'Jain Philosophy and Advaita Vedānta — Anekāntavāda Against One Absolute Truth',
    subtitle:
      'Jainism\'s anekāntavāda — the many-sidedness of truth — is among the most direct philosophical challenges to Advaita\'s foundational claim that Brahman alone is the one absolute reality. If all philosophical positions are partially true, then Advaita\'s claim that \'Brahman alone is real\' is also only partially true. The comparison reveals what is at stake in claiming philosophical certainty.',
    sharedStarting:
      'Both traditions take seriously the problem of liberation — mokṣa is genuine for both, and requires serious philosophical and practical work. Both reject the crude materialism of Cārvāka. Both have sophisticated epistemologies — Jainism\'s pramāṇa theory and Advaita\'s analysis of knowledge are among the most developed in Indian philosophy.\n\nBoth affirm that the soul (ātman / jīva) is real and that its liberation is possible. Both see ordinary human life as characterised by a kind of ignorance (avidyā / mithyātva) that binds the soul.',
    firstFork:
      'Advaita: there is one absolute reality (Brahman) and knowledge of it is the highest knowledge. The philosophical goal is the correct understanding of Brahman — which reveals it to be the only real thing. Advaita is explicitly monist.\n\nJainism: anekāntavāda holds that reality is many-sided and no single philosophical perspective can capture all of it. This is not relativism — it is a sophisticated doctrine about the partiality of all conceptual frameworks. The claim that \'Brahman alone is real\' is, on the Jain view, a naya — a partial perspective — that grasps something real but mistakes the partial for the total.',
    cruxHeading: 'Anekāntavāda vs one absolute truth',
    crux:
      'Jainism\'s challenge to Advaita: if Brahman alone is real, then the apparent reality of finite individual souls (jīvas) must be explained away. Advaita does this via māyā. But māyā — if it exists — is either Brahman or not-Brahman. If it is Brahman, Brahman contains multiplicity and is not the simple unity Advaita claims. If māyā is not-Brahman, then something other than Brahman exists, which contradicts Advaita\'s monism.\n\nAdvaita\'s response: māyā is anirvacanīya — indescribable, neither real nor unreal. This move is precisely what Jainism\'s syādvāda is designed to handle: every predication has a qualified, conditional truth-value. \'Māyā is real\' — in some respects. \'Māyā is unreal\' — in some respects. The difference: Jainism takes this as a general feature of all predication; Advaita takes it as a special property of māyā.',
    statusOfIndividual:
      'Advaita: the individual soul is ultimately identical with Brahman — the appearance of individuality is superimposition.\n\nJainism: the individual soul (jīva) is real, eternal, and distinct from every other jīva. Liberation is the jīva\'s return to its own intrinsic omniscient nature — not dissolution into a universal ground.',
    liberationCompared:
      'Advaita: recognition of the identity of ātman and Brahman — individual identity was always an illusion.\n\nJainism: the shedding of all karmic matter through right knowledge, right faith, and right conduct — the liberated soul rises to the apex of the universe (Siddhaloka) and rests in its own intrinsic omniscience, bliss, and energy. Permanent, distinct, plural.',
    verdict:
      'The two traditions make incompatible metaphysical claims: Advaita\'s monism (one real) vs Jainism\'s pluralism (many real jīvas plus ajīva substances). Anekāntavāda is specifically designed to resist the claim of any single philosophical framework, including Advaita\'s. Advaita would respond that anekāntavāda, taken seriously, must apply to itself — making Jainism\'s own pluralism only partially true.',
    matrix: [
      { question: 'Ultimate reality', a: 'Infinite individual souls (jīvas) + ajīva substances — genuine plural ontology', b: 'Brahman alone — pure consciousness, the only real' },
      { question: 'Individual soul', a: 'Real, eternal, distinct — liberation perfects it', b: 'Ultimately identical to Brahman — individuality is superimposition' },
      { question: 'Karma', a: 'Actual fine matter adhering to the soul', b: 'Not a substance — a tendency/residue governed by avidyā' },
      { question: 'Liberation', a: 'Siddha: omniscient soul at apex of universe, distinct, permanent', b: 'Mokṣa: recognition of identity with Brahman' },
      { question: 'Epistemology', a: 'Anekāntavāda: all positions partially true — syādvāda', b: 'Advaita pramāṇa: Vedic testimony as primary; Brahman as its highest object' },
      { question: 'Verdict', a: 'Advaita\'s monism is a valid but partial perspective (naya)', b: 'Advaita is the final truth — Jainism\'s pluralism is avidyā' },
    ],
    furtherReadingSlugs: ['jain-philosophy', 'early-buddhism', 'madhyamaka'],
  },

  // ── 4. Jain Philosophy vs Sāṃkhya ────────────────────────────────────────

  {
    slug: 'jain-philosophy-vs-samkhya',
    traditionA: { name: 'Jain Philosophy', accent: 'green', thinker: 'Mahāvīra', dates: 'c. 599–527 BCE' },
    traditionB: { name: 'Sāṃkhya', accent: 'amber', thinker: 'Kapila / Īśvarakṛṣṇa', dates: 'c. legendary / 3rd–4th c. CE' },
    level: 'intermediate',
    h1: 'Jain Philosophy and Sāṃkhya — Karma as Matter vs Karma as Guṇa-Motion',
    subtitle:
      'Both traditions are atheistic. Both accept real souls, real karma, and real liberation. Yet they arrive at fundamentally different accounts of what karma actually is — physical matter (Jainism) or a quality-modulation of Prakṛti (Sāṃkhya) — with cascading differences in what liberation means and how it is achieved.',
    sharedStarting:
      'Two of Indian philosophy\'s great atheistic traditions — Jainism and Sāṃkhya — share more than is often recognised. Both affirm the reality of individual souls (jīva / Puruṣa). Both accept karma and rebirth. Both locate the problem of bondage in something that accretes to or involves the soul. Both see liberation as the soul\'s return to its own intrinsic nature — pure awareness, pure being.\n\nBoth are detailed metaphysical systems with complete ontologies: Jainism\'s six dravyas (jīva, pudgala, dharma, adharma, ākāśa, kāla) and Sāṃkhya\'s 25 tattvas from Puruṣa through the mahat to the five elements.',
    firstFork:
      'Jainism: karma is literally physical matter (kārmaṇa-vargaṇā) — the subtlest grade of pudgala (matter). It adheres to the soul through the force of passions and obscures the soul\'s natural omniscience. Liberation requires physically shedding all accumulated karma.\n\nSāṃkhya: karma operates through the guṇas — the three qualities (sattva, rajas, tamas) that constitute Prakṛti. \'Karma\' in the sense of action and its consequences is a matter of guṇa-modulation in the buddhi (intellect). Puruṣa itself is always free — its apparent bondage is the confusion of Puruṣa with the guṇa-play of Prakṛti.',
    cruxHeading: 'Karma as matter vs karma as guṇa-motion',
    crux:
      'The deepest difference: for Jainism, the soul (jīva) is genuinely bound — karma literally attaches to it. Liberation is a real process of physical purification. The soul at liberation is genuinely different from the soul in bondage — all karma has been shed.\n\nFor Sāṃkhya, the Puruṣa was never bound. Bondage is an appearance — the confusion of Puruṣa (pure consciousness) with Prakṛti (the unconscious material principle). Liberation (kaivalya) is the realisation that Puruṣa was always separate from Prakṛti. No karma attaches to Puruṣa; what appeared as karma was Prakṛti\'s activity mistaken for Puruṣa\'s.',
    statusOfIndividual:
      'Jainism: the individual jīva is real, eternally distinct, and at liberation rests at the apex of the universe in its intrinsic omniscient nature. Many liberated jīvas, all distinct.\n\nSāṃkhya: there are many Puruṣas — but at liberation, each simply abides in its own nature as pure witness-consciousness, distinct from Prakṛti. No omniscience — Puruṣa is pure but contentless.',
    liberationCompared:
      'Jainism: the siddha — the liberated soul that has shed all 148 types of karma, risen to Siddhaloka, and rests in omniscience, infinite bliss, and infinite energy. Permanent.\n\nSāṃkhya: kaivalya — the standing-alone of Puruṣa, its complete dis-identification from Prakṛti. Prakṛti, recognising it has served its purpose for that Puruṣa, ceases to generate experiences for it.',
    verdict:
      'Two atheistic Indian philosophies that agree on almost all structural points but differ on the nature of karma\'s relationship to the soul. The difference matters for practice: if karma physically accretes, the path is physical purification through tapas and ahiṃsā. If Puruṣa was never bound, the path is discriminative knowledge (vivekakhyāti) — realising what was always true. Same liberation, genuinely different metaphysics of the path.',
    matrix: [
      { question: 'Karma', a: 'Physical matter (kārmaṇa-vargaṇā) adhering to the soul', b: 'Guṇa-modulation in Prakṛti — never touches Puruṣa' },
      { question: 'The soul', a: 'Jīva — genuinely bound by karmic matter', b: 'Puruṣa — always free; apparent bondage is confusion' },
      { question: 'Cause of bondage', a: 'Passions (kaṣāyas) attract karmic matter to the soul', b: 'False identification of Puruṣa with Prakṛti (ahamkāra)' },
      { question: 'Liberation', a: 'Siddha: omniscient, blissful, permanent at apex of universe', b: 'Kaivalya: Puruṣa stands alone, Prakṛti ceases its activity' },
      { question: 'God', a: 'No god — but liberated tīrthaṅkaras as models', b: 'No god — liberation is purely metaphysical discrimination' },
      { question: 'Verdict', a: 'Soul genuinely bonds, genuinely liberates — real physical process', b: 'Soul was never bound — liberation is recognition, not achievement' },
    ],
    furtherReadingSlugs: ['jain-philosophy', 'early-buddhism', 'carvaka'],
  },

  // ── 5. Cārvāka vs Nyāya ──────────────────────────────────────────────────

  {
    slug: 'carvaka-vs-nyaya',
    traditionA: { name: 'Cārvāka', accent: 'coral', thinker: 'Bṛhaspati', dates: 'c. 600 BCE (legendary)' },
    traditionB: { name: 'Nyāya', accent: 'amber', thinker: 'Akṣapāda Gautama / Udayana', dates: 'c. 2nd c. BCE / c. 975–1050 CE' },
    level: 'intermediate',
    h1: 'Cārvāka and Nyāya — Pratyakṣa Alone vs the Four Pramāṇas',
    subtitle:
      'The most direct epistemological confrontation in Indian philosophy: Cārvāka accepts only perception (pratyakṣa) as valid knowledge; Nyāya accepts four — perception, inference, comparison, and testimony. The debate over inference is not merely technical. It is a dispute about whether human reason can ever extend beyond what is directly seen.',
    sharedStarting:
      'Both traditions take epistemology seriously as a foundation for philosophy. Both agree that direct perception is genuine knowledge. Both argue from first principles rather than scripture.\n\nBoth traditions operate within the framework of Indian pramāṇa theory — the discipline of specifying the valid means of knowledge and their scope.',
    firstFork:
      'Cārvāka: only pratyakṣa (direct perception) is a valid pramāṇa. Inference (anumāna) depends on the principle that a mark reliably indicates its referent — but this principle can only be established by observing all past and future cases, which is impossible. Inference is therefore always uncertain.\n\nNyāya: inference is a valid pramāṇa when properly formed. The vyāpti (universal relation) between smoke and fire is not established by observing all cases but by observing a representative sample and applying the principle of uniformity of nature. Nyāya\'s entire project — including its famous proofs for God\'s existence (Udayana\'s Nyāyakusumāñjali) — depends on defending inference.',
    cruxHeading: 'The inference debate',
    crux:
      'The deepest question: can a mark (liṅga) ever reliably indicate something beyond it? Cārvāka says no — we have only seen smoke accompanying fire in our limited experience; we cannot know this holds universally. Nyāya replies: the objection applies to every generalisation, including Cārvāka\'s own claim that \'perception alone is valid\' — which is itself not known by perception alone.\n\nThis is the self-refutation argument. Cārvāka\'s restriction of knowledge to perception cannot itself be justified by perception — it is a philosophical principle, requiring inference and argument. Nyāya presses this consistently: radical empiricism cannot justify its own foundations.',
    statusOfIndividual:
      'Cārvāka: the self is the body. Consciousness is an emergent property of the material body. No soul, no rebirth.\n\nNyāya: the self (ātman) is a real, individual, eternal substance. It has properties — knowledge, desire, pleasure, pain — that are not material. The self\'s existence is inferred from features of experience that cannot be explained materialistically.',
    liberationCompared:
      'Cārvāka: no liberation — there is no soul to liberate. Death is the end. The highest good is pleasure in this life.\n\nNyāya: liberation (apavarga) is the complete cessation of all qualities of the self — including pleasure and pain — in a state of pure, contentless existence. Achieved through correct knowledge of the self and the categories.',
    verdict:
      'Nyāya\'s self-refutation argument against Cārvāka is widely considered decisive: the claim \'only perception is valid\' is not itself perceptually verifiable. Cārvāka\'s strength is its clarity: it demands that every metaphysical claim be grounded in direct evidence. Its weakness: it cannot defend its own epistemological foundation by its own standard.',
    matrix: [
      { question: 'Valid pramāṇas', a: 'Perception (pratyakṣa) alone', b: 'Perception, inference, comparison, testimony' },
      { question: 'Inference', a: 'Invalid — cannot establish vyāpti without complete enumeration', b: 'Valid when properly formed — self-refutation objection against Cārvāka' },
      { question: 'The self', a: 'The body — consciousness is epiphenomenal', b: 'Eternal individual substance — inferred from experience' },
      { question: 'God', a: 'No god — no evidence from perception', b: 'God proven by inference (Udayana\'s five arguments)' },
      { question: 'Liberation', a: 'No liberation — death is final', b: 'Apavarga — cessation of all self-qualities' },
      { question: 'Verdict', a: '\'Pratyakṣa alone\' cannot be established by pratyakṣa — self-refuting', b: 'Inference defended; Cārvāka\'s radicalism is instructive but ultimately self-undermining' },
    ],
    furtherReadingSlugs: ['carvaka', 'ajnana', 'ajivika'],
  },

  // ── 6. Cārvāka vs Sāṃkhya ────────────────────────────────────────────────

  {
    slug: 'carvaka-vs-samkhya',
    traditionA: { name: 'Cārvāka', accent: 'coral', thinker: 'Bṛhaspati', dates: 'c. 600 BCE (legendary)' },
    traditionB: { name: 'Sāṃkhya', accent: 'amber', thinker: 'Kapila / Īśvarakṛṣṇa', dates: 'legendary / c. 3rd–4th c. CE' },
    level: 'intermediate',
    h1: 'Cārvāka and Sāṃkhya — Two Atheisms, Two Accounts of Consciousness',
    subtitle:
      'The most revealing comparison between Indian materialism and Indian dualism: both Cārvāka and Sāṃkhya are atheistic. But Cārvāka sees only matter; Sāṃkhya sees matter (Prakṛti) and pure consciousness (Puruṣa). The debate between them is about whether consciousness requires a metaphysical account beyond the physical.',
    sharedStarting:
      'Both traditions are atheistic — there is no God who creates the world or intervenes in it. Both take the physical world seriously as real. Both have precise theories of causation.\n\nBoth traditions confront the same core question: what is consciousness, and does it require a non-material explanation?',
    firstFork:
      'Cārvāka: consciousness is an emergent property of the right material combination (the four elements in the right proportion). The fermented-grain analogy — intoxicating power is not present in grain alone but emerges from the right combination. No separate Puruṣa required.\n\nSāṃkhya: consciousness (cit) cannot emerge from unconscious matter. No combination of unconscious elements can produce awareness. Puruṣa is the irreducible witness — pure consciousness — distinct from Prakṛti and its products. The hard problem of consciousness, in the Indian idiom.',
    cruxHeading: 'Emergence vs irreducibility of consciousness',
    crux:
      'The deepest question: can consciousness emerge from matter? Cārvāka says yes — the fermented-grain analogy shows that properties can emerge from combinations that none of the components possess. Sāṃkhya says no — fermented grain\'s intoxicating property is still a physical property. Consciousness is categorically different: it is the condition for any knowledge of physical properties, and cannot itself be a physical property.\n\nThis is essentially the hard problem of consciousness in Indian dress. Sāṃkhya\'s intuition: the subjective character of experience (what it is like to see red, feel pain) is not explicable by any physical theory, however detailed.',
    statusOfIndividual:
      'Cārvāka: the individual is the body. There is no separate self, no soul, no Puruṣa.\n\nSāṃkhya: each individual has a Puruṣa — a distinct, eternal consciousness — associated with a particular Prakṛti-stream. At liberation, Puruṣa recognises its own nature and stands apart from Prakṛti (kaivalya).',
    liberationCompared:
      'Cārvāka: no liberation — death ends the individual completely. The highest good is pleasure (kāma) and worldly gain (artha) in this life.\n\nSāṃkhya: kaivalya — Puruṣa abides in its own nature as pure witness-consciousness, permanently dis-identified from Prakṛti\'s activity.',
    verdict:
      'The debate is unresolved and maps onto the contemporary hard problem of consciousness. Both positions have modern defenders. Cārvāka\'s materialism is the default assumption of modern science; Sāṃkhya\'s dualism articulates the intuition that consciousness cannot be fully explained in physical terms. Indian philosophy explored this problem more rigorously two millennia before Descartes.',
    matrix: [
      { question: 'Ontology', a: 'Monist — only the four material elements are real', b: 'Dualist — Puruṣa (consciousness) + Prakṛti (matter)' },
      { question: 'Consciousness', a: 'Emergent property of material combinations', b: 'Irreducible — Puruṣa cannot be derived from Prakṛti' },
      { question: 'God', a: 'No god — no perceptual evidence', b: 'No god — but many Puruṣas as eternal witnesses' },
      { question: 'Liberation', a: 'No liberation — death is final', b: 'Kaivalya — Puruṣa stands alone, free from Prakṛti' },
      { question: 'Verdict', a: 'Consciousness emerges — no extra ontology needed', b: 'Consciousness is irreducible — emergence is explanatorily inadequate' },
    ],
    furtherReadingSlugs: ['carvaka', 'ajivika', 'ajnana'],
  },

  // ── 7. Early Buddhism vs Advaita ─────────────────────────────────────────

  {
    slug: 'early-buddhism-vs-advaita',
    traditionA: { name: 'Early Buddhism', accent: 'teal', thinker: 'Gautama Buddha', dates: 'c. 563–483 BCE' },
    traditionB: { name: 'Advaita Vedānta', accent: 'purple', thinker: 'Śaṅkarācārya', dates: 'c. 788–820 CE' },
    level: 'intermediate',
    h1: 'Early Buddhism and Advaita Vedānta — Anātman and Ātman: The Central Debate of Indian Philosophy',
    subtitle:
      'The most consequential philosophical dispute in Indian thought: the Buddha denied the permanent self (ātman) that Vedic philosophy placed at the centre of its account of reality and liberation. Śaṅkara, writing 1,200 years later, spent much of his intellectual energy refuting Buddhist positions — while his opponents accused him of being a Buddhist in disguise. The comparison reveals what is ultimately at stake in the question of selfhood.',
    sharedStarting:
      'Both traditions accept karma, saṃsāra, and liberation as the framework of philosophical inquiry. Both accept that ordinary human life is characterised by suffering and confusion, and that a path exists beyond it. Both see the root of bondage in a form of ignorance about reality.\n\nBoth traditions produce strikingly similar descriptions of the liberated state: a falling-away of the sense of being a separate ego-self; an expansion of awareness; a quality of peace that defies ordinary description. Both warn that this cannot be fully conveyed in language.',
    firstFork:
      'Early Buddhism: there is no permanent self (anātman). What we call \'I\' is a conventional designation for the five aggregates (pañca-skandha) — form, feeling, perception, mental formations, consciousness. Each aggregate is impermanent. None is the self. Their combination is not the self either. Liberating insight is the direct recognition of no-self.\n\nAdvaita Vedānta: there is a permanent self (ātman), and it is identical with Brahman — the universal, infinite, self-luminous consciousness. What we call \'I\' in ordinary experience is a mixture of true selfhood (ātman) and apparent individuality (ahaṃkāra). Liberating insight is the recognition of ātman as Brahman, not the recognition of no-self.',
    cruxHeading: 'Anātman vs ātman',
    crux:
      'The sharpest question: is the liberating recognition \'there is no self\' or \'I am the universal self\'? The experiential descriptions are similar — both involve the collapse of the ordinary ego-sense. But the metaphysical interpretations are opposite.\n\nŚaṅkara\'s response to Buddhism: if there is no self, who is it that recognises no-self? The recognition itself implies a recogniser. The act of knowing cannot be reduced to the five aggregates — knowing is the witness of the aggregates, not one of them. This witness-consciousness is the ātman.\n\nBuddhism\'s response: the witness-consciousness Śaṅkara posits would itself be an object of awareness — not the pure subject he claims. Anything that can be introspected is not the ultimate knower. There is only the stream of knowing-events, not a fixed knower behind them.',
    statusOfIndividual:
      'Early Buddhism: the apparent individual is a conventional designation — no real individual, no real self. The mind-stream continues after death in dependence on karma until liberation (nirvāṇa).\n\nAdvaita: the apparent individual is Brahman appearing as a limited consciousness. At liberation, the illusory limitation is removed — not the individual (which was always Brahman) but the superimposition of individuality.',
    liberationCompared:
      'Early Buddhism: nirvāṇa — the extinguishing of the conditions that sustain suffering. Often described as \'the cessation of becoming\' — neither existence nor non-existence in ordinary senses.\n\nAdvaita: mokṣa — the recognition that individual consciousness was always identical with Brahman. Nothing new is achieved; a false superimposition is removed. Jīvanmukti — liberated while living.',
    verdict:
      'The most honest answer: the debate has not been resolved and cannot be — it depends on the interpretation of experience that neither side can demonstrate to the other\'s satisfaction. Both traditions produce practitioners who describe liberation similarly. The metaphysical frameworks that account for this liberation are genuinely incompatible. Murti\'s thesis (that both point at the same inexpressible ultimate) remains a productive hypothesis, not a settled conclusion.',
    matrix: [
      { question: 'The self', a: 'Anātman — no permanent self; conventional designation for aggregates', b: 'Ātman — permanent, identical with Brahman' },
      { question: 'Ultimate reality', a: 'Dependent origination (pratītyasamutpāda) — nothing has inherent existence', b: 'Brahman — pure consciousness, the only real' },
      { question: 'The world', a: 'Conventionally real — a causal process without inherent nature', b: 'Appearance of Brahman through māyā — not separately real' },
      { question: 'Liberation', a: 'Nirvāṇa — cessation of conditions sustaining suffering', b: 'Mokṣa — recognition of identity with Brahman' },
      { question: 'Method', a: 'Vipassanā — insight into impermanence, suffering, no-self', b: 'Mahāvākya contemplation — \'tat tvam asi\'' },
      { question: 'Verdict', a: 'Liberation is recognition of no-self — the ego-illusion dissolves', b: 'Liberation is recognition of true self as Brahman — ego-illusion dissolves into the real' },
    ],
    furtherReadingSlugs: ['early-buddhism', 'madhyamaka', 'yogacara'],
  },

  // ── 8. Taoism vs Advaita ─────────────────────────────────────────────────

  {
    slug: 'taoism-vs-advaita',
    traditionA: { name: 'Taoism', accent: 'teal', thinker: 'Lao-tzu', dates: 'c. 6th c. BCE (trad.)' },
    traditionB: { name: 'Advaita Vedānta', accent: 'purple', thinker: 'Śaṅkarācārya', dates: 'c. 788–820 CE' },
    level: 'intermediate',
    h1: 'Taoism and Advaita Vedānta — The Tao and Brahman as the Unnameable Ground',
    subtitle:
      'Two traditions separated by thousands of miles and centuries arrive at structurally parallel insights: that ultimate reality is formless, that it cannot be adequately named, and that the human response is a kind of effortless alignment rather than effortful achievement. The comparison between wu wei and naiṣkarmya-karma in the Bhagavad Gītā is one of comparative philosophy\'s most productive.',
    sharedStarting:
      'Both traditions open with the inadequacy of language to describe ultimate reality. The Tao Te Ching\'s first line: \'The Tao that can be named is not the eternal Tao.\' Śaṅkara\'s nirguṇa Brahman: neti neti — not this, not this. Both understand the ultimate as preceding all distinctions — including the distinction between being and non-being.\n\nBoth traditions value a kind of natural, uncontrived action that flows from alignment with the ultimate rather than from ego-driven effort. Wu wei (non-forcing action) and the Gītā\'s naiṣkarmya-karma (action without attachment to results) describe the same quality of acting from a place beyond personal desire.',
    firstFork:
      'Taoism: the Tao is not a self, not a consciousness, not a ground of being in any positive sense. It is the way — a dynamic process, not a substance. The return to the Tao is a return to naturalness (ziran), not to a personal absolute.\n\nAdvaita Vedānta: Brahman is pure consciousness (cit), infinite being (sat), and intrinsic bliss (ānanda). It is not merely a process or a way — it is the positive ground of all existence. The return to Brahman is a recognition of identity with the ultimate personal consciousness.',
    cruxHeading: 'The Tao vs Brahman',
    crux:
      'The deepest question: is the ultimate a positive ground (Brahman as pure consciousness) or an unqualifiable process/way (the Tao)? Both resist naming; but Advaita gives the ultimate a positive characterisation (saccidānanda), while Taoism resists any positive characterisation as much as any negative one.\n\nThis maps onto the debate between Advaita and Madhyamaka in the Buddhist tradition: Advaita\'s Brahman is the fullest positive ultimate; Taoism, like Madhyamaka, tends toward a refusal of any ultimate characterisation — including characterising the ultimate as consciousness.',
    statusOfIndividual:
      'Taoism: the individual is a natural process — a temporary eddy in the flow of the Tao. The sage does not achieve union with the Tao; the sage simply stops fighting against it (wu wei).\n\nAdvaita: the individual self is Brahman appearing as a finite consciousness. Liberation is the recognition of this identity — not alignment with something external but recognition of what one always was.',
    liberationCompared:
      'Taoism: alignment with the Tao — naturalness, spontaneous flow, absence of ego-driven forcing. Not a state to be achieved but a way of being to be uncovered.\n\nAdvaita: mokṣa — the recognition that individual consciousness was always identical with Brahman. The superimposition of limitation is removed.',
    verdict:
      'The structural parallels are real and philosophically productive. But the differences matter: Advaita has a theory of consciousness as the ultimate; Taoism resists any such theory. The practical descriptions of liberation are strikingly similar — both describe a quality of effortless, non-egocentric being. The metaphysical frameworks are genuinely different.',
    matrix: [
      { question: 'Ultimate reality', a: 'The Tao — unnameable, formless, the source of all', b: 'Brahman — pure consciousness, infinite being, bliss' },
      { question: 'Can it be named?', a: 'No — the nameable Tao is not the eternal Tao', b: 'Not fully — nirguṇa Brahman is beyond predication; saguṇa is the approach' },
      { question: 'Human response', a: 'Wu wei — non-forcing, natural action in alignment with the Tao', b: 'Jñāna — knowledge of identity with Brahman; then jīvanmukti' },
      { question: 'Liberation', a: 'Return to naturalness — no ego-driven action; alignment with the flow', b: 'Mokṣa — recognition of identity with Brahman' },
      { question: 'Verdict', a: 'The Tao has no positive nature — it is the way, not a consciousness', b: 'Brahman is positively characterised as consciousness — the fullest ground' },
    ],
    furtherReadingSlugs: ['taoism', 'early-buddhism', 'neoplatonism'],
  },

  // ── 9. Zoroastrianism vs Vedic ───────────────────────────────────────────

  {
    slug: 'zoroastrianism-vs-vedic',
    traditionA: { name: 'Zoroastrianism', accent: 'coral', thinker: 'Zarathuštra', dates: 'c. 1500–1000 BCE' },
    traditionB: { name: 'Vedic tradition', accent: 'amber', thinker: 'Multiple seers (Ṛṣis)', dates: 'c. 1500–500 BCE' },
    level: 'intermediate',
    h1: 'Zoroastrianism and the Vedic Tradition — Asha and Ṛta: The Same Concept, Two Paths',
    subtitle:
      'The only comparison on this page that is not between independent traditions but between two branches of a shared Proto-Indo-Iranian ancestor. Avestan and Vedic Sanskrit are sister languages. Asha and ṛta are cognate words. Understanding where they diverge — why Zarathuštra\'s reform created a moral dualism that Vedic thought resisted — illuminates both traditions.',
    sharedStarting:
      'The shared ancestor is verifiable through linguistics: Avestan and Vedic Sanskrit descended from the same Proto-Indo-Iranian language. The Zoroastrian gods (yazatas) and the Vedic gods (devas) share names and attributes — Mithra/Mitra, Apam Napat, and others appear in both traditions. The cosmic order principle — Asha in Avestan, ṛta in Sanskrit — is cognate.\n\nBoth traditions understand the cosmos as ordered by a principle of truth and right action. Both understand ritual as aligned with this cosmic order. Both have a priestly class responsible for maintaining this alignment.',
    firstFork:
      'Vedic tradition: the devas — Indra, Varuṇa, Agni, Mitra — are the divine forces that uphold ṛta. There is no cosmic moral dualism — the gods, while sometimes in conflict, are not divided into good and evil categories. The demons (asuras) are the rivals of the devas, but the system is not a cosmic dualism in the Zoroastrian sense.\n\nZoroastrianism: Zarathuštra\'s reform introduced a cosmic moral dualism. Ahura Mazdā (the Wise Lord, associated with asha) and Angra Mainyu (the Destructive Spirit, associated with druj — deception/evil) are co-eternal antagonists. Human beings must choose between asha and druj in every action. Notably, the Vedic \'asuras\' become, in Avestan, the \'ahuras\' — the good spirits.',
    cruxHeading: 'Asha and ṛta',
    crux:
      'The most striking divergence: in the Vedic tradition, the category of \'asura\' shifted from a neutral or positive meaning (lord, powerful being) to a negative meaning (demon). In the Avestan tradition, the parallel category \'ahura\' retained its positive meaning (Ahura Mazdā — the Wise Lord).\n\nScholars interpret this as evidence of a doctrinal schism within the shared Proto-Indo-Iranian tradition — possibly a reform movement initiated by Zarathuštra that reinterpreted the existing divine categories in terms of a strict moral dualism. The result: traditions that shared a vocabulary used it to describe fundamentally different cosmologies.',
    statusOfIndividual:
      'Vedic tradition: the individual is a participant in the cosmic order — fulfilling dharma, performing rituals, accumulating merit. Individual souls continue through rebirth (in later Vedic and Upanishadic thought).\n\nZoroastrianism: the individual soul faces judgment after death — crossing the Chinvat Bridge, where its balance of asha and druj is weighed. At the end of time, all souls are purified in the final renovation (Frashokereti) — a universal eschatology Vedic thought does not share in the same form.',
    liberationCompared:
      'Vedic / later Hindu: mokṣa — liberation from saṃsāra through various paths (jñāna, bhakti, karma yoga), culminating in identification with Brahman or residence in Brahman\'s realm.\n\nZoroastrianism: Frashokereti — the renovation of the world at the end of time, when Ahura Mazdā\'s creation is fully restored to its perfect original state. Individual and cosmic liberation are intertwined — this is eschatological, not individual.',
    verdict:
      'The comparison illuminates both traditions. Vedic thought shows what Zoroastrianism\'s cosmic dualism might have looked like before Zarathuštra\'s reform. Zoroastrianism shows what the Vedic tradition might have become had it followed the implications of ṛta as a moral principle to their cosmic conclusion. The divergence is a parting of ways within a shared intellectual family.',
    matrix: [
      { question: 'Cosmic order principle', a: 'Asha — cosmic truth, moral rightness; active struggle against druj', b: 'Ṛta — cosmic order upheld by devas through ritual and dharma' },
      { question: 'Cosmic structure', a: 'Moral dualism — Ahura Mazdā vs Angra Mainyu', b: 'Ritual order — devas uphold ṛta; no strict cosmic moral dualism' },
      { question: 'Human role', a: 'Choose asha over druj in every action — moral combat', b: 'Maintain dharma, perform ritual — cosmic maintenance' },
      { question: 'Afterlife', a: 'Judgment at Chinvat Bridge; ultimate Frashokereti for all souls', b: 'Rebirth cycle (saṃsāra) leading to liberation (mokṣa)' },
      { question: 'Verdict', a: 'Asha as a moral battle-front — cosmic dualism', b: 'Ṛta as cosmic maintenance — moral order without cosmic dualism' },
    ],
    furtherReadingSlugs: ['zoroastrianism', 'taoism', 'confucianism'],
  },

  // ── 10. Sufism vs Advaita ────────────────────────────────────────────────

  {
    slug: 'sufism-vs-advaita',
    traditionA: { name: 'Sufism', accent: 'pink', thinker: 'Ibn Arabī', dates: '1165–1240 CE' },
    traditionB: { name: 'Advaita Vedānta', accent: 'purple', thinker: 'Śaṅkarācārya', dates: 'c. 788–820 CE' },
    level: 'intermediate',
    h1: 'Sufism and Advaita Vedānta — Waḥdat al-Wujūd and Brahman: One Reality, Two Philosophies',
    subtitle:
      'Ibn Arabī\'s waḥdat al-wujūd — the unity of being — and Śaṅkara\'s Advaita Vedānta are the two most philosophically developed non-dualist traditions in world thought. Dara Shikoh, the Mughal prince who translated the Upaniṣads into Persian, argued they were the same insight. The comparison explores whether he was right.',
    sharedStarting:
      'Both traditions arrive at non-dualism: there is ultimately only one reality, and what appears as multiplicity is the single reality in different modes or appearances. Both develop sophisticated accounts of why this one reality appears as many. Both describe the mystic path as a progressive removal of the veils that separate apparent individuals from their source.\n\nDara Shikoh\'s Majmaʿ al-Baḥrayn (The Confluence of Two Oceans, 1655) is the most explicit historical statement of the convergence: he argued that the Upaniṣads and the works of the Sufi masters were describing the same ultimate reality in different vocabularies.',
    firstFork:
      'Sufism (Ibn Arabī\'s Waḥdat al-wujūd): there is only one being (al-wujūd), and every existent thing is a self-disclosure (tajallī) of that one being. God and creation are not two separate things — creation is God\'s self-manifestation. The mystic\'s fanāʾ (annihilation) is the disappearance of the apparent separate self in recognition of this unity.\n\nAdvaita Vedānta: Brahman alone is real. The world is not God\'s self-manifestation but an appearance (vivartavāda — apparent transformation, not real transformation) through māyā / avidyā. The individual self (jīva) is not a manifestation of Brahman but is Brahman, mistakenly identified as limited.',
    cruxHeading: 'Tajallī (self-disclosure) vs Vivartavāda (apparent transformation)',
    crux:
      'The deepest difference: Ibn Arabī\'s tajallī implies that the world is genuinely God\'s self-expression — the divine delights in its own infinite self-disclosure through the variety of creation. This is closer to what Hinduism calls saguṇa Brahman (Brahman with qualities).\n\nŚaṅkara\'s vivartavāda denies that Brahman truly transforms into the world — the appearance of the world is superimposition (adhyāsa), not real transformation. This preserves the absolute simplicity of nirguṇa Brahman.\n\nSirhindī\'s later Waḥdat al-shuhūd (unity of witness) narrowed the claim: unity is a feature of the mystic\'s experience, not of reality itself. This qualified the Waḥdat al-wujūd in a direction closer to Viśiṣṭādvaita (Rāmānuja\'s qualified non-dualism) than to Advaita.',
    statusOfIndividual:
      'Sufism: the individual (the ʿayn — the specific locus of divine self-disclosure) is ultimately a name/attribute of God. Fanāʾ is the disappearance of the apparent separate self; baqāʾ is the subsistence in God — the mystic continues to exist but now as God\'s self-expression, not as a separate entity.\n\nAdvaita: the individual self is Brahman with a superimposed limitation. At liberation (mokṣa), the limitation is seen through — the individual self recognises itself as Brahman.',
    liberationCompared:
      'Sufism: fanāʾ / baqāʾ — annihilation and subsistence in God. The mystic\'s individual identity dissolves into God but is restored in a transformed mode — now consciously as God\'s expression.\n\nAdvaita: mokṣa — the recognition that individual consciousness was always Brahman. Nothing new is added; the false identification is removed. Jīvanmukti — liberated while living.',
    verdict:
      'Dara Shikoh was probably right about the experiential convergence and probably wrong about the metaphysical identity. The practical descriptions of liberation are strikingly similar. But Waḥdat al-wujūd retains a relational structure (God as the one being manifesting in multiple self-disclosures) that Advaita\'s strict non-dualism denies. The difference matters for theology (Sufism remains theistic in structure; Advaita is impersonalist) even if not for mystical experience.',
    matrix: [
      { question: 'Ultimate reality', a: 'Al-wujūd — one being, all creation as self-disclosure (tajallī)', b: 'Brahman — pure consciousness, the only real; world as apparent transformation' },
      { question: 'World\'s relation to ultimate', a: 'Genuine self-disclosure — the divine manifests itself', b: 'Apparent transformation — superimposition, not real manifestation' },
      { question: 'The individual', a: 'A locus of divine self-disclosure — real as expression, not as separate being', b: 'Brahman appearing as limited — ultimately identical with Brahman' },
      { question: 'Liberation', a: 'Fanāʾ / baqāʾ — annihilation, then subsistence in God', b: 'Mokṣa — recognition of identity with Brahman' },
      { question: 'God / ultimate', a: 'God is personal and impersonal — the one being in all its disclosures', b: 'Nirguṇa Brahman is beyond personality; saguṇa is an approach, not the ultimate' },
      { question: 'Verdict', a: 'Convergence in experience; theistic structure preserved in Sufism', b: 'Strict non-dualism; God as a concept is ultimately māyā' },
    ],
    furtherReadingSlugs: ['sufism', 'neoplatonism', 'taoism'],
  },

  // ── 11. Neoplatonism vs Advaita ──────────────────────────────────────────

  {
    slug: 'neoplatonism-vs-advaita',
    traditionA: { name: 'Neoplatonism', accent: 'blue', thinker: 'Plotinus', dates: 'c. 204–270 CE' },
    traditionB: { name: 'Advaita Vedānta', accent: 'purple', thinker: 'Śaṅkarācārya', dates: 'c. 788–820 CE' },
    level: 'advanced',
    h1: 'Neoplatonism and Advaita Vedānta — The One and Brahman: Emanation and Māyā',
    subtitle:
      'Plotinus\'s Neoplatonism and Śaṅkara\'s Advaita Vedānta are the two most precise non-dualist philosophical systems in world thought. Their structural parallel — the One / Brahman beyond being, the emanation / māyā that generates apparent multiplicity, the return of the soul to its source — is either the most striking example of convergent philosophical evolution in human history, or evidence of historical contact between Alexandria and India.',
    sharedStarting:
      'Both traditions place at the apex of reality a principle that is beyond being, beyond thought, beyond predication. Both call this the highest reality and describe it in terms of what it is not (via negativa / neti neti). Both describe a descending hierarchy from this ultimate: Nous / Mahāt (intellect/cosmic mind), Soul / jīva (individual soul), and the material world at the bottom.\n\nBoth traditions have a rich theory of the soul\'s return to its source: epistrophē (return) in Plotinus; liberation (mokṣa) through jñāna in Advaita. Both describe this return as involving the recognition of what the soul always was, not the acquisition of something new.',
    firstFork:
      'Neoplatonism: the One generates reality by emanation (proodos) — a necessary overflow, like light from the sun, not a willed act. The hierarchy: One → Nous → Soul → Matter. Each level is real; the One is most real; matter is the least real (barely real — the privation of the One\'s good). The soul descends into matter and must return to the One through philosophical contemplation and mystical union (henosis).\n\nAdvaita: Brahman does not emanate — it appears as the world through māyā / avidyā (cosmic ignorance). This is vivartavāda (apparent transformation), not real transformation. The soul (jīva) is already Brahman — it has not genuinely descended; it appears to have done so through superimposition. There is no genuine hierarchy of being, since Brahman alone is real.',
    cruxHeading: 'Emanation vs Māyā',
    crux:
      'The crucial difference: Plotinus\'s emanation is real — Nous and Soul genuinely exist, even if at a lower level of reality than the One. The return of the soul is a real journey back up a real hierarchy.\n\nŚaṅkara\'s māyā makes the hierarchy itself an appearance. The soul\'s apparent descent into individual existence was never real. There is no hierarchy of being — only Brahman and the appearance of multiplicity. The \'return\' (liberation) is not a real journey but a recognition that the departure never happened.\n\nThis generates a significant difference in the theory of the individual: for Plotinus, individual souls are real (at the level of Soul hypostasis). For Advaita, individual souls are ultimately unreal — their individuality is superimposition on Brahman.',
    statusOfIndividual:
      'Neoplatonism: individual souls are real — they descend into matter and return to the One. In the One, the individual is absorbed but the experience of union (henosis) is reported as the most fully real experience the soul can have.\n\nAdvaita: individual souls are ultimately unreal — their individuality is superimposition. At liberation, the appearance of individuality is removed; the soul recognises itself as Brahman.',
    liberationCompared:
      'Neoplatonism: henosis — mystical union with the One. Described as the soul \'becoming\' the One, though technically the distinction between \'soul\' and \'the One\' dissolves in the experience.\n\nAdvaita: mokṣa — recognition of identity with Brahman. Jīvanmukti — liberated while living in the body.',
    verdict:
      'The most likely verdict: independent philosophical convergence, potentially with some historical contact facilitated by Alexandria\'s role as a meeting point of Indian, Persian, and Greek thought. The structural parallels are too precise to be coincidental in philosophical terms — both traditions are working on the same problem (how can the individual consciousness be both real as experience and ultimately identical with an infinite ground?) and arriving at similar architectures. The difference in emanation vs māyā is real and philosophically significant — it reflects different intuitions about whether the apparent world has genuine ontological status or is pure appearance.',
    matrix: [
      { question: 'The ultimate', a: 'The One — beyond being, beyond thought, beyond predication', b: 'Brahman — pure consciousness, beyond predication (nirguṇa)' },
      { question: 'How multiplicity arises', a: 'Emanation (proodos) — necessary overflow from the One\'s perfection', b: 'Māyā / avidyā — apparent transformation, not real emanation' },
      { question: 'Reality of the world', a: 'Real, but at lesser degree of reality than Nous and One', b: 'Appearance only — Brahman alone is real' },
      { question: 'The individual soul', a: 'Real at the level of Soul hypostasis — genuinely descends and returns', b: 'Ultimately Brahman — apparent individuality is superimposition' },
      { question: 'Liberation', a: 'Henosis — mystical union with the One', b: 'Mokṣa — recognition of identity with Brahman' },
      { question: 'Verdict', a: 'Emanation makes the hierarchy real — real descent, real return', b: 'Māyā makes the hierarchy apparent — no real descent, no real return' },
    ],
    furtherReadingSlugs: ['neoplatonism', 'sufism', 'madhyamaka'],
  },

  // ── 12. Ājīvika vs Sāṃkhya ───────────────────────────────────────────────

  {
    slug: 'ajivika-vs-samkhya',
    traditionA: { name: 'Ājīvika', accent: 'amber', thinker: 'Makkhali Gosāla', dates: 'c. 6th c. BCE' },
    traditionB: { name: 'Sāṃkhya', accent: 'green', thinker: 'Kapila / Īśvarakṛṣṇa', dates: 'legendary / c. 3rd–4th c. CE' },
    level: 'advanced',
    h1: 'Ājīvika and Sāṃkhya — Niyati (Fixed Fate) vs Vivekakhyāti: Does the Path Matter?',
    subtitle:
      'Two Indian traditions that agree liberation is real and inevitable — but give completely different answers to whether what we do between now and liberation makes any difference. Ājīvika\'s niyati (absolute fate) says no; Sāṃkhya\'s vivekakhyāti (discriminative knowledge) says yes. The comparison isolates the question of whether effort can change the structure of reality.',
    sharedStarting:
      'Both traditions accept that liberation is real and possible. Both reject a creator God. Both have detailed ontologies. Both are in the Śramaṇa tradition that challenged Vedic sacrificial authority.\n\nBoth traditions accept that liberation is in some sense \'natural\' to the soul — it is the soul\'s return to its own intrinsic nature, not the acquisition of something foreign.',
    firstFork:
      'Ājīvika: niyati — absolute fate. Every soul\'s liberation is scheduled at a fixed point in a cosmic cycle of 8,400,000 mahākalpas. No action, no asceticism, no knowledge can alter this schedule by one moment. The cosmos is a closed causal system in which every event is fixed.\n\nSāṃkhya: vivekakhyāti — discriminative knowledge. The Puruṣa (pure consciousness) has always been free; its apparent bondage is the confusion of Puruṣa with Prakṛti. Liberation comes when this confusion is seen through — when the buddhi (intellect) achieves the discrimination (viveka) between Puruṣa and Prakṛti. This requires effort: the cultivation of sattva (clarity) through yoga, ethical discipline, and philosophical inquiry.',
    cruxHeading: 'Niyati vs vivekakhyāti',
    crux:
      'The deepest question: can human effort alter the timeline of liberation? Ājīvika says definitively no — the cosmic schedule cannot be accelerated. Sāṃkhya says yes — the cultivation of discriminative knowledge is the efficient cause of liberation.\n\nBut there is a paradox in Sāṃkhya too: if Puruṣa was never really bound, then liberation is the recognition of what was always true. In that sense, liberation does not produce something new — it reveals what was always the case. This raises the question: if Puruṣa\'s freedom was always real, why is discriminative knowledge needed? Sāṃkhya\'s answer: because the confusion of Puruṣa with Prakṛti is real (at the conventional level), discriminative knowledge is the appropriate response — not because it creates liberation but because it removes the veil of confusion.',
    statusOfIndividual:
      'Ājīvika: every soul will be liberated — no exceptions, no accelerations. The individual is on a cosmic conveyor belt.\n\nSāṃkhya: each Puruṣa achieves kaivalya through its associated Prakṛti-stream developing discriminative knowledge. Liberation is plural — many Puruṣas, each on their own path.',
    liberationCompared:
      'Ājīvika: liberation arrives automatically when the cosmic schedule is complete. The quality of one\'s actions is causally irrelevant.\n\nSāṃkhya: kaivalya — achieved through vivekakhyāti. The effort of yoga and philosophical discrimination is the path.',
    verdict:
      'The practical difference is stark: Ājīvika offers radical equanimity — nothing can be done to accelerate liberation, so the wise person lives without striving. Sāṃkhya offers a path — discriminative knowledge is achievable, and its achievement is liberation. The metaphysical question of whether determinism or libertarian freedom better describes the cosmos remains open in contemporary philosophy as it was in ancient India.',
    matrix: [
      { question: 'Is fate fixed?', a: 'Absolutely — niyati determines every soul\'s liberation schedule', b: 'No — vivekakhyāti (discriminative knowledge) is the efficient cause of liberation' },
      { question: 'Does effort matter?', a: 'No — all effort is causally inert with respect to liberation', b: 'Yes — yoga and philosophical discrimination accelerate liberation' },
      { question: 'The soul', a: 'Every soul on a fixed cosmic schedule — liberation inevitable', b: 'Puruṣa always free — apparent bondage is confusion with Prakṛti' },
      { question: 'Liberation', a: 'Automatic — when the cycle of 8,400,000 mahākalpas is complete', b: 'Kaivalya — Puruṣa stands alone through vivekakhyāti' },
      { question: 'God', a: 'No god — the cosmos is a self-running deterministic system', b: 'No god — Puruṣa and Prakṛti are the ultimate reals' },
      { question: 'Verdict', a: 'Radical determinism — liberation is guaranteed and unavoidable', b: 'Liberation is real and achievable — the path is discriminative knowledge' },
    ],
    furtherReadingSlugs: ['ajivika', 'carvaka', 'ajnana'],
  },

];
