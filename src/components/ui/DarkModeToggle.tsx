"use client";
import { useEffect, useState } from 'react';
import { FaRegMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // On mount, set system/dark
  useEffect(() => {
    setMounted(true);
    const isDark =
      typeof window !== 'undefined' &&
      (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
    setEnabled(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggle() {
    setEnabled((v) => {
      const next = !v;
      if (next) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  }
  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors text-primary"
      onClick={toggle}
    >
      {enabled ? <FaSun size={20} /> : <FaRegMoon size={19} />}
    </button>
  );
}
