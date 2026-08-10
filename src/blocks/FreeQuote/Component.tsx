import config from '@payload-config'
import { getPayload } from 'payload'

import { RichText } from '@/components/RichText'
import { FormRenderer } from '@/components/Form'
import { getTurnstileSiteKey } from '@/lib/payload'

import type { FreeQuote as FreeQuoteGlobal } from '@/payload-types'

export const FreeQuote = async () => {
  const payload = await getPayload({
    config,
  })

  const [freeQuote, turnstileSiteKey] = await Promise.all([
    payload.findGlobal({
      slug: 'freeQuote',
      depth: 1,
    }),
    getTurnstileSiteKey(),
  ])

  const data = freeQuote as FreeQuoteGlobal

  const form =
    typeof data.form === 'object' && data.form !== null
      ? data.form
      : null

  return (
    <section className="free-quote bg-white">
      <div className="site-container">
        <RichText
          data={data.content}
          className="rich-text"
        />

        {form && (
          <div className="free-quote-form flex justify-center">
            <div className="w-[90%]">
    <FormRenderer
      form={form}
      turnstileSiteKey={turnstileSiteKey}
    />
  </div>
          </div>
        )}
      </div>
    </section>
  )
}