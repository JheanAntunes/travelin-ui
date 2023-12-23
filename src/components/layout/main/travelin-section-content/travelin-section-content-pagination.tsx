import { TypographySmall } from '@/components/typography'
import { Dot } from 'lucide-react'

function TravelinSectionContentPagination() {
  return (
    <div className="tw-flex tw-items-center tw-gap-2">
      <TypographySmall className="tw-flex tw-items-center tw-gap-1 tw-text-orange-500">
        <Dot width={32} height={32} /> Africa
      </TypographySmall>
      <Dot className="tw-text-orange-950/70" width={32} height={32} />
      <Dot className="tw-text-orange-950/70" width={32} height={32} />
      <Dot className="tw-text-orange-950/70" width={32} height={32} />
    </div>
  )
}

export default TravelinSectionContentPagination
