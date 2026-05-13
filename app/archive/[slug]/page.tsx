import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { useMDXComponents } from "@/components/mdxComponents";

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
    <main className="flex min-h-screen flex-col items-center px-6 pt-32 pb-24">
      <article className="w-full max-w-2xl">
        <nav className="mb-16 flex justify-center">
          <Link
            href="/archive"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-950 transition-colors"
          >
            [ Back to Archive ]
          </Link>
        </nav>

        <header className="mb-20 text-center">
          <div className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
            {post.category}
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-zinc-950 italic">
            {post.title}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-zinc-500 font-serif italic">
            {post.description}
          </p>

          <div className="mt-8 flex items-center justify-center space-x-3 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-200" />
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div
          className="prose prose-zinc dark:prose-invert max-w-none 
          prose-p:text-center prose-p:leading-8 prose-p:text-zinc-800 
          prose-headings:text-center prose-strong:text-zinc-950"
        >
          <MDXRemote source={post.content} components={useMDXComponents} />
        </div>
      </article>
    </main>
  );
}
