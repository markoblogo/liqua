import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-8xl px-6 py-4 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="inline-flex items-center gap-3" aria-label="Liqua home">
            <Image
              src="/liqua-logo.png"
              alt="Liqua logo icon"
              width={34}
              height={42}
              priority
              className="h-10 w-auto"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              Liqua
            </span>
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-6 text-sm text-black/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-black" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-black px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
          >
            Request access
          </a>
        </div>

        <nav aria-label="Primary mobile" className="-mx-2 mt-4 overflow-x-auto xl:hidden">
          <ul className="flex min-w-max items-center gap-4 px-2 pb-1 text-sm text-black/75">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="whitespace-nowrap transition hover:text-black" href={item.href}>
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
