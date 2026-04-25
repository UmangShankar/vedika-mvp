'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { MahabharataParva } from '@/lib/sanity/types';

type SeedParva = {
  parvaNumber: number;
  title: string;
  titleDevanagari: string;
  verseCount: number;
  containsGita: boolean;
  gitaChapterRange?: string;
};

type SeedCharacter = {
  name: string;
  nameDevanagari: string;
  alignment: 'pandava' | 'kaurava' | 'neutral';
  centralParvas: number[];
};

const SEED_PARVAS: SeedParva[] = [
  { parvaNumber: 1,  title: 'Adi',           titleDevanagari: 'आदि',             verseCount: 8884,  containsGita: false },
  { parvaNumber: 2,  title: 'Sabha',          titleDevanagari: 'सभा',             verseCount: 2511,  containsGita: false },
  { parvaNumber: 3,  title: 'Vana',           titleDevanagari: 'वन',              verseCount: 11664, containsGita: false },
  { parvaNumber: 4,  title: 'Virata',         titleDevanagari: 'विराट',           verseCount: 2050,  containsGita: false },
  { parvaNumber: 5,  title: 'Udyoga',         titleDevanagari: 'उद्योग',          verseCount: 6698,  containsGita: false },
  { parvaNumber: 6,  title: 'Bhishma',        titleDevanagari: 'भीष्म',           verseCount: 5884,  containsGita: true,  gitaChapterRange: 'Chapters 25–42 of Bhishma Parva (Critical Edition)' },
  { parvaNumber: 7,  title: 'Drona',          titleDevanagari: 'द्रोण',           verseCount: 8909,  containsGita: false },
  { parvaNumber: 8,  title: 'Karna',          titleDevanagari: 'कर्ण',            verseCount: 4964,  containsGita: false },
  { parvaNumber: 9,  title: 'Shalya',         titleDevanagari: 'शल्य',            verseCount: 3220,  containsGita: false },
  { parvaNumber: 10, title: 'Sauptika',       titleDevanagari: 'सौप्तिक',         verseCount: 870,   containsGita: false },
  { parvaNumber: 11, title: 'Stri',           titleDevanagari: 'स्त्री',          verseCount: 775,   containsGita: false },
  { parvaNumber: 12, title: 'Shanti',         titleDevanagari: 'शान्ति',          verseCount: 14732, containsGita: false },
  { parvaNumber: 13, title: 'Anushasana',     titleDevanagari: 'अनुशासन',         verseCount: 6748,  containsGita: false },
  { parvaNumber: 14, title: 'Ashvamedhika',   titleDevanagari: 'अश्वमेधिक',       verseCount: 3320,  containsGita: false },
  { parvaNumber: 15, title: 'Ashramavasika',  titleDevanagari: 'आश्रमवासिक',      verseCount: 1506,  containsGita: false },
  { parvaNumber: 16, title: 'Mausala',        titleDevanagari: 'मौसल',            verseCount: 320,   containsGita: false },
  { parvaNumber: 17, title: 'Mahaprasthanika',titleDevanagari: 'महाप्रस्थानिक',   verseCount: 106,   containsGita: false },
  { parvaNumber: 18, title: 'Svargarohana',   titleDevanagari: 'स्वर्गारोहण',     verseCount: 209,   containsGita: false },
];

const SEED_CHARACTERS: SeedCharacter[] = [
  { name: 'Yudhishthira',  nameDevanagari: 'युधिष्ठिर',  alignment: 'pandava', centralParvas: [1,2,3,5,12,13,14,17,18] },
  { name: 'Bhima',         nameDevanagari: 'भीम',         alignment: 'pandava', centralParvas: [1,3,7,9,17] },
  { name: 'Arjuna',        nameDevanagari: 'अर्जुन',      alignment: 'pandava', centralParvas: [1,3,5,6,7,8,14] },
  { name: 'Nakula',        nameDevanagari: 'नकुल',        alignment: 'pandava', centralParvas: [1,3,4,17] },
  { name: 'Sahadeva',      nameDevanagari: 'सहदेव',       alignment: 'pandava', centralParvas: [1,3,4,17] },
  { name: 'Draupadi',      nameDevanagari: 'द्रौपदी',     alignment: 'pandava', centralParvas: [2,3,10,11] },
  { name: 'Krishna',       nameDevanagari: 'कृष्ण',       alignment: 'neutral', centralParvas: [5,6,8,11,14,16] },
  { name: 'Bhishma',       nameDevanagari: 'भीष्म',       alignment: 'neutral', centralParvas: [1,2,6,11,12,13] },
  { name: 'Gandhari',      nameDevanagari: 'गांधारी',     alignment: 'neutral', centralParvas: [2,11,15] },
  { name: 'Kunti',         nameDevanagari: 'कुन्ती',      alignment: 'neutral', centralParvas: [5,11,15] },
  { name: 'Vyasa',         nameDevanagari: 'व्यास',       alignment: 'neutral', centralParvas: [1,5,12,15,18] },
  { name: 'Karna',         nameDevanagari: 'कर्ण',        alignment: 'kaurava', centralParvas: [1,5,8] },
  { name: 'Duryodhana',    nameDevanagari: 'दुर्योधन',    alignment: 'kaurava', centralParvas: [2,5,7,9] },
  { name: 'Shakuni',       nameDevanagari: 'शकुनि',       alignment: 'kaurava', centralParvas: [2,5] },
  { name: 'Dhritarashtra', nameDevanagari: 'धृतराष्ट्र',  alignment: 'kaurava', centralParvas: [2,11,15] },
  { name: 'Drona',         nameDevanagari: 'द्रोण',       alignment: 'kaurava', centralParvas: [1,6,7] },
];

