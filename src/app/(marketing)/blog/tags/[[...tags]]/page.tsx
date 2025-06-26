import { posts } from "@/data/blog";
import Link from "next/link";

export default async function TaggedPostsPage({
  params,
}: {
  params: Promise<{ tags: string[] }>;
}) {
  const { tags } = await params;

  const uniqueTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  if (!tags) {
    return (
      <>
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
      </>
    );
  }
  const activeTags = tags.map((tag) => tag.toLowerCase());

  const filteredPosts = posts.filter((post) =>
    activeTags.every((tag) =>
      post.tags.map((t) => t.toLowerCase()).includes(tag)
    )
  );

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Posts tagged:{" "}
        {activeTags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded mr-2"
          >
            #{tag}
          </span>
        ))}
      </h1>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">No posts found with those tags.</p>
      ) : (
        <ul className="space-y-6">
          {filteredPosts.map((post) => (
            <li
              key={post.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition"
            >
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                By {post.author} · {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                {post.content.trim().split(" ").slice(0, 20).join(" ")}...
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
