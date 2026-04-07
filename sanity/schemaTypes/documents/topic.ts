import { defineField, defineType } from 'sanity';

export const topic = defineType({
  name: 'topic',
  title: 'Topic',
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
      validation: (rule) => rule.required().min(3).max(100),
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
      name: 'summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().min(30).max(240),
      group: 'editorial'
    }),
    defineField({ name: 'body', type: 'portableContent', group: 'editorial' }),
    defineField({
      name: 'difficulty',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' }
        ],
        layout: 'radio'
      },
      initialValue: 'beginner',
      group: 'editorial'
    }),
    defineField({
      name: 'relatedTopics',
      title: 'Related topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'relatedTexts',
      title: 'Related texts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'text' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'glossaryTerms',
      title: 'Glossary terms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'glossaryEntry' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'sourceRefs',
      title: 'Source references',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sourceRef' }] }],
      validation: (rule) => rule.min(1),
      group: 'relationships'
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'difficulty',
      media: 'seo.ogImage'
    },
    prepare(selection) {
      const subtitle = selection.subtitle ? `Level: ${selection.subtitle}` : 'Topic';
      return { ...selection, subtitle };
    }
  }
});
