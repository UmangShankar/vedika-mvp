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
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {meta ? <p className="text-sm text-slate-500">{meta}</p> : null}
        {dek ? <p className="text-lg text-slate-700">{dek}</p> : null}
      </header>
      <div className="space-y-4 text-slate-800">{children}</div>
    </article>
  );
}
