import TravelinSectionContent from '@/components/layout/main/travelin-section-content'
import TravelinSectionSliders from '@/components/layout/main/travelin-section-slider'

export default function HomeTravelin() {
  return (
    <main className="tw-flex tw-flex-col tw-gap-8">
      <TravelinSectionContent />
      <TravelinSectionSliders />
    </main>
  )
}
