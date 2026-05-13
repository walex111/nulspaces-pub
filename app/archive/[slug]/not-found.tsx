import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          NULSPACES
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
          Page not found
        </h1>
        <p className="mt-4 text-zinc-600">
          The page you were looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-950 hover:bg-zinc-50"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
