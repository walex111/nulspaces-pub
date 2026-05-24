import { getAllPosts } from "@/lib/posts";
import { ArchiveGrid } from "@/components/archive-grid";

export const metadata = {
  title: "Archive | NULSPACES",
  description: "A chronological index of intentional thought.",
};

export default function ArchivePage() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-paper dark:bg-ink px-6 pt-40 pb-24 transition-colors duration-300">
      <div className="mx-auto max-w-4xl w-full">
        <ArchiveGrid allPosts={allPosts} />
      </div>
    </main>
  );
}
