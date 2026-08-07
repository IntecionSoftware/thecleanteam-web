import { LinkButton } from '@/components/LinkButton/LinkButton'
import Image from 'next/image'

type Props = {
  heading: string
  description?: string
  image?: {
    url?: string
    alt?: string
  }
  buttons?: any[]
}

export const Hero = ({ heading, description, image, buttons }: Props) => {
  console.log('HERO IMAGE:', image)
  return (
    <section id="hero" className="bg-light">
      <div className="site-container hero-grid">
        <figure className="hero-image">
          {image?.url && (
            <Image src={image.url} alt={image.alt ?? heading} width={800} height={800} />
          )}
        </figure>

        <div>
          <h1 className="headline-h1">{heading}</h1>

          {description && <p className="body-xl">{description}</p>}

          {!!buttons?.length && (
            <div className="mt-2 flex flex-col gap-2 lg:flex-row">
              {buttons.map((button, index) => (
                <LinkButton key={index} {...button} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
