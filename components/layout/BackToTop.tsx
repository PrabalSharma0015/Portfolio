"use client";

import React from "react";
import { useCursor } from "@/context/CursorContext";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const { setCursor, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setCursor("button")}
      onMouseLeave={resetCursor}
      aria-label="Scroll back to top"
      className="inline-flex items-center gap-2 font-mono text-xs text-foreground-muted hover:text-accent transition-colors cursor-pointer group"
    >
      <span>BACK TO TOP</span>
      <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
