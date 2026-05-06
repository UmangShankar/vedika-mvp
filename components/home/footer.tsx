import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: '0.5px solid var(--color-border-tertiary)',
        background: 'var(--color-background-secondary)',
      }}
    >
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <span
              className="font-serif text-subheading"
              style={{ color: 'var(--color-text-primary)' }}
            >
              ॐ Vedika
            </span>
            <p
              className="text-body-sm"
              style={{ color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}
            >
              A content-first Sanatan Dharma research platform. Source-grounded, trust-first.
            </p>
            <Link
              href="/about"
              className="text-caption no-underline hover:underline"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              About Vedika →
            </Link>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-3">
            <p
              className="text-overline tracking-widest uppercase"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Explore
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/traditions"
                className="text-body-sm no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Traditions
              </Link>
              <Link
                href="/darshanas"
                className="text-body-sm no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Darshanas
              </Link>
              <Link
                href="/glossary"
                className="text-body-sm no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Glossary
              </Link>
            </nav>
          </div>

          {/* Library */}
          <div className="flex flex-col gap-3">
            <p
              className="text-overline tracking-widest uppercase"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Library
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/research"
                className="text-body-sm no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Research
              </Link>
            </nav>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-3">
            <p
              className="text-overline tracking-widest uppercase"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Tools
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/ask-vedika"
                className="text-body-sm no-underline hover:underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Ask Vedika
              </Link>
            </nav>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '0.5px solid var(--color-border-tertiary)' }}>
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 py-4">
          <p
            className="text-caption"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            © {new Date().getFullYear()} Vedika — Built with care for Dharma
          </p>
        </div>
      </div>
    </footer>
  );
}
