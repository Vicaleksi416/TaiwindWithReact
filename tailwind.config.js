/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './public/**/*.{html,js,jsx}',
    './styles/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        nunito: ['Nunito'],
      },
    },
  },
  plugins: [],
};
