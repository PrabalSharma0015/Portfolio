"use client";

import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { spatialNodesData } from "@/data/spatial";
import SpatialTerrain from "./SpatialTerrain";
import SpatialPoints from "./SpatialPoints";
import SpatialNode from "./SpatialNode";
import * as THREE from "three";

function CameraRig({ isMobile }: { isMobile: boolean }) {
  useFrame((state) => {
    if (isMobile) return;
    // Smooth camera mouse parallax lerp
    const targetX = (state.pointer.x * 1.5);
    const targetY = (state.pointer.y * 1.0) + 1.2;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function SpatialScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="w-full h-[480px] glass-panel border border-border-subtle overflow-hidden relative select-none">
      {/* Top Controls Overlay */}
      <div className="absolute top-4 left-4 z-10 text-technical text-[10px] opacity-70 pointer-events-none">
        SPATIAL_MATRIX // 3D_VIEWPORT
      </div>
      <div className="absolute top-4 right-4 z-10 text-technical text-[10px] opacity-70 pointer-events-none">
        MODE: WEBGL_REALTIME
      </div>

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 1.2, 7], fov: 50 }}
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <CameraRig isMobile={isMobile} />

        <SpatialTerrain />
        <SpatialPoints isMobile={isMobile} />

        {spatialNodesData.map((node) => (
          <SpatialNode key={node.id} node={node} />
        ))}
      </Canvas>
    </div>
  );
}
