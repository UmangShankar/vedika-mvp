#!/bin/bash
# Run from root of vedika-mvp repo
# Fixes: (1) homepage nav + clickthrough (2) deep dive color consistency (3) matrix column alignment
set -e

echo "=== Fix 1: Add Darśanas to site nav ==="
# Patch site-config.ts — add Darśanas after Topics
python3 - <<'PYEOF'
import re, sys

path = 'lib/site-config.ts'
with open(path, 'r') as f:
    content = f.read()

# Only add if not already present
if '/darshanas' not in content:
    # Add after the Topics entry
    content = content.replace(
        "{ label: 'Topics',   href: '/topics'   },",
        "{ label: 'Topics',   href: '/topics'   },\n    { label: 'Darśanas', href: '/darshanas' },"
    )
    # Fallback: add after Research if Topics pattern not found
    if '/darshanas' not in content:
        content = content.replace(
            "{ label: 'Research', href: '/research' },",
            "{ label: 'Research', href: '/research' },\n    { label: 'Darśanas', href: '/darshanas' },"
        )
    with open(path, 'w') as f:
        f.write(content)
    print("  ✓ Added Darśanas to nav")
else:
    print("  ✓ Darśanas already in nav")
PYEOF

echo ""
echo "=== Fix 2: Patch deep dive [slug]/page.tsx — ensure color lookup is robust ==="
cat > "app/darshanas/[slug]/page.tsx" << 'DEEPDIVE_EOF'
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SCHOOLS, SCHOOL_ORDER, PAIR_MAP } from '@/lib/darshanas/data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SCHOOL_ORDER.map((s) => ({ slug: s }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = SCHOOLS[params.slug];
  if (!s) return { title: 'School not found' };
  return {
    title: `${s.name} — ${s.category} | Vedika Darśanas`,
    description: s.blurb,
  };
}

const PAIR_COLOR: Record<string, string> = {
  nyaya: '#2D7A6F', vaisheshika: '#2D7A6F',
  samkhya: '#5B4A8A', yoga: '#5B4A8A',
  mimamsa: '#C07828', vedanta: '#C07828',
};
const PAIR_BG: Record<string, string> = {
  nyaya: '#E8F5F3', vaisheshika: '#E8F5F3',
  samkhya: '#EFECF8', yoga: '#EFECF8',
  mimamsa: '#FEF7ED', vedanta: '#FEF7ED',
};
const PAIR_BORDER: Record<string, string> = {
  nyaya: '#A8D8D2', vaisheshika: '#A8D8D2',
  samkhya: '#C8B8F0', yoga: '#C8B8F0',
  mimamsa: '#F9D09A', vedanta: '#F9D09A',
};

