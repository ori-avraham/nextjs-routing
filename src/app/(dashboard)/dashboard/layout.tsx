import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="w-48 bg-gray-800 text-white p-4">
        <Link href="/" className="text-lg font-bold">
          Acme Inc.
        </Link>
        <ul className="space-y-3 mt-6">
          <li>
            <Link
              href="/dashboard"
              className="block px-2 py-1 rounded hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              className="block px-2 py-1 rounded hover:bg-gray-700"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="block px-2 py-1 rounded hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
