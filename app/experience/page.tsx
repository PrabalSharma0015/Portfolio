import { Metadata } from "next";
import ExperienceSection from "@/components/experience/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience — Prabal Sharma",
  description: "Professional experience timeline of Prabal Sharma as XR Developer and XR & Geospatial Intern at AgroCast Analytics Pvt. Ltd. | IIT Gandhinagar.",
};

export default function ExperiencePage() {
  return (
    <div className="w-full min-h-screen py-12">
      <ExperienceSection />
    </div>
  );
}
