import Link from "next/link";

export const metadata = {
  title: "Product Dashboard",
  description: "Product listing page",
};

export default async function ProductPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">Products</h2>
      <p className="text-xl mb-4 text-pink-600">
        Select a product to see full details.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/users/${product.id}`}
            className="block bg-blue-500 p-4 rounded shadow-2xl hover:shadow-md transition"
          >
            <h3 className="font-semibold text-white">
              {product.title}
            </h3>
            <p className="text-sm text-black font-bold">
              ₹ {product.price}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="inline-block bg-blue-500 mt-6 px-4 py-2 rounded hover:bg-blue-700 text-white"
      >
        Back To Home
      </Link>
    </div>
  );
}
