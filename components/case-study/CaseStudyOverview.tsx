"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface CaseStudyOverviewProps {
  project: Project;
}

export default function CaseStudyOverview({ project }: CaseStudyOverviewProps) {
  if (!project.context && !project.description) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-border-subtle/50">
      {/* Overview Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-6 border-l-2 border-l-accent space-y-3"
      >
        <span className="text-technical text-[10px] text-accent">01 // OVERVIEW</span>
        <h3 className="text-h3 uppercase font-bold text-foreground">Project Summary</h3>
        <p className="text-body text-foreground-secondary leading-relaxed">{project.description}</p>
      </motion.div>

      {/* Context Block */}
      {project.context && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel p-6 border-l-2 border-l-border-hover space-y-3"
        >
          <span className="text-technical text-[10px] text-foreground-muted">02 // CONTEXT</span>
          <h3 className="text-h3 uppercase font-bold text-foreground">Implementation Context</h3>
          <p className="text-body text-foreground-secondary leading-relaxed">{project.context}</p>
        </motion.div>
      )}
    </div>
  );
}
