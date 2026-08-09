import { cn } from "@/lib/utils";

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-mono font-medium text-foreground-secondary transition-colors hover:bg-surface-elevated hover:text-foreground", className)}>
      {children}
    </span>
  );
};
