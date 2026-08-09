"use client";

import React from "react";
import { spatialNodesData } from "@/data/spatial";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

export default function SpatialFallback() {
  return (
    <div className="w-full h-[450px] glass-panel border border-border-subtle p-8 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="flex justify-between items-center text-technical text-[10px]">
        <TechnicalLabel>SPATIAL FIELD // 2D FALLBACK</TechnicalLabel>
        <span>STATUS: ACCESSIBLE_MODE</span>
      </div>

      <div className="my-auto max-w-xl space-y-4">
        <h3 className="text-h2 uppercase tracking-tight text-foreground">Spatial Matrix Index</h3>
        <p className="text-body-sm text-foreground-secondary leading-relaxed">
          Interactive 3D viewport fallback. Explore portfolio destinations directly using the spatial nodes below.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-4">
          {spatialNodesData.map((node) => (
            <a
              key={node.id}
              href={node.target}
              className="glass-panel p-3 border border-border-subtle hover:border-accent text-center space-y-1 transition-colors group"
            >
              <span className="font-mono text-xs font-bold text-accent group-hover:underline block">
                {node.label}
              </span>
              <span className="text-[9px] font-mono text-foreground-muted block">
                {node.subtitle}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-caption font-mono text-foreground-muted">
        <span>MODE: 2D_TOPOGRAPHIC</span>
        <span className="text-accent font-bold">LAT 28.6139 LON 77.2090</span>
      </div>
    </div>
  );
}
