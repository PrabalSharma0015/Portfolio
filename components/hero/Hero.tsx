"use client";

import React from "react";
import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import HeroTechnicalMeta from "./HeroTechnicalMeta";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between px-4 sm:px-6 lg:px-12 pt-12 pb-8 overflow-hidden select-none">
      {/* Main Grid Content Layer */}
      <div className="mx-auto w-full max-w-7xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8">
        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <HeroText />
        </div>

        {/* Right Column: Spatial Data Visual */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>

      {/* Hero Perimeter Metadata & Scroll Cue */}
      <div className="mx-auto w-full max-w-7xl flex items-end justify-between pt-8 border-t border-border-subtle/50 z-10">
        <HeroTechnicalMeta />
        <div className="mx-auto xl:mx-0">
          <HeroScrollIndicator />
        </div>
      </div>
    </section>
  );
}
