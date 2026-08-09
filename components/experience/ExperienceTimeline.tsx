"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative space-y-12">
      {/* Vertical Spatial Track Line for Desktop & Mobile */}
      <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] bg-border-subtle -translate-x-1/2 -z-10" />

      <div className="space-y-12">
        {experienceData.map((exp, idx) => (
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Pulsing Node Marker on Track */}
            <div className="absolute top-8 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>

            {/* Alternating Layout for Desktop */}
            {idx % 2 === 0 ? (
              <>
                <div className="pl-12 md:pl-0 md:col-span-6">
                  <ExperienceCard exp={exp} index={idx} />
                </div>
                <div className="hidden md:block md:col-span-6 pl-8 text-caption font-mono text-foreground-muted">
                  <span>LOG_ENTRY // {exp.startDate}</span>
                </div>
              </>
            ) : (
              <>
                <div className="hidden md:block md:col-span-6 pr-8 text-right text-caption font-mono text-foreground-muted">
                  <span>LOG_ENTRY // {exp.startDate}</span>
                </div>
                <div className="pl-12 md:pl-0 md:col-span-6">
                  <ExperienceCard exp={exp} index={idx} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
