/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fadeOut: {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn .2s ease-in",
        fadeOut: "fadeIn .2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
