import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

// Manual .env.local loading
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('❌  SANITY_WRITE_TOKEN is not set. Add it to .env.local and retry.');
  process.exit(1);
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
if (!projectId) {
  console.error('❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Add it to .env.local and retry.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const upanishads = [
  {
    _type: 'upanishad',
    _id: 'upanishad-brihadaranyaka',
    name: 'Brihadaranyaka',
    slug: { current: 'brihadaranyaka' },
    devanagari: 'बृहदारण्यक',
    transliteration: 'Bṛhadāraṇyaka',
    vedaFamily: 'shukla-yajurveda',
    philosophicalThread: 'identity',
    period: '~800 BCE',
    importance: 13,
    constellationX: 260,
    constellationY: 180,
    teacher: 'Yājñavalkya',
    student: 'Maitreyi, Gārgī, King Janaka',
    summary: 'The oldest and largest Upanishad. Contains the Neti Neti teaching, the Maitreyi dialogue, the Madhu Vidya, and the most extensive early treatment of Brahman as pure consciousness. Yajnavalkya defeats all scholars at King Janaka\'s court — those dialogues form the philosophical core.',
    scene: 'Multiple settings across six chapters. The most famous: Yajnavalkya is about to leave for the forest life of renunciation. His wife Maitreyi asks him — rather than the wealth he offers, she wants the knowledge that leads to immortality. This conversation, and his debates at King Janaka\'s court, form the heart of the text.',
    centralTeaching: 'Brahman is the ultimate reality — pure consciousness, self-luminous, beyond all description. The individual self (Atman) is identical with Brahman. Neti neti — not this, not this — is the method of approaching the indescribable. All multiplicity is superimposed on this single undivided awareness.',
    commentary: 'The Brihadaranyaka is the Upanishad\'s Upanishad — the text all other Upanishads are in dialogue with. Shankaracharya wrote his most extensive commentary on it. Yajnavalkya\'s philosophical authority is so complete that he simply announces his position and challenges anyone to refute it. When Gargi pushes him with her questions about what underlies the universe, he warns her that if she goes beyond a certain point her head will shatter — a literary device marking the boundary of what language can do.',
    shankara: 'The Brihadaranyaka establishes the foundational Advaita position: Brahman alone is real, the individual self is identical with Brahman, and all apparent multiplicity is superimposed through avidya (ignorance). Shankaracharya\'s Brihadaranyaka Bhashya is his most extensive commentary.',
    ramanuja: 'Ramanujacharya reads the identity statements as qualified — the individual self is real and distinct from Brahman, related as body to soul rather than being numerically identical. The Maitreyi dialogue shows a real relationship of knowledge transmission, not a dissolution of individuality.',
    fascinatingFacts: [
      'The Brihadaranyaka is the longest Upanishad — over 100 pages of dense philosophical dialogue. Yet its most important teaching fits in two words: Neti neti.',
      'Gargi Vachaknavi — one of the female philosophers who debates Yajnavalkya — pushes her questions about the ultimate ground of reality until Yajnavalkya warns her she is approaching the point where her head will shatter. It is the first philosophical warning against infinite regress in any known text.',
      'The Madhu Vidya (Honey Doctrine) in chapter 2 teaches that every being is the honey of every other being — a vision of radical cosmic interconnection that anticipates modern systems thinking by 2,800 years.',
      'Yajnavalkya\'s statement "I am Brahman" (Aham Brahmasmi) — one of the four Mahavakyas — appears here for the first time in the tradition.'
    ],
    mahavakya: {
      text: 'Aham Brahmāsmi',
      devanagari: 'अहं ब्रह्मास्मि',
      translation: 'I am Brahman',
      reference: 'Brihadaranyaka Upanishad 1.4.10'
    },
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'नेति नेति ।\nन इत्येव ।\nन ह्येतस्मादिति नेत्युक्त्वा विरमेत् ॥',
        transliteration: 'neti neti / na ity eva / na hy etasmād iti nety uktvā viramet',
        englishTranslation: 'Not this, not this. There is no other description than "not this." Beyond all description — that is the teaching.',
        source: 'Brihadaranyaka Upanishad 2.3.6',
        significance: 'The Neti Neti method — the way of negation. Brahman cannot be positively defined. Every definition falls short. The method is to negate every identification until the indefinable ground remains.'
      },
      {
        _key: 'p2',
        devanagari: 'अहं ब्रह्मास्मि ॥',
        transliteration: 'ahaṃ brahmāsmi',
        englishTranslation: 'I am Brahman.',
        source: 'Brihadaranyaka Upanishad 1.4.10',
        significance: 'One of the four Mahavakyas — the great declarations. The first-person declaration of identity with the ultimate reality. Spoken by Yajnavalkya as the culmination of the identity teaching.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-chandogya',
    name: 'Chandogya',
    slug: { current: 'chandogya' },
    devanagari: 'छान्दोग्य',
    transliteration: 'Chāndogya',
    vedaFamily: 'samaveda',
    philosophicalThread: 'identity',
    period: '~800 BCE',
    importance: 12,
    constellationX: 480,
    constellationY: 160,
    teacher: 'Uddālaka Āruṇi',
    student: 'Śvetaketu (his son)',
    summary: 'The second largest Upanishad and the source of the most famous Mahavakya: Tat tvam asi — That thou art. Contains the father-son dialogue between Uddalaka and Shvetaketu, the Udgitha meditation on OM, and the story of Satyakama Jabala.',
    scene: 'Shvetaketu returns home after 12 years of Vedic study, proud of his learning. His father Uddalaka Aruni asks him: did your teacher teach you that by which the unheard becomes heard, the unthought becomes thought, the unknown becomes known? Shvetaketu says no. What is that knowledge? Uddalaka begins the most famous teaching sequence in all the Upanishads — ending 16 times with "Tat tvam asi — that thou art."',
    centralTeaching: 'The identity of Atman and Brahman — expressed through the famous Tat tvam asi (That thou art). Uddalaka teaches his son through a series of illustrations: salt dissolved in water, the subtle essence in a seed that becomes a fig tree. The invisible ground of all existence — that thou art.',
    commentary: 'The Chandogya\'s teaching method is uniquely gentle — Uddalaka uses everyday examples to point to the invisible. The salt-in-water illustration (6.13) is perhaps the most elegant philosophical demonstration in world literature: the salt cannot be seen but can be tasted everywhere. So Brahman cannot be perceived directly but pervades everything. Shvetaketu\'s pride is quietly dissolved over the course of nine teaching sections.',
    shankara: 'Tat tvam asi (That thou art) is the definitive statement of non-dual identity. Tvam (thou) refers to the pure consciousness that is your essential nature — not the ego, not the body-mind. Tat (that) refers to Brahman, the infinite ground. The copula asi (art) asserts their identity.',
    ramanuja: 'Tat tvam asi should be read as affirming a real relationship between the individual self and Brahman — the individual is Brahman\'s mode, its body. Not numerical identity but the intimate relationship of the part to the whole.',
    fascinatingFacts: [
      'Uddalaka says "Tat tvam asi" to his son sixteen times across sixteen teaching sections — the repetition is deliberate. The teaching is not a concept to understand but a realisation to absorb.',
      'The story of Satyakama Jabala (4.4) is one of the most radical passages in ancient literature: a boy who does not know who his father is — and whose mother was a servant — is accepted as a student by a brahmin teacher because of his truthfulness. Lineage yields to character.',
      'The Chandogya contains the earliest known detailed treatment of OM — three chapters on the nature and meditation on the syllable. Every later tradition that works with OM draws on these passages.',
      'The phrase "Sarvam khalv idam Brahma" — all this is Brahman (3.14.1) — is the most comprehensive statement of non-duality in the entire Upanishadic corpus.'
    ],
    mahavakya: {
      text: 'Tat tvam asi',
      devanagari: 'तत् त्वम् असि',
      translation: 'That thou art',
      reference: 'Chandogya Upanishad 6.8.7'
    },
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'तत् त्वम् असि श्वेतकेतो ॥',
        transliteration: 'tat tvam asi śvetaketo',
        englishTranslation: 'That thou art, Shvetaketu.',
        source: 'Chandogya Upanishad 6.8.7',
        significance: 'The most famous sentence in all of the Upanishads. Spoken sixteen times by Uddalaka to his son. The identity of the individual self and the ultimate reality — stated as personal address, not abstract proposition.'
      },
      {
        _key: 'p2',
        devanagari: 'सर्वं खल्विदं ब्रह्म ॥',
        transliteration: 'sarvaṃ khalv idaṃ brahma',
        englishTranslation: 'All this is Brahman.',
        source: 'Chandogya Upanishad 3.14.1',
        significance: 'The most comprehensive non-dual statement in the Upanishads. Not "some things are Brahman" or "Brahman underlies things" but "all this IS Brahman." No exceptions.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-mandukya',
    name: 'Māṇḍūkya',
    slug: { current: 'mandukya' },
    devanagari: 'माण्डूक्य',
    transliteration: 'Māṇḍūkya',
    vedaFamily: 'atharvaveda',
    philosophicalThread: 'consciousness',
    period: '~500 BCE',
    importance: 11,
    constellationX: 520,
    constellationY: 320,
    teacher: 'Tradition attributes it to the Mandukya rishi',
    student: 'All seekers',
    summary: 'The shortest of the 13 principal Upanishads — only 12 verses. Yet Gaudapada and Shankaracharya both declared it sufficient for liberation. Analyses the four states of consciousness: waking, dream, deep sleep, and turiya — the fourth, which underlies and pervades all three.',
    scene: 'Unlike most Upanishads there is no dramatic frame — no teacher and student, no king\'s court. The Mandukya is pure philosophical analysis. It begins with OM and analyses it into its three components A-U-M, corresponding to the three states of consciousness. Then it goes beyond the three into the fourth — turiya.',
    centralTeaching: 'OM encompasses all of existence — past, present, and future. Consciousness has four states: waking (vishva), dreaming (taijasa), deep sleep (prajna), and turiya — the fourth, which is not a state but the ground of all states. Turiya is pure awareness, self-luminous, beyond all duality. This is Atman. This is Brahman.',
    commentary: 'The Mandukya\'s power is in its compression. Twelve verses to encompass the entire analysis of consciousness. Gaudapada\'s Karika — a commentary that doubles the text — introduced the concept of ajativada (non-origination): nothing was ever created, nothing ever changes, there is only Brahman appearing as multiplicity. This radical position made the Mandukya the most philosophically powerful text in the Advaita tradition.',
    shankara: 'The Mandukya is the supreme Upanishad. The turiya — the fourth state — is Brahman itself. The three other states (waking, dream, deep sleep) are superimpositions on this ground. To know turiya is to know everything.',
    ramanuja: 'The four states analysis is valid but turiya should be understood as Brahman as the inner controller — the real self that is distinct from the three states but intimately related to them as their ground and Lord.',
    fascinatingFacts: [
      'At 12 verses the Mandukya is the shortest principal Upanishad. Shankaracharya said these 12 verses are sufficient for liberation — no other text is needed.',
      'The concept of turiya (the fourth) is not a state of consciousness but the ground of all states — pure awareness that is always present, even in dreamless sleep, even between thoughts. It is the hardest concept in all Indian philosophy to convey in words.',
      'Gaudapada\'s Mandukya Karika introduced ajativada — the doctrine of non-origination. Nothing was ever created. There is only the appearance of creation in consciousness. This is the most radical philosophical position in Indian thought.',
      'The Mandukya is the only Upanishad that belongs to the Atharvaveda — the most philosophical of the four Vedas. Its brevity is deceptive: every word has been commented upon for 1,500 years.'
    ],
    mahavakya: {
      text: 'Ayam Ātmā Brahma',
      devanagari: 'अयम् आत्मा ब्रह्म',
      translation: 'This self is Brahman',
      reference: 'Mandukya Upanishad 1.2'
    },
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'ओमित्येतदक्षरमिदं सर्वम् ।\nतस्योपव्याख्यानं भूतं भवद्भविष्यदिति\nसर्वमोङ्कार एव ॥',
        transliteration: 'om ity etad akṣaram idaṃ sarvam / tasyopavyākhyānam bhūtaṃ bhavad bhaviṣyad iti / sarvam oṃkāra eva',
        englishTranslation: 'OM — this syllable is all this. Its further explanation: past, present, and future — all this is indeed OM.',
        source: 'Mandukya Upanishad 1.1',
        significance: 'The opening verse. OM is not just a sound or a symbol — it is the totality of existence across all three times. The entire analysis of the Mandukya unfolds from this declaration.'
      },
      {
        _key: 'p2',
        devanagari: 'अयमात्मा ब्रह्म ॥',
        transliteration: 'ayam ātmā brahma',
        englishTranslation: 'This self is Brahman.',
        source: 'Mandukya Upanishad 1.2',
        significance: 'The Mahavakya of the Atharvaveda. The shortest Mahavakya. "This" points to the turiya — the pure awareness that is your actual nature right now, not somewhere else, not after liberation. This. Here. Now.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-katha',
    name: 'Kaṭha',
    slug: { current: 'katha' },
    devanagari: 'कठ',
    transliteration: 'Kaṭha',
    vedaFamily: 'krishna-yajurveda',
    philosophicalThread: 'liberation',
    period: '~600 BCE',
    importance: 10,
    constellationX: 160,
    constellationY: 300,
    teacher: 'Yama — the god of death',
    student: 'Nachiketa — a young brahmin boy',
    summary: 'The most dramatically powerful of all the Upanishads. A young boy Nachiketa enters the house of Yama (death) and waits three days without food. When Yama returns, he offers three boons. For his third boon Nachiketa asks: what happens after death? Yama tries to dissuade him with kingdoms and pleasures. Nachiketa refuses everything. Death itself teaches the secret of immortality.',
    scene: 'Nachiketa\'s father Vajashravas performs a sacrifice and gives away all his possessions — but gives away only old, useless cows. Nachiketa asks three times: to whom will you give me? His father, irritated, finally says: to Death I give you. Nachiketa arrives at Yama\'s house. Yama is absent for three days. On his return, to compensate for the breach of hospitality, he offers three boons. First: return to your father alive. Second: knowledge of the sacred fire. Third: what happens after death?',
    centralTeaching: 'The self is not born and does not die. It is eternal, ancient, not slain when the body is slain. Smaller than the smallest, greater than the greatest — it dwells in the heart of every being. The wise who know this are freed from the mouth of death. The path to liberation requires turning the senses inward, finding the self in the cave of the heart.',
    commentary: 'The Katha is the Upanishad as literature — it has a beginning, a middle, and an end. The dramatic frame is perfect: a boy who has been given to death faces death itself and asks the one question that matters. Yama\'s attempts to dissuade Nachiketa — offering him the pleasures of the world, beautiful women, kingdoms — are the test. Nachiketa sees through every offer. Only the imperishable interests him. This is the standard every spiritual seeker is measured against.',
    shankara: 'The Katha establishes the eternal nature of the Atman beyond any doubt. The statement "not born, not dying, not slain when the body is slain" (2.19) is the definitive scriptural authority for the immortality of the self that the Gita also draws on.',
    ramanuja: 'The "smaller than the smallest, greater than the greatest" paradox (1.2.20) points to Brahman as the inner self of all — present in the smallest atom, encompassing the greatest cosmos. The self that is found in the cave of the heart is the individual Atman in its relationship with the supreme.',
    fascinatingFacts: [
      'The Katha contains the two-birds metaphor (3.1) — the individual soul and the supreme soul sitting in the same tree — which Dirghatamas first composed in the Rigveda 1.164.20 and which the Gita also draws on in Chapter 13.',
      'Yama is the only teacher in any Upanishad who is a god, not a human sage. Death teaching about immortality is the Katha\'s great irony — and its greatest insight: only one who has seen death from the inside can truly know what transcends it.',
      'Nachiketa\'s refusal of all worldly offers — wealth, beautiful women, kingdoms, long life — is the standard by which every spiritual seeker measures themselves. The Katha was Gandhi\'s favourite Upanishad.',
      'The path described as "sharp as a razor\'s edge, difficult to traverse" (3.14) became the source of W. Somerset Maugham\'s novel The Razor\'s Edge — one of the most read Western novels about Indian philosophy.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'न जायते म्रियते वा विपश्चिन्\nनायं कुतश्चिन्न बभूव कश्चित् ।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ॥',
        transliteration: 'na jāyate mriyate vā vipaścin nāyaṃ kutaścin na babhūva kaścit / ajo nityaḥ śāśvato\'yaṃ purāṇo na hanyate hanyamāne śarīre',
        englishTranslation: 'The wise one is not born, nor does it die. It has not come from anywhere, nor has it become anything. Unborn, eternal, ever-existing, primeval — it is not slain when the body is slain.',
        source: 'Katha Upanishad 1.2.18',
        significance: 'The source verse that the Bhagavad Gita (2.20) draws on directly. Yama teaching Nachiketa the immortality of the self. The most authoritative scriptural statement on the eternal nature of Atman.'
      },
      {
        _key: 'p2',
        devanagari: 'उत्तिष्ठत जाग्रत\nप्राप्य वरान्निबोधत ।\nक्षुरस्य धारा निशिता दुरत्यया\nदुर्गं पथस्तत्कवयो वदन्ति ॥',
        transliteration: 'uttiṣṭhata jāgrata prāpya varān nibodhata / kṣurasya dhārā niśitā duratyayā durgaṃ pathas tat kavayo vadanti',
        englishTranslation: 'Arise, awake, and learn by approaching excellent teachers. The wise say the path is as difficult to traverse as a razor\'s edge — sharp and hard to cross.',
        source: 'Katha Upanishad 1.3.14',
        significance: 'The Katha\'s call to action — and the source of Maugham\'s novel. Uttiṣṭhata jāgrata (arise, awake) became Swami Vivekananda\'s rallying cry for India\'s spiritual and social awakening.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-isha',
    name: 'Īśā',
    slug: { current: 'isha' },
    devanagari: 'ईश',
    transliteration: 'Īśā',
    vedaFamily: 'shukla-yajurveda',
    philosophicalThread: 'liberation',
    period: '~600 BCE',
    importance: 9,
    constellationX: 340,
    constellationY: 120,
    teacher: 'Anonymous — attributed to Yajnavalkya\'s tradition',
    student: 'All seekers',
    summary: 'The shortest complete Upanishad — 18 verses. Opens the Shukla Yajurveda and closes it. The title comes from its first word: Isha — the Lord. Reconciles renunciation and action, knowledge and devotion. Gandhi called these 18 verses sufficient to guide an entire human life.',
    scene: 'No dramatic setting. Pure verse — each of the 18 lines is a complete teaching. The Isha is the only Upanishad embedded directly within a Veda Samhita (the 40th chapter of the Shukla Yajurveda) rather than attached as a Brahmana or Aranyaka. This gives it a unique authority — it is simultaneously Sruti and philosophical text.',
    centralTeaching: 'The Lord (Isha) pervades all this — whatever moves in this moving world. Renounce and enjoy — do not covet anyone\'s wealth. Perform actions without attachment. Both knowledge and action are needed — neither alone is sufficient. The self that is in all things is also in you.',
    commentary: 'The Isha\'s paradoxes are its greatness. The opening verse says: all this is the Lord, so enjoy it — by renouncing it. This is not contradiction but the deepest non-dualism: when you know everything as the Lord, you can enjoy everything freely because you have given up personal ownership. The verse "into blind darkness enter those who worship ignorance; into greater darkness those who worship knowledge alone" is the most counterintuitive statement in the Upanishads.',
    shankara: 'The Isha establishes that both knowledge (vidya) and action (karma) have their place — karma for purifying the mind, vidya for liberation. The Isha synthesises what other texts seem to separate.',
    ramanuja: 'Isha (the Lord) is Brahman as the personal God — Vishnu — who pervades all creation. The Isha supports qualified non-dualism: the Lord is present in all things, all things are in the Lord, yet the Lord remains transcendent.',
    fascinatingFacts: [
      'Gandhi said of the Isha: "If all the Upanishads and all other scriptures happened to be reduced to ashes, and if only the first verse of the Isha Upanishad were left in the memory of the Hindus, Hinduism would live forever."',
      'The verse "tena tyaktena bhuñjīthā" — enjoy by renouncing — is the most elegant summary of the Vedantic attitude to the world in any text.',
      'The Isha is the only Upanishad that directly addresses both knowledge and action as jointly necessary for liberation — it is the philosophical source of the Bhagavad Gita\'s integration of jnana and karma.',
      'Swami Vivekananda\'s Katha Upanishad cry "Uttiṣṭhata jāgrata" (arise, awake) draws on the same tradition that produced the Isha — the call to active, engaged spirituality rather than passive withdrawal.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
        transliteration: 'īśāvāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat / tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam',
        englishTranslation: 'All this — whatever moves in this moving world — is pervaded by the Lord. Enjoy by renouncing. Do not covet the wealth of anyone.',
        source: 'Isha Upanishad 1.1',
        significance: 'The opening verse and the complete teaching. The paradox "enjoy by renouncing" is not an instruction to be poor but an instruction to hold lightly. When everything is the Lord, there is nothing to possess and nothing to fear losing.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-mundaka',
    name: 'Muṇḍaka',
    slug: { current: 'mundaka' },
    devanagari: 'मुण्डक',
    transliteration: 'Muṇḍaka',
    vedaFamily: 'atharvaveda',
    philosophicalThread: 'liberation',
    period: '~500 BCE',
    importance: 8,
    constellationX: 560,
    constellationY: 250,
    teacher: 'Angiras',
    student: 'Shaunaka',
    summary: 'Opens with Shaunaka\'s great question: by knowing what is everything known? Distinguishes higher knowledge (para vidya — knowledge of Brahman) from lower knowledge (apara vidya — all other learning including the Vedas themselves). Contains the two-birds metaphor and the famous arrow-bow-target meditation.',
    scene: 'The householder Shaunaka approaches the sage Angiras with fuel in hand — the traditional gesture of a student seeking a teacher. He asks the question that frames the entire Upanishad: "Revered sir, by knowing what does all this become known?" Angiras begins by distinguishing two types of knowledge — the lower (which includes the four Vedas, grammar, astronomy, and all sciences) and the higher, by which the imperishable is known.',
    centralTeaching: 'Two types of knowledge: lower (apara) — all learning including the Vedas as ritual texts — and higher (para) — direct knowledge of Brahman. The lower cannot give liberation; the higher is the only liberator. Brahman is like a fire whose sparks are all beings. The self must be held like an arrow on the bow of OM, aimed at the target of Brahman.',
    commentary: 'The Mundaka\'s audacity is stunning: it places the Vedas themselves in the category of lower knowledge. The four Vedas, phonetics, grammar, etymology, metre, astronomy — all apara vidya. This is not a rejection of the Vedas but a reorientation: ritual and learning prepare the mind, but direct knowledge of Brahman is a different order of knowing entirely.',
    shankara: 'The distinction between para and apara vidya is the key to understanding the entire Vedic tradition. The Vedas as ritual texts belong to apara vidya — they purify and prepare. Para vidya — direct knowledge of Brahman — is what the Upanishads transmit. The Mundaka correctly places all learning in service of this ultimate knowing.',
    ramanuja: 'The two types of knowledge should not be read as a hierarchy that diminishes the Vedas. The apara vidya establishes devotion and right action; the para vidya reveals Brahman as the personal Lord. Both are necessary stages.',
    fascinatingFacts: [
      '"Satyameva Jayate" — Truth alone triumphs — from Mundaka 3.1.6 is the national motto of India, inscribed on the state emblem. It appears in the context of the statement that truth alone, not falsehood, is the path to the divine.',
      'The Mundaka places the four Vedas in the category of lower knowledge — a philosophically bold move that reframes the entire Vedic tradition as preparation for direct knowing rather than an end in itself.',
      'The arrow-bow-target meditation (2.2.3-4) — OM as the bow, the self as the arrow, Brahman as the target — is the most precise meditation instruction in any Upanishad, and has been practised by meditators for 2,500 years.',
      'Shaunaka\'s opening question — "by knowing what does all this become known?" — is the question that defines the entire Upanishadic project. Every Upanishad is an attempt to answer it.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'सत्यमेव जयते नानृतं\nसत्येन पन्था विततो देवयानः ।',
        transliteration: 'satyam eva jayate nānṛtaṃ satyena panthā vitato devayānaḥ',
        englishTranslation: 'Truth alone triumphs, not falsehood. By truth the divine path is extended.',
        source: 'Mundaka Upanishad 3.1.6',
        significance: 'The national motto of India. In context, this is not a moral platitude but a metaphysical statement: only what is real (sat) ultimately prevails. Falsehood (asat) has no ultimate ground and cannot persist.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-taittiriya',
    name: 'Taittirīya',
    slug: { current: 'taittiriya' },
    devanagari: 'तैत्तिरीय',
    transliteration: 'Taittirīya',
    vedaFamily: 'krishna-yajurveda',
    philosophicalThread: 'cosmic',
    period: '~600 BCE',
    importance: 9,
    constellationX: 200,
    constellationY: 380,
    teacher: 'Varuna to Bhrigu',
    student: 'Bhrigu (son of Varuna)',
    summary: 'Contains the Pancha Kosha (five sheaths) teaching — the five layers of the self from physical body to bliss. The Brahmananda Valli teaches that Brahman is ananda (bliss). Opens with the Shanti Patha "Saha nau avatu" — still chanted at the beginning of every shared study session today.',
    scene: 'Bhrigu approaches his father Varuna and asks: "Sir, teach me Brahman." Varuna says: "Brahman is that from which all beings are born, by which they live, and into which they return at death. Seek to know that. That is Brahman." Bhrigu goes into meditation and returns five times with different answers — each time Varuna affirms and sends him deeper. He moves from food to breath to mind to intelligence to bliss.',
    centralTeaching: 'Brahman is ananda — bliss. The five sheaths (koshas) from gross to subtle: physical body (annamaya), breath body (pranamaya), mind body (manomaya), intelligence body (vijnanamaya), bliss body (anandamaya). The real self is beyond all five. Brahman is the ground from which all beings emerge, in which they live, and into which they return.',
    commentary: 'The Taittiriya\'s Pancha Kosha model is the most influential psychological framework in all Indian philosophy — still used in yoga, Ayurveda, and meditation teaching today. The progressive deepening through five layers of self is a complete map of consciousness from the gross to the subtlest. The teaching that Brahman is bliss (ananda) is the Taittiriya\'s unique contribution — not being, not consciousness alone, but bliss as the ultimate nature.',
    shankara: 'The five sheaths are not five selves but five superimpositions on the one self. Proceeding from the grossest (annamaya) to the subtlest (anandamaya), the inquiry strips away identification until only the witness remains. Brahman is described as ananda because bliss is the closest positive description — but even bliss as a description falls short.',
    ramanuja: 'The anandamaya kosha (bliss sheath) is the individual self in its closest proximity to Brahman. The Taittiriya supports Vishishtadvaita: the individual self is real, distinct from Brahman, and related to it as part to whole — bliss being the nature of both.',
    fascinatingFacts: [
      'The Shanti Patha of the Taittiriya — "Saha nau avatu, saha nau bhunaktu" — is still recited at the beginning of every shared Vedic study session anywhere in the world. It has been continuously recited for 2,600 years.',
      'The Pancha Kosha (five sheaths) model is the most practically applied teaching from any Upanishad — used in yoga therapy, Ayurveda, and meditation instruction in the 21st century.',
      'Bhrigu\'s five-stage inquiry — food, breath, mind, intelligence, bliss — is the first systematic introspective methodology in human history. The process of moving from gross to subtle identification is the template for all subsequent Vedantic self-inquiry.',
      'The statement "Brahman is bliss" (anando brahmeti) is the most counterintuitive philosophical claim in the Upanishads — and the most experientially verifiable. Every meditation teacher who describes deep samadhi as bliss is drawing on this teaching.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'सह नाववतु । सह नौ भुनक्तु ।\nसह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु\nमा विद्विषावहै ॥',
        transliteration: 'saha nāv avatu saha nau bhunaktu / saha vīryaṃ karavāvahai / tejasvī nāv adhītam astu / mā vidviṣāvahai',
        englishTranslation: 'May we be protected together, nourished together. May we work together with great energy. May our study be luminous. May we not be hostile to each other.',
        source: 'Taittiriya Upanishad — Shanti Patha',
        significance: 'The invocation for shared study. Still recited at the opening of every Vedic study session worldwide. A prayer not for individual benefit but for the quality of learning together.'
      },
      {
        _key: 'p2',
        devanagari: 'आनन्दो ब्रह्मेति व्यजानात् ।\nआनन्दाद्ध्येव खल्विमानि भूतानि जायन्ते ।',
        transliteration: 'ānando brahmeti vyajānāt / ānandād dhy eva khalv imāni bhūtāni jāyante',
        englishTranslation: 'He knew: Brahman is bliss. For from bliss alone all these beings are born.',
        source: 'Taittiriya Upanishad 3.6.1',
        significance: 'Bhrigu\'s final realisation after five stages of inquiry. Brahman is ananda — not a philosophical abstraction but the ground of all experience, the source from which all beings emerge.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-kena',
    name: 'Kena',
    slug: { current: 'kena' },
    devanagari: 'केन',
    transliteration: 'Kena',
    vedaFamily: 'samaveda',
    philosophicalThread: 'consciousness',
    period: '~600 BCE',
    importance: 7,
    constellationX: 420,
    constellationY: 90,
    teacher: 'Anonymous teacher',
    student: 'A student',
    summary: 'Opens with the question: by what (kena) is the mind directed? By what does breath move? By what does speech speak? The teaching: that which is not thought by the mind, but by which the mind thinks — that alone is Brahman. The famous Yaksha story: Brahman appears to the devas and none of them can recognise it.',
    scene: 'A student approaches a teacher with the fundamental question about consciousness: what is the source of all mental and sensory activity? The second half of the Kena shifts into a narrative: the devas (Agni, Vayu, Indra) have just won a battle and are proud of their victory. Brahman appears before them as a yaksha (spirit). Each deva tries to demonstrate their power to the yaksha and fails. Indra approaches Uma Haimavati (the divine goddess) who reveals: that is Brahman. Your victory was Brahman\'s victory.',
    centralTeaching: 'Brahman is the ground of all perception and thought — not an object of perception or thought. That which makes the eye see, the ear hear, the mind think — that cannot itself be seen, heard, or thought in the ordinary way. The devas\' pride is overcome by recognising that Brahman was the source of their power all along.',
    commentary: 'The Kena is one of the most philosophical of the shorter Upanishads. Its opening questions are the most precise formulation of the hard problem of consciousness in ancient literature: what is the knower behind all knowing? The Yaksha story is a masterpiece — Brahman appears as an incomprehensible mystery and the most powerful gods are humbled by their inability to identify it.',
    shankara: 'The teaching of the Kena is identical with the Brihadaranyaka\'s Neti Neti: Brahman is not an object of knowledge but the subject of all knowledge. The eye cannot see itself; the knowing awareness cannot be made an object of knowing awareness.',
    ramanuja: 'The Kena establishes Brahman as the inner controller of all the faculties — not identical with them but their source and support. The devas fail because they mistake their individual powers for self-sufficient. Brahman as the inner controller is the Vishishtadvaita insight.',
    fascinatingFacts: [
      'The Kena\'s opening question — "by what is the mind directed?" — is the earliest known formulation of what modern philosophers call the hard problem of consciousness: what is the source of subjective experience?',
      'Uma Haimavati — the goddess who reveals Brahman\'s identity to Indra — is one of the rare appearances of the divine feminine as the teacher of ultimate truth in the Upanishads.',
      'The paradox "it is known by those who do not know it; those who know it do not know it" (2.3) is the Kena\'s most quoted statement — pointing to the difference between intellectual knowledge about Brahman and direct identity with Brahman.',
      'Indra is identified as the greatest of the devas in the Kena story — because he alone approaches Uma and receives the teaching. The text rewards humility and curiosity over power and pride.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'केनेषितं पतति प्रेषितं मनः\nकेन प्राणः प्रथमः प्रैति युक्तः ।\nकेनेषितां वाचमिमां वदन्ति\nचक्षुः श्रोत्रं क उ देवो युनक्ति ॥',
        transliteration: 'keneṣitaṃ patati preṣitaṃ manaḥ kena prāṇaḥ prathamaḥ praiti yuktaḥ / keneṣitāṃ vācam imāṃ vadanti cakṣuḥ śrotraṃ ka u devo yunakti',
        englishTranslation: 'By what is the mind directed, impelled to its object? By what does breath go forth first, directed? By what is this speech that people speak directed? What god directs the eye and ear?',
        source: 'Kena Upanishad 1.1',
        significance: 'The opening question — and the most precise ancient formulation of the question of consciousness. What is the source of mental activity? What knows the knower? These four questions are the Kena\'s entire inquiry in one verse.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-prashna',
    name: 'Praśna',
    slug: { current: 'prashna' },
    devanagari: 'प्रश्न',
    transliteration: 'Praśna',
    vedaFamily: 'atharvaveda',
    philosophicalThread: 'cosmic',
    period: '~400 BCE',
    importance: 6,
    constellationX: 580,
    constellationY: 380,
    teacher: 'Pippalada',
    student: 'Six students with six questions',
    summary: 'Six students approach the sage Pippalada with six fundamental questions: about creation, about prana (breath), about sleep and death, about OM, about the sixteen parts of the self. Pippalada answers each after a year of preparation. Structured as six praśnas (questions) — hence the name.',
    scene: 'Six brahmin students come to the sage Pippalada seeking knowledge of Brahman. Pippalada says: "Stay with me for a year, with faith and austerity and celibacy. Then ask what you want — if I know, I will tell you all." After a year, the six students ask their six questions one by one.',
    centralTeaching: 'Prana (life-breath) is the fundamental force sustaining all life. OM contains all three states of consciousness and the fourth beyond them. The individual self has sixteen parts like the moon. Death is the retreat of prana from the senses. The self that knows itself in all states is Brahman.',
    commentary: 'The Prashna is the most accessible of the Atharvaveda Upanishads — its question-and-answer structure gives it narrative clarity. The teaching on prana as the fundamental life force is the Prashna\'s unique contribution, and the basis for all later Ayurvedic and yogic understanding of the subtle body.',
    shankara: 'The Prashna supports the Mandukya\'s four-states analysis from a different angle — through prana rather than pure consciousness. The common ground is the same: beyond the three ordinary states is the fourth, which is Brahman.',
    ramanuja: 'The sixteen parts of the self (shodasha kala purusha) point to Brahman as the complete being — all partial manifestations are fragments of this totality. The Prashna supports a real multiplicity unified in Brahman.',
    fascinatingFacts: [
      'The Prashna is the only Upanishad structured as six separate dialogues with six different students — making it the most democratic of the principal Upanishads in terms of who receives the teaching.',
      'Pippalada\'s year-long waiting period before answering questions is the Upanishadic model of the teacher-student relationship: preparation precedes transmission. The question matters less than the readiness of the questioner.',
      'The teaching on prana as the fundamental life force (2nd Prashna) is the philosophical foundation of all pranayama practice in yoga — the systematic use of breath as the vehicle for consciousness transformation.',
      'Gargyayana\'s question about the sixteen parts of the self (6th Prashna) connects the Prashna to the broader Vedic cosmological tradition of correspondences between microcosm and macrocosm.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'स यो ह वै तद्भगवन्मनुष्येषु प्राणं ददाति\nसोऽस्माकं ब्रूहि ॥',
        transliteration: 'sa yo ha vai tad bhagavan manuṣyeṣu prāṇaṃ dadāti so\'smākaṃ brūhi',
        englishTranslation: 'Tell us, revered sir: who is it that gives prana to human beings?',
        source: 'Prashna Upanishad 2.1',
        significance: 'The second student\'s question — opening the teaching on prana as the fundamental life force. The answer reveals prana as the manifestation of Brahman in the living body.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-aitareya',
    name: 'Aitareya',
    slug: { current: 'aitareya' },
    devanagari: 'ऐतरेय',
    transliteration: 'Aitareya',
    vedaFamily: 'rigveda',
    philosophicalThread: 'consciousness',
    period: '~700 BCE',
    importance: 7,
    constellationX: 140,
    constellationY: 180,
    teacher: 'Mahidasa Aitareya',
    student: 'Students of the Rigveda tradition',
    summary: 'The only principal Upanishad belonging to the Rigveda. Contains the Mahavakya Prajnanam Brahma — Consciousness is Brahman. Teaches the creation of the universe from Brahman\'s consciousness, the three births of the self, and the identity of the individual consciousness with cosmic consciousness.',
    scene: 'The Aitareya opens with a cosmological narrative: in the beginning there was only the self (Atman) — one, without a second. It desired to create and from that desire arose all of creation. The second and third chapters turn from cosmology to the direct question: what is the self? The answer is given in the Mahavakya.',
    centralTeaching: 'Prajnanam Brahma — Consciousness is Brahman. All beings are forms of consciousness. The organs of the body, the cosmic forces, the individual self — all are expressions of one consciousness. The three births of the self: conception, physical birth, and the birth into higher knowledge through the teacher.',
    commentary: 'The Aitareya is brief but complete. Its cosmological opening — consciousness desiring to create and creating from that desire — is one of the most elegant creation accounts in any tradition. The Mahavakya Prajnanam Brahma identifies consciousness not as a property of beings but as the ultimate reality itself. Everything that exists is consciousness in different forms.',
    shankara: 'Prajnanam Brahma is the definitive statement that consciousness is not a product of matter but the ground of all existence. The Aitareya\'s creation account is not literal cosmology but a way of showing that consciousness precedes and underlies all apparent multiplicity.',
    ramanuja: 'The Aitareya\'s creation account supports the Vishishtadvaita view that creation is real — Brahman truly created the world as its body. Consciousness is the ultimate nature of this creator.',
    fascinatingFacts: [
      'The Aitareya is the only principal Upanishad that belongs to the Rigveda — the oldest Veda. This makes its Mahavakya (Prajnanam Brahma) the philosophical distillation of the Rigveda\'s deepest insight.',
      'Mahidasa Aitareya — the sage attributed with this Upanishad — was said to be the son of a servant woman who was initially looked down upon. His mother prayed for his recognition; the Earth goddess appeared and placed him on her lap. His authorship of the Aitareya reversed his social position through wisdom.',
      'The three births described in the Aitareya (conception, physical birth, birth through knowledge from a teacher) establish the guru-shishya relationship as a literal rebirth — still the foundation of the Vedic teaching tradition.',
      'Prajnanam Brahma — Consciousness is Brahman — is perhaps the most scientifically interesting of the four Mahavakyas. It asserts that consciousness is not a product of physical processes but the fundamental nature of reality itself.'
    ],
    mahavakya: {
      text: 'Prajñānam Brahma',
      devanagari: 'प्रज्ञानं ब्रह्म',
      translation: 'Consciousness is Brahman',
      reference: 'Aitareya Upanishad 3.3'
    },
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'प्रज्ञानं ब्रह्म ॥',
        transliteration: 'prajñānam brahma',
        englishTranslation: 'Consciousness is Brahman.',
        source: 'Aitareya Upanishad 3.3',
        significance: 'The Mahavakya of the Rigveda. The simplest and most radical philosophical statement: the ultimate reality is not matter, not energy, not space or time, but consciousness itself. Everything that exists is a form of this one consciousness.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-shvetashvatara',
    name: 'Śvetāśvatara',
    slug: { current: 'shvetashvatara' },
    devanagari: 'श्वेताश्वतर',
    transliteration: 'Śvetāśvatara',
    vedaFamily: 'krishna-yajurveda',
    philosophicalThread: 'cosmic',
    period: '~400 BCE',
    importance: 7,
    constellationX: 380,
    constellationY: 400,
    teacher: 'Shvetashvatara',
    student: 'The forest sages',
    summary: 'The most theistic of all the Upanishads — the source of Shaiva non-dualism. Rudra-Shiva is identified as the one supreme Brahman. Contains the famous chariot metaphor of the body, senses, and self. The teacher Shvetashvatara received this knowledge in pure consciousness and transmitted it to the forest sages.',
    scene: 'A group of forest sages are debating the fundamental questions: what is the cause of the universe? Is it Brahman, time, nature, chance, the elements, the individual self? They cannot agree. The sage Shvetashvatara goes into deep meditation and receives the answer — which he then teaches to the assembled sages.',
    centralTeaching: 'Rudra-Shiva is the one supreme reality — Brahman in personal form. The individual self (jivatma) and the supreme self (paramatma) are like two birds on the same tree. One eats the fruit; the other witnesses. Liberation comes from knowing the supreme self as the inner controller of all.',
    commentary: 'The Shvetashvatara is the theological foundation of Shaivism in the same way the Chandogya is of Vaishnavism. Its identification of Rudra-Shiva with the supreme Brahman is the scriptural authority for all subsequent Shaiva philosophy. The chariot metaphor (1.9) — body as chariot, self as passenger, senses as horses, mind as reins — is the most vivid practical image for the inner life in any Upanishad.',
    shankara: 'The Shvetashvatara\'s theistic language should be read as qualified description of the one impersonal Brahman. Shiva is Brahman described through the lens of devotion — the personal form through which the impersonal is approached.',
    ramanuja: 'The Shvetashvatara confirms Vishishtadvaita: Brahman as personal God (here as Shiva-Rudra) is the supreme reality. The individual self is real and distinct, dwelling within Brahman as its body.',
    fascinatingFacts: [
      'The two-birds metaphor (1.6) appears here independently of the Rigveda (1.164.20) and the Mundaka — showing it was a widely shared philosophical image across multiple Vedic traditions.',
      'The Shvetashvatara\'s identification of Rudra-Shiva with Brahman is the scriptural authority that Shaiva Siddhanta, Kashmir Shaivism, and all Shaiva traditions cite as their Upanishadic foundation.',
      'The verse "tvam stri tvam puma asi" — thou art woman, thou art man — is the earliest statement of divine androgyny in the Vedic tradition, later developed into the Ardhanarisvara (half-man half-woman) iconography of Shiva.',
      'The chariot metaphor in the Shvetashvatara predates (or is contemporaneous with) the same metaphor in the Katha Upanishad — suggesting it was a widely circulating pedagogical image in the 5th-4th century BCE teaching tradition.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'द्वा सुपर्णा सयुजा सखाया\nसमानं वृक्षं परि षस्वजाते ।\nतयोरन्यः पिप्पलं स्वाद्वत्ति\nअनश्नन्नन्यो अभिचाकशीति ॥',
        transliteration: 'dvā suparṇā sayujā sakhāyā samānaṃ vṛkṣaṃ pari ṣasvajāte / tayor anyaḥ pippalaṃ svādv atti anaśnann anyo abhicākaśīti',
        englishTranslation: 'Two birds, inseparable companions, clasp the same tree. One of them eats the sweet fruit; the other looks on without eating.',
        source: 'Shvetashvatara Upanishad 4.6',
        significance: 'The two-birds metaphor — the individual self (jivatma) eating the fruits of experience, the supreme self (paramatma) witnessing without involvement. The same image appears in the Rigveda, Mundaka, and Bhagavad Gita — one of the great recurring images of Indian philosophy.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-maitri',
    name: 'Maitrī',
    slug: { current: 'maitri' },
    devanagari: 'मैत्री',
    transliteration: 'Maitrī',
    vedaFamily: 'krishna-yajurveda',
    philosophicalThread: 'liberation',
    period: '~300 BCE',
    importance: 5,
    constellationX: 460,
    constellationY: 400,
    teacher: 'Shakayanya',
    student: 'King Brihadratha',
    summary: 'Opens with King Brihadratha who has renounced his kingdom and stands in the forest, "looking at his body with disgust." He asks the sage Shakayanya for liberation. Contains one of the most extensive treatments of the six-fold yoga path and the three states of consciousness in any Upanishad.',
    scene: 'King Brihadratha has given his kingdom to his son, has renounced everything, and stands in the forest performing tapas. His body is old and he is filled with a sense of the futility of worldly existence. He approaches the sage Shakayanya with genuine renunciation: "I have no knowledge of the self. You know the truth — please teach me." The king\'s attitude of complete surrender makes him the ideal student.',
    centralTeaching: 'The body is impermanent and the self is eternal. The six-fold yoga path: restraint of breath (pranayama), withdrawal of senses (pratyahara), meditation (dhyana), concentration (dharana), reflection (tarka), and absorption (samadhi). The self is like the spark from fire — of the same nature as the whole.',
    commentary: 'The Maitri is the latest of the principal Upanishads and shows the influence of Samkhya and early Yoga philosophy. The king who stands in the forest disgusted with his body is a deliberately extreme starting point — the Maitri does not try to reconcile worldly life with liberation. Its six-fold yoga is the earliest systematic enumeration of the yoga path in the Upanishadic tradition.',
    shankara: 'The Maitri\'s yoga path is a practical guide for the mind that cannot achieve direct knowledge immediately. The six steps purify and still the mind until it becomes capable of receiving the direct vision of the self.',
    ramanuja: 'The self described as a spark of the divine fire supports Vishishtadvaita: individual selves are real sparks of Brahman — of the same nature but distinct in their individuality.',
    fascinatingFacts: [
      'King Brihadratha standing in the forest "looking at his body with disgust" is the most extreme statement of vairagya (dispassion) as the starting point for spiritual inquiry in any Upanishad.',
      'The Maitri\'s six-fold yoga path anticipates Patanjali\'s eight-limbed yoga by several centuries — showing that systematic yoga philosophy was developing in the Upanishadic tradition before it was codified.',
      'The Maitri contains one of the most extensive treatments of the three gunas (sattva, rajas, tamas) in any Upanishad — showing the integration of Samkhya philosophy into the Upanishadic framework.',
      'The Maitri is sometimes called the Maitrayaniya Upanishad — "of the Maitrayanas," a school of the Krishna Yajurveda. Its late composition (300 BCE) makes it the last of the classical Upanishads.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'राजा ब्रिहद्रथः ... शरीरे वैराग्यमुपेत्य\nइमं लोकमनित्यं मत्वा ।\nकिमेतेन कर्मणा इति ॥',
        transliteration: 'rājā bṛhadrathaḥ ... śarīre vairāgyam upetya imaṃ lokam anityaṃ matvā / kim etena karmaṇā iti',
        englishTranslation: 'King Brihadratha, having come to dispassion toward the body, and considering this world to be impermanent, thought: what is the use of this activity?',
        source: 'Maitri Upanishad 1.1',
        significance: 'The opening of the Maitri — a king at the peak of worldly achievement asking the question that only complete disillusionment can generate. This is the Upanishadic archetype of vairagya (dispassion) as the prerequisite for genuine inquiry.'
      }
    ]
  },
  {
    _type: 'upanishad',
    _id: 'upanishad-kaushitaki',
    name: 'Kauṣītaki',
    slug: { current: 'kaushitaki' },
    devanagari: 'कौषीतकि',
    transliteration: 'Kauṣītaki',
    vedaFamily: 'rigveda',
    philosophicalThread: 'consciousness',
    period: '~600 BCE',
    importance: 5,
    constellationX: 100,
    constellationY: 320,
    teacher: 'Chitra Gargyayani',
    student: 'Shvetaketu and his father Aruni',
    summary: 'One of the two Rigvedic Upanishads. Contains the teaching on pranavidya (knowledge of breath as Brahman) and the path of the soul after death. Features the unusual situation where a low-caste teacher (a royal) teaches a brahmin — reversing the expected social hierarchy through the priority of knowledge.',
    scene: 'Shvetaketu and his father Aruni arrive at the sacrifice of King Chitra Gargyayani. The king asks Shvetaketu if his father has taught him the path to the world of Brahman. Shvetaketu says no. The king says: then come, I will teach you. The father accompanies his son as a student — the son\'s admission of ignorance brings them both to a teacher who is technically their social inferior.',
    centralTeaching: 'Prana (breath-consciousness) is Brahman. The path of the soul after death — two paths, as in the Chandogya and Brihadaranyaka. The gates of Brahman\'s world: those who know the answers to the guardian\'s questions pass through. Knowledge of prana as Brahman is the supreme knowledge.',
    commentary: 'The Kaushitaki is notable for its social inversion: a kshatriya king teaching brahmin students. This motif appears in several Upanishads and is never accidental — it signals that Vedic knowledge transcends the social category of the one who possesses it. The pranavidya teaching is an early formulation of what becomes central to Samkhya and Yoga: the identification of consciousness with the life force.',
    shankara: 'The Kaushitaki\'s prana is not mere physical breath but the cosmic life-consciousness — another name for Brahman as the inner self of all living beings.',
    ramanuja: 'The Kaushitaki supports the teaching that Brahman as prana is the inner controller of the body — a living personal God who sustains all beings from within.',
    fascinatingFacts: [
      'The Kaushitaki is one of only two principal Upanishads belonging to the Rigveda — the other being the Aitareya. Both transmit the Rigvedic philosophical tradition\'s deepest insight.',
      'King Chitra teaching brahmins reverses the expected social hierarchy — a motif that appears in the Chandogya (a king teaching Uddalaka\'s son) and the Brihadaranyaka (King Janaka teaching brahmins). Knowledge outranks birth.',
      'The detailed description of the post-death journey in the Kaushitaki (1.1-2) is one of the most complete ancient accounts of what happens after death — comparable to the Egyptian Book of the Dead but from a consciousness rather than ritual perspective.',
      'The gates of Brahman\'s world described in the Kaushitaki require the soul to correctly answer questions about cosmic correspondences — a teaching that the entire universe is interconnected through consciousness.'
    ],
    keyPassages: [
      {
        _key: 'p1',
        devanagari: 'प्राणो ब्रह्म, कं ब्रह्म, खं ब्रह्मेति ।',
        transliteration: 'prāṇo brahma, kaṃ brahma, khaṃ brahma iti',
        englishTranslation: 'Prana is Brahman, joy is Brahman, space is Brahman.',
        source: 'Kaushitaki Upanishad 3.3',
        significance: 'The triple identification of Brahman with prana (life), kam (joy), and kha (space) — showing Brahman as both the life force of individual beings and the infinite space in which all existence appears.'
      }
    ]
  }
];

async function seed() {
  console.log('Seeding 13 principal Upanishads...\n');
  for (const u of upanishads) {
    try {
      await client.createOrReplace(u as Parameters<typeof client.createOrReplace>[0]);
      console.log(`✓ ${u.name}`);
    } catch (err) {
      console.error(`✗ ${u.name} failed:`, err);
    }
  }
  console.log('\nDone. All 13 Upanishads seeded.');
}

seed();
