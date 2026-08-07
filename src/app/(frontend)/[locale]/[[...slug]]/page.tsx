// src/app/(frontend)/[locale]/[[...slug]]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { RenderBlocks } from '@intecion/ipal-kit/rsc'
import { createPageMetadata } from '@intecion/ipal-kit'
import { i18nConfig } from '@/i18n.config'
import { blockRegistry } from '@/blocks/registry'
import { getCachedPayload } from '@/lib/payload'
import { resolvePage } from '@/lib/pages'

const pageMetadata = createPageMetadata({
  config: i18nConfig,
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
})

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale, slug } = await params
  return pageMetadata({ payload: await getCachedPayload(), locale, slug })
}

export default async function Page({ params }) {
  const { locale, slug } = await params
  const page = await resolvePage(locale, slug?.length ? slug.join('/') : null)
  if (!page) notFound()

  return <RenderBlocks blocks={page.layout as never} components={blockRegistry} />
}