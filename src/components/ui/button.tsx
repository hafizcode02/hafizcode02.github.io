import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase tracking-wide border-[var(--border-width-brutal)] border-foreground rounded-[8px] shadow-brutal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--neo-yellow)] text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[7px_7px_0_var(--foreground)] dark:hover:shadow-[5px_5px_0_oklch(0.92_0_0_/_0.9)]",
        destructive:
          "bg-destructive text-white hover:translate-x-[-1px] hover:translate-y-[-1px]",
        outline:
          "bg-white dark:bg-card text-foreground hover:bg-accent hover:translate-x-[-1px] hover:translate-y-[-1px]",
        secondary:
          "bg-[var(--neo-cyan)] text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[7px_7px_0_var(--foreground)] dark:hover:shadow-[5px_5px_0_oklch(0.92_0_0_/_0.9)]",
        ghost:
          "border-transparent shadow-none hover:border-foreground hover:bg-[var(--neo-pink)] hover:text-black hover:shadow-brutal-sm active:shadow-none",
        link: "border-transparent shadow-none underline-offset-4 hover:underline text-primary normal-case font-bold tracking-normal",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-[8px] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-[8px] px-8 has-[>svg]:px-4 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
