/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e76f51',
          dark: '#e9c46a',
        },
        secondary: {
          light: '#264653',
          dark: '#e9c46a',
        },
        accent: '#e76f51',
        background: {
          light: '#f8f9fa',
          dark: '#264653',
        },
        text: {
          light: '#264653',
          dark: '#f8f9fa',
        },
      },
    },
  },
  plugins: [],
};