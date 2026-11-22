"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Zap } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={ROUTES.HOME} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
            <Zap size={16} />
          </span>
          <span className="text-zinc-900 dark:text-white">NXA App</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
          <a href="#features" className="transition-colors hover:text-zinc-900 dark:hover:text-white">Features</a>
          <a href="#stack" className="transition-colors hover:text-zinc-900 dark:hover:text-white">Tech Stack</a>
          <a href="#structure" className="transition-colors hover:text-zinc-900 dark:hover:text-white">Structure</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>
          <Link
            href={ROUTES.LOGIN}
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 sm:block"
          >
            Sign in
          </Link>
          <Link
            href={ROUTES.DASHBOARD.HOME}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
