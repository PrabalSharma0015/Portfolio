"use client";

import React from "react";
import SkillsIntro from "./SkillsIntro";
import SkillsNetwork from "./SkillsNetwork";
import Skills3DGrid from "./Skills3DGrid";
import MobileSkillsList from "./MobileSkillsList";
import { Container } from "@/components/ui/Container";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 space-y-16 border-t border-border-subtle/50 relative">
      <Container className="space-y-16">
        {/* Intro */}
        <SkillsIntro />

        {/* 3D Interactive Tech Logos Grid */}
        <Skills3DGrid />

        {/* Desktop View: Spatial Network Graph */}
        <div className="hidden md:block">
          <SkillsNetwork />
        </div>

        {/* Mobile View: Expandable Category Accordion */}
        <div className="md:hidden">
          <MobileSkillsList />
        </div>
      </Container>
    </section>
  );
}
