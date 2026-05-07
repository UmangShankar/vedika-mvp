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
    defineField({
      name: 'sources',
      title: 'Primary sources',
      type: 'array',
      group: 'editorial',
      of: [
        {
          type: 'object',
          name: 'essaySource',
          fields: [
            {
              name: 'title',
              title: 'Source title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  'Śruti',
                  'Smṛti',
                  'Itihāsa',
                  'Purāṇa',
                  'Āgama',
                  'Bhāṣya',
                  'Philosophical text',
                  'Pāli Canon',
                  'Secondary scholarship',
                ],
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'author',
              title: 'Author (if known)',
              type: 'string',
            },
            {
              name: 'relevance',
              title: 'Why cited',
              description: 'One sentence explaining why this source is cited in this essay.',
              type: 'text',
              rows: 2,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Link to /sources/[slug] (optional)',
              type: 'string',
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'category' },
          },
        },
      ],
    }),
    defineField({ name: 'seo', type: 'seo', group: 'seo' })
  ],
  preview: {
    select: { title: 'title', subtitle: 'dek' }
  }
});
