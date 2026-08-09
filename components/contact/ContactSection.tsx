"use client";

import React from "react";
import ContactIntro from "./ContactIntro";
import ContactCTA from "./ContactCTA";
import ContactLinks from "./ContactLinks";
import { Container } from "@/components/ui/Container";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 space-y-16 border-t border-border-subtle/50 relative">
      <Container className="space-y-12">
        {/* Intro */}
        <ContactIntro />

        {/* Primary Magnetic CTA */}
        <ContactCTA />

        {/* Metadata & Social Channels */}
        <ContactLinks />
      </Container>
    </section>
  );
}
