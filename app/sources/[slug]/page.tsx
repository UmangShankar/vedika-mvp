import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { textDetails } from '@/lib/sourcesData';
import styles from '@/styles/sources.module.css';

const COLL_LABEL: Record<string, string> = {
  sruti:   'Śruti',
  smriti:  'Smṛti',
  bhashya: 'Bhāṣya & Ṭīkā',
};
const COLL_TIER: Record<string, string> = {
  sruti:   'Primary revelation',
  smriti:  'Remembered corpus',
  bhashya: 'Classical commentary',
};
const BADGE_CLASS: Record<string, string> = {
  sruti:   styles.badgePurple,
  smriti:  styles.badgeTeal,
  bhashya: styles.badgeAmber,
};

export function generateStaticParams() {
  return Object.keys(textDetails).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = textDetails[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.subtitle,
  };
}

export default async function SourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = textDetails[slug];
  if (!page) notFound();

  const badgeClass = BADGE_CLASS[page.collection] ?? styles.badgePurple;

  return (
    <div className={styles.detailWrap}>
      {/* Main column */}
      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span aria-hidden>·</span>
          <Link href="/sources">Sources</Link>
          <span aria-hidden>·</span>
          <span>{COLL_LABEL[page.collection]}</span>
          <span aria-hidden>·</span>
          <span>{page.title}</span>
        </nav>

        {/* Eyebrow */}
        <div className={styles.detailEyebrow}>
          <span className={`${styles.detailBadge} ${badgeClass}`}>
            {COLL_LABEL[page.collection]}
          </span>
          <span className={styles.detailTier}>{COLL_TIER[page.collection]}</span>
        </div>

        <h1 className={styles.detailTitle}>{page.title}</h1>
        <p className={styles.detailSub}>{page.subtitle}</p>

        {/* Metadata row */}
        <div className={styles.metaRow}>
          {page.meta.map(m => (
            <div key={m.label} className={styles.metaItem}>
              <div className={styles.metaLabel}>{m.label}</div>
              <div className={styles.metaVal}>{m.value}</div>
            </div>
          ))}
        </div>

        {/* Body */}
        {page.body.map((block, i) => {
          if (block.type === 'h2')        return <h2 key={i} className={styles.bodyH2}>{block.text}</h2>;
          if (block.type === 'pullquote') return <blockquote key={i} className={styles.pullquote}>{block.text}</blockquote>;
          return <p key={i} className={styles.bodyP}>{block.text}</p>;
        })}
      </main>

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        {/* Table of contents */}
        <div className={styles.sidebarCard}>
          <div className={styles.sidebarCardTitle}>Contents</div>
          {page.toc.map(item => (
            <span key={item} className={styles.sidebarItem}>{item}</span>
          ))}
        </div>

        {/* Key concepts */}
        <div className={styles.sidebarCard}>
          <div className={styles.sidebarCardTitle}>Key concepts</div>
          <div className={styles.sidebarChipRow}>
            {page.keyConcepts.map(concept =>
              concept.conceptSlug ? (
                <Link
                  key={concept.label}
                  href={`/sources/concept/${concept.conceptSlug}`}
                  className={styles.sidebarChip}
                >
                  {concept.label}
                </Link>
              ) : (
                <span key={concept.label} className={styles.sidebarChip}>{concept.label}</span>
              )
            )}
          </div>
        </div>

        {/* Related texts */}
        {page.relatedTexts.length > 0 && (
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCardTitle}>Related texts</div>
            {page.relatedTexts.map(text =>
              text.slug ? (
                <Link key={text.title} href={`/sources/${text.slug}`} className={styles.sidebarItem}>
                  {text.title}
                </Link>
              ) : (
                <span key={text.title} className={styles.sidebarItem}>{text.title}</span>
              )
            )}
          </div>
        )}

        {/* Commentaries */}
        {page.commentaries.length > 0 && (
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCardTitle}>Commentaries</div>
            {page.commentaries.map(c =>
              c.slug ? (
                <Link key={c.title} href={`/sources/${c.slug}`} className={styles.sidebarItem}>
                  {c.title}
                </Link>
              ) : (
                <span key={c.title} className={styles.sidebarItem}>{c.title}</span>
              )
            )}
          </div>
        )}

        {/* Compare link for bhashya texts */}
        {page.collection === 'bhashya' && (
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCardTitle}>Compare schools</div>
            <Link href="/sources/compare/bhashya-schools" className={styles.sidebarItem}>
              Advaita · Viśiṣṭādvaita · Dvaita →
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
