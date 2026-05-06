import Link from 'next/link';

const SAMPLE_EXCHANGE = {
  question: 'What does the Bhagavad Gita say about action without attachment?',
  answer: `The Gita's central teaching appears in 2.47 — one is entitled to perform action, but not to claim its fruits. This is the foundation of karma yoga.

Shankaracharya's Advaita reading treats this as preparation for jnana: desireless action purifies the mind until knowledge of the Self arises. Ramanujacharya's Vishishtadvaita view holds that action offered to God is itself a direct path to liberation.`,
  sources: [
    { label: 'Bhagavad Gita 2.47', type: 'primary' },
    { label: 'Bhagavad Gita 3.19', type: 'primary' },
    { label: 'Shankaracharya Gita Bhashya', type: 'commentary' },
    { label: 'Ramanujacharya Gita Bhashya', type: 'commentary' },
  ],
};

const SOURCE_ICONS: Record<string, string> = {
  primary: '📜',
  commentary: '✍️',
  scholarly: '📚',
};

export function AskPreview() {
  return (
    <div
      className="overflow-hidden rounded-xl"
      style={{
        background: 'var(--color-background-primary)',
        border: '0.5px solid var(--color-border-tertiary)',
      }}
    >

      {/* Header bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '16px 20px',
        background: 'var(--color-background-secondary)',
        borderBottom: '0.5px solid var(--color-border-tertiary)',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--color-background-secondary)',
          border: '0.5px solid var(--color-border-tertiary)',
        }}>
          <span style={{ color: 'var(--color-text-tertiary)', fontSize: '14px', fontFamily: 'Georgia, serif' }}>ॐ</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Ask Vedika</span>
            <span className="beta-badge">Beta</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', lineHeight: 1, marginTop: 2 }}>
            Source-grounded exploration
          </p>
        </div>
      </div>

      {/* Chat exchange */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* User bubble */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            maxWidth: '75%', padding: '10px 16px',
            background: 'var(--color-background-secondary)',
            border: '0.5px solid var(--color-border-tertiary)',
            borderRadius: '12px 12px 4px 12px',
          }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
              {SAMPLE_EXCHANGE.question}
            </p>
          </div>
        </div>

        {/* Vedika response */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%', flexShrink: 0, marginTop: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--color-background-secondary)',
            border: '0.5px solid var(--color-border-tertiary)',
          }}>
            <span style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', fontFamily: 'Georgia, serif' }}>ॐ</span>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              padding: '12px 16px',
              background: 'var(--color-background-primary)',
              border: '0.5px solid var(--color-border-tertiary)',
              borderRadius: '4px 12px 12px 12px',
            }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                {SAMPLE_EXCHANGE.answer}
              </p>
            </div>

            {/* Sources */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <p style={{
                fontSize: '0.6875rem', letterSpacing: '0.12em', fontWeight: 600,
                color: 'var(--color-text-tertiary)', textTransform: 'uppercase',
              }}>
                Sources
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {SAMPLE_EXCHANGE.sources.map((source, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      fontSize: '0.75rem', color: 'var(--color-text-secondary)',
                      background: 'var(--color-background-secondary)',
                      border: '0.5px solid var(--color-border-tertiary)',
                      padding: '2px 8px', borderRadius: '4px',
                    }}
                  >
                    <span style={{ fontSize: '11px' }}>{SOURCE_ICONS[source.type] ?? '📄'}</span>
                    <span>{source.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
        padding: '16px 20px',
        background: 'var(--color-background-secondary)',
        borderTop: '0.5px solid var(--color-border-tertiary)',
      }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', lineHeight: 1.4 }}>
          AI guidance only. Always verify with the cited sources.
        </p>
        <Link
          href="/ask-vedika"
          className="rounded-sm bg-saffron-500 px-3 py-1.5 text-caption font-medium text-white no-underline transition-colors hover:bg-saffron-600"
          style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
        >
          Try Ask Vedika →
        </Link>
      </div>

    </div>
  );
}
