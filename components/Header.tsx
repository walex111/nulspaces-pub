"use client";

import Link from "next/link";
import Image from "next/image";
import { Archive, User } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
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
            priority
          />
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/archive"
            className="inline-flex h-11 w-11 items-center justify-center text-zinc-700 transition-colors hover:text-zinc-950"
            aria-label="Open archive"
            title="Archive"
          >
            <Archive className="h-5 w-5" aria-hidden="true" />
          </Link>

          <Link
            href="/profile"
            className="inline-flex h-11 w-11 items-center justify-center text-zinc-700 transition-colors hover:text-zinc-950"
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
