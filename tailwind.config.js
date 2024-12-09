/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        josefin:["josefin", 'sans-serif'],
       
      },
      colors:{
        teal:'#18BBC3',
        amber:'#DB8A49',
        cream:'#F5D99A',
        slate:'#3E5A6F'

      }
    },
  },
  plugins: [],
}