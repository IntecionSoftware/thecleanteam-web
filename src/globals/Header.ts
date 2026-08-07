import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',

  label: 'Header',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'navigation',
      label: 'Navigation',
      type: 'relationship',
      relationTo: 'navigation',
      required: true,
    },

    linkField({
      name: 'button',
      label: 'Button',
      maxRows: 1,
    }),
  ],
}