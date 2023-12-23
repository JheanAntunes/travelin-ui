import { cn } from '@/lib/utils'

export function TypographyH1({
  children,
  className,
  ...restProps
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'tw-font-serif tw-text-7xl tw-font-medium md:tw-text-9xl',
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({
  children,
  className,
  ...restProps
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'tw-font-serif tw-text-xl md:tw-text-2xl  lg:tw-text-3xl',
        className
      )}
      {...restProps}
    >
      {children}
    </h2>
  )
}

export function TypographyP({
  children,
  className,
  ...restProps
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('tw-font-sans', className)} {...restProps}>
      {children}
    </p>
  )
}

export function TypographySmall({
  children,
  className,
  ...restProps
}: React.ComponentProps<'small'>) {
  return (
    <small
      className={cn('tw-text-sm tw-font-medium tw-leading-none', className)}
      {...restProps}
    >
      {children}
    </small>
  )
}
