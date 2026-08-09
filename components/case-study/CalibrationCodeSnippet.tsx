"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { Code2, ChevronDown, Lightbulb, AlertTriangle, CheckCircle2 } from "lucide-react";

interface CalibrationCodeSnippetProps {
  project: Project;
}

export default function CalibrationCodeSnippet({ project }: CalibrationCodeSnippetProps) {
  const [deepDiveOpen, setDeepDiveOpen] = useState(false);
  const snippets = project.codeSnippets;
  const learnings = project.learnings;
  const limitations = project.limitations;

  const isCalibrationProject = project.slug === "camera-calibration-opencv";

  // If not calibration project and no generic snippets/learnings, return null
  if (!isCalibrationProject && !snippets?.length && !learnings?.length) {
    return null;
  }

  return (
    <section className="space-y-12 py-12 border-t border-border-subtle/50">
      {/* Code / Implementation Snippets */}
      {snippets && snippets.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-technical text-[10px]">
            <span className="text-foreground-muted">07 // IMPLEMENTATION CODE</span>
            <span className="text-accent uppercase">REPRESENTATIVE ALGORITHM PIPELINE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {snippets.map((item) => (
              <div key={item.title} className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
                <div className="flex items-center gap-2 text-foreground font-mono text-xs font-bold uppercase">
                  <Code2 size={16} className="text-accent" />
                  <span>{item.title}</span>
                </div>
                <p className="text-body-sm text-foreground-secondary leading-relaxed">
                  {item.description}
                </p>
                <pre className="p-4 rounded bg-background/90 border border-border-subtle overflow-x-auto text-xs font-mono text-accent leading-relaxed">
                  <code>{item.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expandable Technical Deep Dive (Only for Camera Calibration Project) */}
      {isCalibrationProject && (
        <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
          <button
            onClick={() => setDeepDiveOpen(!deepDiveOpen)}
            className="w-full flex justify-between items-center font-mono text-xs uppercase font-bold text-accent hover:text-foreground transition-colors cursor-pointer py-2"
          >
            <span className="flex items-center gap-2">
              <Code2 size={16} />
              <span>{deepDiveOpen ? "HIDE TECHNICAL DETAILS" : "VIEW TECHNICAL DETAILS →"}</span>
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${deepDiveOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {deepDiveOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 pt-4 border-t border-border-subtle/50 font-mono text-xs text-foreground-secondary leading-relaxed overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-foreground font-bold uppercase">STATIC CALIBRATION SPECS</span>
                    <p className="mt-1">
                      Uses pre-captured chessboard images from a DJI Action 2 camera. OpenCV extracts corners using 
                      <code className="text-accent px-1">cv2.findChessboardCorners</code>, refines coordinates to sub-pixel accuracy via 
                      <code className="text-accent px-1">cv2.cornerSubPix</code>, and computes the 3x3 Intrinsic Camera Matrix and Distortion Vector.
                    </p>
                  </div>
                  <div>
                    <span className="text-foreground font-bold uppercase">DYNAMIC CALIBRATION SPECS</span>
                    <p className="mt-1">
                      Uses a Logitech C310 webcam streaming into Google Colab via a custom JavaScript-Python canvas bridge. Frames are processed live, corners are accumulated across changing camera orientations, and parameters are estimated continuously.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Insights & Limitations Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Insights / What I Learned */}
        {learnings && learnings.length > 0 && (
          <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 text-foreground font-bold uppercase font-mono text-sm">
              <Lightbulb size={18} className="text-accent" />
              <span>KEY PROJECT INSIGHTS</span>
            </div>
            <ul className="space-y-3 text-body-sm text-foreground-secondary font-mono text-xs">
              {learnings.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Limitations */}
        {limitations && limitations.length > 0 && (
          <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 text-foreground font-bold uppercase font-mono text-sm">
              <AlertTriangle size={18} className="text-amber-400" />
              <span>PROJECT LIMITATIONS IDENTIFIED</span>
            </div>
            <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
              {limitations.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Final Conclusion Statement (Only for Camera Calibration Project) */}
      {isCalibrationProject && (
        <div className="glass-panel p-8 rounded-lg border-l-4 border-l-accent bg-accent/5 space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-technical text-[10px] text-accent">08 // CONCLUSION</span>
          <h3 className="text-h2 uppercase font-bold text-foreground">
            CALIBRATION IS THE FIRST STEP TOWARD SEEING IN 3D
          </h3>
          <p className="text-body text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            The project demonstrates how OpenCV supports both precise offline calibration and adaptable real-time calibration. The two approaches provide complementary tools for computer vision, AR, robotics, and 3D reconstruction.
          </p>
        </div>
      )}
    </section>
  );
}
