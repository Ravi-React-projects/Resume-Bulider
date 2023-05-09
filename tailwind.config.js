/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'primary-color':'#1d1e22',
      'primary-forground-color':'#feda6a',
      'secondary-color':'#393f4d',
      'secondary-forground-color':'#d4d4dc',
    },
    extend: {},
  },
  plugins: [],
}

