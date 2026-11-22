import Link from "next/link";
import {
  ArrowRight,
  Database,
  LayoutDashboard,
  Palette,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";

const features = [
  { icon: Rocket, title: "Next.js 16 App Router", desc: "Latest Next.js with Turbopack, React 19 and the React Compiler enabled out of the box." },
  { icon: Palette, title: "Tailwind CSS v4", desc: "Modern utility-first styling with dark mode and responsive layouts already wired up." },
  { icon: Database, title: "Redux Toolkit + RTK Query", desc: "Store, typed hooks and a base API slice ready for your endpoints." },
  { icon: ShieldCheck, title: "Authentication Flow", desc: "AuthContext with login, register, logout and persistent session state." },
  { icon: LayoutDashboard, title: "Dashboard Layout", desc: "Responsive admin layout with sidebar, theme toggle and overview page." },
  { icon: Wrench, title: "Developer Utilities", desc: "useDebounce, useLocalStorage, formatDate, cn() helper, ESLint and Prettier." },
];

const stack = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Redux Toolkit", "Axios", "next-themes", "Lucide Icons"];

const structure = `src/
├── app/
│   ├── (authLayout)/       login, register
│   ├── (dashboardLayout)/  dashboard
│   └── (commonLayout)/     landing page
├── components/             shared UI
├── context/                AuthContext
├── redux/                  store & API slices
├── hooks/  lib/  utils/    helpers
└── constants/  schemas/  types/`;

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_65%)]" />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Your project is ready
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Build your next product{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">faster</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A production-ready Next.js starter with Tailwind CSS v4, Redux Toolkit and authentication — fully configured so you can focus on features, not setup.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={ROUTES.DASHBOARD.HOME}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Open Dashboard <ArrowRight size={16} />
            </Link>
            <Link
              href={ROUTES.REGISTER}
              className="inline-flex h-12 items-center rounded-xl border border-zinc-300 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
            >
              Create account
            </Link>
          </div>
          <p className="mt-8 font-mono text-sm text-zinc-500">
            Edit <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">src/app/(commonLayout)/page.tsx</code> to get started
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Everything you need, included</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Skip the boilerplate and start shipping.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section id="stack" className="border-y border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Modern tech stack</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section id="structure" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Clean, scalable structure</h2>
          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            Route groups separate public, auth and dashboard layouts. Shared logic lives in focused folders, so your project stays organized as it grows.
          </p>
          <Link href={ROUTES.LOGIN} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
            Try the login page <ArrowRight size={14} />
          </Link>
        </div>
        <pre className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 font-mono text-sm leading-7 text-zinc-300">
          {structure}
        </pre>
      </section>
    </main>
  );
}
