/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',     // indigo-500
        dark: '#0f172a',        // slate-900
        light: '#f8fafc',       // slate-50
        slate: {
          850: '#1e293b',      // custom darker slate
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        gradient: 'gradient 6s ease infinite'
      }
    },
  },
  plugins: [],
}
