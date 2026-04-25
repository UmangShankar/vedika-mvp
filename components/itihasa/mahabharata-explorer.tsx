'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PARVA_DATA, type ParvaAlignment, type ParvaContent } from '@/lib/data/mahabharata-parvas';
import type { MahabharataParva } from '@/lib/sanity/types';

// ─── Character seed data ────────────────────────────────────────────────────

type SeedCharacter = {
  name: string;
  nameDevanagari: string;
  alignment: ParvaAlignment;
  role: string;
  dharmaticDilemma: string;
  keyMoment: string;
  centralParvas: number[];
};

const SEED_CHARACTERS: SeedCharacter[] = [
  {
    name: 'Yudhiṣṭhira', nameDevanagari: 'युधिष्ठिर', alignment: 'pandava',
    role: 'eldest Pandava, king of dharma',
    dharmaticDilemma: 'Bound by dharmic law to accept a royal challenge to dice — knowing he would lose, knowing it was ruinous. The rules he lived by became the instrument of his destruction.',
    keyMoment: 'Answers the Yakṣa\'s questions at the forest lake to revive his brothers — and then refuses to abandon the dog at heaven\'s threshold.',
    centralParvas: [1,2,3,5,12,13,14,17,18],
  },
  {
    name: 'Bhīma', nameDevanagari: 'भीम', alignment: 'pandava',
    role: 'Pandava second, warrior of terrible strength',
    dharmaticDilemma: 'Every oath he swore in the dice hall required acts that violated the codes of righteous war — he had to become what he was fighting in order to fulfil what he had promised.',
    keyMoment: 'Strikes Duryodhana\'s thigh with a blow that ends the war and breaks its rules simultaneously — fulfilling his oath and its consequences at once.',
    centralParvas: [1,3,7,9,17],
  },
  {
    name: 'Arjuna', nameDevanagari: 'अर्जुन', alignment: 'pandava',
    role: 'Pandava archer, Kṛṣṇa\'s student',
    dharmaticDilemma: 'On the field of Kurukṣetra, he saw his grandfather and teacher arrayed against him and put down his bow. His refusal to fight without understanding gave birth to the Gīta — and then he fought anyway.',
    keyMoment: 'Fires the arrow that kills Karṇa while his wheel is stuck — on Kṛṣṇa\'s instruction, knowing it violates the pause in combat. He does not celebrate.',
    centralParvas: [1,3,5,6,7,8,14],
  },
  {
    name: 'Nakula', nameDevanagari: 'नकुल', alignment: 'pandava',
    role: 'Pandava fourth, master of swordsmanship and horses',
    dharmaticDilemma: 'The most beautiful of the Pandavas fell on the great journey for pride in his own appearance — the virtue of physical excellence turned at last to vanity.',
    keyMoment: 'Serves as a groom in Virāṭa\'s kingdom during the year of concealment, tending horses with a skill that revealed nothing of who he was.',
    centralParvas: [1,3,4,17],
  },
  {
    name: 'Sahadeva', nameDevanagari: 'सहदेव', alignment: 'pandava',
    role: 'Pandava fifth, sage and astrologer',
    dharmaticDilemma: 'Possessed foreknowledge of the war\'s outcome but was forbidden by curse to speak it unprompted — he carried the weight of knowing the end while walking through the beginning.',
    keyMoment: 'Serves as a cowherd during the year in Virāṭa — knowing, in silence, the entire shape of what would follow.',
    centralParvas: [1,3,4,17],
  },
  {
    name: 'Draupadī', nameDevanagari: 'द्रौपदी', alignment: 'pandava',
    role: 'queen of the Pandavas, born from sacrificial fire',
    dharmaticDilemma: 'Asked in open court whether she was fairly staked if her husband had already forfeited himself — a question that had no legal answer. Every patriarch stayed silent. She did not collapse.',
    keyMoment: 'When her sons are killed in the night raid, she does not ask for Aśvatthāmā\'s execution. She asks for the gem from his forehead. Even in total grief, her demand is precise.',
    centralParvas: [2,3,10,11],
  },
  {
    name: 'Kṛṣṇa', nameDevanagari: 'कृष्ण', alignment: 'neutral',
    role: 'divine strategist, Pandava ally, charioteer',
    dharmaticDilemma: 'Chose not to bear arms while engineering the precise conditions under which every necessary death would occur. His dharma was more subtle and more terrible than any warrior\'s.',
    keyMoment: 'Stops the war\'s clock at Kurukṣetra to speak the Gīta — and later accepts Gāndhārī\'s curse that the Yādavas will destroy themselves, without argument or deflection.',
    centralParvas: [5,6,8,11,14,16],
  },
  {
    name: 'Bhīṣma', nameDevanagari: 'भीष्म', alignment: 'neutral',
    role: 'grandsire, celibate warrior, patriarch of the Kurus',
    dharmaticDilemma: 'His vow of celibacy — taken voluntarily to protect his father\'s desire — locked him into serving a dynasty he watched destroy itself from within, fighting for those he knew were wrong.',
    keyMoment: 'Falls on his arrow-bed having told Yudhiṣṭhira privately how he could be killed — then waits for Uttarāyaṇa to die, choosing the exact moment of his own departure.',
    centralParvas: [1,2,6,11,12,13],
  },
  {
    name: 'Gāndhārī', nameDevanagari: 'गांधारी', alignment: 'neutral',
    role: 'queen of the Kauravas, the woman who wore the blindfold',
    dharmaticDilemma: 'Wore a blindfold voluntarily for fifty years to share her blind husband\'s darkness. When she finally removed it on the battlefield, the text says her concentrated śakti could have burned with her gaze.',
    keyMoment: 'Curses Kṛṣṇa on the battlefield among her dead sons. He accepts the curse without argument. She does not regret it.',
    centralParvas: [2,11,15],
  },
  {
    name: 'Kuntī', nameDevanagari: 'कुन्ती', alignment: 'neutral',
    role: 'mother of the Pandavas — and of Karṇa',
    dharmaticDilemma: 'Knew Karṇa was her firstborn throughout the war. Visited him in secret to claim him as a son only when it might serve as leverage. He refused to be claimed.',
    keyMoment: 'Stands over Karṇa\'s body and reveals to her sons that he was their eldest brother — a secret held through the entire war.',
    centralParvas: [5,11,15],
  },
  {
    name: 'Vyāsa', nameDevanagari: 'व्यास', alignment: 'neutral',
    role: 'narrator, author, character within his own epic',
    dharmaticDilemma: 'Author of the epic and character within it simultaneously — he knows how the story ends while living inside it. Whether he could have changed the outcome is never answered.',
    keyMoment: 'Grants Dhṛtarāṣṭra the vision to see all his dead sons for one night on the Gaṅgā\'s bank, restored to their pre-war forms, healthy and at peace.',
    centralParvas: [1,5,12,15,18],
  },
  {
    name: 'Karṇa', nameDevanagari: 'कर्ण', alignment: 'kaurava',
    role: 'Kaurava commander, Kuntī\'s firstborn, son of Sūrya',
    dharmaticDilemma: 'Born a Pandava, raised a Kaurava, loyal to the wrong side, stripped of his divine armour by his own generosity, cursed to forget his power when he needed it most — and faithful to the end.',
    keyMoment: 'Gives away his divine kavaca and kuṇḍalas to Indra in disguise — knowing it would leave him vulnerable — because he was asked and because giving was his nature.',
    centralParvas: [1,5,8],
  },
  {
    name: 'Duryodhana', nameDevanagari: 'दुर्योधन', alignment: 'kaurava',
    role: 'Kaurava king, the war\'s architect',
    dharmaticDilemma: 'His refusal to give even five villages — "not the width of a needle\'s point without a fight" — is the war\'s formal declaration. The text ensures we understand this is a choice, not a fate.',
    keyMoment: 'Hides beneath a lake after the war is lost, called out by the Pandavas, and chooses to fight Bhīma in a mace duel rather than surrender — refusing disgrace more than he desired survival.',
    centralParvas: [2,5,7,9],
  },
  {
    name: 'Śakuni', nameDevanagari: 'शकुनि', alignment: 'kaurava',
    role: 'Gāndhāra prince, dice-player, the Sabha\'s architect',
    dharmaticDilemma: 'Plays the dice on Duryodhana\'s behalf by a science he knew perfectly. The text says he "knew the science of dice" — it does not say the dice were loaded. That ambiguity is entirely deliberate.',
    keyMoment: 'Manipulates the wager and Yudhiṣṭhira\'s acceptance until the dice hall\'s silence becomes the war\'s true first act — a catastrophe engineered without a single rule being broken.',
    centralParvas: [2,5],
  },
  {
    name: 'Dhṛtarāṣṭra', nameDevanagari: 'धृतराष्ट्र', alignment: 'kaurava',
    role: 'blind king, father of the Kauravas',
    dharmaticDilemma: 'Loved his son more than the dharma he knew was being violated. Sat while Draupadī was dragged into his court and found reasons for silence — and carried the consequences for the rest of his life.',
    keyMoment: 'Almost crushes Bhīma in grief-transformed-rage before Kṛṣṇa substitutes an iron statue — the shattering of which discharges his grief. He then embraces the real Bhīma gently.',
    centralParvas: [2,11,15],
  },
  {
    name: 'Droṇa', nameDevanagari: 'द्रोण', alignment: 'kaurava',
    role: 'preceptor, Kaurava commander',
    dharmaticDilemma: 'Could not refuse Duryodhana\'s command because loyalty to the throne was his bound duty — even as he created the chakra-vyūha formation that would kill his student\'s son.',
    keyMoment: 'Lays down his arms when he believes Aśvatthāmā is dead — the one news that could break him — and is immediately slain by Dhṛṣṭadyumna while defenceless.',
    centralParvas: [1,6,7],
  },
];

