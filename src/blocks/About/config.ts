import type { Block } from 'payload'

import { linkField } from '@/fields/link'

export const AboutBlock: Block = {
  slug: 'about',

  labels: {
    singular: 'About',
    plural: 'About',
  },

  fields: [
    {
      name: 'layout',
      label: 'Layout',
      type: 'radio',
      required: true,
      defaultValue: 'left',
      options: [
        {
          label: 'Content left / Image right',
          value: 'left',
        },
        {
          label: 'Image left / Content right',
          value: 'right',
        },
      ],
    },

    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      localized: true,
      required: true,
    },

    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      localized: true,
      required: true,
    },

    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    linkField({
      name: 'button',
      label: 'Button',
      maxRows: 1,
    }),
  ],
}