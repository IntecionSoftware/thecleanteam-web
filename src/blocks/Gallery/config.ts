import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'Gallery',
  labels: {
    singular: 'Gallery',
    plural: 'Gallery',
  },
  fields: [
    {
      name: 'heading',
      label: 'Nagłówek',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'images',
      label: 'Zdjęcia',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
  ],
}