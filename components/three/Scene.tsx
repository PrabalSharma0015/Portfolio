"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        {/* Placeholder for 3D content */}
      </Canvas>
    </div>
  );
}
