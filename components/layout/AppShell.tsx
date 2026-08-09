"use client";

import React from "react";
import { CursorProvider } from "@/context/CursorContext";
import CustomCursor from "@/components/layout/CustomCursor";
import GlobalBackground from "@/components/layout/GlobalBackground";
import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import PageTransition from "@/components/layout/PageTransition";
import Footer from "@/components/layout/Footer";
import { useLenis } from "@/hooks/useLenis";

export default function AppShell({ children }: { children: React.ReactNode }) {
  // Initialize Lenis smooth scroll engine
  useLenis();

  return (
    <CursorProvider>
      <LoadingScreen />
      <GlobalBackground />
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <main id="main-content" tabIndex={-1} className="flex-grow pt-24 min-h-[calc(100svh-6rem)] outline-none">
          {children}
        </main>
        <Footer />
      </PageTransition>
    </CursorProvider>
  );
}
