import {
  RichText as PayloadRichText,
} from '@payloadcms/richtext-lexical/react'

type Props = {
  data: any
  className?: string
}

export const RichText = ({ data, className }: Props) => {
  if (!data) {
    return null
  }

  return (
    <div className={className}>
      <PayloadRichText data={data} />
    </div>
  )
}