// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0f',
          800: '#101016',
          700: '#17171f',
        },
        navy: {
          900: '#080b16',
          800: '#0c1222',
          700: '#121a30',
        },
        gold: {
          200: '#f3e6c4',
          300: '#ecd9ab',
          400: '#d9bd84',
          500: '#c8a96a',
          600: '#a88a4e',
          700: '#7d6537',
        },
        platinum: '#e8e6e1',
        mist: '#a3a2ac',
        fog: '#6f6e79',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        orbit: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(4vw, -3vh, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-3vw, 4vh, 0) scale(0.94)' },
          '100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translate3d(0, 26px, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        modalIn: {
          from: { opacity: '0', transform: 'translate3d(0, 18px, 0) scale(0.975)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0) scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        orbit: 'orbit 38s ease-in-out infinite',
        'spin-slow': 'spinSlow 18s linear infinite',
        rise: 'rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'modal-in': 'modalIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.35s ease both',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
