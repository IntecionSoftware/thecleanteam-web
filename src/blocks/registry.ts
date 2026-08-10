// src/blocks/registry.ts
import type { BlockComponentMap } from '@intecion/ipal-kit/rsc'

import { ContentBlockComponent } from '@/blocks/Content/Component'
import { Hero } from '@/blocks/Hero'
import { Offer } from '@/blocks/Offer'
import { CTA } from '@/blocks/CTA'
import { Pricing } from '@/blocks/Pricing'
import { About } from '@/blocks/About'
import { Contact } from '@/blocks/Contact'
import { SimpleHero } from '@/blocks/SimpleHero'
import { FullContent } from '@/blocks/FullContent'
import { Gallery } from '@/blocks/Gallery'
import { FreeQuote } from '@/blocks/FreeQuote'


export const blockRegistry: BlockComponentMap = {
  content: ContentBlockComponent,
  hero: Hero,
  offer: Offer,
  cta: CTA,
  pricing: Pricing,
  about: About,
  contact: Contact,
  simpleHero: SimpleHero,
  fullContent: FullContent,
  gallery: Gallery,
  freeQuote: FreeQuote,
}