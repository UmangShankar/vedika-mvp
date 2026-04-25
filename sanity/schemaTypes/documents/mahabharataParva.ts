import { defineArrayMember, defineField, defineType } from 'sanity';

export const mahabharataParva = defineType({
  name: 'mahabharataParva',
  title: 'Mahabharata Parva',
  type: 'document',
  fields: [
    defineField({
      name: 'parvaNumber',
      title: 'Parva number',
      type: 'number',
      validation: r => r.required().min(1).max(18).integer(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({ name: 'titleDevanagari', title: 'Title (Devanagari)', type: 'string' }),
    defineField({ name: 'titleIAST', title: 'Title (IAST)', type: 'string' }),
    defineField({
      name: 'verseCount',
      title: 'Verse count',
      type: 'number',
      description: 'Use BORI Critical Edition counts only.',
      validation: r => r.required().integer().positive(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      validation: r => r.required().min(40).max(400),
    }),
    defineField({ name: 'keyTeaching', title: 'Key teaching', type: 'text', rows: 3 }),
    defineField({
      name: 'containsGita',
      title: 'Contains Bhagavad Gita',
      type: 'boolean',
      description: 'True only for Bhishma Parva (Parva 6).',
      initialValue: false,
    }),
    defineField({
      name: 'gitaChapterRange',
      title: 'Gita chapter range',
      type: 'string',
      hidden: ({ document }) => !document?.containsGita,
    }),
    defineField({ name: 'body', type: 'portableContent' }),
    defineField({
      name: 'notableVerses',
      title: 'Notable verses',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'verseRef', title: 'Verse reference', type: 'string', validation: r => r.required() }),
            defineField({ name: 'devanagari', type: 'text', rows: 3 }),
            defineField({ name: 'iast', title: 'IAST transliteration', type: 'text', rows: 3 }),
            defineField({ name: 'english', title: 'English translation', type: 'text', rows: 4 }),
            defineField({ name: 'commentary', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'verseRef' } },
        }),
      ],
    }),
    defineField({
      name: 'keyCharacters',
      title: 'Key characters',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'mahabharataCharacter' }] })],
    }),
    defineField({
      name: 'relatedTopics',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'topic' }] })],
    }),
    defineField({
      name: 'sourceRefs',
      title: 'Source references',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'sourceRef' }] })],
    }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  orderings: [
    { title: 'Parva number', name: 'parvaNumberAsc', by: [{ field: 'parvaNumber', direction: 'asc' }] },
  ],
  preview: {
    select: { parvaNumber: 'parvaNumber', title: 'title' },
    prepare(s) { return { title: `${s.parvaNumber}. ${s.title}` }; },
  },
});

export const mahabharataCharacter = defineType({
  name: 'mahabharataCharacter',
  title: 'Mahabharata Character',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({ name: 'nameDevanagari', title: 'Name (Devanagari)', type: 'string' }),
    defineField({ name: 'role', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'dharmaticDilemma',
      title: 'Dharmic dilemma',
      type: 'text',
      rows: 3,
      validation: r => r.required(),
    }),
    defineField({ name: 'keyMoment', title: 'Key moment', type: 'text', rows: 3 }),
    defineField({
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Pandava', value: 'pandava' },
          { title: 'Kaurava', value: 'kaurava' },
          { title: 'Neutral', value: 'neutral' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'relatedParvas',
      title: 'Related parvas',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'mahabharataParva' }] })],
    }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  preview: {
    select: { name: 'name', role: 'role' },
    prepare(s) { return { title: s.name, subtitle: s.role }; },
  },
});
