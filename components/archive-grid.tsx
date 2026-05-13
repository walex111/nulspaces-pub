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

  return (
    <>
      <nav className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-all
              ${
                activeCategory === cat
                  ? "text-zinc-950 font-bold underline underline-offset-8"
                  : "text-zinc-400 hover:text-zinc-600"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
        {filteredPosts.map((post, index) => {
          const isMain = index === 0;
          const isSidebar = index === 1;
          const colSpan = isMain
            ? "md:col-span-8"
            : isSidebar
              ? "md:col-span-4"
              : "md:col-span-6";

          return (
            <div
              key={post.slug}
              className={`
                ${colSpan}
                group border-b border-zinc-100 pb-8 md:pb-0 md:border-b-0 
                md:border-r last:md:border-r-0 md:pr-10 last:md:pr-0 transition-all duration-500
              `}
            >
              <BlogCard post={post} featured={isMain || isSidebar} />
            </div>
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
          No entries found in {activeCategory}
        </div>
      )}
    </>
  );
}
