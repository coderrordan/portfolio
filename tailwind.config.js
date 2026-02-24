/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0a0a0a',
        bg2:     '#0f0f0f',
        bg3:     '#141414',
        accent:  '#e8720c',
        accent2: '#f59e0b',
        cream:   '#f0ece4',
        muted:   '#6b6560',
        border:  '#1e1e1e',
        card:    '#111111',
        // Terminal colors
        tgreen:  '#4ade80',
        tblue:   '#60a5fa',
        tpurple: '#c084fc',
        tgray:   '#8b949e',
      },
      fontFamily: {
        sans:  ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono:  ['Space Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 7.5vw, 7.5rem)',
        'section': 'clamp(2.5rem, 5vw, 4.5rem)',
        'cta': 'clamp(3rem, 7vw, 6.5rem)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'blink':      'blink 1s step-end infinite',
        'marquee':    'marquee 22s linear infinite',
        'scroll-line':'scrollLine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
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
        'btn': 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
        'btn-sm': 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      },
    },
  },
  plugins: [],
}
