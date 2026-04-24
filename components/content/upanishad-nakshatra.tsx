'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Upanishad } from '@/lib/sanity/types';

/* ─── colours ─────────────────────────────────────────────────────────────── */
const VEDA_COLOR: Record<string, string> = {
  rigveda: '#B8732A',
  samaveda: '#1F6B60',
  'shukla-yajurveda': '#6B3FA0',
  'krishna-yajurveda': '#7B5EA0',
  atharvaveda: '#B03030',
};
const VEDA_LIGHT: Record<string, string> = {
  rigveda: '#FEF3E2',
  samaveda: '#E0F2EF',
  'shukla-yajurveda': '#F0EAF9',
  'krishna-yajurveda': '#F5F0FC',
  atharvaveda: '#FDEAEA',
};
const THREAD_COLOR: Record<string, string> = {
  identity: '#B8732A',
  consciousness: '#1F6B60',
  liberation: '#6B3FA0',
  cosmic: '#B03030',
};

/* ─── fallback positions ───────────────────────────────────────────────────── */
const FALLBACK: Record<string, { x: number; y: number; r: number }> = {
  aitareya:       { x: 155, y: 85,  r: 15 },
  kaushitaki:     { x: 85,  y: 165, r: 13 },
  chandogya:      { x: 555, y: 75,  r: 26 },
  kena:           { x: 580, y: 170, r: 14 },
  brihadaranyaka: { x: 185, y: 310, r: 28 },
  taittiriya:     { x: 115, y: 390, r: 17 },
  katha:          { x: 300, y: 390, r: 20 },
  isha:           { x: 425, y: 370, r: 15 },
  shvetashvatara: { x: 505, y: 295, r: 14 },
  mundaka:        { x: 525, y: 375, r: 18 },
  prashna:        { x: 605, y: 300, r: 13 },
  mandukya:       { x: 435, y: 265, r: 21 },
  maitri:         { x: 340, y: 150, r: 12 },
};

/* ─── constellation lines (slug pairs) ────────────────────────────────────── */
const LINES: [string, string][] = [
  ['brihadaranyaka', 'chandogya'],
  ['chandogya', 'kena'],
  ['mandukya', 'prashna'],
  ['mandukya', 'mundaka'],
  ['prashna', 'mundaka'],
  ['katha', 'shvetashvatara'],
  ['brihadaranyaka', 'isha'],
  ['taittiriya', 'katha'],
  ['aitareya', 'kaushitaki'],
  ['brihadaranyaka', 'taittiriya'],
  ['chandogya', 'mandukya'],
  ['kena', 'aitareya'],
];

