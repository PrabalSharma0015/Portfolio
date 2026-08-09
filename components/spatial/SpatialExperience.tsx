"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import SpatialFallback from "./SpatialFallback";

// Dynamic import with SSR false for R3F Canvas
const SpatialScene = dynamic(() => import("./SpatialScene"), {
  ssr: false,
  loading: () => <SpatialFallback />,
});

export default function SpatialExperience() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check reduced motion or WebGL support
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    try {
      const canvas = document.createElement("canvas");
      const isSupported = Boolean(
        window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(isSupported && !reducedMotion);
    } catch {
      setHasWebGL(false);
    }

    // Lazy viewport observer to delay 3D scene initialization until near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="spatial" className="py-24 space-y-12 border-t border-border-subtle/50 relative">
      <Container className="space-y-8">
        {/* Intro */}
        <div className="space-y-4 max-w-3xl">
          <TechnicalLabel>SPATIAL FIELD // 005</TechnicalLabel>
          <h2 className="text-h1 uppercase tracking-tight leading-tight text-foreground">
            INTERACTIVE SPATIAL FIELD.
          </h2>
          <p className="text-body-lg text-foreground-secondary">
            Real-time 3D spatial field combining terrain wireframe geometry, point-cloud coordinate nodes, and section navigation anchors.
          </p>
        </div>

        {/* 3D Scene / Fallback */}
        {hasWebGL === false ? (
          <SpatialFallback />
        ) : isInView ? (
          <SpatialScene />
        ) : (
          <SpatialFallback />
        )}
      </Container>
    </section>
  );
}
