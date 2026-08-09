"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";
import { useCursor } from "@/context/CursorContext";

export default function HeroText() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <div id="hero" className="flex flex-col justify-center space-y-8 max-w-2xl z-10">
      {/* Technical Identifier */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TechnicalLabel>HERO // 000</TechnicalLabel>
      </motion.div>

      {/* Main Identity Headings */}
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-display leading-[0.95] tracking-tighter text-foreground uppercase"
        >
          {profileData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-h3 font-mono font-medium text-accent tracking-wide uppercase"
        >
          {profileData.role}
        </motion.p>
      </div>

      {/* Positioning Statement */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="text-body-lg text-foreground-secondary leading-relaxed"
      >
        {profileData.headline}
      </motion.p>

      {/* Actions / CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-wrap gap-4 pt-2"
      >
        <Link
          href="/projects"
          onMouseEnter={() => setCursor("link", "VIEW")}
          onMouseLeave={resetCursor}
        >
          <Button variant="primary">VIEW SELECTED WORK</Button>
        </Link>
        <Link
          href="/about"
          onMouseEnter={() => setCursor("link", "EXPLORE")}
          onMouseLeave={resetCursor}
        >
          <Button variant="secondary">EXPLORE PROFILE</Button>
        </Link>
      </motion.div>
    </div>
  );
}
