'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

type State = 'idle' | 'loading' | 'success' | 'error';

function UnsubscribeCard() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') ?? '';
  const [state, setState] = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleUnsubscribe() {
    if (!email) return;
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json() as { success?: boolean; error?: string };

      if (res.ok && data.success) {
        setState('success');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  return (
    <div style={{
      maxWidth: '560px',
      width: '100%',
      padding: '64px 32px',
      textAlign: 'center',
    }}>
      <img
        src="/om-logo.png"
        width={64}
        height={64}
        alt="Vedika"
        style={{ display: 'block', margin: '0 auto 28px' }}
      />

      {state === 'success' ? (
        <>
          <h1 style={{
            margin: '0 0 16px',
            fontSize: '26px',
            fontWeight: 700,
            color: '#1C1208',
            lineHeight: 1.3,
            fontFamily: 'Georgia, serif',
          }}>
            Go well
          </h1>
          <p style={{
            margin: '0 0 32px',
            fontSize: '14px',
            color: '#7A6A56',
            lineHeight: 1.75,
            maxWidth: '420px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'system-ui, sans-serif',
          }}>
            The sources will be here when you return. If you ever wish to find your way back,{' '}
            <a href="mailto:namaskar@askvedika.com" style={{ color: '#C07828', textDecoration: 'none' }}>
              namaskar@askvedika.com
            </a>{' '}
            is always open.
          </p>
          <a
            href="https://www.askvedika.com"
            style={{
              fontSize: '13px',
              color: '#7A6A56',
              textDecoration: 'underline',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Return to Vedika
          </a>
        </>
      ) : (
        <>
          <h1 style={{
            margin: '0 0 16px',
            fontSize: '26px',
            fontWeight: 700,
            color: '#1C1208',
            lineHeight: 1.3,
            fontFamily: 'Georgia, serif',
          }}>
            Every seeker finds their own pace.
          </h1>
          <p style={{
            margin: '0 0 36px',
            fontSize: '14px',
            color: '#7A6A56',
            lineHeight: 1.75,
            maxWidth: '420px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'system-ui, sans-serif',
          }}>
            There is no obligation here. If you choose to leave, you go with our gratitude for having walked this path with us, even briefly.
          </p>

          <button
            onClick={handleUnsubscribe}
            disabled={state === 'loading' || !email}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              maxWidth: '380px',
              height: '48px',
              margin: '0 auto',
              background: state === 'loading' ? '#a06020' : '#C07828',
              color: '#FDFAF6',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: state === 'loading' || !email ? 'not-allowed' : 'pointer',
              opacity: !email ? 0.5 : 1,
              fontFamily: 'system-ui, sans-serif',
              transition: 'background 0.15s',
            } as React.CSSProperties}
          >
            {state === 'loading' ? (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" style={{ animation: 'unsub-spin 0.8s linear infinite' }}>
                  <style>{`@keyframes unsub-spin { to { transform: rotate(360deg); } }`}</style>
                  <circle cx="7" cy="7" r="5.5" fill="none" stroke="rgba(253,250,246,0.4)" strokeWidth="1.5"/>
                  <path d="M7 1.5a5.5 5.5 0 0 1 5.5 5.5" fill="none" stroke="#FDFAF6" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Unsubscribing…
              </>
            ) : 'Unsubscribe'}
          </button>

          {state === 'error' && (
            <p style={{
              marginTop: '14px',
              fontSize: '13px',
              color: '#C0392B',
              fontFamily: 'system-ui, sans-serif',
            }}>
              {errorMsg}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#FDFAF6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
    }}>
      <Suspense>
        <UnsubscribeCard />
      </Suspense>
    </div>
  );
}
