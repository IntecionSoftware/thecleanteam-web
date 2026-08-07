import { cache } from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'

export const getCachedPayload = cache(async () =>
  getPayload({ config: await config }),
)

export const getSettings = cache(async (locale: string) =>
  (await getCachedPayload()).findGlobal({
    slug: 'site-settings',
    locale: locale as 'pl' | 'en',
    depth: 2,
  }),
)

export const getCompany = cache(async () =>
  (await getCachedPayload()).findGlobal({
    slug: 'company',
    depth: 2,
  }),
)

export const getHeader = cache(async () =>
  (await getCachedPayload()).findGlobal({
    slug: 'header',
    depth: 2,
  }),
)

export const getContact = cache(async () =>
  (await getCachedPayload()).findGlobal({
    slug: 'contact',
    depth: 2,
  }),
)

export const getFooter = cache(async () =>
  (await getCachedPayload()).findGlobal({
    slug: 'footer',
    depth: 2,
  }),
)