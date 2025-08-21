import Image from 'next/image';
import { motion } from 'framer-motion';

const highlights = [
  {
    label: 'Experience',
    value: '4+ yrs professional',
  },
  {
    label: 'Education',
    value: 'B.E. Computer Science',
  },
  {
    label: 'Passions',
    value: 'UI/UX, Open Source, Teaching',
  },
];

export default function About() {
  return (
    <section className="container mx-auto px-4" aria-label="About">
      <motion.div
        className="flex flex-col lg:flex-row gap-8 lg:items-center max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <Image
            src="/profile.jpg"
            alt="Shakeeb's Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-primary shadow-lg w-32 h-32 object-cover"
          />
        </div>
        <div className="flex-1 mt-4 lg:mt-0">
          <h2 className="font-bold text-2xl md:text-3xl mb-2 text-slate-800 dark:text-slate-100">About Me</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            I’m a passionate full stack developer with over 4 years professional experience, specializing in building robust, scalable, and beautiful web applications using the MERN stack. I love collaborating on teams, mentoring others, and making tech accessible for everyone.
          </p>
          <div className="flex gap-8 flex-wrap">
            {highlights.map(h => (
              <div key={h.label} className="mb-2">
                <span className="block text-xs uppercase text-slate-500 dark:text-slate-400 tracking-widest">{h.label}</span>
                <span className="block text-base font-semibold text-slate-800 dark:text-slate-100">{h.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
