/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "min-tablet": "540",
    },
  },
  plugins: [],
  darkMode: "class",
};
