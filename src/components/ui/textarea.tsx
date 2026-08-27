import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-[8px] border-[var(--border-width-brutal)] border-foreground bg-white dark:bg-card px-3 py-2 text-base font-mono shadow-brutal-sm transition-all outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:translate-x-[-1px] focus-visible:translate-y-[-1px] focus-visible:shadow-brutal focus-visible:ring-2 focus-visible:ring-foreground",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
