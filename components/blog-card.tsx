import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/types/posts";

interface BlogCardProps {
  post: PostMeta;
  featured?: boolean;
}

export function BlogCard({ post, featured }: BlogCardProps) {
  return (
    <Link href={`/archive/${post.slug}`} className="block group h-full">
      <article className="h-full border-t border-zinc-200 dark:border-zinc-800/60 pt-4 transition-colors hover:border-ink-text dark:hover:border-paper-text">
        <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-500">
          <span>{post.category ?? "General"}</span>
          <span className="h-px w-6 bg-zinc-300 dark:bg-zinc-700" />
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMM d, yyyy")}
          </time>
        </div>

        <h3
          className={`
          mb-3 leading-[1.1] font-semibold tracking-tight text-ink-text dark:text-paper-text group-hover:opacity-80 transition-opacity
          ${featured ? "text-2xl md:text-3xl lg:text-4xl" : "text-[1.35rem] md:text-[1.6rem]"}
        `}
        >
          {post.title}
        </h3>

        <p
          className={`
          mb-5 text-zinc-600 dark:text-zinc-400 leading-6 
          ${featured ? "text-lg md:text-lg max-w-2xl" : "text-sm max-w-prose line-clamp-3"}
        `}
        >
          {post.description}
        </p>

        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          <span>{post.author ?? "NULSPACES"}</span>
          <div className="flex items-center gap-2">
            <span className="opacity-0 transition-opacity group-hover:opacity-100 font-mono italic lowercase tracking-normal">
              read entry
            </span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
