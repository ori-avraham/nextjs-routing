"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-700 mb-4">
            {error.message || "Unexpected error occurred."}
          </p>

          <div className="flex gap-4">
            <button
              onClick={reset}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="text-blue-600 hover:underline self-center"
            >
              Go Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
