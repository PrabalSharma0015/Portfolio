"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { useCursor } from "@/context/CursorContext";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { setCursor, resetCursor } = useCursor();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9980] px-4 md:px-8 py-4 transition-all duration-300">
        <div className="mx-auto max-w-7xl flex items-center justify-between glass-panel px-6 py-3 border border-border-subtle/80 bg-background/60 backdrop-blur-md rounded-md">
          {/* Logo / Identity */}
          <Link
            href="/"
            onMouseEnter={() => setCursor("link", "HOME")}
            onMouseLeave={resetCursor}
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-bold tracking-tight text-foreground text-sm uppercase">
              Prabal Sharma
            </span>
            <span className="text-technical text-[10px] hidden sm:inline-block border-l border-border-subtle pl-3 text-foreground-muted">
              XR DEVELOPER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setCursor("link")}
                  onMouseLeave={resetCursor}
                  className={`relative text-xs uppercase tracking-wider font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-1 ${
                    isActive ? "text-foreground font-semibold" : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            onMouseEnter={() => setCursor("button")}
            onMouseLeave={resetCursor}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open Navigation Menu"
            className="md:hidden flex items-center gap-2 p-1.5 text-foreground-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
          >
            <span className="text-technical text-[10px]">MENU</span>
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
