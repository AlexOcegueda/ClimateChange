'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const pages = [
  { label: '00', href: '/' },
  { label: '01', href: '/contents/introduction' },
  { label: '02', href: '/contents/sealevels' },
  { label: '03', href: '/contents/co2' },
  { label: '04', href: '/contents/temperature' },
  { label: '05', href: '/contents/project' },
  { label: '06', href: '/contents/resources' },
];

export default function FooterNav() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const index = pages.findIndex(page => page.href === currentPath);
    setCurrentIndex(index);
  }, [router.pathname]);

  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 && currentIndex !== 6 ? pages[currentIndex + 1] : null;

  return (
    <footer className="mt-16 p-4 bg-gray-900 text-white">
      <nav className="flex justify-between items-center">
        <div className="space-x-4">
          {previousPage ? (
            <Link href={previousPage.href} className="nav-link text-lg font-semibold text-white no-after">
              Previous
            </Link>
          ) : (
            <div className="nav-link text-lg font-semibold text-gray-500 no-after">Previous</div>
          )}
        </div>
        <div className="space-x-4 flex">
          {pages.map(page => (
            <Link key={page.label} href={page.href} className="nav-link text-lg font-semibold text-white">
              {page.label}
            </Link>
          ))}
        </div>
        <div className="space-x-4">
          {nextPage ? (
            <Link href={nextPage.href} className="nav-link text-lg font-semibold text-white no-after">
              Next
            </Link>
          ) : (
            <div className="nav-link text-lg font-semibold text-gray-500 no-after"></div>
          )}
        </div>
      </nav>
      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -1rem;
          height: 2px;
          width: 2rem;
          background: white;
          transform: translateY(-50%);
        }
        .nav-link.no-after::after {
          display: none;
        }
      `}</style>
    </footer>
  );
}
