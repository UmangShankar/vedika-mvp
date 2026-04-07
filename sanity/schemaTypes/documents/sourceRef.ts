import { defineField, defineType } from 'sanity';

export const sourceRef = defineType({
  name: 'sourceRef',
  title: 'Source Reference',
  type: 'document',
  groups: [
    { name: 'citation', title: 'Citation', default: true },
    { name: 'catalog', title: 'Cataloging' }
  ],
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required(), group: 'citation' }),
    defineField({
      name: 'sourceType',
      type: 'string',
      options: {
        list: [
          { title: 'Primary text', value: 'primary_text' },
          { title: 'Commentary', value: 'commentary' },
          { title: 'Scholarly article', value: 'scholarly_article' },
          { title: 'Book', value: 'book' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: (rule) => rule.required(),
      group: 'citation'
    }),
    defineField({ name: 'author', type: 'string', group: 'citation' }),
    defineField({ name: 'workTitle', title: 'Work title', type: 'string', group: 'citation' }),
    defineField({ name: 'citationText', title: 'Citation text', type: 'text', rows: 4, validation: (rule) => rule.required(), group: 'citation' }),
    defineField({ name: 'url', type: 'url', group: 'citation' }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'label', maxLength: 96 },
      validation: (rule) => rule.required(),
      group: 'catalog'
    }),
    defineField({ name: 'notes', type: 'text', rows: 3, group: 'catalog' })
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'sourceType'
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle ? selection.subtitle.replace('_', ' ') : 'Source'
      };
    }
  }
});
