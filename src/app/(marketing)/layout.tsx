import Link from "next/link";

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Acme
          </Link>
          <div className="space-x-6">
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Blog
            </Link>
            <Link href="/sign-in" className="text-blue-600 underline">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <main className="w-full flex-1 max-w-3xl mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="border-t border-gray-200 mt-12 px-6 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Acme Company. All rights reserved.
      </footer>
      {auth}
    </>
  );
}
