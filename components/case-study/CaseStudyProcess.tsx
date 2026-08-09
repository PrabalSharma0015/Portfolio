"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Sparkles } from "lucide-react";

interface CaseStudyProcessProps {
  project: Project;
}

export default function CaseStudyProcess({ project }: CaseStudyProcessProps) {
  if (!project.process || project.process.length === 0) return null;

  return (
    <div className="space-y-6 py-12 border-t border-border-subtle/50">
      <div className="flex flex-col gap-1">
        <span className="text-technical text-accent uppercase">CORE SYSTEM FEATURES // WHAT WAS CREATED</span>
        <h3 className="text-h2 uppercase tracking-tight text-foreground flex items-center gap-2">
          <span>Key System Capabilities</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {project.process.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-panel p-6 space-y-2 border border-border-subtle hover:border-accent/40 transition-all rounded-xl shadow-sm"
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs font-bold text-accent">FEATURE 0{idx + 1}</span>
            </div>
            <h4 className="font-bold text-sm uppercase tracking-tight text-foreground">{item.title}</h4>
            <p className="text-body-sm text-foreground-secondary leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
