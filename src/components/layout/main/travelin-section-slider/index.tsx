import CarouselWithPagination from './carousel-with-pagination'

function TravelinSectionSliders() {
  return (
    <section className="tw-relative">
      <div className="tw-mt-8 tw-h-64 tw-bg-gradient-to-r tw-from-orange-500 tw-via-orange-600 tw-to-orange-700">
        <div className="tw-absolute tw-inset-x-0 tw-top-0">
          <CarouselWithPagination />
        </div>
      </div>
    </section>
  )
}

export default TravelinSectionSliders
