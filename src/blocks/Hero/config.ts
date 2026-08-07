import type { Block } from 'payload'

import { linkField } from '@/fields/link'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      localized: true,
      required: true,
    },

    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    linkField({
      name: 'buttons',
      maxRows: 2,
    }),
  ],
}