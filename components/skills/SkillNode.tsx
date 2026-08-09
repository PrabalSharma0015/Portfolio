"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillItemData } from "@/data/skills";
import { useCursor } from "@/context/CursorContext";

interface SkillNodeProps {
  skill: SkillItemData;
  isSelected: boolean;
  isHovered: boolean;
  isSubdued: boolean;
  onSelect: (skill: SkillItemData) => void;
  onHover: (skill: SkillItemData | null) => void;
}

export default function SkillNode({
  skill,
  isSelected,
  isHovered,
  isSubdued,
  onSelect,
  onHover,
}: SkillNodeProps) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(skill)}
      onMouseEnter={() => {
        onHover(skill);
        setCursor("interactive", skill.name);
      }}
      onMouseLeave={() => {
        onHover(null);
        resetCursor();
      }}
      onFocus={() => {
        onHover(skill);
        setCursor("interactive", skill.name);
      }}
      onBlur={() => {
        onHover(null);
        resetCursor();
      }}
      aria-selected={isSelected}
      aria-label={`Select skill: ${skill.name}`}
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
        isSelected
          ? "bg-accent text-black border-accent font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-110 z-30"
          : isHovered
          ? "bg-surface-elevated text-accent border-accent scale-105 z-20"
          : isSubdued
          ? "bg-surface/30 text-foreground-muted border-border-subtle/50 opacity-40 z-10"
          : "bg-surface/80 text-foreground-secondary border-border-subtle hover:border-accent/50 z-10"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isSelected ? "bg-black" : isHovered ? "bg-accent animate-pulse" : "bg-accent/50"
        }`}
      />
      <span>{skill.name}</span>
    </motion.button>
  );
}
