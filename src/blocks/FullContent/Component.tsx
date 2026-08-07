import { RichText } from '@/components/RichText'

import type { FullContent as FullContentProps } from '@/payload-types'

type Props = FullContentProps

export const FullContent = ({ content }: Props) => {
  return (
    <section className="full-content bg-white">
      <div className="site-container">
        <RichText
          data={content}
          className="rich-text"
        />
      </div>
    </section>
  )
}