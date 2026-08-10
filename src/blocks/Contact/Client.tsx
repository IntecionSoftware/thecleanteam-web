'use client'

import Link from 'next/link'

import { Icon } from '@/components/Icon/Icon'
import { RichText } from '@/components/RichText'
import type { Company, Contact, Form, Icon as IconType } from '@/payload-types'
import dynamic from 'next/dynamic'

const FormRenderer = dynamic(
  () => import('@/components/Form').then((mod) => mod.FormRenderer),
)

type Props = {
  company: Company
  contact: Contact
  turnstileSiteKey?: string | null
}

export const ContactClient = ({ company, contact, turnstileSiteKey }: Props) => {
  const form = typeof contact.form === 'object' ? (contact.form as Form) : null

  return (
    <section id="contact" className="bg-white">
      <div className="site-container contact-grid">
        <div className="contact-content">
          <h2 className="headline-h2">{contact.headingLeft}</h2>

          <p className="body-xl w-[90%] mt-8">{contact.description}</p>

          <div className="contact-details">
            {contact.contactDetails.includes('phone') && (
              <Link
                href={`tel:${company.phone.value.replace(/\s+/g, '')}`}
                className="contact-item"
              >
                <Icon icon={company.phone.icon as IconType} />
                <span>{company.phone.value}</span>
              </Link>
            )}

            {contact.contactDetails.includes('email') && (
              <Link href={`mailto:${company.email.value}`} className="contact-item">
                <Icon icon={company.email.icon as IconType} />
                <span>{company.email.value}</span>
              </Link>
            )}

            {contact.contactDetails.includes('address') && (
              <>
                {company.address.link ? (
                  <Link
                    href={company.address.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <Icon icon={company.address.icon as IconType} />
                    <span>{company.address.value}</span>
                  </Link>
                ) : (
                  <div className="contact-item">
                    <Icon icon={company.address.icon as IconType} />
                    <span>{company.address.value}</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="contact-content">
          <h2 className="headline-h2">{contact.headingRight}</h2>

          {form && <FormRenderer form={form} turnstileSiteKey={turnstileSiteKey} />}
        </div>
      </div>
    </section>
  )
}
