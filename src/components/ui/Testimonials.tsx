import { testimonials } from '@/lib/testimonials';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="container mx-auto px-4" aria-label="Testimonials">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center text-slate-800 dark:text-slate-100">Testimonials</h2>
        <div className="grid gap-7 sm:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative bg-white dark:bg-slate-850 rounded-lg border border-slate-100 dark:border-slate-800 px-6 py-6 shadow group">
              <FaQuoteLeft className="text-primary text-2xl mb-3" />
              <blockquote className="text-slate-800 dark:text-slate-100 text-base leading-relaxed">{t.quote}</blockquote>
              <div className="mt-4 border-t pt-2 text-sm text-slate-600 dark:text-slate-300">
                <b>{t.name}</b> &ndash; <span className="italic">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
