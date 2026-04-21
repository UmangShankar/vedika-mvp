import { defineField, defineType } from 'sanity';

export const text = defineType({
  name: 'vedikText',
  title: 'Text',
  type: 'document',
  groups: [
    { name: 'editorial', title: 'Editorial', default: true },
    { name: 'relationships', title: 'Relationships' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'editorial'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
      group: 'editorial'
    }),
    defineField({
      name: 'traditionLabel',
      title: 'Tradition label',
      type: 'string',
      description: 'Example: Sruti, Smriti, Itihasa, Bhashya',
      validation: (rule) => rule.required(),
      group: 'editorial'
    }),
    defineField({ name: 'overview', type: 'text', rows: 4, validation: (rule) => rule.required(), group: 'editorial' }),
    defineField({ name: 'content', type: 'portableContent', group: 'editorial' }),
    defineField({
      name: 'topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'glossaryTerms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'glossaryEntry' }] }],
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
    select: {
      title: 'title',
      subtitle: 'traditionLabel',
      media: 'seo.ogImage'
    }
  }
});
