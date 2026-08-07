import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'

export const Pricing: GlobalConfig = {
  slug: 'pricing',

  label: 'Pricing',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      localized: true,
      required: true,
    },

    linkField({
      name: 'button',
      label: 'Button',
      maxRows: 1,
    }),

    {
      name: 'moreLink',
      label: 'More link',
      type: 'group',

      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          localized: true,
          defaultValue: 'Dowiedz się więcej',
          required: true,
        },
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
      ],
    },

    {
      name: 'services',
      label: 'Services',
      type: 'array',
      required: true,
      minRows: 1,

      fields: [
        {
          name: 'label',
          label: 'Button label',
          type: 'text',
          localized: true,
          required: true,
        },

        {
          name: 'pricings',
          label: 'Pricings',
          type: 'array',
          required: true,
          minRows: 1,

          fields: [
            {
              name: 'label',
              label: 'Size label',
              type: 'text',
              localized: true,
              required: true,
            },

            {
              name: 'packages',
              label: 'Packages',
              type: 'group',

              fields: [
                {
                  name: 'weekly',
                  label: 'Co tydzień',

                  type: 'group',

                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      localized: true,
                      defaultValue: 'Co tydzień',
                      required: true,
                    },
                    {
                      name: 'price',
                      type: 'number',
                      required: true,
                    },
                  ],
                },

                {
                  name: 'biweekly',
                  label: 'Co 2 tygodnie',

                  type: 'group',

                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      localized: true,
                      defaultValue: 'Co 2 tygodnie',
                      required: true,
                    },
                    {
                      name: 'price',
                      type: 'number',
                      required: true,
                    },
                  ],
                },

                {
                  name: 'oneTime',
                  label: 'Jednorazowo',

                  type: 'group',

                  fields: [
                    {
                      name: 'heading',
                      type: 'text',
                      localized: true,
                      defaultValue: 'Jednorazowo',
                      required: true,
                    },
                    {
                      name: 'price',
                      type: 'number',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}