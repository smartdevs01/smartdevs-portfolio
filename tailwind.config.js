/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0F1C',
          900: '#0F1729',
          800: '#111B2E',
          700: '#1B2740',
          600: '#243353',
          500: '#33456B',
          400: '#46578A',
        },
        gold: {
          50: '#FBF7EC',
          100: '#F5EBD0',
          200: '#EBD8A4',
          300: '#E0C47A',
          400: '#D4AF57',
          500: '#C49A3E',
          600: '#A37E31',
          700: '#7E6125',
          800: '#5C4719',
          900: '#3D2F10',
        },
        ink: {
          DEFAULT: '#F5F5F5',
          muted: '#AAB4C5',
          dim: '#7A8499',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'ultra': '0.3em',
      },
      boxShadow: {
        'gold-soft': '0 10px 40px -12px rgba(212, 175, 87, 0.25)',
        'gold-glow': '0 0 0 1px rgba(212,175,87,0.15), 0 20px 60px -20px rgba(212,175,87,0.35)',
        'navy-deep': '0 30px 80px -24px rgba(0, 0, 0, 0.75)',
        'card': '0 12px 40px -16px rgba(0, 0, 0, 0.55)',
        'inset-line': 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E6CD8A 0%, #D4AF57 45%, #B8902F 100%)',
        'gold-sheen': 'linear-gradient(110deg, transparent 30%, rgba(224, 196, 122, 0.35) 50%, transparent 70%)',
        'navy-radial': 'radial-gradient(ellipse 80% 60% at 50% -10%, #1B2740 0%, #0A0F1C 65%)',
        'grid-faint': 'linear-gradient(rgba(212,175,87,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,87,0.05) 1px, transparent 1px)',
        'dot-faint': 'radial-gradient(rgba(170,180,197,0.12) 1px, transparent 1px)',
        'hairline': 'linear-gradient(90deg, transparent, rgba(212,175,87,0.4), transparent)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-breathe': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 1s ease-out both',
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1.1s step-end infinite',
        'marquee': 'marquee 40s linear infinite',
        'glow-breathe': 'glow-breathe 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
