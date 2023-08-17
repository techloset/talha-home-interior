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
  
        // 'md': '1020px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1920px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

