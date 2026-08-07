import config from '@payload-config'
import { getPayload } from 'payload'

import { ContactClient } from './Client'

export const Contact = async () => {
  const payload = await getPayload({
    config,
  })

  const company = await payload.findGlobal({
    slug: 'company',
  })

  const contact = await payload.findGlobal({
    slug: 'contact',
  })

  return (
    <ContactClient
      company={company}
      contact={contact}
    />
  )
}