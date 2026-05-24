"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { PostMeta } from "@/types/posts";

export function ArchiveGrid({ allPosts }: { allPosts: PostMeta[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(allPosts.map((p) => p.category ?? "General"))),
  ];

  const filteredPosts =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => (p.category ?? "General") === activeCategory);

  const featuredPost = filteredPosts[0];
  const sidebarPost = filteredPosts[1];
  const secondaryPosts = filteredPosts.slice(2);

  return (
    <>
      <nav className="mb-16 flex flex-wrap justify-center gap-x-10 gap-y-4 border-b border-zinc-100 dark:border-zinc-900 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-all duration-300 py-2 px-1 relative
              ${
                activeCategory === cat
                  ? "text-ink-text dark:text-paper-text font-bold"
                  : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              }
            `}
          >
            {cat}
            {activeCategory === cat && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-ink-text dark:bg-paper-text" />
            )}
          </button>
        ))}
      </nav>

      <div className="space-y-16">
        {featuredPost && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-zinc-100 dark:border-zinc-900 pb-16">
            <div className="md:col-span-8">
              <BlogCard post={featuredPost} featured={true} />
            </div>

            {sidebarPost ? (
              <div className="md:col-span-4 md:border-l md:border-zinc-100 dark:md:border-zinc-900 md:pl-10">
                <BlogCard post={sidebarPost} featured={true} />
              </div>
            ) : (
              <div className="md:col-span-4 hidden md:block" />
            )}
          </div>
        )}

        {secondaryPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {secondaryPosts.map((post) => (
              <div
                key={post.slug}
                className="group transition-all duration-500"
              >
                <BlogCard post={post} featured={false} />
              </div>
            ))}
          </div>
        )}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          No entries found in {activeCategory}
        </div>
      )}
    </>
  );
}
