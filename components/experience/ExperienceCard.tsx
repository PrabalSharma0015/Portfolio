"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/types/experience";
import { Badge } from "@/components/ui/Badge";
import { useCursor } from "@/context/CursorContext";

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

export default function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setCursor("interactive", exp.role)}
      onMouseLeave={resetCursor}
      className="glass-panel p-6 md:p-8 border border-border-subtle hover:border-accent/40 transition-all duration-300 relative space-y-6 group"
    >
      {/* Entry Header: Role & Period Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/60 pb-4">
        <div>
          <span className="text-technical text-[10px] text-accent block mb-1">
            LOG_0{index + 1} // {exp.startDate} – {exp.endDate}
          </span>
          <h3 className="text-h3 text-foreground font-bold tracking-tight uppercase">
            {exp.role}
          </h3>
          <p className="text-body-sm font-mono text-foreground-secondary mt-0.5">
            {exp.company}
          </p>
        </div>

        <span className="self-start sm:self-auto font-mono text-xs px-3 py-1 rounded-sm bg-surface-elevated text-accent border border-accent/20">
          {exp.endDate === "Present" ? "ACTIVE_MISSION" : "COMPLETED"}
        </span>
      </div>

      {/* Responsibilities List */}
      <ul className="space-y-2 text-body-sm text-foreground-secondary leading-relaxed list-disc list-inside marker:text-accent">
        {exp.description.map((point, i) => (
          <li key={i} className="pl-1">
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Technologies Badges */}
      {exp.technologies && (
        <div className="pt-2 flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      )}
    </motion.div>
  );
}
