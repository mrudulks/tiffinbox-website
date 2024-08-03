/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Qebil", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      tiffinBg: "#F5F0E3",
      tiffinYellow: "#FCB002",
      tiffinTextPrimary: "#151515",
      tiffinTextYellow: "#CFA030",
    },
  },
  plugins: [],
};
