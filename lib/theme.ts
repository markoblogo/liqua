export const THEME_STORAGE_KEY = "liqua_display_mode";

export type ThemeTone = "light" | "dark";
export type ThemeStyle = "default" | "ascii";

export type DisplayState = {
  theme: ThemeTone;
  style: ThemeStyle;
};

function applyState(rootVar: string): string {
  return `
    const apply = (state) => {
      const root = ${rootVar};
      root.dataset.theme = state.theme;
      root.dataset.style = state.style;
      if (state.theme === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
    };`;
}

export function getThemeInitScript(): string {
  return `(() => {
    const root = document.documentElement;
    const key = "${THEME_STORAGE_KEY}";
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const fallback = { theme: systemDark ? "dark" : "light", style: "default" };
    let next = fallback;

    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        if (raw === "light" || raw === "dark") {
          next = { theme: raw, style: "default" };
        } else if (raw === "ascii") {
          next = { theme: systemDark ? "dark" : "light", style: "ascii" };
        } else {
          const parsed = JSON.parse(raw);
          const theme = parsed?.theme === "dark" ? "dark" : "light";
          const style = parsed?.style === "ascii" ? "ascii" : "default";
          next = { theme, style };
        }
      }
    } catch {
      next = fallback;
    }

    ${applyState("root")}
    apply(next);
  })();`;
}
