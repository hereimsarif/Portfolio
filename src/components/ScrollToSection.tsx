import { useEffect } from 'react';

export default function ScrollToSection({ id }: { id: string }) {
  useEffect(() => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, [id]);
  return null;
}
