import { cn } from "@/lib/utils";

export const GridBackground = ({ className, variant = "technical" }: { className?: string, variant?: "technical" | "fine" }) => {
  return (
    <div className={cn("absolute inset-0 -z-20 pointer-events-none opacity-40 mix-blend-screen", 
      variant === "technical" ? "bg-grid-technical" : "bg-grid-fine",
      className)} 
    />
  );
};
