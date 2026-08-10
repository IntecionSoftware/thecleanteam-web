import { cache } from 'react'
import { getPayload } from 'payload'

import { getSiteIntegrations } from '@intecion/ipal-kit'

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

export const getHeader = cache(async (locale: string) =>
  (await getCachedPayload()).findGlobal({
    slug: 'header',
    locale: locale as 'pl' | 'en',
    depth: 2,
  }),
)

export const getContact = cache(async () =>
  (await getCachedPayload()).findGlobal({
    slug: 'contact',
    depth: 2,
  }),
)

export const getFooter = cache(async (locale: string) =>
  (await getCachedPayload()).findGlobal({
    slug: 'footer',
    locale: locale as 'pl' | 'en',
    depth: 2,
  }),
)

export const getTurnstileSiteKey = cache(async () => {
  const payload = await getCachedPayload()

  const { turnstileSiteKey } = await getSiteIntegrations(payload)

  return turnstileSiteKey
})