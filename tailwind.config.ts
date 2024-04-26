import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        pokeball: "url('./src/assets/images/pokeball.svg')",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#E0E0E0",
        "gray-medium": "#666666",
        primary: "#DC0A2D",
        white: "#FFFFFF",
        bug: "#A7B723",
        dark: "#75574C",
        dragon: "#7037FF",
        electric: "#F9CF30",
        fairy: "#E69EAC",
        fighting: "#C12239",
        fire: "#F57D31",
        flying: "#A891EC",
        ghost: "#70559B",
        grass: "#74CB48",
        ground: "#DEC16B",
        ice: "#9AD6DF",
        normal: "#AAA67F",
        poison: "#A43E9E",
        psychic: "#FB5584",
        rock: "#B69E31",
        steel: "#B7B9D0",
        water: "#6493EB",
      },
    },
  },
  plugins: [],
};
export default config;
