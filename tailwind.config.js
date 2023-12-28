/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "paleta-red-900": "#780001",
      "paleta-red-500": "#C10F1F",
      "paleta-bond-200": "#FBF0D4",
      "paleta-blue-900": "#012F47",
      "paleta-blue-500": "#659CBB",
    },
    backdropBlur: {
      xs: "1px",
    },
  },
  plugins: [require("daisyui")],
};
