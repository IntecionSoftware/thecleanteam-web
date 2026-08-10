import { LinkButton } from '@/components/LinkButton/LinkButton'
import { RichText } from '@/components/RichText'

import type { FullContent as FullContentProps } from '@/payload-types'

type Props = FullContentProps

export const FullContent = ({
  content,
  addButton,
  button,
}: Props) => {
  const buttonData = button?.link?.[0]

  return (
    <section className="full-content bg-white">
      <div className="site-container">
        <RichText
          data={content}
          className="rich-text"
        />

        {addButton && buttonData && (
          <LinkButton {...buttonData} />
        )}
      </div>
    </section>
  )
}