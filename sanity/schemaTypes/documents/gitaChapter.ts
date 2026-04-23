import { defineField, defineType } from 'sanity';

export const gitaChapter = defineType({
  name: 'gitaChapter',
  title: 'Gita Chapter',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'content', title: 'Content' },
    { name: 'shlokas', title: 'Shlokas' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({ name: 'chapterNumber', title: 'Chapter number', type: 'number', validation: r => r.required().min(1).max(18), group: 'identity' }),
    defineField({ name: 'name', title: 'Sanskrit name', type: 'string', validation: r => r.required(), group: 'identity' }),
    defineField({ name: 'devanagari', title: 'Devanagari name', type: 'string', group: 'identity' }),
    defineField({ name: 'englishName', title: 'English meaning', type: 'string', group: 'identity' }),
    defineField({
      name: 'yogaPath',
      title: 'Yoga path',
      type: 'string',
      options: {
        list: [
          { title: 'Karma Yoga (Ch 1–6)', value: 'karma' },
          { title: 'Bhakti Yoga (Ch 7–12)', value: 'bhakti' },
          { title: 'Jnana Yoga (Ch 13–18)', value: 'jnana' }
        ]
      },
      group: 'identity'
    }),
    defineField({ name: 'shlokasCount', title: 'Number of shlokas', type: 'number', group: 'identity' }),
    defineField({ name: 'scene', title: 'Scene setting', type: 'text', rows: 5, description: 'Set the scene — who is present, what just happened, the dramatic context', group: 'content' }),
    defineField({ name: 'speakers', title: 'Who speaks to whom', type: 'text', rows: 4, description: 'Describe the speaking order and dialogue flow of this chapter', group: 'content' }),
    defineField({ name: 'centralTeaching', title: 'Central teaching', type: 'text', rows: 4, group: 'content' }),
    defineField({ name: 'commentary', title: 'Editorial commentary', type: 'text', rows: 6, description: 'Deeper editorial insight — what is really being said beneath the surface', group: 'content' }),
    defineField({
      name: 'fascinatingFacts',
      title: 'Fascinating facts',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content'
    }),
    defineField({
      name: 'shlokas',
      title: 'Key shlokas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'devanagari', title: 'Devanagari text', type: 'text', rows: 4, validation: r => r.required() }),
          defineField({ name: 'transliteration', title: 'IAST transliteration', type: 'text', rows: 3 }),
          defineField({ name: 'englishTranslation', title: 'English translation', type: 'text', rows: 3 }),
          defineField({ name: 'source', title: 'Source reference', type: 'string', description: 'e.g. BG 2.47' }),
          defineField({ name: 'significance', title: 'Why this shloka matters', type: 'text', rows: 2 })
        ],
        preview: { select: { title: 'source', subtitle: 'englishTranslation' } }
      }],
      group: 'shlokas'
    }),
    defineField({ name: 'seo', type: 'seo', group: 'seo' })
  ],
  preview: {
    select: { title: 'name', subtitle: 'chapterNumber' },
    prepare(s) { return { title: `Ch ${s.subtitle} — ${s.title}` }; }
  }
});
