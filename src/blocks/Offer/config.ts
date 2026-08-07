import type { Block } from 'payload'

import { linkField } from '@/fields/link'

export const OfferBlock: Block = {
  slug: 'offer',

  labels: {
    singular: 'Offer',
    plural: 'Offers',
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
      name: 'cards',
      label: 'Cards',
      type: 'array',
      required: true,
      minRows: 1,

      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },

        {
          name: 'heading',
          type: 'text',
          localized: true,
          required: true,
        },

        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },

        linkField({
          name: 'button',
          label: 'Button',
          maxRows: 1,
        }),
      ],
    },
  ],
}