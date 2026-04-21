type CitationBlockProps = {
  label: string;
  citationText: string;
  url?: string;
};

export function CitationBlock({ label, citationText, url }: CitationBlockProps) {
  return (
    <article className="rounded-lg border bg-sandal-50 p-4 text-body-sm">
      <p className="font-medium text-ink">{label}</p>
      <p className="mt-1 text-ink-muted">{citationText}</p>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-saffron-500">
          Open source
        </a>
      ) : null}
    </article>
  );
}
