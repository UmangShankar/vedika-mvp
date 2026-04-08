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
    <header className="space-y-4 rounded-2xl border border-amber-100 bg-white p-7 sm:p-10">
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-amber-200 px-3 py-1 text-xs font-medium text-saffron">{eyebrow}</p>
      ) : null}
      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="max-w-3xl text-lg text-slate-700">{description}</p>
      {cta ? (
        <Link href={cta.href} className="inline-flex rounded-md bg-saffron px-4 py-2 font-medium text-white no-underline">
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
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="text-slate-700">{subtitle}</p> : null}
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
        <li key={`${card.href}-${card.title}`} className="rounded-xl border border-amber-100 bg-white p-5">
          <h3 className="text-lg font-semibold">
            <Link href={card.href} className="no-underline hover:text-saffron">
              {card.title}
            </Link>
          </h3>
          {card.meta ? <p className="mt-1 text-sm text-slate-500">{card.meta}</p> : null}
          <p className="mt-2 text-slate-700">{card.summary}</p>
        </li>
      ))}
    </ul>
  );
}
