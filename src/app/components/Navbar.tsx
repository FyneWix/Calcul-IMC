import Link from "next/link"
import { Home, User } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-2 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Home size={24} />
        </Link>
        <h1 className="text-gray-700 text-2xl font-semibold">Calculatrice d&apos;IMC</h1>
        <Link
          href="/login"
          className="bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <User size={24} />
        </Link>
      </div>
    </nav>
  )
}

