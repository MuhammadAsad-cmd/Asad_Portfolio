/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // container: {
      //   center: true,
      //   padding: "1rem",
      // },
      // fontFamily: {
      //   sans: [
      //     "-apple-system",
      //     "system-ui",
      //     "BlinkMacSystemFont",
      //     "Segoe UI",
      //     "Roboto",
      //     "Helvetica Neue",
      //     "Fira Sans",
      //     "Ubuntu",
      //     "Oxygen",
      //     "Oxygen Sans",
      //     "Cantarell",
      //     "Droid Sans",
      //     "Apple Color Emoji",
      //     "Segoe UI Emoji",
      //     "Segoe UI Symbol",
      //     "Lucida Grande",
      //     "Helvetica",
      //     "Arial",
      //     "sans-serif",
      //   ],
      // },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, hsla(0, 0%, 100%, 0.32), #fff)",
      },
      colors: {
        darkbg: "#1b1f23",
        darkSecondaryGray: "#373a3d",
        discordDark: "#2c2f33",
        darkPrimaryGray: "#a4a5a7",
        lightbg: "#f4f5f7",
        lightPrimarytext: "#33383d",
        lightSecondarytext: "#5a5f65",
        lightBorder: "#d1d3d5",
        SkyBlue: "#71b7fb",
        darkHover: "#91c9ff",
        lightHover: "#5aa6e8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
