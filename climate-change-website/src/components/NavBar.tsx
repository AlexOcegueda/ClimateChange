// src/components/NavBar.tsx

'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent z-20 relative">
      <nav className="space-x-4">
        <Link href="/" className="text-lg font-semibold text-gray-900">home</Link>
      </nav>
      <nav className="space-x-4 flex">
        <Link href="/about" className="nav-link text-lg font-semibold text-white">about us</Link>
        <Link href="/locations" className="nav-link text-lg font-semibold text-white">locations</Link>
        <Link href="/contact" className="nav-link text-lg font-semibold text-white">contact us</Link>
      </nav>
    </header>
  );
}
