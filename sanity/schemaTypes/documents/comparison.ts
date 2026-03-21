import { defineField, defineType } from 'sanity';

export const comparison = defineType({
  name: 'comparison',
  title: 'Comparison',
  type: 'document',
  groups: [
    { name: 'editorial', title: 'Editorial', default: true },
    { name: 'relationships', title: 'Relationships' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required(), group: 'editorial' }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
      group: 'editorial'
    }),
    defineField({ name: 'summary', type: 'text', rows: 3, validation: (rule) => rule.required(), group: 'editorial' }),
    defineField({ name: 'analysis', type: 'portableContent', group: 'editorial' }),
    defineField({
      name: 'topicsCompared',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
      validation: (rule) => rule.min(2).warning('Add at least two topics for a useful comparison.'),
      group: 'relationships'
    }),
    defineField({
      name: 'textsCompared',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'text' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'sourceRefs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sourceRef' }] }],
      validation: (rule) => rule.min(1),
      group: 'relationships'
    }),
    defineField({ name: 'seo', type: 'seo', group: 'seo' })
  ],
  preview: {
    select: { title: 'title', subtitle: 'summary' }
  }
});
