"use client";

import React from "react";
import { contactData } from "@/data/contact";
import { useCursor } from "@/context/CursorContext";

export default function ContactLinks() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border-subtle/50 pt-8">
      {/* Location */}
      <div className="space-y-1">
        <span className="text-technical text-[10px] text-foreground-muted block">LOCATION</span>
        <span className="font-mono text-sm text-foreground font-semibold">{contactData.location}</span>
      </div>

      {/* Social Channels */}
      <div className="space-y-1">
        <span className="text-technical text-[10px] text-foreground-muted block">CHANNELS</span>
        <div className="flex items-center gap-4 font-mono text-sm">
          {contactData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor("link", social.name)}
              onMouseLeave={resetCursor}
              className="text-foreground-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-border-subtle hover:decoration-accent"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Availability Status */}
      <div className="space-y-1 sm:text-right">
        <span className="text-technical text-[10px] text-foreground-muted block">AVAILABILITY</span>
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>OPEN FOR XR COLLABORATIONS</span>
        </div>
      </div>
    </div>
  );
}
