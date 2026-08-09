"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import ProjectVisual from "./ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useCursor } from "@/context/CursorContext";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export default function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-b border-border-subtle/50 last:border-0"
    >
      {/* Text Narrative Column */}
      <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        {/* Header Index & Subtitle */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold text-accent">[{project.index}]</span>
          <span className="text-technical text-[10px] text-foreground-muted">
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-h2 uppercase tracking-tight text-foreground leading-none">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-body text-foreground-secondary leading-relaxed max-w-xl">
          {project.description}
        </p>

        {/* Transformation Pipeline Metaphor Steps */}
        <div className="space-y-2 pt-2">
          <span className="text-technical text-[10px] text-foreground-muted">
            TRANSFORMATION PIPELINE
          </span>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-accent">
            {project.transformationSteps.map((step, i) => (
              <React.Fragment key={step}>
                <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-[11px]">
                  {step}
                </span>
                {i < project.transformationSteps.length - 1 && (
                  <span className="text-foreground-disabled text-[10px]">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Technologies List */}
        <div className="pt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-4">
          <Link
            href={project.caseStudyRoute}
            onMouseEnter={() => setCursor("link", "VIEW")}
            onMouseLeave={resetCursor}
          >
            <Button variant="secondary">EXPLORE CASE STUDY →</Button>
          </Link>
        </div>
      </div>

      {/* Visual Composition Column */}
      <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <ProjectVisual project={project} />
      </div>
    </motion.div>
  );
}
