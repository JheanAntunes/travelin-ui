'use client'
import Img from '@/components/assets/img-travelin.jpg'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import { activeClassSelectedPagination } from './active-class-selected-pagination'
import useCarouselWithPagination from './useCarouselWithPagination'

function CarouselWithPagination() {
  const { setApi, paginations, selectedPagination, scrollToClickedPagination } =
    useCarouselWithPagination()

  return (
    <Carousel
      className="tw-container"
      opts={{ loop: true, align: 'start' }}
      setApi={setApi}
    >
      <CarouselContent className="tw-h-48 sm:-tw-ml-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:tw-basis-1/2 sm:tw-pl-8 lg:tw-basis-1/3"
          >
            <div className="tw-relative tw-h-48 tw-overflow-hidden tw-rounded">
              <Image src={Img} alt="description" className="tw-object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="tw-mt-8 tw-flex tw-items-center tw-justify-center tw-gap-5 sm:tw-gap-8">
        <CarouselPrevious className="tw-static tw-translate-x-0 tw-translate-y-0 tw-bg-transparent tw-text-white hover:tw-text-orange-600" />
        <div className="tw-flex tw-gap-1 sm:tw-gap-2">
          {paginations.map((_, index) => (
            <Button
              size="icon"
              variant="outline"
              className={cn(
                'group tw-h-6 tw-w-6 tw-rounded-full tw-bg-transparent hover:tw-border-orange-950 hover:tw-bg-transparent hover:tw-text-orange-950 sm:tw-h-10 sm:tw-w-10',
                {
                  'tw-border-orange-950': activeClassSelectedPagination(
                    selectedPagination,
                    index
                  )
                }
              )}
              key={index}
              onClick={() => {
                scrollToClickedPagination(index)
              }}
            >
              <Dot
                className={cn(
                  'tw-h-full tw-w-full tw-text-white hover:tw-text-orange-950 group-hover:tw-text-orange-950',
                  {
                    'tw-text-orange-950': activeClassSelectedPagination(
                      selectedPagination,
                      index
                    )
                  }
                )}
              />
            </Button>
          ))}
        </div>
        <CarouselNext className="tw-static tw-translate-x-0 tw-translate-y-0 tw-bg-transparent tw-text-white hover:tw-text-orange-600" />
      </div>
    </Carousel>
  )
}

export default CarouselWithPagination
