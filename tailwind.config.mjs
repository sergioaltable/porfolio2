/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#666666',
        accent: '#0066FF',
        light: '#FFFFFF',
        dark: '#111111',
        'gray-light': '#F5F5F5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1' }],
        'body': ['1.125rem', { lineHeight: '1.75' }]
      },
      maxWidth: {
        'prose': '680px'
      }
    }
  },
  plugins: []
};