"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import {
  DISPLAY_MODES,
  THEME_STORAGE_KEY,
  type DisplayMode
} from "@/lib/theme";

type ThemeContextValue = {
  mode: DisplayMode;
  setMode: (mode: DisplayMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyMode(mode: DisplayMode): void {
  const root = document.documentElement;
  root.dataset.mode = mode;

  if (mode === "ascii") {
    root.dataset.theme = "dark";
    root.dataset.style = "ascii";
    root.classList.add("dark");
    return;
  }

  root.dataset.theme = mode;
  root.dataset.style = "default";

  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function resolveInitialMode(): DisplayMode {
  if (typeof window === "undefined") return "light";

  const rootMode = document.documentElement.dataset.mode;
  if (rootMode && DISPLAY_MODES.includes(rootMode as DisplayMode)) {
    return rootMode as DisplayMode;
  }

  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved && DISPLAY_MODES.includes(saved as DisplayMode)) {
    return saved as DisplayMode;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DisplayMode>(resolveInitialMode);

  useEffect(() => {
    applyMode(mode);
  }, [mode]);

  const setMode = useCallback((nextMode: DisplayMode) => {
    localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    setModeState(nextMode);
  }, []);

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeMode(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeMode must be used within ThemeProvider");
  return context;
}
