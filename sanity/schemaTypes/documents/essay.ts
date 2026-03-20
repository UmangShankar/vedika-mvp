import { defineField, defineType } from 'sanity';

export const essay = defineType({
  name: 'essay',
  title: 'Essay',
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
    defineField({ name: 'dek', title: 'Dek', type: 'text', rows: 3, validation: (rule) => rule.required(), group: 'editorial' }),
    defineField({ name: 'body', type: 'portableContent', validation: (rule) => rule.required(), group: 'editorial' }),
    defineField({
      name: 'topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'relatedGuides',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'guide' }] }],
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
    select: { title: 'title', subtitle: 'dek' }
  }
});
