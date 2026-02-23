"use client";

import { useThemeMode } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, style, toggleTheme, toggleStyle } = useThemeMode();

  const nextThemeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const styleLabel = style === "ascii" ? "Switch to default style" : "Switch to ASCII style";

  return (
    <div className="theme-toggle-group" role="group" aria-label="Display controls" data-ascii-role="nav">
      <button
        type="button"
        className="theme-icon-btn"
        onClick={toggleTheme}
        aria-label={nextThemeLabel}
        title={nextThemeLabel}
      >
        {theme === "dark" ? "☀" : "☾"}
      </button>

      <button
        type="button"
        className={`theme-toggle-btn ${style === "ascii" ? "is-active" : ""}`}
        onClick={toggleStyle}
        aria-label={styleLabel}
        title={styleLabel}
      >
        {style === "ascii" ? "Default" : "ASCII"}
      </button>
    </div>
  );
}
