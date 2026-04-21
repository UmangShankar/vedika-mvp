import Link from 'next/link';
import type { ReactNode } from 'react';

type HubHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
};

export function HubHero({ eyebrow, title, description, cta }: HubHeroProps) {
  return (
    <header className="space-y-4 rounded-2xl border bg-sandal-50 p-7 sm:p-10">
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-warm px-3 py-1 text-overline text-saffron-500">{eyebrow}</p>
      ) : null}
      <h1 className="max-w-4xl font-serif text-display-sm text-ink">{title}</h1>
      <p className="max-w-3xl text-body-lg text-ink-muted">{description}</p>
      {cta ? (
        <Link href={cta.href} className="inline-flex rounded-md bg-saffron-500 px-4 py-2 font-medium text-white no-underline hover:bg-saffron-600">
          {cta.label}
        </Link>
      ) : null}
    </header>
  );
}

type HubSectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function HubSection({ title, subtitle, children }: HubSectionProps) {
  return (
    <section className="space-y-4">
      <header className="space-y-1">
        <h2 className="font-serif text-heading text-ink">{title}</h2>
        {subtitle ? <p className="text-ink-muted">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}

type FeatureCard = {
  title: string;
  summary: string;
  href: string;
  meta?: string;
};

type FeatureGridProps = {
  cards: FeatureCard[];
};

export function FeatureGrid({ cards }: FeatureGridProps) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <li key={`${card.href}-${card.title}`} className="rounded-xl border bg-sandal-50 p-5 transition-all duration-200 hover:scale-[1.01] hover:border-warm hover:shadow-card">
          <h3 className="font-serif text-subheading text-ink">
            <Link href={card.href} className="no-underline hover:text-saffron-500">
              {card.title}
            </Link>
          </h3>
          {card.meta ? <p className="mt-1 text-caption text-ink-muted">{card.meta}</p> : null}
          <p className="mt-2 text-ink-muted">{card.summary}</p>
        </li>
      ))}
    </ul>
  );
}
