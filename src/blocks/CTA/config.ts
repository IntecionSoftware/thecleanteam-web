import type { Block } from 'payload'

import { linkField } from '@/fields/link'

export const CTABlock: Block = {
  slug: 'cta',

  labels: {
    singular: 'CTA',
    plural: 'CTA',
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

    linkField({
      name: 'button',
      label: 'Button',
      maxRows: 1,
    }),
  ],
}