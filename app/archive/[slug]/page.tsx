import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { mdxComponents } from "@/components/mdxComponents";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-32 pb-24 bg-paper dark:bg-ink transition-colors duration-300">
      <article className="w-full max-w-2xl">
        <nav className="mb-16 flex justify-center">
          <Link
            href="/archive"
            className="group relative font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-ink-text dark:hover:text-paper-text transition-colors duration-300 py-2 px-4"
          >
            [ Back to Archive ]
          </Link>
        </nav>

        <header className="mb-20 text-center">
          <div className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            {post.category}
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-ink-text dark:text-paper-text italic leading-[1.15]">
            {post.title}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 font-serif italic opacity-85">
            {post.description}
          </p>

          <div className="mt-8 flex items-center justify-center space-x-3 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="w-full tracking-normal">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