/* ─── Mahavakyas ──────────────────────────────────────────────────────────── */
const MAHAVAKYAS = [
  {
    slug: 'aitareya',
    veda: 'Rigveda',
    upanishad: 'Aitareya',
    devanagari: 'प्रज्ञानं ब्रह्म',
    iast: 'Prajñānam Brahma',
    meaning: 'Consciousness is Brahman',
    reference: 'Aitareya Upanishad 3.3',
    color: '#B8732A',
    explanation:
      'The Mahavakya of the Rigveda. Consciousness is not a product of matter but the ultimate reality itself. Everything that exists is a form of this one consciousness.',
    advaita: 'Consciousness is the sole reality. Individual consciousness and cosmic consciousness are numerically identical — not two but one appearing as two.',
    vishishtadvaita: 'Brahman possesses consciousness as its essential nature. Individual consciousness is real but exists as the body of Brahman.',
    dvaita: 'Brahman is supremely conscious; individual selves are conscious but of a lower, dependent order. The two are eternally distinct.',
  },
  {
    slug: 'chandogya',
    veda: 'Samaveda',
    upanishad: 'Chandogya',
    devanagari: 'तत् त्वम् असि',
    iast: 'Tat tvam asi',
    meaning: 'That thou art',
    reference: 'Chandogya Upanishad 6.8.7',
    color: '#1F6B60',
    explanation:
      'The most famous sentence in all of the Upanishads. Spoken sixteen times by Uddalaka to his son Shvetaketu. The identity of the individual self and the ultimate reality.',
    advaita: '"Thou" (tvam) is pure consciousness stripped of its identification with body-mind. "That" (tat) is Brahman. They are identical — the copula "art" (asi) asserts non-dual identity.',
    vishishtadvaita: 'Tvam is the individual self, which is Brahman\'s mode or body. Identity means intimate inseparable relation — not numerical sameness.',
    dvaita: 'The statement means the individual self shares the same class of being as Brahman — not that they are identical. The individual depends on Brahman eternally.',
  },
  {
    slug: 'brihadaranyaka',
    veda: 'Yajurveda',
    upanishad: 'Brihadaranyaka',
    devanagari: 'अहं ब्रह्मास्मि',
    iast: 'Ahaṃ Brahmāsmi',
    meaning: 'I am Brahman',
    reference: 'Brihadaranyaka Upanishad 1.4.10',
    color: '#6B3FA0',
    explanation:
      'The first-person declaration of identity with the ultimate reality. Spoken by Yajnavalkya as the culmination of the identity teaching. The most direct of the four Mahavakyas.',
    advaita: 'The "I" that makes this declaration is not the ego but pure awareness. In the moment of genuine recognition, the individual self knows itself as Brahman — not as an idea but as direct experience.',
    vishishtadvaita: 'The "I" is the real individual self, which is Brahman\'s body. "Am Brahman" means inseparably united with Brahman — as the body is united with its soul.',
    dvaita: 'The declaration must be read as "I belong to Brahman" or "I am of Brahman\'s nature" — never as numerical identity, which would be false and impossible.',
  },
  {
    slug: 'mandukya',
    veda: 'Atharvaveda',
    upanishad: 'Mandukya',
    devanagari: 'अयम् आत्मा ब्रह्म',
    iast: 'Ayam Ātmā Brahma',
    meaning: 'This self is Brahman',
    reference: 'Mandukya Upanishad 1.2',
    color: '#B03030',
    explanation:
      '"This" (ayam) points to the turiya — the pure awareness present right now, not somewhere else, not after liberation. This. Here. Now.',
    advaita: 'The turiya (fourth state) is not a state achieved in meditation but the permanent ground of all experience. It is Brahman. To know this is liberation.',
    vishishtadvaita: 'The self in all four states is Brahman\'s mode. "This self is Brahman" means the Atman\'s innermost nature participates in Brahman\'s nature.',
    dvaita: 'The self is of Brahman\'s nature (brahma-sadrishya) — similar in kind but eternally distinct and dependent on Brahman.',
  },
];

/* ─── threads ──────────────────────────────────────────────────────────────── */
const THREADS = [
  {
    id: 'identity',
    label: 'Identity',
    subtitle: 'Tat tvam asi · Aham Brahmasmi',
    color: '#B8732A',
    description:
      'The self and Brahman are one. These Upanishads approach the ultimate identity through different doors — the father-son dialogue, the court debates, the silence of negation.',
    slugs: ['chandogya', 'brihadaranyaka', 'mandukya', 'aitareya'],
  },
  {
    id: 'consciousness',
    label: 'Consciousness',
    subtitle: 'Prajnanam Brahma · Turiya',
    color: '#1F6B60',
    description:
      'What is the nature of awareness? What knows the knower? These texts approach Brahman through the analysis of consciousness — its states, its source, its ground.',
    slugs: ['mandukya', 'kena', 'aitareya', 'prashna', 'kaushitaki'],
  },
  {
    id: 'liberation',
    label: 'Liberation',
    subtitle: 'Moksha · The path',
    color: '#6B3FA0',
    description:
      'How is the mind freed? What is the path? Death himself teaches Nachiketa. The Isha reconciles action and renunciation. The Mundaka asks: by knowing what is everything known?',
    slugs: ['katha', 'mundaka', 'isha', 'maitri'],
  },
  {
    id: 'cosmic',
    label: 'Cosmic',
    subtitle: 'Creation · Cosmology · Ananda',
    color: '#B03030',
    description:
      'The universe as Brahman\'s expression. These texts situate the self in the cosmos — five sheaths, six questions, Shiva as the absolute, bliss as the ultimate nature.',
    slugs: ['taittiriya', 'prashna', 'shvetashvatara', 'chandogya', 'brihadaranyaka'],
  },
];

