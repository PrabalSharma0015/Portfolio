"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { User, Cpu, Layers, ShieldCheck, Activity, Award, MapPin, Sparkles, RefreshCw, Zap } from "lucide-react";

export default function ProfileVisual() {
  const { setCursor, resetCursor } = useCursor();
  const [activeTab, setActiveTab] = useState<"overview" | "matrix" | "spatial">("overview");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);

  // Mouse tilt & rotation values
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // WebGL 3D Three.js FBXLoader Engine (Persistent Canvas Context)
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let THREE: any;
    let animationFrameId: number;

    // Load Three.js & FBXLoader dynamically for SSR safety
    Promise.all([
      import("three"),
      import("three/examples/jsm/loaders/FBXLoader.js"),
    ]).then(([threeModule, fbxLoaderModule]) => {
      THREE = threeModule;
      const { FBXLoader } = fbxLoaderModule;

      const width = canvas.clientWidth || 240;
      const height = canvas.clientHeight || 240;

      const scene = new THREE.Scene();
      
      // Close-up Portrait Camera Angle (Head & Chest Framing)
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(0, 0.45, 1.85);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Bright Anime / Vibrant Cel-Style Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
      scene.add(ambientLight);

      const frontLight = new THREE.DirectionalLight(0xffffff, 1.8);
      frontLight.position.set(0, 2, 5);
      scene.add(frontLight);

      const topLight = new THREE.DirectionalLight(0x00ffff, 0.8);
      topLight.position.set(-2, 4, 2);
      scene.add(topLight);

      // Main Model Pivot Group
      const modelGroup = new THREE.Group();
      scene.add(modelGroup);

      // Texture Loaders
      const textureLoader = new THREE.TextureLoader();
      const bodyTex = textureLoader.load("/models/avatar/Body & Shoes.png");
      const clothesTex = textureLoader.load("/models/avatar/Clothes.png");
      const faceTex = textureLoader.load("/models/avatar/Face.png");
      const hairTex = textureLoader.load("/models/avatar/Hair.png");

      [bodyTex, clothesTex, faceTex, hairTex].forEach((t) => {
        if (t) {
          t.colorSpace = THREE.SRGBColorSpace;
          t.flipY = true;
        }
      });

      // Bone References for Arms Pose Normalization
      const armBones: { leftArm?: any; rightArm?: any; leftForeArm?: any; rightForeArm?: any } = {};

      // Load 3D Boy FBX Model
      const loader = new FBXLoader();

      loader.load(
        "/models/avatar/boy.fbx",
        (fbx: any) => {
          // Compute bounding box
          const box = new THREE.Box3().setFromObject(fbx);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          // Scale model
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 2.4 / maxDim;
          fbx.scale.set(scale, scale, scale);

          // Position model so head & chest are centered in viewport
          fbx.position.x = -center.x * scale;
          fbx.position.y = -center.y * scale - 0.25;
          fbx.position.z = -center.z * scale;

          // Traverse FBX meshes & skeleton bones
          fbx.traverse((child: any) => {
            if (child.isBone) {
              const nameLower = child.name.toLowerCase();
              if (
                (nameLower.includes("arm") || nameLower.includes("shoulder") || nameLower.includes("uparm")) &&
                !nameLower.includes("fore")
              ) {
                if (nameLower.includes("l") || nameLower.includes("left")) {
                  armBones.leftArm = child;
                } else if (nameLower.includes("r") || nameLower.includes("right")) {
                  armBones.rightArm = child;
                }
              } else if (nameLower.includes("forearm") || nameLower.includes("lowerarm")) {
                if (nameLower.includes("l") || nameLower.includes("left")) {
                  armBones.leftForeArm = child;
                } else if (nameLower.includes("r") || nameLower.includes("right")) {
                  armBones.rightForeArm = child;
                }
              }
            }

            if (child.isMesh) {
              let map = clothesTex;
              const nameLower = child.name.toLowerCase();

              if (nameLower.includes("face") || nameLower.includes("head") || nameLower.includes("eye")) {
                map = faceTex;
              } else if (nameLower.includes("hair")) {
                map = hairTex;
              } else if (nameLower.includes("body") || nameLower.includes("skin") || nameLower.includes("shoe")) {
                map = bodyTex;
              }

              child.material = new THREE.MeshStandardMaterial({
                map: map || clothesTex,
                color: 0xffffff,
                roughness: 0.8,
                metalness: 0.0,
                transparent: true,
                alphaTest: 0.1,
                wireframe: isWireframe,
              });
            }
          });

          // Normalize Arms Pose: Rotate arms down from T-pose to straight resting position
          if (armBones.leftArm) {
            armBones.leftArm.rotation.z = -1.25;
            armBones.leftArm.rotation.x = 0.1;
          }
          if (armBones.rightArm) {
            armBones.rightArm.rotation.z = 1.25;
            armBones.rightArm.rotation.x = 0.1;
          }

          modelGroup.add(fbx);
          setIsLoaded(true);
        },
        undefined,
        (error: any) => {
          console.error("Error loading FBX Boy Model:", error);
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

      // Animation Loop (Natural Idle Pose)
      let clock = new THREE.Clock();

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // Enforce normalized arms posture
        if (armBones.leftArm) {
          armBones.leftArm.rotation.z = -1.25;
        }
        if (armBones.rightArm) {
          armBones.rightArm.rotation.z = 1.25;
        }

        if (modelGroup) {
          // Gentle breathing float
          modelGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.02;

          // Wireframe mode update
          modelGroup.traverse((child: any) => {
            if (child.isMesh && child.material) {
              child.material.wireframe = isWireframe;
              if (isWireframe) {
                child.material.color = new THREE.Color(0x00e5ff);
              }
            }
          });

          // Mouse Parallax (Gentle head/shoulder tilt)
          mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
          mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

          modelGroup.rotation.y = mouseRef.current.x * 0.4;
          modelGroup.rotation.x = mouseRef.current.y * 0.2;
        }

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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setCursor("project", "3D AVATAR")}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[380px] md:min-h-[440px] glass-panel border border-border-subtle hover:border-accent/80 p-6 flex flex-col justify-between overflow-hidden select-none rounded-xl transition-colors duration-300 shadow-2xl"
    >
      {/* Technical Header */}
      <div className="flex justify-between items-center text-technical text-[10px] z-10">
        <div className="flex items-center gap-1.5 text-accent font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>DEVELOPER_PROFILE // PRABAL SHARMA</span>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-1 bg-surface-elevated/80 p-1 rounded-md border border-border-subtle">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-2 py-0.5 rounded text-[9px] font-mono transition-all uppercase ${
              activeTab === "overview" ? "bg-accent text-black font-bold shadow-[0_0_8px_var(--color-accent)]" : "text-foreground-muted hover:text-foreground"
            }`}
          >
            BIO
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-2 py-0.5 rounded text-[9px] font-mono transition-all uppercase ${
              activeTab === "matrix" ? "bg-accent text-black font-bold shadow-[0_0_8px_var(--color-accent)]" : "text-foreground-muted hover:text-foreground"
            }`}
          >
            STACK
          </button>
          <button
            onClick={() => setActiveTab("spatial")}
            className={`px-2 py-0.5 rounded text-[9px] font-mono transition-all uppercase ${
              activeTab === "spatial" ? "bg-accent text-black font-bold shadow-[0_0_8px_var(--color-accent)]" : "text-foreground-muted hover:text-foreground"
            }`}
          >
            SPATIAL
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          {/* PERSISTENT 3D Avatar Canvas Container (Never unmounted so WebGL context is preserved) */}
          <div
            onMouseMove={handleMouseMove}
            className="sm:col-span-5 relative aspect-square w-full rounded-lg bg-surface/80 border border-accent/50 overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.15)] flex flex-col items-center justify-center group cursor-grab active:cursor-grabbing"
          >
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-accent font-mono text-[9px]">
                <RefreshCw size={16} className="animate-spin text-accent" />
                <span>LOADING 3D AVATAR...</span>
              </div>
            )}

            <canvas ref={canvasRef} className="w-full h-full z-10" />



            {/* Bottom Overlay Label with High-Contrast Glass Capsule */}
            <div className="absolute bottom-2 inset-x-2 flex justify-center pointer-events-none z-20">
              <div className="bg-background/90 backdrop-blur-md px-3 py-1 rounded-md border border-accent/40 text-center shadow-lg">
                <div className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                  PRABAL SHARMA
                </div>
                <div className="font-mono text-[9px] text-foreground font-semibold uppercase tracking-widest">
                  XR DEVELOPER
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Specs Panel Side (Animates between BIO, STACK, SPATIAL) */}
          <div className="sm:col-span-7 font-mono text-xs">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2.5"
                >
                  <div className="p-2.5 rounded bg-surface/50 border border-border-subtle space-y-0.5">
                    <span className="text-[9px] text-accent font-bold uppercase block">PRIMARY ROLE</span>
                    <span className="text-foreground font-bold text-xs block">XR &amp; Spatial Computing Engineer</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface/50 border border-border-subtle space-y-0.5">
                    <span className="text-[9px] text-accent font-bold uppercase block">SPECIALIZATION</span>
                    <span className="text-foreground-secondary text-[11px] block leading-tight">
                      AR/VR, Photogrammetry, Geospatial 3D, MetaHuman &amp; UE5 Behavior Trees
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface/50 border border-border-subtle space-y-0.5">
                    <span className="text-[9px] text-accent font-bold uppercase block">EDUCATION</span>
                    <span className="text-foreground-secondary text-[11px] block">
                      B.Tech CSE — Bennett University
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === "matrix" && (
                <motion.div
                  key="matrix"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center text-[10px] text-accent font-bold uppercase">
                    <span>CORE STACK</span>
                    <span>EFFICIENCY: 98%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    <div className="p-2 rounded bg-surface/60 border border-border-subtle space-y-0.5">
                      <span className="text-accent font-bold block">UNREAL ENGINE 5</span>
                      <span className="text-foreground-muted text-[9px]">Blueprints, MetaHuman</span>
                    </div>
                    <div className="p-2 rounded bg-surface/60 border border-border-subtle space-y-0.5">
                      <span className="text-accent font-bold block">UNITY ENGINE</span>
                      <span className="text-foreground-muted text-[9px]">C#, AR Foundation</span>
                    </div>
                    <div className="p-2 rounded bg-surface/60 border border-border-subtle space-y-0.5">
                      <span className="text-accent font-bold block">COMPUTER VISION</span>
                      <span className="text-foreground-muted text-[9px]">Python, OpenCV</span>
                    </div>
                    <div className="p-2 rounded bg-surface/60 border border-border-subtle space-y-0.5">
                      <span className="text-accent font-bold block">PHOTOGRAMMETRY</span>
                      <span className="text-foreground-muted text-[9px]">Polycam, Blender</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "spatial" && (
                <motion.div
                  key="spatial"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center text-[10px] text-accent font-bold uppercase">
                    <span>SPATIAL ARCHITECTURE</span>
                    <span>6-DOF ACTIVE</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface/60 border border-border-subtle space-y-1 text-[10px]">
                    <div className="flex items-center gap-1.5 text-foreground font-bold">
                      <Cpu size={12} className="text-accent" />
                      <span>GEOSPATIAL AR &amp; MODEL TARGETS</span>
                    </div>
                    <p className="text-foreground-muted text-[9px] leading-relaxed">
                      Persistent outdoor AR placement via ARCore Geospatial API &amp; Vuforia CAD Model Targets.
                    </p>
                  </div>
                  <div className="p-2.5 rounded bg-surface/60 border border-border-subtle space-y-1 text-[10px]">
                    <div className="flex items-center gap-2 text-foreground font-bold">
                      <Sparkles size={12} className="text-accent" />
                      <span>CONVERSATIONAL AI IN 3D</span>
                    </div>
                    <p className="text-foreground-muted text-[9px] leading-relaxed">
                      Real-time speech dialogue &amp; action execution with 3D MetaHumans in UE5.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-end z-10 text-caption font-mono text-foreground-muted pt-2 border-t border-border-subtle/50">
        <span className="text-[10px] flex items-center gap-1">
          <MapPin size={10} className="text-accent" />
          <span>IIT GANDHINAGAR, GUJARAT</span>
        </span>
        <span className="text-accent font-bold text-[10px] uppercase">STATUS: OPEN FOR XR ROLES</span>
      </div>
    </motion.div>
  );
}
