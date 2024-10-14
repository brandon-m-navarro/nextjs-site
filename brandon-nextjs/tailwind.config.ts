import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        green: "rgb(129, 169, 136)",
        greenHover: "rgb(129, 169, 136, 0.5)",

        arsenic: "rgb(53, 54, 74)",

        mask: "rgb(0, 0, 0, 0.25)"
      },
      dropShadow: {
        image: '2px 2px 4px #000'
      }
    },
  },
  plugins: [],
};
export default config;
