import { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";

export const metadata: Metadata = {
  title: "About — Prabal Sharma",
  description: "Learn about Prabal Sharma's profile, XR development workflow, photogrammetry background, and spatial computing methodology.",
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen py-12">
      <AboutSection />
    </div>
  );
}
