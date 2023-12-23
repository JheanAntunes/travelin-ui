import { TypographySmall } from '@/components/typography'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function TravelinSectionContentDestination() {
  return (
    <TypographySmall className="tw-flex tw-items-center tw-gap-2 tw-text-zinc-400">
      <ArrowLeft width={14} height={14} /> Destination From{' '}
      <ArrowRight width={14} height={14} />
    </TypographySmall>
  )
}

export default TravelinSectionContentDestination
