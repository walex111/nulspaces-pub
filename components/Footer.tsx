export default function Footer() {
  const links = [
    { name: "Instagram", url: "https://www.instagram.com/nulspaces/" },
    { name: "YouTube", url: "https://www.youtube.com/@nulspaces" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-12 px-6 bg-paper dark:bg-ink transition-colors duration-300">
      <div className="mx-auto max-w-5xl border-t border-zinc-200 dark:border-zinc-800/50 pt-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="font-mono text-xl tracking-tight text-ink-text dark:text-paper-text">
              NULSPACES
            </h2>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              A Spatial Archive / {currentYear}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-ink-text dark:hover:text-paper-text"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://ko-fi.com/nulspaces"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-ink-text dark:hover:text-paper-text transition-colors mr-2"
            >
              [ Support ]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
