/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        //gradients
        "gradient-primary": "linear-gradient(to bottom, #3a7bd5, #8cd9ff)",
        "gradient-black": "linear-gradient(to bottom, #0f0f0f, #1e1e1e)",
        "button-gradient": "linear-gradient(to right, #6B85BC, #a4b8e1)",
      },
      colors: {
        //dark theme colors
        "primary-dark": "#0f0f0f",
        "secondary-dark": "#1c1c1c",
        "light-dark": "#353535",
        "extra-light": "#949494",

        //light theme colors
        "primary-blue": "#365486",
        "secondary-blue": "#6B85BC",
        "light-blue": "#E3F0FF",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
