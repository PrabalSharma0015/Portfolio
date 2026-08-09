"use client";

import React, { useState } from "react";
import { skillsDataExtended, SkillItemData } from "@/data/skills";
import SkillNode from "./SkillNode";

export default function SkillsNetwork() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItemData | null>(
    skillsDataExtended[0]
  );
  const [hoveredSkill, setHoveredSkill] = useState<SkillItemData | null>(null);

  const activeSkill = hoveredSkill || selectedSkill;

  return (
    <div className="space-y-6">
      {/* Desktop Spatial Node Canvas (h-[460px]) */}
      <div className="relative w-full h-[460px] glass-panel border border-border-subtle overflow-hidden select-none rounded-xl">
        {/* Subtle Spatial Coordinate Watermarks */}
        <div className="absolute top-4 left-4 text-technical text-[10px] opacity-40">
          SPATIAL_MATRIX // NODES: {skillsDataExtended.length}
        </div>
        <div className="absolute top-4 right-4 text-technical text-[10px] opacity-40">
          MODE: INTERACTIVE
        </div>

        {/* Dynamic SVG Connection Paths between Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          {skillsDataExtended.map((skill, index) => {
            // Draw connecting line to next node in same category
            const sameCategoryNode = skillsDataExtended.find(
              (s) => s.categoryId === skill.categoryId && s.id !== skill.id
            );

            if (!sameCategoryNode) return null;

            const isLineActive =
              activeSkill?.id === skill.id || activeSkill?.id === sameCategoryNode.id;

            return (
              <line
                key={`${skill.id}-${sameCategoryNode.id}-${index}`}
                x1={`${skill.x}%`}
                y1={`${skill.y}%`}
                x2={`${sameCategoryNode.x}%`}
                y2={`${sameCategoryNode.y}%`}
                stroke={isLineActive ? "var(--color-accent)" : "var(--color-border-hover)"}
                strokeWidth={isLineActive ? "1.5" : "0.8"}
                strokeDasharray={isLineActive ? "none" : "3 3"}
                className="transition-colors duration-300"
              />
            );
          })}
        </svg>

        {/* Nodes Layer */}
        {skillsDataExtended.map((skill) => {
          const isSelected = selectedSkill?.id === skill.id;
          const isHovered = hoveredSkill?.id === skill.id;
          const isSameCategory = activeSkill?.categoryId === skill.categoryId;
          const isSubdued = activeSkill ? !isSameCategory : false;

          return (
            <SkillNode
              key={skill.id}
              skill={skill}
              isSelected={isSelected}
              isHovered={isHovered}
              isSubdued={isSubdued}
              onSelect={(s) => setSelectedSkill(s)}
              onHover={(s) => setHoveredSkill(s)}
            />
          );
        })}
      </div>
    </div>
  );
}
