/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        bg:              'var(--nexus-bg-primary)',
        bg2:             'var(--nexus-bg-secondary)',
        surface:         'var(--nexus-bg-surface)',
        elevated:        'var(--nexus-bg-elevated)',
        accent:          'var(--nexus-accent-primary)',
        'accent-hover':  'var(--nexus-accent-hover)',
        'accent-subtle': 'var(--nexus-accent-subtle)',
        cream:           'var(--nexus-text-primary)',
        muted:           'var(--nexus-text-muted)',
        secondary:       'var(--nexus-text-secondary)',
        border:          'var(--nexus-border-default)',
        success:         'var(--nexus-success)',
        info:            'var(--nexus-info)',
        warning:         'var(--nexus-warning)',
        danger:          'var(--nexus-danger)',
      },
      fontFamily: {
        sans:  ['var(--nexus-font-sans)', 'sans-serif'],
        serif: ['var(--nexus-font-serif)', 'serif'],
        mono:  ['var(--nexus-font-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'blink':   'blink 1s step-end infinite',
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
      },
      // clip-path per Button clipped (estratto dal portfolio)
      clipPath: {
        'btn':    'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
        'btn-sm': 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      },
    },
  },
}
