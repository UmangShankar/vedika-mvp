import { comparison } from './documents/comparison';
import { essay } from './documents/essay';
import { glossaryEntry } from './documents/glossaryEntry';
import { guide } from './documents/guide';
import { siteSettings } from './documents/siteSettings';
import { sourceRef } from './documents/sourceRef';
import { text } from './documents/text';
import { topic } from './documents/topic';
import { portableContent } from './objects/portableContent';
import { seo } from './objects/seo';

export const schemaTypes = [
  portableContent,
  seo,
  topic,
  text,
  glossaryEntry,
  comparison,
  guide,
  essay,
  sourceRef,
  siteSettings
];
