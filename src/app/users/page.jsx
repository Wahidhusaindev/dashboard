import Link from "next/link";
import link from "next/link";

export default async function UserPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Users</h2>
     <p className="text-xl mb-2 text-pink-600">Select a user from the list below to see their full details.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="block bg-blue-500 p-4 rounded shadow-2xl hover:shadow-md transition"
          >
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-black font-bold">{user.email}</p>
          </Link>
        ))}
      </div>
      <Link href="/" className="inline-block bg-blue-500 mt-5 px-4 py-2 rounded hover:bg-blue-700">Back To Home</Link>
    </div>
  );
}
