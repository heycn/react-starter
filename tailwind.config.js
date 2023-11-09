/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#0066ff',
        'dark': '#222',
        'light': '#fff',
        'back': '#000',
        'back-2': '#222',
        'success': '#00ff66',
        'danger': '#ff0000',
      },
    },
  },
  plugins: [],
}
