import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className="container mx-auto px-4" aria-label="Projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 38 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
      >
        <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center text-slate-800 dark:text-slate-100">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
