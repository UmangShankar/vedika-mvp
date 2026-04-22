import { defineField, defineType } from 'sanity';

export const rishi = defineType({
  name: 'rishi',
  title: 'Rishi',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'biography', title: 'Biography' },
    { name: 'compositions', title: 'Compositions' },
    { name: 'relationships', title: 'Relationships' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: r => r.required(),
      group: 'identity'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: r => r.required(),
      group: 'identity'
    }),
    defineField({
      name: 'devanagari',
      title: 'Name in Devanagari',
      type: 'string',
      group: 'identity'
    }),
    defineField({
      name: 'transliteration',
      title: 'IAST transliteration',
      type: 'string',
      group: 'identity'
    }),
    defineField({
      name: 'vedaAssociation',
      title: 'Associated Veda',
      type: 'string',
      options: {
        list: [
          { title: 'Rigveda', value: 'rigveda' },
          { title: 'Samaveda', value: 'samaveda' },
          { title: 'Yajurveda', value: 'yajurveda' },
          { title: 'Atharvaveda', value: 'atharvaveda' },
          { title: 'Multiple', value: 'multiple' }
        ]
      },
      group: 'identity'
    }),
    defineField({
      name: 'period',
      title: 'Historical period',
      type: 'string',
      description: 'e.g. ~4000 BCE, Treta Yuga',
      group: 'identity'
    }),
    defineField({
      name: 'epithet',
      title: 'Key epithet or title',
      type: 'string',
      description: 'e.g. "Composer of the Gayatri Mantra", "Greatest philosopher of the Vedic age"',
      group: 'identity'
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 4,
      validation: r => r.required().min(50).max(300),
      group: 'biography'
    }),
    defineField({
      name: 'biography',
      type: 'portableContent',
      group: 'biography'
    }),
    defineField({
      name: 'keyCompositions',
      title: 'Key compositions',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: r => r.required() }),
          defineField({ name: 'reference', type: 'string', description: 'e.g. Rigveda 3.62.10' }),
          defineField({ name: 'description', type: 'text', rows: 2 })
        ],
        preview: { select: { title: 'title', subtitle: 'reference' } }
      }],
      group: 'compositions'
    }),
    defineField({
      name: 'famousVerse',
      title: 'Famous verse (Devanagari)',
      type: 'text',
      rows: 4,
      group: 'compositions'
    }),
    defineField({
      name: 'famousVerseTranslation',
      title: 'Verse translation',
      type: 'text',
      rows: 3,
      group: 'compositions'
    }),
    defineField({
      name: 'famousVerseSource',
      title: 'Verse source reference',
      type: 'string',
      group: 'compositions'
    }),
    defineField({
      name: 'lineage',
      title: 'Lineage / Gotra',
      type: 'string',
      group: 'relationships'
    }),
    defineField({
      name: 'disciples',
      type: 'string',
      description: 'Notable disciples (comma separated)',
      group: 'relationships'
    }),
    defineField({
      name: 'relatedRishis',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'rishi' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'relatedTopics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'sourceRefs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sourceRef' }] }],
      group: 'relationships'
    }),
    defineField({ name: 'seo', type: 'seo', group: 'seo' })
  ],
  preview: {
    select: { title: 'name', subtitle: 'epithet' },
    prepare(s) {
      return { title: s.title, subtitle: s.subtitle || 'Rishi' };
    }
  }
});
