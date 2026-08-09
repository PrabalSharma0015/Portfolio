"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { Camera, Box, Sparkles, MapPin } from "lucide-react";

export default function SpatialWorkflow() {
  const { setCursor, resetCursor } = useCursor();

  const services = [
    {
      icon: Camera,
      title: "Real-World 3D Scanning",
      description: "Converting physical objects, environments, and real spaces into clean, high-quality 3D digital models using photogrammetry.",
    },
    {
      icon: Box,
      title: "Interactive AR & VR Apps",
      description: "Building immersive Virtual Reality and Augmented Reality applications for Meta Quest headsets, mobile devices, and spatial web.",
    },
    {
      icon: Sparkles,
      title: "Interactive 3D Avatars & MetaHumans",
      description: "Bringing digital characters to life with realistic voice dialogue, smart AI behaviors, and interactive animations in Unreal Engine 5.",
    },
    {
      icon: MapPin,
      title: "Geospatial Spatial Computing",
      description: "Linking 3D digital models directly to real-world GPS map coordinates for accurate, drift-free outdoor AR overlays.",
    },
  ];

  return (
    <div className="space-y-6 pt-6">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <span className="text-technical text-accent uppercase">WHAT I DO // OVERVIEW</span>
        <h3 className="text-h3 uppercase tracking-tight">Spatial Engineering Overview</h3>
      </div>

      {/* Clean 4-Card Grid Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onMouseEnter={() => setCursor("interactive", item.title)}
              onMouseLeave={resetCursor}
              className="glass-panel p-5 rounded-xl border border-border-subtle hover:border-accent/80 hover:bg-surface-elevated/80 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                  <Icon size={18} />
                </div>
                <h4 className="font-bold text-sm text-foreground uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-foreground-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
