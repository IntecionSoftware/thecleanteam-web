import { LinkButton } from '@/components/LinkButton/LinkButton'

type Props = {
  heading: string
  description?: string
  button?: any[]
  locale?: string
}

export const CTA = ({
  heading,
  description,
  button,
  locale
}: Props) => {
  return (
    <section id="cta" className="bg-light">
      <div className="site-container flex flex-col items-center text-center">
        <h2 className="headline-h2-big max-w-6xl">
          {heading}
        </h2>

        {description && (
          <p className="body-xl mt-8 max-w-5xl">
            {description}
          </p>
        )}

        {button?.[0] && (
          <div className="mt-10">
            <LinkButton {...button[0]} locale={locale} />
          </div>
        )}
      </div>
    </section>
  )
}