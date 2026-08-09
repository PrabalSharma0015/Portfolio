"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
}

export default function ImageModal({ isOpen, onClose, src, alt, title }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex flex-col justify-between items-center select-none"
        >
          {/* Top Bar Controls */}
          <div className="w-full max-w-7xl flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
              <Maximize2 size={16} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                {title || "FULLSHOWCASE_VIEW"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-surface border border-border-subtle hover:border-accent text-foreground-secondary hover:text-accent transition-colors cursor-pointer"
              aria-label="Close fullscreen image view"
            >
              <X size={20} />
            </button>
          </div>

          {/* Centered Full Uncropped Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="my-auto max-w-7xl max-h-[85vh] w-full flex items-center justify-center relative overflow-hidden rounded-lg border border-border-subtle shadow-2xl"
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="w-full max-w-7xl flex justify-between items-center z-10 text-caption font-mono text-foreground-muted">
            <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
            <span className="text-accent font-bold">MODE: FULL_UNCROPPED</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
