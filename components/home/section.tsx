import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="space-y-4" aria-labelledby={title ? `${id}-title` : undefined}>
      {title ? (
        <header className="space-y-2">
          <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {subtitle ? <p className="max-w-3xl text-slate-700">{subtitle}</p> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}
