/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#27272A",
        primary: "#48B649",
        para: "#71717A",
        bgPrint: "rgba(72, 182, 73, 0.03)"
      },
    },
  },
  plugins: [],
}