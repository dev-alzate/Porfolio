import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "accent";
};

export function Badge({ className, variant = "default", ...props }: Props) {
  return (
    <span
      className={cn(
        "mono inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium",
        variant === "default" && "bg-bg-elevated text-fg-muted border border-border",
        variant === "outline" && "border border-border text-fg-muted",
        variant === "accent" && "bg-accent/10 text-accent border border-accent/20",
        className,
      )}
      {...props}
    />
  );
}
