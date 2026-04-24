import { defineField, defineType } from 'sanity';

export const upanishad = defineType({
  name: 'upanishad',
  title: 'Upanishad',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'content', title: 'Content' },
    { name: 'passages', title: 'Key Passages' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required(), group: 'identity' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: r => r.required(), group: 'identity' }),
    defineField({ name: 'devanagari', title: 'Devanagari name', type: 'string', group: 'identity' }),
    defineField({ name: 'transliteration', title: 'IAST transliteration', type: 'string', group: 'identity' }),
    defineField({
      name: 'vedaFamily',
      title: 'Veda family',
      type: 'string',
      options: { list: [
        { title: 'Rigveda', value: 'rigveda' },
        { title: 'Samaveda', value: 'samaveda' },
        { title: 'Shukla Yajurveda', value: 'shukla-yajurveda' },
        { title: 'Krishna Yajurveda', value: 'krishna-yajurveda' },
        { title: 'Atharvaveda', value: 'atharvaveda' }
      ]},
      group: 'identity'
    }),
    defineField({
      name: 'philosophicalThread',
      title: 'Philosophical thread',
      type: 'string',
      options: { list: [
        { title: 'Identity — Tat tvam asi', value: 'identity' },
        { title: 'Consciousness — nature of awareness', value: 'consciousness' },
        { title: 'Liberation — moksha and the path', value: 'liberation' },
        { title: 'Cosmic — creation and cosmology', value: 'cosmic' }
      ]},
      group: 'identity'
    }),
    defineField({ name: 'period', title: 'Approximate period', type: 'string', group: 'identity' }),
    defineField({ name: 'importance', title: 'Importance (1-13, 13 = highest)', type: 'number', validation: r => r.min(1).max(13), group: 'identity' }),
    defineField({
      name: 'constellationX',
      title: 'Constellation X position (0-680)',
      type: 'number',
      group: 'identity'
    }),
    defineField({
      name: 'constellationY',
      title: 'Constellation Y position (0-440)',
      type: 'number',
      group: 'identity'
    }),
    defineField({ name: 'teacher', title: 'Teacher / Rishi', type: 'string', group: 'content' }),
    defineField({ name: 'student', title: 'Student', type: 'string', group: 'content' }),
    defineField({ name: 'summary', type: 'text', rows: 4, validation: r => r.required(), group: 'content' }),
    defineField({ name: 'scene', title: 'Dramatic scene / context', type: 'text', rows: 5, group: 'content' }),
    defineField({ name: 'centralTeaching', title: 'Central teaching', type: 'text', rows: 4, group: 'content' }),
    defineField({ name: 'commentary', title: 'Editorial commentary', type: 'text', rows: 5, group: 'content' }),
    defineField({ name: 'shankara', title: "Shankaracharya's reading", type: 'text', rows: 3, group: 'content' }),
    defineField({ name: 'ramanuja', title: "Ramanujacharya's reading", type: 'text', rows: 3, group: 'content' }),
    defineField({ name: 'fascinatingFacts', type: 'array', of: [{ type: 'string' }], group: 'content' }),
    defineField({
      name: 'mahavakya',
      title: 'Mahavakya (if applicable)',
      type: 'object',
      fields: [
        defineField({ name: 'text', type: 'string' }),
        defineField({ name: 'devanagari', type: 'string' }),
        defineField({ name: 'translation', type: 'string' }),
        defineField({ name: 'reference', type: 'string' })
      ],
      group: 'content'
    }),
    defineField({
      name: 'keyPassages',
      title: 'Key passages',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'devanagari', type: 'text', rows: 4, validation: r => r.required() }),
          defineField({ name: 'transliteration', type: 'text', rows: 3 }),
          defineField({ name: 'englishTranslation', type: 'text', rows: 3 }),
          defineField({ name: 'source', type: 'string' }),
          defineField({ name: 'significance', type: 'text', rows: 2 })
        ],
        preview: { select: { title: 'source', subtitle: 'englishTranslation' } }
      }],
      group: 'passages'
    }),
    defineField({ name: 'seo', type: 'seo', group: 'seo' })
  ],
  preview: {
    select: { title: 'name', subtitle: 'vedaFamily' },
    prepare(s) { return { title: s.title, subtitle: s.subtitle }; }
  }
});
