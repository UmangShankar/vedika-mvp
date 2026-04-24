import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Darśanas — Six Schools of Indian Philosophy',
  description: 'The six classical schools of Indian philosophy: Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, and Vedānta.',
};

const schools = [
  { slug: 'nyaya',        name: 'Nyāya',        devanagari: 'न्याय'    },
  { slug: 'vaisheshika',  name: 'Vaiśeṣika',    devanagari: 'वैशेषिक'  },
  { slug: 'samkhya',      name: 'Sāṃkhya',      devanagari: 'सांख्य'   },
  { slug: 'yoga',         name: 'Yoga',          devanagari: 'योग'      },
  { slug: 'mimamsa',      name: 'Mīmāṃsā',      devanagari: 'मीमांसा'  },
  { slug: 'vedanta',      name: 'Vedānta',       devanagari: 'वेदान्त'  },
];

export default function DarshanasPage() {
  return (
    <div className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-overline uppercase tracking-widest text-saffron-500 mb-2">Philosophy</p>
      <h1 className="font-serif text-display-sm text-ink mb-4">Darśanas</h1>
      <p className="text-body text-ink-muted max-w-content mb-8">
        The six classical schools of Indian philosophy — āstika systems that acknowledge
        the authority of the Vedas. Individual school deep dives coming soon.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {schools.map(s => (
          <Link key={s.slug} href={`/darshanas/${s.slug}`}
            className="rounded-lg border bg-sandal-50 p-5 no-underline shadow-card hover:shadow-card-md hover:border-warm transition-all">
            <span className="devanagari block text-2xl text-saffron-500 mb-1">{s.devanagari}</span>
            <span className="font-serif text-subheading text-ink">{s.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
