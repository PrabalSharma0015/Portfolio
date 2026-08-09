"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorType, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Refined spring configuration for crisp 60fps tracking
  const springConfig = { damping: 32, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on coarse pointers (touch) or reduced motion
    const touchMedia = window.matchMedia("(pointer: coarse)");
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (touchMedia.matches || reducedMotionMedia.matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorType !== "default";
  const hasText = Boolean(cursorText);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 -ml-0.75 -mt-0.75 rounded-full bg-accent mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isExpanded ? 0 : 1,
        }}
      />

      {/* Outer Spatial Followers */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-accent/40 bg-accent/10 backdrop-blur-[2px] transition-colors duration-200"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isExpanded ? (hasText ? 72 : 48) : 26,
          height: isExpanded ? (hasText ? 72 : 48) : 26,
          marginLeft: isExpanded ? (hasText ? -36 : -24) : -13,
          marginTop: isExpanded ? (hasText ? -36 : -24) : -13,
          borderColor: isExpanded ? "rgba(0, 229, 255, 0.8)" : "rgba(0, 229, 255, 0.3)",
          backgroundColor: isExpanded ? "rgba(0, 229, 255, 0.15)" : "rgba(0, 229, 255, 0.03)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-accent text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
