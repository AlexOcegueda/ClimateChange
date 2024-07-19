// src/components/NavBar.tsx

'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent z-20 relative">
      <nav className="space-x-4">
        <img class="h-[50px] w-auto" src="/assets/earth_logo.png" alt="home" /></nav>
      <nav className="space-x-4 flex">
        <Link href="https://ocegueda.dev/" className="nav-link text-lg font-semibold text-white">portfolio</Link>
        <Link href="https://github.com/AlexOcegueda/ClimateChange" className="nav-link text-lg font-semibold text-white">github</Link>
      </nav>
    </header>
  );
}
