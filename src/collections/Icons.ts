import type { CollectionConfig } from 'payload'

export const Icons: CollectionConfig = {
  slug: 'icons',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],

  upload: {
    mimeTypes: ['image/svg+xml'],
  },
}