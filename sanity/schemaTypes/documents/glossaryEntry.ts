import { defineField, defineType } from 'sanity';

export const glossaryEntry = defineType({
  name: 'glossaryEntry',
  title: 'Glossary Entry',
  type: 'document',
  groups: [
    { name: 'term', title: 'Term', default: true },
    { name: 'relationships', title: 'Relationships' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({ name: 'term', type: 'string', validation: (rule) => rule.required().min(2), group: 'term' }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'term', maxLength: 96 },
      validation: (rule) => rule.required(),
      group: 'term'
    }),
    defineField({ name: 'transliteration', type: 'string', group: 'term' }),
    defineField({
      name: 'definition',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().min(20),
      group: 'term'
    }),
    defineField({
      name: 'relatedTopics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
      group: 'relationships'
    }),
    defineField({
      name: 'relatedTexts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'text' }] }],
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
      title: 'term',
      subtitle: 'transliteration'
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle ? `Transliteration: ${selection.subtitle}` : 'Glossary term'
      };
    }
  }
});
