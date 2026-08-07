import type { Block } from 'payload'

export const SimpleHeroBlock: Block = {
  slug: 'simpleHero',
  interfaceName: 'SimpleHero',
  labels: {
    singular: 'Simple Hero',
    plural: 'Simple Hero',
  },
  fields: [
    {
      name: 'heading',
      label: 'Nagłówek',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
}