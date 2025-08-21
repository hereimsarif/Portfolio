import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Shakeeb's Portfolio",
  description: 'Full Stack MERN Developer Portfolio',
  openGraph: {
    title: "Shakeeb's Portfolio",
    description: 'Full Stack MERN Developer Portfolio',
    images: ['/og-image.png'],
    type: 'website',
    url: 'https://yourdomain.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shakeeb's Portfolio",
    description: 'Full Stack MERN Developer Portfolio',
    images: ['/og-image.png'],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light dark:bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}
