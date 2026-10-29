import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, top / height) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive ? 'bg-gold-gradient text-navy-950' : 'text-ink-muted hover:text-ink'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
      isActive ? 'bg-gold-400/10 text-gold-300' : 'text-ink-muted hover:bg-navy-800/60 hover:text-ink'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-navy-600/40 bg-navy-950/85 backdrop-blur-xl py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]'
          : 'border-b border-transparent bg-navy-950/40 py-5'
      }`}
    >
      <span
        className="absolute left-0 top-0 h-px bg-gold-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />

      <nav className="container-px flex items-center justify-between" aria-label="Primary">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${profile.name} home`}>
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gold-400/40 bg-navy-800 transition-all duration-300 group-hover:border-gold-400 group-hover:shadow-gold-soft sm:h-12 sm:w-12">
            <img
              src="/Futuristic_Gold_SmartDevs_Emblem.png"
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden font-display text-lg font-bold tracking-tight text-ink sm:block">
            {profile.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 rounded-full border border-navy-600/40 bg-navy-800/40 px-2 py-1.5 backdrop-blur-md xl:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-gold hidden sm:inline-flex">
            Contact Me
            <ArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-navy-600 bg-navy-800/60 text-ink transition-colors hover:border-gold-400/60 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="relative h-5 w-5">
              <Menu
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <X
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px mt-3 pb-6">
          <div className="rounded-2xl border border-navy-600/40 bg-navy-900/95 p-3 backdrop-blur-xl">
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} className={mobileLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold mt-3 w-full">
              Contact Me
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
