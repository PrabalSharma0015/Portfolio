import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Prabal Sharma",
  description: "Get in touch with Prabal Sharma for XR development collaborations, spatial computing projects, and real-time 3D simulation opportunities.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen py-12">
      <ContactSection />
    </div>
  );
}
