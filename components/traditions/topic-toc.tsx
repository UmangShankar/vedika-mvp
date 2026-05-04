'use client';

import { useEffect, useState } from 'react';

export type TocHeading = { id: string; text: string };

function TocList({ headings, active }: { headings: TocHeading[]; active: string }) {
  return (
    <ol className="space-y-1.5">
      {headings.map((h, i) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            className={`flex gap-2 text-caption no-underline transition-colors ${
              active === h.id
                ? 'text-saffron-500 font-medium'
                : 'text-ink-muted hover:text-ink-light'
            }`}
          >
            <span className="flex-shrink-0 text-ink-faint">{i + 1}.</span>
            <span>{h.text}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TopicTableOfContents({ headings }: { headings: TocHeading[] }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-10% 0% -65% 0%', threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-lg border border-[rgba(192,120,40,0.18)] bg-sandal-100 p-4"
    >
      {/* Mobile: collapsible */}
      <details className="md:hidden">
        <summary className="cursor-pointer text-label font-medium text-ink-muted uppercase tracking-wider select-none">
          Contents
        </summary>
        <div className="mt-3">
          <TocList headings={headings} active={active} />
        </div>
      </details>

      {/* Desktop: always visible */}
      <div className="hidden md:block">
        <p className="mb-3 text-label font-medium text-ink-muted uppercase tracking-wider">
          Contents
        </p>
        <TocList headings={headings} active={active} />
      </div>
    </nav>
  );
}
