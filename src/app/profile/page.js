'use client'
import Navbar from '../components/Navbar'

export default function Profile() {
  const email =
    typeof window !== 'undefined'
      ? localStorage.getItem('user')
      : ''

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-xl font-bold">Profile</h1>
        <p className="mt-2">Email: {email}</p>
      </div>
    </>
  )
}
