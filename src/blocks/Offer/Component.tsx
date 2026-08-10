import { LinkButton } from '@/components/LinkButton/LinkButton'
import Image from 'next/image'

type Props = {
  heading: string
  cards?: any[]
  locale?: string
}

export const Offer = ({ heading, cards = [], locale }: Props) => {
  const mode = cards.length === 2 || cards.length === 4 || cards.length === 7 ? 'four' : 'three'

  return (
    <section id="offer" className="bg-white">
      <div className="site-container">
        <h2 className="headline-h2 mb-12 text-center lg:mb-20">{heading}</h2>

        <div className={`offer-grid ${mode}`}>
          {cards.map((card) => (
            <article key={card.id} className="offer-card">
              <figure className="offer-image">
                {card.image?.url && (
                  <Image
                    src={card.image.url}
                    alt={card.image.alt ?? card.heading}
                    width={300}
                    height={300}
                  />
                )}
              </figure>

              <h3 className="headline-h3">{card.heading}</h3>

              <p className="body-lg w-4/5">{card.description}</p>

              {card.button?.[0] && <LinkButton {...card.button[0]} locale={locale} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
