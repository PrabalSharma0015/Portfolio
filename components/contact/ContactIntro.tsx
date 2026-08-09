"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { contactData } from "@/data/contact";

export default function ContactIntro() {
  return (
    <div className="space-y-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <TechnicalLabel>CONTACT // 006</TechnicalLabel>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-display leading-[0.95] uppercase tracking-tighter text-foreground"
      >
        {contactData.headline}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-body-lg text-foreground-secondary leading-relaxed max-w-2xl"
      >
        {contactData.subtitle}
      </motion.p>
    </div>
  );
}
