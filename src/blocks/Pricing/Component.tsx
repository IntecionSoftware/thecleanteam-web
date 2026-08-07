import config from '@payload-config'
import { getPayload } from 'payload'

import { PricingClient } from './Client'
import type { Pricing as PricingGlobal } from '@/payload-types'

export const Pricing = async () => {
  const payload = await getPayload({ config })

  const pricing = await payload.findGlobal({
    slug: 'pricing',
    depth: 1,
  })

  return <PricingClient {...(pricing as PricingGlobal)} />
}