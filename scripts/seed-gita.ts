/**
 * Seed all 18 Bhagavad Gita chapters into Sanity.
 * Run: npm run seed:gita
 * Requires SANITY_WRITE_TOKEN in .env.local or environment.
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// ─── Load .env.local ─────────────────────────────────────────────────────────

try {
  const envPath = resolve(__dirname, '../.env.local');
  const env = readFileSync(envPath, 'utf-8');
  for (const line of env.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const k = trimmed.slice(0, eqIdx).trim();
    const v = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[k]) process.env[k] = v;
  }
} catch {
  // rely on real env vars if .env.local is absent
}

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('❌  SANITY_WRITE_TOKEN is not set. Add it to .env.local and retry.');
  process.exit(1);
}

// ─── Sanity client ────────────────────────────────────────────────────────────

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

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ShlokaInput {
  _key: string;
  devanagari: string;
  transliteration?: string;
  englishTranslation?: string;
  source?: string;
  significance?: string;
}

interface ChapterInput {
  _type: 'gitaChapter';
  _id: string;
  chapterNumber: number;
  name: string;
  devanagari: string;
  englishName: string;
  yogaPath: string;
  shlokasCount: number;
  scene: string;
  speakers: string;
  centralTeaching: string;
  commentary: string;
  fascinatingFacts: string[];
  shlokas: ShlokaInput[];
}

const chapters: ChapterInput[] = [
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-1',
    chapterNumber: 1,
    name: 'Arjuna Viṣāda',
    devanagari: 'अर्जुन विषाद',
    englishName: 'The despair of Arjuna',
    yogaPath: 'karma',
    shlokasCount: 47,
    scene: 'The Gita does not begin with Arjuna or Krishna. It begins with the blind king Dhṛtarāṣṭra, sitting in his palace at Hastināpura, asking his minister Sañjaya: "What is happening on the battlefield of Kurukshetra?" Sañjaya — gifted with divine sight by the sage Vyāsa — narrates the entire Gita to the king in real time. This means the Gita is a twice-told story: first spoken by Krishna to Arjuna, simultaneously narrated by Sañjaya to Dhṛtarāṣṭra. The two armies are arrayed across from each other. The conch shells have been blown. The battle is about to begin.',
    speakers: 'Dhṛtarāṣṭra asks Sañjaya what is happening → Sañjaya describes both armies assembled → Duryodhana surveys the Pandava forces and speaks to his teacher Dronacharya → Both sides blow their conch shells → Arjuna asks Krishna to place his chariot between both armies → Arjuna sees his teachers, uncles, sons, grandfathers facing him across the battlefield → Arjuna collapses, his bow slipping from his hand.',
    centralTeaching: 'Chapter 1 establishes the dramatic frame: a just war that feels unjust to the man who must fight it. Arjuna\'s grief is not weakness — it is the authentic human confrontation with dharmic paradox. Without this crisis, there would be no Gita. The chapter ends not with a teaching but with a question: how should a person act when every available action seems wrong?',
    commentary: 'Chapter 1 is unique — Krishna says nothing. He is Arjuna\'s charioteer, but has not yet revealed himself as the divine teacher. The silence of God at the moment of human crisis is itself a teaching. Arjuna must reach the absolute bottom of his despair before he can truly hear. The word Viṣāda (despair) becomes the title of this chapter — Indian spiritual tradition uniquely honours the crisis as the beginning, not the obstacle to the path.',
    fascinatingFacts: [
      'The Gita opens with a question from a blind king — the perfect metaphor for a mind that cannot see dharma clearly. Dhritarashtra\'s blindness is both physical and moral: he knows Duryodhana is wrong, yet enables him.',
      'Sañjaya\'s divine sight means the Gita was witnessed and narrated simultaneously to a blind king in real time — making it a live transmission, not a remembered account.',
      'Arjuna\'s physical symptoms of collapse (1.29-30) — trembling limbs, parched mouth, hair standing on end — are textbook descriptions of acute anxiety. The Gita begins with a clinical portrait of a panic attack.',
      'Krishna\'s first chariot placement between the armies (1.24) is an act of complete obedience to his friend. At this point Krishna is still serving, not yet teaching.'
    ],
    shlokas: [
      {
        _key: 's1-1',
        devanagari: 'धृतराष्ट्र उवाच —\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥',
        transliteration: 'dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ / māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya',
        englishTranslation: 'Dhritarashtra spoke: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy field of Kurukshetra, eager to fight?',
        source: 'BG 1.1',
        significance: 'The very first verse of the Gita — and it is spoken not by Krishna but by a blind, anxious king. The opening question frames everything: on a field called both dharma-kshetra (field of dharma) and kuru-kshetra (field of the Kurus), what actually happens?'
      },
      {
        _key: 's1-2',
        devanagari: 'सीदन्ति मम गात्राणि मुखं च परिशुष्यति ।\nवेपथुश्च शरीरे मे रोमहर्षश्च जायते ॥',
        transliteration: 'sīdanti mama gātrāṇi mukhaṃ ca pariśuṣyati / vepathuś ca śarīre me roma-harṣaś ca jāyate',
        englishTranslation: 'My limbs fail and my mouth is parched. My body quivers and my hair stands on end.',
        source: 'BG 1.29',
        significance: 'Arjuna\'s physical collapse. The body knows the truth before the mind can articulate it. This is the Gita\'s first honest moment — a great warrior admitting he cannot function.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-2',
    chapterNumber: 2,
    name: 'Sāṅkhya Yoga',
    devanagari: 'साङ्ख्य योग',
    englishName: 'The yoga of knowledge',
    yogaPath: 'karma',
    shlokasCount: 72,
    scene: 'Arjuna is sitting in the chariot between the two armies, weeping, his bow Gandiva slipping from his hands. Krishna has been completely silent throughout Chapter 1 — listening, watching, waiting. Now, for the first time, he speaks. He begins not with comfort but with a sharp challenge: "This grief of yours is unbecoming, Arjuna. Do not yield to impotence." The Gita\'s actual teaching begins here.',
    speakers: 'Arjuna makes his final case for not fighting — a coherent philosophical argument, not just emotional collapse → Krishna speaks for the first time, beginning with the immortality of the soul → Krishna covers Sankhya philosophy, the eternal Atman, duty, dishonour, Nishkama Karma → Krishna ends with the extended portrait of the Sthitaprajna — the man of steady wisdom.',
    centralTeaching: 'The immortality of the soul: weapons cannot cut it, fire cannot burn it. Nishkama Karma — action without attachment to fruits. The Sthitaprajna — what does an enlightened person look like, speak like, act like in daily life? Chapter 2 is the Gita\'s metaphysical foundation and practical guide compressed into 72 verses.',
    commentary: 'Chapter 2 is sometimes called the Gita-sara — the essence of the Gita. Some teachers say that if you truly understand Chapter 2, you have understood the whole. The Sthitaprajna passage (2.55-72) — 18 verses describing the person of steady wisdom — reads like a precise psychological manual for living. BG 2.47 (karmanye vadhikaraste) is carved on the walls of India\'s Parliament.',
    fascinatingFacts: [
      'BG 2.47 — "You have the right to action, never to its fruits" — is the single most quoted verse in Indian philosophy, politics, and daily life. It appears in Gandhi\'s collected works more than any other verse.',
      'The Sthitaprajna portrait (2.55-72) was Gandhi\'s personal daily meditation — he read these 18 verses every morning for decades until his death.',
      'Chapter 2 introduces all three yoga paths simultaneously — Sankhya/Jnana, Karma, and the seeds of Bhakti — making it the structural skeleton on which the entire Gita hangs.',
      'Krishna\'s first word in the entire Gita is "Kutaḥ" — "From where?" He is asking: from where has this weakness come to you at this crucial moment? The teaching begins with a diagnostic question.'
    ],
    shlokas: [
      {
        _key: 's2-1',
        devanagari: 'न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ॥',
        transliteration: 'na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ / ajo nityaḥ śāśvato\'yaṃ purāṇo na hanyate hanyamāne śarīre',
        englishTranslation: 'It is never born, nor does it ever die. It has not come into being and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
        source: 'BG 2.20',
        significance: 'The foundational verse on the immortality of the Atman. This single verse contains the entire Vedantic metaphysics: the soul is not subject to the categories of time, causation, or death.'
      },
      {
        _key: 's2-2',
        devanagari: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
        transliteration: 'karmaṇy evādhikāras te mā phaleṣu kadācana / mā karma-phala-hetur bhūr mā te saṅgo\'stv akarmaṇi',
        englishTranslation: 'You have the right to perform your duties, but never to the fruits of your actions. Let not the fruits be your motive, nor let attachment be to inaction.',
        source: 'BG 2.47',
        significance: 'Perhaps the single most famous verse in the entire Gita. The foundational principle of Nishkama Karma — action without desire for results. Inscribed on the walls of India\'s Parliament building.'
      },
      {
        _key: 's2-3',
        devanagari: 'स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव ।\nस्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ॥',
        transliteration: 'sthita-prajñasya kā bhāṣā samādhi-sthasya keśava / sthita-dhīḥ kiṃ prabhāṣeta kim āsīta vrajeta kim',
        englishTranslation: 'O Keshava, what is the description of one whose wisdom is steady, who is fixed in meditation? How does the man of steady wisdom speak? How does he sit? How does he walk?',
        source: 'BG 2.54',
        significance: 'Arjuna\'s question that opens the Sthitaprajna section — the Gita\'s most practical teaching. He is asking: what does an enlightened person actually look like in daily life? Krishna\'s answer spans 18 verses.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-3',
    chapterNumber: 3,
    name: 'Karma Yoga',
    devanagari: 'कर्म योग',
    englishName: 'The yoga of action',
    yogaPath: 'karma',
    shlokasCount: 43,
    scene: 'Arjuna is confused. Krishna has just said that knowledge is superior to action — so why is he urging Arjuna to fight? This apparent contradiction becomes the central question of Chapter 3. Krishna resolves it by showing that the renunciation of action is impossible — the three gunas compel all beings to act always. The question is not whether to act, but how.',
    speakers: 'Arjuna poses the apparent contradiction (if knowledge is higher than action, why fight?) → Krishna explains that action cannot be avoided — even inaction is a form of action → Krishna introduces svadharma over paradharma → Krishna teaches Lokasamgraha — acting for the holding together of the world → Arjuna asks about the force that drives people to sin against their will → Krishna identifies desire and anger as the great enemies.',
    centralTeaching: 'Act without attachment to results. Your own dharma, imperfectly performed, is better than another\'s dharma perfectly performed. Why action is unavoidable — even inaction is a form of action rooted in the gunas. Lokasamgraha — acting for the welfare of the world as a whole, not just personal liberation.',
    commentary: 'Chapter 3 is where the Gita stops being philosophy and becomes instruction. Krishna\'s argument is elegant: you cannot not act. Even sitting still, even sleeping — all are forms of action driven by the gunas. Since action is unavoidable, the question becomes: what kind of action? Nishkama karma — action without personal stake in the outcome — is the answer. The great ones set an example by acting this way, and others follow them.',
    fascinatingFacts: [
      'The concept of Lokasamgraha (3.20) — acting for the holding together of the world — is one of the earliest formulations of social responsibility and civic duty in any ancient text anywhere.',
      'Krishna\'s statement that he himself acts (3.22) even though there is nothing he needs to attain is one of the most radical claims in the text: God acts out of pure grace, not necessity.',
      'The identification of desire and anger as the two great enemies (3.37) — with desire described as "insatiable like fire" — was cited by Freud\'s contemporaries as a precursor to the theory of the drives.',
      'Svadharma over paradharma (3.35) — performing one\'s own duty however imperfect, rather than another\'s duty however excellent — is the philosophical foundation of varna dharma and has been both celebrated and contested ever since.'
    ],
    shlokas: [
      {
        _key: 's3-1',
        devanagari: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥',
        transliteration: 'śreyān svadharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt / svadharme nidhanaṃ śreyaḥ para-dharmo bhayāvahaḥ',
        englishTranslation: 'Better is one\'s own dharma, though imperfectly performed, than the dharma of another well-performed. Better is death in one\'s own dharma — the dharma of another brings fear.',
        source: 'BG 3.35',
        significance: 'The foundational principle of svadharma — one of the most discussed and debated verses in the entire Gita. Ambedkar critiqued it; Tilak celebrated it; Gandhi read it as a call to authentic selfhood.'
      },
      {
        _key: 's3-2',
        devanagari: 'काम एष क्रोध एष रजोगुणसमुद्भवः ।\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ॥',
        transliteration: 'kāma eṣa krodha eṣa rajo-guṇa-samudbhavaḥ / mahāśano mahā-pāpmā viddhy enam iha vairiṇam',
        englishTranslation: 'It is desire, it is anger, born of the quality of rajas — all-devouring, greatly sinful. Know this to be the enemy here.',
        source: 'BG 3.37',
        significance: 'Krishna names the two great enemies of human action: desire and anger. Both arise from rajas — the quality of passionate activity. This verse begins the Gita\'s psychology of the obstacles to right action.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-4',
    chapterNumber: 4,
    name: 'Jñāna Yoga',
    devanagari: 'ज्ञान योग',
    englishName: 'The yoga of wisdom',
    yogaPath: 'karma',
    shlokasCount: 42,
    scene: 'Krishna pauses the practical instruction and makes a startling historical claim: "I taught this imperishable yoga to the Sun god Vivasvat at the beginning of creation. He taught it to Manu. Manu taught it to Ikshvaku." Arjuna is confused — Krishna is his contemporary, his friend, his cousin. How could he have taught this at the beginning of time? Krishna then reveals the doctrine of the avatar.',
    speakers: 'Krishna reveals the ancient lineage of the Gita\'s teaching → Arjuna asks how Krishna could have taught this at the beginning of time → Krishna reveals the avatar doctrine → Krishna teaches that all actions done as yajna (sacrifice) become liberation → Krishna praises knowledge as the supreme purifier.',
    centralTeaching: 'The avatar doctrine — whenever dharma declines, Krishna manifests. Yajna as the principle of sacrifice underlying all action. Knowledge as the boat that crosses the ocean of all evil. The teacher-disciple relationship as the proper vehicle for this knowledge.',
    commentary: 'Chapter 4 shifts the Gita from the immediate crisis of Kurukshetra to cosmic time. Krishna\'s claim to have taught this at the beginning of creation radically re-frames who he is. He is not just Arjuna\'s charioteer or even a divine teacher — he is the source and re-revealer of eternal knowledge across cycles of time. The avatar declaration (4.7-8) is the theological cornerstone of all Vaishnavism.',
    fascinatingFacts: [
      'The avatar declaration (4.7-8) — whenever dharma declines I manifest myself — is the single most quoted theological statement from the Gita in all of Vaishnavism and the foundation of the entire Bhagavata tradition.',
      'Krishna tells Arjuna "you and I have had many previous births — I remember them all, you do not" (4.5). This is the Gita\'s most direct statement on reincarnation — and on the asymmetry between divine and human consciousness.',
      'The concept of the four varnas arising from the gunas (4.13) contains a crucial qualifier: "though I am their creator, know me as the non-doer, unchangeable." The varnas arise from nature, not from divine command.',
      'Chapter 4 introduces the guru-shishya relationship as the proper vehicle for this knowledge (4.34) — "approach a teacher with humility, serve him, question him. The wise who have seen the truth will teach you."'
    ],
    shlokas: [
      {
        _key: 's4-1',
        devanagari: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥',
        transliteration: 'yadā yadā hi dharmasya glānir bhavati bhārata / abhyutthānam adharmasya tadātmānaṃ sṛjāmy aham',
        englishTranslation: 'Whenever and wherever dharma declines and adharma rises, O Bharata, at that time I manifest myself.',
        source: 'BG 4.7',
        significance: 'The avatar declaration — the single verse upon which the entire Vaishnava theological tradition rests. God enters history when history needs him. This verse is recited at every major Vaishnava ceremony worldwide.'
      },
      {
        _key: 's4-2',
        devanagari: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।',
        transliteration: 'na hi jñānena sadṛśaṃ pavitram iha vidyate',
        englishTranslation: 'There is nothing in this world as purifying as knowledge.',
        source: 'BG 4.38',
        significance: 'One of the Gita\'s most direct statements on the supreme value of knowledge. Not ritual, not action, not devotion alone — knowledge is the highest purifier.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-5',
    chapterNumber: 5,
    name: 'Karma Sanyāsa',
    devanagari: 'कर्म सन्यास',
    englishName: 'Renunciation of action',
    yogaPath: 'karma',
    shlokasCount: 29,
    scene: 'Arjuna has now heard Krishna advocate both renunciation of action and performance of action. He asks directly: which is better? Krishna\'s answer surprises him — both lead to the same destination, but Karma Yoga (action in the world) is easier for most people. True renunciation is not the absence of action but the absence of the sense of personal doership.',
    speakers: 'Arjuna asks which is better — renunciation or action → Krishna explains that both lead to liberation but Karma Yoga is easier → Krishna describes the Sankhya-Yoga distinction → Krishna describes the liberated person who acts in the world without being touched by it → Krishna closes with the vision of the peaceful sage.',
    centralTeaching: 'Renunciation and action are not opposed paths — they are the same path approached differently. The truly wise person acts fully in the world but without the sense of being the doer. Liberation is not withdrawal from life — it is full engagement without attachment.',
    commentary: 'Chapter 5 is the reconciliation chapter. It resolves the apparent contradiction between action and renunciation that has run through Chapters 2-4. The key insight is subtle: what needs to be renounced is not action itself but the claim of personal ownership over action and its results. The person who has renounced the sense of doership can act freely — indeed must act freely — without karmic consequence.',
    fascinatingFacts: [
      'The vision of equality in 5.18 — the yogi who sees the same in a brahmin, a cow, an elephant, and a dog — is one of the most radical statements of spiritual equality in all ancient Indian literature.',
      'Chapter 5 contains the first description of Brahma-nirvana (5.24-26) — the Buddhist term nirvana appears here in the Gita, pointing to the shared conceptual vocabulary of the two traditions.',
      'Krishna\'s description of the sage who has "made the sky their skull, the earth their seat, and abandons all desires" (5.28) is a portrait of the Vedic tradition of forest renunciation that predates the Gita by thousands of years.',
      'This short chapter (only 29 shlokas) is the philosophical midpoint of the Karma Yoga section — it resolves all apparent contradictions before Chapter 6 takes up the practice of meditation.'
    ],
    shlokas: [
      {
        _key: 's5-1',
        devanagari: 'ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः ।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥',
        transliteration: 'brahmaṇy ādhāya karmāṇi saṅgaṃ tyaktvā karoti yaḥ / lipyate na sa pāpena padma-patram ivāmbhasā',
        englishTranslation: 'One who acts by placing all actions in Brahman, abandoning attachment, is not touched by sin — like a lotus leaf untouched by water.',
        source: 'BG 5.10',
        significance: 'The lotus metaphor — one of the most enduring images in Indian philosophy. The lotus lives in water but its surface remains dry. The liberated person lives in the world of action but is not touched by its results.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-6',
    chapterNumber: 6,
    name: 'Dhyāna Yoga',
    devanagari: 'ध्यान योग',
    englishName: 'The yoga of meditation',
    yogaPath: 'karma',
    shlokasCount: 47,
    scene: 'The Karma Yoga section climaxes with practical instruction on meditation. Krishna describes the physical posture, the mental technique, the experience of samadhi. Arjuna listens carefully — then raises the most humanly relatable objection in the entire Gita: the mind is too restless for meditation. It is "more difficult to control than the wind."',
    speakers: 'Krishna gives detailed instructions on meditation posture and practice → Krishna describes the state of samadhi and its signs → Arjuna objects that the mind is impossible to control → Krishna acknowledges the difficulty and offers practice and detachment as the means → Arjuna asks the most compassionate question of the Gita: what happens to a sincere yogi who falls short of the goal? → Krishna answers that no spiritual effort is ever wasted.',
    centralTeaching: 'The practice of meditation — posture, technique, the signs of progress. The mind as both friend and enemy. What happens to a yogi who tries and fails? No effort on the spiritual path is ever lost — the unsuccessful yogi is reborn in a good family and continues from where they left off.',
    commentary: 'Chapter 6 closes the first great section of the Gita. It is the most practically focused chapter — giving actual instructions for meditation practice that are still followed today. Arjuna\'s objection that the mind is harder to control than the wind is the most relatable moment in the text — every meditator has felt this. Krishna\'s answer that practice and non-attachment are the two means is the entire method of yoga in two words.',
    fascinatingFacts: [
      'Arjuna\'s complaint that the mind is more difficult to control than the wind (6.34) is the most universally relatable verse in the entire Gita — every human being who has tried to sit quietly for five minutes has felt exactly this.',
      'Krishna\'s answer to "what happens to someone who tries and fails?" (6.37-45) is one of the most compassionate passages in all scripture — no effort is ever lost, the unsuccessful yogi continues in the next life.',
      'The physical meditation instructions (6.11-14) — a specific posture, a specific seat of kusha grass, a specific gaze at the tip of the nose — are the most detailed yoga instructions in the entire Gita and clearly describe a practice already ancient at the time of composition.',
      'Chapter 6 contains the statement that the yogi is greater than the ascetic, greater than the man of knowledge, greater than the man of ritual action (6.46) — placing the meditative path above all others at this point in the text.'
    ],
    shlokas: [
      {
        _key: 's6-1',
        devanagari: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥',
        transliteration: 'uddhared ātmanātmānaṃ nātmānam avasādayet / ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ',
        englishTranslation: 'Let a person lift themselves by themselves; let them not degrade themselves. For the self alone is the friend of the self, and the self alone is the enemy of the self.',
        source: 'BG 6.5',
        significance: 'The Gita\'s most direct statement on self-responsibility. You are both your own liberator and your own obstacle. No external force can save or damn you — only your own choices and efforts.'
      },
      {
        _key: 's6-2',
        devanagari: 'असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥',
        transliteration: 'asaṃśayaṃ mahābāho mano durnigrahaṃ calam / abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate',
        englishTranslation: 'Undoubtedly, O mighty-armed one, the mind is difficult to control and restless. But by practice and by detachment, O Kaunteya, it can be controlled.',
        source: 'BG 6.35',
        significance: 'Krishna acknowledges the difficulty Arjuna has raised — the mind really is hard to control. His answer contains the entire method of yoga: abhyasa (practice) and vairagya (non-attachment).'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-7',
    chapterNumber: 7,
    name: 'Jñāna Vijñāna',
    devanagari: 'ज्ञान विज्ञान',
    englishName: 'Knowledge and wisdom',
    yogaPath: 'bhakti',
    shlokasCount: 30,
    scene: 'The second great section of the Gita opens. The tone shifts dramatically from philosophical instruction to intimate revelation. Krishna has been speaking as a teacher. Now he speaks as God directly revealing himself. "Listen — I will tell you fully how, knowing me, there will be nothing else left to know." The Bhakti section begins.',
    speakers: 'Krishna promises a complete revelation → Krishna describes his lower nature (the eight elements) and higher nature (the living beings) → Krishna declares himself the source of all existence → Krishna describes the divine maya that veils his true nature → Krishna identifies the four types of devotees → Krishna distinguishes between those who worship other devas and those who worship him directly.',
    centralTeaching: 'Krishna as the source and substrate of all existence — like the thread running through all pearls. Para prakriti and apara prakriti — the higher and lower aspects of divine nature. Maya as the divine power of illusion that belongs to Krishna himself. The four types of devotees: the distressed, the seeker of knowledge, the seeker of wealth, and the wise.',
    commentary: 'Chapter 7 marks the Gita\'s pivot from philosophy to bhakti. The intellectual framework has been laid in Chapters 2-6. Now Krishna reveals himself not as a teacher but as the object of knowledge itself. The concept of maya here is subtle — it is not illusion in the sense of unreality, but the power by which the infinite appears as finite.',
    fascinatingFacts: [
      'The four types of devotees (7.16) — the distressed, the seeker of knowledge, the seeker of wealth, and the wise — is the Gita\'s complete taxonomy of human motivation for approaching the divine.',
      'Krishna\'s statement that "very rarely does one know me in truth" (7.3) is not a discouragement but a sober acknowledgment of the rarity of genuine realisation.',
      'The verse "I am the taste in water, the light in the sun and moon, the sound in space" (7.8) is the Gita\'s most poetic statement of panentheism — God present in all sensory experience as its essential quality.',
      'Krishna says those who worship other devas worship him, but by indirect means (7.22-23) — a statement of extraordinary theological generosity that encompasses all forms of worship within a single framework.'
    ],
    shlokas: [
      {
        _key: 's7-1',
        devanagari: 'मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ।',
        transliteration: 'mayi sarvam idaṃ protaṃ sūtre maṇigaṇā iva',
        englishTranslation: 'All this is strung on me as clusters of gems on a thread.',
        source: 'BG 7.7',
        significance: 'One of the most beautiful metaphors in the Gita. The entire universe — all its diversity and apparent multiplicity — is held together by a single invisible thread: Krishna\'s own being.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-8',
    chapterNumber: 8,
    name: 'Akṣara Brahma',
    devanagari: 'अक्षर ब्रह्म',
    englishName: 'The imperishable Brahman',
    yogaPath: 'bhakti',
    shlokasCount: 28,
    scene: 'Arjuna has seven precise questions: What is Brahman? What is adhyatma? What is karma? What is adhibhuta? What is adhidaiva? What is adhiyajna? And — how can one know you at the time of death? This chapter answers all seven and then expands into the Gita\'s most extensive cosmological teaching: the vast cycles of cosmic time.',
    speakers: 'Arjuna asks seven precise theological questions → Krishna answers each precisely → Krishna teaches the critical importance of the final thought at the moment of death → Krishna describes Brahma\'s day and night — each 4.32 billion years → Krishna describes the two cosmic paths of the soul after death → Krishna declares himself beyond both paths.',
    centralTeaching: 'Whatever state a person remembers at the moment of death, that state they attain. The imperishable Brahman is the ultimate reality. The vast cycles of cosmic time — even Brahma\'s day is temporary. The two paths after death: the northern path of no return and the southern path of return.',
    commentary: 'Chapter 8 is the Gita\'s most cosmological chapter — its canvas is vast. The teaching on death-consciousness is not a superstition but a precise statement about the continuity of mental formation across lifetimes. Whatever occupies the mind most powerfully throughout life will be what arises at the final moment.',
    fascinatingFacts: [
      'Brahma\'s day as 4.32 billion years (8.17) — stated here as cosmic fact — is remarkably close to the current scientific estimate of Earth\'s age (4.54 billion years), arrived at through a completely different method.',
      'The teaching that consciousness at the moment of death determines the next birth (8.6) is the Gita\'s most direct statement on karma across lifetimes.',
      'The two post-death paths (8.24-26) — the path of fire/light (no return) and the path of smoke/night (return) — map onto the Chandogya Upanishad\'s teaching on devayāna and pitṛyāna.',
      'Krishna\'s statement that "even knowing these two paths, the yogi is not deluded" (8.27) implies that cosmological knowledge itself is a form of liberation.'
    ],
    shlokas: [
      {
        _key: 's8-1',
        devanagari: 'अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् ।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः ॥',
        transliteration: 'anta-kāle ca mām eva smaran muktvā kalevaram / yaḥ prayāti sa mad-bhāvaṃ yāti nāsty atra saṃśayaḥ',
        englishTranslation: 'Whoever, at the time of death, remembers me alone, having abandoned the body, reaches my state. Of this there is no doubt.',
        source: 'BG 8.5',
        significance: 'The teaching on death-consciousness. The final thought at the moment of death carries the full weight of a lifetime\'s formation. This is why the Indian tradition emphasises practice throughout life.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-9',
    chapterNumber: 9,
    name: 'Rāja Vidyā',
    devanagari: 'राज विद्या',
    englishName: 'The royal knowledge',
    yogaPath: 'bhakti',
    shlokasCount: 34,
    scene: 'Krishna moves into the most intimate register of the entire Gita. He calls what he is about to reveal "the royal science, the royal secret, the supreme purifier — understood by direct experience, easy to perform, imperishable." The emotional temperature of the text rises sharply. This is no longer philosophy — it is a personal declaration of love.',
    speakers: 'Krishna alone speaks throughout this chapter — there are no interruptions from Arjuna. This is the most unbroken divine monologue in the Gita. Krishna reveals himself as the ground of all existence, the object of all worship, the one who carries what devotees lack and preserves what they have.',
    centralTeaching: 'The royal science, the royal secret: all of this universe is pervaded by Krishna in his unmanifest form. He is not contained in beings, yet beings are contained in him. Devotion as the direct path. Even the most sinful person, by the boat of knowledge, crosses the ocean of all evil. Krishna\'s promise to carry the burdens of those who worship with undivided attention.',
    commentary: 'Chapter 9 is the emotional and devotional peak of the Bhakti section. The theological claim reaches its maximum: Krishna is not merely the source of the universe, he is its ongoing sustainer who actively carries those who surrender to him. The verse "api cet sudurācāro" (9.30) is perhaps the most radical statement of divine grace in all of ancient literature.',
    fascinatingFacts: [
      '"Even the worst sinner, if devoted to me, shall be considered righteous, for he has rightly resolved" (9.30) — this verse has been used for 2,000 years as the definitive Indian statement on grace over works.',
      'The declaration "I am equally present in all beings — there is none hateful or dear to me" (9.29) is the Gita\'s most direct statement of divine impartiality.',
      'This chapter is called both Raja Vidya (royal science) and Raja Guhya (royal secret) — the double superlative appears nowhere else in the Gita.',
      'Krishna\'s promise to personally carry what devotees lack and preserve what they have (9.22) — yoga-kṣemaṃ vahāmy aham — became the motto of the Life Insurance Corporation of India.'
    ],
    shlokas: [
      {
        _key: 's9-1',
        devanagari: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥',
        transliteration: 'ananyāś cintayanto māṃ ye janāḥ paryupāsate / teṣāṃ nityābhiyuktānāṃ yoga-kṣemaṃ vahāmy aham',
        englishTranslation: 'For those who worship me with single-minded devotion, always united with me, I carry what they lack and preserve what they have.',
        source: 'BG 9.22',
        significance: 'Krishna\'s personal promise. Yoga-kshema — providing what is needed (yoga) and preserving what is already there (kshema). This became the motto of the Life Insurance Corporation of India.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-10',
    chapterNumber: 10,
    name: 'Vibhūti Yoga',
    devanagari: 'विभूति योग',
    englishName: 'The yoga of divine manifestations',
    yogaPath: 'bhakti',
    shlokasCount: 42,
    scene: 'Arjuna has been listening for nine chapters. He now speaks — and it is not a question but an expression of wonder and a request for more. "Tell me again, in full, of your divine powers and manifestations. I am never satiated hearing of you." Krishna responds with the most comprehensive catalogue of divine self-expression in all of Sanskrit literature.',
    speakers: 'Arjuna speaks first in this chapter — not with confusion but with devotion, asking for more → Krishna lists 55 vibhutis — divine manifestations in the natural, cosmic, and human world → Krishna closes with the summary statement: wherever there is excellence, wherever there is beauty, know that a fragment of my glory has arisen there.',
    centralTeaching: 'Every excellence in creation is a partial expression of Krishna\'s infinite glory. Among the Vedas, he is the Samaveda. Among the senses, he is the mind. Among rivers, he is the Ganga. Among seasons, he is flower-bearing spring. The entire catalogue is a meditation technique — by contemplating the best of everything, one contemplates the divine.',
    commentary: 'Chapter 10 is the Gita\'s most encyclopaedic chapter. The 55 vibhutis are not a theological inventory but a devotional practice — a way of seeing the divine in the world around you. The closing verse (10.42) is the most important: "I support this entire universe by a single fragment of myself."',
    fascinatingFacts: [
      '"Among the Vedas I am the Samaveda" (10.22) is the theological basis for the Samaveda\'s special status in the tradition — not commentary or inference, but Krishna\'s own declaration.',
      'The list of 55 vibhutis includes human categories: among the Pandavas he is Arjuna, among the Vrishnis he is Vasudeva — a delightful self-reference.',
      'The final verse (10.42) — "I support this entire universe by a single fragment of myself" — echoes the Purusha Sukta of the Rigveda.',
      'Chapter 10 is the structural preparation for Chapter 11 — the vibhuti teaching shows Krishna in all things; the Vishvarupa shows all things in Krishna.'
    ],
    shlokas: [
      {
        _key: 's10-1',
        devanagari: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः ।\nअहमादिश्च मध्यं च भूतानामन्त एव च ॥',
        transliteration: 'aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ / aham ādiś ca madhyaṃ ca bhūtānām anta eva ca',
        englishTranslation: 'I am the self, O Gudakesha, seated in the hearts of all beings. I am the beginning, the middle, and the end of all beings.',
        source: 'BG 10.20',
        significance: 'The Gita\'s clearest statement of immanent divinity — God is not outside the creation looking in, but is the very self residing in the heart of every being.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-11',
    chapterNumber: 11,
    name: 'Viśvarūpa',
    devanagari: 'विश्वरूप',
    englishName: 'The cosmic form',
    yogaPath: 'bhakti',
    shlokasCount: 55,
    scene: 'After hearing the vibhuti teaching, Arjuna makes an extraordinary request: "Show me your cosmic form, O Lord, if you think I am able to behold it." Krishna agrees — and grants Arjuna divine sight, because human eyes cannot bear what is about to be shown. What follows is the most visually overwhelming passage in all of Sanskrit literature.',
    speakers: 'Arjuna requests the cosmic vision with reverence → Krishna grants divine sight → Sañjaya describes the vision to Dhṛtarāṣṭra in total awe → Arjuna, overwhelmed with terror, describes what he sees — armies, gods, sages, all creation → Arjuna begs Krishna to return to his gentle form → Krishna reveals his four-armed Vishnu form → then returns to the gentle two-armed human form.',
    centralTeaching: 'The Vishvarupa shows that Krishna contains all of creation — past, present, and future — simultaneously. The armies are already dead; the outcome of the battle is already determined. Liberation from anxiety about results is possible only when you see that what must happen has already happened at the level of cosmic reality.',
    commentary: 'This chapter stands alone in Sanskrit literature. No other text attempts to describe the simultaneous presence of all existence within a single form over 55 verses of sustained vision. Arjuna\'s terror is real and complete. His request to see the "gentle human form" again is one of the most humanly touching moments in all scripture.',
    fascinatingFacts: [
      'Robert Oppenheimer quoted BG 11.32 at the Trinity nuclear test in New Mexico, 16 July 1945 — "I am become death, destroyer of worlds." He said later that the verse came to him immediately when the bomb exploded.',
      'After seeing the full cosmic form, Arjuna asks to see the gentle four-armed Vishnu form — and then the human form. The movement from terror to tenderness is the emotional arc of the entire Bhakti section.',
      'Sañjaya is so overcome by what he has witnessed (even at divine-sight distance) that he himself begins to realise — Chapter 11 is the only chapter where the narrator himself is spiritually affected.',
      'The cosmic form is described as having the mouths of the armies already between Krishna\'s teeth (11.26-27) — the battle\'s outcome is cosmically predetermined.'
    ],
    shlokas: [
      {
        _key: 's11-1',
        devanagari: 'दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता ।\nयदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः ॥',
        transliteration: 'divi sūrya-sahasrasya bhaved yugapad utthitā / yadi bhāḥ sadṛśī sā syād bhāsas tasya mahātmanaḥ',
        englishTranslation: 'If the light of a thousand suns were to blaze simultaneously in the sky, that might resemble the splendour of that great being.',
        source: 'BG 11.12 — Sañjaya\'s description of the Vishvarupa',
        significance: 'The verse Oppenheimer recalled at Trinity. Sañjaya is describing the appearance of the cosmic form. The attempt to find a human analogy fails — a thousand suns is the best language can do.'
      },
      {
        _key: 's11-2',
        devanagari: 'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः ।',
        transliteration: 'kālo\'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ',
        englishTranslation: 'I am Time, the great destroyer of worlds, and I have come to engage all people.',
        source: 'BG 11.32',
        significance: 'The verse quoted by Oppenheimer at Trinity. Krishna reveals himself as Kala — Time itself, which destroys all worlds. The armies are already dead in the cosmic time in which Krishna operates.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-12',
    chapterNumber: 12,
    name: 'Bhakti Yoga',
    devanagari: 'भक्ति योग',
    englishName: 'The yoga of devotion',
    yogaPath: 'bhakti',
    shlokasCount: 20,
    scene: 'After the overwhelming cosmic vision, Arjuna asks a quiet practical question: which is better — worshipping the personal God (with form) or worshipping the formless absolute? Krishna\'s answer will define Vaishnavism. And then he gives the most intimate portrait of the ideal devotee in all of the Gita — 28 qualities in eight verses.',
    speakers: 'Arjuna asks the practical question — personal devotion or formless absolute? → Krishna answers that personal devotion is easier and leads to the same goal → Krishna gives a progressive path for those who cannot do direct devotion → Krishna closes with the Bhakta Lakshana — the 28 qualities of the true devotee.',
    centralTeaching: 'Devotion to the personal God is easier for most people than meditation on the formless absolute — both reach the same destination. The qualities of the true devotee: free from hatred, friendly to all, free from the possessive sense of "mine," equal in pleasure and pain, patient, content, self-controlled.',
    commentary: 'At only 20 shlokas, Chapter 12 is the shortest in the Gita. Yet Ramanujacharya called it the most important of all 18. Sri Ramakrishna reportedly wept every time he read the Bhakta Lakshana passage (12.13-20). The qualities described are a portrait of a person whose inner life has been fundamentally transformed.',
    fascinatingFacts: [
      'At only 20 shlokas, Chapter 12 is the shortest chapter in the Gita — yet Ramanujacharya considered it the most important and wrote his most extended commentary on it.',
      'Sri Ramakrishna wept every time he read the Bhakta Lakshana passage (12.13-20) — 28 qualities of the true devotee. He called it "the complete description of what a human being can become."',
      'The progressive path in 12.8-12 — if you cannot fix your mind on me, practice; if you cannot practice, dedicate all actions to me — is the most compassionate teaching in the Bhakti section.',
      'The closing verse (12.20) calls those who follow this path "supremely dear to me" — the most personally intimate statement Krishna makes in the entire Gita.'
    ],
    shlokas: [
      {
        _key: 's12-1',
        devanagari: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥',
        transliteration: 'adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca / nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī',
        englishTranslation: 'One who is without hatred toward any being, who is friendly and compassionate, free from possessiveness and ego, equal in pleasure and pain, patient —',
        source: 'BG 12.13 — opening of the Bhakta Lakshana',
        significance: 'The beginning of the 28-quality portrait of the ideal devotee. This is not a list of moral requirements but a description of what a person becomes when the ego has genuinely loosened its grip.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-13',
    chapterNumber: 13,
    name: 'Kṣetra-Kṣetrajña',
    devanagari: 'क्षेत्र क्षेत्रज्ञ',
    englishName: 'Field and knower of the field',
    yogaPath: 'jnana',
    shlokasCount: 35,
    scene: 'The third and final section of the Gita opens. The Jnana Yoga section is the most philosophically dense. Arjuna has not asked a question — this chapter begins with Krishna spontaneously introducing a new conceptual framework: the field (kshetra) and the knower of the field (kshetrajna). The body is the field. The soul is the knower of the field.',
    speakers: 'Krishna introduces the kshetra-kshetrajna framework without being asked → Krishna catalogues the 24 elements of the field (the Sankhya cosmology) → Krishna lists 20 qualities of genuine knowledge → Krishna describes Brahman as the ultimate ground → Krishna closes with the vision of the wise person who sees the same Brahman in all beings.',
    centralTeaching: 'The body is the field where the drama of life plays out. The soul is the witness, the knower of the field. The 24 elements of prakriti (matter) and the 25th principle of purusha (consciousness). Genuine knowledge is not information but a direct seeing of reality — described in 20 qualities that include humility, harmlessness, non-attachment, and equanimity.',
    commentary: 'Chapter 13 opens the Gita\'s most intellectually demanding section. The kshetra-kshetrajna distinction is the Sankhya system applied to the Gita\'s theological framework. The key innovation is that paramatma (the supreme self) and jivatma (the individual self) are both in the body — as the two birds of the Rigveda.',
    fascinatingFacts: [
      'The 20 qualities of knowledge (13.7-11) — including "cleanliness, constancy, self-control, absence of ego, perception of the evil of birth-death-old age-sickness-pain" — form the Gita\'s most comprehensive list of what genuine spiritual knowledge feels like from the inside.',
      'The two-birds metaphor from Rigveda 1.164.20 (cited by Dirghatamas) finds its Gita equivalent in Chapter 13 — paramatma and jivatma in the same body, one acting, one simply witnessing.',
      'The vision of equality described in 13.28 — "one who sees the supreme Lord equally present in all beings truly sees" — is the Gita\'s definition of enlightenment stated most directly.',
      'Chapter 13 uses the word brahman 14 times — the highest frequency in any chapter of the Gita.'
    ],
    shlokas: [
      {
        _key: 's13-1',
        devanagari: 'इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते ।\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ॥',
        transliteration: 'idaṃ śarīraṃ kaunteya kṣetram ity abhidhīyate / etad yo vetti taṃ prāhuḥ kṣetrajña iti tad-vidaḥ',
        englishTranslation: 'This body, O Kaunteya, is called the field. One who knows this is called the knower of the field by those who know.',
        source: 'BG 13.2',
        significance: 'The opening conceptual distinction of the Jnana section. The body (kṣetra) is the arena of experience. The soul (kṣetrajña) is the witness of experience. This distinction is the foundation of all Vedantic self-inquiry.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-14',
    chapterNumber: 14,
    name: 'Guṇa Traya',
    devanagari: 'गुण त्रय',
    englishName: 'The three qualities',
    yogaPath: 'jnana',
    shlokasCount: 27,
    scene: 'Krishna now introduces the most comprehensive analytical framework in the entire Gita: the three gunas. These are not moral categories but ontological forces — the three qualities that constitute all of prakriti (matter and nature). Everything that exists is a combination of these three. Understanding them is the key to understanding why people act the way they do.',
    speakers: 'Krishna introduces the three gunas without being asked — continuing the Sankhya framework of Chapter 13 → Krishna describes how each guna binds the soul → Krishna describes the signs of each guna predominating at death → Arjuna asks: what are the signs of one who has transcended the three gunas? → Krishna describes the gunatita — one beyond the gunas.',
    centralTeaching: 'Sattva (clarity, purity, knowledge) binds through attachment to happiness and knowledge. Rajas (passion, activity, desire) binds through attachment to action and its fruits. Tamas (inertia, delusion, darkness) binds through negligence, laziness, and sleep. The goal is not to cultivate sattva but to transcend all three.',
    commentary: 'The three-guna framework is the Gita\'s complete theory of psychology, personality, and cosmic ontology in one model. Every quality of every being — every food preference, every form of worship, every type of knowledge, every kind of action — can be analysed through this lens. Chapters 17 and 18 apply it systematically to every domain of life.',
    fascinatingFacts: [
      'The gunas appear in Sankhya philosophy predating the Gita. But the Gita uniquely applies them to ethics, devotion, food, and action in a systematic way that no prior text had done.',
      'The gunatita (one beyond the gunas) described in 14.22-25 is described identically to the Sthitaprajna of Chapter 2 — confirming that the Gita\'s various descriptions of the enlightened person all point to the same state.',
      'Sattva is described as binding through attachment to happiness and knowledge (14.6) — even the highest quality is a bondage if identified with.',
      'The statement that tamas causes "negligence, laziness, and sleep" (14.8) is the most precise ancient description of what modern psychology calls executive dysfunction.'
    ],
    shlokas: [
      {
        _key: 's14-1',
        devanagari: 'सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः ।\nनिबध्नन्ति महाबाहो देहे देहिनमव्ययम् ॥',
        transliteration: 'sattvaṃ rajas tama iti guṇāḥ prakṛti-sambhavāḥ / nibadhnanti mahābāho dehe dehinam avyayam',
        englishTranslation: 'Sattva, rajas, and tamas — these qualities, born of prakriti, bind the imperishable, embodied self to the body, O mighty-armed one.',
        source: 'BG 14.5',
        significance: 'The introduction of the three-guna framework. All of prakriti — the entire manifest world — is constituted by these three forces. Every human experience, every personality trait, every action is a combination of these three.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-15',
    chapterNumber: 15,
    name: 'Puruṣottama',
    devanagari: 'पुरुषोत्तम',
    englishName: 'The supreme person',
    yogaPath: 'jnana',
    shlokasCount: 20,
    scene: 'Krishna opens with one of the most arresting images in the Gita: an inverted cosmic tree — the Ashvattha — with its roots above and branches below. The roots are Brahman; the branches spread into the material world. To be free from this tree of existence, it must be cut with the axe of non-attachment. Then comes the teaching on the three purushas.',
    speakers: 'Krishna describes the inverted Ashvattha tree → Krishna describes the two purushas: the perishable (matter) and the imperishable (the unchanging absolute) → Krishna reveals himself as the third — Purushottama, the Supreme Person — beyond both → Krishna declares that whoever knows him as Purushottama is all-knowing.',
    centralTeaching: 'The inverted Ashvattha tree of existence — rooted in Brahman above, branching downward into the manifest world. The three purushas: the perishable (all matter), the imperishable (the unchanging absolute), and Purushottama (the Supreme Person — Krishna — who pervades and sustains both). Knowledge of Purushottama is the complete knowledge.',
    commentary: 'Chapter 15 is structurally the pivot of the Jnana section. The Ashvattha tree image is borrowed from the Katha Upanishad and redeployed here with greater theological precision. The three-purusha doctrine is the Gita\'s unique contribution to Vedantic metaphysics — placing a personal God above both the perishable world and the impersonal absolute.',
    fascinatingFacts: [
      'Chapter 15 is recited daily by millions as the "Purushottama Prapti" — tradition holds that reciting these 20 verses daily grants complete understanding of the Gita\'s teaching.',
      'The inverted Ashvattha tree (15.1) with roots above appears also in the Katha Upanishad (2.3.1) — its presence in both texts confirms a shared Vedantic cosmological vocabulary predating the Gita.',
      '"I am seated in the hearts of all; from me comes memory, knowledge, and also their absence" (15.15) is the Gita\'s most direct statement of divine causation of both knowledge and ignorance.',
      'The claim "I alone am to be known by all the Vedas" (15.15) is the theological basis for the entire Vedantic project of reading all Vedic texts as pointing ultimately to one reality.'
    ],
    shlokas: [
      {
        _key: 's15-1',
        devanagari: 'ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम् ।\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित् ॥',
        transliteration: 'ūrdhva-mūlam adhaḥ-śākham aśvatthaṃ prāhur avyayam / chandāṃsi yasya parṇāni yas taṃ veda sa veda-vit',
        englishTranslation: 'The wise speak of an imperishable Ashvattha tree with roots above and branches below, whose leaves are the Vedic hymns. One who knows this tree knows the Vedas.',
        source: 'BG 15.1',
        significance: 'The inverted cosmic tree — one of the most striking images in Indian philosophy. Consciousness (Brahman) is the root above; the manifest world is the branching below.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-16',
    chapterNumber: 16,
    name: 'Daivasura Sampat',
    devanagari: 'दैवासुर सम्पत्',
    englishName: 'Divine and demonic nature',
    yogaPath: 'jnana',
    shlokasCount: 24,
    scene: 'Krishna shifts from cosmology to direct ethical instruction. There are two types of human beings in the world — those oriented toward the divine (daivi sampat) and those oriented toward the demonic (asuri sampat). This is not a tribal distinction — it is a description of two directions of psychological orientation. And it is reversible.',
    speakers: 'Krishna alone speaks — listing 26 divine qualities and 13 demonic qualities → Krishna describes the worldview of the asuri type: "there is no truth, no God, the universe is produced by mutual union, nothing more than desire" → Krishna identifies triple-gated hell: desire, anger, greed → Krishna prescribes the shastra (scripture) as the guide for right action.',
    centralTeaching: 'Two orientations of the human character: divine (fearlessness, purity, self-control, compassion, honesty) and demonic (hypocrisy, arrogance, pride, anger, harshness). The demonic worldview is essentially nihilistic — "there is no God, no truth, only desire and chance." The three gates of hell: desire, anger, greed.',
    commentary: 'Chapter 16 is the Gita\'s most direct ethical teaching and its most direct social commentary. The asuri worldview described in 16.8 — "there is no truth, no God, the universe is produced by chance, what rules it but desire?" — is a precise description of philosophical nihilism.',
    fascinatingFacts: [
      'The 26 divine qualities (16.1-3) vs 13 demonic qualities (16.4) constitute the Gita\'s complete ethical framework — the most systematic virtue list in the text.',
      'The nihilistic worldview described in 16.8 — "there is no truth, no God, only desire" — is the earliest detailed engagement with atheistic materialism in the Vedic tradition.',
      'The triple-gated hell of desire, anger, and greed (16.21) has been cited in every Indian legal and ethical tradition as the three root causes of social breakdown.',
      'Krishna\'s prescription of the shastra as the guide for action (16.24) has been read both as an endorsement of traditional authority and as a pragmatic tool for those who cannot access direct discrimination.'
    ],
    shlokas: [
      {
        _key: 's16-1',
        devanagari: 'अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः ।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥',
        transliteration: 'abhayaṃ sattva-saṃśuddhir jñāna-yoga-vyavasthitiḥ / dānaṃ damaś ca yajñaś ca svādhyāyas tapa ārjavam',
        englishTranslation: 'Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, self-control, sacrifice, study of scriptures, austerity, uprightness —',
        source: 'BG 16.1 — opening of the divine qualities list',
        significance: 'The first of 26 divine qualities. Fearlessness heads the list — not courage but the absence of fear itself, which comes from realising the immortality of the self.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-17',
    chapterNumber: 17,
    name: 'Śraddhā Traya',
    devanagari: 'श्रद्धा त्रय',
    englishName: 'The three types of faith',
    yogaPath: 'jnana',
    shlokasCount: 28,
    scene: 'Arjuna asks a practical question: some people perform sacrifices and penances with faith but without following the prescribed scriptures — are they acting in sattva, rajas, or tamas? Krishna responds with the most systematic application of the guna framework to daily life in the entire Gita: food, worship, tapas, charity, and the sacred formula Om-Tat-Sat.',
    speakers: 'Arjuna asks about faith outside scriptural authority → Krishna applies the three-guna framework to five domains of daily life: faith, food, sacrifice, tapas (austerity), and charity → Krishna closes with the sacred triad Om-Tat-Sat.',
    centralTeaching: 'Faith itself comes in three types. What you eat, how you worship, what austerities you practice, and how you give — all reflect your predominant guna. Om-Tat-Sat: three words that contain the entire teaching. Actions done without faith are of no value in this world or the next.',
    commentary: 'Chapter 17 is the Gita\'s most anthropological chapter — it observes human beings as they actually are, classifying their behaviours by their underlying orientation. The sattvic diet (foods that increase life, vitality, health, and happiness) has been cited as the earliest systematic nutritional philosophy in any text.',
    fascinatingFacts: [
      'The sattvic diet described in 17.8 — "foods that increase life, vitality, health, happiness and satisfaction" — is the oldest systematic nutritional philosophy in any known text, cited by Ayurvedic physicians to this day.',
      'Om-Tat-Sat (17.23) — three syllables that contain the Gita\'s entire teaching: Om (the divine ground), Tat (that — the absolute), Sat (truth, being).',
      'The statement that actions done without faith (śraddhā) are worthless (17.28) is the Gita\'s most direct claim about the internal orientation underlying external behaviour.',
      'Chapter 17 answers a question about sincere practice outside formal tradition — and Krishna\'s answer is generous: what matters is the quality of faith and intention.'
    ],
    shlokas: [
      {
        _key: 's17-1',
        devanagari: 'ओम् तत् सत् इति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः ।\nब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा ॥',
        transliteration: 'oṃ tat sat iti nirdeśo brahmaṇas trividhaḥ smṛtaḥ / brāhmaṇās tena vedāś ca yajñāś ca vihitāḥ purā',
        englishTranslation: 'Om, Tat, Sat — this is said to be the threefold designation of Brahman. By this were ordained of old the brahmanas, the Vedas, and the sacrifices.',
        source: 'BG 17.23',
        significance: 'The three sacred syllables. Om is the divine ground. Tat (that) is the absolute beyond all characterisation. Sat is truth, being, existence. Together they form the complete designation of the real.'
      }
    ]
  },
  {
    _type: 'gitaChapter',
    _id: 'gita-ch-18',
    chapterNumber: 18,
    name: 'Mokṣa Sanyāsa',
    devanagari: 'मोक्ष सन्यास',
    englishName: 'Liberation through renunciation',
    yogaPath: 'jnana',
    shlokasCount: 78,
    scene: 'The final chapter. All 17 previous chapters have been preparation. Arjuna asks one last question: what is the difference between sannyasa (renunciation) and tyaga (abandonment of fruits)? Krishna answers — and then gives the most comprehensive summary of the entire Gita over 78 verses. He closes with the most intimate verse he has spoken: the Charama Shloka.',
    speakers: 'Arjuna asks the final question — the difference between sannyasa and tyaga → Krishna applies the three-guna framework to knowledge, action, the doer, intellect, steadfastness, and happiness → Krishna makes a final personal statement: "You are dear to me. I will tell you what is good for you." → Krishna delivers the Charama Shloka (18.66) → Krishna asks Arjuna if his delusion has been destroyed → Arjuna answers: yes. I will act. → Sañjaya closes with joy and wonder.',
    centralTeaching: 'Abandon all dharmas and take refuge in me alone. I will free you from all sins. Do not grieve. The Gita ends not with philosophical conclusion but with personal promise. And Arjuna\'s response — "my delusion is destroyed, I will do as you say" — shows the teaching worked. Liberation is not the end of action. It is the beginning of action from a free mind.',
    commentary: 'Chapter 18 is the longest (78 shlokas) and the most comprehensive. It synthesises all 17 previous chapters systematically and then breaks beyond system into direct personal declaration. The Charama Shloka (18.66) is considered by the Vaishnava tradition to be the single most important verse in the Gita. The Gita ends not with renunciation but with a warrior picking up his bow.',
    fascinatingFacts: [
      'The Charama Shloka (18.66) — "abandon all dharmas and take refuge in me alone" — is the most commented-upon verse in the entire Gita. Ramanujacharya\'s Gadya Traya is essentially an extended meditation on this single verse.',
      'Arjuna\'s final words (18.73) — "naṣṭo mohaḥ" — "my delusion is destroyed" — are the most important words Arjuna speaks in the entire text. After 700 verses, three words confirm that the teaching worked.',
      'Sañjaya\'s closing verses (18.74-78) show that the narrator himself has been transformed — he weeps with joy at having witnessed the conversation.',
      'The Gita ends with "mama" — "my." The final word of the entire text is a word of possession and belonging. Everything belongs to Krishna.'
    ],
    shlokas: [
      {
        _key: 's18-1',
        devanagari: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
        transliteration: 'sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja / ahaṃ tvāṃ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ',
        englishTranslation: 'Abandon all dharmas and take refuge in me alone. I will free you from all sins. Do not grieve.',
        source: 'BG 18.66 — the Charama Shloka, the Gita\'s final and supreme teaching',
        significance: 'The Charama Shloka. The supreme teaching. After 65 verses of systematic philosophy, Krishna abandons system and speaks personally. Not "practice this" or "know that" — but "come to me. I will free you."'
      },
      {
        _key: 's18-2',
        devanagari: 'नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत ।\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ॥',
        transliteration: 'naṣṭo mohaḥ smṛtir labdhā tvat-prasādān mayācyuta / sthito\'smi gata-sandehaḥ kariṣye vacanaṃ tava',
        englishTranslation: 'My delusion is destroyed. I have regained my memory through your grace, O Achyuta. I stand firm. My doubts are gone. I will act according to your word.',
        source: 'BG 18.73 — Arjuna\'s final words',
        significance: 'The most important words Arjuna speaks in the entire Gita. After 700 verses, three words: "naṣṭo mohaḥ" — my delusion is destroyed. The teaching worked. And then: "I will act." Liberation is not withdrawal. It is engagement from a free mind.'
      }
    ]
  }
];

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('Seeding all 18 Bhagavad Gita chapters...\n');
  for (const ch of chapters) {
    try {
      await client.createOrReplace(ch);
      console.log(`✓  Chapter ${ch.chapterNumber} — ${ch.name}`);
    } catch (err) {
      console.error(`✗  Chapter ${ch.chapterNumber} failed:`, err);
    }
  }
  console.log('\nDone. All 18 chapters seeded.');
}

seed();
