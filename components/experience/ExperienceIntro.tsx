"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

export default function ExperienceIntro() {
  return (
    <div className="space-y-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <TechnicalLabel>EXPERIENCE // 003</TechnicalLabel>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-h1 uppercase tracking-tight leading-tight text-foreground"
      >
        FROM FIELD DATA TO IMMERSIVE SYSTEMS.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-body-lg text-foreground-secondary"
      >
        Field logs and technical history of building XR simulations, 3D terrain reconstruction, and spatial tools.
      </motion.p>
    </div>
  );
}
