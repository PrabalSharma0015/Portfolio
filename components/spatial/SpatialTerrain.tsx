"use client";

import React, { useMemo, useEffect } from "react";
import * as THREE from "three";

export default function SpatialTerrain() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(16, 16, 32, 32);
    geo.rotateX(-Math.PI / 2);

    const posAttr = geo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      // Gentle terrain height displacement wave
      const y = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 0.6;
      posAttr.setY(i, y - 1.5);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      wireframe: true,
      color: "#00e5ff",
      transparent: true,
      opacity: 0.15,
    });
  }, []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  return <mesh geometry={geometry} material={material} />;
}
