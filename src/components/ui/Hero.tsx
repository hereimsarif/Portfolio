"use client";
import { motion } from 'framer-motion';
import TypedText from '@/components/TypedText';

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-center items-center px-4 pb-8 pt-10 sm:pt-24 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated bg gradient circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-300 opacity-30 rounded-full blur-3xl animate-gradient z-0" />
      <div className="absolute -bottom-20 -right-16 w-64 h-64 bg-primary opacity-20 rounded-full blur-2xl animate-gradient z-0" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-slate-100">
          Hi, I’m <span className="text-primary">Shakeeb</span>
          <br />
          <span className="inline-block mt-2">
            <TypedText
              phrases={[
                'Full Stack MERN Developer',
                'React Enthusiast',
                'Next.js Specialist',
                'Problem Solver',
                'Open Source Contributor',
              ]}
              ariaLabel="Roles"
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-slate-700 dark:text-slate-300">
          I build performant web apps with modern JavaScript stacks.<br className="hidden md:block" />
          Clean code. Beautiful UI/UX. Scalable solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 rounded bg-primary text-white font-semibold shadow-sm hover:bg-indigo-600 transition-colors focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:focus:ring-indigo-700"
            aria-label="View Resume"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:focus:ring-indigo-700"
            aria-label="Get In Touch"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
