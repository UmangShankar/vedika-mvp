import Link from 'next/link';
import { PullQuote } from '@/components/content/pull-quote';
import type { PortableBlock } from '@/lib/sanity/types';

type Span = {
  _key?: string;
  _type?: string;
  text?: string;
  marks?: string[];
};

type MarkDef = {
  _key: string;
  _type: string;
  href?: string;
};

type Block = PortableBlock & {
  style?: string;
  listItem?: string;
  level?: number;
  markDefs?: MarkDef[];
  children?: Span[];
};

const SAFE_SCHEMES = ['https:', 'http:', 'mailto:'];

function isSafeHref(href: string | undefined): string {
  if (!href) return '#';
  if (href.startsWith('/') || href.startsWith('#')) return href;
  try {
    const url = new URL(href);
    return SAFE_SCHEMES.includes(url.protocol) ? href : '#';
  } catch {
    return '#';
  }
}

function renderSpan(span: Span, markDefs: MarkDef[], idx: number): React.ReactNode {
  let content: React.ReactNode = span.text ?? '';
  const marks = span.marks ?? [];

  for (const mark of marks) {
    const def = markDefs.find((d) => d._key === mark);
    if (def?._type === 'link') {
      content = (
        <Link
          key={`link-${idx}`}
          href={isSafeHref(def.href)}
          className="text-saffron-500 underline underline-offset-4 hover:text-saffron-600"
        >
          {content}
        </Link>
      );
    } else if (def?._type === 'sourceRef') {
      content = (
        <span key={`src-${idx}`} className="source-badge mx-1">
          {content}
        </span>
      );
    } else if (mark === 'strong') {
      content = <strong key={`strong-${idx}`} className="font-semibold text-ink">{content}</strong>;
    } else if (mark === 'em') {
      content = <em key={`em-${idx}`} className="italic">{content}</em>;
    }
  }

  return content;
}

function renderBlock(block: Block, idx: number): React.ReactNode {
  const markDefs = block.markDefs ?? [];
  const children = (block.children ?? []).map((span, i) =>
    renderSpan(span, markDefs, i)
  );
  const key = block._key ?? `block-${idx}`;

  switch (block.style) {
    case 'h2':
      return (
        <h2 key={key} className="mt-8 mb-4 font-serif text-heading text-ink">
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={key} className="mt-6 mb-3 font-serif text-subheading text-ink">
          {children}
        </h3>
      );
    case 'blockquote':
      return (
        <PullQuote
          key={key}
          quote={(block.children ?? []).map((s) => s.text ?? '').join('')}
        />
      );
    default:
      return (
        <p key={key} className="mb-5 font-serif text-body leading-relaxed text-ink-light">
          {children}
        </p>
      );
  }
}

function groupListItems(blocks: Block[]): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.listItem === 'bullet' || block.listItem === 'number') {
      const Tag = block.listItem === 'bullet' ? 'ul' : 'ol';
      const cls =
        block.listItem === 'bullet'
          ? 'list-disc pl-6 mb-5 space-y-2 text-ink-light'
          : 'list-decimal pl-6 mb-5 space-y-2 text-ink-light';
      const items: React.ReactNode[] = [];

      while (
        i < blocks.length &&
        blocks[i].listItem === block.listItem
      ) {
        const b = blocks[i];
        const markDefs = b.markDefs ?? [];
        const children = (b.children ?? []).map((span, si) =>
          renderSpan(span, markDefs, si)
        );
        items.push(
          <li key={b._key ?? `li-${i}`} className="text-body-sm text-ink-light">
            {children}
          </li>
        );
        i++;
      }

      result.push(
        <Tag key={`list-${i}`} className={cls}>
          {items}
        </Tag>
      );
    } else {
      result.push(renderBlock(block, i));
      i++;
    }
  }

  return result;
}

type PortableContentProps = {
  blocks?: PortableBlock[];
};

export function PortableContent({ blocks }: PortableContentProps) {
  if (!blocks?.length) {
    return (
      <p className="font-serif text-body text-ink-muted">Content coming soon.</p>
    );
  }

  const nodes = groupListItems(blocks as Block[]);

  return <div className="prose-vedika">{nodes}</div>;
}
