import React from "react";
import { siteConfig } from "@/config/site";
import { profileData } from "@/data/profile";
import { contactData } from "@/data/contact";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    url: siteConfig.url,
    description: profileData.headline,
    sameAs: contactData.socials.map((s) => s.url),
    knowsAbout: [
      "XR Development",
      "Augmented Reality",
      "Virtual Reality",
      "Unity",
      "Unreal Engine 5",
      "3D Geospatial Visualization",
      "Photogrammetry",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
