"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { profileData } from "@/data/profile";

export default function AboutIntro() {
  return (
    <div className="space-y-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <TechnicalLabel>ABOUT // 001</TechnicalLabel>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-h1 uppercase tracking-tight leading-tight text-foreground"
      >
        {profileData.aboutIntro}
      </motion.h2>
    </div>
  );
}
