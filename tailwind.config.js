/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        bglight: "#F9FAFB",
        marrslight: "#1C9A9A",
        marrsgreen: "#007A7A",
        marrsdark: "#004D4D",
        cardlight: "#EFF3F3",

        // bgdark: "#2D2D2D",
        bgdark: "#1D2A35",
        // carrilight: "#57DCB4",
        // carrigreen: "#05CE91",
        // carridark: "#00835B",
        carrilight: "#5e95e8",
        carrigreen: "#6290c8",
        carridark: "#376996",
        // carddark: "#383838",
        carddark: "#22323F",
        textlight: "#F9FAFB",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
