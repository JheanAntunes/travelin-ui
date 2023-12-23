import Link from 'next/link'

function Logo() {
  return (
    <Link
      href="/"
      className="tw-font-serif tw-text-xl tw-font-bold tw-capitalize tw-text-orange-100 md:tw-text-3xl lg:tw-text-4xl"
    >
      Travelin
    </Link>
  )
}

export default Logo
