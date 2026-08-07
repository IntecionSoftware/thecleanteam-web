import type { GlobalConfig } from 'payload'

export const Company: GlobalConfig = {
  slug: 'company',

  label: 'Company',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'phone',
      label: 'Phone',
      type: 'group',
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'icons',
          required: true,
        },
      ],
    },

    {
      name: 'email',
      label: 'Email',
      type: 'group',
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'email',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'icons',
          required: true,
        },
      ],
    },

    {
      name: 'address',
      label: 'Address',
      type: 'group',
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'textarea',
          required: true,
        },
        {
          name: 'link',
          label: 'Google Maps link',
          type: 'text',
          required: false,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'icons',
          required: true,
        },
      ],
    },
  ],
}
