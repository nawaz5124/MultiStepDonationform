import { useState } from 'react'; // Import state for toggle functionality
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  return (
    <div>
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold">
            <Link href="/">Camel Foundation</Link>
          </h1>

          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">HOME</Link>
            <Link href="/about" className="hover:underline">ABOUT US</Link>
            <Link href="/causes" className="hover:underline">OUR CAUSES</Link>
            <Link href="/events" className="hover:underline">EVENTS</Link>
            <Link href="/media" className="hover:underline">MEDIA</Link>
            <Link href="/contact" className="hover:underline">CONTACT US</Link>
            <Link
              href="/donate"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
            >
              DONATE NOW
            </Link>
            <Link
              href="/volunteer"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
            >
              VOLUNTEER
            </Link>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 text-white shadow-lg md:hidden">
              <nav className="flex flex-col items-center space-y-4 py-6">
                <Link href="/" className="text-lg font-medium hover:underline hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>HOME</Link>
                <Link href="/about" className="text-lg font-medium hover:underline hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
                <Link href="/causes" className="text-lg font-medium hover:underline hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>OUR CAUSES</Link>
                <Link href="/events" className="text-lg font-medium hover:underline hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>EVENTS</Link>
                <Link href="/media" className="text-lg font-medium hover:underline hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>MEDIA</Link>
                <Link href="/contact" className="text-lg font-medium hover:underline hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
                <Link
                  href="/donate"
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DONATE NOW
                </Link>
                <Link
                  href="/volunteer"
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VOLUNTEER
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}