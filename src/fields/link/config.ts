import type { Field } from 'payload'

type LinkFieldOptions = {
  name: string
  label?: string
  maxRows?: number
}

export const linkField = ({ name, label = 'Buttons', maxRows }: LinkFieldOptions): Field => ({
  name,
  label,
  type: 'array',
  maxRows,

  fields: [
    {
  name: 'label',
  type: 'text',
  localized: true,
  required: true,
},

    {
      name: 'appearance',
      type: 'select',
      defaultValue: 'primary',
      options: [
        {
          label: 'Primary',
          value: 'primary',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
      ],
      required: true,
    },

    {
      name: 'linkType',
      type: 'radio',
      defaultValue: 'page',
      options: [
        {
          label: 'Existing page',
          value: 'page',
        },
        {
          label: 'Anchor',
          value: 'anchor',
        },
      ],
      required: true,
    },

    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      admin: {
        condition: (_, siblingData) => siblingData?.linkType === 'page',
      },
    },

    {
      name: 'anchor',
      type: 'text',
      admin: {
        description: 'Example: #services',
        condition: (_, siblingData) => siblingData?.linkType === 'anchor',
      },
    },

    {
      name: 'newTab',
      label: 'Open in new tab',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'showIcon',
      label: 'Show icon',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'icon',
      type: 'upload',
      relationTo: 'icons',
      admin: {
        condition: (_, siblingData) => siblingData?.showIcon,
      },
    },
  ],
})
