'use client';

import { useState, useRef, type KeyboardEvent } from 'react';

type Variant = 'section' | 'footer' | 'inline';
type State = 'idle' | 'loading' | 'success' | 'duplicate' | 'error';

interface NewsletterSignupProps {
  source?: string;
  variant?: Variant;
}

export function NewsletterSignup({ source, variant = 'section' }: NewsletterSignupProps) {
  const [state, setState] = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function submit() {
    const email = inputRef.current?.value.trim() ?? '';
    if (!email) return;

    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json() as { success?: boolean; error?: string };

      if (res.ok && data.success) {
        setState('success');
      } else if (res.status === 409) {
        setState('duplicate');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') submit();
  }

  const form = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <style>{`
        @media (min-width: 521px) {
          .nl-row { flex-direction: row !important; }
        }
      `}</style>

      {state === 'success' ? (
        <p style={{
          fontSize: '13.5px',
          color: 'var(--color-text-secondary)',
          lineHeight: '1.6',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ color: 'var(--color-success)', fontSize: '15px' }}>✓</span>
          You&apos;re subscribed. Expect occasional deep dives, nothing more.
        </p>
      ) : (
        <>
          <div className="nl-row" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input
              ref={inputRef}
              type="email"
              placeholder="your@email.com"
              onKeyDown={onKeyDown}
              disabled={state === 'loading'}
              style={{
                flex: 1,
                padding: '8px 12px',
                fontSize: '13.5px',
                color: 'var(--color-text-primary)',
                background: 'var(--color-background-primary)',
                border: '0.5px solid var(--color-border-secondary)',
                borderRadius: '2px',
                outline: 'none',
                fontFamily: 'inherit',
                minWidth: 0,
              }}
            />
            <button
              onClick={submit}
              disabled={state === 'loading'}
              className="rounded-sm bg-saffron-500 px-3 py-1.5 text-caption font-medium text-white no-underline transition-colors hover:bg-saffron-600"
              style={{
                cursor: state === 'loading' ? 'not-allowed' : 'pointer',
                opacity: state === 'loading' ? 0.7 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '6px', flexShrink: 0, border: 'none', fontFamily: 'inherit',
              }}
            >
              {state === 'loading' ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 12 12" style={{ animation: 'nl-spin 0.8s linear infinite' }}>
                    <style>{`@keyframes nl-spin { to { transform: rotate(360deg); } }`}</style>
                    <circle cx="6" cy="6" r="4.5" fill="none" style={{ stroke: 'currentColor', opacity: 0.4 }} strokeWidth="1.5"/>
                    <path d="M6 1.5a4.5 4.5 0 0 1 4.5 4.5" fill="none" style={{ stroke: 'currentColor' }} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Subscribing…
                </>
              ) : 'Subscribe'}
            </button>
          </div>
          {state === 'duplicate' && (
            <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', margin: 0, lineHeight: 1.6, textAlign: 'center' }}>
              This email is already subscribed. Please check your Promotions or Spam folder for our welcome email.
            </p>
          )}
          {state === 'error' && (
            <p style={{ fontSize: '12.5px', color: 'var(--color-error)', margin: 0, lineHeight: 1.5 }}>
              {errorMsg}
            </p>
          )}
        </>
      )}
    </div>
  );

  if (variant === 'footer' || variant === 'inline') {
    return <div>{form}</div>;
  }

  // section variant
  return (
    <div
      className="rounded-2xl p-7 sm:p-8"
      style={{
        background: 'var(--color-background-primary)',
        border: '0.5px solid var(--color-border-tertiary)',
      }}
    >
      <div className="flex flex-col gap-6 sm:flex-row items-center sm:gap-8">
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-subheading text-ink">Stay close to the sources</h2>
          <p className="mt-1.5 text-body-sm text-ink-muted">
            Primary texts. Interpretation threads. New research paths. No noise.
          </p>
        </div>
        <div className="sm:w-[280px] sm:shrink-0">
          {form}
        </div>
      </div>
    </div>
  );
}
