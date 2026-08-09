import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "metahuman-photogrammetry",
    slug: "metahuman-photogrammetry",
    index: "01",
    title: "MetaHuman Character Creation using Photogrammetry",
    subtitle: "PHOTOGRAMMETRY & VR INTEGRATION",
    description: "A photogrammetry-driven character creation workflow capturing a real person, refining scans in Blender, importing into MetaHuman Creator, and deploying in Unreal Engine 5 for VR.",
    context: "Bridging real-world human photogrammetry with photorealistic digital character workflows for virtual reality environments.",
    technologies: ["Photogrammetry", "Polycam", "Blender", "MetaHuman Creator", "Unreal Engine 5", "VR Integration", "Blueprint", "C++"],
    techDetails: [
      { name: "Photogrammetry / Polycam", role: "Multi-angle photo capture & point cloud reconstruction" },
      { name: "Blender", role: "Mesh cleanup, texture alignment, and geometry retopology" },
      { name: "MetaHuman Creator", role: "Facial identity transfer & high-fidelity rig generation" },
      { name: "Unreal Engine 5", role: "Real-time lighting, MetaHuman assembly, & C++/Blueprint logic" },
      { name: "VR Integration", role: "Deploying MetaHuman character inside immersive VR simulation" }
    ],
    transformationSteps: ["REAL PERSON SCAN", "PHOTOGRAMMETRY MESH", "METAHUMAN CREATOR", "UE5 VR ENVIRONMENT"],
    process: [
      { step: "01", title: "REAL PERSON SCAN", desc: "Capturing multi-angle photographs of subject using Polycam photogrammetry." },
      { step: "02", title: "PHOTOGRAMMETRY MESH", desc: "Generating raw 3D mesh and texture maps, cleaned up in Blender." },
      { step: "03", title: "METAHUMAN CREATOR", desc: "Importing mesh to MetaHuman Creator for facial feature alignment and rigging." },
      { step: "04", title: "UE5 VR ENVIRONMENT", desc: "Assembling rigged character in Unreal Engine 5 for real-time VR deployment." }
    ],
    visualType: "photogrammetry-vr",
    imageUrl: "/images/projects/metahuman-showcase.png",
    featured: true,
    caseStudyRoute: "/projects/metahuman-photogrammetry",
    applications: [
      {
        title: "VR SIMULATIONS & TRAINING",
        description: "Creating lifelike digital human instructors and patient avatars for immersive VR medical and industrial training."
      },
      {
        title: "INTERACTIVE AI DIGITAL TWINS",
        description: "Pairing photorealistic MetaHuman avatars with conversational AI for real-time virtual guides and digital hosts."
      },
      {
        title: "VIRTUAL PRODUCTION & FILM",
        description: "Rapidly digitizing real actors into production-ready 3D character rigs for Unreal Engine 5 virtual production."
      },
      {
        title: "DIGITAL HERITAGE & AVATARS",
        description: "Preserving real human identity, historical figures, and cultural avatars as high-fidelity interactive 3D assets."
      }
    ]
  },
  {
    id: "geoassist",
    slug: "geoassist-ai-virtual-assistant",
    index: "02",
    title: "GeoAssist: AI Virtual Assistant in a Real-World 3D Environment",
    subtitle: "AI / GEOSPATIAL / INTERACTIVE 3D",
    description: "An AI-driven virtual assistant embedded inside a real-world 3D geospatial environment, combining conversational AI, Unity, Cesium 3D Tiles, and environment-aware interaction.",
    context: "An interactive geospatial AI assistant built with Unity and Cesium, combining conversational intelligence with a spatially aware 3D environment for both informational and action-based interactions.",
    technologies: ["Unity Engine", "Cesium for Unity", "C#", "Conversational AI", "Speech-to-Text", "Text-to-Speech", "3D NPC"],
    techDetails: [
      { name: "Unity Engine", role: "Real-time 3D scene composition, character movement, & action execution" },
      { name: "Cesium for Unity", role: "Real-world 3D Tiles streaming & georeferencing engine" },
      { name: "C#", role: "Interaction scripts, intent parsing, & environment action execution" },
      { name: "Conversational AI", role: "Natural language processing, intent detection, & contextual response generation" },
      { name: "Speech-to-Text", role: "Microphone voice input processing & transcription" },
      { name: "Text-to-Speech", role: "Voice output generation for NPC response delivery" },
      { name: "3D NPC", role: "Virtual assistant representation with gesture & animation states" }
    ],
    transformationSteps: ["USER INPUT", "SPEECH PROCESS", "AI PROCESSING", "INTENT PARSING", "UNITY EXECUTION", "WORLD RESPONSE"],
    process: [
      { step: "01", title: "USER INPUT", desc: "Speech (microphone input) or text input submitted through UI." },
      { step: "02", title: "SPEECH PROCESSING", desc: "Speech-to-Text converts microphone voice stream into text data." },
      { step: "03", title: "AI PROCESSING", desc: "Conversational AI parses natural language input for intent & reasoning." },
      { step: "04", title: "INTENT DETECTION", desc: "System determines whether request is informational query or action command." },
      { step: "05", title: "UNITY EXECUTION", desc: "C# scripts trigger mapped environment actions, camera positioning, or NPC gestures." },
      { step: "06", title: "WORLD RESPONSE", desc: "Delivery via text response, Text-to-Speech voice, & character animation." }
    ],
    visualType: "geospatial-ai-npc",
    imageUrl: "/images/projects/geoassist-showcase.png",
    featured: true,
    caseStudyRoute: "/projects/geoassist-ai-virtual-assistant",
    bigIdea: {
      headline: "WHAT IF AN AI COULD UNDERSTAND THE WORLD AROUND IT?",
      description: "Traditional conversational AI primarily exists in text or voice interfaces. GeoAssist places conversational intelligence inside a real-world 3D environment. The assistant can understand user questions, respond conversationally, interpret whether a request is informational or action-based, and act directly inside the Unity geospatial environment."
    },
    geoAssistArch: {
      modules: {
        input: "Voice (Microphone STT) / Text Input UI",
        nlp: "Conversational AI Intent Parsing",
        intent: "Informational Query vs Action Command Mapping",
        unity: "Unity C# Script Execution & NPC Animations",
        cesium: "Cesium 3D Tiles Streaming & Georeferencing",
        output: "Text UI + Text-to-Speech Voice + Character Gesture Sync"
      },
      traditionalVsAi: {
        traditional: ["VIEW GEOGRAPHY", "NAVIGATE SCENE", "MANUAL CAMERA SELECTION"],
        aiOnly: ["TEXT CHATBOT", "VOICE RESPONSE", "NO DIRECT SPATIAL ACTION"],
        geoAssist: ["NATURAL CONVERSATION", "INTENT UNDERSTANDING", "ACTION EXECUTION IN 3D WORLD"]
      },
      npcStates: ["LISTENING", "THINKING", "EXECUTING", "RESPONDING"]
    },
    learnings: [
      "NATURAL LANGUAGE WORKS: The assistant successfully handled natural language queries.",
      "INTENT PARSING MATTERS: Command detection improved after refining intent parsing logic.",
      "THE WORLD HAS A COST: Streaming large geospatial 3D tile environments requires performance optimization for smooth interaction."
    ],
    applications: [
      {
        title: "VIRTUAL TOURS",
        description: "AI-guided exploration of real-world locations."
      },
      {
        title: "SMART CITY SYSTEMS",
        description: "Interactive urban planning and infrastructure visualization."
      },
      {
        title: "DIGITAL TWINS",
        description: "AI-driven agents inside spatial replicas."
      },
      {
        title: "EDUCATIONAL PLATFORMS",
        description: "Interactive learning environments."
      },
      {
        title: "TRAINING & SIMULATION",
        description: "Defense, disaster management, and industrial simulations."
      },
      {
        title: "METAVERSE APPLICATIONS",
        description: "AI-powered NPCs in large-scale virtual environments."
      }
    ],
    limitations: [
      "Text interaction showed lower latency than voice interaction",
      "Cesium 3D tile streaming performance varies with internet bandwidth and tile resolution",
      "Character animation synchronization required careful state blending"
    ],
    roadmap: [
      "VR INTEGRATION",
      "EMOTION-AWARE RESPONSES",
      "BETTER ANIMATION & LIP-SYNC",
      "MULTI-LANGUAGE SUPPORT",
      "OBJECT RECOGNITION & SPATIAL AWARENESS",
      "CLOUD SCALABILITY",
      "IOT SMART CITY INTEGRATION"
    ]
  },
  {
    id: "ar-model-targets",
    slug: "ar-model-target-visualization",
    index: "03",
    title: "Augmented Reality Model Target Visualization using CAD and Photogrammetric Models",
    subtitle: "AUGMENTED REALITY / MODEL TARGET TRACKING",
    description: "An AR system built with Unity and Vuforia that recognizes and tracks CAD and photogrammetric 3D models while anchoring interactive labels to their components.",
    context: "An augmented reality system that uses Vuforia Model Targets to recognize and track CAD and photogrammetric 3D models in real time, with persistent labels anchored to model components for interactive inspection and learning.",
    technologies: ["Unity Engine", "Vuforia Engine", "Model Target Generator", "Blender", "Metashape", "RealityCapture", "Android", "C#", "Git"],
    techDetails: [
      { name: "Unity 2021.3 LTS", role: "Real-time 3D engine execution & scene composition" },
      { name: "Vuforia Engine 10.x", role: "Model Target recognition, Advanced Guide Views & Device Tracker" },
      { name: "Model Target Generator", role: "Generating 3D CAD & photogrammetric target datasets" },
      { name: "Blender", role: "Mesh decimation, UV unwrapping, scale & axis alignment" },
      { name: "Metashape / RealityCapture", role: "Multi-view 3D reconstruction & PBR texture maps" },
      { name: "C#", role: "ModelTargetBehaviour configuration & world-space label parenting" }
    ],
    transformationSteps: ["MODEL PREPARATION", "TARGET GENERATION", "UNITY + VUFORIA", "MODEL RECOGNITION", "LABEL ANCHORING", "AR VISUALIZATION"],
    process: [
      { step: "01", title: "3D GEOMETRY RECOGNITION", desc: "Recognizes physical 3D objects directly from CAD models or photogrammetric scans." },
      { step: "02", title: "MULTI-ANGLE GUIDE VIEWS", desc: "Provides intuitive visual guide overlays to help users align their camera effortlessly." },
      { step: "03", title: "REAL-TIME MODEL TRACKING", desc: "Locks onto the physical object in 3D space with high stability and zero drift." },
      { step: "04", title: "COMPONENT LABEL ANCHORING", desc: "Anchors interactive 3D text labels directly to specific internal object parts." },
      { step: "05", title: "INTERACTIVE AR INSPECTION", desc: "Allows users to tap, inspect, and explore hidden component details in real time." },
      { step: "06", title: "MOBILE AR DEPLOYMENT", desc: "Optimized for smooth, high-frame-rate performance on mobile AR devices." }
    ],
    visualType: "model-target-ar",
    imageUrl: "/images/projects/ar-model-target-showcase.png",
    featured: true,
    caseStudyRoute: "/projects/ar-model-target-visualization",
    bigIdea: {
      headline: "HOW DO YOU MAKE A 3D MODEL UNDERSTANDABLE IN THE REAL WORLD?",
      description: "Traditional 2D image targets can be limiting when the object itself contains useful geometric information. This project explores 3D Model Target recognition using both CAD and photogrammetric models. The system recognizes the object's geometry and anchors information directly to its components."
    },
    cadVsPhotogrammetry: {
      cadFeatures: [
        "High geometric precision",
        "Stronger tracking stability",
        "Ideal for accurate measurements",
        "Fast target detection & minimal drift"
      ],
      photogrammetryFeatures: [
        "High visual realism",
        "Rich surface detail",
        "More immersive appearance",
        "Context-dependent stability"
      ],
      coreFinding: "CAD targets offer precision and stability, while photogrammetric targets deliver realism. A hybrid approach combines the strengths of both.",
      qualitativeMetrics: [
        {
          metric: "TRACKING STABILITY",
          cadScore: "HIGH",
          cadLabel: "High tracking stability with minimal drift in real-world conditions",
          photogrammetryScore: "GOOD",
          photogrammetryLabel: "Good stability / Context dependent"
        },
        {
          metric: "VISUAL REALISM",
          cadScore: "MODERATE",
          cadLabel: "Clean geometric surface representation",
          photogrammetryScore: "HIGH",
          photogrammetryLabel: "Rich visual detail and immersive visualization"
        },
        {
          metric: "ANCHORED INFORMATION",
          cadScore: "HIGH",
          cadLabel: "Labels remained fixed to respective model parts during movement",
          photogrammetryScore: "HIGH",
          photogrammetryLabel: "Rigid component parenting & camera billboarding"
        }
      ]
    },
    buildConfig: {
      unityVersion: "2021.3 LTS",
      renderPipeline: "Built-in Render Pipeline",
      graphicsAPI: "OpenGLES3",
      scriptingBackend: "IL2CPP",
      apiCompatibility: ".NET Standard 2.1",
      arSDK: "Vuforia Engine 10.x",
      targetOS: "Android",
      minAPI: "Android 8.0 (API Level 26)",
      vuforiaFeatures: [
        "Advanced Model Targets",
        "Guide Views",
        "Extended Tracking",
        "Device Tracker"
      ]
    },
    applications: [
      {
        title: "EDUCATION & TRAINING",
        description: "Interactive labels make complex machines, anatomy, and scientific models easier to explore."
      },
      {
        title: "INDUSTRIAL ASSEMBLY & MAINTENANCE",
        description: "AR overlays support assembly, disassembly, and repair procedures."
      },
      {
        title: "MUSEUMS & HERITAGE",
        description: "3D scans and contextual labels create immersive exhibits."
      },
      {
        title: "PRODUCT DESIGN REVIEW",
        description: "AR helps compare CAD models with physical prototypes."
      }
    ],
    limitations: [
      "Low-End Device Performance",
      "Lighting Sensitivity",
      "Glossy / Reflective Surfaces",
      "Dense Photogrammetry Meshes",
      "Decimation / LOD Requirements"
    ],
    futureWork: [
      "Explode View Interactions",
      "Real-Time Distance & Dimension Measurements",
      "Multi-Target Co-Existence Scenarios",
      "AI-Assisted Target Recognition",
      "Optical See-Through Headset Deployment"
    ]
  },
  {
    id: "outdoor-ar",
    slug: "outdoor-ar-model-placement",
    index: "04",
    title: "Outdoor AR Model Placement System",
    subtitle: "GEOSPATIAL LOCATION-BASED AR",
    description: "A Unity-based AR system focused on stable outdoor placement of 3D models using GPS data, ARCore Geospatial API, and real-world alignment.",
    context: "Real-world alignment and persistent positioning of virtual models in outdoor environments using ARCore Geospatial API and Visual Positioning System (VPS) concepts.",
    technologies: ["Unity Engine", "ARCore Geospatial API", "AR Foundation", "Blender 3D", "C#"],
    techDetails: [
      { name: "ARCore Geospatial API", role: "Location-aware AR positioning & VPS anchoring" },
      { name: "AR Foundation", role: "Cross-platform AR framework management" },
      { name: "Unity Engine", role: "Real-time 3D environment rendering & script execution" },
      { name: "Blender 3D", role: "3D model optimization & coordinate origin alignment" },
      { name: "C#", role: "Geospatial tracking & interactive placement logic" }
    ],
    transformationSteps: ["PHYSICAL LOCATION", "GEOSPATIAL ANCHOR", "3D MODEL", "STABLE AR"],
    process: [
      { step: "01", title: "PHYSICAL LOCATION", desc: "Acquiring real-world GPS coordinates and geographic camera orientation." },
      { step: "02", title: "GEOSPATIAL ANCHOR", desc: "Binding virtual anchors to Earth coordinates via ARCore Geospatial API." },
      { step: "03", title: "3D MODEL ALIGNMENT", desc: "Loading optimized Blender 3D assets with real-world origin points." },
      { step: "04", title: "STABLE AR PLACEMENT", desc: "Rendering persistent, drift-free virtual models aligned with physical outdoor terrain." }
    ],
    visualType: "geospatial-ar",
    imageUrl: "/images/projects/outdoor-ar-showcase-v2.png",
    featured: true,
    caseStudyRoute: "/projects/outdoor-ar-model-placement"
  },
  {
    id: "ar-business-card",
    slug: "ar-business-card",
    index: "05",
    title: "Beyond Paper: AR Business Card",
    subtitle: "IMAGE TARGET TRACKING & INTERACTIVE UI",
    description: "An AR business card experience where scanning a printed physical card triggers an interactive digital presentation, contact UI, and social links.",
    context: "Transforming standard physical business cards into dynamic, interactive digital portals using image target recognition and Vuforia SDK.",
    technologies: ["Unity", "Vuforia SDK", "Image Target Tracking", "C#", "Interactive AR UI"],
    techDetails: [
      { name: "Vuforia SDK", role: "Image target detection & real-time tracking engine" },
      { name: "Unity", role: "3D scene composition & AR UI canvas rendering" },
      { name: "Image Target Tracking", role: "Feature point extraction from physical printed card" },
      { name: "Interactive AR UI", role: "Touch-responsive digital contact & social link interface" },
      { name: "C#", role: "Event handling for scanning triggers & UI state transitions" }
    ],
    transformationSteps: ["PRINTED CARD", "IMAGE TARGET", "TRACKING FRAME", "AR UI EXPERIENCE"],
    process: [
      { step: "01", title: "PRINTED CARD", desc: "Physical printed business card used as recognition target." },
      { step: "02", title: "IMAGE TARGET SCAN", desc: "Camera extracts feature points and identifies target markers via Vuforia." },
      { step: "03", title: "TRACKING FRAME", desc: "Establishing real-time camera pose and bounding frame over physical target." },
      { step: "04", title: "AR UI EXPERIENCE", desc: "Spawning interactive 3D elements, digital contact links, and spatial UI." }
    ],
    visualType: "image-ar",
    imageUrl: "/images/projects/ar-business-card-showcase.png",
    featured: true,
    caseStudyRoute: "/projects/ar-business-card"
  },
  {
    id: "camera-calibration",
    slug: "camera-calibration-opencv",
    index: "06",
    title: "Camera Calibration using OpenCV: Static and Dynamic Approaches",
    subtitle: "COMPUTER VISION / CAMERA CALIBRATION",
    description: "A computer vision project implementing and comparing static offline camera calibration with real-time dynamic calibration using OpenCV.",
    context: "A comparative computer vision study exploring camera calibration from pre-captured chessboard images and live video, using OpenCV to estimate camera parameters, distortion, and re-projection error.",
    technologies: ["Python", "OpenCV", "Google Colab", "Computer Vision", "Camera Calibration"],
    techDetails: [
      { name: "Python", role: "Core programming language executing OpenCV matrix mathematics" },
      { name: "OpenCV", role: "cv2.findChessboardCorners, cv2.cornerSubPix, and cv2.calibrateCamera" },
      { name: "Google Colab", role: "Interactive cloud Python notebook environment & JS-Python webcam bridge" },
      { name: "Computer Vision", role: "Estimating intrinsic matrix, extrinsic vectors, & distortion coefficients" },
      { name: "Camera Calibration", role: "Correcting lens optical distortion & re-projection error minimization" }
    ],
    transformationSteps: ["CHESSBOARD ACQUISITION", "CORNER DETECTION", "CORNER REFINEMENT", "CALIBRATION", "EVALUATION"],
    process: [
      { step: "01", title: "CHESSBOARD ACQUISITION", desc: "Capture images or live video of the chessboard pattern." },
      { step: "02", title: "CORNER DETECTION", desc: "Detect internal corners using cv2.findChessboardCorners()." },
      { step: "03", title: "CORNER REFINEMENT", desc: "Refine corner locations using cv2.cornerSubPix()." },
      { step: "04", title: "CALIBRATION", desc: "Estimate camera matrix and distortion coefficients using cv2.calibrateCamera()." },
      { step: "05", title: "EVALUATION", desc: "Compute re-projection error to evaluate calibration accuracy." }
    ],
    visualType: "camera-calibration",
    imageUrl: "/images/projects/camera-calibration-showcase.png",
    featured: true,
    caseStudyRoute: "/projects/camera-calibration-opencv",
    coreQuestion: {
      headline: "HOW DO YOU TURN A CAMERA IMAGE INTO A MEASURABLE VIEW OF THE WORLD?",
      description: "A camera does not produce a perfectly geometrically accurate representation of the world. Lens distortion, perspective, and internal camera characteristics affect how physical 3D space maps into a 2D image. Camera calibration estimates intrinsic parameters and distortion coefficients to correct optical mapping for computer vision, AR, 3D reconstruction, and robotics."
    },
    staticVsDynamic: {
      staticCamera: "DJI Action 2",
      staticInput: "Pre-captured images (DJI Action 2)",
      staticStrength: "More stable and accurate / Lower re-projection error",
      staticEnvironment: "Controlled environment",
      staticBestFor: "Best for offline / high-precision tasks",
      dynamicCamera: "Logitech C310 webcam",
      dynamicInput: "Real-time video (Logitech C310)",
      dynamicStrength: "Adaptive to live conditions",
      dynamicEnvironment: "More sensitive to motion & lighting",
      dynamicBestFor: "Best for real-time applications",
      keyFinding: "Static calibration produced a stable and consistent camera matrix under controlled conditions with re-projection error on the order of a few tenths of a pixel. Dynamic calibration successfully estimated intrinsic parameters in real time, while showing some variation due to hand motion, lighting changes, and corner-detection noise."
    },
    opencvCore: {
      intrinsics: ["Focal Length (fx, fy)", "Principal Point (cx, cy)", "Axis Skew Parameter"],
      extrinsics: ["Rotation Vectors (R)", "Translation Vectors (T)", "World-to-Camera Coordinate Transformation"],
      distortion: ["Radial Distortion (k1, k2, k3) - Barrel / Pincushion effect", "Tangential Distortion (p1, p2) - Lens misalignment positional shifts"],
      reprojectionNote: "Re-projection error measures calibration quality by projecting known 3D world points back into the 2D image plane using the estimated camera matrix and calculating average distance between observed and projected points (in pixels)."
    },
    codeSnippets: [
      {
        title: "STATIC CALIBRATION PIPELINE",
        description: "Extracting corners, sub-pixel refinement, and camera matrix estimation from static images.",
        code: `import cv2\nimport numpy as np\n\n# Find chessboard corners in pre-captured images\nret, corners = cv2.findChessboardCorners(gray, (cols, rows), None)\nif ret:\n    # Refine corner locations to sub-pixel accuracy\n    corners2 = cv2.cornerSubPix(gray, corners, (11, 11), (-1, -1), criteria)\n    objpoints.append(objp)\n    imgpoints.append(corners2)\n\n# Compute intrinsic camera matrix and distortion coefficients\nret, mtx, dist, rvecs, tvecs = cv2.calibrateCamera(objpoints, imgpoints, gray.shape[::-1], None, None)`
      },
      {
        title: "DYNAMIC REAL-TIME STREAM CALIBRATION",
        description: "Capturing live webcam frames interactively in Colab and accumulating corner points.",
        code: `# Live frame capture loop via JavaScript-Python Colab bridge\nfor frame in live_stream:\n    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\n    ret, corners = cv2.findChessboardCorners(gray, (cols, rows), None)\n    if ret:\n        corners_refined = cv2.cornerSubPix(gray, corners, (11, 11), (-1, -1), criteria)\n        accumulate_points(objp, corners_refined)\n\n# Estimate parameters in real time once sufficient frames collected\nret, mtx, dist, rvecs, tvecs = cv2.calibrateCamera(accumulated_obj, accumulated_img, frame_shape, None, None)`
      }
    ],
    learnings: [
      "CONTROLLED INPUT MATTERS: Static calibration benefits from stable images, good lighting, and minimal motion.",
      "REAL-TIME INPUT INTRODUCES NOISE: Dynamic calibration must handle motion, changing lighting, and corner-detection variation.",
      "THERE IS NO SINGLE BEST METHOD: Static calibration favors precision and repeatability. Dynamic calibration favors adaptability and interactive use."
    ],
    applications: [
      {
        title: "AUGMENTED REALITY",
        description: "Accurate camera calibration supports reliable pose estimation and AR overlays."
      },
      {
        title: "3D RECONSTRUCTION",
        description: "Calibrated cameras provide the foundation for reconstruction from multiple viewpoints."
      },
      {
        title: "ROBOTICS & NAVIGATION",
        description: "Real-time calibration supports robotics navigation using camera streams."
      },
      {
        title: "MEASUREMENT & INSPECTION / OBJECT DETECTION",
        description: "Calibration supports object detection, measurement, and precision vision tasks."
      }
    ],
    limitations: [
      "Hand motion during dynamic webcam frame capture",
      "Lighting fluctuations in live environment",
      "Corner detection noise across changing camera angles",
      "Static calibration requires pre-captured images and cannot adapt if camera/lens conditions change"
    ],
    futureWork: [
      "Automated frame quality selection filter for dynamic calibration",
      "Integration with real-time AR pose estimation pipeline",
      "Multi-camera stereo calibration system"
    ]
  },
  {
    id: "vr-museum",
    slug: "vr-interactive-museum-bennett",
    index: "07",
    title: "VR Interactive Museum — Bennett University",
    subtitle: "VIRTUAL REALITY / AI / METAHUMAN",
    description: "An immersive virtual museum experience built with Unreal Engine 5, combining VR exploration, a 3D university environment, conversational AI, and a MetaHuman museum guide.",
    context: "Overcoming physical museum access limits by creating an interactive VR experience where visitors explore Bennett University's 3D campus, inspect exhibits, and converse with an AI MetaHuman guide.",
    technologies: ["Unreal Engine 5", "VR", "MetaHuman", "Conversational AI", "Blueprint", "Blender", "3D Environment Design", "VR Interaction", "AI/NPC Interaction"],
    techDetails: [
      { name: "Unreal Engine 5", role: "Real-time 3D rendering, lighting, materials, and MetaHuman scene assembly" },
      { name: "VR Interaction", role: "First-person exploration, motion controller tracking, and teleportation navigation" },
      { name: "MetaHuman", role: "High-fidelity digital character creation, facial rigging, and lip-sync alignment" },
      { name: "Conversational AI", role: "Voice & proximity-triggered dialogue generation and knowledge-base query handling" },
      { name: "Blueprint", role: "Visual scripting for interaction logic, trigger volumes, timelines, and UI event graphs" },
      { name: "Blender", role: "3D environment modeling, decimation, texturing, and UV unwrapping for university assets" }
    ],
    transformationSteps: ["PHYSICAL UNIVERSITY", "3D ENVIRONMENT", "VR EXPERIENCE", "AI METAHUMAN GUIDE", "INTERACTIVE MUSEUM"],
    process: [
      { step: "01", title: "PHYSICAL UNIVERSITY", desc: "Analyzing Bennett University physical architecture and museum exhibits." },
      { step: "02", title: "3D ENVIRONMENT", desc: "Modeling, texturing, and UV unwrapping university buildings and exhibits in Blender." },
      { step: "03", title: "VR EXPERIENCE", desc: "Assembling scenes in Unreal Engine 5 with VR locomotion, teleportation, & collision." },
      { step: "04", title: "AI METAHUMAN GUIDE", desc: "Integrating MetaHuman digital guide with conversational AI for real-time interaction." },
      { step: "05", title: "INTERACTIVE MUSEUM", desc: "Connecting proximity triggers, library zone, theater room, and educational content." }
    ],
    visualType: "vr-museum-metahuman",
    imageUrl: "/images/projects/vr-museum-showcase.png",
    featured: true,
    caseStudyRoute: "/projects/vr-interactive-museum-bennett",
    bigIdea: {
      headline: "BRIDGING PHYSICAL SPACES WITH IMMERSIVE VR & CONVERSATIONAL AI",
      description: "Physical access to university museum content can be limited by location, time, accessibility, and physical space availability. This project creates an interactive digital alternative where users explore Bennett University in VR and converse with an AI MetaHuman guide."
    },
    vrMuseumData: {
      problemPoints: [
        "Location & Geographical Distance Constraints",
        "Fixed Operating Hours & Time Limitations",
        "Physical Accessibility Barriers",
        "Limited Physical Exhibition Space & Static Displays"
      ],
      conceptStages: [
        { stage: "01", title: "PHYSICAL UNIVERSITY", desc: "Real Bennett University campus & museum architecture" },
        { stage: "02", title: "3D ENVIRONMENT", desc: "Blender 3D mesh modeling & PBR UV texturing" },
        { stage: "03", title: "VR EXPERIENCE", desc: "UE5 first-person VR teleportation & spatial audio" },
        { stage: "04", title: "AI METAHUMAN GUIDE", desc: "Conversational AI character with real-time facial rig" },
        { stage: "05", title: "INTERACTIVE MUSEUM", desc: "Interactive exhibits, library & immersive theater" }
      ],
      environmentWorkflow: {
        blenderModeling: "High-poly to low-poly modeling of Bennett University architecture",
        optimization: "Mesh decimation and LOD generation for VR frame rates",
        texturingUv: "PBR texture maps, lightmap UV unwrapping, and material setup",
        unrealAssembly: "UE5 Lumen lighting, collision setup, and spatial audio"
      },
      vrControls: {
        firstPerson: "6-DOF head-tracked immersion with Meta Quest / VR headset support",
        teleportation: "Parabolic raycast arc targeting with thumbstick snap rotation",
        interactiveTriggers: "Proximity volumes and VR hand grab interaction for exhibit objects"
      },
      metaHumanFlow: {
        user: "VR Visitor",
        input: "Microphone Voice / Proximity Trigger",
        ai: "Conversational AI Logic",
        metaHuman: "MetaHuman UE5 Character Rig",
        response: "Speech Audio & Contextual Guide Dialogue"
      },
      blueprintSystems: [
        { title: "VR TELEPORTATION & LOCOMOTION", description: "Blueprint parabolic arc tracing, navmesh checking, and smooth snap rotation." },
        { title: "PROXIMITY DIALOGUE TRIGGERS", description: "Event Graph overlap volumes initiating MetaHuman voice and gesture animation." },
        { title: "EXHIBIT INTERACTION SYSTEM", description: "Reusable Blueprint actor components handling object inspection and UI popups." },
        { title: "THEATER & MEDIA PLAYER LOGIC", description: "Synchronized video/audio stream playback on 3D virtual screens inside the theater room." }
      ],
      exhibitZones: [
        { title: "MAIN MUSEUM TOUR", description: "Guided walkthrough of university achievements, historical timelines, and architectural milestones." },
        { title: "INTERACTIVE LIBRARY ZONE", description: "Digital archive stacks with clickable books, research papers, and interactive reading nodes." },
        { title: "IMMERSIVE THEATER ROOM", description: "Virtual cinema room featuring spatial audio projection and video presentations." },
        { title: "INTERACTIVE EXHIBITS", description: "3D artifact displays with VR grab controls, inspection rotation, and audio commentary." }
      ],
      futurePotential: [
        "Multilingual AI support for international visitors",
        "Enhanced VR/AR cross-platform integration",
        "Full-body tracking & natural finger interaction",
        "Haptic feedback for physical artifact feel",
        "Multiplayer social VR guided group tours",
        "Enhanced accessibility features & spatial audio cues",
        "Next-gen visual fidelity & real-time path tracing"
      ]
    }
  },
  {
    id: "soul-games",
    slug: "soul-games-ue5-action-game",
    index: "08",
    title: "From Break to Battle: How I Created Soul Games",
    subtitle: "GAME DEVELOPMENT / UNREAL ENGINE 5",
    description: "A solo-developed Souls-like action game built in Unreal Engine 5, combining stamina-driven combat, Behavior Tree enemy AI, boss encounters, responsive animation, inventory systems, and a dark ruins environment.",
    context: "A self-initiated third-person action game created independently during semester break, exploring Souls-like stamina combat, Behavior Tree AI, boss encounters, and dark ruins environment rendering.",
    technologies: ["Unreal Engine 5", "Blueprints", "Behavior Trees", "Blackboards", "Animation Blueprints", "Blend Spaces", "Megascan Assets"],
    techDetails: [
      { name: "Unreal Engine 5", role: "Core game engine execution, real-time lighting, materials, and physics rendering" },
      { name: "Blueprints", role: "Visual scripting for player movement, stamina logic, inventory, and combat handlers" },
      { name: "Behavior Trees", role: "AI state decision hierarchy for small enemy patrols and boss attack phases" },
      { name: "Blackboards", role: "AI key-value memory data structure tracking player target, health, and distance" },
      { name: "Animation Blueprints", role: "AnimGraph state machines, Blend Spaces for movement locomotion, & Montages" },
      { name: "Megascan Assets", role: "High-resolution PBR surface textures, rocks, and dark gothic ruins environmental mesh assets" }
    ],
    transformationSteps: ["PROJECT VISION", "SYSTEM DECOMPOSITION", "COMBAT & MOVEMENT", "ENEMY AI & BOSS", "UI & INVENTORY", "RUINS ENVIRONMENT"],
    process: [
      { step: "01", title: "PROJECT VISION", desc: "Defining core Souls-like mechanics: stamina-driven combat, pattern reading, and difficulty balance." },
      { step: "02", title: "SYSTEM DECOMPOSITION", desc: "Modular breakdown into player movement, combat timers, AI Behavior Trees, UI, and inventory." },
      { step: "03", title: "COMBAT & MOVEMENT", desc: "Implementing Anim Montages, dodge roll invincibility, light/heavy attacks, and stamina drain." },
      { step: "04", title: "ENEMY AI & BOSS", desc: "Building perception sphere traces, Behavior Tree nodes, small enemy patrols, and multi-phase boss AI." },
      { step: "05", title: "UI & INVENTORY", desc: "Constructing real-time health/stamina bars, dynamic boss health overlay, and world weapon pickup." },
      { step: "06", title: "RUINS ENVIRONMENT", desc: "Assembling dark ruins arena with Megascan assets, exponential height fog, and dynamic spotlights." }
    ],
    visualType: "ue5-souls-game",
    imageUrl: "/images/projects/soul-games-showcase.png",
    featured: true,
    caseStudyRoute: "/projects/soul-games-ue5-action-game",
    bigIdea: {
      headline: "HOW DO YOU BUILD THE FEEL OF A SOULS-LIKE GAME FROM THE GROUND UP?",
      description: "The project was motivated by the challenge of independently recreating the core qualities of Souls-like games during semester break: precision combat, stamina management, enemy attack patterns, difficult encounters, responsive movement, and atmospheric environments."
    },
    soulGamesData: {
      gameplayLoop: ["MOVE", "OBSERVE", "MANAGE STAMINA", "ATTACK / DODGE", "READ ENEMY BEHAVIOR", "RESPOND", "HEAL / REPOSITION", "CONTINUE"],
      combatPipeline: {
        input: "Player Controller Input (Attack / Dodge / Jump)",
        action: "Trigger Animation Montage & Weapon Collision Trace",
        staminaCheck: "Stamina Gate (Block action if stamina < required cost)",
        animation: "Play Anim Montage with Root Motion / Motion Lock",
        damage: "Apply Damage Event & Spawn Particle Impact",
        recovery: "Initiate Cooldown Timer & Trigger Stamina Regeneration"
      },
      aiEnemies: {
        smallEnemy: {
          behavior: "Patrol along waypoints, player detection via sphere trace, aggressive melee chase",
          tactics: "Light sword slash combo, pathfinding around obstacles, death ragdoll physics"
        },
        bossEnemy: {
          behavior: "Multi-phase boss encounter with light & heavy attack patterns, dynamic health bar UI",
          tactics: "Phase 1 light slashes, Phase 2 heavy AOE strikes, player proximity-based decision tree"
        }
      },
      behaviorTreeFlow: ["PERCEPTION TRACE", "PLAYER DETECTED?", "DISTANCE CHECK", "IN MELEE RANGE?", "EXECUTE LIGHT / HEAVY ATTACK", "COOLDOWN RECOVERY"],
      uiSystems: {
        playerHealth: "Real-time red health bar updating on damage events",
        playerStamina: "Real-time green/cyan stamina bar draining on attack/dodge & regenerating on delay",
        bossHealthBar: "Dynamic top-screen boss health bar appearing upon entering boss arena trigger",
        damageFeedback: "Screen vignette flash & floating damage indicator feedback"
      },
      inventorySystem: {
        pickup: "Overlapping weapon actor in world triggers interaction prompt",
        notification: "UI notification displays acquired weapon name & stats",
        inventoryState: "Weapon reference stored in player inventory array",
        equippedWeapon: "Mesh attachment to player hand socket with weapon stat updates"
      },
      environmentSetup: {
        assets: "Quixel Megascans gothic ruins, stone pillars, and ground surfaces",
        lighting: "Low-intensity directional moon lighting with volumetric spotlights",
        fog: "Exponential Height Fog creating thick atmospheric depth",
        combatArena: "Enclosed arena layout optimized for strategic movement and boss maneuvering"
      },
      developmentPipeline: ["PLANNING", "PROTOTYPING", "IMPLEMENTATION", "TESTING", "POLISHING", "OPTIMIZATION"],
      performanceMetrics: {
        fps: "50–60 FPS",
        hardware: "Mid-range Hardware",
        optimizations: [
          "Optimized Megascan mesh LODs to reduce GPU draw calls",
          "Streamlined AI perception tick rates to reduce CPU load",
          "Removed redundant Blueprint event graph tick calculations",
          "Fine-tuned particle system life cycles in combat arena"
        ]
      },
      challenges: [
        { title: "ANIMATION BLENDING", desc: "Animation clipping occurred during fast combat transitions between attack montages and dodge rolls." },
        { title: "AI PATHFINDING BALANCING", desc: "Enemies occasionally got stuck on complex ruins geometry during high-speed player chasing." },
        { title: "HIT DETECTION TIMING", desc: "Weapon trace collision needed precise anim notification window alignment to avoid phantom hits." }
      ]
    },
    learnings: [
      "PRECISION OVER BUTTON MASHING: Souls-like combat requires strict stamina cost gates and attack recovery windows.",
      "BEHAVIOR TREES ENFORCE PREDICTABLE THREATS: Modular AI decision nodes allow enemies to react dynamically to player distance.",
      "SOLO ITERATION BUILDS TECHNICAL DEPTH: Developing player systems, AI, UI, and environment in parallel strengthens full-stack game programming skills."
    ],
    limitations: [
      "Occasional animation clipping during fast attack and dodge transitions",
      "Enemies can sometimes clip into environment objects during complex chase patterns",
      "Stamina regeneration curve requires further fine-tuning across high-intensity encounters",
      "Current inventory is basic and does not support advanced weapon upgrades or multi-item management",
      "Minor frame-rate drops can occur in dense Megascan ruins sections on lower-end GPUs"
    ],
    futureWork: [
      "Expanded combat mechanics: Advanced weapon combos, parries, shield mechanics, and magic-based attacks",
      "Enhanced boss design: Additional boss phases, cinematic intro sequences, and unique attack animations",
      "Improved enemy variety: Different enemy classes, distinct AI patterns, and varied weapon loadouts",
      "Level expansion: Interconnected maps, hidden areas, and shortcut paths",
      "RPG systems: Character progression, stat upgrades, and weapon enhancement trees",
      "Dynamic environment: Weather effects, dynamic lighting changes, and destructible props",
      "Multiplayer features: Co-op assistance and PvP invasion mechanics",
      "Optimization & Packaging: Performance profiling and standalone build packaging"
    ]
  }
];
