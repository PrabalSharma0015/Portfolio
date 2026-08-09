import { cn } from "@/lib/utils";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("glass-panel glass-panel-hover p-6 md:p-8", className)}>
      {children}
    </div>
  );
};
