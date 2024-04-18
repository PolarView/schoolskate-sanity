/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        primary: "#546EFF",
        primaryHovered: "#5064d3",
        dark: "#191E28",
        whatsapp: "#18D878",
        whatsappHovered: "#1fbf6f",
        ykl: "#FFCB00",
        yklHovered: "#e0b302"
      },
      fontFamily: {
        Roboto: ["Roboto"],
        Unbounded: ["Unbounded"]
      }
    }
  },
  plugins: []
};
