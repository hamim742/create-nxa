import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} NXA App. Built with create-nxa.</p>
        <div className="flex items-center gap-6">
          <Link href={ROUTES.LOGIN} className="hover:text-zinc-900 dark:hover:text-white">Login</Link>
          <Link href={ROUTES.REGISTER} className="hover:text-zinc-900 dark:hover:text-white">Register</Link>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white">Next.js Docs</a>
        </div>
      </div>
    </footer>
  );
}
