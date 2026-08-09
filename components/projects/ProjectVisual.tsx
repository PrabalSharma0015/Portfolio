"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Project } from "@/types/project";
import { useCursor } from "@/context/CursorContext";
import ImageModal from "@/components/ui/ImageModal";
import { Maximize2 } from "lucide-react";

interface ProjectVisualProps {
  project: Project;
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  const { setCursor, resetCursor } = useCursor();
  const [modalOpen, setModalOpen] = useState(false);

  // Mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 120 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 8;
      const normY = -(e.clientY / innerHeight - 0.5) * 8;
      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleCardClick = (e: React.MouseEvent) => {
    if (project.imageUrl) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setCursor("project", "EXPAND")}
        onMouseLeave={resetCursor}
        onClick={handleCardClick}
        className="relative w-full h-[320px] md:h-[420px] select-none perspective-1000 group cursor-pointer"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full h-full glass-panel border border-border-subtle group-hover:border-accent/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xl relative transition-colors duration-300 rounded-md"
        >
          {/* Render Rich Image Visual if Available */}
          {project.imageUrl ? (
            <>
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                {/* Dark Spatial Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
              </div>

              {/* Corner Tech Brackets */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none text-accent/90 font-mono text-[9px] tracking-widest uppercase">
                ┌ SCAN_ID // [{project.index}]
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none text-accent/90 font-mono text-[9px] tracking-widest uppercase flex items-center gap-1 bg-background/60 backdrop-blur px-2 py-0.5 rounded border border-accent/40">
                <Maximize2 size={10} />
                <span>EXPAND IMAGE</span>
              </div>
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none text-foreground-muted font-mono text-[9px] tracking-widest uppercase">
                └ CLICK TO VIEW FULL UNCROPPED
              </div>
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none text-accent font-mono text-[9px] tracking-widest uppercase font-bold">
                {project.visualType} ┘
              </div>
            </>
          ) : (
            <>
              {/* Fallback Procedural Vector Metaphors */}
              <div className="flex justify-between items-center text-technical text-[10px] z-10 opacity-70">
                <span>PROJECT_METAPHOR // {project.index}</span>
                <span>{project.subtitle}</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <svg className="w-full h-full text-border-hover" viewBox="0 0 500 400" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect width="500" height="400" className="text-border-subtle" opacity="0.3" strokeDasharray="10 10" />
                  <circle cx="250" cy="200" r="140" strokeDasharray="4 4" className="text-border" />
                  <rect x="180" y="130" width="140" height="140" className="text-accent" strokeWidth="1.5" />
                  <circle cx="250" cy="200" r="4" className="fill-accent text-accent" />
                </svg>
              </div>

              <div className="flex justify-between items-end text-caption font-mono text-foreground-muted z-10">
                <span>PIPELINE: ACTIVE</span>
                <span className="text-accent uppercase">{project.visualType}</span>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      {project.imageUrl && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          src={project.imageUrl}
          alt={project.title}
          title={project.title}
        />
      )}
    </>
  );
}
