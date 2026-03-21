/** @type {import('tailwindcss').Config} */
import preset from './src/nexus-ui/tailwind.preset.js'

export default {
  presets: [preset],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Portfolio-specific aliases (not in preset but used in section components)
        accent2: 'var(--nexus-accent-hover)',  // Navbar.jsx: hover:bg-accent2
        bg3:     'var(--nexus-bg-elevated)',   // Newsletter.jsx: bg-bg3
      },
      fontSize: {
        'hero':    'clamp(3rem, 7.5vw, 7.5rem)',
        'section': 'clamp(2.5rem, 5vw, 4.5rem)',
        'cta':     'clamp(3rem, 7vw, 6.5rem)',
      },
      animation: {
        // fade-up and blink come from the preset
        'marquee':     'marquee 22s linear infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
      },
      keyframes: {
        // fadeUp and blink come from the preset
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%':      { transform: 'scaleY(0.5)', opacity: '0.3' },
        },
      },
      clipPath: {
        'btn':    'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
        'btn-sm': 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      },
    },
  },
  plugins: [],
}
