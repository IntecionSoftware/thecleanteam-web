'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

import type { Pricing as PricingGlobal } from '@/payload-types'

import { LinkButton } from '@/components/LinkButton/LinkButton'

export const PricingClient = ({
  heading,
  button,
  moreLink,
  services = [],
}: PricingGlobal) => {
  const [activeService, setActiveService] = useState(0)
  const [activePricing, setActivePricing] = useState(0)

  const currentService = services[activeService]

  const currentPricing = useMemo(() => {
    return currentService?.pricings?.[activePricing]
  }, [currentService, activePricing])

  if (!services.length) {
    return null
  }

  const packages = [
    currentPricing?.packages.weekly,
    currentPricing?.packages.biweekly,
    currentPricing?.packages.oneTime,
  ]

  return (
    <section id="pricing" className="bg-white">
      <div className="site-container">
        <h2 className="headline-h2 text-center">{heading}</h2>

        <div className="pricing-filters">

            <span className="text-xl font-bold leading-7 text-dark">Wybierz typ usługi</span>
          <div className="pricing-buttons">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                className={`button-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => {
                  setActiveService(index)
                  setActivePricing(0)
                }}
              >
                {service.label}
              </button>
            ))}
          </div>

          <span className="text-xl font-bold leading-7 text-dark">Wybierz metraż</span>

          {!!currentService?.pricings?.length && (
            <div className="pricing-buttons">
              {currentService.pricings.map((pricing, index) => (
                <button
                  key={pricing.id}
                  type="button"
                  className={`button-tab ${activePricing === index ? 'active' : ''}`}
                  onClick={() => setActivePricing(index)}
                >
                  {pricing.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pricing-content">
          <div className="pricing-grid">
            {packages.map((item, index) => {
              if (!item) {
                return null
              }

              return (
                <article key={index} className="pricing-card">
                  <h3 className="headline-h3">{item.heading}</h3>

                  <p className="pricing-price">{item.price} zł</p>

                  {typeof moreLink.page === 'object' && moreLink.page?.slug && (
                    <Link
                      href={`/${moreLink.page.slug}`}
                      className="pricing-link"
                    >
                      {moreLink.label}
                    </Link>
                  )}

                  {button?.[0] && (
                    <LinkButton
                      {...button[0]}
                      appearance={index === 0 ? 'primary' : 'secondary'}
                    />
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}