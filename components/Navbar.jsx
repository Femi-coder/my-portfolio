// components/Navbar.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close drawer on route change or ESC
  useEffect(() => {
    const close = () => setOpen(false);
    router.events?.on('routeChangeStart', close);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      router.events?.off('routeChangeStart', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [router.events]);

  return (
    <>
      {/* BIG floating burger on mobile */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
        aria-expanded={open}
        className={`md:hidden fixed top-4 left-4 z-[60] group
          h-14 w-14 rounded-2xl bg-blue-600/90 backdrop-blur
          shadow-[0_8px_30px_rgba(2,132,199,0.35)]
          ring-1 ring-white/20
          active:scale-[.98] transition-all duration-200`}
      >
        {/* Animated hamburger → X */}
        <span className="relative block mx-auto h-6 w-7">
          <span
            className={`absolute left-0 top-0 h-[3px] w-7 rounded bg-white transition-all duration-300
              ${open ? 'translate-y-[9px] rotate-45' : 'translate-y-0'} `}
          />
          <span
            className={`absolute left-0 top-1/2 h-[3px] w-7 -translate-y-1/2 rounded bg-white transition-all duration-200
              ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`absolute left-0 bottom-0 h-[3px] w-7 rounded bg-white transition-all duration-300
              ${open ? '-translate-y-[9px] -rotate-45' : 'translate-y-0'}`}
          />
        </span>
      </button>

      {/* Dim background when open (mobile) */}
      <div
        role="presentation"
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm transition-opacity
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Side nav */}
      <nav
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-800 to-blue-900
          text-white flex flex-col items-center py-10 shadow-2xl z-[55]
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Brand */}
        <div className="w-full px-6 flex items-center justify-between md:justify-center">
          <h1 className="text-3xl font-extrabold tracking-tight">Portfolio</h1>

          {/* Put a smaller close button inside drawer for mobile */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
            className="md:hidden h-10 w-10 rounded-xl bg-white/10 hover:bg-white/15 transition-colors
                       grid place-items-center focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="mt-10 space-y-3 w-full px-6">
          {navItems.map((item) => {
            const active = router.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-center md:justify-start gap-3
                    w-full py-3.5 px-4 rounded-xl text-lg transition
                    focus:outline-none focus:ring-2 focus:ring-white/50
                    ${active
                      ? 'bg-blue-600 font-semibold shadow-lg'
                      : 'hover:bg-white/10 active:bg-white/15'}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
