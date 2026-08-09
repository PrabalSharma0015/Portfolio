"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export default function AboutStory() {
  const { identity, process, purpose } = profileData.aboutStory;

  const blocks = [
    {
      id: "01",
      title: "IDENTITY",
      text: identity,
      highlight: true,
    },
    {
      id: "02",
      title: "PROCESS",
      text: process,
      highlight: false,
    },
    {
      id: "03",
      title: "PURPOSE",
      text: purpose,
      highlight: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      {blocks.map((block, index) => (
        <motion.div
          key={block.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className={`glass-panel p-6 border-l-2 flex flex-col justify-start space-y-4 rounded-r-lg transition-all duration-300 hover:border-l-accent hover:bg-surface-elevated/60 ${
            block.highlight
              ? "border-l-accent bg-surface-elevated/40"
              : "border-l-border-subtle bg-surface/30"
          }`}
        >
          <div className="flex items-center justify-between text-technical text-[10px]">
            <span
              className={
                block.highlight
                  ? "text-accent font-bold"
                  : "text-foreground-muted"
              }
            >
              BLOCK {block.id} // {block.title}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          </div>

          <p className="text-body-sm text-foreground-secondary leading-relaxed font-sans">
            {block.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
