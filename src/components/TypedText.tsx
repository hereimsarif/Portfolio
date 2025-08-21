"use client";
import { useEffect, useRef, useState } from 'react';

interface TypedTextProps {
  phrases: string[];
  ariaLabel?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export default function TypedText({
  phrases,
  ariaLabel = 'Typing roles',
  typeSpeed = 65,
  deleteSpeed = 32,
  delay = 1400,
}: TypedTextProps) {
  const [idx, setIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDeleting) {
      if (subIdx < phrases[idx].length) {
        timeout = setTimeout(() => setSubIdx(subIdx + 1), typeSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (subIdx > 0) {
        timeout = setTimeout(() => setSubIdx(subIdx - 1), deleteSpeed);
      } else {
        setIsDeleting(false);
        setIdx((idx + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [subIdx, idx, isDeleting, typeSpeed, deleteSpeed, delay, phrases]);

  useEffect(() => {
    const blinker = setInterval(() => setBlink(b => !b), 450);
    return () => clearInterval(blinker);
  }, []);

  return (
    <span aria-label={ariaLabel} className="inline-block">
      {phrases[idx].substring(0, subIdx)}
      <span className="inline-block w-[1ch]">{blink ? '|' : ' '}</span>
    </span>
  );
}
