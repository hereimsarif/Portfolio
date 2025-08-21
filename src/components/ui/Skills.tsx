import { skills } from '@/lib/skills';
import SkillIcon from './SkillIcon';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section className="container mx-auto px-4" aria-label="Skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 36 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
      >
        <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center text-slate-800 dark:text-slate-100">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {skills.map(skill => (
            <SkillIcon key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