/* ─── types ────────────────────────────────────────────────────────────────── */
type TabId = 'context' | 'passages' | 'commentary';
type ViewId = 'constellation' | 'threads';

declare function sendPrompt(text: string): void;
function tryPrompt(text: string) {
  try {
    sendPrompt(text);
  } catch {
    window.location.href = `/ask-vedika?q=${encodeURIComponent(text)}`;
  }
}

/* ─── helpers ──────────────────────────────────────────────────────────────── */
function nodePos(u: Upanishad): { x: number; y: number; r: number } {
  const fb = FALLBACK[u.slug] ?? { x: 340, y: 230, r: 14 };
  const x = u.constellationX ?? fb.x;
  const y = u.constellationY ?? fb.y;
  const r = u.importance ? 12 + (u.importance / 13) * 14 : fb.r;
  return { x, y, r };
}

function vedaColor(veda: string | undefined): string {
  return VEDA_COLOR[veda ?? ''] ?? '#B8732A';
}
function vedaLight(veda: string | undefined): string {
  return VEDA_LIGHT[veda ?? ''] ?? '#FEF3E2';
}

function labelAnchor(x: number): 'start' | 'end' | 'middle' {
  if (x < 120) return 'start';
  if (x > 560) return 'end';
  return 'middle';
}

function labelOffset(x: number, y: number, r: number): { dx: number; dy: number } {
  if (x < 120) return { dx: r + 10, dy: 4 };
  if (x > 560) return { dx: -(r + 10), dy: 4 };
  if (y < 220) return { dx: 0, dy: -(r + 12) };
  return { dx: 0, dy: r + 16 };
}

/* ─── static twinkle stars ────────────────────────────────────────────────── */
const STARS = Array.from({ length: 35 }, (_, i) => ({
  cx: 15 + ((i * 127 + i * i * 31) % 650),
  cy: 10 + ((i * 83 + i * 47) % 440),
  r: 0.8 + (i % 3) * 0.4,
  delay: (i * 0.4) % 3,
}));

