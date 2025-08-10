import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-[#EDFFE9] placeholder:text-[#EDFFE9] focus-visible:shadow-green-400 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-xs bg-[#EDFFE9]/5 backdrop-blur-xs px-3 py-3 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-[#EDFFE9] shadow-md",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
