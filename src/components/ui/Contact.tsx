"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import emailValidator from '@/utils/emailValidator';

const social = [
  { icon: 'github', url: 'https://github.com/shakeeb' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/shakeeb' },
  { icon: 'twitter', url: 'https://twitter.com/shakeebdev' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('All fields are required.');
      return;
    }
    if (!emailValidator(form.email)) {
      setError('Please enter a valid email.');
      return;
    }
    setStatus('loading');
    const res = await fetch('/api/contact/route', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
      setError('Failed to send. Please try again.');
    }
  }

  return (
    <section className="container mx-auto px-4" aria-label="Contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center text-slate-800 dark:text-slate-100">Contact</h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-14">
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-4 bg-white dark:bg-slate-850 rounded-xl p-7 border border-slate-100 dark:border-slate-800 shadow"
            aria-label="Contact form"
            noValidate
          >
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="rounded border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-slate-100"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              required
            />
            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="rounded border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-slate-100"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              required
            />
            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="rounded border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-slate-100 resize-none"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              required
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {status === 'success' && <div className="text-green-600 text-sm">Message sent! Thank you.</div>}
            <button
              type="submit"
              className="mt-3 bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-indigo-600 transition-colors focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 disabled:opacity-70 disabled:pointer-events-none"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start md:pl-4">
            <div>
              <div className="font-semibold text-slate-900 dark:text-slate-100 text-base mb-2">Email</div>
              <a href="mailto:shakeeb@example.com" className="text-primary hover:underline">shakeeb@example.com</a>
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-slate-100 text-base mb-2">Phone</div>
              <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-slate-100 text-base mb-1">Social</div>
              <SocialIcons links={social} size={28} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
