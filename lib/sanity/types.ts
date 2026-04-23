export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
};

export type GitaShloka = {
  devanagari: string;
  transliteration?: string;
  englishTranslation?: string;
  source?: string;
  significance?: string;
};

export type GitaChapter = {
  _id: string;
  chapterNumber: number;
  name: string;
  devanagari?: string;
  englishName?: string;
  yogaPath?: string;
  shlokasCount?: number;
  scene?: string;
  speakers?: string;
  centralTeaching?: string;
  commentary?: string;
  fascinatingFacts?: string[];
  shlokas?: GitaShloka[];
  seo?: SeoFields;
};

export type SourceReference = {
  _id: string;
  label: string;
  citationText?: string;
  url?: string;
};

export type Topic = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  difficulty?: string;
  body?: PortableBlock[];
  sourceRefs?: SourceReference[];
  seo?: SeoFields;
};

export type TextEntry = {
  _id: string;
  title: string;
  slug: string;
  traditionLabel: string;
  overview: string;
  content?: PortableBlock[];
  sourceRefs?: SourceReference[];
  seo?: SeoFields;
};

export type GlossaryEntry = {
  _id: string;
  term: string;
  slug: string;
  transliteration?: string;
  definition: string;
  seo?: SeoFields;
};

export type Guide = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  body?: PortableBlock[];
  seo?: SeoFields;
};

export type Essay = {
  _id: string;
  title: string;
  slug: string;
  dek: string;
  body?: PortableBlock[];
  seo?: SeoFields;
};

export type Comparison = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  analysis?: PortableBlock[];
  leftTopicLabel?: string;
  rightTopicLabel?: string;
  sourceRefs?: SourceReference[];
  seo?: SeoFields;
};

export type Rishi = {
  _id: string;
  name: string;
  slug: string;
  devanagari?: string;
  transliteration?: string;
  vedaAssociation?: string;
  period?: string;
  epithet?: string;
  summary: string;
  biography?: PortableBlock[];
  keyCompositions?: Array<{
    title: string;
    reference?: string;
    description?: string;
  }>;
  famousVerse?: string;
  famousVerseTranslation?: string;
  famousVerseSource?: string;
  lineage?: string;
  disciples?: string;
  relatedRishis?: Rishi[];
  relatedTopics?: Array<{ _id: string; title: string; slug: string; summary: string }>;
  sourceRefs?: Array<{ _id: string; label: string; citationText?: string; url?: string }>;
  seo?: SeoFields;
};

export type PortableBlock = {
  _key?: string;
  _type?: string;
  children?: Array<{ _key?: string; _type?: string; text?: string }>;
};
