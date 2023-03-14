/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#F4F4F4",
        color2: "#4DE599",
        color3: "#224957",
        color4: "#093545",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/line-clamp"),
  ],
  daisyui: {
    themes: false,
  },
};
