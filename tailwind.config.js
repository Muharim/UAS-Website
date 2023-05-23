/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            offWhite: 'hsl(36, 100%, 99%)', 
            softOrange: 'hsl(35, 77%, 62%)',
            softRed: 'hsl(5, 85%, 63%)',
            grayishBlue: 'hsl(233, 8%, 79%)',
            DGB: 'hsl(236, 13%, 42%)',
            VDB: 'hsl(240, 100%, 5%)',
          },
          fontFamily: {
            'Inter': ["'Inter'", 'sans-serif'],
          },
          screens: {
            'Laptop': '1440px',
          },
    },
  },
  plugins: [],
}