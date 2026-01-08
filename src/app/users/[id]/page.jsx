import Link from "next/link";
import { notFound } from "next/navigation";

export default async function UserDetail({ params }) {
  const { id } = await params; // 🔑 REQUIRED in latest Next.js

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const user = await res.json();

  return (
  <div className="max-w-xl mx-auto rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
  {/* Header */}
  <div className="rounded-t-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
    <h1 className="text-3xl font-semibold">{user.name}</h1>
    <p className="mt-1 text-sm opacity-90">{user.email}</p>
  </div>

  {/* Body */}
  <div className="p-6 space-y-4">
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-500">📞 Phone</span>
      <span className="text-gray-800">{user.phone}</span>
    </div>

    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">📍 Address</p>
      <p className="text-gray-700 leading-relaxed">
        {user.address.street}, {user.address.suite}<br />
        {user.address.city} – {user.address.zipcode}
      </p>
    </div>

    {/* Action */}
    <div className="pt-4">
      <Link
        href="/users"
        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
      >
        ← Back to Users
      </Link>
    </div>
  </div>
</div>

  );
}
