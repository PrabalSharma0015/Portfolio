"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { Shield, Zap, Cpu, Flame, Layers, Compass, Code2, CheckCircle2, AlertTriangle, ArrowRight, Activity, Gauge, Terminal } from "lucide-react";

interface SoulGamesCaseStudyProps {
  project: Project;
}

export default function SoulGamesCaseStudy({ project }: SoulGamesCaseStudyProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const data = project.soulGamesData;
  if (!data) return null;

  return (
    <section className="space-y-16 py-12 border-t border-border-subtle/50">
      {/* 01 — THE BIG IDEA */}
      <div className="space-y-6 max-w-4xl">
        <span className="text-technical text-[10px] text-accent">01 // THE BIG IDEA</span>
        <h2 className="text-h2 uppercase tracking-tight text-foreground">
          {project.bigIdea?.headline || "HOW DO YOU BUILD THE FEEL OF A SOULS-LIKE GAME FROM THE GROUND UP?"}
        </h2>
        <p className="text-body-lg text-foreground-secondary leading-relaxed">
          {project.bigIdea?.description}
        </p>
      </div>

      {/* 02 — THE GAMEPLAY LOOP */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">02 // CORE GAMEPLAY LOOP</span>
          <span className="text-foreground-muted">RESOURCE-DRIVEN COMBAT CYCLE</span>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
          <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
            <Activity size={20} className="text-accent" />
            <span>STAMINA-MANAGED COMBAT FLOW</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {data.gameplayLoop.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-3 rounded border border-border-subtle bg-surface/50 font-mono text-[11px] text-center space-y-1"
              >
                <span className="text-accent font-bold block text-[9px]">0{i + 1}</span>
                <span className="text-foreground font-bold uppercase block">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 03 — COMBAT SYSTEM & STAMINA COST */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">03 // COMBAT MECHANICS</span>
          <span className="text-accent uppercase">EVERY ATTACK HAS A COST</span>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-mono text-xs text-accent font-bold uppercase">STAMINA-GATED PIPELINE</span>
              <h3 className="text-h3 text-foreground font-bold uppercase mt-1">
                COMBAT EXECUTION PIPELINE
              </h3>
            </div>
            <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-accent/10 border border-accent/30 text-accent font-bold">
              UE5 BLUEPRINT COMBAT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-2">
              <span className="text-accent font-mono text-[10px] font-bold block">1. INPUT</span>
              <span className="text-foreground font-mono text-xs font-bold block uppercase">PLAYER CONTROLLER</span>
              <p className="text-caption text-foreground-muted font-mono text-[10px]">Attack, Dodge, Jump or Heal</p>
            </div>
            <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-2">
              <span className="text-accent font-mono text-[10px] font-bold block">2. STAMINA GATE</span>
              <span className="text-foreground font-mono text-xs font-bold block uppercase">RESOURCE CHECK</span>
              <p className="text-caption text-foreground-muted font-mono text-[10px]">Block action if stamina &lt; cost</p>
            </div>
            <div className="p-4 rounded border border-accent/40 bg-accent/5 space-y-2">
              <span className="text-accent font-mono text-[10px] font-bold block">3. ANIM MONTAGE</span>
              <span className="text-accent font-mono text-xs font-bold block uppercase">ROOT MOTION</span>
              <p className="text-caption text-foreground-muted font-mono text-[10px]">Play sword slash / dodge roll</p>
            </div>
            <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-2">
              <span className="text-accent font-mono text-[10px] font-bold block">4. TRACE CHECK</span>
              <span className="text-foreground font-mono text-xs font-bold block uppercase">HIT DETECTION</span>
              <p className="text-caption text-foreground-muted font-mono text-[10px]">Weapon collision sphere trace</p>
            </div>
            <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-2">
              <span className="text-accent font-mono text-[10px] font-bold block">5. DAMAGE EVENT</span>
              <span className="text-foreground font-mono text-xs font-bold block uppercase">APPLY DAMAGE</span>
              <p className="text-caption text-foreground-muted font-mono text-[10px]">Deplete health &amp; trigger reaction</p>
            </div>
            <div className="p-4 rounded border border-accent/60 bg-accent/10 space-y-2">
              <span className="text-accent font-mono text-[10px] font-bold block">6. RECOVERY</span>
              <span className="text-accent font-mono text-xs font-bold block uppercase">REGENERATION</span>
              <p className="text-caption text-foreground-muted font-mono text-[10px]">Delay timer then refill stamina</p>
            </div>
          </div>
        </div>
      </div>

      {/* 04 & 05 — ENEMY AI & BEHAVIOR TREES */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">04 &amp; 05 // GAMEPLAY AI &amp; BEHAVIOR TREES</span>
          <span className="text-foreground-muted">THE ENEMY DOESN'T JUST ATTACK. IT REACTS.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Small Enemy AI */}
          <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase">
              <Cpu size={16} />
              <span>SMALL ENEMY AI BEHAVIOR</span>
            </div>
            <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
              {data.aiEnemies.smallEnemy.behavior}
            </p>
            <div className="p-4 rounded bg-background/80 border border-border-subtle font-mono text-xs text-foreground-muted space-y-1">
              <span className="text-accent font-bold">TACTICS:</span>
              <p>{data.aiEnemies.smallEnemy.tactics}</p>
            </div>
          </div>

          {/* Boss Enemy AI */}
          <div className="glass-panel p-6 rounded-lg border border-accent/50 bg-accent/5 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase">
              <Flame size={16} />
              <span>BOSS ENCOUNTER AI (MULTI-PHASE)</span>
            </div>
            <p className="text-body-sm text-foreground-secondary leading-relaxed font-mono text-xs">
              {data.aiEnemies.bossEnemy.behavior}
            </p>
            <div className="p-4 rounded bg-background/80 border border-border-subtle font-mono text-xs text-foreground-muted space-y-1">
              <span className="text-accent font-bold">PHASE LOGIC:</span>
              <p>{data.aiEnemies.bossEnemy.phases}</p>
            </div>
          </div>
        </div>

        {/* Behavior Tree Flow */}
        <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
          <span className="text-technical text-[10px] text-foreground-muted">BEHAVIOR TREE DECISION SEQUENCE</span>
          <div className="flex flex-wrap gap-2">
            {data.behaviorTreeFlow.map((node, i) => (
              <span
                key={node}
                className="px-3 py-1.5 rounded text-xs font-mono uppercase bg-surface border border-border-subtle text-foreground font-bold flex items-center gap-2"
              >
                <span className="text-accent font-bold">0{i + 1}</span>
                <span>{node}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 06 & 07 — UI & STAMINA FEEDBACK */}
      <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
            <Zap size={20} className="text-accent" />
            <span>06 &amp; 07 // REAL-TIME HUD &amp; COMBAT FEEDBACK</span>
          </h3>
          <span className="text-technical text-[10px] text-accent uppercase">REAL-TIME HUD</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded border border-border-subtle bg-surface/50 space-y-1">
            <span className="text-rose-400 font-bold uppercase">PLAYER HEALTH BAR</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.uiSystems.playerHealth}</p>
          </div>
          <div className="p-4 rounded border border-border-subtle bg-surface/50 space-y-1">
            <span className="text-accent font-bold uppercase">STAMINA GAUGE</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.uiSystems.playerStamina}</p>
          </div>
          <div className="p-4 rounded border border-border-subtle bg-surface/50 space-y-1">
            <span className="text-amber-400 font-bold uppercase">DYNAMIC BOSS BAR</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.uiSystems.bossHealthBar}</p>
          </div>
          <div className="p-4 rounded border border-border-subtle bg-surface/50 space-y-1">
            <span className="text-foreground font-bold uppercase">DAMAGE FEEDBACK</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.uiSystems.damageFeedback}</p>
          </div>
        </div>
      </div>

      {/* 08 — INVENTORY & WEAPON PICKUP */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">08 // INVENTORY &amp; WEAPON PICKUP SYSTEM</span>
          <span className="text-accent uppercase">INTERACTIVE WORLD PICKUP</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="text-accent font-bold">01 // WORLD PICKUP</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.inventorySystem.pickup}</p>
          </div>
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="text-accent font-bold">02 // NOTIFICATION</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.inventorySystem.notification}</p>
          </div>
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="text-accent font-bold">03 // INVENTORY ARRAY</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.inventorySystem.inventoryState}</p>
          </div>
          <div className="glass-panel p-5 border border-border-subtle rounded-lg space-y-2">
            <span className="text-accent font-bold">04 // WEAPON SOCKET</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.inventorySystem.equippedWeapon}</p>
          </div>
        </div>
      </div>

      {/* 09 — ENVIRONMENT DESIGN */}
      <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
            <Layers size={20} className="text-accent" />
            <span>09 // DARK RUINS ATMOSPHERIC ENVIRONMENT</span>
          </h3>
          <span className="text-technical text-[10px] text-accent uppercase">MEGASCAN ASSETS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-1">
            <span className="text-accent font-bold uppercase">MEGASCAN MESHES</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.environmentSetup.assets}</p>
          </div>
          <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-1">
            <span className="text-accent font-bold uppercase">DYNAMIC LIGHTING</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.environmentSetup.lighting}</p>
          </div>
          <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-1">
            <span className="text-accent font-bold uppercase">HEIGHT FOG</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.environmentSetup.fog}</p>
          </div>
          <div className="p-4 rounded border border-border-subtle bg-surface/40 space-y-1">
            <span className="text-accent font-bold uppercase">COMBAT ARENA</span>
            <p className="text-foreground-secondary leading-relaxed text-[11px]">{data.environmentSetup.combatArena}</p>
          </div>
        </div>
      </div>

      {/* 10 — SOLO DEVELOPMENT PIPELINE */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">10 // SOLO DEVELOPMENT PIPELINE</span>
          <span className="text-foreground-muted">MODULAR ITERATIVE DEVELOPMENT</span>
        </div>

        <div className="glass-panel p-6 rounded-lg border border-border-subtle">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs text-center">
            {data.developmentPipeline.map((phase, i) => (
              <div key={phase} className="p-3 rounded border border-border-subtle bg-surface/50 space-y-1">
                <span className="text-accent font-bold text-[10px]">STEP 0{i + 1}</span>
                <div className="text-foreground font-bold uppercase">{phase}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 11 & 12 — DOCUMENTED RESULTS & PERFORMANCE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Performance Results */}
        <div className="glass-panel p-6 rounded-lg border border-accent/60 bg-accent/5 space-y-4">
          <div className="flex items-center justify-between font-mono">
            <span className="text-xs text-accent font-bold uppercase flex items-center gap-2">
              <Gauge size={16} />
              <span>DOCUMENTED PERFORMANCE RESULT</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-accent text-background font-bold uppercase">
              VERIFIED
            </span>
          </div>
          <div className="p-4 rounded bg-background/80 border border-accent/40 text-center space-y-1">
            <div className="text-h1 font-bold text-accent font-mono">{data.performanceMetrics.fps}</div>
            <div className="text-caption font-mono text-foreground-muted">{data.performanceMetrics.hardware}</div>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-xs text-foreground font-bold uppercase">OPTIMIZATIONS IMPLEMENTED:</span>
            <ul className="space-y-1 font-mono text-xs text-foreground-secondary">
              {data.performanceMetrics.optimizations.map((opt) => (
                <li key={opt} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges & Debugging */}
        <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase">
            <Terminal size={16} />
            <span>WHAT BROKE BEFORE IT WORKED? (DEVELOPMENT CHALLENGES)</span>
          </div>
          <div className="space-y-3 font-mono text-xs">
            {data.challenges.map((c) => (
              <div key={c.title} className="p-3 rounded border border-border-subtle bg-surface/50 space-y-1">
                <span className="text-foreground font-bold uppercase">{c.title}</span>
                <p className="text-foreground-secondary text-[11px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 13 — KNOWN LIMITATIONS */}
      {project.limitations && (
        <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
          <div className="flex items-center gap-2 text-foreground font-bold uppercase font-mono text-sm">
            <AlertTriangle size={18} className="text-amber-400" />
            <span>DOCUMENTED PROJECT LIMITATIONS</span>
          </div>
          <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
            {project.limitations.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 14 — FINAL TAKEAWAY */}
      <div className="glass-panel p-8 rounded-lg border-l-4 border-l-accent bg-accent/5 space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-technical text-[10px] text-accent">15 // CORE TAKEAWAY</span>
        <h3 className="text-h2 uppercase font-bold text-foreground">
          FROM BREAK TO BATTLE.
        </h3>
        <p className="text-body text-foreground-secondary max-w-2xl mx-auto leading-relaxed font-mono text-xs">
          A Souls-like game is not just about attacking an enemy. It is about timing, stamina management, reading enemy behavior, responsive movement, and clear player feedback.
        </p>
      </div>
    </section>
  );
}
