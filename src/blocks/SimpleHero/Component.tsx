import type { SimpleHero as SimpleHeroProps } from '@/payload-types'

type Props = SimpleHeroProps

export const SimpleHero = ({ heading }: Props) => {
  return (
    <section className="simple-hero">
      <div className="site-container">
        <h1 className="headline-h1 text-primary">
          {heading}
        </h1>
      </div>
    </section>
  )
}