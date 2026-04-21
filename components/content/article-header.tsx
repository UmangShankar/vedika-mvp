import { CanonBadge } from '@/components/content/canon-badge';

type Canon = 'sruti' | 'smriti' | 'sutra' | 'purana' | 'itihasa';

type ArticleHeaderProps = {
  title: string;
  subtitle?: string;
  canon?: Canon;
  readingTime?: string;
  lastUpdated?: string;
  sourceCount?: number;
};

export function ArticleHeader({
  title,
  subtitle,
  canon,
  readingTime,
  lastUpdated,
  sourceCount,
}: ArticleHeaderProps) {
  const hasMeta = readingTime || lastUpdated || sourceCount;

  return (
    <header className="space-y-4">
      {canon && <CanonBadge canon={canon} />}

      <h1 className="font-serif text-display-sm text-ink">{title}</h1>

      {subtitle && (
        <p className="font-serif text-body-lg text-ink-muted">{subtitle}</p>
      )}

      {hasMeta && (
        <div className="flex flex-wrap items-center gap-4 text-caption text-ink-muted">
          {readingTime && <span>{readingTime} read</span>}
          {lastUpdated && <span>Updated {lastUpdated}</span>}
          {sourceCount !== undefined && <span>{sourceCount} sources</span>}
        </div>
      )}

      <div className="h-px bg-saffron-200" />
    </header>
  );
}
