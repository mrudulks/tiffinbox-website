/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      tiffinBg:"#F5F0E3",
      tiffinYellow:"#FCB002",
      tiffinTextPrimary:"#151515",
      tiffinTextYellow:"#CFA030"
    }
  },
  plugins: [],
}

