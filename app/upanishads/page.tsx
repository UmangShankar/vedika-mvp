'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { UpanishadNakshatra } from '@/components/content/upanishad-nakshatra';
import type { Upanishad } from '@/lib/sanity/types';

export default function UpanishadsPage() {
  const [upanishads, setUpanishads] = useState<Upanishad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/upanishads')
      .then(r => r.json())
      .then(data => { setUpanishads(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-wide px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-2 text-caption text-ink-muted">
        <Link href="/" className="no-underline hover:text-saffron-500">Home</Link>
        <span className="mx-2">→</span>
        <span>Upanishads</span>
      </div>

      <div className="mb-6 text-center">
        <p className="mb-2 tracking-widest text-overline text-saffron-500">
          Vedānta · End of the Vedas · 108 Upanishads · 13 Principal
        </p>
        <h1 className="mb-2 font-serif text-display-sm text-ink">
          Upaniṣad Nakṣatra — The Constellation
        </h1>
        <p className="mx-auto max-w-content text-body text-ink-muted">
          Click any star to explore its teaching, key passages and commentary
        </p>
      </div>

      {loading ? (
        <div className="py-20 text-center text-body text-ink-muted">
          Mapping the constellation...
        </div>
      ) : (
        <UpanishadNakshatra upanishads={upanishads} />
      )}

      <div className="mt-8 text-center">
        <Link href="/texts" className="no-underline text-caption text-ink-muted hover:text-saffron-500">
          ← Back to all texts
        </Link>
      </div>
    </div>
  );
}
