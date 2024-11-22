/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#FAFAFA",
        marrslight: "#1C9A9A",
        marrsgreen: "#007A7A",
        marrsdark: "#004D4D",
        cardlight: "#F3F4F6",
        bgdark: "#1D2A35",
        carrilight: "#5e95e8",
        carrigreen: "#6290c8",
        carridark: "#376996",
        carddark: "#22323F",
        textlight: "#F9FAFB",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        flying: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0.5rem)" },
          "100%": { transform: "translateY(0)" },
        },
        badge: {
          "100%": {
            transform: "scaleY(1.7) scaleX(1.25)",
            opacity: "0",
          },
        },
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        'waving-hand': 'wave 2s linear infinite',
        'flying-card': 'flying 3s infinite normal',
        'badge-pulse': 'badge 1.5s ease-out infinite',
        "looping-tag": "loop 100s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
