"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface CaseStudyApplicationsProps {
  project: Project;
}

export default function CaseStudyApplications({ project }: CaseStudyApplicationsProps) {
  const applications = project.applications;
  if (!applications || applications.length === 0) return null;

  return (
    <section className="space-y-6 py-12 border-t border-border-subtle/50">
      <div className="flex justify-between items-center text-technical text-[10px]">
        <span className="text-accent uppercase">REAL-WORLD USE-CASES</span>
        <span className="text-foreground-muted">PRACTICAL APPLICATIONS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {applications.map((app, i) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-panel p-5 border border-border-subtle hover:border-accent/50 transition-all rounded-xl space-y-3 shadow-md"
          >
            <span className="font-mono text-xs text-accent font-bold">0{i + 1}</span>
            <h4 className="text-h4 text-foreground font-bold uppercase">{app.title}</h4>
            <p className="text-body-sm text-foreground-secondary leading-relaxed">
              {app.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
