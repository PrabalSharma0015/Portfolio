"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export const PageShell = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};
