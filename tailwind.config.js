/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: 'rgb(var(--color-burgundy) / <alpha-value>)',
        navy: 'rgb(var(--color-navy) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(var(--color-navy), 0.7), rgba(var(--color-navy), 0.4)), url('/images/SCHIAPARELLI_2022.jpg')",
      },
    },
  },
  plugins: [],
};