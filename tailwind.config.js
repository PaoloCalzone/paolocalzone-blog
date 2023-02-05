// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./blog/**/*.mdx",
  ],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", ...fontFamily.sans],
      },
    },
  },
};