const PHASES = [
  { label: 'Before the war', range: [1, 5] },
  { label: 'The war',        range: [6, 11] },
  { label: 'After the war',  range: [12, 18] },
];

function alignmentBadgeClass(alignment: 'pandava' | 'kaurava' | 'neutral' | undefined) {
  if (alignment === 'pandava') return 'bg-dharma-light text-dharma border border-dharma-border';
  if (alignment === 'kaurava') return 'bg-lotus-light text-lotus border border-lotus-border';
  return 'bg-saffron-50 text-saffron-500 border border-saffron-100';
}

function alignmentLabel(alignment: 'pandava' | 'kaurava' | 'neutral' | undefined) {
  if (alignment === 'pandava') return 'Pandava';
  if (alignment === 'kaurava') return 'Kaurava';
  return 'Divine / Neutral';
}

type ParvaMode = 'parvas' | 'characters';

interface Props {
  parvas?: MahabharataParva[];
}

export default function MahabharataExplorer({ parvas }: Props) {
  const [mode, setMode] = useState<ParvaMode>('parvas');
  const [expandedParva, setExpandedParva] = useState<number | null>(null);
  const [expandedChar, setExpandedChar] = useState<string | null>(null);

  const activeParvaSeed = (!parvas || parvas.length === 0) ? SEED_PARVAS : null;
  const totalVerses = activeParvaSeed
    ? activeParvaSeed.reduce((s, p) => s + p.verseCount, 0)
    : parvas!.reduce((s, p) => s + p.verseCount, 0);

  function getParvaList(): Array<SeedParva & { summary?: string; keyTeaching?: string; keyCharacters?: Array<{ name: string }> }> {
    if (activeParvaSeed) return activeParvaSeed;
    return parvas!.map(p => ({
      parvaNumber: p.parvaNumber,
      title: p.title,
      titleDevanagari: p.titleDevanagari ?? '',
      verseCount: p.verseCount,
      containsGita: p.containsGita,
      gitaChapterRange: p.gitaChapterRange,
      summary: p.summary,
      keyTeaching: p.keyTeaching,
      keyCharacters: p.keyCharacters,
    }));
  }

  const parvaList = getParvaList();

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex gap-2 mb-6">
        {(['parvas', 'characters'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={[
              'px-4 py-2 rounded-sm text-body-sm font-medium border transition-colors',
              mode === m
                ? 'bg-saffron-500 text-white border-saffron-500'
                : 'bg-sandal-50 text-ink-muted border-[rgba(192,120,40,0.18)] hover:text-saffron-500 hover:border-saffron-300',
            ].join(' ')}
          >
            {m === 'parvas' ? '18 Parvas' : 'Key figures'}
          </button>
        ))}
      </div>

      {mode === 'parvas' && (
        <div>
          {/* Stats bar */}
          <div className="bg-sandal-50 rounded-lg border border-[rgba(192,120,40,0.18)] px-4 py-3 flex flex-wrap gap-5 mb-6">
            <div>
              <p className="text-overline text-ink-faint uppercase tracking-widest">Total verses</p>
              <p className="text-subheading text-ink font-serif">{totalVerses.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-overline text-ink-faint uppercase tracking-widest">Parvas</p>
              <p className="text-subheading text-ink font-serif">18</p>
            </div>
            <div>
              <p className="text-overline text-ink-faint uppercase tracking-widest">Edition</p>
              <p className="text-subheading text-ink font-serif">Critical (BORI)</p>
            </div>
          </div>

          {/* Phases */}
          {PHASES.map(phase => {
            const phaseParvass = parvaList.filter(
              p => p.parvaNumber >= phase.range[0] && p.parvaNumber <= phase.range[1]
            );
            return (
              <div key={phase.label} className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px bg-saffron-100" />
                  <span className="text-caption text-saffron-500 font-serif italic">{phase.label}</span>
                  <div className="flex-1 h-px bg-saffron-100" />
                </div>
                <div className="space-y-2">
                  {phaseParvass.map(parva => {
                    const isExpanded = expandedParva === parva.parvaNumber;
                    const isGita = parva.containsGita;
                    return (
                      <div
                        key={parva.parvaNumber}
                        className={[
                          'rounded-lg border transition-colors',
                          isGita
                            ? 'border-saffron-300 bg-saffron-50'
                            : 'border-[rgba(192,120,40,0.18)] bg-white',
                        ].join(' ')}
                      >
                        <button
                          onClick={() => setExpandedParva(isExpanded ? null : parva.parvaNumber)}
                          className="w-full text-left px-4 py-3 flex items-start gap-3"
                          aria-expanded={isExpanded}
                        >
                          <span className="flex-shrink-0 w-7 h-7 rounded-sm bg-sandal-50 border border-[rgba(192,120,40,0.18)] text-caption text-ink-muted font-serif flex items-center justify-center">
                            {parva.parvaNumber}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-serif text-ink font-medium">{parva.title}</span>
                              {parva.titleDevanagari && (
                                <span className="devanagari text-saffron-500 text-body-sm">{parva.titleDevanagari}</span>
                              )}
                              {isGita && (
                                <span className="text-overline text-saffron-500 bg-saffron-50 border border-saffron-100 px-2 py-0.5 rounded-sm">
                                  ✦ Contains Bhagavad Gita
                                </span>
                              )}
                            </div>
                            {parva.summary && (
                              <p className="text-body-sm text-ink-muted mt-1 line-clamp-2">{parva.summary}</p>
                            )}
                          </div>
                          <span className={['flex-shrink-0 text-ink-faint transition-transform', isExpanded ? 'rotate-180' : ''].join(' ')}>
                            ▾
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="px-4 pb-4 border-t border-[rgba(192,120,40,0.10)] pt-3 space-y-3">
                            {parva.keyTeaching && (
                              <div className="bg-sandal-50 border-l-2 border-saffron-300 pl-4 py-2 rounded-r-sm">
                                <p className="text-body-sm text-ink-light font-serif italic">{parva.keyTeaching}</p>
                              </div>
                            )}
                            {parva.keyCharacters && parva.keyCharacters.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {parva.keyCharacters.map((c, i) => (
                                  <span key={i} className="bg-sandal-50 border border-[rgba(192,120,40,0.18)] rounded-sm text-caption text-ink-muted px-2 py-0.5">
                                    {c.name}
                                  </span>
                                ))}
                              </div>
                            )}
                            <p className="text-caption text-ink-faint">
                              {parva.verseCount.toLocaleString()} verses (Critical Edition)
                            </p>
                            {isGita && (
                              <div className="space-y-2">
                                {parva.gitaChapterRange && (
                                  <p className="text-body-sm text-ink-muted">{parva.gitaChapterRange}</p>
                                )}
                                <Link
                                  href="/bhagavad-gita"
                                  className="inline-block bg-saffron-500 text-white px-3 py-1.5 rounded-md text-sm no-underline hover:bg-saffron-600 transition-colors"
                                >
                                  Open Jñāna Chakra — Bhagavad Gita explorer →
                                </Link>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {mode === 'characters' && (
        <div>
          {/* Alignment legend */}
          <div className="bg-sandal-50 border border-[rgba(192,120,40,0.18)] rounded-lg px-4 py-3 flex flex-wrap gap-3 mb-6">
            <span className="bg-dharma-light text-dharma border border-dharma-border text-caption px-2 py-0.5 rounded-sm">Pandava</span>
            <span className="bg-lotus-light text-lotus border border-lotus-border text-caption px-2 py-0.5 rounded-sm">Kaurava</span>
            <span className="bg-saffron-50 text-saffron-500 border border-saffron-100 text-caption px-2 py-0.5 rounded-sm">Divine / Neutral</span>
          </div>

          <div className="space-y-2">
            {SEED_CHARACTERS.map(char => {
              const isExpanded = expandedChar === char.name;
              return (
                <div key={char.name} className="bg-white border border-[rgba(192,120,40,0.18)] rounded-lg">
                  <button
                    onClick={() => setExpandedChar(isExpanded ? null : char.name)}
                    className="w-full text-left px-4 py-3 flex items-start gap-3"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-serif text-ink font-semibold">{char.name}</span>
                        <span className="devanagari text-saffron-500 text-body-sm">{char.nameDevanagari}</span>
                        <span className={['text-caption px-2 py-0.5 rounded-sm', alignmentBadgeClass(char.alignment)].join(' ')}>
                          {alignmentLabel(char.alignment)}
                        </span>
                      </div>
                    </div>
                    <span className={['flex-shrink-0 text-ink-faint transition-transform', isExpanded ? 'rotate-180' : ''].join(' ')}>
                      ▾
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-[rgba(192,120,40,0.10)] pt-3 space-y-3">
                      <div>
                        <p className="text-overline text-saffron-600 uppercase tracking-widest mb-1">Dharmic dilemma</p>
                        <p className="text-body-sm text-ink-light">{/* dharmaticDilemma not in seed, placeholder */}
                          A central figure of the Mahābhārata whose dharmic choices shaped the course of the war.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {char.centralParvas.map(n => {
                          const p = SEED_PARVAS.find(sp => sp.parvaNumber === n);
                          return p ? (
                            <span key={n} className="bg-sandal-50 border border-[rgba(192,120,40,0.18)] rounded-sm text-caption text-ink-muted px-2 py-0.5">
                              {p.parvaNumber}. {p.title}
                            </span>
                          ) : null;
                        })}
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
