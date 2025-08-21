import React from 'react';
import { motion } from 'framer-motion';

interface SkillIconProps {
  icon: React.ReactNode;
  label: string;
}

export default function SkillIcon({ icon, label }: SkillIconProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 group"
      whileHover={{ scale: 1.14, rotate: -5 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 240 }}
      tabIndex={0}
      aria-label={label}
      role="img"
    >
      <div className="text-4xl md:text-5xl text-primary mb-1 transition-transform">
        {icon}
      </div>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
        {label}
      </span>
    </motion.div>
  );
}
