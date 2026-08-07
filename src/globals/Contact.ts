import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',

  label: 'Contact',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'headingLeft',
      label: 'Heading left',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'contactDetails',
      label: 'Contact details',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['phone', 'email'],
      options: [
        {
          label: 'Phone',
          value: 'phone',
        },
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Address',
          value: 'address',
        },
      ],
    },
    {
      name: 'headingRight',
      label: 'Heading right',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
}