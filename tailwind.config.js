/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-yellow': '#febd59',
        'deep-black': '#000000',
        'warm-gray': '#1a1a1a',
        'medium-gray': '#333333',
        'warm-brown': '#2e1f0e',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};