// ─── Alignment helpers ───────────────────────────────────────────────────────

function alignmentDotClass(a: ParvaAlignment): string {
  if (a === 'pandava') return 'bg-dharma';
  if (a === 'kaurava') return 'bg-lotus';
  return 'bg-saffron-400';
}

function alignmentBadgeClass(a: ParvaAlignment): string {
  if (a === 'pandava') return 'bg-dharma-light text-dharma border border-dharma-border';
  if (a === 'kaurava') return 'bg-lotus-light text-lotus border border-lotus-border';
  return 'bg-saffron-50 text-saffron-600 border border-saffron-100';
}

function alignmentLabel(a: ParvaAlignment): string {
  if (a === 'pandava') return 'Pandava';
  if (a === 'kaurava') return 'Kaurava';
  return 'Divine / Neutral';
}

// ─── Phase config ────────────────────────────────────────────────────────────

const PHASES: { label: string; phase: ParvaContent['phase'] }[] = [
  { label: 'Before the war', phase: 'before' },
  { label: 'The war',        phase: 'war'    },
  { label: 'After the war',  phase: 'after'  },
];

// ─── Component ───────────────────────────────────────────────────────────────

interface Props {
  parvas?: MahabharataParva[];
}

export default function MahabharataExplorer({ parvas }: Props) {
  const [mode, setMode] = useState<'parvas' | 'characters'>('parvas');
  const [expandedParva, setExpandedParva] = useState<number | null>(null);
  const [expandedChar, setExpandedChar] = useState<string | null>(null);

  const totalVerses = PARVA_DATA.reduce((s, p) => s + p.verseCount, 0);
  void parvas; // accepted for future Sanity overlay; PARVA_DATA is always the render source

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-overline text-ink-faint">View</span>
        <div className="inline-flex rounded-md overflow-hidden border border-[rgba(192,120,40,0.25)]">
          {(['parvas', 'characters'] as const).map((m, i) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={[
                'text-caption font-serif px-4 py-2 transition-colors',
                i === 0 ? '' : 'border-l border-[rgba(192,120,40,0.25)]',
                mode === m
                  ? 'bg-saffron-600 text-sandal-50'
                  : 'bg-white text-ink-muted hover:bg-sandal-50',
              ].join(' ')}
            >
              {m === 'parvas' ? '18 Parvas' : 'Key figures'}
            </button>
          ))}
        </div>
      </div>

      {/* ── PARVA MODE ──────────────────────────────────────────────────── */}
      {mode === 'parvas' && (
        <div>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 mb-5 px-4 py-3 rounded-lg border border-[rgba(192,120,40,0.18)] bg-sandal-50">
            <div>
              <p className="text-overline text-ink-faint">Total verses</p>
              <p className="text-subheading font-semibold text-saffron-600 font-serif">{totalVerses.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-overline text-ink-faint">Parvas</p>
              <p className="text-subheading font-semibold text-saffron-600 font-serif">18</p>
            </div>
            <div>
              <p className="text-overline text-ink-faint">Edition</p>
              <p className="text-subheading font-semibold text-saffron-600 font-serif">Critical (BORI)</p>
            </div>
          </div>

          {/* Parvas grouped by phase */}
          {PHASES.map(({ label, phase }) => (
            <div key={phase}>
              {/* Phase divider */}
              <div className="flex items-center gap-3 my-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-saffron-200" />
                <span className="text-overline text-saffron-500 font-serif italic">{label}</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-saffron-200" />
              </div>

              {PARVA_DATA.filter(p => p.phase === phase).map(parva => {
                const isOpen = expandedParva === parva.number;
                const isGita = parva.containsGita;

                return (
                  <div
                    key={parva.number}
                    className={[
                      'rounded-lg border overflow-hidden mb-2 shadow-card hover:shadow-card-md transition-shadow',
                      isGita ? 'border-saffron-300 bg-saffron-50' : 'border-[rgba(192,120,40,0.18)] bg-white',
                    ].join(' ')}
                  >
                    {/* Collapsed header */}
                    <button
                      onClick={() => setExpandedParva(isOpen ? null : parva.number)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-3 px-4 py-4 cursor-pointer hover:bg-sandal-50 transition-colors text-left"
                    >
                      <span className="w-8 h-8 rounded-md bg-sandal-100 border border-[rgba(192,120,40,0.18)] flex items-center justify-center text-caption font-semibold text-ink-muted font-serif flex-shrink-0">
                        {parva.number}
                      </span>
                      <div className="flex-1 min-w-0 flex flex-wrap items-center gap-2">
                        <span className="font-serif text-subheading text-ink font-semibold">{parva.name}</span>
                        <span className="devanagari text-base text-saffron-500">{parva.nameDevanagari}</span>
                        {isGita && (
                          <span className="text-overline text-saffron-600 bg-saffron-50 border border-saffron-200 px-2 py-0.5 rounded-sm">
                            ✦ Contains Bhagavad Gīta
                          </span>
                        )}
                      </div>
                      <span className="text-caption text-ink-faint ml-auto flex-shrink-0 mr-2">
                        {parva.verseCount.toLocaleString()} verses
                      </span>
                      <span className={['text-ink-faint text-xs transition-transform flex-shrink-0', isOpen ? 'rotate-180' : ''].join(' ')}>
                        ▾
                      </span>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <>
                        {/* Shloka block */}
                        <div className="bg-sandal-50 border-b border-[rgba(192,120,40,0.18)] px-5 py-5">
                          <p className="text-overline text-ink-faint font-serif mb-3">{parva.shloka.ref}</p>
                          <p className="devanagari text-xl text-ink text-center leading-loose mb-4 whitespace-pre-line">
                            {parva.shloka.devanagari}
                          </p>
                          <p className="font-serif text-sm text-ink-muted italic text-center leading-relaxed mb-4">
                            {parva.shloka.iast}
                          </p>
                          <div className="w-12 mx-auto border-t border-saffron-200 my-3" />
                          <p className="font-serif text-sm text-ink-light text-center leading-relaxed">
                            {parva.shloka.meaning}
                          </p>
                        </div>

                        {/* Body content */}
                        <div className="px-5 py-5 space-y-5">
                          {/* Narrative */}
                          <p className="font-serif text-body text-ink-light leading-relaxed">{parva.narrative}</p>

                          {/* Stats */}
                          <div>
                            <p className="text-overline text-ink-faint mb-3">Key facts</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {parva.stats.map(stat => (
                                <div
                                  key={stat.label}
                                  className={[
                                    'rounded-md px-3 py-2 border',
                                    isGita ? 'border-saffron-200 bg-saffron-50' : 'bg-sandal-50 border-[rgba(192,120,40,0.15)]',
                                  ].join(' ')}
                                >
                                  <p className="text-overline text-ink-faint mb-0.5">{stat.label}</p>
                                  <p className="text-caption text-ink-light font-serif">{stat.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Actors */}
                          <div>
                            <p className="text-overline text-ink-faint mb-3">Principal actors</p>
                            <div className="space-y-3">
                              {parva.actors.map(actor => (
                                <div key={actor.name} className="flex gap-3 items-start">
                                  <span className={['w-2 h-2 rounded-full mt-[6px] flex-shrink-0', alignmentDotClass(actor.alignment)].join(' ')} />
                                  <div>
                                    <p className="text-caption text-ink font-semibold font-serif">
                                      {actor.nameDevanagari && (
                                        <span className="devanagari text-saffron-500 mr-1.5">{actor.nameDevanagari}</span>
                                      )}
                                      {actor.name}
                                      <span className="text-ink-faint font-normal"> — {actor.role}</span>
                                    </p>
                                    <p className="text-caption text-ink-muted leading-relaxed mt-0.5">{actor.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Facts */}
                          <div>
                            <p className="text-overline text-ink-faint mb-3">Fascinating facts</p>
                            <div className="space-y-2">
                              {parva.facts.map((fact, i) => (
                                <div key={i} className="flex gap-2.5 items-start">
                                  <span className="text-saffron-400 text-[8px] mt-[5px] flex-shrink-0">◆</span>
                                  <p className="text-caption text-ink-light leading-relaxed">{fact}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Dating */}
                          <div className="border-l-2 border-saffron-300 pl-4 bg-saffron-50 rounded-r-md py-3 pr-3">
                            <p className="text-overline text-saffron-600 mb-2">Dating &amp; scholarship</p>
                            <p className="text-caption text-ink-muted font-serif leading-relaxed italic">{parva.dating}</p>
                          </div>

                          {/* Geography */}
                          <div className="border-l-2 border-dharma-border pl-4 bg-dharma-light rounded-r-md py-3 pr-3">
                            <p className="text-overline text-dharma mb-2">Geography</p>
                            <p className="text-caption text-ink-muted font-serif leading-relaxed">{parva.geography}</p>
                          </div>

                          {/* Gita link for Bhishma Parva */}
                          {isGita && (
                            <div className="space-y-2">
                              {parva.gitaChapterRange && (
                                <p className="text-body-sm text-ink-muted">{parva.gitaChapterRange}</p>
                              )}
                              <Link
                                href="/bhagavad-gita"
                                className="inline-block bg-saffron-500 text-white px-4 py-2 rounded-md text-sm font-medium font-serif no-underline hover:bg-saffron-600 transition-colors"
                              >
                                Open Jñāna Chakra — Bhagavad Gīta explorer →
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Teaching block */}
                        <div className="border-t border-[rgba(192,120,40,0.15)] bg-sandal-50 px-5 py-4">
                          <p className="text-overline text-ink-faint mb-2">Central teaching</p>
                          <p className="font-serif text-body-sm text-ink-light italic leading-relaxed">{parva.teaching}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* ── CHARACTER MODE ───────────────────────────────────────────────── */}
      {mode === 'characters' && (
        <div>
          {/* Alignment legend */}
          <div className="flex flex-wrap gap-3 mb-5 px-4 py-3 rounded-lg border border-[rgba(192,120,40,0.18)] bg-sandal-50">
            <span className="text-overline text-ink-faint self-center">Alignment</span>
            {(['pandava', 'kaurava', 'neutral'] as const).map(a => (
              <span key={a} className={['text-caption px-2 py-0.5 rounded-sm', alignmentBadgeClass(a)].join(' ')}>
                {alignmentLabel(a)}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            {SEED_CHARACTERS.map(char => {
              const isOpen = expandedChar === char.name;
              return (
                <div
                  key={char.name}
                  className="rounded-lg border border-[rgba(192,120,40,0.18)] bg-white overflow-hidden shadow-card hover:shadow-card-md transition-shadow"
                >
                  <button
                    onClick={() => setExpandedChar(isOpen ? null : char.name)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start gap-3 px-4 py-4 cursor-pointer hover:bg-sandal-50 transition-colors text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-serif text-subheading text-ink font-semibold">{char.name}</span>
                        <span className="devanagari text-base text-saffron-500">{char.nameDevanagari}</span>
                        <span className={['text-caption px-2 py-0.5 rounded-sm', alignmentBadgeClass(char.alignment)].join(' ')}>
                          {alignmentLabel(char.alignment)}
                        </span>
                      </div>
                      <p className="text-caption text-ink-muted">{char.role}</p>
                    </div>
                    <span className={['text-ink-faint text-xs transition-transform flex-shrink-0 mt-1', isOpen ? 'rotate-180' : ''].join(' ')}>
                      ▾
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-[rgba(192,120,40,0.10)] pt-3 space-y-3">
                      <div>
                        <p className="text-overline text-saffron-600 uppercase tracking-widest mb-1">Dharmic dilemma</p>
                        <p className="text-body-sm text-ink-light leading-relaxed">{char.dharmaticDilemma}</p>
                      </div>
                      <div>
                        <p className="text-overline text-ink-faint uppercase tracking-widest mb-1">Key moment</p>
                        <p className="text-body-sm text-ink-muted italic leading-relaxed">{char.keyMoment}</p>
                      </div>
                      <div>
                        <p className="text-overline text-ink-faint uppercase tracking-widest mb-2">Central parvas</p>
                        <div className="flex flex-wrap gap-1.5">
                          {char.centralParvas.map(n => {
                            const p = PARVA_DATA.find(sp => sp.number === n);
                            return p ? (
                              <span key={n} className="bg-sandal-50 border border-[rgba(192,120,40,0.18)] rounded-sm text-caption text-ink-muted px-2 py-0.5">
                                {p.number}. {p.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
