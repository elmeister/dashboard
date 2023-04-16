/** @type {import('tailwindcss').Config} */
/* eslint-disable unicorn/prefer-module */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: 'white',
      'ktl-gray-1': '#828282',
      'ktl-gray-3': '#F4F2F3',
      'ktl-blue-dark': '#02163D',
      'ktl-red': '#EE5353',
      'ktl-green': '#57BB80',
      'gradient-start': '#FF00A1',
      'gradient-end': '#FFAC30',
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}
