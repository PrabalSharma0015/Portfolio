"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SPATIAL SYSTEM");

  useEffect(() => {
    // Check reduced motion or session flag
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasLoaded = sessionStorage.getItem("ps_portfolio_loaded");

    if (reducedMotion || hasLoaded === "true") {
      setIsLoading(false);
      return;
    }

    // Progress timer sequence (target ~1.2s - 1.4s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText("SPATIAL ENVIRONMENT READY");
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("ps_portfolio_loaded", "true");
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-background p-8 md:p-16 select-none"
        >
          {/* Top Spatial Coordinates */}
          <div className="flex justify-between items-center text-technical">
            <span>SYS_INIT // v1.0</span>
            <span>LAT 28.6139 LON 77.2090</span>
          </div>

          {/* Center Brand Identity */}
          <div className="my-auto max-w-2xl space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-technical text-accent"
            >
              PRABAL SHARMA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-h1 uppercase tracking-tight"
            >
              XR Developer
            </motion.h1>
          </div>

          {/* Bottom Progress Indicator */}
          <div className="space-y-3 max-w-md">
            <div className="flex justify-between items-center text-caption font-mono">
              <span className="text-foreground-secondary">{statusText}</span>
              <span className="text-accent">{progress}%</span>
            </div>

            {/* Micro Progress Bar */}
            <div className="h-[2px] w-full bg-border-subtle overflow-hidden rounded-full relative">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
