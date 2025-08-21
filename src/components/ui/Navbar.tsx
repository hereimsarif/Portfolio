"use client";
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import ScrollToSection from '@/components/ScrollToSection';
import ActiveLink from '@/components/ActiveLink';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur bg-white/70 dark:bg-dark/90 border-b border-slate-100 dark:border-slate-850 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <Link href="#home" className="font-bold text-xl text-primary tracking-widest">
          <span>Shakeeb.</span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-7 items-center">
          {navLinks.map((link) => (
            <ActiveLink key={link.id} to={link.id} className="relative font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
              {link.label}
            </ActiveLink>
          ))}
          <DarkModeToggle />
        </div>
        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-2">
          <DarkModeToggle />
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {/* Mobile sliding menu */}
        <div
          className={`fixed top-0 right-0 z-50 h-full w-64 bg-white dark:bg-dark border-l border-slate-100 dark:border-slate-850 shadow-lg p-7 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        >
          <button
            className="absolute top-6 right-6 p-1 rounded focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={28} />
          </button>
          <ul className="flex flex-col gap-8 mt-16">
            {navLinks.map((link) => (
              <li key={link.id}>
                <ActiveLink
                  to={link.id}
                  className="block py-2 text-lg text-slate-800 dark:text-slate-200 font-semibold hover:text-primary dark:hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Overlay */}
        {menuOpen && (
          <button
            aria-label="Overlay"
            className="fixed inset-0 bg-black/20 z-40 cursor-pointer md:hidden"
            onClick={() => setMenuOpen(false)}
            tabIndex={-1}
          />
        )}
      </nav>
    </header>
  );
}
