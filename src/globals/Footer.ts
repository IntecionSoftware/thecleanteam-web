import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  admin: {
    group: 'Globals',
  },
  fields: [
    {
      name: 'navigation',
      type: 'relationship',
      relationTo: 'navigation',
      required: true,
    },
    {
      name: 'contactDetails',
      label: 'Dane kontaktowe',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        {
          label: 'Telefon',
          value: 'phone',
        },
        {
          label: 'E-mail',
          value: 'email',
        },
        {
          label: 'Adres',
          value: 'address',
        },
      ],
      defaultValue: ['phone', 'email', 'address'],
    },
  ],
}