import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg transition"
        aria-label="Toggle navigation"
      >
        {open ? '✕' : '☰'}
      </button>

      <nav
        className={`fixed top-0 left-0 h-full w-56 bg-gradient-to-b from-blue-800 to-blue-900 text-white flex flex-col items-center py-10 shadow-2xl transform transition-transform duration-300 z-40
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <h1 className="text-3xl font-extrabold mb-12 tracking-tight">Portfolio</h1>
        <ul className="space-y-6 w-full px-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block w-full text-center py-2 px-4 rounded-lg text-lg transition duration-200
                  ${router.pathname === item.path ? 'bg-blue-600 font-semibold shadow-md' : 'hover:bg-blue-700'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}