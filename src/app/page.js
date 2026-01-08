import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold underline ">Users Directory</h1>
      <p className="text-gray-600"> Built with Next.js & Tailwind CSS</p>
      <Link href="/users"
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >View Users</Link>
    </div>
  );
}
