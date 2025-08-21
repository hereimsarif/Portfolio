"use client";
import React, { useEffect, useRef, useState } from 'react';

interface ActiveLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string; // section id
  children: React.ReactNode;
}

function isInViewport(id: string): boolean {
  if (typeof window === 'undefined') return false;
  const section = document.getElementById(id);
  if (!section) return false;
  const rect = section.getBoundingClientRect();
  const viewMiddle = window.innerHeight / 2;
  return rect.top <= viewMiddle && rect.bottom >= 80;
}

export default function ActiveLink({ to, children, className = '', ...props }: ActiveLinkProps) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function onScroll() {
      setActive(isInViewport(to));
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [to]);
  return (
    <a
      href={`#${to}`}
      className={`${className} ${active ? 'text-primary underline underline-offset-4 font-bold' : ''}`}
      {...props}
    >
      {children}
    </a>
  );
}
