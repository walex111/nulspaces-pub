"use client";

import Link from "next/link";
import Image from "next/image";
import { Archive, User, Coffee } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 dark:bg-ink/80 backdrop-blur-md transition-colors duration-300 border-b border-zinc-200/20 dark:border-zinc-800/20">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-75"
          aria-label="Go to homepage"
        >
          <Image
            src="/NULLSPACES.svg"
            alt="NULSPACES logo"
            width={82}
            height={40}
            className="dark:invert transition-all"
            priority
          />
        </Link>

        <nav className="flex items-center gap-3">
          <a
            href="https://ko-fi.com/nulspaces"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-ink-text dark:hover:text-paper-text transition-colors mr-2"
          >
            [ Support ]
          </a>
          <Link
            href="/archive"
            className="inline-flex h-11 w-11 items-center justify-center text-zinc-700 dark:text-zinc-400 transition-colors hover:text-ink-text dark:hover:text-paper-text"
            aria-label="Open archive"
            title="Archive"
          >
            <Archive className="h-5 w-5" aria-hidden="true" />
          </Link>

          <Link
            href="/profile"
            className="inline-flex h-11 w-11 items-center justify-center text-zinc-700 dark:text-zinc-400 transition-colors hover:text-ink-text dark:hover:text-paper-text"
            aria-label="Open profile page"
            title="Profile"
          >
            <User className="h-5 w-5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
