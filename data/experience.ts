import { Experience } from "@/types/experience";

export const experienceData: Experience[] = [
  {
    id: "xr-dev",
    role: "XR Developer",
    company: "AgroCast Analytics Pvt. Ltd. | IIT Gandhinagar, India",
    location: "IIT Gandhinagar, India",
    startDate: "JUNE 2026",
    endDate: "Present",
    description: [
      "Building and improving interactive XR simulations for real-time visualization and spatial analysis.",
      "Developing virtual inspection systems for complex infrastructure, including dams and terrain environments.",
      "Integrating drone data, 3D terrain models, and elevation maps into immersive interactive environments.",
      "Leading XR development for live government spatial projects.",
      "Converting physical maps and drone footage into interactive 3D tools.",
      "Creating detailed 3D site animations and visual terrain walkthroughs."
    ],
    technologies: ["Unity Engine", "Unreal Engine 5", "C#", "C++", "3D Reconstruction", "GIS Terrain Maps", "AR/VR"]
  },
  {
    id: "xr-intern",
    role: "XR & Geospatial Intern",
    company: "AgroCast Analytics Pvt. Ltd. | IIT Gandhinagar, India",
    location: "IIT Gandhinagar, India",
    startDate: "JANUARY 2026",
    endDate: "JUNE 2026",
    description: [
      "Flown drones to survey land, farms, buildings, and dams in 3D.",
      "Mapped infrastructure and converted raw drone imagery into 3D spatial models.",
      "Generated orthomosaics and Digital Elevation Models (DEMs).",
      "Created initial XR simulations for dam inspection and supported government spatial projects.",
      "Conducted aerial spatial data collection and photogrammetry processing."
    ],
    technologies: ["Drone Surveying", "Photogrammetry", "Orthomosaics", "Digital Elevation Models (DEMs)", "XR Simulations"]
  }
];
