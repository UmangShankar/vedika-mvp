import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Vedika',
  description: 'A research platform for Sanatan Dharma — built on primary sources, tradition-faithful, and designed for serious study.',
};

const principles = [
  {
    title: 'Primary sources first',
    desc: 'Every claim traces back to a text. The AI cites. The content links. Secondary interpretation is always marked as such.',
  },
  {
    title: 'Tradition-faithful',
    desc: 'We do not flatten or modernise. The darśanas are presented on their own terms, not as historical curiosities or self-help frameworks.',
  },
  {
    title: 'No assumed background',
    desc: 'Whether you read Sanskrit or are encountering the Upaniṣads for the first time, the platform meets you where you are — without condescension in either direction.',
  },
  {
    title: 'Research-grade structure',
    desc: 'Cross-references, comparison pages, lineage maps, and concept threads are built into the architecture — not bolted on as an afterthought.',
  },
  {
    title: 'Living traditions',
    desc: 'Sanatan Dharma is not a museum exhibit. The content acknowledges that these traditions continue to evolve, split, and respond to the present.',
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-16 pb-24">

      {/* Breadcrumb */}
      <nav className="mb-10 flex items-center gap-1.5 text-[12.5px] text-ink-muted">
        <Link href="/" className="text-ink-muted no-underline hover:text-ink-light transition-colors">Home</Link>
        <span className="text-ink-muted/50">/</span>
        <span>About</span>
      </nav>

      {/* Hero */}
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
        About Vedika
      </p>
      <h1 className="mb-4 text-[28px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">
        A research platform for Sanatan Dharma
      </h1>
      <p className="mb-12 max-w-[560px] text-[15.5px] leading-[1.65] text-ink-light">
        Vedika is built for anyone who wants to study the living traditions of Sanatan Dharma seriously — from primary texts to living lineages, from comparative philosophy to cosmological frameworks.
      </p>

      <hr className="my-12 border-0 border-t border-[rgba(192,120,40,0.18)]" />

      {/* Mission & Vision */}
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
        Mission &amp; Vision
      </p>
      <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[rgba(192,120,40,0.18)] bg-[rgba(192,120,40,0.18)] sm:grid-cols-2">
        <div className="bg-sandal-50 px-7 pb-8 pt-7">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">Mission</p>
          <p className="text-[14.5px] leading-[1.7] text-ink-light">
            To make the depth and breadth of Sanatan Dharma accessible to every serious student — regardless of where they begin — through rigorous content, thoughtful structure, and an AI research companion grounded in primary sources.
          </p>
        </div>
        <div className="bg-sandal-50 px-7 pb-8 pt-7">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">Vision</p>
          <p className="text-[14.5px] leading-[1.7] text-ink-light">
            A world where the philosophical traditions of Sanatan Dharma are as easy to study as any other great intellectual tradition — with the tools, cross-references, and context that genuine inquiry demands.
          </p>
        </div>
      </div>

      <hr className="my-12 border-0 border-t border-[rgba(192,120,40,0.18)]" />

      {/* Founder */}
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
        Who built this
      </p>
      <div className="mt-8 flex flex-col items-start gap-5 rounded-lg border border-[rgba(192,120,40,0.18)] bg-sandal-50 p-7 sm:flex-row">
        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[rgba(192,120,40,0.22)] bg-sandal-200 text-[18px] font-medium tracking-[-0.02em] text-ink-light sm:h-[52px] sm:w-[52px]">
          U
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-0.5 text-[15px] font-medium tracking-[-0.01em] text-ink">Umang</p>
          <p className="mb-3.5 text-[12.5px] text-ink-muted">Founder, Vedika</p>
          <div className="space-y-3 text-[14px] leading-[1.7] text-ink-light">
            <p>
              With over ten years of formal education in Sanskrit and Vedic scriptures, Umang brings firsthand knowledge of the primary texts to everything Vedika is built on — not as an academic exercise, but as a lifelong Vedic student.
            </p>
            <p>
              That depth is paired with an equally serious interest in AI research and a love of science fiction — the combination that made building an AI-assisted research tool for Sanatan Dharma feel not just possible, but necessary.
            </p>
            <p>
              Vedika exists because no adequate tool did. The platform is the research environment Umang always needed — and is now building for everyone else who studies these traditions seriously.
            </p>
          </div>
          <div className="mt-4 flex gap-2.5">
            <a
              href="https://www.askvedika.com"
              className="rounded px-2.5 py-1 text-[12.5px] text-ink-muted no-underline border border-[rgba(192,120,40,0.18)] bg-sandal-100 hover:border-[rgba(192,120,40,0.30)] hover:text-ink transition-colors"
            >
              askvedika.com
            </a>
            <Link
              href="/contact"
              className="rounded px-2.5 py-1 text-[12.5px] text-ink-muted no-underline border border-[rgba(192,120,40,0.18)] bg-sandal-100 hover:border-[rgba(192,120,40,0.30)] hover:text-ink transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-12 border-0 border-t border-[rgba(192,120,40,0.18)]" />

      {/* Principles */}
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
        Principles
      </p>
      <p className="text-[15px] leading-[1.75] text-ink-light">How we think about what we&apos;re building.</p>

      <div className="mt-6 flex flex-col gap-px overflow-hidden rounded-lg border border-[rgba(192,120,40,0.18)] bg-[rgba(192,120,40,0.18)]">
        {principles.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-1 bg-sandal-50 px-6 py-[18px] sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="min-w-[140px] shrink-0 text-[13.5px] font-medium text-ink sm:whitespace-nowrap">
              {p.title}
            </span>
            <span className="text-[13.5px] leading-[1.6] text-ink-light">
              {p.desc}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-12 border-0 border-t border-[rgba(192,120,40,0.18)]" />

      {/* CTA strip */}
      <div className="flex flex-col gap-6 rounded-lg border border-[rgba(192,120,40,0.18)] bg-sandal-50 px-7 pb-8 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-[15px] font-medium text-ink">Start exploring</p>
          <p className="text-[14px] leading-[1.6] text-ink-light">
            Ask a question, follow a learning path, or go straight to the primary texts.
          </p>
        </div>
        <Link
          href="/ask-vedika"
          className="shrink-0 rounded-sm bg-saffron-500 px-[18px] py-2 text-[13px] font-medium text-white no-underline transition-colors hover:bg-saffron-600"
        >
          Ask Vedika →
        </Link>
      </div>

    </main>
  );
}
