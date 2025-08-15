import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "text-[#EDFFE9] file:text-foreground placeholder:text-[#EDFFE9] selection:bg-primary focus-visible:shadow-white/30 selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-full bg-[#EDFFE9]/5 backdrop-blur-xs px-6 py-3 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-indigo-500/20 shadow-xl",
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                className
            )}
            {...props}
        />
    );
}

export { Input };
