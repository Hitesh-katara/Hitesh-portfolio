
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#0B0B0F",
          card: "#15151D",
          purple: "#A78BFA",
          violet: "#C4B5FD",
          pink: "#C4B5FD",
          lime: "#A78BFA",
          cream: "#0B0B0F",
          muted: "#A5A5B5",
          border: "#292936",
          "border-light": "#39304F",
        },
      },
    },
  },
  plugins: [],
};
