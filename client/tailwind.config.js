/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    flowbite.plugin(),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};
