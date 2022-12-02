/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/src/assets/Img/bg.png')",
      },
      colors: {
        text: "#27272A",
        primary: "#48B649",
        para: "#71717A",
        bgPrint: "rgba(72, 182, 73, 0.03)",
        bgCard: "rgba(255, 255, 255, 0.6)",
        shCard: "0px 1px 24px rgba(0, 0, 0, 0.05)",
        borCard: "rgba(228, 228, 231, 0.5)"
      },
    },
  },
  plugins: [],
}