"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Cpu, AlertTriangle, Compass } from "lucide-react";

interface BuildConfigSectionProps {
  project: Project;
}

export default function BuildConfigSection({ project }: BuildConfigSectionProps) {
  const config = project.buildConfig;
  const limitations = project.limitations;
  const futureWork = project.futureWork;

  if (!config && !limitations && !futureWork) return null;

  return (
    <section className="space-y-12 py-12 border-t border-border-subtle/50">
      {/* Documented Unity & Vuforia Build Configuration */}
      {config && (
        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
          <div className="flex items-center gap-3">
            <Cpu size={20} className="text-accent" />
            <h3 className="text-h3 text-foreground font-bold uppercase">
              DOCUMENTED BUILD CONFIGURATION
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">UNITY ENGINE</span>
              <p className="text-foreground font-bold">{config.unityVersion}</p>
            </div>
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">RENDER PIPELINE</span>
              <p className="text-foreground font-bold">{config.renderPipeline}</p>
            </div>
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">GRAPHICS API</span>
              <p className="text-foreground font-bold">{config.graphicsAPI}</p>
            </div>
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">SCRIPTING BACKEND</span>
              <p className="text-foreground font-bold">{config.scriptingBackend}</p>
            </div>
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">API COMPATIBILITY</span>
              <p className="text-foreground font-bold">{config.apiCompatibility}</p>
            </div>
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">AR SDK</span>
              <p className="text-accent font-bold">{config.arSDK}</p>
            </div>
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">TARGET PLATFORM</span>
              <p className="text-foreground font-bold">{config.targetOS}</p>
            </div>
            <div className="space-y-1">
              <span className="text-foreground-muted text-[10px] uppercase">MINIMUM API</span>
              <p className="text-foreground font-bold">{config.minAPI}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border-subtle/50 space-y-2">
            <span className="text-technical text-[10px] text-foreground-muted">
              VUFORIA ENGINE FEATURES CONFIGURED
            </span>
            <div className="flex flex-wrap gap-2">
              {config.vuforiaFeatures.map((feat) => (
                <span
                  key={feat}
                  className="px-2.5 py-1 rounded bg-surface border border-accent/40 text-accent font-mono text-xs"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Limitations & Future Work Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Limitations */}
        {limitations && limitations.length > 0 && (
          <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 text-foreground font-bold uppercase font-mono text-sm">
              <AlertTriangle size={18} className="text-amber-400" />
              <span>TECHNICAL LIMITATIONS IDENTIFIED</span>
            </div>
            <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono">
              {limitations.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Future Work */}
        {futureWork && futureWork.length > 0 && (
          <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 text-foreground font-bold uppercase font-mono text-sm">
              <Compass size={18} className="text-accent" />
              <span>FUTURE WORK (NEXT ITERATIONS)</span>
            </div>
            <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono">
              {futureWork.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Final Case Study Conclusion Core Takeaway */}
      <div className="glass-panel p-8 rounded-lg border-l-4 border-l-accent bg-accent/5 space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-technical text-[10px] text-accent">CORE TAKEAWAY</span>
        <h3 className="text-h2 uppercase font-bold text-foreground">PRECISION OR REALISM?</h3>
        <div className="space-y-2 text-body text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
          <p>• CAD targets give you reliable, drift-free geometric tracking.</p>
          <p>• Photogrammetry targets give you richer, lifelike visual realism.</p>
          <p className="text-foreground font-bold text-accent pt-2">
            The strongest AR workflows combine the strengths of both.
          </p>
        </div>
      </div>
    </section>
  );
}
