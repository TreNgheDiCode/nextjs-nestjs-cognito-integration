"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <NextThemesProvider {...props}>
      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          mounted ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </NextThemesProvider>
  );
}
