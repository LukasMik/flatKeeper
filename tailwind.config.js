/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'wFlatItem': '28rem',
        'hFlatItem': '31rem',
        'hFlatDetail': '40rem',
      },
    },
  },
  plugins: [],
}

