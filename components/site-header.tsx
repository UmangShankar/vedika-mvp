'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-caption font-medium no-underline transition-colors ${
                  isActive
                    ? 'border-b-2 border-saffron-400 pb-0.5 text-saffron-500'
                    : 'text-ink-muted hover:text-saffron-500'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="text-[24px] leading-none text-ink">
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-b border-warm bg-sandal-50 md:hidden">
          <nav className="flex flex-col">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block w-full border-b border-sandal-200 px-4 py-4 text-body-sm no-underline hover:bg-sandal-100 ${
                    isActive ? 'font-medium text-saffron-500' : 'text-ink'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="px-4 py-3">
              <Link
                href="/ask-vedika"
                className="inline-flex rounded-sm bg-saffron-500 px-3 py-1.5 text-caption font-medium text-white no-underline hover:bg-saffron-600"
                onClick={() => setMenuOpen(false)}
              >
                Ask Vedika
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
