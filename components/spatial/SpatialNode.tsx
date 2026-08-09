"use client";

import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { SpatialNodeData } from "@/data/spatial";
import { useCursor } from "@/context/CursorContext";

interface SpatialNodeProps {
  node: SpatialNodeData;
}

export default function SpatialNode({ node }: SpatialNodeProps) {
  const { setCursor, resetCursor } = useCursor();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const el = document.querySelector(node.target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <group position={node.position}>
      {/* 3D Mesh Sphere */}
      <mesh
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          setCursor("interactive", node.label);
        }}
        onPointerOut={() => {
          setHovered(false);
          resetCursor();
        }}
      >
        <sphereGeometry args={[hovered ? 0.22 : 0.15, 16, 16]} />
        <meshBasicMaterial
          color={hovered ? "#00e5ff" : "#ffffff"}
          wireframe={!hovered}
        />
      </mesh>

      {/* HTML Floating Overlay */}
      <Html position={[0, 0.4, 0]} center distanceFactor={10}>
        <button
          onClick={handleClick}
          onMouseEnter={() => {
            setHovered(true);
            setCursor("interactive", node.label);
          }}
          onMouseLeave={() => {
            setHovered(false);
            resetCursor();
          }}
          className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            hovered
              ? "bg-accent text-black font-bold border border-accent scale-110 shadow-lg"
              : "bg-surface/80 text-foreground-secondary border border-border-subtle hover:border-accent/60"
          }`}
        >
          {node.label}
        </button>
      </Html>
    </group>
  );
}
