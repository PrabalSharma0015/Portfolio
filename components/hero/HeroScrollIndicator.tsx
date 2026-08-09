"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function HeroScrollIndicator() {
  const { setCursor, resetCursor } = useCursor();

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToNext}
      onMouseEnter={() => setCursor("button")}
      onMouseLeave={resetCursor}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
      aria-label="Scroll to Next Section"
    >
      <span className="text-technical text-[10px] text-foreground-muted group-hover:text-accent transition-colors">
        SCROLL TO EXPLORE
      </span>
      <div className="h-10 w-[1px] bg-border-subtle overflow-hidden relative">
        <motion.div
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-accent"
        />
      </div>
    </motion.button>
  );
}
