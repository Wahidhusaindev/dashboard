'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <nav className="p-4 shadow flex justify-between">
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <button onClick={logout} className="text-red-500">
        Logout
      </button>
    </nav>
  )
}
