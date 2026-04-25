export const topicListQuery = `*[_type == "topic"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  summary,
  difficulty,
  seo
}`;

export const topicBySlugQuery = `*[_type == "topic" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  summary,
  difficulty,
  body,
  "sourceRefs": sourceRefs[]->{_id, label, citationText, url},
  seo
}`;

export const textListQuery = `*[_type == "vedikText"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  traditionLabel,
  overview,
  seo
}`;

export const textBySlugQuery = `*[_type == "vedikText" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  traditionLabel,
  overview,
  content,
  "sourceRefs": sourceRefs[]->{_id, label, citationText, url},
  seo
}`;

export const glossaryListQuery = `*[_type == "glossaryEntry"] | order(term asc) {
  _id,
  term,
  "slug": slug.current,
  transliteration,
  definition,
  seo
}`;

export const glossaryBySlugQuery = `*[_type == "glossaryEntry" && slug.current == $slug][0] {
  _id,
  term,
  "slug": slug.current,
  transliteration,
  definition,
  seo
}`;

export const guideListQuery = `*[_type == "guide"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  seo
}`;

export const guideBySlugQuery = `*[_type == "guide" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  seo
}`;

export const essayListQuery = `*[_type == "essay"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  dek,
  seo
}`;

export const essayBySlugQuery = `*[_type == "essay" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  dek,
  body,
  seo
}`;

export const comparisonListQuery = `*[_type == "comparison"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  summary,
  seo
}`;

export const rishiListQuery = `*[_type == "rishi"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  devanagari,
  transliteration,
  vedaAssociation,
  period,
  epithet,
  summary,
  seo
}`;

export const rishiBySlugQuery = `*[_type == "rishi" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  devanagari,
  transliteration,
  vedaAssociation,
  period,
  epithet,
  summary,
  biography,
  keyCompositions,
  famousVerse,
  famousVerseTranslation,
  famousVerseSource,
  lineage,
  disciples,
  "relatedRishis": relatedRishis[]->{
    _id, name, "slug": slug.current, devanagari, epithet, summary
  },
  "relatedTopics": relatedTopics[]->{
    _id, title, "slug": slug.current, summary
  },
  "sourceRefs": sourceRefs[]->{
    _id, label, citationText, url
  },
  seo
}`;

export const comparisonBySlugQuery = `*[_type == "comparison" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  summary,
  analysis,
  "leftTopicLabel": topicsCompared[0]->title,
  "rightTopicLabel": topicsCompared[1]->title,
  "sourceRefs": sourceRefs[]->{
    _id,
    label,
    citationText,
    url
  },
  seo
}`;

export const gitaChapterListQuery = `*[_type == "gitaChapter"] | order(chapterNumber asc) {
  _id, chapterNumber, name, devanagari, englishName, yogaPath, shlokasCount, seo
}`;

export const gitaChaptersFullQuery = `*[_type == "gitaChapter"] | order(chapterNumber asc) {
  _id, chapterNumber, name, devanagari, englishName, yogaPath, shlokasCount,
  scene, speakers, centralTeaching, commentary, fascinatingFacts, shlokas, seo
}`;

export const gitaChapterByNumberQuery = `*[_type == "gitaChapter" && chapterNumber == $chapterNumber][0] {
  _id, chapterNumber, name, devanagari, englishName, yogaPath, shlokasCount,
  scene, speakers, centralTeaching, commentary, fascinatingFacts, shlokas, seo
}`;

export const upanishadListQuery = `*[_type == "upanishad"] | order(importance desc) {
  _id, name, "slug": slug.current, devanagari, transliteration,
  vedaFamily, philosophicalThread, period, importance,
  constellationX, constellationY, teacher, student, summary, seo
}`;

export const upanishadBySlugQuery = `*[_type == "upanishad" && slug.current == $slug][0] {
  _id, name, "slug": slug.current, devanagari, transliteration,
  vedaFamily, philosophicalThread, period, importance,
  constellationX, constellationY, teacher, student, summary,
  scene, centralTeaching, commentary, shankara, ramanuja,
  fascinatingFacts, mahavakya, keyPassages, seo
}`;

export const mahabharataParvaListQuery = `*[_type == "mahabharataParva"] | order(parvaNumber asc) {
  _id, parvaNumber, title, "slug": slug.current,
  titleDevanagari, titleIAST, verseCount, summary,
  keyTeaching, containsGita, gitaChapterRange,
  "keyCharacters": keyCharacters[]->{_id, name, nameDevanagari, alignment},
  seo
}`;

export const mahabharataParvaBySlugQuery = `*[_type == "mahabharataParva" && slug.current == $slug][0] {
  _id, parvaNumber, title, "slug": slug.current,
  titleDevanagari, titleIAST, verseCount, summary,
  keyTeaching, containsGita, gitaChapterRange,
  body, notableVerses,
  "keyCharacters": keyCharacters[]->{_id, name, nameDevanagari, alignment},
  "relatedTopics": relatedTopics[]->{title, "slug": slug.current},
  "sourceRefs": sourceRefs[]->{_id, label, citationText, url},
  seo
}`;

export const mahabharataCharacterListQuery = `*[_type == "mahabharataCharacter"] | order(name asc) {
  _id, name, "slug": slug.current, nameDevanagari,
  role, dharmaticDilemma, keyMoment, alignment,
  "relatedParvas": relatedParvas[]->{parvaNumber, title, "slug": slug.current}
}`;
