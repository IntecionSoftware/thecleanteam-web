import config from '@payload-config'
import { getPayload } from 'payload'

import { PricingClient } from './Client'
import type { Pricing as PricingGlobal } from '@/payload-types'

type Props = {
  locale?: string
}

export const Pricing = async ({ locale }: Props) => {
  const payload = await getPayload({ config })

  const pricing = await payload.findGlobal({
    slug: 'pricing',
    locale: locale as 'pl' | 'en',
    depth: 1,
  })

  return <PricingClient {...(pricing as PricingGlobal)} locale={locale} />
}