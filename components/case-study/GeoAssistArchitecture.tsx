"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { Mic, MessageSquare, Cpu, Layers, Sparkles, Activity, ShieldCheck, Code2, ChevronDown, CheckCircle2, AlertTriangle, ArrowRight, Compass } from "lucide-react";

interface GeoAssistArchitectureProps {
  project: Project;
}

export default function GeoAssistArchitecture({ project }: GeoAssistArchitectureProps) {
  const [activeState, setActiveState] = useState<number>(0);

  const arch = project.geoAssistArch;
  const roadmap = project.roadmap;
  const applications = project.applications;
  const limitations = project.limitations;
  const learnings = project.learnings;

  if (!arch) return null;

  const npcStates = [
    { label: "LISTENING", desc: "Capturing speech via STT or receiving text string from UI input canvas." },
    { label: "THINKING", desc: "Conversational AI analyzing language prompt, parsing intent, & building response." },
    { label: "EXECUTING", desc: "Mapping intent to C# function: character movement, camera transition, or gesture." },
    { label: "RESPONDING", desc: "Delivering text overlay, Text-to-Speech audio stream, & synchronous gesture animation." }
  ];

  return (
    <section className="space-y-16 py-12 border-t border-border-subtle/50">
      {/* 04 // Core Idea & Paradigm Shift */}
      <div className="space-y-8">
        <div className="space-y-4 max-w-4xl">
          <span className="text-technical text-[10px] text-accent">04 // THE SPATIAL AI CONCEPT</span>
          <h2 className="text-h2 uppercase tracking-tight text-foreground">
            {project.bigIdea?.headline || "WHAT IF AN AI COULD UNDERSTAND THE WORLD AROUND IT?"}
          </h2>
          <p className="text-body-lg text-foreground-secondary leading-relaxed">
            {project.bigIdea?.description}
          </p>
        </div>

        {/* 3-Way Architectural Comparison */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-technical text-[10px]">
            <span className="text-foreground-muted">THE GAP BETWEEN CONVERSATION AND SPACE</span>
            <span className="text-accent uppercase">3-WAY PARADIGM COMPARISON</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Traditional 3D Environment */}
            <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
              <span className="font-mono text-xs text-foreground-muted font-bold uppercase">01 // TRADITIONAL 3D</span>
              <h3 className="text-h3 text-foreground font-bold uppercase">VIEW & NAVIGATE</h3>
              <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-foreground-muted">•</span>
                  <span>VIEW GEOGRAPHY</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground-muted">•</span>
                  <span>NAVIGATE SCENE</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground-muted">•</span>
                  <span>MANUAL CAMERA SELECTION</span>
                </li>
              </ul>
              <div className="pt-2 text-caption font-mono text-foreground-muted">
                Lacks direct conversational interaction.
              </div>
            </div>

            {/* Conversational AI */}
            <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
              <span className="font-mono text-xs text-foreground-muted font-bold uppercase">02 // CONVERSATIONAL AI</span>
              <h3 className="text-h3 text-foreground font-bold uppercase">ASK & RESPOND</h3>
              <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-foreground-muted">•</span>
                  <span>ASK QUESTIONS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground-muted">•</span>
                  <span>TEXT / VOICE RESPONSE</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground-muted">•</span>
                  <span>GENERATE CONTENT</span>
                </li>
              </ul>
              <div className="pt-2 text-caption font-mono text-foreground-muted">
                Lacks spatial environment awareness & world action.
              </div>
            </div>

            {/* GeoAssist Paradigm */}
            <div className="glass-panel p-6 rounded-lg border border-accent/60 bg-accent/5 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-background font-mono text-[9px] font-bold uppercase">
                GEOASSIST PARADIGM
              </div>
              <span className="font-mono text-xs text-accent font-bold uppercase">03 // SPATIAL CONVERSATIONAL AI</span>
              <h3 className="text-h3 text-foreground font-bold uppercase">UNDERSTAND & ACT</h3>
              <ul className="space-y-2 text-body-sm text-foreground-secondary font-mono text-xs">
                <li className="flex items-center gap-2 text-accent font-bold">
                  <span>✓</span>
                  <span>ASK & UNDERSTAND INTENT</span>
                </li>
                <li className="flex items-center gap-2 text-accent font-bold">
                  <span>✓</span>
                  <span>INFORMATIONAL & ACTION RESPONSE</span>
                </li>
                <li className="flex items-center gap-2 text-accent font-bold">
                  <span>✓</span>
                  <span>ACT INSIDE REAL-WORLD 3D SCENE</span>
                </li>
              </ul>
              <div className="pt-2 text-caption font-mono text-accent">
                Bridges natural language with spatial computing in Unity + Cesium.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 05 // System Architecture Pipeline */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">05 // END-TO-END PIPELINE ARCHITECTURE</span>
          <span className="text-foreground-muted">FROM VOICE TO WORLD ACTION</span>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
                <Cpu size={20} className="text-accent" />
                <span>END-TO-END PIPELINE ARCHITECTURE</span>
              </h3>
              <p className="text-body-sm text-foreground-secondary mt-1">
                Voice and text queries flow through intent detection, triggering corresponding C# actions in Unity and Cesium 3D Tiles.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-accent/10 border border-accent/30 text-accent font-bold shrink-0">
              REAL-TIME EXECUTION
            </span>
          </div>

          {/* Architecture Pipeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            <div className="p-4 rounded border border-border-subtle bg-surface/60 space-y-2 text-center">
              <Mic size={18} className="mx-auto text-accent" />
              <span className="font-mono text-[10px] text-foreground font-bold block uppercase">1. USER INPUT</span>
              <span className="text-caption text-foreground-muted block font-mono text-[10px]">Voice (STT) or Text Input</span>
            </div>

            <div className="p-4 rounded border border-border-subtle bg-surface/60 space-y-2 text-center">
              <MessageSquare size={18} className="mx-auto text-accent" />
              <span className="font-mono text-[10px] text-foreground font-bold block uppercase">2. SPEECH STT</span>
              <span className="text-caption text-foreground-muted block font-mono text-[10px]">Converts Audio to Text Stream</span>
            </div>

            <div className="p-4 rounded border border-accent/40 bg-accent/5 space-y-2 text-center">
              <Cpu size={18} className="mx-auto text-accent" />
              <span className="font-mono text-[10px] text-accent font-bold block uppercase">3. CONVERSATIONAL AI</span>
              <span className="text-caption text-foreground-muted block font-mono text-[10px]">NLU & Context Reasoning</span>
            </div>

            <div className="p-4 rounded border border-border-subtle bg-surface/60 space-y-2 text-center">
              <Layers size={18} className="mx-auto text-accent" />
              <span className="font-mono text-[10px] text-foreground font-bold block uppercase">4. INTENT PARSER</span>
              <span className="text-caption text-foreground-muted block font-mono text-[10px]">Info Query vs Action Command</span>
            </div>

            <div className="p-4 rounded border border-border-subtle bg-surface/60 space-y-2 text-center">
              <Compass size={18} className="mx-auto text-accent" />
              <span className="font-mono text-[10px] text-foreground font-bold block uppercase">5. UNITY + CESIUM</span>
              <span className="text-caption text-foreground-muted block font-mono text-[10px]">C# Action & 3D Tiles Stream</span>
            </div>

            <div className="p-4 rounded border border-accent/60 bg-accent/10 space-y-2 text-center">
              <Sparkles size={18} className="mx-auto text-accent" />
              <span className="font-mono text-[10px] text-accent font-bold block uppercase">6. WORLD RESPONSE</span>
              <span className="text-caption text-foreground-muted block font-mono text-[10px]">Text UI + TTS + NPC Gesture</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border-subtle/50 flex items-center justify-between text-caption font-mono text-foreground-muted">
            <span className="flex items-center gap-2">
              <Layers size={14} className="text-accent" />
              <span>SPATIAL BASE LAYER: Cesium 3D Tiles streamed directly into Unity with high-precision georeferencing.</span>
            </span>
            <span className="text-accent uppercase">UNITY 3D ENGINE</span>
          </div>
        </div>
      </div>

      {/* 06 // Interactive NPC Behavior States */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">06 // INTERACTIVE BEHAVIOR STATES</span>
          <span className="text-accent uppercase">NPC STATE SEQUENCER</span>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
          <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
            <Activity size={20} className="text-accent" />
            <span>INTERACTIVE ASSISTANT BEHAVIOR STATES</span>
          </h3>

          {/* State Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {npcStates.map((state, i) => (
              <button
                key={state.label}
                onClick={() => setActiveState(i)}
                className={`p-4 rounded border text-left font-mono transition-all cursor-pointer ${
                  activeState === i
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border-subtle bg-surface/40 text-foreground-muted hover:border-accent/40"
                }`}
              >
                <div className="text-[10px] text-accent font-bold">STATE 0{i + 1}</div>
                <div className="text-xs font-bold uppercase mt-1 flex items-center justify-between">
                  <span>{state.label}</span>
                  {activeState === i && <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                </div>
              </button>
            ))}
          </div>

          {/* Active State Detail Panel */}
          <div className="p-6 rounded bg-background/80 border border-accent/30 font-mono space-y-2">
            <div className="flex items-center gap-2 text-xs text-accent font-bold uppercase">
              <span>ACTIVE PHASE:</span>
              <span>{npcStates[activeState].label}</span>
            </div>
            <p className="text-body-sm text-foreground-secondary leading-relaxed">
              {npcStates[activeState].desc}
            </p>
          </div>
        </div>
      </div>

      {/* 07 // Code & Action Execution */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-accent">07 // C# COMMAND PARSING & ACTION EXECUTION</span>
          <span className="text-foreground-muted">REPRESENTATIVE UNITY IMPLEMENTATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 text-foreground font-mono text-xs font-bold uppercase">
              <Code2 size={16} className="text-accent" />
              <span>C# INTENT & COMMAND PARSER</span>
            </div>
            <p className="text-body-sm text-foreground-secondary leading-relaxed">
              Parses AI output JSON to extract intent type (INFORMATIONAL vs ACTION_COMMAND) and target Unity arguments.
            </p>
            <pre className="p-4 rounded bg-background/90 border border-border-subtle overflow-x-auto text-xs font-mono text-accent leading-relaxed">
              <code>{`public class GeoAssistCommandParser : MonoBehaviour {
    public void ProcessResponse(string jsonResponse) {
        AIResponse response = JsonUtility.FromJson<AIResponse>(jsonResponse);
        if (response.intentType == "ACTION_COMMAND") {
            ExecuteUnityAction(response.commandName, response.targetLocation);
        }
        DeliverVoiceAndText(response.textResponse);
    }
}`}</code>
            </pre>
          </div>

          <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 text-foreground font-mono text-xs font-bold uppercase">
              <Code2 size={16} className="text-accent" />
              <span>UNITY & CESIUM ACTION EXECUTION</span>
            </div>
            <p className="text-body-sm text-foreground-secondary leading-relaxed">
              Executes NPC movement, camera transitions, and animation triggers within the Cesium 3D Tiles coordinate space.
            </p>
            <pre className="p-4 rounded bg-background/90 border border-border-subtle overflow-x-auto text-xs font-mono text-accent leading-relaxed">
              <code>{`private void ExecuteUnityAction(string command, Vector3 location) {
    switch (command) {
        case "NAVIGATE_TO":
            cesiumCameraController.FlyToLocation(location);
            npcAnimator.SetTrigger("WalkGesture");
            break;
        case "HIGHLIGHT_OBJECT":
            HighlightTargetBuilding(location);
            break;
    }
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* 08 // Observations & System Limitations */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-technical text-[10px]">
          <span className="text-foreground-muted">08 // SYSTEM EVALUATION</span>
          <span className="text-accent uppercase">OBSERVATIONS & LIMITATIONS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Observations */}
          {learnings && (
            <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
              <div className="flex items-center gap-2 text-foreground font-bold uppercase font-mono text-sm">
                <ShieldCheck size={18} className="text-accent" />
                <span>KEY PROJECT OBSERVATIONS</span>
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

          {/* Performance & Limitations */}
          {limitations && (
            <div className="glass-panel p-6 rounded-lg border border-border-subtle space-y-4">
              <div className="flex items-center gap-2 text-foreground font-bold uppercase font-mono text-sm">
                <AlertTriangle size={18} className="text-amber-400" />
                <span>PERFORMANCE & SYSTEM LIMITATIONS</span>
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
      </div>

      {/* 09 // Applications Section */}
      {applications && applications.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-technical text-[10px]">
            <span className="text-accent">09 // REAL-WORLD USE-CASES</span>
            <span className="text-foreground-muted">APPLICATIONS IN SPATIAL COMPUTING</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <div key={app.title} className="glass-panel p-5 border border-border-subtle hover:border-accent/50 transition-colors rounded-lg space-y-3">
                <span className="font-mono text-xs text-accent font-bold">0{i + 1}</span>
                <h4 className="text-h4 text-foreground font-bold uppercase">{app.title}</h4>
                <p className="text-body-sm text-foreground-secondary leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 10 // Future Scope Roadmap */}
      {roadmap && roadmap.length > 0 && (
        <div className="glass-panel p-6 md:p-8 rounded-lg border border-border-subtle space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-h3 text-foreground font-bold uppercase flex items-center gap-2">
              <Compass size={20} className="text-accent" />
              <span>10 // FUTURE SCOPE & DEVELOPMENT ROADMAP</span>
            </h3>
            <span className="text-technical text-[10px] text-accent uppercase">
              PLANNED EXPANSIONS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmap.map((item, i) => (
              <div key={item} className="p-4 rounded border border-border-subtle/80 bg-surface/50 font-mono text-xs space-y-2">
                <span className="text-[10px] text-accent font-bold">PHASE 0{i + 1}</span>
                <div className="text-foreground font-bold uppercase flex items-center gap-1.5">
                  <ArrowRight size={12} className="text-accent shrink-0" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 11 // Core Takeaway Statement */}
      <div className="glass-panel p-8 rounded-lg border-l-4 border-l-accent bg-accent/5 space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-technical text-[10px] text-accent">11 // CORE PHILOSOPHY</span>
        <h3 className="text-h2 uppercase font-bold text-foreground">
          AI SHOULD NOT JUST ANSWER THE WORLD. IT SHOULD UNDERSTAND IT.
        </h3>
        <p className="text-body text-foreground-secondary max-w-2xl mx-auto leading-relaxed font-mono text-xs">
          GEOASSIST — CONVERSATIONAL AI MEETS SPATIAL COMPUTING.
        </p>
      </div>
    </section>
  );
}
