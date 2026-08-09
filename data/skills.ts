export interface SkillCategoryData {
  id: string;
  number: string;
  name: string;
}

export interface SkillItemData {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  description?: string;
  modelUrl?: string;
  // Relative position percentage for desktop spatial graph
  x: number;
  y: number;
}

export const skillCategoriesData: SkillCategoryData[] = [
  { id: "xr-engines", number: "01", name: "XR / GAME ENGINES" },
  { id: "3d", number: "02", name: "3D MODELING" },
  { id: "xr-ar", number: "03", name: "XR / AR FRAMEWORKS" },
  { id: "capture", number: "04", name: "REAL-WORLD CAPTURE" },
  { id: "geospatial", number: "05", name: "GEOSPATIAL & SPATIAL DATA" },
  { id: "dev", number: "06", name: "DEVELOPMENT & TOOLS" },
];

export const skillsDataExtended: SkillItemData[] = [
  // 01 — XR / Game Engines
  {
    id: "unity",
    name: "Unity Engine",
    categoryId: "xr-engines",
    categoryName: "XR / GAME ENGINES",
    description: "Real-time engine used for developing interactive XR environments, AR/VR applications, and custom spatial logic.",
    modelUrl: "/models/logo/unity.glb",
    x: 20,
    y: 25,
  },
  {
    id: "unreal",
    name: "Unreal Engine 5",
    categoryId: "xr-engines",
    categoryName: "XR / GAME ENGINES",
    description: "High-fidelity real-time engine utilized for MetaHuman integration and photorealistic VR scenes.",
    modelUrl: "/models/logo/unreal.glb",
    x: 38,
    y: 20,
  },

  // 02 — 3D Modeling
  {
    id: "blender",
    name: "Blender 3D",
    categoryId: "3d",
    categoryName: "3D MODELING",
    description: "3D creation suite used for mesh editing, asset preparation, and photogrammetry cleanup.",
    modelUrl: "/models/logo/blender.glb",
    x: 65,
    y: 22,
  },

  // 03 — XR / AR Frameworks
  {
    id: "xr-dev",
    name: "Spatial Computing / XR",
    categoryId: "xr-ar",
    categoryName: "XR / AR FRAMEWORKS",
    description: "Core specialization focused on building spatial computing, virtual reality, and augmented reality applications.",
    modelUrl: "/models/logo/hololens.glb",
    x: 18,
    y: 55,
  },
  {
    id: "arcore",
    name: "ARCore & Google AR",
    categoryId: "xr-ar",
    categoryName: "XR / AR FRAMEWORKS",
    description: "Google's augmented reality platform used for geospatial placement and surface tracking.",
    modelUrl: "/models/logo/google.glb",
    x: 35,
    y: 50,
  },
  {
    id: "vuforia",
    name: "Vuforia Engine",
    categoryId: "xr-ar",
    categoryName: "XR / AR FRAMEWORKS",
    description: "AR SDK used for 3D Model Target tracking and augmented reality business card interactions.",
    modelUrl: "/models/logo/unity.glb",
    x: 48,
    y: 58,
  },

  // 04 — Real-World Capture
  {
    id: "drone-pilot",
    name: "Drone Survey & Mapping",
    categoryId: "capture",
    categoryName: "REAL-WORLD CAPTURE",
    description: "Aerial data acquisition for terrain mapping and 3D environment reconstruction.",
    modelUrl: "/models/logo/drone.glb",
    x: 75,
    y: 45,
  },
  {
    id: "photogrammetry",
    name: "Photogrammetry",
    categoryId: "capture",
    categoryName: "REAL-WORLD CAPTURE",
    description: "Converting series of photographs into high-density 3D spatial models and MetaHuman assets.",
    modelUrl: "/models/logo/blender.glb",
    x: 82,
    y: 65,
  },

  // 05 — Geospatial / Spatial Data
  {
    id: "cesium",
    name: "Cesium 3D Tiles",
    categoryId: "geospatial",
    categoryName: "GEOSPATIAL & SPATIAL DATA",
    description: "3D geospatial platform used for streaming massive 3D tiles and geographic data visualization.",
    modelUrl: "/models/logo/earth.glb",
    x: 30,
    y: 80,
  },
  {
    id: "cloudcompare",
    name: "CloudCompare",
    categoryId: "geospatial",
    categoryName: "GEOSPATIAL & SPATIAL DATA",
    description: "3D point cloud and triangular mesh processing software for spatial data alignment.",
    modelUrl: "/models/logo/earth.glb",
    x: 52,
    y: 82,
  },

  // 06 — Development & Tools
  {
    id: "git",
    name: "Git / GitHub",
    categoryId: "dev",
    categoryName: "DEVELOPMENT & TOOLS",
    description: "Version control and collaborative codebase management.",
    modelUrl: "/models/logo/git.glb",
    x: 72,
    y: 85,
  },
];
