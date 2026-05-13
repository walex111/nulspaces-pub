import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 bg-paper dark:bg-ink transition-colors duration-300">
      <div className="text-center">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-500">
          NULSPACES // 404
        </p>

        <h1 className="font-serif text-4xl italic tracking-tight text-ink-text dark:text-paper-text">
          Entry not found
        </h1>

        <p className="mt-4 font-serif italic text-zinc-500 dark:text-zinc-400">
          The requested coordinate does not exist in this archive.
        </p>

        <Link
          href="/"
          className="mt-12 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-ink-text dark:hover:text-paper-text transition-colors"
        >
          [ Return to Origin ]
        </Link>
      </div>
    </main>
  );
}
