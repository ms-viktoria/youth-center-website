/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: 
      // {my_teal : '#00808'}
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
