"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export default function HeroTechnicalMeta() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="hidden xl:flex items-center gap-6 text-caption font-mono text-foreground-muted uppercase tracking-wider"
    >
      <span className="text-accent">//</span>
      {profileData.keywords.map((kw, i) => (
        <React.Fragment key={kw}>
          <span>{kw}</span>
          {i < profileData.keywords.length - 1 && <span className="text-border-hover">•</span>}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
