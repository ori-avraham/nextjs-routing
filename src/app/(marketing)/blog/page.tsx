import { posts } from "@/data/blog";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Blog Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
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
            <p className="text-gray-700">{post.content.trim()}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
