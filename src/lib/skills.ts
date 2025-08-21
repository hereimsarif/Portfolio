import { FaReact, FaNodeJs, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiJavascript, SiRedux } from 'react-icons/si';

export const skills = [
  {
    icon: <FaReact className="text-sky-400" />,
    label: 'React',
  },
  {
    icon: <SiNextdotjs className="text-slate-900 dark:text-slate-100" />,
    label: 'Next.js',
  },
  {
    icon: <FaNodeJs className="text-green-600" />,
    label: 'Node.js',
  },
  {
    icon: <SiMongodb className="text-green-700" />,
    label: 'MongoDB',
  },
  {
    icon: <SiTailwindcss className="text-sky-500" />,
    label: 'Tailwind CSS',
  },
  {
    icon: <SiTypescript className="text-blue-600" />,
    label: 'TypeScript',
  },
  {
    icon: <SiJavascript className="text-yellow-400" />,
    label: 'JavaScript',
  },
  {
    icon: <SiRedux className="text-purple-500" />,
    label: 'Redux',
  },
  {
    icon: <FaGithub className="text-slate-900 dark:text-slate-100" />,
    label: 'Git/GitHub',
  },
  {
    icon: <FaCss3Alt className="text-blue-600" />,
    label: 'CSS3',
  },
];
