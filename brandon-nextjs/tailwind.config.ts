import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  darkMode: 'selector',
  theme: {

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        green: "rgb(129, 169, 136)",
        greenHover: "rgb(129, 169, 136, 0.5)",

        arsenic: "rgb(53, 54, 74)",

        mask: "rgb(0, 0, 0, 0.25)",
        maskDarker: "rgb(0, 0, 0, 0.5)",

        dayOrange: "#FF3205",

        nightGold: "rgba(255, 239, 203, 1)",
        night: "#020916",
        nightSoft: "rgb(53, 54, 74)",
        nightPurple: "#86467C",
        nightPurple50: "rgba(134, 70, 124, 0.5)",
        white20: "rgba(255, 255, 255, 0.2)",

        skillBackgroundLight: "rgb(141, 157, 167)",
        skillFillLight: "rgb(11, 57, 72)",

        skillBackgroundDark: "rgb(141, 157, 167)",
        skillFillDark: "rgb(134, 70, 124)",

        imageTextWhite: "rgb(255, 274, 255, 0.95)",
      },
      dropShadow: {
        image: '2px 2px 4px #000'
      }
    },
  },
  plugins: [],
};
export default config;
