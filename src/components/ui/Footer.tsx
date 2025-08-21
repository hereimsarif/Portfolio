import SocialIcons from './SocialIcons';
import getCurrentYear from '@/utils/getCurrentYear';
import Link from 'next/link';

const footerLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: 'github', url: 'https://github.com/shakeeb' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/shakeeb' },
  { icon: 'twitter', url: 'https://twitter.com/shakeebdev' },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark/95 border-t border-slate-100 dark:border-slate-850 py-7 mt-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex-1 flex gap-4 justify-center md:justify-start mb-2 md:mb-0">
          {footerLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-semibold text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex-1 flex gap-2 items-center justify-center md:justify-end">
          <SocialIcons links={socials} size={22} />
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-xs text-slate-400 mt-3">
        &copy; {getCurrentYear()} Shakeeb. All rights reserved.
      </div>
    </footer>
  );
}
