"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/config/navigation";
import { useCursor } from "@/context/CursorContext";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { setCursor, resetCursor } = useCursor();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      // Focus close button on mount
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9990] flex flex-col justify-between bg-background/95 backdrop-blur-xl p-6 md:hidden select-none"
        >
          {/* Top Bar inside Menu */}
          <div className="flex justify-between items-center border-b border-border-subtle pb-4">
            <span className="text-technical">SPATIAL // MENU</span>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close Navigation Menu"
              className="p-2 text-foreground-secondary hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links Grid */}
          <nav aria-label="Mobile Navigation Links" className="my-auto space-y-6">
            {navigation.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    onMouseEnter={() => setCursor("link")}
                    onMouseLeave={resetCursor}
                    className={`flex items-center gap-4 text-3xl font-bold uppercase tracking-tight transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-2 py-1 ${
                      isActive ? "text-accent" : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    <span className="text-technical text-xs font-mono text-foreground-muted">
                      0{idx + 1}
                    </span>
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile Footer Meta */}
          <div className="border-t border-border-subtle pt-4 text-caption font-mono flex justify-between text-foreground-muted">
            <span>PRABAL SHARMA</span>
            <span>XR DEVELOPER</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
