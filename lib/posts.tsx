import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostMeta } from "@/types/posts";

const POSTS_PATH = path.join(process.cwd(), "contents/posts");

function readPostFile(slug: string) {
  const mdxPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const mdPath = path.join(POSTS_PATH, `${slug}.md`);

  if (fs.existsSync(mdxPath)) return fs.readFileSync(mdxPath, "utf8");
  if (fs.existsSync(mdPath)) return fs.readFileSync(mdPath, "utf8");

  return null;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_PATH)) return [];

  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fileContents = readPostFile(slug);
  if (!fileContents) return null;

  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "NULSPACES"),
    category: String(data.category ?? "General"),
    published: data.published !== false,
    content,
    readingTime: stats.text,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => Boolean(post && post.published))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map(({ slug, title, description, date, author, category, published }) => ({
      slug,
      title,
      description,
      date,
      author,
      category,
      published,
    }));
}

export function getLatestPosts(count = 3): PostMeta[] {
  return getAllPosts().slice(0, count);
}

export function getAllCategories(): string[] {
  return [
    ...new Set(getAllPosts().map((post) => post.category ?? "General")),
  ].sort();
}
