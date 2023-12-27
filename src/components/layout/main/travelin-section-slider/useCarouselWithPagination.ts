import { type CarouselApi } from '@/components/ui/carousel'
import { useCallback, useEffect, useState } from 'react'

function useCarouselWithPagination() {
  //states
  const [api, setApi] = useState<CarouselApi>()
  const [selectedPagination, setSelectedPagination] = useState(0)
  const [paginations, setPaginations] = useState<number[]>([])

  const scrollToClickedPagination = (index: number) => {
    if (!api) return
    api.scrollTo(index)
  }

  const carouselEventSelect = useCallback(() => {
    if (!api) return
    //clicked in button prev | next | pagination call function.
    setSelectedPagination(api.selectedScrollSnap())
  }, [api])

  const initPagination = useCallback(() => {
    if (!api) return
    setPaginations(api.scrollSnapList())
  }, [api])

  useEffect(() => {
    if (!api) return

    initPagination()
    carouselEventSelect()

    //events
    api.on('reInit', () => {
      initPagination()
      carouselEventSelect()
    })
    api.on('select', () => {
      // Do something on select.
      carouselEventSelect()
    })
  }, [api, initPagination, carouselEventSelect])

  return {
    setApi,
    paginations,
    selectedPagination,
    scrollToClickedPagination
  }
}

export default useCarouselWithPagination
