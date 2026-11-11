/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816',
          900: '#0a0e27',
          800: '#0f1535',
          700: '#161d44',
          600: '#1e2756',
        },
        electric: {
          400: '#4f9dff',
          500: '#2d7ff9',
          600: '#1a66e0',
        },
        violetx: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse at 20% 20%, rgba(45,127,249,0.25), transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(139,92,246,0.22), transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(45,127,249,0.15), transparent 60%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(45,127,249,0.5)',
        'glow-violet': '0 0 60px -15px rgba(139,92,246,0.5)',
        card: '0 20px 50px -20px rgba(0,0,0,0.7)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'spin-slow': 'spin-slow 24s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
