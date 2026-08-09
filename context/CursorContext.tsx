"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type CursorType = "default" | "link" | "button" | "project" | "interactive";

interface CursorContextType {
  cursorType: CursorType;
  cursorText: string | null;
  setCursor: (type: CursorType, text?: string | null) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: "default",
  cursorText: null,
  setCursor: () => {},
  resetCursor: () => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorText, setCursorText] = useState<string | null>(null);

  const setCursor = useCallback((type: CursorType, text: string | null = null) => {
    setCursorType(type);
    setCursorText(text);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorType("default");
    setCursorText(null);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
