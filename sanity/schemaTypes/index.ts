import { comparison } from './documents/comparison';
import { essay } from './documents/essay';
import { gitaChapter } from './documents/gitaChapter';
import { glossaryEntry } from './documents/glossaryEntry';
import { guide } from './documents/guide';
import { rishi } from './documents/rishi';
import { siteSettings } from './documents/siteSettings';
import { sourceRef } from './documents/sourceRef';
import { text } from './documents/text';
import { topic } from './documents/topic';
import { upanishad } from './documents/upanishad';
import { portableContent } from './objects/portableContent';
import { seo } from './objects/seo';

export const schemaTypes = [
  portableContent,
  seo,
  topic,
  rishi,
  text,
  glossaryEntry,
  comparison,
  guide,
  essay,
  sourceRef,
  siteSettings,
  gitaChapter,
  upanishad
];