export default function SchoolDeepDive({ params }: Props) {
  const s = SCHOOLS[params.slug];
  if (!s) notFound();

  const col = PAIR_COLOR[s.id] ?? '#C07828';
  const bg  = PAIR_BG[s.id]  ?? '#FEF7ED';
  const bd  = PAIR_BORDER[s.id] ?? '#F9D09A';
  const pairId     = PAIR_MAP[s.id] ?? s.id;
  const pairSchool = SCHOOLS[pairId];

  return (
    <div className="min-h-screen bg-sandal-100">

      {/* ── BREADCRUMB ── */}
      <div
        className="flex items-center gap-2 px-6 py-3 sm:px-10"
        style={{ background: '#F5EFE5', borderBottom: '1px solid rgba(192,120,40,0.15)' }}
      >
        <Link href="/darshanas" className="font-sans text-[12px] text-ink-muted no-underline hover:text-ink">
          Darśanas
        </Link>
        <span className="text-sandal-300 text-xs">›</span>
        <span className="font-serif text-[13px] text-ink">{s.name} deep dive</span>
      </div>

      {/* ── SCHOOL NAV TABS ── */}
      <div
        className="flex overflow-x-auto px-6 sm:px-10"
        style={{ background: '#FDFAF6', borderBottom: '1px solid rgba(192,120,40,0.18)' }}
      >
        {SCHOOL_ORDER.map((id) => {
          const sc     = SCHOOLS[id];
          const active = id === params.slug;
          const c      = PAIR_COLOR[id] ?? '#C07828';
          return (
            <Link
              key={id}
              href={`/darshanas/${id}`}
              className="font-serif text-[14px] px-4 py-3 no-underline whitespace-nowrap flex-shrink-0"
              style={{
                color:        active ? c : '#7A6A56',
                fontWeight:   active ? 600 : 400,
                borderBottom: active ? `2.5px solid ${c}` : '2.5px solid transparent',
                marginBottom: -1,
              }}
            >
              {sc.name}
            </Link>
          );
        })}
      </div>

      {/* ── SŪTRA BLOCK ── */}
      <div
        className="relative overflow-hidden px-10 py-9 sm:px-14"
        style={{ background: '#1C1208' }}
      >
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
          style={{ fontFamily: "'Noto Serif Devanagari', serif", fontSize: '160px', color: '#fff', opacity: 0.05 }}
          aria-hidden="true"
        >
          {s.glyph}
        </div>
        <div className="relative">
          <p
            className="font-sans font-medium uppercase mb-4"
            style={{ fontSize: '9.5px', letterSpacing: '0.18em', color: '#E8A850' }}
          >
            {s.sutraRef}
          </p>
          <p
            className="mb-4 whitespace-pre-line leading-[1.85]"
            lang="sa"
            style={{ fontFamily: "'Noto Serif Devanagari', serif", fontSize: '1.02rem', color: '#EEE0C0' }}
          >
            {s.sutra}
          </p>
          <p
            className="font-serif italic mb-3 leading-[1.75]"
            style={{ fontSize: '0.88rem', color: '#B8A080' }}
          >
            {s.sutraTrans}
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px' }}>
            <p className="font-sans leading-[1.65]" style={{ fontSize: '0.72rem', color: '#6A5A40' }}>
              {s.sutraNote}
            </p>
          </div>
        </div>
      </div>

      {/* ── IDENTITY STRIP ── */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 bg-white"
        style={{ border: '1px solid rgba(192,120,40,0.18)' }}
      >
        {[
          { l: 'Founder / texts', v: s.founder },
          { l: 'Period',          v: s.period   },
          { l: 'Primary text',    v: s.text     },
          { l: 'Pramāṇas',        v: s.pramanas },
        ].map((c, i) => (
          <div
            key={i}
            className="p-3.5"
            style={{
              borderRight:  i < 3 ? '1px solid rgba(192,120,40,0.12)' : 'none',
              borderBottom: '1px solid rgba(192,120,40,0.12)',
            }}
          >
            <p
              className="font-sans uppercase mb-1.5"
              style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#7A6A56' }}
            >
              {c.l}
            </p>
            <p className="font-serif font-medium leading-[1.4] text-ink" style={{ fontSize: '0.82rem' }}>
              {c.v}
            </p>
          </div>
        ))}
      </div>

      <div className="px-6 sm:px-10 lg:px-14 bg-sandal-100">

        {/* ── TENETS ── */}
        <p
          className="font-sans uppercase font-medium mt-6 mb-3"
          style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: col }}
        >
          Core philosophy
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-8">
          {s.tenets.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-md p-5"
              style={{ border: '1px solid rgba(192,120,40,0.15)' }}
            >
              <div className="h-0.5 w-7 rounded-full mb-2.5" style={{ background: col }} />
              <p
                className="font-sans font-medium uppercase mb-2"
                style={{ fontSize: '9.5px', letterSpacing: '0.07em', color: '#1C1208' }}
              >
                {t.title}
              </p>
              <p className="font-serif leading-[1.72] text-ink-light mb-0" style={{ fontSize: '0.83rem' }}>
                {t.body}
              </p>
              {t.note && (
                <p
                  className="font-serif italic leading-[1.62] mt-2.5 pt-2.5 text-ink-muted"
                  style={{ fontSize: '0.75rem', borderTop: '1px solid rgba(192,120,40,0.12)' }}
                >
                  {t.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── COMMENTATORS ── */}
        <p
          className="font-sans uppercase font-medium mb-3"
          style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: col }}
        >
          Commentary tradition
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: '0.78rem' }}>
            <thead>
              <tr>
                {['Ācārya', 'Text', 'Period', 'Contribution'].map((h) => (
                  <th
                    key={h}
                    className="text-left font-sans font-medium"
                    style={{
                      fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#7A6A56', padding: '8px 10px',
                      borderBottom: '1px solid rgba(192,120,40,0.2)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.commentators.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(192,120,40,0.1)' }}>
                  <td className="font-serif font-medium text-ink"     style={{ padding: '9px 10px', fontSize: '0.82rem' }}>{c.name}</td>
                  <td className="font-serif italic text-ink-light"    style={{ padding: '9px 10px', fontSize: '0.8rem'  }}>{c.text}</td>
                  <td className="font-sans text-ink-muted whitespace-nowrap" style={{ padding: '9px 10px', fontSize: '0.73rem' }}>{c.period}</td>
                  <td className="font-sans text-ink-light leading-[1.5]"     style={{ padding: '9px 10px', fontSize: '0.73rem' }}>{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── PAIR DIALOGUE ── */}
        <p
          className="font-sans uppercase font-medium mb-3"
          style={{ fontSize: '9.5px', letterSpacing: '0.16em', color: col }}
        >
          Pair dialogue — {s.name} ↔ {pairSchool?.name}
        </p>
        <div
          className="font-serif leading-[1.78] text-ink-light mb-8"
          style={{ borderLeft: `3px solid ${col}`, background: bg, padding: '14px 20px', fontSize: '0.84rem' }}
        >
          {s.dialogue}
        </div>

        {/* ── CTA ROW ── */}
        <div className="flex flex-wrap gap-3 pb-12">
          {pairSchool && (
            <Link
              href={`/darshanas/${pairId}`}
              className="font-serif text-[0.82rem] no-underline px-4 py-2 rounded"
              style={{ background: bg, border: `1px solid ${bd}`, color: col }}
            >
              {pairSchool.name} deep dive →
            </Link>
          )}
          <Link
            href="/darshanas/matrix"
            className="font-sans text-[0.78rem] no-underline px-4 py-2 rounded text-ink-muted"
            style={{ background: '#EDE0CC', border: '1px solid rgba(192,120,40,0.2)' }}
          >
            Open full comparison matrix →
          </Link>
          <Link
            href="/darshanas"
            className="font-sans text-[0.78rem] no-underline px-4 py-2 rounded text-ink-muted"
            style={{ background: 'none', border: '1px solid rgba(192,120,40,0.2)' }}
          >
            ← All schools
          </Link>
        </div>

      </div>
    </div>
  );
}
DEEPDIVE_EOF
echo "  ✓ Deep dive page rewritten with robust color lookup"

echo ""
echo "=== Fix 3: Align matrix column names — Ontology→Tattva, Liberation→Mokṣa ==="
python3 - <<'PYEOF'
path = 'app/darshanas/matrix/page.tsx'
with open(path, 'r') as f:
    content = f.read()

# Align column headers to match the homepage teaser
content = content.replace("'Ontology'", "'Tattva'")
content = content.replace("'Liberation'", "'Mokṣa'")
content = content.replace('"Ontology"', '"Tattva"')
content = content.replace('"Liberation"', '"Mokṣa"')

with open(path, 'w') as f:
    f.write(content)
print("  ✓ Matrix columns aligned: Ontology→Tattva, Liberation→Mokṣa")
PYEOF

echo ""
echo "=== Fix 4: Verify homepage darshanas card links are correct ==="
python3 - <<'PYEOF'
import os, re

# Check app/page.tsx for darshanas links
path = 'app/page.tsx'
if os.path.exists(path):
    with open(path, 'r') as f:
        content = f.read()
    if '/darshanas' in content:
        print("  ✓ Homepage already links to /darshanas")
    else:
        print("  ⚠ Homepage has no /darshanas links — check manually")
else:
    print("  ⚠ app/page.tsx not found")
PYEOF

echo ""
echo "=== Committing all fixes ==="
git add \
  lib/site-config.ts \
  "app/darshanas/[slug]/page.tsx" \
  app/darshanas/matrix/page.tsx

git diff --cached --stat

git commit -m "fix: darshanas — nav link, deep dive color consistency, matrix column alignment"
git push origin main

echo ""
echo "✓ Done. Vercel will deploy in ~60 seconds."
echo ""
echo "Test these URLs after deployment:"
echo "  https://askvdika.com/darshanas"
echo "  https://askvdika.com/darshanas/nyaya"
echo "  https://askvdika.com/darshanas/samkhya"
echo "  https://askvdika.com/darshanas/vedanta"
echo "  https://askvdika.com/darshanas/matrix"
