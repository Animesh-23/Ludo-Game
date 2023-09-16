/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ludo-bg": "url('src/assests/bg.png')",
      },
    },
  },
  plugins: [],
};
