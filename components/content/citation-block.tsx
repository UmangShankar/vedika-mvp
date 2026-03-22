type CitationBlockProps = {
  label: string;
  citationText: string;
  url?: string;
};

export function CitationBlock({ label, citationText, url }: CitationBlockProps) {
  return (
    <article className="rounded-lg border border-amber-100 bg-white p-4 text-sm">
      <p className="font-medium">{label}</p>
      <p className="mt-1 text-slate-700">{citationText}</p>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-saffron">
          Open source
        </a>
      ) : null}
    </article>
  );
}
