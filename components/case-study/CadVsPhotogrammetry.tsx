"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { CheckCircle2, Award } from "lucide-react";

interface CadVsPhotogrammetryProps {
  project: Project;
}

export default function CadVsPhotogrammetry({ project }: CadVsPhotogrammetryProps) {
  const data = project.cadVsPhotogrammetry;
  if (!data) return null;

  return (
    <section className="space-y-12 py-12 border-t border-border-subtle/50">
      {/* Big Idea Problem Section */}
      {project.bigIdea && (
        <div className="space-y-4 max-w-4xl">
          <span className="text-technical text-[10px] text-accent">04 // CORE RESEARCH QUESTION</span>
          <h2 className="text-h2 uppercase tracking-tight text-foreground">
            {project.bigIdea.headline}
          </h2>
          <p className="text-body-lg text-foreground-secondary leading-relaxed">
            {project.bigIdea.description}
          </p>
        </div>
      )}

      {/* Side-by-Side CAD vs Photogrammetry Comparison */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">05 // PARADIGM COMPARISON</span>
          <span className="text-accent uppercase">CAD TARGETS VS PHOTOGRAMMETRIC TARGETS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CAD Model Target Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 border border-accent/40 rounded-lg space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-xs text-accent uppercase font-bold tracking-wider">
                  PARADIGM 01
                </span>
                <h3 className="text-h3 text-foreground font-bold uppercase mt-1">CAD MODEL TARGET</h3>
              </div>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-accent/10 border border-accent/30 text-accent">
                PRECISION LEADER
              </span>
            </div>

            <ul className="space-y-3">
              {data.cadFeatures.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-body-sm text-foreground-secondary">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border-subtle/50 text-caption font-mono text-foreground-muted">
              STRENGTH: Exact CAD geometry alignment, zero mesh noise, high tracking robustness.
            </div>
          </motion.div>

          {/* Photogrammetric Model Target Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 border border-border-hover rounded-lg space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-xs text-foreground-muted uppercase font-bold tracking-wider">
                  PARADIGM 02
                </span>
                <h3 className="text-h3 text-foreground font-bold uppercase mt-1">PHOTOGRAMMETRIC TARGET</h3>
              </div>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-surface border border-border-subtle text-foreground-secondary">
                REALISM LEADER
              </span>
            </div>

            <ul className="space-y-3">
              {data.photogrammetryFeatures.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-body-sm text-foreground-secondary">
                  <CheckCircle2 size={16} className="text-foreground-muted shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border-subtle/50 text-caption font-mono text-foreground-muted">
              STRENGTH: Lifelike surface detail, photo-reconstructed textures, high visual immersion.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Qualitative Comparison Breakdown UI */}
      <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
        <div className="flex justify-between items-center">
          <h4 className="text-h4 text-foreground uppercase font-bold flex items-center gap-2">
            <Award size={18} className="text-accent" />
            <span>QUALITATIVE FINDINGS & PERFORMANCE BREAKDOWN</span>
          </h4>
          <span className="text-technical text-[10px] text-foreground-muted">
            QUALITATIVE EVALUATION
          </span>
        </div>

        <p className="text-body-sm text-foreground-secondary italic">
          "{data.coreFinding}"
        </p>

        <div className="space-y-6 pt-2">
          {data.qualitativeMetrics.map((item) => (
            <div key={item.metric} className="space-y-3">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="text-foreground font-bold uppercase">{item.metric}</span>
                <span className="text-technical text-[10px] text-foreground-muted">
                  CAD ({item.cadScore}) VS PHOTOGRAMMETRY ({item.photogrammetryScore})
                </span>
              </div>

              {/* CAD Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-accent">CAD TARGET</span>
                  <span className="text-foreground-muted">{item.cadLabel}</span>
                </div>
                <div className="w-full h-2.5 bg-surface border border-border-subtle rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.cadScore === "HIGH" ? "92%" : "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>

              {/* Photogrammetry Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-foreground-secondary">PHOTOGRAMMETRY TARGET</span>
                  <span className="text-foreground-muted">{item.photogrammetryLabel}</span>
                </div>
                <div className="w-full h-2.5 bg-surface border border-border-subtle rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.photogrammetryScore === "HIGH" ? "90%" : "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-foreground-muted"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
