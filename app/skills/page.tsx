import { Metadata } from "next";
import SkillsSection from "@/components/skills/SkillsSection";

export const metadata: Metadata = {
  title: "Skills — Prabal Sharma",
  description: "Technical skills breakdown of Prabal Sharma including Unity, Unreal Engine 5, Blender, Polycam, ARCore, Vuforia, and Python.",
};

export default function SkillsPage() {
  return (
    <div className="w-full min-h-screen py-12">
      <SkillsSection />
    </div>
  );
}
