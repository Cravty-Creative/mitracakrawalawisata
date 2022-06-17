/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        secondary: ["Mulish", "sans-serif"],
      },
      color: {
        primary: "#383B5A",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "2.5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
