"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { Glasses, Sparkles, RefreshCw, Layers, ShieldCheck, Zap, Activity } from "lucide-react";

export default function HeroVisual() {
  const { setCursor, resetCursor } = useCursor();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse tilt & rotation values
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // WebGL 3D Three.js GLTFLoader Engine for Meta Quest 3
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let THREE: any;
    let animationFrameId: number;

    // Load Three.js & GLTFLoader dynamically for Next.js SSR safety
    Promise.all([
      import("three"),
      import("three/examples/jsm/loaders/GLTFLoader.js"),
    ]).then(([threeModule, gltfLoaderModule]) => {
      THREE = threeModule;
      const { GLTFLoader } = gltfLoaderModule;

      const width = canvas.clientWidth || 440;
      const height = canvas.clientHeight || 440;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 5);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 1. Lighting Setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x00e5ff, 2.5);
      dirLight1.position.set(5, 8, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xff00ff, 1.5);
      dirLight2.position.set(-5, -5, -2);
      scene.add(dirLight2);

      const pointLight = new THREE.PointLight(0x00ffff, 2, 10);
      pointLight.position.set(0, 0, 3);
      scene.add(pointLight);

      // 2. Main Model Pivot Group
      const modelGroup = new THREE.Group();
      scene.add(modelGroup);

      // Background Orbiting Spatial Particle Field
      const particleCount = 400;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const r = 2.5 + Math.random() * 1.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }

      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.6,
      });
      const particleField = new THREE.Points(particleGeo, particleMat);
      scene.add(particleField);

      // 3. Load Meta Quest 3 GLB Model
      const loader = new GLTFLoader();
      let loadedModel: any = null;

      loader.load(
        "/models/hero/Quest3.glb",
        (gltf: any) => {
          loadedModel = gltf.scene;

          // Auto-center & Auto-scale GLB Model
          const box = new THREE.Box3().setFromObject(loadedModel);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 2.4 / maxDim;
          loadedModel.scale.set(scale, scale, scale);

          // Center mesh inside group
          loadedModel.position.x = -center.x * scale;
          loadedModel.position.y = -center.y * scale;
          loadedModel.position.z = -center.z * scale;

          // Traverse materials to support Wireframe Mode & Metallic Reflectance
          loadedModel.traverse((child: any) => {
            if (child.isMesh) {
              child.material.wireframe = isWireframe;
              if (child.material.isMeshStandardMaterial) {
                child.material.roughness = 0.3;
                child.material.metalness = 0.4;
              }
            }
          });

          modelGroup.add(loadedModel);
          setIsLoaded(true);
        },
        undefined,
        (error: any) => {
          console.error("Error loading Meta Quest 3 GLB:", error);
          
          // Fallback procedural VR headset representation if GLB load fails
          const fallbackGeo = new THREE.BoxGeometry(1.8, 0.9, 0.8);
          const fallbackMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.8,
            roughness: 0.2,
            wireframe: isWireframe,
          });
          const fallbackMesh = new THREE.Mesh(fallbackGeo, fallbackMat);
          modelGroup.add(fallbackMesh);
          setIsLoaded(true);
        }
      );

      // Handle Resize
      const handleResize = () => {
        if (!canvas) return;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        if (modelGroup) {
          // Gentle floating motion
          modelGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.1;
          
          // Base continuous rotation
          modelGroup.rotation.y = elapsedTime * 0.3;

          // Wireframe mode update
          modelGroup.traverse((child: any) => {
            if (child.isMesh && child.material) {
              child.material.wireframe = isWireframe;
              if (isWireframe) {
                child.material.color = new THREE.Color(0x00e5ff);
              }
            }
          });

          // Mouse Parallax Inertia
          mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
          mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

          modelGroup.rotation.y += mouseRef.current.x * 0.8;
          modelGroup.rotation.x = mouseRef.current.y * 0.5;
        }

        particleField.rotation.y = -elapsedTime * 0.05;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    });
  }, [mounted, isWireframe]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    mouseRef.current.targetX = normX;
    mouseRef.current.targetY = normY;
  };

  const handleMouseLeave = () => {
    resetCursor();
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setCursor("project", "ROTATE QUEST 3")}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-square max-w-[460px] lg:max-w-[540px] flex items-center justify-center p-2 select-none perspective-1000"
    >
      <div className="relative w-full h-full glass-panel border border-border-subtle hover:border-accent/80 p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-2xl rounded-xl transition-colors duration-300">
        {/* Top Holographic HUD Controls */}
        <div className="flex justify-between items-center text-technical text-[10px] z-20">
          <div className="flex items-center gap-1.5 text-accent font-bold">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>META QUEST 3 // 3D INTERACTIVE MODEL</span>
          </div>

          {/* Wireframe vs Solid Shader Toggle */}
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`px-2.5 py-1 rounded text-[9px] font-mono transition-all uppercase flex items-center gap-1 border ${
              isWireframe
                ? "bg-accent text-black border-accent font-bold shadow-[0_0_10px_var(--color-accent)]"
                : "bg-surface-elevated/80 text-foreground border-border-subtle hover:border-accent"
            }`}
          >
            <Zap size={10} />
            <span>{isWireframe ? "CYAN WIREFRAME" : "PHOTOREALISTIC"}</span>
          </button>
        </div>

        {/* 3D WebGL Canvas Viewport */}
        <div className="relative my-auto w-full h-[280px] md:h-[340px] flex items-center justify-center">
          {/* Loading Indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 font-mono text-xs text-accent">
              <RefreshCw size={20} className="animate-spin text-accent" />
              <span>LOADING META QUEST 3 3D MESH...</span>
            </div>
          )}

          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-grab active:cursor-grabbing z-10"
          />

          {/* Outer Concentric Target HUD Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
            <div className="w-[310px] h-[310px] rounded-full border border-accent/60 border-dashed animate-[spin_35s_linear_infinite]" />
            <div className="w-[230px] h-[230px] rounded-full border border-border" />
          </div>
        </div>

        {/* Bottom Interactive HUD Metrics */}
        <div className="flex justify-between items-end z-20 text-caption font-mono pt-2">
          <div className="flex flex-col text-[10px] text-foreground-muted space-y-0.5">
            <span className="text-accent font-bold flex items-center gap-1.5">
              <Glasses size={12} />
              <span>MODEL: META QUEST 3 // 6-DOF TRACKING</span>
            </span>
            <span>MOVE MOUSE TO ROTATE HEADSET IN 3D SPACE</span>
          </div>

          <div className="text-right">
            <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-mono text-[9px] font-bold uppercase">
              REAL-TIME GLB
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
