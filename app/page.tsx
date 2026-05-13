import Link from "next/link";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getLatestPosts, getPostBySlug } from "@/lib/posts";
import { useMDXComponents } from "@/components/mdxComponents";

export default function HomePage() {
  const latestPosts = getLatestPosts(1);
  const latest = latestPosts[0];

  if (!latest) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 bg-paper dark:bg-ink transition-colors duration-300">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            No posts archive found.
          </p>
        </div>
      </main>
    );
  }

  const post = getPostBySlug(latest.slug);
  if (!post) return null;

  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-40 pb-16 bg-paper dark:bg-ink transition-colors duration-300">
      <article className="mx-auto max-w-2xl w-full">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-4xl font-light tracking-tight text-ink-text dark:text-paper-text md:text-6xl italic">
            {post.title}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 font-serif italic">
            {post.description}
          </p>
          <div className="mt-8 flex items-center justify-center space-x-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={useMDXComponents} />
        </div>

        <footer className="flex flex-col items-center pt-12">
          <Link
            href="/archive"
            className="group relative flex flex-col items-center"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-400 group-hover:text-ink-text dark:group-hover:text-paper-text transition-colors">
              Enter the Archive
            </span>
          </Link>
        </footer>
      </article>
    </main>
  );
}
