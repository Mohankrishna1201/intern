module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#e1e0e7",
          500: "#a6a6a6",
          600: "#858585",
          900: "#191a15",
          "900_02": "#2c2a2a",
          "900_01": "#1c1c1c",
        },
        blue_gray: { 100: "#d9d9d9" },
        indigo: { 50: "#ededfa" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        green: { 400: "#54a885" },
        red: { 100: "#ffd5d5" },
        teal: { 300: "#54bd95" },
        yellow: { A400: "#fee900" },
        deep_orange: { 300: "#fe8162" },
        deep_purple: { A200: "#8247ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
        myanmarkhyay: "Myanmar Khyay",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
