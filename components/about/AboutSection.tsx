"use client";

import React from "react";
import Link from "next/link";
import AboutIntro from "./AboutIntro";
import AboutStory from "./AboutStory";
import ProfileVisual from "./ProfileVisual";
import SpatialWorkflow from "./SpatialWorkflow";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCursor } from "@/context/CursorContext";

export default function AboutSection() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="about" className="py-24 space-y-16 border-t border-border-subtle/50 relative">
      <Container className="space-y-16">
        {/* Intro & Story Header */}
        <AboutIntro />

        {/* Split Desktop Layout: Story Narrative Left + Spatial Topo Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <AboutStory />
          </div>
          <div className="lg:col-span-5">
            <ProfileVisual />
          </div>
        </div>

        {/* 5-Stage Spatial Transformation Pipeline */}
        <SpatialWorkflow />

        {/* Section Footer CTA */}
        <div className="flex justify-end pt-4">
          <Link
            href="/experience"
            onMouseEnter={() => setCursor("link", "VIEW")}
            onMouseLeave={resetCursor}
          >
            <Button variant="secondary">EXPLORE EXPERIENCE →</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
