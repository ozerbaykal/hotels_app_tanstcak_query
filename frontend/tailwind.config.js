/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to right bottom, rgba(0,0,0,0.8),rgb(108, 62, 42,0.4)),url('/oda6.jpg')",
      },



    },
  },
  plugins: [],
}