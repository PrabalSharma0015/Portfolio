"use client";

import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, useProgress } from "@react-three/drei";
import * as THREE from "three";

interface SkillLogo3DViewerProps {
  modelUrl: string;
  customScale?: number;
  initialRotation?: [number, number, number];
}

function LoaderOverlay() {
  const { progress } = useProgress();
  if (progress >= 100) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/80 backdrop-blur-sm z-10 gap-2">
      <div className="w-6 h-6 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      <span className="font-mono text-[9px] text-accent tracking-widest uppercase font-bold">
        LOADING 3D // {Math.round(progress)}%
      </span>
    </div>
  );
}

function AutoNormalizedModel({
  url,
  customScale = 1.0,
  initialRotation = [0, 0, 0],
}: {
  url: string;
  customScale?: number;
  initialRotation?: [number, number, number];
}) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  // Clone scene & compute exact mesh-only bounding box to center & auto-scale to view
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    // Apply initial orientation fix to geometry before bounding box calc if specified
    const orientGroup = new THREE.Group();
    orientGroup.rotation.set(initialRotation[0], initialRotation[1], initialRotation[2]);
    orientGroup.add(clone);

    // Force scene graph transform updates before computing bounding box
    orientGroup.updateMatrixWorld(true);

    // Compute bounding box strictly over visible meshes with geometry
    const box = new THREE.Box3();
    let meshCount = 0;
    orientGroup.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).geometry) {
        box.expandByObject(child);
        meshCount++;
      }
    });

    if (meshCount === 0) {
      box.setFromObject(orientGroup);
    }

    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    // Center geometry at (0, 0, 0)
    orientGroup.position.x = -center.x;
    orientGroup.position.y = -center.y;
    orientGroup.position.z = -center.z;

    // Create container group and scale geometry to ~2.2 units
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const baseTargetSize = 2.2 * customScale;
    const scale = baseTargetSize / maxDim;

    const wrapper = new THREE.Group();
    orientGroup.scale.set(scale, scale, scale);
    wrapper.add(orientGroup);

    const isGitModel = url.toLowerCase().includes("git");
    const isEarthModel = url.toLowerCase().includes("earth");
    const isUnrealModel = url.toLowerCase().includes("unreal");

    // Traverse materials to ensure lighting and visibility
    orientGroup.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach((mat) => {
            mat.side = THREE.DoubleSide; // Render both front & back faces
            if ("transparent" in mat) mat.transparent = true;

            // Fix Unreal GLB 8.9MB model materials to render in crisp studio metallic silver
            if (isUnrealModel) {
              mat.side = THREE.DoubleSide;
              mat.transparent = false;
              mat.depthWrite = true;
              if ("roughness" in mat) mat.roughness = 0.25;
              if ("metalness" in mat) mat.metalness = 0.5;
              if ("color" in mat) {
                const stdMat = mat as THREE.MeshStandardMaterial;
                stdMat.color = new THREE.Color("#e2e8f0");
                stdMat.emissive = new THREE.Color("#0a1a2a");
              }
            } else if (isEarthModel) {
              const textureLoader = new THREE.TextureLoader();
              const earthTexture = textureLoader.load("/models/logo/earth_texture.jpg");
              earthTexture.colorSpace = THREE.SRGBColorSpace;

              (mat as THREE.MeshStandardMaterial).map = earthTexture;
              (mat as THREE.MeshStandardMaterial).color = new THREE.Color("#ffffff");
              (mat as THREE.MeshStandardMaterial).roughness = 0.35;
              (mat as THREE.MeshStandardMaterial).metalness = 0.05;
            } else if (isGitModel) {
              if (mat.name === "github") {
                (mat as THREE.MeshStandardMaterial).color = new THREE.Color("#24292e");
                (mat as THREE.MeshStandardMaterial).roughness = 0.25;
                (mat as THREE.MeshStandardMaterial).metalness = 0.1;
              } else if (mat.name === "glossy_putih") {
                (mat as THREE.MeshStandardMaterial).color = new THREE.Color("#ffffff");
                (mat as THREE.MeshStandardMaterial).roughness = 0.15;
                (mat as THREE.MeshStandardMaterial).metalness = 0.1;
              }
            } else {
              // For all other models (including Google 5-color materials), tune roughness & metalness
              if ("roughness" in mat) mat.roughness = 0.25;
              if ("metalness" in mat) mat.metalness = 0.1;
            }

            mat.needsUpdate = true;
          });
        }
      }
    });

    return wrapper;
  }, [scene, customScale, initialRotation, url]);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.25}>
      <primitive ref={modelRef} object={clonedScene} />
    </Float>
  );
}

export default function SkillLogo3DViewer({
  modelUrl,
  customScale = 1.0,
  initialRotation = [0, 0, 0],
}: SkillLogo3DViewerProps) {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" } // Preload when card is 250px near viewport
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[180px] sm:h-[200px] relative rounded-lg overflow-hidden border border-accent/30 bg-gradient-to-b from-surface/80 via-background/90 to-surface/90 shadow-lg"
    >
      {!mounted || !inView ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-surface/40 font-mono text-xs text-foreground-muted gap-2">
          <div className="w-5 h-5 rounded-full border-2 border-accent/40 border-t-accent animate-spin" />
          <span className="text-[10px] tracking-widest text-accent/80">3D READY</span>
        </div>
      ) : (
        <>
          <LoaderOverlay />
          <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
            {/* Studio Ambient & 360 Lights */}
            <ambientLight intensity={3.0} />
            <directionalLight position={[5, 8, 5]} intensity={3.0} />
            <directionalLight position={[-5, -4, -4]} intensity={2.0} color="#ffffff" />
            <pointLight position={[0, 0, 4]} intensity={3.0} color="#ffffff" />
            <pointLight position={[0, -2, 2]} intensity={2.0} color="#ffffff" />

            <Suspense fallback={null}>
              <AutoNormalizedModel url={modelUrl} customScale={customScale} initialRotation={initialRotation} />
            </Suspense>

            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2.0} />
          </Canvas>
        </>
      )}

      <div className="absolute bottom-2 right-3 text-[9px] font-mono text-technical text-accent/80 uppercase pointer-events-none tracking-widest bg-background/80 px-2 py-0.5 rounded border border-accent/20">
        3D MODEL // DRAG TO ROTATE
      </div>
    </div>
  );
}
