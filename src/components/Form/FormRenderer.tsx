'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'

import { RichText } from '@/components/RichText'
import { Turnstile } from '@intecion/ipal-kit/client'

import { submitFormAction } from './actions'

import type { Form as FormType } from '@/payload-types'

type Props = {
  form: FormType
  turnstileSiteKey?: string | null
}

export const FormRenderer = ({
  form,
  turnstileSiteKey,
}: Props) => {
  const params = useParams<{ locale: string }>()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState('')

  const getFieldWidth = (width?: number | null) => {
    switch (width) {
      case 25:
        return 'w-full md:w-[calc(25%-1.5rem)]'

      case 33.333:
        return 'w-full md:w-[calc(33.333%-1.333rem)]'

      case 50:
        return 'w-full md:w-[calc(50%-1rem)]'

      case 66.666:
        return 'w-full md:w-[calc(66.666%-0.667rem)]'

      case 75:
        return 'w-full md:w-[calc(75%-0.5rem)]'

      default:
        return 'w-full'
    }
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setIsSubmitting(true)
    setError(null)

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const data: Record<string, unknown> = {}

    formData.forEach((value, key) => {
      data[key] = value
    })

    try {
      const result = await submitFormAction(
        String(form.id),
        data,
        turnstileToken,
      )

      if (result.success) {
        formElement.reset()

        if (form.confirmationType === 'redirect') {
          if (
            form.redirect?.type === 'custom' &&
            form.redirect.url
          ) {
            window.location.href = form.redirect.url
            return
          }

          if (
            form.redirect?.type === 'reference' &&
            typeof form.redirect.reference?.value === 'object'
          ) {
            const page = form.redirect.reference.value

            window.location.href = `/${params.locale}/${page.slug}`
            return
          }
        }

        setIsSubmitted(true)
      } else {
        console.log('FORM SUBMIT RESULT:', result)

        setError(
          `Błąd: ${
            'reason' in result
              ? result.reason
              : 'unknown'
          }`,
        )
      }
    } catch (error) {
      console.error('FORM SUBMIT ERROR:', error)

      setError(
        'Wystąpił błąd podczas wysyłania formularza.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    if (
      form.confirmationType === 'message' &&
      form.confirmationMessage
    ) {
      return (
        <div className="form-success">
          <RichText data={form.confirmationMessage} />
        </div>
      )
    }

    return null
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      {form.fields?.map((field) => {
        switch (field.blockType) {
          case 'text':
            return (
              <div
                className={`form-group ${getFieldWidth(field.width)}`}
                key={field.id}
              >
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  className="form-input"
                  defaultValue={field.defaultValue ?? ''}
                  placeholder=" "
                  required={field.required ?? false}
                />

                <label htmlFor={field.name}>
                  {field.label}
                </label>
              </div>
            )

          case 'email':
            return (
              <div
                className={`form-group ${getFieldWidth(field.width)}`}
                key={field.id}
              >
                <input
                  id={field.name}
                  name={field.name}
                  type="email"
                  className="form-input"
                  placeholder=" "
                  required={field.required ?? false}
                />

                <label htmlFor={field.name}>
                  {field.label}
                </label>
              </div>
            )

          case 'number':
            return (
              <div
                className={`form-group ${getFieldWidth(field.width)}`}
                key={field.id}
              >
                <input
                  id={field.name}
                  name={field.name}
                  type="tel"
                  className="form-input"
                  defaultValue={field.defaultValue ?? ''}
                  placeholder=" "
                  required={field.required ?? false}
                />

                <label htmlFor={field.name}>
                  {field.label}
                </label>
              </div>
            )

          case 'textarea':
            return (
              <div
                className={`form-group ${getFieldWidth(field.width)}`}
                key={field.id}
              >
                <textarea
                  id={field.name}
                  name={field.name}
                  className="form-textarea"
                  placeholder=" "
                  defaultValue={field.defaultValue ?? ''}
                  required={field.required ?? false}
                />

                <label htmlFor={field.name}>
                  {field.label}
                </label>
              </div>
            )

          case 'select':
            return (
              <div
                className={`form-group ${getFieldWidth(field.width)}`}
                key={field.id}
              >
                <select
                  id={field.name}
                  name={field.name}
                  className="form-input"
                  defaultValue={field.defaultValue ?? ''}
                  required={field.required ?? false}
                >
                  <option value="">
                    {field.label}
                  </option>

                  {field.options?.map((option) => (
                    <option
                      key={option.id ?? option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )

          case 'country':
            return (
              <div
                className={`form-group ${getFieldWidth(field.width)}`}
                key={field.id}
              >
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  className="form-input"
                  placeholder=" "
                  required={field.required ?? false}
                />

                <label htmlFor={field.name}>
                  {field.label}
                </label>
              </div>
            )

          case 'state':
            return (
              <div
                className={`form-group ${getFieldWidth(field.width)}`}
                key={field.id}
              >
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  className="form-input"
                  placeholder=" "
                  required={field.required ?? false}
                />

                <label htmlFor={field.name}>
                  {field.label}
                </label>
              </div>
            )

          case 'message':
            return (
              <div key={field.id}>
                {field.message && (
                  <RichText data={field.message} />
                )}
              </div>
            )

          case 'checkbox':
            return (
              <label
                className="checkbox"
                key={field.id}
              >
                <input
                  type="checkbox"
                  name={field.name}
                  defaultChecked={
                    field.defaultValue ?? false
                  }
                  required={field.required ?? false}
                />

                <span>
                  {field.label}
                </span>
              </label>
            )

          default:
            return null
        }
      })}

      {turnstileSiteKey && (
        <Turnstile
          siteKey={turnstileSiteKey}
          onToken={setTurnstileToken}
        />
      )}

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      <div className="form-bottom">
        <button
          type="submit"
          className="button-primary"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? 'Wysyłanie...'
            : form.submitButtonLabel || 'Wyślij'}
        </button>
      </div>
    </form>
  )
}