"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/project";
import { useCursor } from "@/context/CursorContext";
import { ArrowRight, Mail } from "lucide-react";

interface NextProjectProps {
  currentProject: Project;
}

export default function NextProject({ currentProject }: NextProjectProps) {
  const { setCursor, resetCursor } = useCursor();

  const currentIndex = projectsData.findIndex((p) => p.id === currentProject.id);
  const isLastProject = currentIndex === projectsData.length - 1;
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <div className="space-y-12 py-12 border-t border-border-subtle/50">
      {/* Contact CTA (Only displayed on the last case study in the portfolio) */}
      {isLastProject && (
        <div className="glass-panel p-8 rounded-xl border border-accent/40 bg-accent/5 space-y-6 text-center max-w-3xl mx-auto shadow-lg">
          <span className="text-technical text-[10px] text-accent">WORK WITH ME</span>
          <h3 className="text-h2 uppercase font-bold text-foreground">
            WANT TO BUILD IMMERSIVE EXPERIENCES?
          </h3>
          <p className="text-body-sm text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Let's collaborate on real-time 3D environments, Virtual Reality simulations, Augmented Reality apps, and AI MetaHuman digital workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded bg-accent text-background font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors flex items-center gap-2"
            >
              <Mail size={14} />
              <span>CONTACT ME →</span>
            </Link>
          </div>
        </div>
      )}

      {/* Next Case Study Link */}
      <div className="text-right">
        <Link
          href={nextProject.caseStudyRoute}
          onMouseEnter={() => setCursor("link", "NEXT")}
          onMouseLeave={resetCursor}
          className="inline-block group space-y-3"
        >
          <div className="flex items-center justify-end gap-2 text-technical text-foreground-muted group-hover:text-accent transition-colors">
            <span>{isLastProject ? "BACK TO FIRST CASE STUDY" : "NEXT CASE STUDY"}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>

          <motion.h3
            whileHover={{ x: -6 }}
            className="text-h2 md:text-h1 uppercase tracking-tight text-foreground font-bold group-hover:text-accent transition-colors"
          >
            {nextProject.title}
          </motion.h3>

          <p className="text-body-sm font-mono text-foreground-secondary">
            [{nextProject.index}] // {nextProject.subtitle}
          </p>
        </Link>
      </div>
    </div>
  );
}
