import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'navigation', title: 'Navigation' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({ name: 'siteTitle', type: 'string', validation: (rule) => rule.required(), group: 'identity' }),
    defineField({ name: 'siteDescription', type: 'text', rows: 3, validation: (rule) => rule.required(), group: 'identity' }),
    defineField({
      name: 'primaryNavigation',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'href', type: 'string', validation: (rule) => rule.required() })
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' }
          }
        }
      ]
    }),
    defineField({ name: 'defaultSeo', type: 'seo', group: 'seo' })
  ],
  preview: {
    select: { title: 'siteTitle', subtitle: 'siteDescription' }
  }
});
