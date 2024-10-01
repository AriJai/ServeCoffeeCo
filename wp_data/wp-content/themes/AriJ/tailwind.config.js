/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php", "./**/*.php"
  ],
  theme: {
    colors: {
      'padua': '#7dcea0',
    },
    extend: {
      filter: {
        'hue-rotate-284': 'hue-rotate(284deg)',
      },
    },
  },
  variants: {
    filter: ['responsive'],
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

