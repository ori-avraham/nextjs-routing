import { posts } from "@/data/blog";
import Link from "next/link";

export default function TagsPage() {
  // Extract unique tags from all posts
  const uniqueTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Tags</h1>
      <div className="flex flex-wrap gap-3">
        {uniqueTags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/tags/${tag}`}
            className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200 transition"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </main>
  );
}
