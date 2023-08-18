/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '720px',
        // => @media (min-width: 640px) { ... }
  
        'slg':'990px',

        'md': '1090px',
        // => @media (min-width: 768px) { ... }

        'lg': '1920px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        // '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        popins: ['Poppins'],
      },
      fontFamily:{
       popinsmedium:['Poppins' ]
      } ,
      // fontFamily:{
      //  popinsSemiBold:['Poppins', "sans-serif"]
      // } ,
    },
  },
  plugins: [],
}

