export const DURATION = {
  MICRO: 0.15,
  FAST: 0.3,
  MEDIUM: 0.5,
  SLOW: 0.8,
  CINEMATIC: 1.2,
};

export const EASE = {
  // Smooth, cinematic ease
  default: [0.22, 1, 0.36, 1] as const,
  // Snappy, technical ease
  technical: [0.16, 1, 0.3, 1] as const,
  linear: "linear" as const,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: DURATION.MEDIUM, 
      ease: EASE.default 
    } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const revealClip = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: DURATION.SLOW,
      ease: EASE.default
    }
  }
};

export const subtleScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATION.MEDIUM,
      ease: EASE.default
    }
  }
};
