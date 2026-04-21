import type { ReactNode } from 'react';

type ArticleLayoutProps = {
  title: string;
  dek?: string;
  meta?: string;
  children: ReactNode;
};

export function ArticleLayout({ title, dek, meta, children }: ArticleLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-2">
        <h1 className="font-serif text-display-sm text-ink">{title}</h1>
        {meta ? <p className="text-caption text-ink-muted">{meta}</p> : null}
        {dek ? <p className="text-body-lg text-ink-muted">{dek}</p> : null}
      </header>
      <div className="space-y-4 text-ink-light">{children}</div>
    </article>
  );
}
