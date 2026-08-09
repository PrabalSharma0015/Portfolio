"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { SkillItemData } from "@/data/skills";
import { Box } from "lucide-react";

// Dynamically import 3D Viewer with SSR disabled
const SkillLogo3DViewer = dynamic(() => import("./SkillLogo3DViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[180px] sm:h-[200px] flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-surface/50 font-mono text-xs text-foreground-muted gap-2">
      <Box className="animate-spin text-accent" size={20} />
      <span>LOADING 3D MODEL...</span>
    </div>
  ),
});

interface SkillDetailProps {
  skill: SkillItemData | null;
}

export default function SkillDetail({ skill }: SkillDetailProps) {
  return (
    <div className="glass-panel p-6 border-l-2 border-l-accent min-h-[220px] select-none rounded-xl">
      <AnimatePresence mode="wait">
        {skill ? (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            {/* Skill Description & Details */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-technical text-[10px] text-accent font-bold">
                  CATEGORY // {skill.categoryName}
                </span>
                <span className="text-caption font-mono text-foreground-muted">SYSTEM_NODE</span>
              </div>

              <h3 className="text-h3 text-foreground font-bold tracking-tight uppercase flex items-center gap-2">
                <span>{skill.name}</span>
              </h3>

              <p className="text-body-sm text-foreground-secondary leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* 3D Interactive Logo Model Canvas */}
            <div className="md:col-span-5">
              {skill.modelUrl ? (
                <SkillLogo3DViewer modelUrl={skill.modelUrl} />
              ) : (
                <div className="w-full h-[180px] flex items-center justify-center rounded-lg border border-border-subtle bg-surface/40 font-mono text-xs text-foreground-disabled">
                  [ 3D LOGO MODEL UNAVAILABLE ]
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="my-auto text-center space-y-2 py-8"
          >
            <p className="text-technical text-foreground-muted">INSPECT NODE</p>
            <p className="text-caption text-foreground-secondary">
              Select or hover over any technology node to view its 3D interactive model and implementation details.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
