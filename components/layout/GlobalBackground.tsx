"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { GridBackground } from "@/components/ui/GridBackground";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse spotlight spring physics
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [fps, setFps] = useState(60);

  // Mouse listener for cursor glow spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Interactive Canvas Particle Matrix (Floating Spatial Dust)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create 45 ambient spatial particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.45 + 0.15,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    let lastTime = performance.now();
    let frameCount = 0;

    const render = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(60, Math.round((frameCount * 1000) / (now - lastTime))));
        frameCount = 0;
        lastTime = now;
      }

      ctx.clearRect(0, 0, width, height);

      const currentMouseX = mouseX.get();
      const currentMouseY = mouseY.get();

      // Render floating particles & subtle spatial node connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle mouse repulsion / interaction
        const dx = currentMouseX - p.x;
        const dy = currentMouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const angle = Math.atan2(dy, dx);
          const force = (140 - dist) * 0.002;
          p.x -= Math.cos(angle) * force * 5;
          p.y -= Math.sin(angle) * force * 5;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00e5ff";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with delicate spatial web lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.12 * (1 - pdist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none bg-background">
      {/* 1. Interactive Cursor Glow Spotlight */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[100px] transition-opacity duration-500"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-accent via-cyan-400 to-indigo-500 opacity-60" />
      </motion.div>

      {/* 2. Atmospheric Volumetric Spatial Light Orbs */}
      <div
        className="absolute -top-[25%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-[0.14] blur-[150px] animate-pulse pointer-events-none"
        style={{ background: "radial-gradient(circle, #00e5ff 0%, #0066ff 50%, transparent 80%)" }}
      />
      <div
        className="absolute top-[40%] -right-[15%] w-[650px] h-[650px] rounded-full opacity-[0.12] blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7000ff 0%, #00e5ff 60%, transparent 80%)" }}
      />
      <div
        className="absolute -bottom-[20%] left-[20%] w-[800px] h-[800px] rounded-full opacity-[0.08] blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00e5ff 0%, transparent 75%)" }}
      />

      {/* 3. Spatial Blueprint Grid & Depth Texture */}
      <GridBackground variant="technical" className="opacity-35" />
      <GridBackground variant="fine" className="opacity-40" />

      {/* 4. Canvas Particle Matrix (Spatial Dust & Constellation Web) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-80" />

      {/* 5. Static Noise Overlay for Organic Analog Texture */}
      <NoiseOverlay />

      {/* 6. HUD Telemetry Coordinates & Spatial Markers */}
      <div className="absolute top-6 left-6 font-mono text-[9px] text-accent/50 tracking-widest uppercase hidden md:flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        <span>SPATIAL_OS // LAT 28.6139° N</span>
      </div>

      <div className="absolute top-6 right-6 font-mono text-[9px] text-accent/50 tracking-widest uppercase hidden md:flex items-center gap-2">
        <span>LON 77.2090° E // UNITY_UE5</span>
        <span className="text-foreground-muted">┼</span>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-foreground-muted/60 tracking-widest uppercase hidden md:flex items-center gap-2">
        <span>FPS: {fps} // WEBGL2_RENDER</span>
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-accent/60 tracking-widest uppercase hidden md:flex items-center gap-2">
        <span>SYS_STATUS: ACTIVE</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      </div>

      {/* 7. Subtle Top & Bottom Gradient Vignettes */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
    </div>
  );
}
