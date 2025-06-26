import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="text-blue-600 hover:underline font-medium">
        ← Go back home
      </Link>
    </main>
  );
}
