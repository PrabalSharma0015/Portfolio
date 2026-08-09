"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Box, Sparkles } from "lucide-react";

const SkillLogo3DViewer = dynamic(() => import("./SkillLogo3DViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[180px] flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-surface/40 font-mono text-xs text-foreground-muted gap-2">
      <Box className="animate-spin text-accent" size={18} />
      <span>LOADING 3D...</span>
    </div>
  ),
});

interface Logo3DItem {
  id: string;
  name: string;
  category: string;
  modelUrl: string;
  description: string;
  initialRotation?: [number, number, number];
  customScale?: number;
}

const LOGO_MODELS_DATA: Logo3DItem[] = [
  {
    id: "unity",
    name: "UNITY ENGINE",
    category: "XR / GAME ENGINE",
    modelUrl: "/models/logo/unity.glb",
    description: "Real-time engine used for developing interactive XR environments and custom C# spatial logic.",
    customScale: 1.1,
  },
  {
    id: "blender",
    name: "BLENDER 3D",
    category: "3D MODELING & PIPELINE",
    modelUrl: "/models/logo/blender.glb",
    description: "3D creation suite used for mesh editing, asset preparation, and photogrammetry cleanup.",
    initialRotation: [-Math.PI / 2, 0, Math.PI / 2],
    customScale: 1.15,
  },
  {
    id: "hololens",
    name: "SPATIAL COMPUTING / XR",
    category: "MIXED REALITY / HARDWARE",
    modelUrl: "/models/logo/hololens.glb",
    description: "Cross-platform spatial computing, head-mounted displays, and immersive AR/VR hardware.",
    customScale: 1.1,
  },
  {
    id: "google",
    name: "GOOGLE ARCORE",
    category: "AUGMENTED REALITY",
    modelUrl: "/models/logo/google.glb",
    description: "Google's augmented reality platform used for real-world surface tracking and geospatial placement.",
    initialRotation: [0, 0, 0],
    customScale: 1.1,
  },
  {
    id: "earth",
    name: "CESIUM 3D TILES",
    category: "GEOSPATIAL & 3D MAPS",
    modelUrl: "/models/logo/earth.glb",
    description: "3D geospatial platform used for streaming massive 3D tilesets and real-world geographic data.",
    customScale: 1.0,
  },
  {
    id: "drone",
    name: "DRONE PHOTOGRAMMETRY",
    category: "REAL-WORLD CAPTURE",
    modelUrl: "/models/logo/drone.glb",
    description: "Aerial photographic data acquisition for terrain mapping, site inspection, and 3D reconstruction.",
    customScale: 1.1,
  },
  {
    id: "git",
    name: "GIT / GITHUB",
    category: "VERSION CONTROL",
    modelUrl: "/models/logo/git.glb",
    description: "Version control, feature branching, and collaborative codebase management for XR projects.",
    initialRotation: [0, 0, 0],
    customScale: 1.1,
  },
];

export default function Skills3DGrid() {
  return (
    <div className="space-y-8 pt-8 border-t border-border-subtle/50">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-technical text-accent">
          <Sparkles size={14} />
          <span>3D INTERACTIVE TECH MATRIX // REAL-TIME ASSETS</span>
        </div>
        <h3 className="text-h2 uppercase tracking-tight text-foreground font-bold">
          Technologies & Tools I Use
        </h3>
        <p className="text-body-sm text-foreground-secondary max-w-2xl font-mono text-xs">
          Interact directly with the 3D models of the primary engines, frameworks, and hardware powering my XR development workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LOGO_MODELS_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-panel p-5 border border-border-subtle hover:border-accent/50 transition-all rounded-xl space-y-4 shadow-md flex flex-col justify-between"
          >
            {/* 3D Canvas Viewer */}
            <SkillLogo3DViewer
              modelUrl={item.modelUrl}
              customScale={item.customScale}
              initialRotation={item.initialRotation}
            />

            {/* Model Card Meta */}
            <div className="space-y-2 pt-1">
              <span className="text-technical text-[10px] text-accent font-bold block">
                {item.category}
              </span>
              <h4 className="text-h4 text-foreground font-bold uppercase">{item.name}</h4>
              <p className="text-body-sm text-foreground-secondary text-xs leading-relaxed font-mono">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
