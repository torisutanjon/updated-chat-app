import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        semiGray: "#5F5F5F",
        lightSemiViolet: "#89729E",
        semiLightWhite: "#c4c4c4",
        semiBlack: "#202020",
        semiOrange: "#FFA500",
        semiWhite: "#BCBCBC",
        semiRed: "#ff8a8a",
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
