import { posts } from "@/data/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        By {post.author} · {new Date(post.date).toLocaleDateString()}
      </p>

      <article className="text-gray-800 whitespace-pre-line leading-relaxed mb-6">
        {post.content.trim()}
      </article>

      <div className="text-sm text-gray-600 mb-2">
        Tags:{" "}
        {post.tags.map((tag) => (
          <Link
            href={`/blog/tags/${tag}`}
            key={tag}
            className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded mr-2"
          >
            #{tag}
          </Link>
        ))}
      </div>

      <div className="text-sm text-gray-500">
        {post.comments?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Comments ({post.comments.length})
            </h2>
            <ul className="space-y-4">
              {post.comments.map((comment) => (
                <li key={comment.id} className="border-t pt-4 text-gray-700">
                  <p className="text-sm text-gray-500 mb-1">
                    {comment.author} ·{" "}
                    {new Date(comment.date).toLocaleDateString()}
                  </p>
                  <p>{comment.text}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
