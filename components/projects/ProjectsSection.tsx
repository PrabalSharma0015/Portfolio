"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectsIntro from "./ProjectsIntro";
import ProjectShowcase from "./ProjectShowcase";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCursor } from "@/context/CursorContext";

export default function ProjectsSection() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="projects" className="py-24 space-y-16 border-t border-border-subtle/50 relative">
      <Container className="space-y-16">
        {/* Intro */}
        <ProjectsIntro />

        {/* Showcase List */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <ProjectShowcase key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Section Closing / Transition */}
        <div className="glass-panel p-8 border border-border-subtle text-center space-y-4 max-w-3xl mx-auto mt-16">
          <span className="text-technical text-accent">PROCESS // DEEP DIVE</span>
          <h3 className="text-h3 uppercase tracking-tight">More than a project card.</h3>
          <p className="text-body-sm text-foreground-secondary">
            Each project represents real-world spatial capture, custom engine development, and interactive deployment.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              onMouseEnter={() => setCursor("link", "INITIATE")}
              onMouseLeave={resetCursor}
            >
              <Button variant="primary">INITIATE COLLABORATION →</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
