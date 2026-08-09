import React from "react";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle/50 py-8 px-4 sm:px-8 bg-background/80 text-foreground-muted select-none">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-foreground uppercase tracking-tight">PRABAL SHARMA</span>
          <span className="text-technical text-[10px] text-accent border-l border-border-subtle pl-3">
            XR DEVELOPER
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span>© 2026 PRABAL SHARMA. ALL RIGHTS RESERVED.</span>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
