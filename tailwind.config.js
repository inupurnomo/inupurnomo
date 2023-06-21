const {spacing} = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
      shorlink: "667px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["SF Mono", "Inter", "sans-serif"],
        descFont: ["Inter", "san-serif"],
        navFont: ["Calibre", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#404258",
        bodyDark: "#404258",
        bodyLight: "#CDC2AE",
        textPrimary: "#FD5D5D",
        textLink: "#0E8388",
        textLight: "#ccd6f6",
        textDark: "#1A120B",
        dark1: "#1B2430",
        dark2: "#394867",
        dark3: "#354259",
        light1: "#E1D4BB",
        light2: "#FCF8E8",
        light3: "#E6BA95",
        hoverColor: "rgba(115, 115, 115, 0.3)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: {color: theme("colors.blue.400")},
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            code: {color: theme("colors.pink.500")},
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: {color: theme("colors.blue.400")},
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: {borderColor: theme("colors.gray.700")},
            ol: {
              li: {
                "&:before": {color: theme("colors.gray.500")},
              },
            },
            ul: {
              li: {
                "&:before": {backgroundColor: theme("colors.gray.500")},
              },
            },
            strong: {color: theme("colors.gray.300")},
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
