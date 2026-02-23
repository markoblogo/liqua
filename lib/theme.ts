export const THEME_STORAGE_KEY = "liqua_display_mode";

export type DisplayMode = "light" | "dark" | "ascii";

export const DISPLAY_MODES: DisplayMode[] = ["light", "dark", "ascii"];

export function getThemeInitScript(): string {
  return `(() => {
    const root = document.documentElement;
    const key = "${THEME_STORAGE_KEY}";
    const valid = new Set(["light", "dark", "ascii"]);
    const saved = localStorage.getItem(key);
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mode = valid.has(saved) ? saved : (systemDark ? "dark" : "light");

    const apply = (nextMode) => {
      root.dataset.mode = nextMode;
      if (nextMode === "ascii") {
        root.dataset.theme = "dark";
        root.dataset.style = "ascii";
        root.classList.add("dark");
      } else {
        root.dataset.theme = nextMode;
        root.dataset.style = "default";
        if (nextMode === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
      }
    };

    apply(mode);
  })();`;
}
