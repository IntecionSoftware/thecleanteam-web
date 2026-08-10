import type { CollectionConfig } from 'payload'

export const Navigation: CollectionConfig = {
  slug: 'navigation',

  labels: {
    singular: 'Navigation',
    plural: 'Navigation',
  },

  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Example: main, footer, legal',
      },
    },
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      fields: [
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
        },
        {
          name: 'anchor',
          label: 'Anchor',
          type: 'text',
          admin: {
            description: 'Optional. Example: #services',
          },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          localized: true,
          admin: {
            description: 'Optional. If empty, the selected page title will be used.',
          },
        },
      ],
    },
  ],
}
