/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
      },

    },
  },
  plugins: [],
}

