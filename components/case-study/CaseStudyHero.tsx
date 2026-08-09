"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { projectsData } from "@/data/projects";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Badge } from "@/components/ui/Badge";
import ProjectVisual from "@/components/projects/ProjectVisual";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  // Find current project index for Previous / Next navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="space-y-12 pt-8">
      {/* Top Case Study Navigation Bar */}
      <div className="flex flex-wrap justify-between items-center gap-3 border-b border-border-subtle/60 pb-4 font-mono text-[11px] uppercase tracking-wider">
        {/* Previous Case Study Link */}
        <Link
          href={prevProject.caseStudyRoute || `/projects/${prevProject.slug}`}
          className="inline-flex items-center gap-1.5 text-foreground-secondary hover:text-accent transition-colors p-1.5 rounded bg-surface/40 border border-border-subtle hover:border-accent/40"
        >
          <ArrowLeft size={13} className="text-accent" />
          <span>PREV: {prevProject.title.length > 22 ? `${prevProject.title.slice(0, 22)}...` : prevProject.title}</span>
        </Link>

        {/* Back to All Projects */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-foreground-muted hover:text-accent transition-colors px-3 py-1.5 rounded border border-border-subtle hover:border-accent/40"
        >
          <Grid size={13} />
          <span>ALL PROJECTS</span>
        </Link>

        {/* Next Case Study Link */}
        <Link
          href={nextProject.caseStudyRoute || `/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-1.5 text-foreground-secondary hover:text-accent transition-colors p-1.5 rounded bg-surface/40 border border-border-subtle hover:border-accent/40"
        >
          <span>NEXT: {nextProject.title.length > 22 ? `${nextProject.title.slice(0, 22)}...` : nextProject.title}</span>
          <ArrowRight size={13} className="text-accent" />
        </Link>
      </div>

      {/* Main Title & Subtitle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <TechnicalLabel>CASE STUDY // [{project.index}]</TechnicalLabel>
            <span className="text-technical text-[10px] text-foreground-muted">
              {project.subtitle}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-display leading-[0.95] tracking-tighter text-foreground uppercase"
          >
            {project.title}
          </motion.h1>

          <p className="text-body-lg text-foreground-secondary leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Procedural Visual Metaphor Canvas */}
        <div className="lg:col-span-5">
          <ProjectVisual project={project} />
        </div>
      </div>
    </div>
  );
}
