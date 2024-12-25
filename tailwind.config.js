/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          "md": "800px",
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      }
    },
  },
  plugins: [],
}

