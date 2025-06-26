"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // remove empty

  let path = "";

  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      {segments.map((segment, index) => {
        path += "/" + segment;

        // Capitalize first letter and replace hyphens with spaces for readability
        const label =
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

        const isLast = index === segments.length - 1;

        return (
          <span key={path} className="inline-flex items-center">
            {index > 0 && <span className="mx-2 select-none">›</span>}
            {isLast ? (
              <span className="font-semibold text-gray-900">{label}</span>
            ) : (
              <Link href={path} className="text-blue-600 hover:underline">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
