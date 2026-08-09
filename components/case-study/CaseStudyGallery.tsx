"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import ImageModal from "@/components/ui/ImageModal";
import { Maximize2 } from "lucide-react";
import { useCursor } from "@/context/CursorContext";

interface CaseStudyGalleryProps {
  project: Project;
}

export default function CaseStudyGallery({ project }: CaseStudyGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  if (!project.imageUrl) return null;

  return (
    <section className="space-y-4 py-8 border-t border-border-subtle/50">
      <div className="flex justify-between items-center text-technical text-[10px] text-foreground-muted">
        <span>03 // FULL SHOWCASE GALLERY</span>
        <span className="text-accent uppercase">CLICK IMAGE TO EXPAND FULLSCREEN</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        onClick={() => setModalOpen(true)}
        onMouseEnter={() => setCursor("project", "EXPAND")}
        onMouseLeave={resetCursor}
        className="relative w-full rounded-xl overflow-hidden border border-border-subtle hover:border-accent/80 transition-colors duration-300 glass-panel shadow-2xl cursor-pointer group"
      >
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-contain object-center w-full h-full group-hover:scale-[1.01] transition-transform duration-500"
            priority
          />
        </div>

        {/* Expand Floating Badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-accent/50 text-accent text-xs font-mono font-bold tracking-wider uppercase group-hover:bg-accent group-hover:text-black transition-colors duration-300">
          <Maximize2 size={14} />
          <span>VIEW FULL IMAGE IN SAME TAB</span>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        src={project.imageUrl}
        alt={project.title}
        title={`${project.title} — Full Showcase`}
      />
    </section>
  );
}
