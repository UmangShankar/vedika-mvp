import type { PortableBlock } from '@/lib/sanity/types';

/** Extract plain-text paragraphs from portable blocks (for meta / summaries). */
export function portableTextToParagraphs(blocks: PortableBlock[] | undefined): string[] {
  if (!blocks?.length) return [];
  return blocks
    .map((block) => block.children?.map((child) => child.text ?? '').join('').trim() ?? '')
    .filter(Boolean);
}

/** Return the first non-empty text from blocks. */
export function portableTextToPlainText(blocks: PortableBlock[] | undefined): string {
  return portableTextToParagraphs(blocks).join(' ');
}
