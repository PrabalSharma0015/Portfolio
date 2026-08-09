import { cn } from "@/lib/utils";

export const TechnicalLabel = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn("text-technical flex items-center gap-2", className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {children}
    </span>
  );
};
