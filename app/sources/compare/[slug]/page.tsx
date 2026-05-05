import type { Metadata } from 'next';
import Link from 'next/link';
import { comparePages } from '@/lib/sourcesData';
import styles from '@/styles/sources.module.css';

const KNOWN_SLUGS = ['bhashya-schools', 'sruti-smriti', 'upanishad-traditions'];

const STUB_TITLES: Record<string, string> = {
  'sruti-smriti':         'Śruti vs Smṛti — authority & scope',
  'upanishad-traditions': 'Upaniṣad interpretations across schools',
};

export function generateStaticParams() {
  return KNOWN_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = comparePages[slug];
  if (page) return { title: page.title, description: page.desc };
  const stubTitle = STUB_TITLES[slug];
  return stubTitle ? { title: stubTitle } : {};
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparePages[slug];

  const isStub = !page && KNOWN_SLUGS.includes(slug);
  const stubTitle = STUB_TITLES[slug];

  if (!page && !isStub) {
    return (
      <div className={styles.pageWrap}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span aria-hidden>·</span>
          <Link href="/sources">Sources</Link>
          <span aria-hidden>·</span>
          <span>Comparison</span>
        </nav>
        <h1 className={styles.pageTitle}>Comparison not found</h1>
        <p className={styles.pageDesc}>This comparison page does not exist.</p>
      </div>
    );
  }

  if (isStub) {
    return (
      <div className={styles.pageWrap}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span aria-hidden>·</span>
          <Link href="/sources">Sources</Link>
          <span aria-hidden>·</span>
          <span>{stubTitle}</span>
        </nav>
        <h1 className={styles.pageTitle}>{stubTitle}</h1>
        <div className={styles.stubBox}>
          This comparison is in progress — check back soon.
        </div>
      </div>
    );
  }

  const breadcrumbParent = page.slug === 'bhashya-schools'
    ? <><Link href="/sources">Sources</Link><span aria-hidden>·</span><span>Bhāṣya & Ṭīkā</span></>
    : <Link href="/sources">Sources</Link>;

  return (
    <div className={styles.pageWrap}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span aria-hidden>·</span>
        {breadcrumbParent}
        <span aria-hidden>·</span>
        <span>{page.title}</span>
      </nav>

      {/* Page header */}
      <h1 className={styles.pageTitle}>{page.title}</h1>
      <p className={styles.pageDesc}>{page.desc}</p>

      {/* Comparison table */}
      <div className={styles.compareTableWrap}>
        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th style={{ minWidth: 140 }}>Dimension</th>
              {page.columns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {page.rows.map((row, i) => (
              <tr key={i}>
                <td className={styles.rowLabel}>{row.dimension}</td>
                <td>{row.advaita}</td>
                <td>{row.vishishtadvaita}</td>
                <td>{row.dvaita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
