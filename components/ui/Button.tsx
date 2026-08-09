import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "text";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground-muted",
      secondary: "border border-border bg-transparent hover:bg-surface text-foreground",
      ghost: "bg-transparent hover:bg-surface text-foreground-secondary hover:text-foreground",
      text: "bg-transparent text-accent p-0 uppercase tracking-widest text-xs font-mono hover:text-accent-strong underline-offset-4 hover:underline"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none cursor-pointer",
          variant !== "text" && "px-6 py-3 rounded-sm text-sm font-medium",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
