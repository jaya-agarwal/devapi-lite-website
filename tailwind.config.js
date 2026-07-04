export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: { primary: '#0d0e14', secondary: '#13141c', tertiary: '#1a1b26' },
        border: { subtle: '#1e2030', default: '#2a2d3e', strong: '#3d4060' },
        accent: { DEFAULT: '#6c8fff', purple: '#a855f7' },
        text: { primary: '#e2e4f0', secondary: '#8b8fa8', muted: '#4a4d62' },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ["'Cascadia Code'", "'Fira Code'", 'ui-monospace', 'monospace'],
      },
    },
  },
}
