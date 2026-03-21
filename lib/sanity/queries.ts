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
  seo
}`;

export const textListQuery = `*[_type == "text"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  traditionLabel,
  overview,
  seo
}`;

export const textBySlugQuery = `*[_type == "text" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  traditionLabel,
  overview,
  content,
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
