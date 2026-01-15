import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const product = await res.json();

  return (
    <div className="max-w-xl mx-auto rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
      
      {/* Header */}
      <div className="rounded-t-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="mt-1 text-sm opacity-90">₹ {product.price}</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-contain rounded-lg"
        />

        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <p className="text-sm text-gray-500">
          Category: {product.category}
        </p>

        {/* Action */}
        <div className="pt-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
