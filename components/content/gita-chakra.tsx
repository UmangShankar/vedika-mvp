'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { GitaChapter, GitaShloka } from '@/lib/sanity/types';

// Ambient declaration — provided by embedding page context when available
declare function sendPrompt(text: string): void;

function tryPrompt(text: string) {
  try {
    sendPrompt(text);
  } catch {
    window.location.href = `/ask-vedika?q=${encodeURIComponent(text)}`;
  }
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CX = 340;
const CY = 260;
const R2 = 185;
const MAT = 'cubic-bezier(0.4,0,0.2,1)';

// ─── Colour helpers ───────────────────────────────────────────────────────────

function chapterColor(n: number): string {
  if (n <= 6) return '#B8732A';
  if (n <= 12) return '#B03030';
  return '#1F6B60';
}

function chapterLight(n: number): string {
  if (n <= 6) return '#FEF3E2';
  if (n <= 12) return '#FDEAEA';
  return '#E0F2EF';
}

function yogaLabel(n: number): string {
  if (n <= 6) return 'Karma Yoga';
  if (n <= 12) return 'Bhakti Yoga';
  return 'Jñāna Yoga';
}

// ─── Geometry ─────────────────────────────────────────────────────────────────

function nodePos(i: number): { x: number; y: number } {
  const angle = -Math.PI / 2 + (i / 18) * 2 * Math.PI;
  return { x: CX + R2 * Math.cos(angle), y: CY + R2 * Math.sin(angle) };
}

function labelPos(i: number): { x: number; y: number; anchor: 'start' | 'end' | 'middle' } {
  const angle = -Math.PI / 2 + (i / 18) * 2 * Math.PI;
  const R = R2 + 38;
  const x = CX + R * Math.cos(angle);
  const y = CY + R * Math.sin(angle);
  const dx = x - CX;
  const anchor: 'start' | 'end' | 'middle' =
    Math.abs(dx) < 14 ? 'middle' : dx > 0 ? 'start' : 'end';
  return { x, y, anchor };
}

// ─── Types ────────────────────────────────────────────────────────────────────

type TabId = 'context' | 'shlokas' | 'commentary';

// ─── Main component ───────────────────────────────────────────────────────────

export function GitaChakra({ chapters }: { chapters: GitaChapter[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>('context');

  const chapter = useMemo(
    () => chapters.find((c) => c.chapterNumber === selected) ?? null,
    [chapters, selected]
  );

  function handleSelect(n: number) {
    if (selected === n) {
      setSelected(null);
    } else {
      setSelected(n);
      setActiveTab('context');
    }
  }

  return (
    <div className="space-y-4">
      <style>{`
        @keyframes pu { 0%,100%{opacity:.3} 50%{opacity:.8} }
        @keyframes fdUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .pu-ring { animation: pu 3s ease-in-out infinite }
        .sg { opacity:0; animation: fdUp .3s ease forwards }
        .sg:nth-child(1){animation-delay:.02s}
        .sg:nth-child(2){animation-delay:.06s}
        .sg:nth-child(3){animation-delay:.10s}
        .sg:nth-child(4){animation-delay:.14s}
        .sg:nth-child(5){animation-delay:.18s}
        *:focus { outline: none !important; }
        *:focus-visible { outline: none !important; }
      `}</style>

      {/* ── SVG spider web ── */}
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 680 520"
          width="100%"
          tabIndex={-1}
          style={{
            maxWidth: 680,
            display: 'block',
            margin: '0 auto',
            outline: 'none',
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          aria-label="Bhagavad Gita Jnana Chakra — interactive knowledge web"
        >
          {/* Concentric decoration rings */}
          <circle cx={CX} cy={CY} r={90}  fill="none" stroke="rgba(184,115,42,0.12)" strokeWidth="0.5" />
          <circle cx={CX} cy={CY} r={185} fill="none" stroke="rgba(184,115,42,0.12)" strokeWidth="0.5" />

          {/* Spokes */}
          {chapters.map((ch, i) => {
            const { x, y } = nodePos(i);
            return (
              <line
                key={`spoke-${ch.chapterNumber}`}
                x1={CX} y1={CY}
                x2={x}  y2={y}
                stroke={chapterColor(ch.chapterNumber)}
                strokeWidth="0.8"
                opacity="0.2"
              />
            );
          })}

          {/* Chapter nodes */}
          {chapters.map((ch, i) => {
            const { x: nx, y: ny } = nodePos(i);
            const { x: lx, y: ly, anchor } = labelPos(i);
            const color = chapterColor(ch.chapterNumber);
            const light = chapterLight(ch.chapterNumber);
            const isActive  = selected === ch.chapterNumber;
            const isDimmed  = selected !== null && !isActive;
            const labelWord = ch.name.split(/[\s\u2013\-]/)[0];

            return (
              <g
                key={ch._id}
                tabIndex={-1}
                role="button"
                aria-label={`Chapter ${ch.chapterNumber}: ${ch.name}`}
                aria-pressed={isActive}
                onClick={() => handleSelect(ch.chapterNumber)}
                onKeyDown={(e) => e.key === 'Enter' && handleSelect(ch.chapterNumber)}
                style={{ cursor: 'pointer', outline: 'none' }}
              >
                <circle
                  cx={nx} cy={ny}
                  r={isActive ? 24 : 20}
                  fill={light}
                  stroke={color}
                  strokeWidth={isActive ? 3 : 0.8}
                  opacity={isDimmed ? 0.38 : 1}
                  style={{ transition: `all 0.22s ${MAT}` }}
                />
                <text
                  x={nx} y={ny + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="500"
                  fill={color}
                  opacity={isDimmed ? 0.38 : 1}
                  style={{ transition: `opacity 0.22s ${MAT}`, pointerEvents: 'none' }}
                  fontFamily="system-ui, sans-serif"
                >
                  {ch.chapterNumber}
                </text>
                <text
                  x={lx} y={ly + 3}
                  textAnchor={anchor}
                  fontSize="8.5"
                  fill="#3D3020"
                  opacity={isDimmed ? 0.28 : 0.72}
                  style={{ transition: `opacity 0.22s ${MAT}`, pointerEvents: 'none' }}
                  fontFamily="system-ui, sans-serif"
                >
                  {labelWord}
                </text>
              </g>
            );
          })}

          {/* Central OM node */}
          <circle cx={CX} cy={CY} r={36} fill="none" stroke="#B8732A" strokeWidth="1" className="pu-ring" />
          <circle cx={CX} cy={CY} r={26} fill="#FEF3E2" stroke="#B8732A" strokeWidth="1.5" />
          <text
            x={CX} y={CY + 8}
            textAnchor="middle"
            fontSize="20"
            fill="#B8732A"
            fontFamily="'Noto Serif Devanagari', Georgia, serif"
            style={{ pointerEvents: 'none' }}
          >
            ॐ
          </text>
        </svg>
      </div>

      {/* ── Hint ── */}
      <p className="text-center text-caption text-ink-muted">
        {chapter ? (
          <span style={{ color: chapterColor(chapter.chapterNumber) }}>
            Chapter {chapter.chapterNumber} — {chapter.name} ↓
          </span>
        ) : (
          'Click any chapter to open its teaching'
        )}
      </p>

      {/* ── Detail panel ── */}
      <div
        style={{
          opacity: chapter ? 1 : 0,
          transform: chapter ? 'translateY(0)' : 'translateY(14px)',
          pointerEvents: chapter ? 'auto' : 'none',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
        }}
      >
        {chapter && (
          <DetailPanel
            chapter={chapter}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
    </div>
  );
}

// ─── Detail panel ─────────────────────────────────────────────────────────────

function DetailPanel({
  chapter,
  activeTab,
  setActiveTab,
}: {
  chapter: GitaChapter;
  activeTab: TabId;
  setActiveTab: (t: TabId) => void;
}) {
  const color = chapterColor(chapter.chapterNumber);
  const light = chapterLight(chapter.chapterNumber);
  const hasContent = chapter.scene || chapter.shlokas?.length || chapter.commentary;

  if (!hasContent) {
    return (
      <div
        className="rounded-xl border bg-white p-6 shadow-card-md"
        style={{ borderTop: `3px solid ${color}`, borderColor: `${color}22` }}
      >
        <p className="font-serif text-subheading text-ink">
          Chapter {chapter.chapterNumber} — {chapter.name}
        </p>
        {chapter.devanagari && (
          <p className="mt-1 text-caption" style={{ color }}>{chapter.devanagari}</p>
        )}
        <p className="mt-3 text-caption text-ink-muted">Full content loading…</p>
        <button
          onClick={() =>
            tryPrompt(
              `Tell me about Bhagavad Gita Chapter ${chapter.chapterNumber} — ${chapter.name}`
            )
          }
          className="mt-4 inline-flex items-center gap-1 rounded-sm px-4 py-2 text-caption font-medium text-white"
          style={{ background: color }}
        >
          Ask Vedika about this chapter ↗
        </button>
      </div>
    );
  }

  const tabs: { id: TabId; label: string }[] = [
    { id: 'context',     label: 'Context'     },
    { id: 'shlokas',     label: 'Shlokas'     },
    { id: 'commentary',  label: 'Commentary'  },
  ];

  return (
    <div
      className="overflow-hidden rounded-xl border bg-white shadow-card-md"
      style={{ borderTop: `3px solid ${color}`, borderColor: `${color}22` }}
    >
      {/* Header */}
      <div className="border-b px-5 pb-0 pt-5" style={{ borderColor: `${color}22` }}>
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-overline tracking-widest" style={{ color }}>
              {yogaLabel(chapter.chapterNumber)} · Ch {chapter.chapterNumber}
              {chapter.shlokasCount ? ` · ${chapter.shlokasCount} Shlokas` : ''}
            </p>
            <div className="mt-1 flex flex-wrap items-baseline gap-3">
              <h2 className="font-serif text-[20px] font-medium leading-tight text-ink">
                {chapter.name}
              </h2>
              {chapter.devanagari && (
                <span className="devanagari text-[18px] leading-none" style={{ color }}>
                  {chapter.devanagari}
                </span>
              )}
            </div>
            {chapter.englishName && (
              <p className="mt-0.5 text-caption italic text-ink-muted">{chapter.englishName}</p>
            )}
          </div>
          <span
            className="mt-1 shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
            style={{ background: `${color}18`, color }}
          >
            {yogaLabel(chapter.chapterNumber)}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              tabIndex={-1}
              onClick={() => setActiveTab(tab.id)}
              className="shrink-0 border-b-2 px-4 py-2 text-caption font-medium"
              style={{
                outline: 'none',
                borderColor: activeTab === tab.id ? color : 'transparent',
                color: activeTab === tab.id ? color : '#6B5B3E',
                transition: `border-color 0.2s ${MAT}, color 0.2s ${MAT}`,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab body */}
      <div className="p-5" id="gita-sc">
        {activeTab === 'context'    && <ContextTab    chapter={chapter} color={color} light={light} />}
        {activeTab === 'shlokas'    && <ShlokaTab     chapter={chapter} color={color} light={light} />}
        {activeTab === 'commentary' && <CommentaryTab chapter={chapter} color={color} light={light} />}
      </div>
    </div>
  );
}

// ─── Context tab ──────────────────────────────────────────────────────────────

function ContextTab({
  chapter,
  color,
  light,
}: {
  chapter: GitaChapter;
  color: string;
  light: string;
}) {
  return (
    <div className="space-y-4">
      {chapter.scene && (
        <div className="sg rounded-lg p-4" style={{ background: light }}>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest" style={{ color }}>
            The scene
          </p>
          <p className="font-serif text-[13px] leading-[1.75] text-ink">{chapter.scene}</p>
        </div>
      )}

      {chapter.speakers && (
        <div className="sg rounded-lg border p-4" style={{ borderColor: `${color}22` }}>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest" style={{ color }}>
            Who speaks, to whom
          </p>
          <p className="text-[12px] leading-relaxed text-ink-muted">{chapter.speakers}</p>
        </div>
      )}

      {chapter.centralTeaching && (
        <div
          className="sg rounded-r-lg border-l-[3px] bg-sandal-50 py-3 pl-4 pr-4"
          style={{ borderColor: color }}
        >
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest" style={{ color }}>
            Central teaching
          </p>
          <p className="font-serif text-[13px] leading-[1.75] text-ink">
            {chapter.centralTeaching}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Shlokas tab ──────────────────────────────────────────────────────────────

function ShlokaTab({
  chapter,
  color,
  light,
}: {
  chapter: GitaChapter;
  color: string;
  light: string;
}) {
  if (!chapter.shlokas?.length) {
    return (
      <p className="text-caption text-ink-muted">No shlokas added for this chapter yet.</p>
    );
  }

  return (
    <div className="space-y-5">
      {chapter.shlokas.map((s: GitaShloka, idx: number) => (
        <div
          key={idx}
          className="sg overflow-hidden rounded-lg border"
          style={{ borderColor: `${color}22` }}
        >
          {/* Shloka header */}
          <div className="px-4 py-3" style={{ background: light }}>
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-widest"
              style={{ color }}
            >
              Shloka {idx + 1}
            </p>
            <p
              className="text-[15px] leading-[2] text-ink"
              style={{
                whiteSpace: 'pre-line',
                fontFamily: "'Noto Serif Devanagari', Georgia, serif",
              }}
            >
              {s.devanagari}
            </p>
          </div>

          {/* Shloka body */}
          <div className="space-y-3 bg-white px-4 py-3">
            {s.transliteration && (
              <p className="text-[12px] italic leading-relaxed text-ink-muted">
                {s.transliteration}
              </p>
            )}
            {s.englishTranslation && (
              <p className="font-serif text-[13px] leading-relaxed text-ink">
                {s.englishTranslation}
              </p>
            )}
            {s.source && (
              <p className="text-[11px] font-medium" style={{ color }}>
                {s.source}
              </p>
            )}
            {s.significance && (
              <p className="text-[11px] italic leading-relaxed text-ink-muted">
                {s.significance}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Commentary tab ───────────────────────────────────────────────────────────

function CommentaryTab({
  chapter,
  color,
  light,
}: {
  chapter: GitaChapter;
  color: string;
  light: string;
}) {
  return (
    <div className="space-y-6">
      {chapter.commentary && (
        <div
          className="sg rounded-r-lg border-l-[3px] py-3 pl-4 pr-4"
          style={{ borderColor: color }}
        >
          <p className="font-serif text-[13px] leading-[1.8] text-ink">{chapter.commentary}</p>
        </div>
      )}

      {chapter.fascinatingFacts?.length ? (
        <div className="sg space-y-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color }}>
            Fascinating facts
          </p>
          {chapter.fascinatingFacts.map((fact: string, idx: number) => (
            <button
              key={idx}
              onClick={() => tryPrompt(fact)}
              className="w-full rounded-lg p-4 text-left transition-all hover:scale-[1.005] hover:shadow-card"
              style={{
                background: light,
                outline: 'none',
                border: `0.5px solid ${color}22`,
              }}
            >
              <p
                className="mb-1 text-[10px] font-semibold uppercase tracking-widest"
                style={{ color }}
              >
                Fact {idx + 1}
              </p>
              <p className="font-serif text-[13px] leading-relaxed text-ink">{fact}</p>
              <p className="mt-2 text-[10px] font-medium" style={{ color }}>
                Go deeper ↗
              </p>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
