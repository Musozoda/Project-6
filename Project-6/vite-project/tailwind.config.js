/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'xl':  {"max":'1035px'} ,
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '950px'} ,
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '735px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '596px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

