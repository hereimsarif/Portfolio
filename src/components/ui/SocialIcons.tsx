import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const iconMap: Record<string, JSX.Element> = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
};

interface LinkItem {
  icon: keyof typeof iconMap;
  url: string;
}

export default function SocialIcons({ links, size = 25 }: { links: LinkItem[]; size?: number }) {
  return (
    <div className="flex gap-3">
      {links.map((l) => (
        <a
          key={l.icon}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.icon}
          className="text-primary hover:text-indigo-600 dark:hover:text-indigo-500"
        >
          {React.cloneElement(iconMap[l.icon], { size })}
        </a>
      ))}
    </div>
  );
}
