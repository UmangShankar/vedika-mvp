'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/sources.module.css';
import { collections } from '@/lib/sourcesData';

type CollId = 'sruti' | 'smriti' | 'bhashya';

const TIER_STYLE: Record<string, string> = {
  purple: styles.tierPurple,
  teal:   styles.tierTeal,
  amber:  styles.tierAmber,
};
const DOT_STYLE: Record<string, string> = {
  purple: styles.dotPurple,
  teal:   styles.dotTeal,
  amber:  styles.dotAmber,
};

const hierarchyTiers = [
  { color: 'purple', badge: 'Primary',   name: 'Śruti',         desc: 'Heard / revealed. Eternal, unauthored. Highest authority in all schools.' },
  { color: 'teal',   badge: 'Secondary', name: 'Smṛti',         desc: 'Remembered. Human-authored, derived from Śruti. Contextually authoritative.' },
  { color: 'amber',  badge: 'Tertiary',  name: 'Bhāṣya & Ṭīkā', desc: 'Commentary and sub-commentary. School-specific interpretive tradition.' },
];

const conceptChips = [
  { label: 'Ātman',            slug: 'atman' },
  { label: 'Brahman',          slug: 'brahman' },
  { label: 'Karma',            slug: 'karma' },
  { label: 'Mokṣa',            slug: 'moksha' },
  { label: 'Dharma',           slug: 'dharma' },
  { label: 'Māyā',             slug: 'maya' },
  { label: 'Time & cosmology', slug: 'time' },
  { label: 'Ethics',           slug: 'ethics' },
];

const compareChips = [
  { label: 'Śruti vs Smṛti — authority & scope',           slug: 'sruti-smriti' },
  { label: 'Advaita vs Viśiṣṭādvaita — commentary tradition', slug: 'bhashya-schools' },
  { label: 'Upaniṣad interpretations across schools',       slug: 'upanishad-traditions' },
];

export function SourcesIndexPage() {
  const [activeColl, setActiveColl] = useState<CollId>('sruti');
  const [activeTab, setActiveTab] = useState('all');

  const coll = collections.find(c => c.id === activeColl)!;
  const texts = coll.texts[activeTab] ?? coll.texts['all'];

  function selectColl(id: CollId) {
    setActiveColl(id);
    setActiveTab('all');
  }

  return (
    <div className={styles.pageWrap}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span aria-hidden>·</span>
        <span>Sources</span>
      </nav>

      {/* Page header */}
      <h1 className={styles.pageTitle}>Source collections</h1>
      <p className={styles.pageDesc}>
        Vedic literature organised by textual authority — from eternal revelation through classical commentary. Each collection carries a distinct epistemic weight within Dharmic epistemology.
      </p>

      {/* Epistemic hierarchy */}
      <div className={styles.sectionLabel}>Epistemic hierarchy</div>
      <div className={styles.hierarchyStrip}>
        {hierarchyTiers.map(t => (
          <div key={t.name} className={`${styles.hierarchyTier} ${TIER_STYLE[t.color]}`}>
            <span className={styles.hierarchyBadge}>{t.badge}</span>
            <div className={styles.hierarchyName}>{t.name}</div>
            <div className={styles.hierarchyDesc}>{t.desc}</div>
          </div>
        ))}
      </div>

      {/* Browse by collection */}
      <div className={styles.sectionLabel}>Browse by collection</div>
      <div className={styles.collGrid}>
        {collections.map(c => (
          <button
            key={c.id}
            className={`${styles.collCard} ${activeColl === c.id ? styles.active : ''}`}
            onClick={() => selectColl(c.id as CollId)}
          >
            <div className={styles.collName}>
              <span className={`${styles.collDot} ${DOT_STYLE[c.dot]}`} />
              {c.name}
            </div>
            <div className={styles.collSub}>{c.sub}</div>
            <div className={styles.collMeta}>{c.meta}</div>
          </button>
        ))}
      </div>

      {/* Text panel */}
      <div className={styles.textPanel}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>{coll.panelTitle}</span>
          <div className={styles.tabRow}>
            {coll.tabs.map(tab => (
              <button
                key={tab.key}
                className={`${styles.tabBtn} ${activeTab === tab.key ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {texts.map((text, i) =>
          text.href ? (
            <Link key={i} href={text.href} className={styles.textRow}>
              <div className={styles.textRowLeft}>
                <span className={styles.textTitle}>{text.title}</span>
                <span className={styles.textMeta}>{text.meta}</span>
              </div>
              <span className={styles.textRight}>{text.right}</span>
            </Link>
          ) : (
            <div key={i} className={styles.textRow}>
              <div className={styles.textRowLeft}>
                <span className={styles.textTitle}>{text.title}</span>
                <span className={styles.textMeta}>{text.meta}</span>
              </div>
              <span className={styles.textRight}>{text.right}</span>
            </div>
          )
        )}
      </div>

      {/* Bottom row: stats + cross-ref chips */}
      <div className={styles.bottomRow}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total texts</div>
          <div className={styles.statVal}>67</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Collections</div>
          <div className={styles.statVal}>3</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Schools</div>
          <div className={styles.statVal}>12</div>
        </div>
        <div className={styles.crossrefCard}>
          <div className={styles.crossrefTitle}>Explore by concept</div>
          <div className={styles.chipRow}>
            {conceptChips.map(chip => (
              <Link key={chip.slug} href={`/sources/concept/${chip.slug}`} className={styles.chip}>
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Compare across collections */}
      <div className={styles.sectionLabel}>Compare across collections</div>
      <div className={styles.chipRow}>
        {compareChips.map(chip => (
          <Link key={chip.slug} href={`/sources/compare/${chip.slug}`} className={styles.chip}>
            {chip.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
