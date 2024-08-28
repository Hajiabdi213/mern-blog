/** @type {import('tailwindcss').Config} */

// const flowbite = require("flowbite-react/tailwind");
import flowbite from "flowbite-react/tailwind";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), tailwindScrollbar()],
};
