import { cn } from "@/lib/utils";

export const SectionHeading = ({ children, className, subtitle }: { children: React.ReactNode; className?: string, subtitle?: string }) => {
  return (
    <div className={cn("flex flex-col gap-2 mb-12", className)}>
      {subtitle && <span className="text-technical">{subtitle}</span>}
      <h2 className="text-h2 uppercase tracking-tight">{children}</h2>
    </div>
  );
};
