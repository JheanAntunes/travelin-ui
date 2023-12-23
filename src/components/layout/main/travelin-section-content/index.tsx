import ImgTravelin from '@/components/assets/img-travelin.jpg'
import { TypographyH1 } from '@/components/typography'
import Image from 'next/image'
import TravelinSectionContentDestination from './travelin-section-content-destination'
import TravelinSectionContentPagination from './travelin-section-content-pagination'

function TravelinSectionContent() {
  return (
    <section className="tw-grid tw-grid-cols-1 tw-gap-8 tw-pt-8 sm:tw-container lg:tw-grid-cols-2 lg:tw-grid-rows-[300px] lg:tw-gap-0">
      <div className="tw-flex tw-flex-col tw-justify-between tw-px-8 sm:tw-px-0">
        <div className="tw-flex tw-flex-col tw-gap-7">
          <TravelinSectionContentDestination />
          <TypographyH1 className="md:tw-text-9xl">Africa</TypographyH1>
        </div>
        <TravelinSectionContentPagination />
      </div>
      <div>
        <div className="tw-relative tw-h-60 tw-w-full tw-overflow-hidden tw-rounded md:tw-h-80 lg:tw-h-full">
          <Image
            src={ImgTravelin}
            alt="Mapa do planeta"
            fill
            sizes="100vw"
            className="tw-object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default TravelinSectionContent
