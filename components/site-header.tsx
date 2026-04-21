'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(192,120,40,0.18)] bg-sandal-50">
      <div className="mx-auto flex h-14 max-w-full-w items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-1.5 no-underline">
          <span className="devanagari text-sm text-saffron-500">ॐ</span>
          <span className="font-serif text-[18px] font-semibold text-ink">Vedika</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-caption font-medium text-ink-muted no-underline transition-colors hover:text-saffron-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/ask-vedika"
            className="rounded-sm bg-saffron-500 px-3 py-1.5 text-caption font-medium text-white no-underline transition-colors hover:bg-saffron-600"
          >
            Ask Vedika
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="text-ink-muted">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-[rgba(192,120,40,0.18)] bg-sandal-50 md:hidden">
          <nav className="flex flex-col px-4 py-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-caption font-medium text-ink-muted no-underline hover:text-saffron-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/ask-vedika"
              className="mt-2 inline-flex w-fit rounded-sm bg-saffron-500 px-3 py-1.5 text-caption font-medium text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Ask Vedika
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
