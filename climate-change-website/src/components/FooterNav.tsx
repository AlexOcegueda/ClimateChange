'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const pages = [
  { label: '00', name: 'Home', href: '/' },
  { label: '01', name: 'Introduction', href: '/contents/introduction' },
  { label: '02', name: 'Sea Levels', href: '/contents/sealevels' },
  { label: '03', name: 'CO2 Levels', href: '/contents/co2' },
  { label: '04', name: 'Temperature', href: '/contents/temperature' },
  { label: '05', name: 'Project', href: '/contents/project' },
  { label: '06', name: 'Resources', href: '/contents/resources' },
];

export default function FooterNav() {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = pathname;
    const index = pages.findIndex(page => page.href === currentPath);
    setCurrentIndex(index);
  }, [pathname]);

  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 && currentIndex !== 6 ? pages[currentIndex + 1] : null;

  return (
    <footer className="mt-16 p-4 bg-gray-900 text-white relative">
      <nav className="flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          {previousPage ? (
            <Link href={previousPage.href} className="nav-link text-lg font-semibold text-white no-after">
              Previous
            </Link>
          ) : (
            <div className="nav-link text-lg font-semibold text-gray-500 no-after">Previous</div>
          )}
        </div>
        <div className="hidden md:flex space-x-4 flex">
          {pages.map(page => (
            <Link key={page.label} href={page.href} className="nav-link text-lg font-semibold text-white">
              {page.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          {nextPage ? (
            <Link href={nextPage.href} className="nav-link text-lg font-semibold text-white no-after">
              Next
            </Link>
          ) : (
            <div className="nav-link text-lg font-semibold text-gray-500 no-after">Next</div>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-btn text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="close-btn" onClick={() => setIsMenuOpen(false)}>&times;</div>
          <ul>
            {pages.map(page => (
              <li key={page.label}>
                <Link href={page.href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
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
        .hamburger-btn {
          font-size: 24px;
          cursor: pointer;
        }
        .mobile-nav {
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #111827;
          z-index: 999;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .mobile-nav ul {
          list-style: none;
          text-align: center;
        }
        .mobile-nav li {
          margin: 1rem 0;
        }
        .mobile-nav a {
          color: #F1BF98;
          text-decoration: none;
          font-size: 1.5rem;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-size: 2rem;
          color: #FFFFFF;
          cursor: pointer;
        }
      `}</style>
    </footer>
  );
}
