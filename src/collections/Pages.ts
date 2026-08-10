// src/collections/Pages.ts
import type { CollectionConfig } from 'payload'
import { buildSlugField } from '@intecion/ipal-kit'

import { ContentBlock } from '@/blocks/Content/config'
import { HeroBlock } from '@/blocks/Hero'
import { OfferBlock } from '@/blocks/Offer'
import { CTABlock } from '@/blocks/CTA'
import { PricingBlock } from '@/blocks/Pricing'
import { AboutBlock } from '@/blocks/About'
import { ContactBlock } from '@/blocks/Contact'
import { SimpleHeroBlock } from '@/blocks/SimpleHero'
import { FullContentBlock } from '@/blocks/FullContent'
import { GalleryBlock } from '@/blocks/Gallery'
import { FreeQuoteBlock } from '@/blocks/FreeQuote'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },

    buildSlugField({ from: 'title' }),

    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        OfferBlock,
        CTABlock,
        ContentBlock,
        PricingBlock,
        AboutBlock,
        ContactBlock,
        SimpleHeroBlock,
        FullContentBlock,
        GalleryBlock,
        FreeQuoteBlock,
      ],
    },
  ],
}