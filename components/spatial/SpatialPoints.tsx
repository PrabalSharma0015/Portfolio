"use client";

import React, { useMemo, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SpatialPoints({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  const count = isMobile ? 600 : 2000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorAccent = new THREE.Color("#00e5ff");
    const colorMuted = new THREE.Color("#a1a1aa");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6 - 0.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const mixColor = Math.random() > 0.7 ? colorAccent : colorMuted;
      col[i * 3] = mixColor.r;
      col[i * 3 + 1] = mixColor.g;
      col[i * 3 + 2] = mixColor.b;
    }

    return [pos, col];
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: isMobile ? 0.04 : 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });
  }, [isMobile]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
