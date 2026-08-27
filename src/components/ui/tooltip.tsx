"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom";
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = "top",
  className,
}: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <span
      ref={ref}
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span
        aria-describedby={open ? id : undefined}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex"
      >
        {children}
      </span>
      {open && (
        <span
          id={id}
          role="tooltip"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 z-20 w-64 md:w-72 bg-[var(--neo-yellow)] text-black border-[var(--border-width-brutal)] border-foreground rounded-[8px] shadow-brutal px-3 py-2.5 font-mono font-bold text-xs leading-snug",
            side === "top" ? "bottom-full mb-2" : "top-full mt-2",
            className
          )}
        >
          {content}
          <span
            aria-hidden
            className={cn(
              "absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--neo-yellow)] border-foreground rotate-45",
              side === "top"
                ? "top-full -mt-1.5 border-r-[var(--border-width-brutal)] border-b-[var(--border-width-brutal)]"
                : "bottom-full -mb-1.5 border-l-[var(--border-width-brutal)] border-t-[var(--border-width-brutal)]"
            )}
          />
        </span>
      )}
    </span>
  );
}
