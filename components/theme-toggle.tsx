"use client";

import { useThemeMode } from "@/components/theme-provider";
import type { DisplayMode } from "@/lib/theme";

const MODES: Array<{ mode: DisplayMode; label: string }> = [
  { mode: "light", label: "Light" },
  { mode: "dark", label: "Dark" },
  { mode: "ascii", label: "ASCII" }
];

export function ThemeToggle() {
  const { mode, setMode } = useThemeMode();

  return (
    <div
      className="theme-toggle-group"
      role="group"
      aria-label="Display mode switcher"
      data-ascii-role="nav"
    >
      {MODES.map((entry) => {
        const active = mode === entry.mode;
        return (
          <button
            key={entry.mode}
            type="button"
            className={`theme-toggle-btn ${active ? "is-active" : ""}`}
            onClick={() => setMode(entry.mode)}
            aria-pressed={active}
          >
            {entry.label}
          </button>
        );
      })}
    </div>
  );
}
