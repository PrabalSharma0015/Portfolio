"use client";

import React from "react";
import Link from "next/link";
import ExperienceIntro from "./ExperienceIntro";
import ExperienceTimeline from "./ExperienceTimeline";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCursor } from "@/context/CursorContext";

export default function ExperienceSection() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="experience" className="py-24 space-y-16 border-t border-border-subtle/50 relative">
      <Container className="space-y-16">
        {/* Intro */}
        <ExperienceIntro />

        {/* Spatial Timeline Log */}
        <ExperienceTimeline />

        {/* Section Footer Link */}
        <div className="flex justify-end pt-4">
          <Link
            href="/projects"
            onMouseEnter={() => setCursor("link", "VIEW")}
            onMouseLeave={resetCursor}
          >
            <Button variant="secondary">VIEW SELECTED WORK →</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
