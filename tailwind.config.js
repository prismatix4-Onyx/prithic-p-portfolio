/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040810',
          900: '#070E1A',
          850: '#0B1526',
          800: '#0F1E36',
          700: '#1A2E4F',
        },
        sky: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
          glow: 'rgba(56, 189, 248, 0.25)',
          border: 'rgba(56, 189, 248, 0.18)',
        },
        cyan: {
          cyber: '#06B6D4',
          glow: 'rgba(6, 182, 212, 0.25)',
        },
        indigo: {
          accent: '#6366F1',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'terminal-scan': 'scan 6s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
}