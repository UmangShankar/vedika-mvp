import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  bg?: 'default' | 'sandal' | 'sandal-200';
};

export function Section({ id, title, subtitle, children, bg = 'default' }: SectionProps) {
  const bgClass = bg === 'sandal' ? 'bg-sandal-50' : bg === 'sandal-200' ? 'bg-sandal-200' : '';
  return (
    <section
      id={id}
      className={`space-y-6 py-10 ${bgClass}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <div className="mx-auto max-w-full-w px-4 sm:px-6 lg:px-8">
        {title ? (
          <header className="mb-6 space-y-2">
            <h2 id={`${id}-title`} className="font-serif text-display-sm text-ink">
              {title}
            </h2>
            {subtitle ? <p className="max-w-content text-body text-ink-muted">{subtitle}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
