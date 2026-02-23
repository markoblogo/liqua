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
  THEME_STORAGE_KEY,
  type DisplayState,
  type ThemeStyle,
  type ThemeTone
} from "@/lib/theme";

type ThemeContextValue = {
  theme: ThemeTone;
  style: ThemeStyle;
  toggleTheme: () => void;
  toggleStyle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyState(state: DisplayState): void {
  const root = document.documentElement;
  root.dataset.theme = state.theme;
  root.dataset.style = state.style;

  if (state.theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function safeParseState(raw: string | null): DisplayState | null {
  if (!raw) return null;

  if (raw === "light" || raw === "dark") {
    return { theme: raw, style: "default" };
  }

  if (raw === "ascii") {
    const theme: ThemeTone = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return { theme, style: "ascii" };
  }

  try {
    const parsed = JSON.parse(raw);
    const theme: ThemeTone = parsed?.theme === "dark" ? "dark" : "light";
    const style: ThemeStyle = parsed?.style === "ascii" ? "ascii" : "default";
    return { theme, style };
  } catch {
    return null;
  }
}

function resolveInitialState(): DisplayState {
  if (typeof window === "undefined") {
    return { theme: "light", style: "default" };
  }

  const root = document.documentElement;
  const fromDataset: DisplayState | null =
    root.dataset.theme && root.dataset.style
      ? {
          theme: root.dataset.theme === "dark" ? "dark" : "light",
          style: root.dataset.style === "ascii" ? "ascii" : "default"
        }
      : null;

  if (fromDataset) return fromDataset;

  const saved = safeParseState(localStorage.getItem(THEME_STORAGE_KEY));
  if (saved) return saved;

  return {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    style: "default"
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DisplayState>(resolveInitialState);

  useEffect(() => {
    applyState(state);
  }, [state]);

  const toggleTheme = useCallback(() => {
    setState((prev) => {
      const next: DisplayState = {
        theme: prev.theme === "dark" ? "light" : "dark",
        style: prev.style
      };
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleStyle = useCallback(() => {
    setState((prev) => {
      const next: DisplayState = {
        theme: prev.theme,
        style: prev.style === "ascii" ? "default" : "ascii"
      };
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme: state.theme,
      style: state.style,
      toggleTheme,
      toggleStyle
    }),
    [state.theme, state.style, toggleTheme, toggleStyle]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeMode(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeMode must be used within ThemeProvider");
  return context;
}
