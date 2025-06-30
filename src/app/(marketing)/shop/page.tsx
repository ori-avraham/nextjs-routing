import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/shop"; // assume this contains image paths

export default function ShopPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Shop Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((p) => (
          <li
            key={p.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="relative h-40 w-full mb-4 rounded overflow-hidden">
              <Image
                src={p.images[0]}
                alt={p.name}
                fill
                className="object-cover rounded"
                // sizes="(max-width: 640px) 100vw, 50vw"
                sizes="(min-width: 760px) 262px, (min-width: 640px) calc(12vw + 164px), (min-width: 440px) calc(100vw - 177px), 233px"
                priority={true}
              />
            </div>
            <h2 className="text-xl font-semibold mb-1">
              <Link href={`/shop/${p.slug}`} className="hover:underline">
                {p.name}
              </Link>
            </h2>
            <p className="text-gray-700">${(p.price / 100).toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
