"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectShowcase from "./ProjectShowcase";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCursor } from "@/context/CursorContext";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjectsPreview() {
  const { setCursor, resetCursor } = useCursor();
  const featuredProjects = projectsData.slice(0, 2); // Top 2 featured projects for homepage

  return (
    <section className="py-16 border-t border-border-subtle/50 relative">
      <Container className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-technical text-[10px] text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>FEATURED WORK // RECENT SPATIAL BUILDS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
              Featured Projects
            </h2>
            <p className="text-sm text-foreground-secondary max-w-xl font-mono">
              Highlighting 3D photogrammetry, Unreal Engine 5 AI, and outdoor AR systems.
            </p>
          </div>

          <Link
            href="/projects"
            onMouseEnter={() => setCursor("link", "VIEW ALL")}
            onMouseLeave={resetCursor}
          >
            <Button variant="secondary" className="group">
              <span>EXPLORE ALL PROJECTS</span>
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16">
          {featuredProjects.map((project, idx) => (
            <ProjectShowcase key={project.id} project={project} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
