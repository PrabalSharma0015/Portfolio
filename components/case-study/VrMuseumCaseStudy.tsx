"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Eye, Layers, Compass, Cpu, Sparkles, Code2, CheckCircle2, ArrowRight, Video, Mic, Volume2, ShieldCheck } from "lucide-react";

interface VrMuseumCaseStudyProps {
  project: Project;
}

export default function VrMuseumCaseStudy({ project }: VrMuseumCaseStudyProps) {
  const data = project.vrMuseumData;
  if (!data) return null;

  return (
    <section className="space-y-16 py-12 border-t border-border-subtle/50">
      {/* 01 — OVERVIEW & BIG IDEA */}
      <div className="space-y-6 max-w-4xl">
        <span className="text-technical text-[10px] text-accent">01 // OVERVIEW</span>
        <h2 className="text-h2 uppercase tracking-tight text-foreground">
          {project.bigIdea?.headline || "BRIDGING PHYSICAL SPACES WITH IMMERSIVE VR & CONVERSATIONAL AI"}
        </h2>
        <p className="text-body-lg text-foreground-secondary leading-relaxed">
          {project.bigIdea?.description}
        </p>
      </div>

      {/* 02 — THE PROBLEM */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">02 // THE PROBLEM</span>
          <span className="text-accent uppercase">PHYSICAL LIMITATIONS OF TRADITIONAL MUSEUMS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.problemPoints.map((item, i) => (
            <div key={item} className="glass-panel p-5 border border-border-subtle rounded-lg space-y-3">
              <span className="font-mono text-xs text-accent font-bold">PROBLEM 0{i + 1}</span>
              <h4 className="text-h4 text-foreground font-bold uppercase">{item}</h4>
              <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
                Physical exhibits are restricted by static space, geographic location, and fixed operating hours.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 03 — THE CONCEPT (5-STAGE TRANSFORMATION) */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">03 // THE CONCEPT</span>
          <span className="text-foreground-muted">5-STAGE DIGITAL TRANSFORMATION</span>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
          <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
            <Compass size={20} className="text-accent" />
            <span>FROM PHYSICAL CAMPUS TO VR AI MUSEUM</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.conceptStages.map((stage, i) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 rounded border border-border-subtle bg-surface/50 font-mono text-xs space-y-2 relative overflow-hidden"
              >
                <div className="text-[10px] text-accent font-bold">STAGE {stage.stage}</div>
                <div className="text-foreground font-bold uppercase">{stage.title}</div>
                <p className="text-caption text-foreground-muted leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 04 — ENVIRONMENT DEVELOPMENT */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">04 // 3D ENVIRONMENT DEVELOPMENT</span>
          <span className="text-accent uppercase">BLENDER 3D → UNREAL ENGINE 5</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="font-mono text-xs text-accent font-bold">01 // MODELING</span>
            <h4 className="text-h4 text-foreground font-bold uppercase">BLENDER MODELING</h4>
            <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
              {data.environmentWorkflow.blenderModeling}
            </p>
          </div>
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="font-mono text-xs text-accent font-bold">02 // OPTIMIZATION</span>
            <h4 className="text-h4 text-foreground font-bold uppercase">VR LOD OPTIMIZATION</h4>
            <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
              {data.environmentWorkflow.optimization}
            </p>
          </div>
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="font-mono text-xs text-accent font-bold">03 // TEXTURING</span>
            <h4 className="text-h4 text-foreground font-bold uppercase">PBR TEXTURES & UV</h4>
            <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
              {data.environmentWorkflow.texturingUv}
            </p>
          </div>
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="font-mono text-xs text-accent font-bold">04 // UE5 SCENE</span>
            <h4 className="text-h4 text-foreground font-bold uppercase">UNREAL ENGINE 5 ASSEMBLY</h4>
            <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
              {data.environmentWorkflow.unrealAssembly}
            </p>
          </div>
        </div>
      </div>

      {/* 05 — VR EXPERIENCE */}
      <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
            <Eye size={20} className="text-accent" />
            <span>05 // FIRST-PERSON VR NAVIGATION & CONTROLS</span>
          </h3>
          <span className="text-technical text-[10px] text-accent uppercase">6-DOF IMMERSION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded border border-border-subtle/80 bg-surface/50 space-y-2 font-mono text-xs">
            <span className="text-accent font-bold uppercase">FIRST-PERSON EXPLORATION</span>
            <p className="text-foreground-secondary leading-relaxed">
              {data.vrControls.firstPerson}
            </p>
          </div>
          <div className="p-4 rounded border border-border-subtle/80 bg-surface/50 space-y-2 font-mono text-xs">
            <span className="text-accent font-bold uppercase">TELEPORTATION LOCOMOTION</span>
            <p className="text-foreground-secondary leading-relaxed">
              {data.vrControls.teleportation}
            </p>
          </div>
          <div className="p-4 rounded border border-border-subtle/80 bg-surface/50 space-y-2 font-mono text-xs">
            <span className="text-accent font-bold uppercase">INTERACTIVE TRIGGERS</span>
            <p className="text-foreground-secondary leading-relaxed">
              {data.vrControls.interactiveTriggers}
            </p>
          </div>
        </div>
      </div>

      {/* 06 — AI METAHUMAN GUIDE */}
      <div className="glass-panel p-6 md:p-8 rounded-lg border border-accent/60 bg-accent/5 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-technical text-[10px] text-accent font-bold">06 // AI METAHUMAN MUSEUM GUIDE</span>
            <h3 className="text-h3 text-foreground font-bold uppercase mt-1">
              CONVERSATIONAL AI CHARACTER FLOW
            </h3>
          </div>
          <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-accent text-background font-bold">
            UE5 METAHUMAN RIG
          </span>
        </div>

        {/* Visual Flow Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded border border-border-subtle bg-background/80 space-y-2 text-center">
            <Mic size={18} className="mx-auto text-accent" />
            <span className="font-mono text-[10px] text-foreground font-bold block uppercase">1. USER</span>
            <span className="text-caption text-foreground-muted block font-mono text-[10px]">{data.metaHumanFlow.user}</span>
          </div>

          <div className="p-4 rounded border border-border-subtle bg-background/80 space-y-2 text-center">
            <Volume2 size={18} className="mx-auto text-accent" />
            <span className="font-mono text-[10px] text-foreground font-bold block uppercase">2. INPUT</span>
            <span className="text-caption text-foreground-muted block font-mono text-[10px]">{data.metaHumanFlow.input}</span>
          </div>

          <div className="p-4 rounded border border-accent/40 bg-accent/10 space-y-2 text-center">
            <Cpu size={18} className="mx-auto text-accent" />
            <span className="font-mono text-[10px] text-accent font-bold block uppercase">3. CONVERSATIONAL AI</span>
            <span className="text-caption text-foreground-muted block font-mono text-[10px]">{data.metaHumanFlow.ai}</span>
          </div>

          <div className="p-4 rounded border border-border-subtle bg-background/80 space-y-2 text-center">
            <Sparkles size={18} className="mx-auto text-accent" />
            <span className="font-mono text-[10px] text-foreground font-bold block uppercase">4. METAHUMAN</span>
            <span className="text-caption text-foreground-muted block font-mono text-[10px]">{data.metaHumanFlow.metaHuman}</span>
          </div>

          <div className="p-4 rounded border border-accent/60 bg-accent/20 space-y-2 text-center">
            <ShieldCheck size={18} className="mx-auto text-accent" />
            <span className="font-mono text-[10px] text-accent font-bold block uppercase">5. RESPONSE</span>
            <span className="text-caption text-foreground-muted block font-mono text-[10px]">{data.metaHumanFlow.response}</span>
          </div>
        </div>
      </div>

      {/* 07 — BLUEPRINT INTERACTION ARCHITECTURE */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">07 // BLUEPRINT TECHNICAL ARCHITECTURE</span>
          <span className="text-foreground-muted">UNREAL ENGINE 5 BLUEPRINT SYSTEM</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.blueprintSystems.map((sys) => (
            <div key={sys.title} className="glass-panel p-6 rounded-lg border border-border-subtle space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase">
                <Code2 size={16} />
                <span>{sys.title}</span>
              </div>
              <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
                {sys.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 08 — MUSEUM EXPERIENCE GALLERY */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">08 // MUSEUM ZONES & EXHIBIT EXPERIENCE</span>
          <span className="text-accent uppercase">FOUR IMMERSIVE ENVIRONMENT ZONES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.exhibitZones.map((zone, i) => (
            <div key={zone.title} className="glass-panel p-5 border border-border-subtle hover:border-accent/50 transition-colors rounded-lg space-y-3">
              <span className="font-mono text-xs text-accent font-bold">ZONE 0{i + 1}</span>
              <h4 className="text-h4 text-foreground font-bold uppercase">{zone.title}</h4>
              <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
                {zone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 09 — RESULT */}
      <div className="glass-panel p-8 rounded-lg border-l-4 border-l-accent space-y-4">
        <span className="text-technical text-[10px] text-accent">09 // RESULT</span>
        <h3 className="text-h2 uppercase font-bold text-foreground">
          AN INTERACTIVE VR MUSEUM EXPERIENCE
        </h3>
        <p className="text-body-lg text-foreground-secondary leading-relaxed">
          The prototype enables visitors to explore Bennett University's 3D campus in VR, converse with an AI-powered MetaHuman guide, inspect interactive artifacts, and access university history, architecture, and achievements in an engaging digital format.
        </p>
      </div>

      {/* 10 — FUTURE POTENTIAL ROADMAP */}
      <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
            <Compass size={20} className="text-accent" />
            <span>10 // FUTURE POTENTIAL & DEVELOPMENT ROADMAP</span>
          </h3>
          <span className="text-technical text-[10px] text-accent uppercase">
            PLANNED EXPANSIONS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.futurePotential.map((item, i) => (
            <div key={item} className="p-4 rounded border border-border-subtle/80 bg-surface/50 font-mono text-xs space-y-2">
              <span className="text-[10px] text-accent font-bold">FUTURE SCOPE 0{i + 1}</span>
              <div className="text-foreground font-bold uppercase flex items-center gap-1.5">
                <ArrowRight size={12} className="text-accent shrink-0" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 11 — TECHNOLOGY STACK */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">11 // TECHNOLOGY STACK</span>
          <span className="text-foreground-muted">CORE TOOLS & FRAMEWORKS</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded text-xs font-mono uppercase bg-surface border border-border-subtle text-foreground-secondary font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
