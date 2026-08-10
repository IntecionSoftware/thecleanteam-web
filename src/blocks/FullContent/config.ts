import type { Block } from 'payload'

import { linkField } from '@/fields/link'

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

    {
      name: 'addButton',
      label: 'Dodaj przycisk',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'button',
      label: 'Ustawienia przycisku',
      type: 'group',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.addButton === true,
      },
      fields: [
        linkField({
          name: 'link',
          label: 'Przycisk',
          maxRows: 1,
        }),
      ],
    },
  ],
}