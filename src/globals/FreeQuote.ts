import type { GlobalConfig } from 'payload'

export const FreeQuote: GlobalConfig = {
  slug: 'freeQuote',
  label: 'Free Quote',
  fields: [
    {
      name: 'content',
      label: 'Treść',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'form',
      label: 'Formularz',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
}