/* ─── component ────────────────────────────────────────────────────────────── */
export function UpanishadNakshatra({ upanishads }: { upanishads: Upanishad[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<ViewId>('constellation');
  const [activeTab, setActiveTab] = useState<TabId>('context');
  const [mvSelected, setMvSelected] = useState<string | null>(null);

  const upanishad = useMemo(
    () => upanishads.find(u => u.slug === selected) ?? null,
    [upanishads, selected]
  );

  // Reset tab when selection changes
  useEffect(() => { setActiveTab('context'); }, [selected]);

  const color = upanishad ? vedaColor(upanishad.vedaFamily) : '#B8732A';
  const light = upanishad ? vedaLight(upanishad.vedaFamily) : '#FEF3E2';

  function selectUpanishad(slug: string) {
    setSelected(prev => (prev === slug ? null : slug));
    setMvSelected(null);
    setView('constellation');
  }

  /* ── SVG positions index ── */
  const posIndex = useMemo(() => {
    const m: Record<string, { x: number; y: number; r: number }> = {};
    for (const u of upanishads) m[u.slug] = nodePos(u);
    return m;
  }, [upanishads]);

  /* ── Mahavakya panel ── */
  const activeMV = mvSelected ? MAHAVAKYAS.find(m => m.slug === mvSelected) ?? null : null;

  return (
    <div className="space-y-0">
      <style>{`
        @keyframes tw { 0%,100%{opacity:.15} 50%{opacity:.7} }
        @keyframes pu { 0%,100%{opacity:.25;transform:scale(1)} 50%{opacity:.6;transform:scale(1.08)} }
        @keyframes fdUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .star { animation: tw 3s ease-in-out infinite }
        .pu-ring { animation: pu 3s ease-in-out infinite; transform-box:fill-box; transform-origin:center }
        .sg { opacity:0; animation: fdUp .3s ease forwards }
        .sg:nth-child(1){animation-delay:.03s}
        .sg:nth-child(2){animation-delay:.08s}
        .sg:nth-child(3){animation-delay:.13s}
        .sg:nth-child(4){animation-delay:.18s}
        .sg:nth-child(5){animation-delay:.23s}
        .sg:nth-child(6){animation-delay:.28s}
      `}</style>

      {/* ── View toggle + legend ── */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 rounded-md border border-[rgba(192,120,40,0.2)] p-0.5">
          {(['constellation', 'threads'] as ViewId[]).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`rounded px-3 py-1 text-caption font-medium transition-colors ${
                view === v
                  ? 'bg-saffron-500 text-white'
                  : 'text-ink-muted hover:text-saffron-500'
              }`}
            >
              {v === 'constellation' ? 'Constellation' : 'Threads'}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-caption">
          {[
            { label: 'Rigveda', c: '#B8732A' },
            { label: 'Sāmaveda', c: '#1F6B60' },
            { label: 'Yajurveda', c: '#6B3FA0' },
            { label: 'Atharvaveda', c: '#B03030' },
          ].map(({ label, c }) => (
            <span key={label} className="flex items-center gap-1.5" style={{ color: c }}>
              <span className="h-2 w-2 rounded-full" style={{ background: c }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Constellation view ── */}
      {view === 'constellation' && (
        <div className="overflow-x-auto rounded-xl border border-[rgba(192,120,40,0.15)] bg-[#0D0A07]">
          <svg
            viewBox="0 0 680 460"
            className="w-full"
            style={{ minWidth: 340, maxHeight: 500, outline: 'none', userSelect: 'none' }}
            aria-label="Upanishad constellation"
          >
            {/* Twinkle stars */}
            {STARS.map((s, i) => (
              <circle
                key={i}
                className="star"
                cx={s.cx} cy={s.cy} r={s.r}
                fill="rgba(255,240,200,0.6)"
                style={{ animationDelay: `${s.delay}s` }}
              />
            ))}

            {/* Constellation lines */}
            {LINES.map(([a, b], i) => {
              const pa = posIndex[a];
              const pb = posIndex[b];
              if (!pa || !pb) return null;
              return (
                <line
                  key={i}
                  x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                  stroke="rgba(184,115,42,0.18)"
                  strokeWidth={0.6}
                  strokeDasharray="3,5"
                />
              );
            })}

            {/* Central OM node */}
            <circle cx={340} cy={230} r={28} fill="none" stroke="rgba(184,115,42,0.2)" strokeWidth={1} className="pu-ring" />
            <circle cx={340} cy={230} r={18} fill="#1A1208" stroke="rgba(184,115,42,0.5)" strokeWidth={1.2} />
            <text x={340} y={236} textAnchor="middle" fontSize={16} fill="rgba(184,115,42,0.9)" fontFamily="serif">ॐ</text>

            {/* Upanishad nodes */}
            {upanishads.map(u => {
              const pos = posIndex[u.slug] ?? { x: 340, y: 230, r: 14 };
              const isActive = selected === u.slug;
              const isDimmed = selected !== null && !isActive;
              const c = vedaColor(u.vedaFamily);
              const lc = vedaLight(u.vedaFamily);
              const ar = isActive ? pos.r + 4 : pos.r;
              const la = labelAnchor(pos.x);
              const lo = labelOffset(pos.x, pos.y, pos.r);
              const devaInitial = u.devanagari ? u.devanagari.slice(0, 1) : u.name.slice(0, 1);

              return (
                <g
                  key={u.slug}
                  style={{
                    opacity: isDimmed ? 0.28 : 1,
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                  onClick={() => selectUpanishad(u.slug)}
                  role="button"
                  aria-label={u.name}
                >
                  {/* Pulse ring */}
                  {isActive && (
                    <circle
                      cx={pos.x} cy={pos.y} r={ar + 8}
                      fill="none"
                      stroke={c}
                      strokeWidth={0.8}
                      opacity={0.3}
                      className="pu-ring"
                    />
                  )}
                  {/* Node */}
                  <circle
                    cx={pos.x} cy={pos.y} r={ar}
                    fill={isActive ? lc : '#1A1208'}
                    stroke={c}
                    strokeWidth={isActive ? 2.5 : 0.8}
                  />
                  {/* Devanagari initial */}
                  <text
                    x={pos.x} y={pos.y + 4}
                    textAnchor="middle"
                    fontSize={pos.r * 0.85}
                    fill={isActive ? c : 'rgba(255,240,200,0.5)'}
                    fontFamily="serif"
                    style={{ pointerEvents: 'none' }}
                  >
                    {devaInitial}
                  </text>
                  {/* Label */}
                  <text
                    x={pos.x + lo.dx}
                    y={pos.y + lo.dy}
                    textAnchor={la}
                    fontSize={8}
                    fill={isActive ? c : 'rgba(255,240,200,0.55)'}
                    fontFamily="sans-serif"
                    style={{ pointerEvents: 'none' }}
                  >
                    {u.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* ── Thread view ── */}
      {view === 'threads' && (
        <div className="space-y-3">
          {THREADS.map(thread => {
            const threadUpanishads = thread.slugs.flatMap(s => {
              const u = upanishads.find(u => u.slug === s);
              return u ? [u] : [];
            });
            return (
              <div
                key={thread.id}
                className="rounded-xl border bg-sandal-50 p-5"
                style={{ borderLeftWidth: 3, borderLeftColor: thread.color }}
              >
                <div className="mb-1 flex items-baseline gap-3">
                  <span className="font-serif text-subheading font-semibold" style={{ color: thread.color }}>
                    {thread.label}
                  </span>
                  <span className="text-caption italic text-ink-faint">{thread.subtitle}</span>
                </div>
                <p className="mb-4 text-body-sm text-ink-muted">{thread.description}</p>
                <div className="flex flex-wrap gap-2">
                  {threadUpanishads.map(u => (
                    <button
                      key={u.slug}
                      onClick={() => selectUpanishad(u.slug)}
                      className="rounded-full border px-3 py-1 text-caption transition-colors hover:text-white"
                      style={{
                        borderColor: thread.color,
                        color: selected === u.slug ? 'white' : thread.color,
                        background: selected === u.slug ? thread.color : 'transparent',
                      }}
                    >
                      {u.devanagari ? `${u.devanagari} · ` : ''}{u.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Mahavakyas strip ── */}
      <div className="mt-4 overflow-x-auto rounded-xl border border-[rgba(192,120,40,0.15)] bg-sandal-100">
        <div className="flex min-w-max gap-0 divide-x divide-[rgba(192,120,40,0.15)]">
          {MAHAVAKYAS.map(mv => {
            const isActive = selected === mv.slug || mvSelected === mv.slug;
            return (
              <button
                key={mv.slug}
                onClick={() => {
                  if (mvSelected === mv.slug) {
                    setMvSelected(null);
                  } else {
                    setMvSelected(mv.slug);
                    setSelected(null);
                  }
                }}
                className="flex-1 px-5 py-3 text-center transition-colors hover:bg-sandal-200"
                style={{ minWidth: 160, background: isActive ? `${mv.color}12` : undefined }}
              >
                <div
                  className="font-serif text-[15px] font-medium"
                  style={{ color: mv.color, fontFamily: 'Noto Serif Devanagari, serif' }}
                >
                  {mv.devanagari}
                </div>
                <div className="mt-0.5 text-caption italic text-ink-muted">{mv.iast}</div>
                <div className="mt-0.5 text-caption text-ink-muted">{mv.meaning}</div>
                <div className="mt-1 text-overline text-ink-faint">{mv.veda} · {mv.upanishad}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Mahavakya detail panel ── */}
      {activeMV && (
        <div className="mt-4 animate-[fdUp_.3s_ease_forwards] rounded-xl border bg-white p-6 shadow-card-md">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="text-overline text-ink-faint">{activeMV.veda} · {activeMV.upanishad} Upanishad</p>
              <div
                className="mt-1 font-serif text-[22px] font-medium"
                style={{ color: activeMV.color, fontFamily: 'Noto Serif Devanagari, serif' }}
              >
                {activeMV.devanagari}
              </div>
              <p className="mt-1 text-body-sm italic text-ink-muted">{activeMV.iast}</p>
              <p className="mt-1 font-serif text-body text-ink">{activeMV.meaning}</p>
            </div>
            <button
              onClick={() => setMvSelected(null)}
              className="ml-4 shrink-0 rounded-full p-1.5 text-ink-faint hover:bg-sandal-100 hover:text-ink-muted"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p className="mb-5 text-body-sm text-ink-muted">{activeMV.explanation}</p>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { name: 'Advaita Vedānta', text: activeMV.advaita },
              { name: 'Viśiṣṭādvaita', text: activeMV.vishishtadvaita },
              { name: 'Dvaita', text: activeMV.dvaita },
            ].map(t => (
              <div key={t.name} className="rounded-lg bg-sandal-50 p-4">
                <p className="mb-1 text-caption font-semibold text-ink-muted">{t.name}</p>
                <p className="text-body-sm text-ink-muted">{t.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-caption text-ink-faint">{activeMV.reference}</p>
            <button
              onClick={() =>
                tryPrompt(
                  `Explain the Mahavakya "${activeMV.devanagari}" (${activeMV.meaning}) from the ${activeMV.upanishad} Upanishad. How do Shankaracharya, Ramanujacharya, and Madhvacharya interpret it differently?`
                )
              }
              className="text-caption font-medium text-saffron-500 hover:text-saffron-600"
            >
              Go deeper ↗
            </button>
          </div>
        </div>
      )}

      {/* ── Upanishad detail panel ── */}
      {upanishad && (
        <div
          className="mt-4 rounded-xl border bg-white shadow-card-md"
          style={{ borderTopWidth: 3, borderTopColor: color }}
        >
          {/* Header */}
          <div className="flex items-start justify-between px-6 pt-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-0.5 text-caption font-medium"
                  style={{ background: light, color }}
                >
                  {upanishad.vedaFamily?.replace('-', ' ')}
                </span>
                {upanishad.philosophicalThread && (
                  <span
                    className="rounded-full px-2.5 py-0.5 text-caption"
                    style={{
                      background: `${THREAD_COLOR[upanishad.philosophicalThread] ?? color}18`,
                      color: THREAD_COLOR[upanishad.philosophicalThread] ?? color,
                    }}
                  >
                    {upanishad.philosophicalThread} thread
                  </span>
                )}
                {upanishad.period && (
                  <span className="text-caption text-ink-faint">{upanishad.period}</span>
                )}
              </div>
              <h2 className="mt-2 font-serif text-heading text-ink">
                {upanishad.devanagari
                  ? `${upanishad.devanagari} — ${upanishad.name}`
                  : upanishad.name}
              </h2>
              <p className="mt-1 text-body-sm text-ink-muted">{upanishad.summary}</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="ml-4 shrink-0 rounded-full p-1.5 text-ink-faint hover:bg-sandal-100"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Tabs */}
          <div className="mt-4 flex border-b border-[rgba(192,120,40,0.15)] px-6">
            {(['context', 'passages', 'commentary'] as TabId[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative mr-6 pb-2 text-body-sm font-medium capitalize transition-colors"
                style={{ color: activeTab === tab ? color : undefined }}
              >
                {tab === 'passages' ? 'Key passages' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full"
                    style={{ background: color }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6">
            {/* Context tab */}
            {activeTab === 'context' && (
              <div className="space-y-4">
                {(upanishad.teacher || upanishad.student) && (
                  <div className="sg grid gap-3 sm:grid-cols-2">
                    {upanishad.teacher && (
                      <div className="rounded-lg p-4" style={{ background: light }}>
                        <p className="text-caption font-semibold" style={{ color }}>Teacher</p>
                        <p className="mt-1 font-serif text-body-sm text-ink">{upanishad.teacher}</p>
                      </div>
                    )}
                    {upanishad.student && (
                      <div className="rounded-lg border bg-white p-4">
                        <p className="text-caption font-semibold text-ink-muted">Student</p>
                        <p className="mt-1 font-serif text-body-sm text-ink">{upanishad.student}</p>
                      </div>
                    )}
                  </div>
                )}
                {upanishad.scene && (
                  <div className="sg rounded-lg p-5" style={{ background: light }}>
                    <p className="mb-2 text-caption font-semibold uppercase tracking-wider" style={{ color }}>
                      The scene
                    </p>
                    <p className="font-serif text-body-sm text-ink">{upanishad.scene}</p>
                  </div>
                )}
                {upanishad.centralTeaching && (
                  <div
                    className="sg rounded-lg bg-white p-5"
                    style={{ borderLeft: `3px solid ${color}` }}
                  >
                    <p className="mb-2 text-caption font-semibold uppercase tracking-wider" style={{ color }}>
                      Central teaching
                    </p>
                    <p className="font-serif text-body-sm text-ink">{upanishad.centralTeaching}</p>
                  </div>
                )}
                {upanishad.mahavakya && (
                  <div className="sg rounded-lg border border-[rgba(192,120,40,0.2)] bg-sandal-100 p-5">
                    <p className="mb-1 text-caption font-semibold uppercase tracking-wider text-ink-muted">
                      Mahavakya
                    </p>
                    <div
                      className="font-serif text-[18px] font-medium"
                      style={{ color, fontFamily: 'Noto Serif Devanagari, serif' }}
                    >
                      {upanishad.mahavakya.devanagari}
                    </div>
                    <p className="mt-1 text-body-sm italic text-ink-muted">{upanishad.mahavakya.text}</p>
                    <p className="mt-0.5 font-serif text-body-sm text-ink">{upanishad.mahavakya.translation}</p>
                    <p className="mt-1 text-caption text-ink-faint">{upanishad.mahavakya.reference}</p>
                  </div>
                )}
                {!upanishad.scene && !upanishad.centralTeaching && (
                  <button
                    onClick={() => tryPrompt(`Tell me about the ${upanishad.name} Upanishad — its scene, teaching, and significance.`)}
                    className="sg rounded-lg border border-saffron-200 bg-saffron-50 px-4 py-3 text-body-sm text-saffron-500 hover:bg-saffron-100"
                  >
                    Ask Vedika about this Upanishad ↗
                  </button>
                )}
              </div>
            )}

            {/* Key passages tab */}
            {activeTab === 'passages' && (
              <div className="space-y-4">
                {upanishad.keyPassages && upanishad.keyPassages.length > 0 ? (
                  upanishad.keyPassages.map((p, i) => (
                    <div key={i} className="sg overflow-hidden rounded-xl border">
                      <div className="p-4" style={{ background: light }}>
                        <p className="text-caption font-semibold text-ink-faint">Passage {i + 1}</p>
                        <div
                          className="mt-1 whitespace-pre-wrap font-serif text-[15px] leading-relaxed"
                          style={{ color, fontFamily: 'Noto Serif Devanagari, serif' }}
                        >
                          {p.devanagari}
                        </div>
                      </div>
                      <div className="space-y-2 bg-white p-4">
                        {p.transliteration && (
                          <p className="text-body-sm italic text-ink-muted">{p.transliteration}</p>
                        )}
                        {p.englishTranslation && (
                          <p className="font-serif text-body-sm text-ink">{p.englishTranslation}</p>
                        )}
                        {p.source && (
                          <p className="text-caption text-ink-faint">{p.source}</p>
                        )}
                        {p.significance && (
                          <p className="border-t border-[rgba(192,120,40,0.12)] pt-2 text-body-sm text-ink-muted">
                            {p.significance}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <button
                    onClick={() => tryPrompt(`Share key passages from the ${upanishad.name} Upanishad with their Sanskrit text, transliteration, and meaning.`)}
                    className="sg rounded-lg border border-saffron-200 bg-saffron-50 px-4 py-3 text-body-sm text-saffron-500 hover:bg-saffron-100"
                  >
                    Ask Vedika for key passages ↗
                  </button>
                )}
              </div>
            )}

            {/* Commentary tab */}
            {activeTab === 'commentary' && (
              <div className="space-y-4">
                {upanishad.commentary && (
                  <div
                    className="sg rounded-lg bg-white p-5"
                    style={{ borderLeft: `3px solid ${color}` }}
                  >
                    <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-ink-muted">
                      Commentary
                    </p>
                    <p className="font-serif text-body-sm leading-relaxed text-ink">{upanishad.commentary}</p>
                  </div>
                )}
                {(upanishad.shankara || upanishad.ramanuja) && (
                  <div className="sg grid gap-3 sm:grid-cols-2">
                    {upanishad.shankara && (
                      <div className="rounded-lg bg-sandal-50 p-4">
                        <p className="mb-1 text-caption font-semibold text-ink-muted">Śaṅkarācārya</p>
                        <p className="font-serif text-body-sm text-ink">{upanishad.shankara}</p>
                      </div>
                    )}
                    {upanishad.ramanuja && (
                      <div className="rounded-lg border bg-white p-4">
                        <p className="mb-1 text-caption font-semibold text-ink-muted">Rāmānujācārya</p>
                        <p className="font-serif text-body-sm text-ink">{upanishad.ramanuja}</p>
                      </div>
                    )}
                  </div>
                )}
                {upanishad.fascinatingFacts && upanishad.fascinatingFacts.length > 0 && (
                  <div className="sg space-y-2">
                    <p className="text-caption font-semibold uppercase tracking-wider text-ink-muted">
                      Fascinating facts
                    </p>
                    {upanishad.fascinatingFacts.map((fact, i) => (
                      <button
                        key={i}
                        onClick={() => tryPrompt(`Tell me more about this: ${fact.slice(0, 120)}...`)}
                        className="w-full rounded-lg border bg-sandal-50 p-4 text-left text-body-sm text-ink-muted transition-colors hover:border-warm hover:bg-sandal-100"
                      >
                        {fact}
                      </button>
                    ))}
                  </div>
                )}
                {!upanishad.commentary && (
                  <button
                    onClick={() => tryPrompt(`Give me a detailed commentary on the ${upanishad.name} Upanishad — including Shankaracharya's and Ramanujacharya's interpretations.`)}
                    className="sg rounded-lg border border-saffron-200 bg-saffron-50 px-4 py-3 text-body-sm text-saffron-500 hover:bg-saffron-100"
                  >
                    Ask Vedika for commentary ↗
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hint */}
      {!selected && !mvSelected && (
        <p className="mt-3 text-center text-caption text-ink-faint">
          Click any star to open its teaching · Click any Mahavakya to compare interpretations
        </p>
      )}
    </div>
  );
}
