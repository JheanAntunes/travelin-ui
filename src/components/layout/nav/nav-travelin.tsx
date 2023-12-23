import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DotIcon, Search } from 'lucide-react'
import Logo from '../logo'

function NavTravelin() {
  return (
    <nav className="tw-flex tw-w-full tw-justify-between">
      <Logo />
      <search className="tw-flex tw-items-center tw-gap-2">
        <Search className="tw-text-orange-100" />
        <Input
          placeholder="Search your destination"
          className="tw-border-transparent tw-bg-transparent placeholder:tw-text-orange-100"
        />
      </search>
      <Button
        size="icon"
        variant="outline"
        className="tw-rounded-full tw-bg-transparent tw-text-orange-100 tw-shadow-sm hover:tw-text-orange-500"
      >
        <DotIcon />
        <DotIcon />
      </Button>
    </nav>
  )
}

export default NavTravelin
