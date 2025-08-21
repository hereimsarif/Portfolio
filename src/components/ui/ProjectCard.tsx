import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({ image, title, description, techs, github, demo }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-slate-850 rounded-lg shadow group overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col hover:shadow-lg transition-shadow"
      whileHover={{ y: -7, boxShadow: '0px 12px 24px 0px #6366f140' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image src={image} fill alt={title} className="object-cover" sizes="(min-width:640px) 350px, 100vw" />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="flex gap-2 flex-wrap mb-1">
          {techs.map(tech => (
            <span key={tech} className="bg-primary/10 text-primary text-xs rounded px-2 py-0.5 font-semibold">
              {tech}
            </span>
          ))}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-auto text-sm leading-relaxed">{description}</p>
        <div className="flex gap-3 mt-4">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project demo"
              className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
            >
              <FaExternalLinkAlt className="text-base" /> Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project code on GitHub"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-primary font-semibold"
            >
              <FaGithub className="text-base" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
