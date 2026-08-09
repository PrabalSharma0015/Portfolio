import React from "react";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import FeaturedProjectsPreview from "@/components/projects/FeaturedProjectsPreview";
import ContactCTA from "@/components/contact/ContactCTA";

export default function Home() {
  return (
    <div className="w-full min-h-screen space-y-16 pb-16">
      {/* 1. Hero Section with Real 3D Meta Quest 3 GLB Model */}
      <Hero />

      {/* 2. Featured Top Projects Preview */}
      <FeaturedProjectsPreview />

      {/* 3. Quick Contact Banner CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCTA />
      </div>
    </div>
  );
}
