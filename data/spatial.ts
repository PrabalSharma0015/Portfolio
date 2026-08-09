export interface SpatialNodeData {
  id: string;
  label: string;
  subtitle: string;
  target: string;
  position: [number, number, number];
}

export const spatialNodesData: SpatialNodeData[] = [
  {
    id: "node-hero",
    label: "HERO",
    subtitle: "SYSTEM START",
    target: "#hero",
    position: [-4.5, 1.2, 0],
  },
  {
    id: "node-about",
    label: "ABOUT",
    subtitle: "PROFILE & PROCESS",
    target: "#about",
    position: [-2.2, 0.4, 1.5],
  },
  {
    id: "node-skills",
    label: "SKILLS",
    subtitle: "TECH MATRIX",
    target: "#skills",
    position: [0, 1.8, -1.0],
  },
  {
    id: "node-experience",
    label: "EXPERIENCE",
    subtitle: "FIELD LOGS",
    target: "#experience",
    position: [2.2, 0.4, 1.5],
  },
  {
    id: "node-projects",
    label: "PROJECTS",
    subtitle: "SELECTED WORK",
    target: "#projects",
    position: [4.5, 1.2, 0],
  },
];
