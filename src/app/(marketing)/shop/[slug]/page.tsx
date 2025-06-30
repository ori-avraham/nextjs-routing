import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/shop";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 text-lg mb-4">
        ${(product.price / 100).toFixed(2)}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {product.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${product.name} image ${i + 1}`}
            width={600}
            height={400}
            loading="eager"
            priority={true}
            className="rounded"
          />
        ))}
      </div>

      <p className="text-gray-800 mb-6">{product.description}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Variants</h2>
        <ul className="space-y-2">
          {product.variants.map((v) => (
            <li key={v.id} className="flex justify-between items-center">
              <span>{v.name}</span>
              <span className="text-sm text-gray-500">
                {v.stock > 0 ? `${v.stock} in stock` : "Out of stock"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        disabled={product.variants.every((v) => v.stock === 0)}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {product.variants.some((v) => v.stock > 0)
          ? "Add to Cart"
          : "Out of Stock"}
      </button>

      <div className="mt-6">
        <p className="text-sm text-gray-500">Tags:</p>
        <div className="flex gap-2 mt-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
