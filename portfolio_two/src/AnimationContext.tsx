"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// 1. Typ für unseren Context-Wert
interface AnimationContextType {
  animationDone: boolean;
  setAnimationDone: (value: boolean) => void;
}

// 2. Context selbst (mit Defaultwert = undefined)
const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

// 3. Provider-Komponente
export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <AnimationContext.Provider value={{ animationDone, setAnimationDone }}>
      {children}
    </AnimationContext.Provider>
  );
}

// 4. Custom Hook für bequemen Zugriff
export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
