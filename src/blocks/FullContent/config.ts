import type { Block } from 'payload'

export const FullContentBlock: Block = {
  slug: 'fullContent',
  interfaceName: 'FullContent',
  labels: {
    singular: 'Full Content',
    plural: 'Full Content',
  },
  fields: [
    {
      name: 'content',
      label: 'Treść',
      type: 'richText',
      localized: true,
      required: true,
    },
  ],
}