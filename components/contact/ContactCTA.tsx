"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { contactData } from "@/data/contact";
import { useCursor } from "@/context/CursorContext";
import { Copy, Check, Mail } from "lucide-react";

export default function ContactCTA() {
  const { setCursor, resetCursor } = useCursor();
  const [copied, setCopied] = useState(false);

  // Subtle desktop magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const magneticX = useSpring(x, springConfig);
  const magneticY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15; // max ~6px
    const offsetY = (e.clientY - centerY) * 0.15;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    resetCursor();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6 select-none">
      {/* Dominant Magnetic CTA Button */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: magneticX, y: magneticY }}
        className="inline-block"
      >
        <a
          href={`mailto:${contactData.email}`}
          onMouseEnter={() => setCursor("link", "TALK")}
          onMouseLeave={resetCursor}
          className="glass-panel px-8 py-5 border border-accent bg-accent/10 hover:bg-accent text-foreground hover:text-black font-mono text-sm font-bold uppercase tracking-wider rounded-md inline-flex items-center gap-4 transition-colors duration-300 shadow-[0_0_20px_rgba(0,229,255,0.15)] group"
        >
          <Mail size={18} className="text-accent group-hover:text-black transition-colors" />
          <span>START A CONVERSATION →</span>
        </a>
      </motion.div>

      {/* Direct Email Address & One-Click Copy */}
      <div className="flex items-center gap-4 pt-2">
        <span className="font-mono text-xs text-foreground-secondary">
          DIRECT: <strong className="text-foreground">{contactData.email}</strong>
        </span>
        <button
          onClick={copyEmail}
          aria-label="Copy email address"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface border border-border-subtle hover:border-accent font-mono text-[10px] uppercase text-foreground-muted hover:text-accent transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check size={12} className="text-accent" />
              <span className="text-accent font-bold">COPIED!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
