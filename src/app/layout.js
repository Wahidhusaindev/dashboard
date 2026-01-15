import './globals.css'

export const metadata = {
  title: 'Next Dashboard',
  description: 'Beginner Next.js Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  )
}
