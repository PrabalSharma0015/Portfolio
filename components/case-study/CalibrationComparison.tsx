"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Camera, Video, ShieldCheck, Activity, Eye } from "lucide-react";

interface CalibrationComparisonProps {
  project: Project;
}

export default function CalibrationComparison({ project }: CalibrationComparisonProps) {
  const data = project.staticVsDynamic;
  const core = project.opencvCore;
  if (!data) return null;

  return (
    <section className="space-y-12 py-12 border-t border-border-subtle/50">
      {/* Why Calibrate / Core Question Section */}
      {project.coreQuestion && (
        <div className="space-y-4 max-w-4xl">
          <span className="text-technical text-[10px] text-accent">04 // COMPUTER VISION FUNDAMENTALS</span>
          <h2 className="text-h2 uppercase tracking-tight text-foreground">
            {project.coreQuestion.headline}
          </h2>
          <p className="text-body-lg text-foreground-secondary leading-relaxed">
            {project.coreQuestion.description}
          </p>
        </div>
      )}

      {/* Split-Screen Static vs Dynamic Calibration Comparison */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">05 // METHODOLOGY COMPARISON</span>
          <span className="text-accent uppercase">STATIC VS DYNAMIC CALIBRATION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Static Calibration Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 border border-accent/40 rounded-lg space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-xs text-accent uppercase font-bold tracking-wider flex items-center gap-1.5">
                  <Camera size={14} />
                  STATIC CALIBRATION
                </span>
                <h3 className="text-h3 text-foreground font-bold uppercase mt-1">
                  CONTROLLED INPUT. REPEATABLE RESULTS.
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-accent/10 border border-accent/30 text-accent font-bold">
                OFFLINE PRECISION
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-foreground-secondary">
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">CAMERA HARDWARE</span>
                <span className="text-foreground font-bold">{data.staticCamera}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">INPUT METHOD</span>
                <span className="text-foreground">{data.staticInput}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">PRIMARY STRENGTH</span>
                <span className="text-accent font-bold">{data.staticStrength}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">ENVIRONMENT</span>
                <span className="text-foreground">{data.staticEnvironment}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-foreground-muted">BEST SUITED FOR</span>
                <span className="text-foreground">{data.staticBestFor}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle/50 text-caption font-mono text-foreground-muted">
              PROCESS: Corner detection with cv2.findChessboardCorners() + cv2.cornerSubPix() sub-pixel refinement.
            </div>
          </motion.div>

          {/* Dynamic Calibration Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 border border-border-hover rounded-lg space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-xs text-foreground-muted uppercase font-bold tracking-wider flex items-center gap-1.5">
                  <Video size={14} className="text-accent" />
                  DYNAMIC CALIBRATION
                </span>
                <h3 className="text-h3 text-foreground font-bold uppercase mt-1">
                  LIVE INPUT. CONTINUOUS CALIBRATION.
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-surface border border-border-subtle text-foreground-secondary font-bold">
                REAL-TIME ADAPTABILITY
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-foreground-secondary">
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">CAMERA HARDWARE</span>
                <span className="text-foreground font-bold">{data.dynamicCamera}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">INPUT METHOD</span>
                <span className="text-foreground">{data.dynamicInput}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">PRIMARY STRENGTH</span>
                <span className="text-accent font-bold">{data.dynamicStrength}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-subtle/40">
                <span className="text-foreground-muted">ENVIRONMENT</span>
                <span className="text-foreground">{data.dynamicEnvironment}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-foreground-muted">BEST SUITED FOR</span>
                <span className="text-foreground">{data.dynamicBestFor}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle/50 text-caption font-mono text-foreground-muted">
              PROCESS: JS-Python Colab bridge live stream frame capture + multi-angle corner accumulation.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Finding Statement */}
      <div className="glass-panel p-8 rounded-lg border-l-4 border-l-accent space-y-4">
        <span className="text-technical text-[10px] text-accent">PRECISION VS ADAPTABILITY</span>
        <p className="text-body-lg text-foreground-secondary leading-relaxed italic">
          "{data.keyFinding}"
        </p>
      </div>

      {/* OpenCV Core Geometry Parameters Breakdown */}
      {core && (
        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
              <Eye size={20} className="text-accent" />
              <span>WHAT IS THE CAMERA ACTUALLY ESTIMATING?</span>
            </h3>
            <span className="text-technical text-[10px] text-foreground-muted">
              OPENCV MATHEMATICAL MODEL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Intrinsics */}
            <div className="space-y-3 p-4 rounded border border-border-subtle/60 bg-surface/50">
              <span className="font-mono text-xs text-accent font-bold uppercase">INTRINSIC PARAMETERS</span>
              <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
                {core.intrinsics.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extrinsics */}
            <div className="space-y-3 p-4 rounded border border-border-subtle/60 bg-surface/50">
              <span className="font-mono text-xs text-foreground-secondary font-bold uppercase">EXTRINSIC PARAMETERS</span>
              <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
                {core.extrinsics.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-foreground-muted">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Distortion */}
            <div className="space-y-3 p-4 rounded border border-border-subtle/60 bg-surface/50">
              <span className="font-mono text-xs text-accent font-bold uppercase">LENS DISTORTION (THE LENS ISN'T PERFECT)</span>
              <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
                {core.distortion.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Re-projection Error Explanation */}
          <div className="pt-4 border-t border-border-subtle/50 space-y-2">
            <h4 className="text-h4 text-foreground font-bold uppercase font-mono text-xs flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              <span>HOW DO WE KNOW THE CALIBRATION WORKED? (RE-PROJECTION ERROR)</span>
            </h4>
            <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono">
              {core.reprojectionNote}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
