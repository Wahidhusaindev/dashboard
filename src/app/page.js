'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (email !== 'admin') return alert('Enter email')
    localStorage.setItem('user', email)
    router.push('/dashboard')
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-500 p-6 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  )
}
