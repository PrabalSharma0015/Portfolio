"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface CaseStudyTechProps {
  project: Project;
}

export default function CaseStudyTech({ project }: CaseStudyTechProps) {
  if (!project.techDetails || project.techDetails.length === 0) return null;

  return (
    <div className="space-y-6 py-12 border-t border-border-subtle/50">
      <div className="flex flex-col gap-1">
        <span className="text-technical text-accent">03 // SYSTEM STACK</span>
        <h3 className="text-h2 uppercase tracking-tight text-foreground">Technology Roles</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.techDetails.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-panel p-5 space-y-2 border border-border-subtle hover:border-accent/40 transition-colors"
          >
            <span className="font-mono text-xs font-bold text-accent block uppercase">{tech.name}</span>
            <p className="text-body-sm text-foreground-secondary leading-snug">{tech.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
