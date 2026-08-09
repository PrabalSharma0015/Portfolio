import { Metadata } from "next";
import ProjectsSection from "@/components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects — Prabal Sharma",
  description: "Featured XR development projects by Prabal Sharma including Outdoor AR Model Placement System, AR Business Card, and MetaHuman Photogrammetry.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen py-12">
      <ProjectsSection />
    </div>
  );
}
