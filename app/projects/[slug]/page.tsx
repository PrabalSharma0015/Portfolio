import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyOverview from "@/components/case-study/CaseStudyOverview";
import CaseStudyGallery from "@/components/case-study/CaseStudyGallery";
import CadVsPhotogrammetry from "@/components/case-study/CadVsPhotogrammetry";
import CalibrationComparison from "@/components/case-study/CalibrationComparison";
import GeoAssistArchitecture from "@/components/case-study/GeoAssistArchitecture";
import VrMuseumCaseStudy from "@/components/case-study/VrMuseumCaseStudy";
import SoulGamesCaseStudy from "@/components/case-study/SoulGamesCaseStudy";
import CaseStudyTech from "@/components/case-study/CaseStudyTech";
import CaseStudyProcess from "@/components/case-study/CaseStudyProcess";
import BuildConfigSection from "@/components/case-study/BuildConfigSection";
import CaseStudyApplications from "@/components/case-study/CaseStudyApplications";
import CalibrationCodeSnippet from "@/components/case-study/CalibrationCodeSnippet";
import NextProject from "@/components/case-study/NextProject";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Prabal Sharma",
    };
  }

  return {
    title: `${project.title} | Prabal Sharma — XR Developer`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Determine if project has a dedicated custom interactive component
  const hasCustomCaseStudy =
    Boolean(project.geoAssistArch) ||
    Boolean(project.vrMuseumData) ||
    Boolean(project.soulGamesData) ||
    Boolean(project.staticVsDynamic);

  return (
    <article className="w-full min-h-screen py-12">
      <Container className="space-y-16">
        <CaseStudyHero project={project} />
        <CaseStudyGallery project={project} />
        <CaseStudyOverview project={project} />

        {/* Custom Dedicated Project Components */}
        <CadVsPhotogrammetry project={project} />
        <CalibrationComparison project={project} />
        <GeoAssistArchitecture project={project} />
        <VrMuseumCaseStudy project={project} />
        <SoulGamesCaseStudy project={project} />

        {/* Generic Case Study Sections (Only for standard projects without custom views) */}
        {!hasCustomCaseStudy && <CaseStudyTech project={project} />}
        {!hasCustomCaseStudy && <CaseStudyProcess project={project} />}
        {!hasCustomCaseStudy && <BuildConfigSection project={project} />}

        {/* Applications / Real-World Use Cases (for projects with applications array) */}
        {!project.geoAssistArch && <CaseStudyApplications project={project} />}

        {/* Calibration Snippets (Only for Camera Calibration Project) */}
        {project.slug === "camera-calibration-opencv" && <CalibrationCodeSnippet project={project} />}

        <NextProject currentProject={project} />
      </Container>
    </article>
  );
}
