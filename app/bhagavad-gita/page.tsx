'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GitaChakra } from '@/components/content/gita-chakra';
import type { GitaChapter } from '@/lib/sanity/types';

const KARMA_COLOR = '#B8732A';
const BHAKTI_COLOR = '#B03030';
const JNANA_COLOR = '#1F6B60';

export default function BhagavadGitaPage() {
  const [chapters, setChapters] = useState<GitaChapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gita-chapters')
      .then((r) => r.json())
      .then((data: GitaChapter[]) => {
        setChapters(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-wide px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-caption text-ink-muted">
        <Link href="/" className="no-underline hover:text-saffron-500">
          Home
        </Link>
        <span>→</span>
        <span className="text-ink">Bhagavad Gita</span>
      </nav>

      {/* Page intro */}
      <header className="mb-8 space-y-3">
        <p className="text-overline tracking-widest text-saffron-500">
          Kurukshetra · 18 Adhyāyas · 700 Shlokas · Narrated by Sañjaya to Dhṛtarāṣṭra
        </p>
        <h1 className="font-serif text-display-sm text-ink">
          Bhagavad Gītā — Jñāna Chakra
        </h1>
        <p className="max-w-content text-body text-ink-muted">
          Click any chapter to explore its scene, teaching, shlokas and commentary.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 pt-1">
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: KARMA_COLOR }}
              aria-hidden="true"
            />
            <span className="text-caption text-ink-muted">Karma Yoga · Ch 1–6</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: BHAKTI_COLOR }}
              aria-hidden="true"
            />
            <span className="text-caption text-ink-muted">Bhakti Yoga · Ch 7–12</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: JNANA_COLOR }}
              aria-hidden="true"
            />
            <span className="text-caption text-ink-muted">Jñāna Yoga · Ch 13–18</span>
          </div>
        </div>
      </header>

      {/* Web or loading */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <div className="space-y-3 text-center">
            <div
              className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"
              style={{ borderColor: `${KARMA_COLOR}44`, borderTopColor: KARMA_COLOR }}
            />
            <p className="text-caption text-ink-muted">Loading chapters…</p>
          </div>
        </div>
      ) : (
        <GitaChakra chapters={chapters} />
      )}
    </div>
  );
}
