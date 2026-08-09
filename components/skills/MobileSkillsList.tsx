"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategoriesData, skillsDataExtended, SkillItemData } from "@/data/skills";
import { ChevronDown } from "lucide-react";

export default function MobileSkillsList() {
  const [openCategory, setOpenCategory] = useState<string>(skillCategoriesData[0].id);
  const [selectedSkill, setSelectedSkill] = useState<SkillItemData | null>(skillsDataExtended[0]);

  return (
    <div className="space-y-4 select-none">
      {skillCategoriesData.map((cat) => {
        const isCatOpen = openCategory === cat.id;
        const categorySkills = skillsDataExtended.filter((s) => s.categoryId === cat.id);

        return (
          <div
            key={cat.id}
            className="glass-panel border border-border-subtle overflow-hidden transition-colors"
          >
            {/* Category Header Button */}
            <button
              onClick={() => setOpenCategory(isCatOpen ? "" : cat.id)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:bg-surface-elevated"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-accent">{cat.number}</span>
                <span className="font-bold text-sm uppercase tracking-tight text-foreground">
                  {cat.name}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-foreground-secondary transition-transform duration-200 ${
                  isCatOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>

            {/* Category Skills Content */}
            <AnimatePresence initial={false}>
              {isCatOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 space-y-3 border-t border-border-subtle/50 pt-3"
                >
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      const isSelected = selectedSkill?.id === skill.id;
                      return (
                        <button
                          key={skill.id}
                          onClick={() => setSelectedSkill(skill)}
                          className={`px-3 py-1.5 rounded-full font-mono text-xs transition-colors ${
                            isSelected
                              ? "bg-accent text-black font-bold"
                              : "bg-surface text-foreground-secondary hover:text-foreground"
                          }`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Skill Description */}
                  {selectedSkill && selectedSkill.categoryId === cat.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-3 bg-surface/60 rounded-md border border-border-subtle mt-2 space-y-1"
                    >
                      <span className="font-mono text-[10px] text-accent uppercase">CONTEXT</span>
                      <p className="text-body-sm text-foreground-secondary">
                        {selectedSkill.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
