'use server'

import { submitForm } from '@intecion/ipal-kit/server'

import { getCachedPayload } from '@/lib/payload'

export async function submitFormAction(
  formId: string,
  data: Record<string, unknown>,
  turnstileToken?: string,
) {
  const payload = await getCachedPayload()

  const result = await submitForm({
  payload,
  formId,
  data,
  ...(turnstileToken
    ? { turnstileToken }
    : {}),
})

  return result
}