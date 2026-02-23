import { ThemeToggle } from "@/components/theme-toggle";
import { ThemedLogo } from "@/components/themed-logo";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto w-full max-w-8xl px-6 py-4 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="inline-flex items-center gap-3" aria-label="Liqua home">
            <ThemedLogo width={34} height={42} className="h-10 w-auto" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
              Liqua
            </span>
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-6 text-sm text-[var(--muted)]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-[var(--text)]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a href="#contact" className="button-secondary">
              Request access
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <a href="#contact" className="button-secondary px-4 py-2 text-xs">
              Access
            </a>
          </div>
        </div>

        <nav aria-label="Primary mobile" className="-mx-2 mt-4 overflow-x-auto xl:hidden">
          <ul className="flex min-w-max items-center gap-4 px-2 pb-1 text-sm text-[var(--muted)]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="whitespace-nowrap transition hover:text-[var(--text)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
