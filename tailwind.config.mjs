/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Enhanced professional palette with better contrast
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#0c1e47',
        },
        accent: {
          50: '#faf5ff',
          600: '#a855f7',
          700: '#9333ea',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          600: '#525252',
          700: '#404040',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'Fira Code',
          'Courier New',
          'monospace',
        ],
      },
      spacing: {
        // Add custom spacing for sections
        section: '5rem',
      },
    },
  },
  plugins: [],
}
