import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { concepts } from '@/lib/sourcesData';
import styles from '@/styles/sources.module.css';

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

const BADGE_STYLE: Record<string, string> = {
  purple: styles.badgePurple,
  teal:   styles.badgeTeal,
  amber:  styles.badgeAmber,
};

export function generateStaticParams() {
  return Object.keys(concepts).map(concept => ({ concept }));
}

export async function generateMetadata({ params }: { params: Promise<{ concept: string }> }): Promise<Metadata> {
  const { concept } = await params;
  const page = concepts[concept];
  if (!page) return {};
  return {
    title: page.heading,
    description: page.desc,
  };
}

export default async function ConceptPage({ params }: { params: Promise<{ concept: string }> }) {
  const { concept } = await params;
  const page = concepts[concept];
  if (!page) notFound();

  return (
    <div className={styles.pageWrap}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span aria-hidden>·</span>
        <Link href="/sources">Sources</Link>
        <span aria-hidden>·</span>
        <span>{page.heading}</span>
      </nav>

      {/* Page header */}
      <h1 className={styles.pageTitle}>{page.heading}</h1>
      <p className={styles.pageDesc}>{page.desc}</p>

      {/* Concept switcher */}
      <div className={styles.sectionLabel}>Browse concepts</div>
      <div className={`${styles.chipRow}`} style={{ marginBottom: '2rem' }}>
        {conceptChips.map(chip => (
          <Link
            key={chip.slug}
            href={`/sources/concept/${chip.slug}`}
            className={styles.chip}
            style={chip.slug === concept ? {
              borderColor: 'var(--color-border-primary)',
              color: 'var(--color-text-primary)',
              fontWeight: 500,
            } : {}}
          >
            {chip.label}
          </Link>
        ))}
      </div>

      {/* Results */}
      {page.results.map((result, ri) => (
        <div key={ri} className={styles.conceptResultRow}>
          <div className={styles.conceptResultHeader}>
            <span className={styles.crhTitle}>{result.coll}</span>
            <span className={`${styles.detailBadge} ${BADGE_STYLE[result.badge]}`}>
              {result.coll === 'Śruti' ? 'Primary' : result.coll === 'Smṛti' ? 'Secondary' : 'Tertiary'}
            </span>
          </div>
          {result.texts.map((text, ti) =>
            text.href ? (
              <Link key={ti} href={text.href} className={styles.crtRow}>
                <div className={styles.crtTitle}>{text.title}</div>
                <div className={styles.crtPassage}>{text.meta}</div>
              </Link>
            ) : (
              <div key={ti} className={styles.crtRow}>
                <div className={styles.crtTitle}>{text.title}</div>
                <div className={styles.crtPassage}>{text.meta}</div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
