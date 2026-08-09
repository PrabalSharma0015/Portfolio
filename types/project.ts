export interface TechDetail {
  name: string;
  role: string;
}

export interface QualitativeMetric {
  metric: string;
  cadScore: string; // e.g. "HIGH", "95%"
  cadLabel: string; // "High precision & stability"
  photogrammetryScore: string; // e.g. "GOOD", "80%"
  photogrammetryLabel: string; // "High realism & texture detail"
}

export interface BuildConfig {
  unityVersion: string;
  renderPipeline: string;
  graphicsAPI: string;
  scriptingBackend: string;
  apiCompatibility: string;
  arSDK: string;
  targetOS: string;
  minAPI: string;
  vuforiaFeatures: string[];
}

export interface ProjectApplication {
  title: string;
  description: string;
}

export interface CodeSnippet {
  title: string;
  description: string;
  code: string;
}

export interface GeoAssistArchitectureData {
  modules: {
    input: string;
    nlp: string;
    intent: string;
    unity: string;
    cesium: string;
    output: string;
  };
  traditionalVsAi: {
    traditional: string[];
    aiOnly: string[];
    geoAssist: string[];
  };
  npcStates: string[];
}

export interface VrMuseumData {
  problemPoints: string[];
  conceptStages: {
    stage: string;
    title: string;
    desc: string;
  }[];
  environmentWorkflow: {
    blenderModeling: string;
    optimization: string;
    texturingUv: string;
    unrealAssembly: string;
  };
  vrControls: {
    firstPerson: string;
    teleportation: string;
    interactiveTriggers: string;
  };
  metaHumanFlow: {
    user: string;
    input: string;
    ai: string;
    metaHuman: string;
    response: string;
  };
  blueprintSystems: {
    title: string;
    description: string;
  }[];
  exhibitZones: {
    title: string;
    description: string;
  }[];
  futurePotential: string[];
}

export interface SoulGamesData {
  gameplayLoop: string[];
  combatPipeline: {
    input: string;
    action: string;
    staminaCheck: string;
    animation: string;
    damage: string;
    recovery: string;
  };
  aiEnemies: {
    smallEnemy: {
      behavior: string;
      tactics: string;
    };
    bossEnemy: {
      behavior: string;
      phases?: string;
      tactics?: string;
    };
  };
  behaviorTreeFlow: string[];
  uiSystems: {
    playerHealth: string;
    playerStamina: string;
    bossHealthBar: string;
    damageFeedback: string;
  };
  inventorySystem: {
    pickup: string;
    notification: string;
    inventoryState: string;
    equippedWeapon: string;
  };
  environmentSetup: {
    assets: string;
    lighting: string;
    fog: string;
    combatArena: string;
  };
  developmentPipeline: string[];
  performanceMetrics: {
    fps: string;
    hardware: string;
    optimizations: string[];
  };
  challenges: {
    title: string;
    desc: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  context?: string;
  technologies: string[];
  techDetails?: TechDetail[];
  transformationSteps: string[];
  process?: { step: string; title: string; desc: string }[];
  visualType: "geospatial-ar" | "image-ar" | "photogrammetry-vr" | "model-target-ar" | "camera-calibration" | "geospatial-ai-npc" | "vr-museum-metahuman" | "ue5-souls-game";
  imageUrl?: string;
  link?: string;
  github?: string;
  featured?: boolean;
  caseStudyRoute: string;
  
  // Model Target & CAD vs Photogrammetry specific technical fields
  bigIdea?: {
    headline: string;
    description: string;
  };
  cadVsPhotogrammetry?: {
    cadFeatures: string[];
    photogrammetryFeatures: string[];
    coreFinding: string;
    qualitativeMetrics: QualitativeMetric[];
  };
  buildConfig?: BuildConfig;

  // OpenCV Camera Calibration specific technical fields
  coreQuestion?: {
    headline: string;
    description: string;
  };
  staticVsDynamic?: {
    staticCamera: string;
    staticInput: string;
    staticStrength: string;
    staticEnvironment: string;
    staticBestFor: string;
    dynamicCamera: string;
    dynamicInput: string;
    dynamicStrength: string;
    dynamicEnvironment: string;
    dynamicBestFor: string;
    keyFinding: string;
  };
  opencvCore?: {
    intrinsics: string[];
    extrinsics: string[];
    distortion: string[];
    reprojectionNote: string;
  };

  // GeoAssist AI NPC specific fields
  geoAssistArch?: GeoAssistArchitectureData;
  roadmap?: string[];

  // VR Museum specific fields
  vrMuseumData?: VrMuseumData;

  // Soul Games specific fields
  soulGamesData?: SoulGamesData;

  codeSnippets?: CodeSnippet[];
  learnings?: string[];
  applications?: ProjectApplication[];
  limitations?: string[];
  futureWork?: string[];
}
