import config from '@payload-config'
import { getPayload } from 'payload'

import { getTurnstileSiteKey } from '@/lib/payload'

import { ContactClient } from './Client'

export const Contact = async () => {
  const payload = await getPayload({
    config,
  })

  const [company, contact, turnstileSiteKey] = await Promise.all([
    payload.findGlobal({
      slug: 'company',
      depth: 2,
    }),
    payload.findGlobal({
      slug: 'contact',
      depth: 2,
    }),
    getTurnstileSiteKey(),
  ])

  return (
    <ContactClient
      company={company}
      contact={contact}
      turnstileSiteKey={turnstileSiteKey}
    />
  )
}